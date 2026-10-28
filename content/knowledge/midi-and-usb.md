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

- The one cable carries audio in both directions and MIDI ("transmit/receive audio output and MIDI data"), so a DAW can send audio to the unit, record its output and exchange MIDI at the same time.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html, status: manual -->
- Roland publishes no ASIO driver (its downloads page has only the system program and outline data), so on Windows Ableton Live sees the unit through MME/DirectX unless you add a generic ASIO wrapper such as ASIO4ALL or FlexASIO; ASIO can't combine it with a second interface.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->

## Audio from the PC
- Windows: Control Panel > Hardware and Sound > Sound > Playback, select "Speakers SP-404MKII-G" and click Set Default. Then press `[EXT SOURCE]` on the unit so it lights.
  <!-- learned: 2026-10-11, entry: 2026-10-11-recording-a-loop-in-sync-with-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html, status: manual -->
- `[EXT SOURCE]` blinks red when the input level is too high (the audio may distort); turn the source down.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943233178517131.html, status: manual -->
- UTILITY > SYSTEM > GENERAL > USB IN: "LINE IN" mixes USB audio with LINE IN, before INPUT FX; "MIX OUT" mixes it into the output without INPUT FX or BUS FX.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- Use USB IN = "LINE IN" when you want to sample audio from the PC.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, status: unverified -->

- In a DAW, choose the SP-404MKII as the audio output device (or make it the OS default); the audio reaches the unit as the USB input and, with USB IN = "LINE IN", can be sampled and processed by INPUT FX.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->

## Audio to the PC
- The audio sent to LINE OUT also goes out of the USB port (CUE audio is the exception: PHONES only), so a DAW can record the unit by selecting the SP-404MKII as its audio input.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- SYSTEM > GAIN > USB OUT sets the level of the USB send: -24, -12 or 0 dB. Lower it if the DAW recording clips.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- SYSTEM > CLICK > Output Assign ON sends the metronome to LINE OUT and the USB port too.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->

## MIDI sync
- UTILITY > SYSTEM > MIDI > MIDI Sync: "USB" or "Auto" makes the unit follow MIDI clock from a DAW over USB; "Internal" uses the unit's own tempo.
  <!-- learned: 2026-10-12, entry: 2026-10-12-usb-c-recording-and-project-bpm, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- SYSTEM > MIDI > SYNC Delay (0–20 ms) delays the unit's playback against an external clock; larger values make it play later. Ableton's own per-port Sync Delay is the other place to trim the offset.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- MIDI Sync Out ON sends clock, start and stop only to the MIDI OUT connector, and only while the unit isn't following an external clock; USB carries no clock out, so a DAW can't follow the SP over USB alone.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010996378593163.html, status: manual -->
- While following an external clock, MIDI start (FA) and stop (FC) also start and stop sampling, so a DAW's play button can trigger the recording.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html, status: manual -->
- Ableton Live sends clock when the SP-404MKII output port is enabled as a sync destination in Settings > Link, Tempo & MIDI; the lower LED next to EXT in the Control Bar flashes while it sends. Live can also follow a clock (enable the input port as a sync source and press EXT).
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->
- Forum reports say the Live-to-SP clock offset can change with tempo, so re-check the Sync Delay after a tempo change.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, status: unverified -->

## MIDI notes and control
- MIDI Mode A (SYSTEM > MIDI): notes 36–51 (C2–E♭3) play the current bank's pads in rows from the bottom: 36–39 = pads 13–16, 40–43 = pads 9–12, 44–47 = pads 5–8, 48–51 = pads 1–4. Note 35 (B1) triggers EXT SOURCE.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8012353178593931.html, status: manual -->
- MIDI Mode B puts each bank on its own channel (CH 1–10, shifted by "Pad MIDI Channels") using notes 12–91, and "Note offset" (-11–35) shifts the map.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8012353178593931.html, status: manual -->
- Channel 16 plays the selected sample chromatically (notes 36–60, C2–C4). Velocity is received; aftertouch is not.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010996378593163.html, status: manual -->
- CC#16–19 and CC#80–83 on channels 1–4 control BUS 1–4 effect parameters, the effect switch and the effect number (channel 5 = INPUT FX); program changes select patterns when PC Rx is ON.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010996378593163.html, status: manual -->
- PAD Note Out ON transmits pad notes "via the MIDI OUT connector" when you play; the manual doesn't say whether they also go out over USB.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
- USB-MIDI Thru ON passes USB MIDI to the MIDI OUT connector and MIDI IN to the USB port.
  <!-- learned: 2026-10-18, entry: 2026-10-18-using-the-sp-404mkii-with-ableton-live, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html, status: manual -->
