import { base } from '$app/paths';
import { getEntries } from '$lib/content';

// RSS 2.0 feed of the newest journal entries, prerendered to build/feed.xml.
// Feed readers need absolute links: SITE_URL is the origin the site is served
// from (set in CI); BASE_PATH (via $app/paths) is the sub-path under it.
export const prerender = true;

const FEED_SIZE = 20;
const TITLE = 'SP-404MKII notes';
const DESCRIPTION = 'Notes and key takeaways from learning the Roland SP-404MKII.';

const esc = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cdata = (s: string) => `<![CDATA[${s.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
// Entries carry a local date only; publish them at noon UTC so the day doesn't shift in readers.
const rfc822 = (date: string) => new Date(`${date}T12:00:00Z`).toUTCString();

export function GET() {
	const site = (process.env.SITE_URL ?? 'http://localhost:4173').replace(/\/+$/, '');
	const home = `${site}${base}/`;
	const entries = getEntries().slice(0, FEED_SIZE);

	const items = entries
		.map((e) => {
			const url = `${site}${base}/journal/${e.slug}`;
			const categories = e.topics.map((t) => `<category>${esc(t.title)}</category>`).join('');
			const summary = e.summary ? `<p>${esc(e.summary)}</p>` : '';
			return `<item>
<title>${esc(e.title)}</title>
<link>${esc(url)}</link>
<guid isPermaLink="true">${esc(url)}</guid>
<pubDate>${rfc822(e.date)}</pubDate>${categories}
<description>${cdata(summary + e.takeawaysHtml)}</description>
<content:encoded>${cdata(summary + e.bodyHtml)}</content:encoded>
</item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>${TITLE}</title>
<link>${esc(home)}</link>
<description>${DESCRIPTION}</description>
<language>en</language>
<atom:link href="${esc(`${site}${base}/feed.xml`)}" rel="self" type="application/rss+xml"/>
${entries[0] ? `<lastBuildDate>${rfc822(entries[0].date)}</lastBuildDate>\n` : ''}${items}
</channel>
</rss>
`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
