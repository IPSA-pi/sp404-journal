/**
 * The content layer. Reads the Markdown knowledge base (journal entries and
 * knowledge topics, see SITE-PLAN.md section 1), validates it, and exposes
 * typed accessors that every route renders from.
 *
 * The content root defaults to ../content (relative to site/) and can be
 * changed with the CONTENT_DIR environment variable. Files are read with
 * node:fs rather than import.meta.glob so the root can be configured; this
 * module is therefore server-only (used from +page.server.ts / +layout.server.ts
 * load functions, which are prerendered).
 *
 * Validation problems are collected per file and thrown as one ContentError
 * whose message names every offending file, which fails `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseDocument, isScalar } from 'yaml';
import { lex, renderMarkdown, renderTokens, renderInline, plainText, slugify, type Token, type Tokens } from './markdown.ts';
import { slugifyTag } from './tags.ts';

// ---------------------------------------------------------------- types

export const FACT_STATUSES = ['manual', 'verified', 'unverified'] as const;
export type FactStatus = (typeof FACT_STATUSES)[number];

export interface Provenance {
	learned: string | null;
	/** Journal entry slug the fact came from. */
	entry: string | null;
	/** Title of that entry, when it exists. */
	entryTitle: string | null;
	manual: string | null;
	status: FactStatus | null;
}

export interface Fact {
	html: string;
	provenance: Provenance | null;
}

export type TopicBlock = { kind: 'html'; html: string } | { kind: 'facts'; facts: Fact[] };

export interface TopicSection {
	title: string;
	titleHtml: string;
	id: string;
	blocks: TopicBlock[];
	factCount: number;
}

export interface TopicSummary {
	key: string;
	title: string;
	description: string | null;
	/** Path of the topic file relative to the site directory, or null if it has none yet. */
	file: string | null;
	factCount: number;
	sections: { title: string; titleHtml: string; id: string; factCount: number }[];
}

export interface Topic extends TopicSummary {
	order: number | null;
	intro: TopicBlock[];
	fullSections: TopicSection[];
}

export interface ManualRef {
	title: string;
	url: string;
}

export interface TopicRef {
	key: string;
	title: string;
}

export interface EntrySummary {
	slug: string;
	title: string;
	date: string;
	summary: string | null;
	tags: string[];
	topics: TopicRef[];
	takeawaysHtml: string;
}

export interface Entry extends EntrySummary {
	file: string;
	session: string | null;
	firmware: string | null;
	manualRefs: ManualRef[];
	bodyHtml: string;
}

export interface TagInfo {
	tag: string;
	slug: string;
	count: number;
}

export interface Content {
	root: string;
	rootExists: boolean;
	entries: Entry[];
	topics: Topic[];
	tags: TagInfo[];
	warnings: string[];
}

export class ContentError extends Error {
	problems: string[];
	constructor(problems: string[]) {
		super(
			`Content validation failed (${problems.length} problem${problems.length === 1 ? '' : 's'}):\n` +
				problems.map((p) => `  - ${p}`).join('\n')
		);
		this.name = 'ContentError';
		this.problems = problems;
	}
}

// ---------------------------------------------------------------- paths

export function contentRoot(): string {
	return path.resolve(process.cwd(), process.env.CONTENT_DIR || '../content');
}

function display(file: string): string {
	return path.relative(process.cwd(), file) || file;
}

// ---------------------------------------------------------------- helpers

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*$/;

