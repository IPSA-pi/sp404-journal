---
title: Mixing & levels
description: Sample and bank volume, velocity, output gain, compression and gain-staging habits.
order: 110
---

## Volume controls
- Each sample's VOLUME is the main fader: `[PITCH/SPEED]`, the pad, `[CTRL 3]` (0–127); `[SHIFT]` + `[CTRL 3]` is PAN. Hold `[REMAIN]` while turning to change the whole bank.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html, status: manual -->
- `[SHIFT]` + pad `[1]` FIXED VELOCITY plays a sample at 127 every time; `[SHIFT]` + pad `[2]` 16 VELOCITY spreads 16 fixed levels across the pads.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7891700378455691.html, status: manual -->
- BANK VOLUME is set per bank with `[SHIFT]` + a bank button and `[VALUE]`; there is no single project volume. Samples copied between banks with different BANK VOLUME change loudness.
  <!-- learned: 2026-10-27, entry: 2026-10-27-project-tempo-and-bank-volume, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7885761178449547.html, status: manual -->
- Output gain lives in SYSTEM > GAIN (`[SHIFT]` + pad `[12]`): LINE OUT 0/+6/+12 dB, PHONES -18 to +12 dB, USB OUT -24/-12/0 dB. Attenuator ON tames a distorting LINE IN.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- If the unit sounds quiet in a DAW or interface, raise USB OUT or LINE OUT gain instead of pushing sample volumes into clipping.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, status: unverified -->

## Compression and ducking
- SIDE CHAIN GAIN adds 0.0–6.0 dB of makeup; setting SOURCE and TARGET to the same bus makes it a plain compressor. DRY can't be chosen while DRY Routing is "BUS 3".
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html, status: manual -->
- Roland's side-chain tip: find the threshold with RATIO at maximum and RELEASE at minimum, then set RATIO to about 100 and lengthen RELEASE for short, punchy kicks.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html, status: manual -->
- The Compressor effect has no threshold knob, only SUSTAIN, ATTACK, RATIO and LEVEL, so input level decides how hard it works. It can get very loud.
  <!-- learned: 2026-10-24, entry: 2026-10-24-videos-and-tips-for-audio-levels, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7996276378576267.html, status: manual -->

## Gain-staging habits
- Bring samples in at similar levels (for example normalized to about -1 dBFS on the computer) so VOLUME only has to balance them.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, status: unverified -->
- Leave headroom: set the loudest element (kick or main loop) around 100–110 and mix the rest under it; stacked pads and Resonator, Filter+Drive or Lo-fi add level fast.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, status: unverified -->
- Mix against an anchor: set the kick alone first, then add snare, bass, chops and texture one at a time. Small pan moves (L:10 to R:10) on hats and percussion clear the middle.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, status: unverified -->
- Before effects, drums peaking around -12 to -9 dBFS leave room; keep about 6 dB spare if the mix will be finished in a DAW.
  <!-- learned: 2026-10-24, entry: 2026-10-24-videos-and-tips-for-audio-levels, status: unverified -->
- Resample a finished loop to fix its balance and free voices, but only after the levels are set.
  <!-- learned: 2026-10-19, entry: 2026-10-19-mixing-the-volume-of-samples, status: unverified -->

## Learning resources
- Videos: "Roland SP-404 MKII! How To Make Your First Beat" (mixing at 22:14, levels and envelopes at 5:20); Loopop's "SP-404 MK2 Review: 9 tips & ideas" (bus effects 15:10, pad FX routing 19:10); the spvidz channel for resampling.
  <!-- learned: 2026-10-24, entry: 2026-10-24-videos-and-tips-for-audio-levels, status: unverified -->
