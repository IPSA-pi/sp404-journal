---
title: "Recording a reggaeton loop in sync with the project BPM"
date: 2026-10-11
tags: [sampling, bpm-sync, tempo, loops, usb-audio]
topics: [sampling]
session: cac6ad56
firmware: "5.52"
manual_refs:
  - title: "Configuring the sampling settings (RECORD SETTING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html
  - title: "Sampling"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html
  - title: "Setting the tempo data in a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html
  - title: "Playing back a sample to the tempo of a song (BPM SYNC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html
  - title: "Setting the tempo for a bank or project"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936372378508683.html
summary: "Record the loop with the right REC BPM, trim it to whole bars, give the sample its tempo in BPM SET, then turn on BPM SYNC so it follows the project tempo."
---

## Question
How can I record a sample of a reggaeton song in sync with the BPM of the
SP-404MKII?

## Key takeaways
- Before recording, set the sample tempo with `[CTRL 1]` in sampling standby (or REC BPM on the `[RECORD SETTING]` screen), so the new sample starts with correct tempo data. ([Sampling](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html))
- Trim the loop to exact bars with `[START/END]`: `[CTRL 1]` moves the start point, `[CTRL 3]` the end point. ([START/END](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html))
- The sample's tempo lives on the `[PITCH/SPEED]` screen under BPM SET (AUTO, MANU, MANU-F), not on the START/END screen. ([Setting the tempo data in a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html))
- Press `[BPM SYNC]` to make the sample follow the bank or project tempo; `[SHIFT]` + `[BPM SYNC]` does every sample in the bank. ([BPM SYNC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html))
- Set the base tempo with `[SHIFT]` + pad `[11]` (TEMPO SEL): `[CTRL 1]` picks PROJECT or BANK, `[VALUE]` sets the BPM, or tap `[SUB PAD]`. ([Setting the tempo for a bank or project](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936372378508683.html))
- Alternative: warp the song in Ableton Live, export an exact 4-bar WAV at a known tempo and import that instead of recording.

## Details
Claude answered this from memory, without the manuals (the `docs/` mirror was
set up the next day). The backfill checked it against the reference manual and
corrected it as follows.

**Corrections from the manual**
- The session said "the SP doesn't sync while it records". The manual has you
  set the sample tempo *before* sampling: `[CTRL 1]` in standby (REC BPM,
  40.0–200.0), with END SNAP available to put the end point on a beat. The
  unit can also follow a DAW's MIDI clock and start/stop messages.
- The session said to check the calculated BPM "in the START/END edit screen"
  and that the SP "works out the sample's BPM from its length". In the manual
  the tempo is set on the `[PITCH/SPEED]` screen under BPM SET. Only the
  AUTO range "SX (Length)" detects tempo from the sample length (suited to
  samples up to about 10 seconds); the 100-199 / 80-159 / 70-139 / 50-99
  ranges analyse the whole sample. MANU / MANU-F set it by hand.
- "Press BPM SYNC and tap the pad so it lights": the manual simply says to
  press `[BPM SYNC]` (for the selected sample).

**The workflow, as corrected**
1. Get the audio in: LINE IN from a phone or computer, or USB-C from the PC
   (set "Speakers SP-404MKII-G" as the Windows default output and press
   `[EXT SOURCE]`).
2. Press `[REC]`; empty pads blink red. Set the tempo with `[CTRL 1]` and the
   input level with `[CTRL 3]`. Press a blinking pad, then `[REC]` to start;
   press the pad or `[REC]` again to stop.
3. Trim to exactly 1, 2 or 4 bars with `[START/END]`.
4. Check or set the tempo: `[PITCH/SPEED]`, select the pad, turn `[VALUE]` to
   BPM SET. Reggaeton usually sits around 85–100 BPM; if it reads half or
   double, use an AUTO range that contains the real tempo, or MANU.
5. Press `[BPM SYNC]` for the pad, and `[LOOP]` if it should cycle by itself.
6. Set the project tempo with `[SHIFT]` + pad `[11]`.

Claude also suggested staying within about ±10 BPM of the original tempo
because big stretches sound grainy; that figure is not from the manual.

## Still to try / open questions
- Try the AUTO tempo ranges on a trimmed reggaeton loop and compare with MANU.
- How far can a loop be stretched before it sounds bad? (The ±10 BPM figure is a rule of thumb, not a manual value.)
