# SP-404MKII knowledge site

A static viewer for the Markdown knowledge base in `../content/` (see
`../SITE-PLAN.md`, section 1). SvelteKit + Svelte 5 + TypeScript, fully
prerendered with `@sveltejs/adapter-static`, Tailwind CSS v4, Pagefind search.

## Commands

Run these from `site/` (Node 24, npm 11):

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (exact versions pinned in `package.json`). |
| `npm run dev` | Dev server with hot reload at http://localhost:5173. Edits to `content/` show up on reload. Search needs a build (see below). |
| `npm run build` | Validate content, prerender every page into `build/`, then run Pagefind to build the search index into `build/pagefind/`. |
| `npm run preview` | Serve `build/` (including the search index) at http://localhost:4173 (`PORT=…` to change). |
| `npm run check` | `svelte-kit sync` + `svelte-check` (TypeScript and Svelte diagnostics; warnings fail). |

### Environment variables

| Variable | Default | Meaning |
| --- | --- | --- |
| `CONTENT_DIR` | `../content` | Content root, relative to `site/` (or absolute). Must contain `journal/` and `knowledge/`. |
| `MANUAL_FILE` | `../docs/reference-manual-v5.50.md` | Manual mirror the `/shortcuts` page is generated from. |
| `BASE_PATH` | *(empty)* | Set to e.g. `/sp404mkii` when hosting under a sub-path (GitHub Pages project site). Use the same value for `npm run preview`. |
| `SITE_URL` | `http://localhost:4173` | Origin used for absolute links in `/feed.xml` (CI sets `https://<owner>.github.io`). |

Examples:

```sh
CONTENT_DIR=test-fixtures npm run build             # build against the test fixtures
CONTENT_DIR=test-fixtures/malformed npm run build   # must fail, naming the bad file
```

If the content directory is missing or empty the build still succeeds and the
pages show empty states. Malformed content fails the build.

## Routes

| Route | Shows |
| --- | --- |
| `/` (`/page/2`, …) | Journal: newest entries first, 20 per page, with summary and key takeaways. |
| `/journal/<slug>` | One entry; sidebar with topics, tags, manual refs, firmware, session, related entries; previous/next. |
| `/knowledge` | Every topic in `_topics.yaml` order with its `##` subsections and fact counts; sticky contents. |
| `/knowledge/<topic>` | A topic's facts, each with a status badge and its provenance (learned date, source entry, manual link). |
| `/tags/<tag>` | Entries with that tag. |
| `/search` | Pagefind search over entries and topic pages (only those pages are indexed). |
| `/shortcuts` | The manual's "List of shortcut keys" (Appendix), parsed at build time, filterable as you type. |
| `/feed.xml` | RSS 2.0 feed of the 20 newest journal entries (summary + takeaways, full text in `content:encoded`). |

## Content rules (summary of SITE-PLAN.md section 1)

```
content/
├── journal/YYYY-MM-DD-slug.md     one file per subject discussed
└── knowledge/
    ├── _topics.yaml               topic keys, titles, display order
    └── <topic-key>.md             one file per topic
```

**Journal entry** frontmatter:

```yaml
---
title: "Effects buttons and why delay feedback stops when toggled"   # required
date: 2026-10-13                  # required, YYYY-MM-DD (should match the file name)
tags: [effects, delay, bus-fx]
topics: [effects]                 # keys from knowledge/_topics.yaml (unknown key = build error)
session: 2095c2e6                 # first 8 chars of the Claude Code session id
firmware: "5.52"                  # quote it; unquoted 5.50 is still read verbatim
manual_refs:
  - title: "Using the effects"
    url: https://static.roland.com/manuals/...
summary: "One sentence shown on the home page under the title."
---
```

Body sections, in order: `## Question`, `## Key takeaways` (3–7 bullets; shown
on the home page), `## Details`, optional `## Still to try / open questions`.

**Topic file** (`knowledge/<key>.md`; the key must be listed in `_topics.yaml`
first): frontmatter `title`, `description`, `order`; then `##` subsections whose
bullets are facts. Each fact carries its provenance in an HTML comment right
after the bullet (indented under it, or on the next line):

```markdown
- `[SHIFT]` + pad `[13]` opens the UTILITY MENU.
  <!-- learned: 2026-10-13, entry: 2026-10-13-effects-buttons-and-delay-feedback, manual: https://static.roland.com/..., status: manual -->
```

`status` is `manual` (quoted from the manual), `verified` (confirmed on the
unit) or `unverified` (Claude's inference).

Button sequences written as inline code the way the manual writes them
(`` `[SHIFT]` + pad `[13]` ``) render as keycaps.

### What fails the build

The build stops with the file name and the problem for: missing or invalid
frontmatter, missing `title` or `date`, an invalid date, a file name that is not
`YYYY-MM-DD-slug.md`, an unknown topic key, wrongly typed fields (`tags`,
`topics`, `manual_refs`), a provenance `status` other than the three above, a
provenance `learned` that is not a date, a topic file not listed in
`_topics.yaml`, and a malformed `_topics.yaml`.

Warnings (printed, build continues): no summary, missing `## Question` /
`## Key takeaways`, date not matching the file name, bullets without
provenance, provenance pointing at an unknown entry.

## Code layout

```
site/
├── src/lib/content.ts        reads + validates content/, typed accessors (getEntries, getEntry, getTopics, getTopic, getTags, …)
├── src/lib/markdown.ts       marked setup: keycaps, heading ids
├── src/lib/shortcuts.ts      parses the manual's shortcut tables
├── src/lib/components/       EntryCard, TopicBlocks, StatusBadge, …
├── src/routes/               one folder per route (load functions in +page.server.ts)
├── scripts/serve.js          static server used by `npm run preview`
├── test-fixtures/            sample content root (and malformed/ for the failure test)
└── vite.config.ts            also validates content once at build start
```

Content is read with `node:fs` from server load functions (all prerendered),
not `import.meta.glob`, so the content root can be configured.
