---
title: "Recording a chromatic part into a pattern without doubling the effect"
date: 2026-10-19
tags: [chromatic, pattern, resample, efx-motion, tr-rec, bus]
topics: [patterns-and-sequencing, effects]
session: e1bce6be
firmware: "5.52"
manual_refs:
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
  - title: "Creating a new pattern (TR-REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html
  - title: "Playing back samples in scale pitches (CHROMATIC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7893338778457227.html
  - title: "Recording effect operations to a pattern (EFX MOTION REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925799578494091.html
summary: "The effect doubled because the part was captured as audio and then played through the same bus again; record it as pattern notes instead, or move the resampled pad to DRY."
---

## Question
I'm recording a pattern using chromatic mode, but on playback the bus effect was
recorded and then applied again on top. How should I record a chromatic pattern?

## Key takeaways
- A resample records what you hear, effects included; the new pad then sits on a bus with the effect still on, so you hear it twice. A pattern stores notes, so the effect is applied once, live.
- Real-time: `[PATTERN SELECT]` > `[REC]` > blinking pad, `[REMAIN]` lit for Real-Time, `[REC]` to start, then `[SHIFT]` + pad `[4]` for chromatic and play; `[EXIT]` saves. ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html), [CHROMATIC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7893338778457227.html))
- The documented way is TR-REC: select the sample with `[SUB PAD]` + pad, press `[PITCH/SPEED]` for PITCH MODE CHROMATIC, then hold and turn `[VALUE]` to choose each step's note. ([TR-REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html))
- If `[START/END]` blinks, EFX MOTION PLAY is replaying recorded effect moves; press it to stop that. ([EFX MOTION REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925799578494091.html))
- To keep a resample, put its pad on DRY (`[REMAIN]` + pad until white), or switch the effect off before resampling and add it live later.

## Details
In chromatic mode `[VALUE]` changes the key range, `[REMAIN]` switches LEGATO, MONO
and POLY, pressing `[VALUE]` steps through the scales, and `[ROLL]` + turning
`[VALUE]` sets the root. BUS 3/4 can still reach a DRY pad depending on DRY Routing.

## Still to try / open questions
- The manual doesn't say outright that chromatic mode works during real-time pattern
  recording. Try it; if the pitches don't come out, use TR-REC.
