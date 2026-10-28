---
title: Patterns & sequencing
description: Real-time and TR-REC pattern recording, quantize, pattern editing, effect motion and converting patterns to samples.
order: 30
---

## Real-time recording
- `[PATTERN SELECT]`, `[REC]` (empty pattern pads blink red), press a blinking pad; on the RECORD SETTING screen press `[REMAIN]` until REC MODE is "Real-Time" (`[REMAIN]` lit; blinking = TR-REC).
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- Real-Time settings: `[CTRL 1]` BPM (40–200), `[CTRL 2]` LENGTH (1–64 measures, can't be changed once recording starts), `[VALUE]` QTZ, `[CTRL 3]` STRENGTH or SHFL RATE, `[SHIFT]` + `[CTRL 2]` TIME SIGN, `[SHIFT]` + `[CTRL 3]` METRO VOL (0–5).
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- `[REC]` starts loop recording; each pass overdubs without overwriting. `[EXIT]` once finishes and saves automatically, twice stops playback.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- While recording: `[REC]` toggles rehearsal (plays without recording), `[SHIFT]` + `[PATTERN SELECT]` undoes what you just recorded, and `[DEL]` enters erase mode where holding a pad erases its notes for as long as it is held.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- For patterns, `[SHIFT]` + pad `[10]` count-in WAIT starts recording along with your first sample playback.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921293978488715.html, status: manual -->
- The sequencer resolution is 480 ticks per quarter note; patterns are 1 to 64 bars.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html, status: manual -->
- Press `[REC]` while a pattern plays to overdub in real time; recording waits for bar 1 ("Wait for REC"). `[SHIFT]` + `[REC]` switches to TR-REC on that pattern instead.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html, status: manual -->
- Hold `[ROLL]` and press a pad during real-time recording to write a roll for as long as you hold it.
  <!-- learned: 2026-10-21, entry: 2026-10-21-combining-a-free-and-a-tr-rec-pattern, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9359437993646859.html, status: manual -->

## Quantize
- QTZ values: Off, GRID 32, GRID 16.3, GRID 16, GRID 8.3, GRID 8, GRID 4.3, GRID 4, SHUFFLE 16, SHUFFLE 8. The ".3" values are triplets (GRID 4.3 = quarter-note triplets).
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- With GRID, STRENGTH 100% puts notes exactly on the grid and lower values move them only part of the way. With SHUFFLE, SHFL RATE (-50 to +50) delays the upbeats; 0 is no shuffle and +10 to +16 "generally give a pleasant shuffle feel".
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html, status: manual -->
- "Free" recording is QTZ Off: hits are stored where you played them. GRID with STRENGTH around 50–70% is a middle route (suggestion, not a manual figure).
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, status: unverified -->
- GRID 16 is the usual choice for drums.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, status: unverified -->
- Quantize afterwards, per pad: `[PATTERN SELECT]` > `[PATTERN EDIT]` > pattern pad > `[RECORD SETTING]` (press again if needed), press the pads to quantize, `[CTRL 2]` QTZ, `[CTRL 3]` STR, `[SHIFT]` + `[CTRL 2]` / `[CTRL 3]` range start/end, then `[VALUE]` > OK.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html, status: manual -->
- Quantizing a pattern can't be reverted, so copy the pattern first. On that screen STR with SHUFFLE works differently: 50% is even spacing, higher values lean toward dotted notes.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html, status: manual -->

## TR-REC (step recording)
- TR-REC (`[REMAIN]` blinking on RECORD SETTING) places notes on steps: hold `[SUB PAD]` and press a pad to choose the sample, then pads `[1]`–`[16]` toggle steps; `[VALUE]` selects the measure.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html, status: manual -->
- In TR-REC, `[SHIFT]` + `[CTRL 2]` sets SHUFFLE and `[SHIFT]` + `[CTRL 3]` sets START (-50 to 99%), the timing at which the sample starts.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html, status: manual -->
- Microscope: during TR-REC pick the sample with `[SUB PAD]` + pad, then hold `[PATTERN EDIT]` and press a step pad. `[CTRL 1]` ITEM picks a note when a step holds several, turning `[VALUE]` shifts timing, `[CTRL 2]` pitch, `[CTRL 3]` velocity, `[DEL]` deletes the note, `[EXIT]` closes.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8596903593591435.html, status: manual -->
- Select a sample silently in TR-REC with `[VALUE]` (press) + `[SUB PAD]` + pad; hold `[HOLD]` to hear only the selected pad.
  <!-- learned: 2026-10-17, entry: 2026-10-17-recording-modes-undo-and-tr-rec-sample-select, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html, status: manual -->
- `[DEL]` + `[A/F]` deletes one measure of the selected pad's notes; `[DEL]` + `[B/G]` deletes one measure for all pads.
  <!-- learned: 2026-10-17, entry: 2026-10-17-recording-modes-undo-and-tr-rec-sample-select, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008257178590091.html, status: manual -->
- `[PITCH/SPEED]` sets PITCH MODE to CHROMATIC: each step gets its own note, chosen by holding and turning `[VALUE]`.
  <!-- learned: 2026-10-19, entry: 2026-10-19-recording-a-chromatic-part-into-a-pattern, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html, status: manual -->
- `[ROLL]` + `[CTRL 1]`–`[CTRL 3]` records knob movement into the steps (MODE TRIG).
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008257178590091.html, status: manual -->
- TR-REC is a straight grid. For triplets use SUBSTEP (`[CTRL 1]`, MODE TRIG), nudge notes in Microscope, or record that part in real time with QTZ GRID 8.3 or 16.3.
  <!-- learned: 2026-10-27, entry: 2026-10-27-phasing-triplets-and-groove, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html, status: manual -->

## Effect motion
- EFX MOTION REC: play the pattern, press `[REC]`, then `[MARK]` ("MOTION REC START"), and operate the effects. `[START/END]` turns playback of the recorded moves on/off.
  <!-- learned: 2026-10-14, entry: 2026-10-14-effects-buttons-and-delay-feedback, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925799578494091.html, status: manual -->
- `[DEL]` + `[MARK]` on the pattern edit screen erases all recorded effect operations.
  <!-- learned: 2026-10-14, entry: 2026-10-14-effects-buttons-and-delay-feedback, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7926465178494859.html, status: manual -->

## Patterns to samples
- BOUNCE converts a pattern into a sample on a pad; BUS 1–4 effects are bypassed. Resampling the pattern is the alternative that keeps effects.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html, status: manual -->
- BOUNCE steps: `[COPY]`, the pattern pad, `[PATTERN SELECT]`, a destination pad (empty ones blink blue), then `[VALUE]` or `[COPY]`. It overwrites the destination and is silent while converting.
  <!-- learned: 2026-10-19, entry: 2026-10-19-resampling-a-pattern-without-effects, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html, status: manual -->
- To record over a pattern, start from pattern mode: `[PATTERN SELECT]` lit, `[RESAMPLE]`, an empty pad, then the pattern pad; the pattern and the recording start together.
  <!-- learned: 2026-10-25, entry: 2026-10-25-recording-guitar-over-a-pattern, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7923444378491019.html, status: manual -->
- Keep arrangements as patterns and bounce only to finish: a sample loses per-note editing, quantize and effect motion.
  <!-- learned: 2026-10-21, entry: 2026-10-21-combining-a-free-and-a-tr-rec-pattern, status: unverified -->

## Editing patterns
- `[PATTERN SELECT]` > `[PATTERN EDIT]` > pattern: `[CTRL 1]` BPM, `[CTRL 2]` LOOP START, `[CTRL 3]` LENGTH, which only takes 1, 2, 4, 8, 16, 32 or 64 bars. Odd lengths like 3 or 12 bars can only be set when first recording.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html, status: manual -->
- `[VALUE]` > DUPLICATE copies the pattern onto its own end (2 bars become 4); it can't append a different pattern.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929690778499467.html, status: manual -->
- `[VALUE]` > CROP deletes everything outside LOOP START and LENGTH.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930202778500235.html, status: manual -->
- To clear one pad's notes: on the pattern edit screen hold `[DEL]`, press the pad, then press `[VALUE]` while still holding `[DEL]`.
  <!-- learned: 2026-10-24, entry: 2026-10-24-pattern-undo-erase-and-microscope, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7929178778498699.html, status: manual -->
- `[COPY]`, the source pattern, the destination, then `[REMAIN]` lets you keep only chosen pads, e.g. to split drums from melody.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7932916378504075.html, status: manual -->
- `[SHIFT]` + pad `[5]` swaps two patterns, `[COPY]` + `[EXIT]` copies a bank, `[SHIFT]` + `[COPY]` protects a bank; swap, bank copy and delete need the pattern stopped, and deletes can't be undone.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7931738778502539.html, status: manual -->
- Patterns store notes, not audio: change a pad's sample and the pattern plays the new one.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, status: unverified -->

## Combining and chaining patterns
- Only one pattern plays at a time; pressing another pattern pad queues it to start when the current one ends. There is no merge function.
  <!-- learned: 2026-10-21, entry: 2026-10-21-combining-a-free-and-a-tr-rec-pattern, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html, status: manual -->
- To combine a grid part with a free part: TR-REC the grid part in a 1-bar pattern, DUPLICATE it up to the length you need, then press `[REC]` during playback and play the free part on top.
  <!-- learned: 2026-10-21, entry: 2026-10-21-combining-a-free-and-a-tr-rec-pattern, status: unverified -->
- PATTERN CHAIN: in pattern mode hold `[HOLD]` and press a pad (chain 1–16), then press up to 16 patterns in order, across banks if needed; `[SUB PAD]` plays the chain and `[REMAIN]` toggles repeat.
  <!-- learned: 2026-10-19, entry: 2026-10-19-editing-pattern-length-and-adding-tr-rec, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925133978493323.html, status: manual -->

## Polymeter, polyrhythm and phasing
- Layers of different bar lengths (3 against 4) need looping samples, not patterns: record each at the same tempo to exact bars, then LOOP and BPM SYNC on, GATE off. They realign every 12 bars.
  <!-- learned: 2026-10-27, entry: 2026-10-27-polymeter-and-polyrhythm-with-loops, status: unverified -->
- Polymeter is the same pulse with different cycle lengths (a 3-bar loop over a 4-bar loop). Polyrhythm is one cycle split into different equal parts (3 against 4 inside a bar).
  <!-- learned: 2026-10-27, entry: 2026-10-27-polymeter-and-polyrhythm-with-loops, status: unverified -->
- Phasing: the same loop on two pads with BPM SYNC off on one and its SPEED nudged (`[CTRL 1]`, only settable with BPM SYNC off). 0.5% faster takes about 200 passes to realign; 1–3% drifts audibly within a minute or two.
  <!-- learned: 2026-10-27, entry: 2026-10-27-phasing-triplets-and-groove, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html, status: manual -->
