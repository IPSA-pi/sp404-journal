---
title: "Using the SP-404MKII with Ableton Live"
date: 2026-10-18
tags: [ableton, daw, usb-audio, midi-clock, bpm-sync, export, sp-404mk2-app, multipad-export]
topics: [midi-and-usb, sampling, companion-apps, sd-card-and-file-management]
session: 58521f51
firmware: "5.52"
manual_refs:
  - title: "Connecting to a computer or mobile device"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html
  - title: "Inputting audio from a computer or mobile device (USB AUDIO)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html
  - title: "Sampling"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html
  - title: "Automatically setting the end point of a sample (END SNAP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html
  - title: "Setting the tempo data in a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html
  - title: "Playing back a sample to the tempo of a song (BPM SYNC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html
  - title: "SYSTEM (parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
  - title: "MIDI implementation chart"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010996378593163.html
  - title: "MIDI note map"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8012353178593931.html
  - title: "Converting a phrase recorded in a pattern to audio for individual pads (MULTIPAD EXPORT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9039245990541067.html
  - title: "Exporting samples (EXPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7959642778538635.html
  - title: "SP-404MK2 App: Launching the SP-404MK2 App"
    url: https://static.roland.com/manuals/sp-404mk2_app_v4/en-US/8017908378641291.html
  - title: "SP-404MK2 App: Importing a sample"
    url: https://static.roland.com/manuals/sp-404mk2_app_v4/en-US/8022260378646667.html
  - title: "SP-404MK2 App: Setting the playback speed and pitch of a sample (TS/PS tab)"
    url: https://static.roland.com/manuals/sp-404mk2_app_v4/en-US/8021236378645131.html
summary: "One USB-C cable carries audio both ways plus MIDI; export loops from Live at 48 kHz/16-bit or sample them live with REC BPM set to the Live tempo, and set each sample's BPM so BPM SYNC works."
---

## Question
How can I use the SP-404MKII with Ableton Live? Can I record samples from
Ableton and send them to the SP with the right BPM? Give me basic and advanced
workflows.

## Key takeaways
- One USB-C cable carries audio in both directions and MIDI; no driver is needed (USB Audio Class 2.0), no hub, no charge-only cable. ([Connecting to a computer or mobile device](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7874842778437259.html))
- Live into the SP: set the SP as the computer's output device (Windows: "Speakers SP-404MKII-G"), press `[EXT SOURCE]`, and sample with `[REC]`; set REC BPM with `[CTRL 1]` to the Live tempo and turn on END SNAP for a loop that lands on the beat. ([USB AUDIO](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943821978517899.html), [Sampling](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7905601178471051.html), [END SNAP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html))
- The unit has no way to read a tempo from a file, so a sample's BPM is set by SYSTEM > BPM Auto Dtct on import, by `[PITCH/SPEED]` > BPM SET (AUTO or MANU), or by the SP-404MK2 App's TS/PS tab; BPM SYNC needs it to be right. ([Setting the tempo data in a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html), [BPM SYNC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html))
- The cleanest file route is to export from Live at 48 kHz / 16-bit with the loop brace on exact bars, then drop the file onto a pad in the SP-404MK2 App over USB, or put it in `IMPORT` on the card.
- Clock: SYSTEM > MIDI > MIDI Sync = USB (or Auto) makes the SP follow Live's MIDI clock; Live sends it when the SP-404MKII port is enabled as a sync destination in Settings > Link, Tempo & MIDI. SYNC Delay (0–20 ms) on the SP and Sync Delay in Live trim the offset. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))
- Live can play the pads over MIDI: in MIDI Mode A notes 36–51 (C2–E♭3) play the current bank's 16 pads, note 35 triggers EXT SOURCE; Mode B puts each bank on its own channel. MIDI start/stop can also start and stop sampling. ([MIDI note map](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8012353178593931.html), [MIDI implementation chart](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010996378593163.html))
- SP into Live: the unit's LINE OUT mix also goes out over USB (SYSTEM > GAIN > USB OUT, -24/-12/0 dB), so Live can record the SP; MULTIPAD EXPORT writes a pattern's pads as separate WAV stems to the card for mixing in Live. ([MULTIPAD EXPORT](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9039245990541067.html))

## Details

### What the USB cable gives you
Roland's manual says connecting the unit to a computer "lets you transmit/receive
audio output and MIDI data" in both directions, with no driver (USB Audio Device
Class 2.0). Use a USB-C to USB-C cable if you want the computer to power the
unit; a C-to-A cable works for data but you then need the AC adaptor or
batteries. No USB hubs.

