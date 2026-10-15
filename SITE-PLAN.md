# SP-404MKII knowledge site — build plan

A small static site that turns my Claude Code sessions about the SP-404MKII into
a personal knowledge base. Two kinds of pages:

1. **Journal** (home page): the latest subjects discussed, newest first, each
   with key takeaways. Like blog entries.
2. **Knowledge**: an organised index of everything learned so far, grouped by
   topic, that keeps growing as I ask more questions.

The site is a *viewer*. The real knowledge base is a folder of Markdown files in
this repo that Claude Code writes to after each session. This keeps the content
readable without the site, easy for Claude to edit, and diffable in git.

---

## 1. Content model (fixed; every agent builds against this)

Content lives at the repo root, outside the site code:

```
content/
├── journal/
│   └── 2026-10-13-effects-buttons-and-delay-feedback.md
└── knowledge/
    ├── _topics.yaml
    ├── effects.md
    ├── sampling.md
    ├── patterns-and-sequencing.md
    ├── sd-card-and-file-management.md
    ├── pads-and-banks.md
    ├── midi-and-usb.md
    ├── companion-apps.md
    └── system-and-settings.md
```

### 1.1 Journal entry (`content/journal/YYYY-MM-DD-slug.md`)

One file per subject discussed (a session can produce several). Frontmatter:

```yaml
---
title: "Effects buttons and why delay feedback stops when toggled"
date: 2026-10-13
tags: [effects, delay, bus-fx]
topics: [effects]            # keys from knowledge/_topics.yaml
session: 2095c2e6            # first 8 chars of the Claude Code session id (quoted)
firmware: "5.52"
manual_refs:
  - title: "Using the effects"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/...
summary: "One sentence shown on the home page under the title."
---
```

Body sections, in this order:

```markdown
## Question
What I actually asked, lightly cleaned up.

## Key takeaways
- 3–7 bullets. Button sequences exactly as the manual writes them: `[SHIFT]` + pad `[13]`.
- Each bullet that comes from the manual ends with a link to the manual section.

## Details
The longer explanation, as Claude gave it, trimmed of chit-chat.

## Still to try / open questions
- Optional. Things to verify on the unit.
```

### 1.2 Knowledge topic (`content/knowledge/<topic>.md`)

One file per topic. Each fact is a bullet that carries its provenance so the
page can render "learned on <date>, from <entry>, manual section <link>".

```markdown
---
title: Effects
description: Bus FX, MFX, input FX, the knobs and buttons around the screen.
order: 20
---

## Bus FX basics
- The four FX buttons around the screen toggle BUS 1–4 ... `[SHIFT]` + `[FX]` ...
  <!-- learned: 2026-10-13, entry: 2026-10-13-effects-buttons-and-delay-feedback, manual: https://static.roland.com/... , status: manual -->
- ...

## Delay
- ...
```

