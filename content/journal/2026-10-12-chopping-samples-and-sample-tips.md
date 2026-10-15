---
title: "Chopping samples, and other things to know about samples"
date: 2026-10-12
tags: [chop, markers, start-end, envelope, mute-group, play-modes]
topics: [sampling, pads-and-banks]
session: f71cf8c0
firmware: "5.52"
manual_refs:
  - title: "Setting the playback and loop regions (START/END)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html
  - title: "Processing a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html
  - title: "Marking and splitting samples (MARK)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html
  - title: "Using a marker to split and assign a sample to a pad (CHOP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html
  - title: "Making fade-in/fade-out settings (ENVELOPE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html
  - title: "Preventing samples from playing back at the same time (MUTE GROUP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895796378459531.html
summary: "Trim with [START/END], place markers with [SHIFT] + [START/END] by eye, by ear or with AUTO MARK, then ASSIGN TO PAD sends the slices to pads."
---

## Question
How can I chop samples, and what other important things should I know when
working with samples? (Asked together with the USB-C recording question.)

## Key takeaways
- Trim first: `[START/END]`, then `[CTRL 1]` moves the start point and `[CTRL 3]` the end point; with `[RESAMPLE]` lit, points snap to zero crossings. ([START/END](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7909287578475659.html))
- `[VALUE]` on the START/END screen offers TRUNCATE, NORMALIZE and EMPHASIS; they rewrite the sample and cannot be undone. ([Processing a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html))
- Markers: select the pad, then `[SHIFT]` + `[START/END]`. Place them by eye (`[CTRL 1]` + `[MARK]`), by ear (play pad `[1]`, tap pads `[2]`–`[16]`), or with `[VALUE]` > AUTO MARK (TIME DIVISION 2–16, LEVEL 1–10, TRANSIENT HARD/MID/SOFT). ([MARK](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7911540378477195.html))
- `[VALUE]` > ASSIGN TO PAD sends the slices to pads: turn `[VALUE]` for the first pad, `[MARK]` confirms the layout, `[VALUE]` assigns. Pads that light red will be overwritten. ([CHOP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html))
- `[SHIFT]` + `[PITCH/SPEED]` opens ENVELOPE (ATTACK, HOLD, RELEASE). ([ENVELOPE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html))
- `[SHIFT]` + pad `[8]` sets MUTE GROUPs, so slices of one loop don't overlap. ([MUTE GROUP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895796378459531.html))

## Details
**Marker screen controls** (`[SHIFT]` + `[START/END]`): `[CTRL 1]` moves the
cursor, `[MARK]` adds a marker there, `[CTRL 3]` selects a marker, `[CTRL 2]`
moves it, `[DEL]` deletes it. Pads `[1]`–`[16]` preview the audio at each
marker. AUTO MARK: TIME DIVISION suits loops trimmed to exact bars, TRANSIENT
suits drum breaks.

**ASSIGN TO PAD**: you can switch bank before pressing `[MARK]`, and `[CTRL 3]`
toggles GATE for the slices. Empty pads blink yellow, a chosen empty pad
lights green, pads that already hold a sample light dark orange and turn red
when chosen (they will be overwritten).

**Other things worth knowing**
- Per-pad play modes: `[GATE]` (plays only while held), `[LOOP]`,
  `[REVERSE]`, and one-shot (hold `[VALUE]` and press `[GATE]`). Loops usually
  want LOOP and BPM SYNC on; chops usually want GATE off (Claude's advice).
- Group edits: hold `[REMAIN]` while changing a parameter on the pitch/speed or
  envelope screen to change it for the whole bank; hold `[COPY]` to change it
  for the mute group.
- A short RELEASE hides clicks at slice ends (Claude's advice).
- Groove (`[PITCH/SPEED]` then `[ROLL]`) adds swing to a loop; it needs a
  correct sample BPM and 4/4 material.
- SYSTEM > "BPM Auto Dtct" ON detects the tempo on import, using "BPM Detect
  Rng".
- Hold `[REMAIN]` to see a pad's parameters; `[SHIFT]` + pad `[6]` (INIT PARAM)
  resets them.
- Samples are stored as 16-bit, 48 kHz, up to 16 minutes each.

## Still to try / open questions
- Compare AUTO MARK TRANSIENT HARD / MID / SOFT on a drum break.