Audio from the computer arrives as the USB input; SYSTEM > GENERAL > USB IN
decides whether it is merged with LINE IN (before INPUT FX, so it can be sampled
and processed) or mixed straight into the output ("MIX OUT"). For sampling from
Live you want "LINE IN" (the default) and `[EXT SOURCE]` lit.

The audio the unit sends to LINE OUT also goes to the USB port (the CUE bus is
the exception: it only reaches PHONES). SYSTEM > GAIN > USB OUT sets the level
of that USB send (-24, -12 or 0 dB). This is how Live records the SP.

**Windows caveat (not in the manual).** Roland publishes no ASIO driver for the
SP-404MKII; its downloads page has only the system program and the outline
data. Live on Windows wants ASIO for low latency, so the SP shows up under
MME/DirectX (high latency, fine for sampling into the SP, poor for playing
instruments through it) unless you use a generic ASIO wrapper such as
ASIO4ALL or FlexASIO. ASIO also can't combine the SP with a second interface,
so on Windows pick one device per session. On macOS an Aggregate Device in
Audio MIDI Setup combines them (forum reports, not tested).

### Basic workflow 1: sample Live's output into a pad (live over USB)
1. Connect USB, set the SP as the Windows default output ("Speakers
   SP-404MKII-G") or choose it as Live's audio output device, and press
   `[EXT SOURCE]` so it lights. If it blinks red the level is too hot; turn
   Live's master down.
2. Press `[REC]`. Empty pads blink red. Turn `[CTRL 1]` to the Live project's
   tempo (`[SHIFT]` + `[CTRL 1]` for decimals, or tap it). `[CTRL 2]` sets
   the length in measures; pick the loop's real length (1, 2, 4 bars) rather
   than ∞.
3. Press `[START/END]` so "END Snap ON" shows. With the BPM and length set,
   the end point lands on the beat even if you stop late.
4. Optional: `[SHIFT]` + pad `[10]` for a count-in (1MEAS/2MEAS) or WAIT,
   which starts the recording when the signal arrives. WAIT is the easiest
   way to get a loop that starts exactly on Live's downbeat.
5. Press the blinking pad, press `[REC]`, start playback in Live. Stop with
   the pad or `[REC]`.
6. The sample's tempo is already the REC BPM you set, so `[BPM SYNC]` works
   immediately. Set the pad to `[LOOP]`.

If MIDI Sync is set to USB and Live is sending clock, Live's Start message
can start the sampling for you (the manual: "You can control the start/stop
of recording from an external MIDI device using the start command (FA)/stop
command (FC)").

### Basic workflow 2: export from Live, import as a file
This avoids level and timing errors because the file is bit-exact.

1. In Live, set the loop brace to exact bars and Consolidate (Ctrl+J) or
   select the clip. File > Export Audio/Video: Rendered Track = Master (or the
   track), Sample Rate 48000, Bit Depth 16, dither on (the unit's internal
   format is 48 kHz 16-bit linear, so no conversion happens on import),
   Normalize off, Render as Loop off. Export the loop brace length only.
2. Name the file with the tempo and length (`chords_92bpm_4bar.wav`): the
   unit doesn't read tempo from filenames or metadata, so the name is the
   only reminder you get.
3. Get it onto a pad either way:
   - **SP-404MK2 App over USB**: connect, power the unit on, click Connect in
     the app, then drag the file (or several) onto empty pads in the Samples
     screen. Dropping onto a used pad overwrites it. Files under 100 ms may
     fail. The app also takes FLAC and M4A.
   - **SD card**: copy to `F:\IMPORT\`, then on the unit `[SHIFT]` + pad
     `[14]` > IMPORT from SD-CARD > SAMPLE.
4. Set the BPM. Either turn on SYSTEM > GENERAL > BPM Auto Dtct with a BPM
   Detect Rng that contains the tempo before importing, or afterwards press
   `[PITCH/SPEED]`, the pad, and set BPM SET to MANU and type the Live
   tempo (MANU-F for 0.01 steps). In the app, the TS/PS tab has a BPM field,
   "Analyze BPM", "Set BPM by St/End" (derives the tempo from the playback
   range, ideal for an exact-bar loop) and the BPM Sync checkbox.
5. Press `[BPM SYNC]` on the pad. With the project tempo (`[SHIFT]` + pad
   `[11]`) equal to the Live tempo, it plays at the original speed; change
   the project tempo and it stretches.

Exact-bar exports also chop cleanly: AUTO MARK > TIME DIVISION splits an
exact 1-bar loop into even 8ths or 16ths.

### Basic workflow 3: record the SP into Live
Select the SP-404MKII as Live's audio input device, arm an audio track and
record. Everything you hear at LINE OUT (samples, patterns, bus and master
FX, EXT SOURCE if it's routed to the mix) comes down the cable. Lower SYSTEM
> GAIN > USB OUT if it clips in Live. Set Live's tempo to the SP's project
tempo and record with Live's metronome off, or sync the clocks first
(advanced workflow 1) so the recording lines up with Live's grid.

### Advanced workflow 1: clock sync
- On the SP: `[SHIFT]` + pad `[13]` > SYSTEM > MIDI > MIDI Sync = "USB" (or
  "Auto", which follows a clock whenever one arrives). Then the pattern
  sequencer, BPM-synced samples and tempo-synced effects follow Live, and Live's
  Start/Stop start and stop the SP.
- In Live: Settings > Link, Tempo & MIDI, find the SP-404MKII in the MIDI
  Ports list and enable the output port as a sync destination (the Sync
  switch on the Output row). The lower LED next to EXT in the Control Bar
  flashes while Live sends clock.
- Offset: Live's Sync Delay for that port (open the triangle next to the
  port) and the SP's SYSTEM > MIDI > SYNC Delay (0–20 ms, larger = the SP
  plays later) are two places to trim the timing. Play a click on both and
  adjust until they line up. Forum users report the offset can drift with
  tempo changes, so re-check after changing the Live tempo.
- The reverse works too: Live can follow an external clock (enable the SP
  input as a sync source, then press EXT), but the SP's "MIDI Sync Out" only
  sends clock to its MIDI OUT connector, not USB, so that direction needs a
  MIDI cable and interface.
- The MIDI implementation chart says the SP only sends clock when MIDI Sync
  Out is ON and it isn't itself following an external clock.

### Advanced workflow 2: play the pads from Live
Add a MIDI track in Live with its output set to the SP-404MKII port. In MIDI
Mode A (SYSTEM > MIDI) the pads of the current bank answer on notes 36–51 with
this layout: 36–39 = pads 13–16, 40–43 = pads 9–12, 44–47 = pads 5–8, 48–51 =
pads 1–4; note 35 (B1) triggers EXT SOURCE. Mode B gives each bank its own
channel (CH 1–10 by default, offset by "Pad MIDI Channels") with notes 12–91
covering the 16 pads, and "Note offset" shifts the map. Channel 16 plays the
selected sample chromatically (notes 36–60, C2–C4). Velocity is received.

Control changes work too: CC#16–19 and CC#80–83 on channels 1–4 control the
four buses' effect parameters, switch and effect number (channel 5 = INPUT
FX), so a Live clip can automate the SP's effects. Program changes select
patterns when PC Rx is ON.

In the other direction, SYSTEM > MIDI > PAD Note Out sends pad notes "via the
MIDI OUT connector" when you play; the manual doesn't say they also go out
over USB. The chart lists the notes as transmitted, so try recording a MIDI
track from the SP port in Live; if nothing arrives, you need a MIDI cable.
The Serato Studio and Koala modes are different: they turn the unit into a
controller for those apps, not for Live.

### Advanced workflow 3: stems and round trips
- MULTIPAD EXPORT: `[SHIFT]` + pad `[14]` > EXPORT to SD-CARD > MULTIPAD,
  then press the pattern's pad. One WAV per pad lands in the card's `EXPORT`
  folder, so a pattern becomes a multitrack session in Live.
- EXPORT SAMPLE (`[SHIFT]` + pad `[13]` > IMPORT > EXPORT to SD-CARD >
  SAMPLE, press the pads) puts individual samples on the card; the SP-404MK2
  App exports samples and patterns over USB.
- Round trip for effects: send a Live track into the SP over USB, run it
  through INPUT FX or resample it with bus FX, and record the USB return in
  Live. Watch latency: on Windows without ASIO the round trip is long, so
  treat it as "record a pass, then nudge" rather than live monitoring.

### Checked against the manual
- The Ableton-side steps (Settings tab names, Sync switch, Sync Delay, EXT
  button, export dialog fields) come from the Ableton Live 12 manual and
  general Live knowledge, not from Roland's documents. ([Synchronizing with Link, Tempo Follower and MIDI](https://www.ableton.com/en/live-manual/12/synchronizing-with-link-tempo-follower-and-midi/))
- Windows driver situation: Roland's SP-404MKII downloads page lists only the
  system program (5.52) and outline data, no ASIO driver.
- Aggregate Device on macOS and the clock drift reports are from the
  Elektronauts forum, untested here.

## Still to try / open questions
- Does Live see the SP-404MKII as an audio input on Windows, and through
  which driver type (MME/DirectX or an ASIO wrapper)?
- Does PAD Note Out reach the USB MIDI port, or only the MIDI OUT jack?
- Measure the clock offset with Live sending clock and settle on SYNC Delay
  values for the usual tempos.
- Confirm "Set BPM by St/End" in the app on an exact 4-bar export gives the
  Live tempo.
