---
title: "Combining an 8-bar free pattern with a 1-bar TR-REC pattern"
date: 2026-10-21
tags: [pattern, tr-rec, real-time, duplicate, overdub, roll]
topics: [patterns-and-sequencing]
session: 0f14936c
firmware: "5.52"
manual_refs:
  - title: "Playing a pattern"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html
  - title: "Creating a new pattern (TR-REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html
  - title: "Copying and connecting patterns (DUPLICATE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html
  - title: "Recording a roll in the pattern"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9359437993646859.html
  - title: "Converting patterns to samples"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7922932378490251.html
summary: "Patterns can't be merged, but real-time and TR-REC write into the same pattern: build the grid part in TR-REC, DUPLICATE it up to 8 bars, then play the free part over it."
---

## Question
I have an 8-bar kick pattern recorded free and a 1-bar shaker pattern from TR-REC.
How do I bring them together, and what's a better workflow? Should I record the
patterns as samples instead?

## Key takeaways
- Only one pattern plays at a time; pressing another pattern pad queues it for after the current one. There is no merge function. ([Playing a pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html))
- DUPLICATE only appends a pattern to itself, so the shaker has to be entered into the kick pattern (or the other way round). ([DUPLICATE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html))
- Into the existing pattern: play it, `[SHIFT]` + `[REC]` for TR-REC, `[SUB PAD]` + the shaker pad, toggle steps, turn `[VALUE]` for each of the 8 bars. ([TR-REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html))
- Better next time: TR-REC the grid parts in a 1-bar pattern, DUPLICATE three times (1 > 2 > 4 > 8 bars), then press `[REC]` during playback and play the free part on top. ([DUPLICATE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html), [Playing a pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html))
- Quick continuous shaker: in real-time recording hold `[ROLL]` and press the pad to write a roll across as many bars as you hold. ([Recording a roll in the pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9359437993646859.html))
- Keep it as one pattern. Bouncing is for finishing: a sample loses per-note editing, quantize and effect motion. ([Converting patterns to samples](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7922932378490251.html))

## Details
Real-time and TR-REC are two ways of writing into the same pattern, and you can switch
between them while it plays. TR-REC enters one bar at a time, so a repeating 1-bar part
over 8 bars means entering it eight times. That is why building the grid part first and
duplicating it is easier.

When overdubbing in real time, recording starts from the top of the pattern ("Wait for
REC"), new notes don't erase old ones, and `[SHIFT]` + `[PATTERN SELECT]` undoes the
last take. Set QTZ beforehand if you want the free part snapped to a grid.

In TR-REC, `[DEL]` + `[A/F]` deletes the selected pad's notes for the current bar,
and `[PATTERN EDIT]` + a pad opens Microscope for single notes.

If you do bounce: BOUNCE bypasses bus effects, resampling keeps them, and a bounced
1-bar loop needs LOOP and BPM SYNC on to stay aligned with an 8-bar sample.
