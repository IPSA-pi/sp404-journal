---
title: MIDI, USB & computer audio
description: Connecting to a computer over USB-C, USB audio input routing, and MIDI clock sync.
order: 60
---

## USB connection
- No driver is needed: the unit is a USB Audio Device Class 2.0 device. Don't connect through a USB hub, and don't use a charge-only cable.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html, status: manual -->
- With a USB-C to USB-A cable the computer can't power the unit; use the AC adaptor or batteries.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html, status: manual -->

## Audio from the PC
- Windows: Control Panel > Hardware and Sound > Sound > Playback, select "Speakers SP-404MKII-G" and click Set Default. Then press `[EXT SOURCE]` on the unit so it lights.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html, status: manual -->
- `[EXT SOURCE]` blinks red when the input level is too high (the audio may distort); turn the source down.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943233178517131.html, status: manual -->
- UTILITY > SYSTEM > GENERAL > USB IN: "LINE IN" mixes USB audio with LINE IN, before INPUT FX; "MIX OUT" mixes it into the output without INPUT FX or BUS FX.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- Use USB IN = "LINE IN" when you want to sample audio from the PC.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, status: unverified -->

## MIDI sync
- UTILITY > SYSTEM > MIDI > MIDI Sync: "USB" or "Auto" makes the unit follow MIDI clock from a DAW over USB; "Internal" uses the unit's own tempo.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
