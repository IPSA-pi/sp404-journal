---
name: log
description: Log what this session taught about the SP-404MKII into the knowledge site. Writes one journal entry per subject discussed to content/journal/ and merges the takeaways, with provenance, into content/knowledge/<topic>.md. Use only when the user runs /log (optionally with a subject, e.g. "/log sampling practices") or explicitly asks to update the knowledge base; never on your own after answering a question.
argument-hint: "[subject]"
---

# /log: capture this session into `content/`

The format is the contract in `SITE-PLAN.md` section 1 (Content model). Follow it
exactly; a site is built from these files. Read section 1 if you haven't this
session.

Arguments: `$ARGUMENTS`

- **No argument**: log every distinct subject about the unit discussed in this
  session that isn't logged yet.
- **With an argument** (e.g. `sampling practices`): log only that subject.

Skip subjects that aren't about the unit or the SD card (e.g. editing this
workspace, the site, git).

## 1. Gather the facts

- **Session id**: the current session's id, first 8 characters. The transcript
  is the newest `~/.claude/projects/-home-sebel-repos-sp404mkii/*.jsonl`
  (`ls -t … | head -1`); the scratchpad path also contains the id.
- **Date**: today, local time (`date +%F`).
- **Firmware**: from memory (`sp404mkii-firmware-version.md`), as a quoted
  string, e.g. `"5.52"`. If memory has none, use `"unknown"` and say so.
- **Already logged?** `grep -l "session: <id>" content/journal/*.md`. If this
  session already has an entry on the subject, update that entry instead of
  creating a second one.

## 2. Check every takeaway against the manual

Hardware facts must come from `docs/` (see `CLAUDE.md`). For each takeaway:

- Find the section (`grep -n '^## ' docs/reference-manual-v5.50.md`, read only
  that section) and copy its `URL:`.
- Confirmed: write button sequences exactly as the manual does (`[SHIFT]` +
  pad `[13]`) and mark the fact `status: manual` with that URL.
- Not in the manual (Claude's inference, advice, or an observation about
  files on the PC/card): `status: unverified`, no `manual:` field.
- The manual contradicts what was said in the session: use the manual's
  version, and say so in the entry's Details ("Correction from the manual: …").
- Never write `status: verified` unless the user said they confirmed it on
  their unit in this session.

## 3. Write the journal entry

`content/journal/YYYY-MM-DD-<slug>.md`, slug = kebab-case of the title (short,
lowercase, ASCII). One file per subject.

```yaml
---
title: "…"
date: YYYY-MM-DD
tags: [kebab-case, free-form]
topics: [keys from content/knowledge/_topics.yaml]
session: abcd1234
firmware: "5.52"
manual_refs:
  - title: "Manual section title"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/….html
summary: "One sentence for the home page."
---
```

Body sections, in this order and with these exact headings:

1. `## Question`: what the user asked, lightly cleaned up.
2. `## Key takeaways`: 3–7 bullets. Each bullet that comes from the manual
   ends with a link to its section: `([Section title](url))`.
3. `## Details`: the explanation as given, trimmed of chit-chat, plus any
   corrections from the manual.
4. `## Still to try / open questions` (optional): things to verify on the unit.

`manual_refs` lists the sections the entry cites (`[]` if none).

## 4. Merge into the knowledge topics

For each topic in the entry's `topics`:

- If a needed topic doesn't exist, **first** add it to
  `content/knowledge/_topics.yaml` (`key`, `title`), then create
  `content/knowledge/<key>.md` with frontmatter `title`, `description`,
  `order` (integer; the existing files use 10, 20, … in `_topics.yaml` order).
- Add each fact as a bullet under the matching `## ` subsection, or create a
  subsection. Immediately after the bullet (continuation lines indented two
  spaces), add the provenance comment on its own line, indented two spaces:

  ```markdown
  - The fact, with `[BUTTON]` sequences as the manual writes them.
    <!-- learned: YYYY-MM-DD, entry: YYYY-MM-DD-slug, manual: https://static.roland.com/…html, status: manual -->
  - An inference not found in the manual.
    <!-- learned: YYYY-MM-DD, entry: YYYY-MM-DD-slug, status: unverified -->
  ```

  Field order is fixed: `learned`, `entry`, optional `manual`, `status`.
  `status` is `manual`, `verified` or `unverified`; `manual` requires the URL.
- **No duplicates.** Before adding, search the topic file (and related topics)
  for the same fact. If it's there, update the bullet's wording instead (add
  the new detail, fix it if the manual says otherwise), keep its earliest
  `learned` date and its original `entry`, and upgrade `unverified` to
  `manual` if you have now found the manual section. Never downgrade
  `verified`.
- One fact per bullet; keep bullets short enough to read on a phone.

## 5. Validate and report

Run `python3 -I tools/check-content.py` and fix every error it reports.

Then print the files you created or changed, one per line, e.g.

```
created  content/journal/2026-10-14-effects-buttons-and-delay-feedback.md
updated  content/knowledge/effects.md (+5 facts, 1 updated)
```

Do not commit; the user commits.
