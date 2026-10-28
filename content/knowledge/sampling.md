---
title: Sampling & recording
description: Getting audio onto pads, recording settings, trimming and chopping, tempo data and BPM SYNC, pitch/speed and envelope.
order: 10
---

## Ways to get audio onto a pad
- Sampling (`[REC]`) records the external input (USB, LINE IN, mic/guitar) to an empty pad.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html, status: manual -->
- Resampling (`[RESAMPLE]`) records the unit's own playback, with effects, to a new pad; use it to print effects or merge several pads into one.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html, status: manual -->
- Skip-back sampling keeps the last 25 seconds (40 with SYSTEM > MARK Function = "SBS Long"). While `[MARK]` is blinking, press `[MARK]`, then `[REC]`, then a pad to save it. `[EXIT]` or power-off without saving loses it.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907879578474123.html, status: manual -->
- The looper (MARK Function = "Looper") records up to 16 seconds with overdub; it can't be used at the same time as skip-back.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8584103589852939.html, status: manual -->
- If the audio is already a file on the PC, importing it from the SD card is cleaner than recording it over USB (no level or timing errors); record over USB for streams, a DAW or a browser.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, status: unverified -->
- `[REC]` in sample mode is sampling standby and stops pattern playback; to record while a pattern plays, start from pattern mode with `[RESAMPLE]`.
  <!-- learned: 2026-10-25, entry: 2026-10-25-recording-guitar-over-a-pattern, status: unverified -->
- Resampling with ROUTING "ExtIn" records only the external input while the unit's playback runs as backing, e.g. a guitar loop over drums.
  <!-- learned: 2026-10-25, entry: 2026-10-25-recording-guitar-over-a-pattern, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html, status: manual -->
- A resampled pattern has no count-in: record two extra bars' worth (e.g. 8 bars for a 4-bar part), start in bar 5 and trim the front with `[START/END]`.
  <!-- learned: 2026-10-25, entry: 2026-10-25-recording-guitar-over-a-pattern, status: unverified -->

