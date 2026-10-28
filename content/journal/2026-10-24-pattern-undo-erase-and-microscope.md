---
title: "Undoing and erasing pattern notes, and fixing them with Microscope"
date: 2026-10-24
tags: [undo, erase, microscope, nudge, velocity, claude-app]
topics: [patterns-and-sequencing]
session: 9f9b785b
firmware: "5.52"
manual_refs:
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
  - title: "Editing patterns note by note (Microscope)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8596903593591435.html
  - title: "Editing a pattern (PATTERN EDIT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html
summary: "Undo with [SHIFT] + [PATTERN SELECT], erase live by pressing [DEL] then holding pads, and open Microscope in TR-REC with [PATTERN EDIT] + a step pad."
---

## Question
When recording a pattern, what options do I have to undo what I just played? How do
I use Microscope to nudge notes or change their velocity?

## Key takeaways
- While recording a pattern, `[SHIFT]` + `[PATTERN SELECT]` undoes the data you just recorded. ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- Erase while it loops: press `[DEL]` once to enter erase mode, then hold a pad while its bad hits pass; press `[DEL]` again to leave. ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- To clear one pad's notes from a pattern: `[PATTERN SELECT]` > `[PATTERN EDIT]` > the pattern, hold `[DEL]`, press the pad, then press `[VALUE]` while still holding `[DEL]`. ([PATTERN EDIT](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html))
- Microscope: in TR-REC hold `[SUB PAD]` + pad to pick the sample, then hold `[PATTERN EDIT]` and press a step pad. ([Microscope](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8596903593591435.html))
- In Microscope, `[CTRL 1]` ITEM picks a note when a step has several, `[CTRL 2]` pitch (-12 to +12), `[CTRL 3]` velocity (0–127), turning `[VALUE]` nudges timing and `[DEL]` deletes the note; `[EXIT]` closes it. ([Microscope](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8596903593591435.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/9f9b785b-896f-4632-b63d-941bded98998),
reviewed against the 5.50 reference manual on 2026-10-28.

Get into TR-REC on a playing pattern with `[SHIFT]` + `[REC]`. A good habit is to
record loosely in real time, then use Microscope to pull hits into the pocket and even
out velocities.

**Corrections from the manual.** The chat said "hold `[DEL]` and hold a pad";
in the manual `[DEL]` toggles erase mode. It also gave `[SHIFT]` + `[DEL]` + pad
for clearing a pad's part, which the manual doesn't have; the PATTERN EDIT method
above is the documented one.

## Still to try / open questions
- The chat said undo has 16 steps and doesn't work on the Chromatic or 16 Velocity
  screens. The manual says neither.
