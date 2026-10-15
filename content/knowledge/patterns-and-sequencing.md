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
- Microscope: during TR-REC hold `[PATTERN EDIT]` and press a step pad; turning `[VALUE]` shifts that note's timing, `[CTRL 2]` sets its pitch, `[CTRL 3]` its velocity.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8596903593591435.html, status: manual -->

## Effect motion
- EFX MOTION REC: play the pattern, press `[REC]`, then `[MARK]` ("MOTION REC START"), and operate the effects. `[START/END]` turns playback of the recorded moves on/off.
  <!-- learned: 2026-10-14, entry: 2026-10-14-effects-buttons-and-delay-feedback, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925799578494091.html, status: manual -->
- `[DEL]` + `[MARK]` on the pattern edit screen erases all recorded effect operations.
  <!-- learned: 2026-10-14, entry: 2026-10-14-effects-buttons-and-delay-feedback, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7926465178494859.html, status: manual -->

## Patterns to samples
- BOUNCE converts a pattern into a sample on a pad; BUS 1–4 effects are bypassed. Resampling the pattern is the alternative that keeps effects.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html, status: manual -->