function isValidDate(s: string): boolean {
	if (!DATE_RE.test(s)) return false;
	const d = new Date(`${s}T00:00:00Z`);
	return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

class Problems {
	errors: string[] = [];
	warnings: string[] = [];
	constructor(private file: string) {}
	error(msg: string) {
		this.errors.push(`${display(this.file)}: ${msg}`);
	}
	warn(msg: string) {
		this.warnings.push(`${display(this.file)}: ${msg}`);
	}
}

interface Frontmatter {
	data: Record<string, unknown>;
	/** Original source text of a top-level scalar (keeps `5.50` and `0123abcd` intact). */
	raw(key: string): string | null;
	body: string;
}

function parseFrontmatter(text: string, p: Problems): Frontmatter | null {
	const m = /^﻿?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(text);
	if (!m) {
		p.error('missing YAML frontmatter (the file must start with a line "---" and the frontmatter must end with "---")');
		return null;
	}
	const doc = parseDocument(m[1]);
	if (doc.errors.length) {
		p.error(`invalid YAML frontmatter: ${doc.errors[0].message.split('\n')[0]}`);
		return null;
	}
	const data = doc.toJS();
	if (data === null || typeof data !== 'object' || Array.isArray(data)) {
		p.error('frontmatter must be a YAML mapping (key: value lines)');
		return null;
	}
	return {
		data: data as Record<string, unknown>,
		raw(key) {
			const node = doc.get(key, true);
			if (node === undefined || node === null) return null;
			if (isScalar(node)) {
				if (node.value === null) return null;
				const src = (node as { source?: string }).source;
				return String(src ?? node.value);
			}
			return null;
		},
		body: m[2]
	};
}

function optionalString(fm: Frontmatter, key: string, p: Problems): string | null {
	const v = fm.data[key];
	if (v === undefined || v === null) return null;
	if (typeof v !== 'string') {
		p.error(`"${key}" must be a string`);
		return null;
	}
	return v.trim() || null;
}

function stringList(fm: Frontmatter, key: string, p: Problems): string[] {
	const v = fm.data[key];
	if (v === undefined || v === null) return [];
	if (!Array.isArray(v) || v.some((x) => typeof x !== 'string' && typeof x !== 'number')) {
		p.error(`"${key}" must be a list of strings, e.g. ${key}: [a, b]`);
		return [];
	}
	return v.map((x) => String(x).trim()).filter(Boolean);
}

function listFiles(dir: string, ext: string): string[] {
	if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(ext) && !f.startsWith('.') && !f.startsWith('_') && f.toLowerCase() !== 'readme.md')
		.sort()
		.map((f) => path.join(dir, f));
}

/** Splits a token list at `## ` headings. */
function splitSections(tokens: Token[]): { intro: Token[]; sections: { heading: Tokens.Heading; tokens: Token[] }[] } {
	const intro: Token[] = [];
	const sections: { heading: Tokens.Heading; tokens: Token[] }[] = [];
	for (const t of tokens) {
		if (t.type === 'heading' && (t as Tokens.Heading).depth === 2) {
			sections.push({ heading: t as Tokens.Heading, tokens: [] });
		} else if (sections.length) {
			sections[sections.length - 1].tokens.push(t);
		} else {
			intro.push(t);
		}
	}
	return { intro, sections };
}

// ---------------------------------------------------------------- topics list

interface TopicDef {
	key: string;
	title: string;
	description: string | null;
}

function readTopicDefs(file: string, errors: string[]): TopicDef[] {
	if (!fs.existsSync(file)) return [];
	const p = new Problems(file);
	const doc = parseDocument(fs.readFileSync(file, 'utf8'));
	if (doc.errors.length) {
		p.error(`invalid YAML: ${doc.errors[0].message.split('\n')[0]}`);
		errors.push(...p.errors);
		return [];
	}
	const data = doc.toJS();
	if (data === null || data === undefined) return [];
	if (!Array.isArray(data)) {
		p.error('must be a YAML list of { key, title } items');
		errors.push(...p.errors);
		return [];
	}
	const defs: TopicDef[] = [];
	const seen = new Set<string>();
	data.forEach((item: unknown, i: number) => {
		const it = item as Record<string, unknown> | null;
		const key = it && typeof it.key === 'string' ? it.key.trim() : '';
		const title = it && typeof it.title === 'string' ? it.title.trim() : '';
		if (!key || !title) {
			p.error(`item ${i + 1} needs a string "key" and "title"`);
			return;
		}
		if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(key)) {
			p.error(`topic key "${key}" must be lowercase letters, digits and hyphens`);
			return;
		}
		if (seen.has(key)) {
			p.error(`duplicate topic key "${key}"`);
			return;
		}
		seen.add(key);
		const description = it && typeof it.description === 'string' ? it.description : null;
		defs.push({ key, title, description });
	});
	errors.push(...p.errors);
	return defs;
}