## Sampling settings
- Press `[REC]`: empty pads blink red. `[CTRL 1]` sets the sample tempo, `[CTRL 3]` the input volume. Press a blinking pad, then `[REC]` to start; press the pad or `[REC]` again to stop; `[EXIT]` cancels.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html, status: manual -->
- In sampling standby `[CTRL 2]` sets the length (1–32 measures, or ∞) and `[SHIFT]` + `[CTRL 2]` the time signature (1/4–7/4).
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html, status: manual -->
- `[RECORD SETTING]` screen: `[CTRL 1]` REC BPM (40.0–200.0, `[SHIFT]` for finer steps, or tap tempo), `[CTRL 2]` ROUTING ("ExtIn" = external input only, "Mix" = input plus the unit's playback), `[CTRL 3]` LEVEL (0–127), `[SHIFT]` + `[CTRL 3]` PAN.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html, status: manual -->
- Pressing `[VALUE]` on the input setting screen opens INPUT FX, which processes the input you are sampling.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904935578470283.html, status: manual -->
- `[SHIFT]` + pad `[10]` cycles the count-in: 1MEAS, 2MEAS, WAIT, OFF. WAIT starts sampling when the input exceeds SYSTEM > Auto Trig Level (1–10).
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906113178471819.html, status: manual -->
- `[SHIFT]` + pad `[9]` turns the metronome on/off (it sounds while sampling when SYSTEM > CLICK > Metronome:REC is ON).
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html, status: manual -->
- END SNAP: in sampling standby press `[START/END]` ("END Snap ON", button lit) and the end point is set on the beat near where you stop.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html, status: manual -->
- An external MIDI device can start and stop sampling with start (FA) / stop (FC) messages.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html, status: manual -->

## Recording in sync with a tempo
- To get a loop that syncs: set REC BPM to the source's real tempo, set the length in whole measures (not ∞), and turn on END SNAP before recording.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, status: unverified -->
- Count-in WAIT suits sampling from vinyl or a phone: recording starts on the first sound, with no dead air.
  <!-- learned: 2026-10-13, entry: 2026-10-13-sampling-best-practices-and-pattern-quantize, status: unverified -->
- When preparing loops in a DAW, run it at 48 kHz (the unit's rate) and loop exactly 1, 2 or 4 bars; an exported exact-length WAV at a known tempo needs no trimming on the unit.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, status: unverified -->
- Ableton export for the unit: loop brace on exact bars, File > Export Audio/Video with Sample Rate 48000, Bit Depth 16 (dither on), Normalize off, Render as Loop off; the file then matches the unit's 48 kHz 16-bit format exactly.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->
- Put the tempo and bar count in the filename (`chords_92bpm_4bar.wav`): the unit reads no tempo from filenames or metadata, so the name is the only reminder.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->
- Sampling a DAW over USB: set REC BPM to the DAW tempo, length in bars, END Snap ON, and count-in WAIT so recording starts on the DAW's first beat; the sample's tempo is then already correct for BPM SYNC.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->
- Big tempo stretches sound grainy; staying within about ±10 BPM of the original keeps it clean (rule of thumb, not a manual figure).
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, status: unverified -->

## Trimming and processing
- `[START/END]`, then select the pad: `[CTRL 1]` moves the start point, `[CTRL 3]` the end point, `[CTRL 2]` the loop point (when the loop is on).
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html, status: manual -->
- With `[RESAMPLE]` lit on the START/END or marker screen, points snap to the nearest zero crossing, which avoids clicks.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html, status: manual -->
- Pressing `[VALUE]` on the START/END screen offers TRUNCATE (delete audio outside the points), NORMALIZE and EMPHASIS. These rewrite the sample data and cannot be undone.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html, status: manual -->

## Chopping
- Markers: select the pad, then `[SHIFT]` + `[START/END]`. `[CTRL 1]` moves the cursor and `[MARK]` adds a marker; `[CTRL 3]` selects a marker, `[CTRL 2]` moves it, `[DEL]` deletes it. Pads `[1]`–`[16]` preview each slice.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html, status: manual -->
- Marking by ear: on the marker screen press pad `[1]` to play, then tap the blinking pads `[2]`–`[16]` where you want cuts.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html, status: manual -->
- AUTO MARK (`[VALUE]` > AUTO MARK on the marker screen): TIME DIVISION 2–16 equal slices, LEVEL 1–10, or TRANSIENT HARD/MID/SOFT. TIME DIVISION suits loops trimmed to exact bars, TRANSIENT suits drum breaks.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html, status: manual -->
- `[VALUE]` > ASSIGN TO PAD sends slices to pads: turn `[VALUE]` to choose the first pad, `[MARK]` confirms the layout, `[VALUE]` assigns. You can switch bank before `[MARK]`; `[CTRL 3]` toggles GATE for the slices. Pads that light red already hold a sample and will be overwritten.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html, status: manual -->
- A sample seems limited to 16 slices (markers map to pads `[1]`–`[16]`); the manual doesn't state a limit.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, status: unverified -->
- To chop a whole song, narrow START/END to one section, chop and assign it, then move START/END to the next section; the song pad stays intact. Delete the song pad afterwards to save storage.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, status: unverified -->

## Tempo data and BPM SYNC
- Three tempos: the sample tempo (per sample), the bank tempo and the project tempo. Patterns always play at the base tempo (bank or project); a sample follows it only when its BPM SYNC is on.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935117978507147.html, status: manual -->
- `[SHIFT]` + pad `[11]` opens TEMPO SEL: `[CTRL 1]` chooses PROJECT or BANK as the base tempo, `[VALUE]` sets the BPM (`[SHIFT]` + `[VALUE]` for decimals).
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936372378508683.html, status: manual -->
- Tap tempo: `[SHIFT]` + pad `[11]`, tap `[SUB PAD]` (blinking orange) in time, then `[EXIT]`; the tempo is set for the project or bank.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7936961178509451.html, status: manual -->
- `[BPM SYNC]` makes a sample play at the bank or project tempo; `[SHIFT]` + `[BPM SYNC]` switches it for every sample in the bank. It needs accurate tempo data in each sample.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html, status: manual -->
- A sample's tempo is set on the `[PITCH/SPEED]` screen: turn `[VALUE]` to BPM SET. AUTO with a range (100-199, 80-159, 70-139, 50-99) analyses the whole sample; "SX (Length)" derives it from the sample length (good up to about 10 s); MANU (0.1 steps) and MANU-F (0.01 steps) set it by hand.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html, status: manual -->
- SYSTEM > "BPM Auto Dtct" ON detects the tempo when a sample is imported, using the "BPM Detect Rng" range.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- Tap tempo sets the project or bank tempo, not the sample's. To give a sample a tapped tempo, play it with BPM SYNC off, tap, then enter the value in BPM SET MANU or MANU-F.
  <!-- learned: 2026-10-27, entry: 2026-10-27-tap-tempo-then-chop, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html, status: manual -->

## Pitch, speed and volume
- `[PITCH/SPEED]`, then a pad: `[CTRL 1]` SPEED (50–150%, only when BPM SYNC is off), `[CTRL 2]` PITCH, `[CTRL 3]` VOLUME (0–127); `[SHIFT]` + `[CTRL 2]` FINE, `[SHIFT]` + `[CTRL 3]` PAN.
  <!-- learned: 2026-10-12, entry: 2026-10-12-pitch-speed-and-groove-screen, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html, status: manual -->
- PITCH runs -12.00 to +12.00 with VINYL MODE "No" but -12.00 to +7.00 with VINYL MODE "Yes".
  <!-- learned: 2026-10-12, entry: 2026-10-12-pitch-speed-and-groove-screen, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html, status: manual -->
- VINYL MODE (`[SHIFT]` + turn `[VALUE]` on the pitch/speed screen): "Yes" changes speed and pitch together like a record; "No" keeps them independent and enables VARI MODE: "Backing" for decaying, percussive sounds, "Ensemble" for sustained sounds (twice the voices for mono, four times for stereo).
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html, status: manual -->
- To make a speed/pitch change permanent, resample the pad to a new one.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, status: unverified -->
- VARI MODE is Roland's VariPhrase time-stretch engine, first used in the VP-9000 sampler.
  <!-- learned: 2026-10-28, entry: 2026-10-28-melodics-koala-and-variphrase, status: unverified -->

## Groove
- The Humanize / Rate / Groove screen is the Groove screen: press `[PITCH/SPEED]`, then `[ROLL]`. `[CTRL 1]` Humanize (Off, Low, Mid, High), `[CTRL 2]` Rate (1–15), `[CTRL 3]` Groove template (Off, 8<…16>>).
  <!-- learned: 2026-10-12, entry: 2026-10-12-pitch-speed-and-groove-screen, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html, status: manual -->
- Groove templates follow the sample's tempo, so its BPM must be set correctly, and they are all 4/4.
  <!-- learned: 2026-10-12, entry: 2026-10-12-pitch-speed-and-groove-screen, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html, status: manual -->
- Pressing `[ROLL]` again should return from the Groove screen to pitch/speed (not documented); otherwise `[EXIT]`, then `[PITCH/SPEED]`.
  <!-- learned: 2026-10-12, entry: 2026-10-12-pitch-speed-and-groove-screen, status: unverified -->

## Envelope
- `[SHIFT]` + `[PITCH/SPEED]` opens ENVELOPE: `[CTRL 1]` ATTACK (0–127, 127 = 3 s fade-in), `[CTRL 2]` HOLD (1–100% of the sample), `[CTRL 3]` RELEASE (0–127, 127 = 3 s fade-out).
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html, status: manual -->
- A short RELEASE hides clicks at the ends of slices.
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, status: unverified -->
- On the ENVELOPE screen hold `[MARK]` and press a pad to select it without playing it.
  <!-- learned: 2026-10-17, entry: 2026-10-17-envelopes-on-several-pads-chops-and-export, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html, status: manual -->

## Limits
- Samples are stored as 16-bit linear, 48 kHz; the maximum sampling time is 16 minutes (about 185 MB per sample).
  <!-- learned: 2026-10-12, entry: 2026-10-12-chopping-samples-and-sample-tips, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html, status: manual -->
