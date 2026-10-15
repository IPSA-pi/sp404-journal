/**
 * Markdown rendering shared by journal entries, topic pages and the shortcut
 * table. Button names written the way the manual writes them (`[SHIFT]`,
 * pad `[13]`) are rendered as <kbd class="key"> keycaps.
 */
import { Marked, type Tokens, type Token } from 'marked';

export type { Token, Tokens };
import { slugify } from './slug.ts';
export { slugify };

export function escapeHtml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}


/** A button/pad/knob label as the manual writes it: [SHIFT], [13], [A/F], [CTRL 1]. */
const KEY_IN_TEXT = /\[([A-Z0-9][A-Za-z0-9 /+.&\-–]{0,30})\]/g;
/** A code span that is nothing but a key sequence, e.g. `[SHIFT] + pad [13]`. */
const KEY_SEQUENCE = /^\s*(?:(?:pad|pads|button|knob)?\s*\[[^\]\n]{1,30}\]\s*(?:[+>,]|then)?\s*)+$/i;

function keycap(label: string): string {
	return `<kbd class="key">${label}</kbd>`;
}

/** Turns `[SHIFT]` in already-escaped HTML text into keycaps. */
export function keycapify(escapedHtml: string): string {
	return escapedHtml.replace(KEY_IN_TEXT, (_m, label: string) => keycap(label));
}

/**
 * Applies keycapify() to the text between tags of an HTML fragment, skipping
 * anything inside <code>, <pre>, <a>, <kbd> and HTML comments.
 */
export function keycapifyHtml(html: string): string {
	const parts = html.split(/(<!--[\s\S]*?-->|<[^>]+>)/);
	let skip = 0;
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i];
		if (i % 2 === 1) {
			const m = /^<(\/?)(code|pre|a|kbd)\b/i.exec(part);
			if (m) skip += m[1] ? -1 : 1;
			continue;
		}
		if (skip <= 0 && part.includes('[')) parts[i] = keycapify(part);
	}
	return parts.join('');
}

function createMarked(): Marked {
	const marked = new Marked({ gfm: true });
	marked.use({
		renderer: {
			codespan({ text }: Tokens.Codespan): string {
				if (KEY_SEQUENCE.test(text)) {
					return `<span class="keys">${keycapify(escapeHtml(text))}</span>`;
				}
				return `<code>${escapeHtml(text)}</code>`;
			},
			heading({ tokens, depth, text }: Tokens.Heading): string {
				const inner = this.parser.parseInline(tokens);
				return `<h${depth} id="${slugify(text)}">${inner}</h${depth}>\n`;
			}
		},
		hooks: {
			// Plain-text [SHIFT] etc. is split into several text tokens by marked's
			// reference-link handling, so keycaps are applied to the final HTML.
			postprocess: keycapifyHtml
		}
	});
	return marked;
}

const md = createMarked();

export function renderMarkdown(src: string): string {
	return md.parse(src, { async: false });
}

export function renderInline(src: string): string {
	return md.parseInline(src, { async: false });
}

export function renderTokens(tokens: Token[]): string {
	return keycapifyHtml(md.parser(tokens));
}

export function lex(src: string): Token[] {
	return md.lexer(src);
}

/** Plain text of a Markdown snippet (for summaries and search filters). */
export function plainText(src: string): string {
	return renderInline(src)
		.replace(/<[^>]+>/g, '')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.trim();
}