// ---------------------------------------------------------------- provenance

const PROV_COMMENT = /<!--([\s\S]*?)-->/g;
const PROV_KEYS = ['learned', 'entry', 'manual', 'status'];

/** Parses `learned: 2026-10-13, entry: slug, manual: https://..., status: manual`. */
function parseProvenance(inner: string, p: Problems, context: string): Provenance | null {
	const keyRe = /(?:^|,)\s*([a-z_]+)\s*:\s*/g;
	const marks: { key: string; start: number; valueStart: number }[] = [];
	let m: RegExpExecArray | null;
	const s = inner.trim();
	while ((m = keyRe.exec(s))) marks.push({ key: m[1], start: m.index, valueStart: m.index + m[0].length });
	if (!marks.some((mk) => PROV_KEYS.includes(mk.key))) return null; // some other comment
	const values: Record<string, string> = {};
	marks.forEach((mk, i) => {
		const end = i + 1 < marks.length ? marks[i + 1].start : s.length;
		values[mk.key] = s.slice(mk.valueStart, end).trim().replace(/,$/, '').trim();
	});
	for (const k of Object.keys(values)) {
		if (!PROV_KEYS.includes(k)) p.warn(`${context}: unknown provenance field "${k}"`);
	}
	const prov: Provenance = { learned: null, entry: null, entryTitle: null, manual: null, status: null };
	if (values.learned) {
		if (isValidDate(values.learned)) prov.learned = values.learned;
		else p.error(`${context}: provenance "learned: ${values.learned}" is not a YYYY-MM-DD date`);
	}
	if (values.entry) prov.entry = values.entry;
	if (values.manual) {
		if (/^https?:\/\//.test(values.manual)) prov.manual = values.manual;
		else p.error(`${context}: provenance "manual" must be a URL, got "${values.manual}"`);
	}
	if (values.status) {
		if ((FACT_STATUSES as readonly string[]).includes(values.status)) prov.status = values.status as FactStatus;
		else p.error(`${context}: provenance status "${values.status}" must be one of ${FACT_STATUSES.join(', ')}`);
	} else {
		p.warn(`${context}: provenance has no "status"`);
	}
	return prov;
}

/** Removes provenance comments from a bullet's Markdown, returning the first one found. */
function extractProvenance(src: string, p: Problems, context: string): { text: string; prov: Provenance | null } {
	let prov: Provenance | null = null;
	const text = src.replace(PROV_COMMENT, (whole, inner: string) => {
		const parsed = parseProvenance(inner, p, context);
		if (!parsed) return whole;
		if (!prov) prov = parsed;
		return '';
	});
	return { text: text.trim(), prov };
}

function shortContext(md: string): string {
	const t = plainText(md.split('\n')[0]).replace(/\s+/g, ' ');
	return `bullet "${t.length > 50 ? t.slice(0, 47) + '...' : t}"`;
}

function tokensToBlocks(tokens: Token[], p: Problems, missing: { count: number }): TopicBlock[] {
	const blocks: TopicBlock[] = [];
	let pending: Token[] = [];
	const flush = () => {
		if (pending.length) {
			const html = renderTokens(pending).trim();
			if (html) blocks.push({ kind: 'html', html });
			pending = [];
		}
	};
	for (const t of tokens) {
		if (t.type === 'list') {
			flush();
			const facts: Fact[] = (t as Tokens.List).items.map((item) => {
				const { text, prov } = extractProvenance(item.text, p, shortContext(item.text));
				if (!prov) missing.count++;
				return { html: renderMarkdown(text), provenance: prov };
			});
			blocks.push({ kind: 'facts', facts });
		} else if (t.type === 'html' && /^\s*<!--/.test(t.raw)) {
			// A provenance comment on its own line after a list (not indented under
			// the bullet): attach it to the last bullet if that bullet has none.
			const last = blocks[blocks.length - 1];
			const inner = /<!--([\s\S]*?)-->/.exec(t.raw)?.[1] ?? '';
			if (pending.length === 0 && last?.kind === 'facts' && !last.facts[last.facts.length - 1].provenance) {
				const prov = parseProvenance(inner, p, 'comment after a list');
				if (prov) {
					last.facts[last.facts.length - 1].provenance = prov;
					missing.count--;
					continue;
				}
			}
			// any other comment is dropped from the output
		} else if (t.type === 'space') {
			if (pending.length) pending.push(t);
		} else {
			pending.push(t);
		}
	}
	flush();
	return blocks;
}

function countFacts(blocks: TopicBlock[]): number {
	return blocks.reduce((n, b) => n + (b.kind === 'facts' ? b.facts.length : 0), 0);
}

function readTopic(file: string, def: TopicDef, order: number, errors: string[], warnings: string[]): Topic {
	const p = new Problems(file);
	const text = fs.readFileSync(file, 'utf8');
	const fm = parseFrontmatter(text, p);
	let description = def.description;
	let fileOrder: number | null = null;
	let body = text;
	if (fm) {
		const title = optionalString(fm, 'title', p);
		if (!title) p.warn('frontmatter has no "title"');
		description = optionalString(fm, 'description', p) ?? description;
		const o = fm.data.order;
		if (o !== undefined && o !== null) {
			if (typeof o === 'number') fileOrder = o;
			else p.error('"order" must be a number');
		}
		body = fm.body;
	}
	const missing = { count: 0 };
	const { intro, sections } = splitSections(lex(body));
	const usedIds = new Set<string>();
	const fullSections: TopicSection[] = sections.map((s) => {
		let id = slugify(s.heading.text);
		for (let i = 2; usedIds.has(id); i++) id = `${slugify(s.heading.text)}-${i}`;
		usedIds.add(id);
		const blocks = tokensToBlocks(s.tokens, p, missing);
		return {
			title: plainText(s.heading.text),
			titleHtml: renderInline(s.heading.text),
			id,
			blocks,
			factCount: countFacts(blocks)
		};
	});
	const introBlocks = tokensToBlocks(
		intro.filter((t) => !(t.type === 'heading' && (t as Tokens.Heading).depth === 1)),
		p,
		missing
	);
	if (missing.count > 0) p.warn(`${missing.count} bullet(s) without a provenance comment`);
	errors.push(...p.errors);
	warnings.push(...p.warnings);
	const factCount = countFacts(introBlocks) + fullSections.reduce((n, s) => n + s.factCount, 0);
	return {
		key: def.key,
		title: def.title,
		description,
		file: display(file),
		order: fileOrder ?? order,
		intro: introBlocks,
		fullSections,
		factCount,
		sections: fullSections.map(({ title, titleHtml, id, factCount }) => ({ title, titleHtml, id, factCount }))
	};
}

// ---------------------------------------------------------------- journal

function readEntry(file: string, topicTitles: Map<string, string>, errors: string[], warnings: string[]): Entry | null {
	const p = new Problems(file);
	const slug = path.basename(file, '.md');
	const slugMatch = SLUG_RE.exec(slug);
	if (!slugMatch) p.error('file name must be YYYY-MM-DD-slug.md (lowercase letters, digits and hyphens)');
	const fm = parseFrontmatter(fs.readFileSync(file, 'utf8'), p);
	if (!fm) {
		errors.push(...p.errors);
		return null;
	}

	const title = optionalString(fm, 'title', p);
	if (!title) p.error('missing required field "title"');

	const date = fm.raw('date');
	if (!date) p.error('missing required field "date" (YYYY-MM-DD)');
	else if (!isValidDate(date)) p.error(`"date: ${date}" is not a valid YYYY-MM-DD date`);
	else if (slugMatch && slugMatch[1] !== date) p.warn(`date ${date} does not match the file name date ${slugMatch[1]}`);

	const tags = stringList(fm, 'tags', p);
	const topicKeys = stringList(fm, 'topics', p);
	if (fm.data.topics === undefined) p.warn('no "topics" listed');
	for (const k of topicKeys) {
		if (!topicTitles.has(k)) {
			p.error(
				`unknown topic key "${k}" in "topics" (known: ${[...topicTitles.keys()].join(', ') || 'none; knowledge/_topics.yaml is missing or empty'})`
			);
		}
	}

	const session = fm.raw('session');
	const firmware = fm.raw('firmware');
	const summary = optionalString(fm, 'summary', p);
	if (!summary) p.warn('no "summary"');

	const manualRefs: ManualRef[] = [];
	const mr = fm.data.manual_refs;
	if (mr !== undefined && mr !== null) {
		if (!Array.isArray(mr)) p.error('"manual_refs" must be a list of { title, url }');
		else
			mr.forEach((r: unknown, i: number) => {
				const ref = r as Record<string, unknown> | null;
				if (!ref || typeof ref.url !== 'string' || !/^https?:\/\//.test(ref.url)) {
					p.error(`manual_refs item ${i + 1} needs a "url" starting with http(s)://`);
					return;
				}
				manualRefs.push({ title: typeof ref.title === 'string' && ref.title.trim() ? ref.title.trim() : ref.url, url: ref.url });
			});
	}

	const { sections } = splitSections(lex(fm.body));
	const find = (re: RegExp) => sections.find((s) => re.test(s.heading.text.trim()));
	const takeaways = find(/^key takeaways$/i);
	if (!takeaways) p.warn('no "## Key takeaways" section');
	if (!find(/^question$/i)) p.warn('no "## Question" section');

	errors.push(...p.errors);
	warnings.push(...p.warnings);
	if (p.errors.length || !title || !date) return null;

	return {
		slug,
		file: display(file),
		title,
		date,
		summary,
		tags,
		topics: topicKeys.filter((k) => topicTitles.has(k)).map((key) => ({ key, title: topicTitles.get(key)! })),
		session,
		firmware,
		manualRefs,
		takeawaysHtml: takeaways ? renderTokens(takeaways.tokens.filter((t) => !(t.type === 'html' && /^\s*<!--/.test(t.raw)))) : '',
		bodyHtml: renderMarkdown(fm.body)
	};
}

// ---------------------------------------------------------------- loading

let cache: { signature: string; content: Content } | null = null;

function signature(files: string[]): string {
	return files
		.map((f) => {
			const st = fs.statSync(f);
			return `${f}:${st.size}:${st.mtimeMs}`;
		})
		.join('|');
}

/**
 * Reads and validates everything under the content root. Cached until a file
 * changes (cheap stat check), so the dev server picks up edits.
 * Throws ContentError if any file is malformed.
 */
export function loadContent(): Content {
	const root = contentRoot();
	const rootExists = fs.existsSync(root);
	const journalDir = path.join(root, 'journal');
	const knowledgeDir = path.join(root, 'knowledge');
	const topicsFile = path.join(knowledgeDir, '_topics.yaml');
	const journalFiles = listFiles(journalDir, '.md');
	const topicFiles = listFiles(knowledgeDir, '.md');
	const allFiles = [...journalFiles, ...topicFiles, ...(fs.existsSync(topicsFile) ? [topicsFile] : [])];
	const sig = `${root}#${signature(allFiles)}`;
	if (cache && cache.signature === sig) return cache.content;

	const errors: string[] = [];
	const warnings: string[] = [];
	if (!rootExists) warnings.push(`content directory ${display(root)} does not exist; building with no content`);

	const defs = readTopicDefs(topicsFile, errors);
	if (!defs.length && topicFiles.length) {
		errors.push(`${display(topicsFile)}: missing or empty, but there are topic files in ${display(knowledgeDir)}`);
	}
	const defByKey = new Map(defs.map((d) => [d.key, d]));
	const topicTitles = new Map(defs.map((d) => [d.key, d.title]));

	const topicFileByKey = new Map<string, string>();
	for (const f of topicFiles) {
		const key = path.basename(f, '.md');
		if (!defByKey.has(key)) {
			errors.push(`${display(f)}: topic "${key}" is not listed in ${display(topicsFile)} (add it there first)`);
		} else topicFileByKey.set(key, f);
	}

	const topics: Topic[] = defs.map((def, i) => {
		const f = topicFileByKey.get(def.key);
		if (f) return readTopic(f, def, i, errors, warnings);
		return {
			key: def.key,
			title: def.title,
			description: def.description,
			file: null,
			order: i,
			intro: [],
			fullSections: [],
			factCount: 0,
			sections: []
		};
	});

	const entries: Entry[] = [];
	for (const f of journalFiles) {
		const e = readEntry(f, topicTitles, errors, warnings);
		if (e) entries.push(e);
	}
	entries.sort((a, b) => (a.date === b.date ? b.slug.localeCompare(a.slug) : b.date.localeCompare(a.date)));

	if (errors.length) {
		cache = null;
		throw new ContentError(errors);
	}

	// Resolve provenance entry links.
	const titles = new Map(entries.map((e) => [e.slug, e.title]));
	for (const t of topics) {
		const blocks = [...t.intro, ...t.fullSections.flatMap((s) => s.blocks)];
		for (const b of blocks) {
			if (b.kind !== 'facts') continue;
			for (const fact of b.facts) {
				const pv = fact.provenance;
				if (!pv?.entry) continue;
				pv.entryTitle = titles.get(pv.entry) ?? null;
				if (!pv.entryTitle) warnings.push(`${t.file}: provenance refers to unknown entry "${pv.entry}"`);
			}
		}
	}

	const tagMap = new Map<string, TagInfo>();
	for (const e of entries) {
		for (const tag of new Set(e.tags.map((x) => x.toLowerCase()))) {
			const slug = slugifyTag(tag);
			const info = tagMap.get(slug) ?? { tag, slug, count: 0 };
			info.count++;
			tagMap.set(slug, info);
		}
	}
	const tags = [...tagMap.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));

	if (warnings.length) {
		console.warn(`[content] ${warnings.length} warning(s):\n` + warnings.map((w) => `  - ${w}`).join('\n'));
	}
	const content: Content = { root: display(root), rootExists, entries, topics, tags, warnings };
	cache = { signature: sig, content };
	return content;
}

