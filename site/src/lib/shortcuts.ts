/**
 * Builds the shortcut table from the local manual mirror
 * (docs/reference-manual-v5.50.md, Appendix > "List of shortcut keys" and its
 * sub-pages). Runs at build time; no manual upkeep needed.
 *
 * The manual file can be overridden with MANUAL_FILE (path relative to site/).
 */
import fs from 'node:fs';
import path from 'node:path';
import { escapeHtml, keycapify } from './markdown.ts';

export interface ShortcutRow {
	/** Index into ShortcutData.groups. */
	group: number;
	/** The button held down for the whole group, e.g. "SHIFT" (null for DJ mode / TR-REC tables). */
	holdHtml: string | null;
	operationHtml: string;
	functionName: string;
	explanationHtml: string;
	/** Lower-cased plain text of the whole row, for the live filter. */
	search: string;
}

export interface ShortcutGroup {
	title: string;
	url: string | null;
	intro: string;
}

export interface ShortcutData {
	file: string;
	sourceUrl: string | null;
	intro: string;
	groups: ShortcutGroup[];
	rows: ShortcutRow[];
}

const PARENT = 'List of shortcut keys';

export function manualFile(): string {
	return path.resolve(process.cwd(), process.env.MANUAL_FILE || '../docs/reference-manual-v5.50.md');
}

function cellHtml(cell: string): string {
	return keycapify(escapeHtml(cell.trim()))
		.replace(/\s*&lt;br&gt;\s*/g, '<br>')
		.replace(/\bMEMO\b/g, '<strong>Memo:</strong>');
}

function plain(cell: string): string {
	return cell.replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
}

function splitRow(line: string): string[] {
	return line
		.trim()
		.replace(/^\|/, '')
		.replace(/\|$/, '')
		.split('|')
		.map((c) => c.trim());
}

function shortTitle(title: string): string {
	return title
		.replace(/^Shortcuts that use the /, 'Hold ')
		.replace(/^Shortcuts used in /, '')
		.replace(/ button$/, '');
}

let cache: { mtime: number; data: ShortcutData } | null = null;

export function loadShortcuts(): ShortcutData {
	const file = manualFile();
	const empty: ShortcutData = { file, sourceUrl: null, intro: '', groups: [], rows: [] };
	if (!fs.existsSync(file)) {
		console.warn(`[shortcuts] manual mirror not found at ${file}; /shortcuts will be empty`);
		return empty;
	}
	const mtime = fs.statSync(file).mtimeMs;
	if (cache && cache.mtime === mtime) return cache.data;

	const text = fs.readFileSync(file, 'utf8');
	const sections = text.split(/^(?=## )/m);
	const data: ShortcutData = { ...empty };

	for (const sec of sections) {
		const lines = sec.split('\n');
		const title = lines[0].replace(/^##\s+/, '').trim();
		const pathLine = lines.find((l) => l.startsWith('Path:'))?.slice(5).trim() ?? '';
		const url = lines.find((l) => l.startsWith('URL:'))?.slice(4).trim() ?? null;

		if (title === PARENT) {
			data.sourceUrl = url;
			data.intro =
				lines
					.slice(1)
					.find((l) => l.trim() && !/^(Path|URL):/.test(l) && !l.startsWith('**'))
					?.trim() ?? '';
			continue;
		}
		if (!pathLine.endsWith(`> ${PARENT}`)) continue;

		const tableLines = lines.filter((l) => l.trim().startsWith('|'));
		if (tableLines.length < 3) continue;
		const header = splitRow(tableLines[0]);
		const intro = lines
			.slice(1)
			.filter((l) => l.trim() && !l.trim().startsWith('|') && !/^(Path|URL):/.test(l))
			.join(' ')
			.trim();
		const groupIndex = data.groups.length;
		data.groups.push({ title: shortTitle(title), url, intro });

		const hold = /^While holding down the (.+)$/i.exec(header[0])?.[1] ?? null;
		const holdHtml = hold ? cellHtml(hold.replace(/ (button|knob)$/, '')) : null;
		const hasFunction = header.length >= 3;

		for (const line of tableLines.slice(2)) {
			const cells = splitRow(line);
			const operation = cells[0] ?? '';
			const fn = hasFunction ? (cells[1] ?? '') : '';
			const explanation = (hasFunction ? cells[2] : cells[1]) ?? '';
			data.rows.push({
				group: groupIndex,
				holdHtml,
				operationHtml: cellHtml(operation),
				functionName: fn === '–' || fn === '-' ? '' : fn,
				explanationHtml: cellHtml(explanation),
				search: plain([hold ?? '', operation, fn, explanation, title].join(' ')).toLowerCase()
			});
		}
	}

	cache = { mtime, data };
	return data;
}
