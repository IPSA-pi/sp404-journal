---
title: "Recording modes, undo and picking the sample in TR-REC"
date: 2026-10-17
tags: [real-time, tr-rec, resample, skip-back, undo, delete, claude-app]
topics: [patterns-and-sequencing, sampling]
session: f3836cc2
firmware: "5.52"
manual_refs:
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
  - title: "Creating a new pattern (TR-REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html
  - title: "Resampling a sample (RESAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html
  - title: "Sampling what you previously played (SKIP-BACK SAMPLING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907879578474123.html
  - title: "Deleting the sample from a pad"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918785178485643.html
  - title: "Deleting the pattern from a pad"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7934605978506379.html
  - title: "Shortcuts that use the [SHIFT] button"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8003597978584715.html
summary: "[REMAIN] on the RECORD SETTING screen picks Real-Time or TR-REC; [SHIFT] + [REC] is TR-REC, not resample; skip-back is [MARK] > [REC] > pad."
---

## Question
How do I change recording modes? How do I undo a recording? In TR-REC, how do I
change the sample?

## Key takeaways
- `[PATTERN SELECT]`, `[REC]`, then a blinking pad opens RECORD SETTING; `[REMAIN]` toggles REC MODE between Real-Time (lit) and TR-REC (blinking). ([Creating a new pattern (real-time recording)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- Resampling is the `[RESAMPLE]` button. `[SHIFT]` + `[REC]` during pattern playback switches to TR-REC instead. ([Resampling a sample (RESAMPLE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html), [Shortcuts that use the [SHIFT] button](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8003597978584715.html))
- Skip-back sampling: while `[MARK]` blinks, press `[MARK]`, then `[REC]`, then a pad. ([SKIP-BACK SAMPLING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907879578474123.html))
- `[SHIFT]` + `[PATTERN SELECT]` undoes what you just recorded, only while recording a pattern. ([Creating a new pattern (real-time recording)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- A sample has no undo. Delete it with `[DEL]`, the pad, then `[VALUE]` or `[DEL]`; a pattern is deleted the same way in pattern mode while it is stopped. ([Deleting the sample from a pad](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918785178485643.html), [Deleting the pattern from a pad](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7934605978506379.html))
- In TR-REC, hold `[SUB PAD]` and press a pad to choose the sample; press `[VALUE]` + `[SUB PAD]` + pad to choose it silently, and hold `[HOLD]` to hear only that pad. ([Creating a new pattern (TR-REC)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/f3836cc2-d599-461f-adcd-1cd10f4d752b),
reviewed against the 5.50 reference manual on 2026-10-28. The chat's metronome
question is logged with its later correction in
"Why the metronome is silent during playback" (2026-10-27).

**Pattern recording.** Real-Time records what you play over a looping LENGTH; TR-REC
is the step grid. The `[REMAIN]` toggle lives on the RECORD SETTING screen that
appears after picking the destination pad.

**Sampling.** `[REC]` in sample mode is sampling standby (input source, BPM,
length). `[RESAMPLE]` records the unit's own output, effects included. Skip-back
grabs up to 25 s (40 s with MARK Function "SBS Long") of what you already played.

**TR-REC.** `[DEL]` + `[A/F]` deletes one measure of the selected pad's notes;
`[DEL]` + `[B/G]` deletes one measure for all pads.

**Corrections from the manual.** The chat said resample is `[SHIFT]` + `[REC]`
and skip-back is "hold `[REMAIN]` and press a pad". Both are wrong: `[REMAIN]` +
pad changes a pad's bus. The chat also skipped `[PATTERN SELECT]` before `[REC]`.

## Still to try / open questions
- The chat said undo goes back 16 steps; the manual gives no number.