// ---------------------------------------------------------------- accessors

export function getEntries(): Entry[] {
	return loadContent().entries;
}

export function getEntry(slug: string): Entry | undefined {
	return getEntries().find((e) => e.slug === slug);
}

export function getTopics(): Topic[] {
	return loadContent().topics;
}

export function getTopic(key: string): Topic | undefined {
	return getTopics().find((t) => t.key === key);
}

export function getTags(): TagInfo[] {
	return loadContent().tags;
}

export function getEntriesByTag(slug: string): Entry[] {
	return getEntries().filter((e) => e.tags.some((t) => slugifyTag(t) === slug));
}

export function toSummary(e: Entry): EntrySummary {
	const { slug, title, date, summary, tags, topics, takeawaysHtml } = e;
	return { slug, title, date, summary, tags, topics, takeawaysHtml };
}

export const PAGE_SIZE = 20;

export function pageCount(): number {
	return Math.max(1, Math.ceil(getEntries().length / PAGE_SIZE));
}

export function getPage(n: number): { entries: EntrySummary[]; page: number; pages: number; total: number } {
	const all = getEntries();
	return {
		entries: all.slice((n - 1) * PAGE_SIZE, n * PAGE_SIZE).map(toSummary),
		page: n,
		pages: pageCount(),
		total: all.length
	};
}

/** Neighbours (older/newer) and entries sharing a topic. */
export function getEntryContext(slug: string): {
	newer: { slug: string; title: string } | null;
	older: { slug: string; title: string } | null;
	related: { slug: string; title: string; date: string }[];
} {
	const all = getEntries();
	const i = all.findIndex((e) => e.slug === slug);
	const e = all[i];
	const pick = (x: Entry | undefined) => (x ? { slug: x.slug, title: x.title } : null);
	const keys = new Set(e.topics.map((t) => t.key));
	const related = all
		.filter((o) => o.slug !== slug && o.topics.some((t) => keys.has(t.key)))
		.slice(0, 6)
		.map((o) => ({ slug: o.slug, title: o.title, date: o.date }));
	return { newer: pick(all[i - 1]), older: pick(all[i + 1]), related };
}
