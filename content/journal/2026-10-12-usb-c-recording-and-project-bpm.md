---
title: "Recording from a PC over USB-C, and how project BPM works"
date: 2026-10-12
tags: [sampling, usb-audio, bpm-sync, tempo, midi-sync, skip-back, looper]
topics: [sampling, midi-and-usb]
session: f71cf8c0
firmware: "5.52"
manual_refs:
  - title: "Inputting audio from a computer or mobile device (USB AUDIO)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html
  - title: "Connecting to a computer or mobile device"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html
  - title: "Sampling"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html
  - title: "Configuring the sampling settings (RECORD SETTING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html
  - title: "Setting the tempo"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935117978507147.html
  - title: "Setting the tempo data in a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
  - title: "SYSTEM (Parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
summary: "USB-C audio from Windows goes in through [EXT SOURCE]; samples follow the bank or project tempo only when BPM SYNC is on and their own tempo is right."
---

## Question
Give me a detailed breakdown of the ways to deal with samples when recording
from a PC over USB-C: what the project BPM is, best practices for recording
samples in sync with (or at the same BPM as) the project, and how samples can
be changed to fit the project BPM. (Chopping, asked in the same message, is in
its own entry.)

## Key takeaways
- No driver needed (USB Audio Device Class 2.0). Don't go through a USB hub or use a charge-only cable. ([Connecting to a computer or mobile device](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html))
- Windows: Control Panel > Sound > Playback > "Speakers SP-404MKII-G" > Set Default, then press `[EXT SOURCE]` so it lights. ([USB AUDIO](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html))
- Three tempos: sample tempo (per sample), bank tempo and project tempo. `[SHIFT]` + pad `[11]` (TEMPO SEL) picks PROJECT or BANK as the base tempo; patterns always play at it, samples only when BPM SYNC is on. ([Setting the tempo](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935117978507147.html))
- Record in sync: set REC BPM to the source tempo, set the length in measures with `[CTRL 2]`, and turn on END SNAP (`[START/END]` in standby). ([Sampling](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html))
- Fit an existing sample: `[PITCH/SPEED]` > BPM SET (AUTO range, SX (Length), MANU or MANU-F), then `[BPM SYNC]` on, or SPEED by hand with `[CTRL 1]` (50–150%, only with BPM SYNC off). ([Setting the tempo data in a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html))
- With a DAW, UTILITY > SYSTEM > MIDI > MIDI Sync "USB" or "Auto" makes the unit follow the DAW's MIDI clock. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))

## Details
Claude answered from the 5.50 reference manual. Later in the session the user
said the unit runs **Ver. 5.52** (shown under UTILITY > SYSTEM > VERSION), so
the 5.50 manual applies.

**Ways to get a sample onto a pad**

| Method | What it is | Best for |
| --- | --- | --- |
| Sampling (`[REC]`) | Records the external input (USB, LINE IN, mic/guitar) to an empty pad | Grabbing audio from the PC |
| Skip-back (`[MARK]`) | Saves the last 25 s (40 s with MARK Function = "SBS Long") | Catching something you weren't recording |
| Resampling (`[RESAMPLE]`) | Records the unit's own output, with effects, to a new pad | Printing effects, merging pads |
| Looper (MARK Function = "Looper") | Loop recorder with overdub, up to 16 s | Layering ideas live |
| Import from SD card | `[SHIFT]` + pad `[14]` > IMPORT, WAV/AIFF/MP3 | Audio you already have as files |
| Bounce | Converts a pattern to a sample, effects bypassed | Committing a beat |

If the audio is already a file on the PC, importing it is cleaner than
recording it over USB; record over USB when the source is a stream, a DAW or a
browser.

**USB setup.** If `[EXT SOURCE]` blinks red the input is too hot; turn the PC
volume down. UTILITY > SYSTEM > USB IN decides the path: "LINE IN" mixes USB
audio with LINE IN, before INPUT FX; "MIX OUT" sends it straight to the mixer
output without INPUT FX or BUS FX. Claude suggested "LINE IN" for sampling (its
reading, not a manual statement).

**Recording.** `[REC]` (empty pads blink red); `[CTRL 2]` = length 1–32
measures or ∞, `[SHIFT]` + `[CTRL 2]` = time signature; on `[RECORD SETTING]`:
`[CTRL 1]` REC BPM (`[SHIFT]` for fine steps, or tap tempo), `[CTRL 2]`
ROUTING ("ExtIn" = only the input, "Mix" = input plus the unit's playback),
`[CTRL 3]` LEVEL. Press the pad, then `[REC]`; press `[REC]` or the pad to stop.

**Recording already in sync.**
1. Set REC BPM to the real tempo of the source.
2. Set the length in measures rather than ∞.
3. END SNAP: in REC standby press `[START/END]` ("END Snap ON").
4. `[SHIFT]` + pad `[10]` cycles the count-in: "WAIT" starts when the input
   exceeds Auto Trig Level; "1MEAS"/"2MEAS" count in.
5. `[SHIFT]` + pad `[9]` toggles the metronome.
6. With a DAW: MIDI Sync "USB" or "Auto"; the DAW's start (FA) / stop (FC)
   messages can start and stop the recording.
7. In the DAW (Claude's advice): run at 48 kHz and loop exactly 1, 2 or 4 bars.

**Making an existing sample fit.** BPM SET AUTO detects the tempo: choose the
range that contains the real tempo to avoid half/double readings, or "SX
(Length)" for trimmed loops up to about 10 s. MANU (0.1 steps) or MANU-F (0.01
steps) if you know it. Then turn on `[BPM SYNC]` (`[SHIFT]` + `[BPM SYNC]` for
the whole bank), or leave it off and set SPEED by hand. VINYL MODE (`[SHIFT]` +
turn `[VALUE]`): "Yes" changes speed and pitch together like a record; "No"
keeps them independent and enables VARI MODE ("Backing" for decaying,
percussive sounds; "Ensemble" for sustained sounds, using 2× the voices for
mono and 4× for stereo samples). PITCH is `[CTRL 2]`; `[SHIFT]` + `[CTRL 2]` is
fine tune. Resample the pad to make a stretch permanent.

**Correction from the manual:** the session gave PITCH as ±12 semitones. That is
the range with VINYL MODE "No"; with VINYL MODE "Yes" it is -12.00 to +7.00.

## Still to try / open questions
- Does a USB source routed with USB IN = "MIX OUT" get recorded when sampling? The manual doesn't say; "LINE IN" is the safe choice.
- Try MIDI Sync = "USB" with Ableton sending clock, and record a loop started by the DAW's transport.