Provenance is an HTML comment right after the bullet so the Markdown stays
readable; the site parses it. `status` is one of `manual` (quoted from the
manual), `verified` (confirmed on my unit), `unverified` (Claude's inference).
The `manual:` field is optional and is left out when no manual section covers
the fact. Fields are separated by `, ` (`manual: <url>, status: manual`).

Dates (`date`, `learned`, the file-name prefix) are the user's **local** date
of the conversation, not UTC. Session ids are quoted in YAML if they could be
read as a number.

`_topics.yaml` lists topic keys, titles and display order so the index page and
the entry frontmatter agree:

```yaml
- key: sampling
  title: Sampling & recording
- key: effects
  title: Effects
- key: patterns-and-sequencing
  title: Patterns & sequencing
- key: pads-and-banks
  title: Pads, banks & projects
- key: sd-card-and-file-management
  title: SD card & file management
- key: midi-and-usb
  title: MIDI, USB & computer audio
- key: companion-apps
  title: Companion apps (Serato, Koala, Melodics, SP-404MKII App)
- key: system-and-settings
  title: System, settings & firmware
```

Agents may add topics but must add them here first.

---

## 2. Work packages

Three packages. A and B only depend on section 1, so they can run in parallel.
C runs after both.

### Package A — the site (`site/`)

**Stack**: SvelteKit (Svelte 5), TypeScript, `@sveltejs/adapter-static`
(fully prerendered, no server), `mdsvex` or `marked` + `gray-matter` for
Markdown, `pagefind` for search at build time. Tailwind CSS v4 (via
`@tailwindcss/vite`) with `@tailwindcss/typography` for the rendered Markdown;
light and dark via `prefers-color-scheme` (Tailwind `dark:` variant). Node 24
and npm 11 are installed.

**Content loading**: a single module `site/src/lib/content.ts` that reads
`../content/**` with `import.meta.glob` (eager, `as: 'raw'`), parses
frontmatter, parses the provenance comments, and exposes typed
`getEntries()`, `getEntry(slug)`, `getTopics()`, `getTopic(key)`, `getTags()`.
Everything else renders from these. Validate frontmatter at build time and fail
the build with a clear message on a bad entry (missing date, unknown topic key).

**Routes**:

| Route | Shows |
| --- | --- |
| `/` | Latest journal entries, newest first: title, date, topic chips, summary, the takeaways bullets inline. Paginate at 20. |
| `/journal/[slug]` | Full entry. Sidebar: tags, topics, manual refs, firmware, "related entries" (same topics). Prev/next links. |
| `/knowledge` | The index: every topic in `_topics.yaml` order, with its `##` subsections and bullet count. One page, anchor links, a sticky table of contents. |
| `/knowledge/[topic]` | One topic's full page. Each bullet shows its status badge and a hover/footnote with date, source entry and manual link. |
| `/tags/[tag]` | Entries with that tag. |
| `/search` | Pagefind UI over entries and topics. |
| `/shortcuts` | The "List of shortcut keys" section of `docs/reference-manual-v5.50.md`, rendered as a filterable table (search box filters rows live). Generated at build time from the manual mirror, so it needs no manual upkeep. |

**Design**: mobile first, this will be read on a phone next to the sampler.
Readable monospace for button sequences (`[SHIFT]` + pad `[13]` should look
like keycaps; a small `<kbd>` style). Header with the two main links: Journal,
Knowledge. Keep it plain and fast; Tailwind utilities only, no component
library.

**Commands**: `npm run dev`, `npm run build` (static output in `site/build`),
`npm run check`. Add `site/README.md` with these and the content rules from
section 1.

**Acceptance**: with two or three sample entries and one topic file in
`content/`, `npm run build` succeeds, all routes render, search finds a word
from an entry, and a malformed entry fails the build with the file name in the
message.

### Package B — capture: getting sessions into `content/`

Two mechanisms, both writing the formats of section 1.

**B1. A `/log` project skill** at `.claude/skills/log/SKILL.md`. When invoked
(with no arguments) it looks back over the current session and, for each
distinct subject discussed about the unit:

1. Writes a journal entry file (slug from the title, date today, `session` from
   the session id, `firmware` from memory, manual refs from the sections it
   quoted).
2. Merges the takeaways into the right `content/knowledge/<topic>.md`:
   add under the matching `##` subsection or create one; never duplicate a fact
   that is already there, update it instead and keep the earliest `learned`
   date; set `status: manual` when it cites a manual section.
3. Prints the files it touched.

With an argument (`/log sampling practices`) it logs only that subject.

**B2. Log on request only** (changed 2026-10-15; originally a standing rule to
log after every question, dropped to save tokens). `CLAUDE.md` has a short
"Knowledge site" section describing `content/`, pointing at this plan and the
skill, and telling Claude to update `content/` only when the user runs `/log`
or asks to update the knowledge base.

**B3. Backfill** of the sessions that happened before the site existed. The
transcripts are JSONL files in
`~/.claude/projects/-home-sebel-repos-sp404mkii/*.jsonl` (seven sessions,
about 3 MB, 11–14 October 2026). Write a small script
`tools/extract-session.py` that prints a session as a readable transcript
(user messages and assistant text only, no tool calls), run it per session,
and produce entries and knowledge bullets from the output using the same rules
as `/log`. Subjects already covered so far include: copying Ableton and
Bandcamp packs to the card and unsupported file formats, sample volume and
pitch editing (and the humanize/rate screen confusion), the effects buttons
and delay feedback behaviour, sampling best practices and pattern quantize vs
free, recording in sync with the project BPM, USB-C recording from a PC and
project BPM, whether to power off before removing the card. Skip the sessions
that were only about setting up this workspace.

**Acceptance**: `/log` run at the end of a test session produces a valid entry
and topic update that Package A builds; the backfill yields one entry per
subject above and populated topic files.

### Package C — polish and operations (after A and B)

- Commit the finished site and content (the repo is already a git repo with
  a `.gitignore` covering `site/node_modules`, `site/build`, `site/.svelte-kit`).
- Optional deploy: GitHub Pages or Cloudflare Pages from `site/build`, or just
  `npm run preview` locally. Decide later; the static build makes either
  trivial.
- An RSS feed at `/feed.xml` (cheap with prerendering).

---

## 3. Later

Ideas deliberately left out of the first build are in `IDEAS.md`. Agents
building packages A–C should not implement them, but should not make them
harder either (keep the `status` field and the per-entry `session` and
`firmware` fields, which several of them rely on).

---

## 4. How to run this with agents

1. Read this file and `CLAUDE.md`.
2. Start Package A and Package B as two separate agents (or two Claude Code
   sessions). Both treat section 1 as a contract; if either needs to change it,
   it edits this file and says so.
3. When both are done, run Package C, then do a real session, ask a question
   about the unit, run `/log`, rebuild, and check the entry shows up.
