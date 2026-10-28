---
title: "Why the metronome is silent during playback"
date: 2026-10-27
tags: [metronome, click, rehearsal, count-in, claude-app]
topics: [system-and-settings, patterns-and-sequencing]
session: 3e7bdeb3
firmware: "5.52"
manual_refs:
  - title: "SYSTEM (parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
  - title: "Sampling"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html
summary: "[SHIFT] + pad [9] only arms the metronome; it clicks while sampling, resampling or recording a pattern (rehearsal included), as set under SYSTEM > CLICK."
---

## Question
When I play a sample and press `[SHIFT]` + pad `[9]`, the screen says the metronome
is on, but I can't hear it. How do I rehearse with a click without recording?

## Key takeaways
- `[SHIFT]` + pad `[9]` turns the metronome on or off; it sounds only while sampling or resampling (Metronome:REC) or recording a pattern (Metronome:PTN). ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))
- To practise against the click: `[PATTERN SELECT]` > `[REC]` > an empty pad, set BPM with `[CTRL 1]`, press `[REC]` to start, then `[REC]` again for rehearsal mode, which loops without recording. ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- Still silent? UTILITY (`[SHIFT]` + pad `[13]`) > SYSTEM > CLICK: Metronome:REC and Metronome:PTN ON, Click Level 1–5. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))
- On the pattern RECORD SETTING screen `[SHIFT]` + `[CTRL 3]` is METRO VOL (0–5). ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- CLICK > Output Assign ON sends the click to LINE OUT and USB too; otherwise it is headphones only. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/3e7bdeb3-c925-4fdf-87d2-e74792cfd23c),
reviewed against the 5.50 reference manual on 2026-10-28.

This corrects an answer from an earlier claude.ai chat on 2026-10-17
(https://claude.ai/chat/f3836cc2-d599-461f-adcd-1cd10f4d752b). That answer said the
metronome also clicks while a pattern just plays back, and suggested a hi-hat loop on a
pad as an alternative click. The CLICK parameters only mention sampling, resampling and
pattern recording, so plain playback gives no click. The hi-hat loop pad still works as
a click you can always hear.

CLICK also holds the count-ins: Count-In:REC and Count-In:PTN (OFF, 1 MEAS, 2 MEAS,
WAIT), which `[SHIFT]` + pad `[10]` cycles.

## Still to try / open questions
- If you press `[REC]` and play pads before switching to rehearsal, those notes are
  recorded. Check whether an empty practice pattern is left on the pad after
  `[EXIT]`, and delete it if so.
