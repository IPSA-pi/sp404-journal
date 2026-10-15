---
title: "Sampling best practices, and recording patterns quantized or free"
date: 2026-10-13
tags: [sampling, end-snap, count-in, patterns, quantize, tr-rec, real-time]
topics: [sampling, patterns-and-sequencing]
session: 97a4d317
firmware: "5.52"
manual_refs:
  - title: "Configuring the sampling settings (RECORD SETTING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html
  - title: "Sampling"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html
  - title: "Setting the playback and loop regions (START/END)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
  - title: "Aligning the playback timing of samples inputted to a pattern (QUANTIZE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html
  - title: "Creating a new pattern (TR-REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html
summary: "Set tempo, length and level before sampling; for patterns, QTZ GRID/SHUFFLE pulls hits to a grid, QTZ Off keeps them where played, and you can quantize per pad afterwards."
---

## Question
Explain best sampling practices again, and pattern creation with quantization
and "free" quantization.

## Key takeaways
- In sampling standby (`[REC]`), `[RECORD SETTING]` gives REC BPM (`[CTRL 1]`), ROUTING ExtIn/Mix (`[CTRL 2]`), LEVEL (`[CTRL 3]`) and PAN (`[SHIFT]` + `[CTRL 3]`); pressing `[VALUE]` there opens INPUT FX. ([RECORD SETTING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html))
- `[SHIFT]` + pad `[10]` cycles the count-in (1MEAS, 2MEAS, WAIT, OFF); WAIT starts sampling when the input exceeds Auto Trig Level. `[SHIFT]` + pad `[9]` toggles the metronome. ([Adding a count-in before sampling](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906113178471819.html))
- Real-time pattern recording: `[PATTERN SELECT]`, `[REC]`, a blinking pad, `[REMAIN]` until REC MODE is "Real-Time"; `[VALUE]` sets QTZ (Off, GRID 32…GRID 4, SHUFFLE 16/8), `[CTRL 3]` STRENGTH or SHFL RATE. ([real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- "Free" isn't a manual term: QTZ Off stores hits where you played them (480 ticks per quarter note); lower STRENGTH keeps some feel. ([Main specifications](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html))
- Quantize afterwards per pad: `[PATTERN SELECT]` > `[PATTERN EDIT]` > pattern pad > `[RECORD SETTING]`, pick pads, `[CTRL 2]` QTZ, `[CTRL 3]` STR, `[VALUE]` > OK. It can't be reverted. ([QUANTIZE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html))
- While recording: `[REC]` toggles rehearsal, `[SHIFT]` + `[PATTERN SELECT]` undoes the last take, `[DEL]` + held pad erases. ([real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))

## Details
**Sampling, in a sensible order** (the manual gives procedures, the order is
Claude's recommendation):
1. `[REC]`: empty pads blink red.
2. Set the sample tempo with `[CTRL 1]` (`[SHIFT]` for finer values, or tap
   tempo) so END SNAP and later BPM SYNC line up.
3. `[CTRL 2]` = length 1–32 measures or ∞; `[SHIFT]` + `[CTRL 2]` = time
   signature 1/4–7/4.
4. `[RECORD SETTING]` for level, routing, pan; `[VALUE]` for INPUT FX (printed
   into the recording).
5. Metronome and count-in. WAIT suits sampling from vinyl or a phone: no dead
   air at the start. Auto Trig Level is a SYSTEM parameter, 1–10.
6. END SNAP: press `[START/END]` in standby ("END Snap ON").
7. Press a blinking pad, then `[REC]`; stop with the pad or `[REC]`; `[EXIT]`
   cancels.

After recording: trim with `[START/END]` (`[RESAMPLE]` lit snaps to zero
crossings); `[VALUE]` there for TRUNCATE / NORMALIZE / EMPHASIS (destructive);
set the tempo with `[PITCH/SPEED]` > BPM SET; missed a take? While `[MARK]`
blinks, press `[MARK]`, `[REC]`, then a pad (skip-back keeps 25 s, 40 s with
MARK Function "SBS Long").

**Pattern parameters (Real-Time)**

| Control | Parameter | Values |
| --- | --- | --- |
| `[CTRL 1]` | BPM | 40–200 |
| `[CTRL 2]` | LENGTH | 1–64 measures; can't be changed once recording starts |
| `[VALUE]` | QTZ | Off, GRID 32 / 16.3 / 16 / 8.3 / 8 / 4.3 / 4, SHUFFLE 16 / 8 |
| `[CTRL 3]` | STRENGTH (GRID) | 0–100% |
| `[CTRL 3]` | SHFL RATE (SHUFFLE) | -50 to +50 |
| `[SHIFT]` + `[CTRL 2]` | TIME SIGN | 1/4–7/4 |
| `[SHIFT]` + `[CTRL 3]` | METRO VOL | 0–5 |

Press `[REC]` to record; the pattern loops and overdubs without overwriting.
`[EXIT]` once finishes (saved automatically), twice stops playback. For
patterns, count-in WAIT starts recording with your first pad hit.

**Quantized:** GRID pulls hits to the interval; ".3" values are triplets (GRID
4.3 = quarter-note triplets). STRENGTH 100% puts notes exactly on the grid.
SHUFFLE delays the upbeats; the manual says +10 to +16 "generally give a
pleasant shuffle feel". Claude's suggestions, not manual figures: GRID 16 is
the usual drum choice, and GRID with STRENGTH around 50–70% is a middle route.

**Quantizing afterwards:** `[SHIFT]` + `[CTRL 2]` / `[CTRL 3]` set the start and
end of the range. With SHUFFLE on that screen, STR 50% is even spacing and
higher values lean toward dotted notes. Copy the pattern first, since
quantizing can't be undone. This lets you tighten kick and snare and leave
hats or chops loose.

**TR-REC** (`[REMAIN]` blinking) is step entry, always on the grid: hold
`[SUB PAD]` and press a pad to choose the sample, then pads `[1]`–`[16]` place
steps. Feel comes from SHUFFLE (`[SHIFT]` + `[CTRL 2]`), per-step START
(`[SHIFT]` + `[CTRL 3]`, -50 to 99%), and Microscope (hold `[PATTERN EDIT]`
and press a step pad, then turn `[VALUE]` to shift that note's timing).

## Still to try / open questions
- Record a hi-hat part with QTZ Off and quantize only the kick and snare afterwards.
