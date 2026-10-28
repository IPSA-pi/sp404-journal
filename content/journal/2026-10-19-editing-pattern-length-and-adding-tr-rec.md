---
title: "Editing a pattern's length, and adding TR-REC steps to a real-time pattern"
date: 2026-10-19
tags: [pattern-edit, duplicate, crop, tr-rec, quantize, pattern-chain, protect]
topics: [patterns-and-sequencing]
session: e1bce6be
firmware: "5.52"
manual_refs:
  - title: "Editing a pattern (PATTERN EDIT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html
  - title: "Copying and connecting patterns (DUPLICATE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html
  - title: "Cropping unnecessary sections from a pattern (CROP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930202778500235.html
  - title: "Playing a pattern"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html
  - title: "Extracting specific samples (pads) from a pattern"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7932916378504075.html
  - title: "Playing back patterns in order (PATTERN CHAIN)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925133978493323.html
  - title: "Protecting a pattern (PROTECT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7934093978505611.html
summary: "PATTERN EDIT changes LENGTH in powers of two, DUPLICATE doubles a pattern and CROP keeps only the loop range; [SHIFT] + [REC] during playback adds TR-REC steps to any pattern."
---

## Question
How can I edit a pattern to make it longer or shorter? Can I add TR-REC steps to a
pattern recorded in free (real-time) mode? What else should I know about patterns?

## Key takeaways
- `[PATTERN SELECT]` > `[PATTERN EDIT]` > pattern pad: `[CTRL 1]` BPM, `[CTRL 2]` LOOP START, `[CTRL 3]` LENGTH (1, 2, 4, 8, 16, 32 or 64 bars only). ([PATTERN EDIT](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html))
- Longer: `[VALUE]` > DUPLICATE copies the pattern onto its own end, doubling it. ([DUPLICATE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html))
- Shorter: set LOOP START and LENGTH to the part to keep, then `[VALUE]` > CROP. ([CROP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930202778500235.html))
- Odd lengths like 3 or 6 bars can only be chosen when you first record (LENGTH 1–64 on RECORD SETTING). ([PATTERN EDIT](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html))
- Any pattern takes TR-REC steps: while it plays press `[SHIFT]` + `[REC]`; or press `[REC]` to overdub in real time from bar 1. ([Playing a pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html))
- `[COPY]`, source, destination, then `[REMAIN]` lets you pick which pads to keep, for splitting drums from melody. ([Extracting specific samples](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7932916378504075.html))
- PATTERN CHAIN: in pattern mode hold `[HOLD]` and press a pad for chain 1–16, then press up to 16 patterns in order; `[SUB PAD]` plays it. ([PATTERN CHAIN](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925133978493323.html))

## Details
Patterns store notes, not audio: change a pad's sample and the pattern plays the new
one. BOUNCE or resample to lock a pattern in as audio. Each project has 10 pattern
banks of 16, separate from the sample banks.

Other pattern tools: QUANTIZE after recording (PATTERN EDIT > `[RECORD SETTING]`,
can't be undone), EFX MOTION REC (`[MARK]` while recording), PAD MUTE MOTION REC
(`[SHIFT]` + `[REVERSE]` + `[REMAIN]`), `[SHIFT]` + pad `[5]` to swap two
patterns, `[COPY]` + `[EXIT]` to copy a bank, and `[SHIFT]` + `[COPY]` to
protect a bank's samples and patterns. Swapping, bank copy and delete only work while
patterns are stopped, and a deleted pattern can't be restored.
