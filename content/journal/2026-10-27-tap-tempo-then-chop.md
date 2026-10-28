---
title: "Tapping a sample's tempo, then chopping it"
date: 2026-10-27
tags: [tap-tempo, bpm-set, chop, auto-mark, assign-to-pad, claude-app]
topics: [sampling]
session: 3e7bdeb3
firmware: "5.52"
manual_refs:
  - title: "Setting the tempo in time with the rhythm (Tap Tempo)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936961178509451.html
  - title: "Setting the tempo data in a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html
  - title: "Marking and splitting samples (MARK)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html
  - title: "Using a marker to split and assign a sample to a pad (CHOP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html
summary: "Tap tempo sets the project or bank tempo, so tap to find the BPM, type it into the sample with BPM SET MANU, then chop with markers and ASSIGN TO PAD."
---

## Question
Step by step, how do I tap the BPM of a sample and then chop it?

## Key takeaways
- Tap tempo (`[SHIFT]` + pad `[11]`, tap `[SUB PAD]` while it blinks orange, `[EXIT]`) sets the project or bank tempo, not the sample's. ([Tap Tempo](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936961178509451.html))
- Play the sample with BPM SYNC off so you hear it at its own speed while tapping; LOOP on and GATE off keep it going.
- Copy the result into the sample: `[PITCH/SPEED]`, the pad, turn `[VALUE]` to BPM SET MANU (0.1 steps) or MANU-F (0.01), press `[VALUE]`, set the BPM, press `[VALUE]`. Then turn BPM SYNC back on. ([Setting the tempo data in a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html))
- Chop: `[SHIFT]` + `[START/END]` for markers, or `[VALUE]` > AUTO MARK > TIME DIVISION 2–16 to cut the whole sample into equal parts. ([MARK](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html))
- Then `[VALUE]` > ASSIGN TO PAD, pick pads, and press `[VALUE]` last. ([CHOP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/3e7bdeb3-c925-4fdf-87d2-e74792cfd23c),
reviewed against the 5.50 reference manual on 2026-10-28.

Tap 8–16 times for a stable reading. TIME DIVISION divides the whole sample (between
its start and end), so trim the loop to exact bars first: a 1-bar loop divided by 16
gives 16th notes, by 4 gives beats.

Tips: chop onto an empty bank; turn on zero-cross snap (`[RESAMPLE]` lit on the
marker screen) if cuts click; GATE on for drum breaks, off for melodic phrases
(advice, not from the manual).

**Correction from the manual.** The chat said empty pads show green on the assign
screen. In the manual empty pads blink yellow, turn green once picked, and pads that
already hold a sample turn red and are overwritten.

## Still to try / open questions
- The manual's MANUAL-mode section says "You can also set the tempo using the tap
  tempo function", and tap tempo is "automatically enabled" on some screens. Try
  tapping `[SUB PAD]` while editing BPM SET MANU: it may set the sample's BPM
  directly and skip the copying step.
