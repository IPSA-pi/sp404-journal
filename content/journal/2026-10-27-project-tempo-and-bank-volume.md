---
title: "Setting one tempo for the project and a volume per bank"
date: 2026-10-27
tags: [tempo-sel, project-tempo, bank-volume, claude-app]
topics: [sampling, mixing-and-levels]
session: 3e7bdeb3
firmware: "5.52"
manual_refs:
  - title: "Setting the tempo for a bank or project"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936372378508683.html
  - title: "Setting the tempo"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935117978507147.html
  - title: "Adjusting the volume for all banks (BANK VOLUME)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7885761178449547.html
summary: "TEMPO SEL = PROJECT gives every bank one tempo; BANK VOLUME is set bank by bank with [SHIFT] + a bank button."
---

## Question
How can I set a default volume and BPM for every bank in a project?

## Key takeaways
- `[SHIFT]` + pad `[11]` opens TEMPO SEL; set `[CTRL 1]` to PROJECT and the tempo with `[VALUE]`, then `[EXIT]`. All banks then use it for patterns and BPM SYNC. ([Setting the tempo for a bank or project](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936372378508683.html))
- With TEMPO SEL on BANK A–J, each bank keeps its own tempo instead. ([Setting the tempo](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935117978507147.html))
- There is no project-wide volume: `[SHIFT]` + a bank button opens BANK VOLUME for that bank; repeat for each, including F–J. ([BANK VOLUME](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7885761178449547.html))
- Keep bank volumes matched: copying or swapping samples between banks with different BANK VOLUME changes how loud they play. ([BANK VOLUME](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7885761178449547.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/3e7bdeb3-c925-4fdf-87d2-e74792cfd23c),
reviewed against the 5.50 reference manual on 2026-10-28.

`[SHIFT]` + turning `[VALUE]` on TEMPO SEL sets the decimal part. Banks F–J are
reached by pressing a bank button twice (it blinks).

## Still to try / open questions
- The chat said the SP-404MK2 App's settings screen sets the project tempo and every
  bank's tempo and volume in one view. Not in the reference manual; check the app.
- The chat warned that the import and external-input screens can fall back to 90 BPM
  after you set a project tempo. Check REC BPM before sampling.
