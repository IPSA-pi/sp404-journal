---
title: "Dumping whole songs in IMPORT and chopping them"
date: 2026-10-12
tags: [import, songs, chop, sd-card]
topics: [sd-card-and-file-management, sampling]
session: f71cf8c0
firmware: "5.52"
manual_refs:
  - title: "Importing samples (IMPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html
  - title: "Main specifications"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html
  - title: "Processing a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html
summary: "Yes, as long as they are WAV, AIFF or MP3 under 16 minutes, but each song still has to be imported to a pad, and it's best to chop one section at a time."
---

## Question
Can I just dump a bunch of songs in the IMPORT folder and then chop them?

## Key takeaways
- Songs must be WAV, AIFF or MP3 and at most 16 minutes (about 185 MB) each. ([Main specifications](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html))
- Copying to `IMPORT` does nothing by itself: import each song to a pad with `[SHIFT]` + pad `[14]` > IMPORT from SD-CARD > SAMPLE, press a pad, pick the file with `[VALUE]`. ([IMPORT SAMPLE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html))
- On the file list, `[SHIFT]` + turn `[VALUE]` selects several files, `[SUB PAD]` previews, and imports run in the background. ([IMPORT SAMPLE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html))
- Chop a song a section at a time: narrow START/END to one part, mark and ASSIGN TO PAD, then move START/END to the next part. The song pad stays intact.
- Don't TRUNCATE the song pad unless you are sure; it permanently deletes everything outside the start and end points. ([Processing a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html))

## Details
**Getting them in.** Put the files in `F:\IMPORT\`, ideally in a subfolder or
two with short names, since you browse them on the small screen. On the unit
press an empty pad (blinking yellow) and choose the song. Hold `[MARK]` and
turn `[VALUE]` to scroll the list quickly.

**Chopping a whole song.** Each song lands on one pad. The marker screen maps
slices to pads `[1]`–`[16]`, and AUTO MARK TIME DIVISION goes up to 16, so
Claude inferred a limit of 16 slices per sample (the manual doesn't state one).
Hence: chop a section, assign the slices to empty pads, then reuse the song pad
for the next section.

**Things to watch**
- FLAC, M4A and OGG won't import; convert them to 48 kHz 16-bit WAV first.
- Full songs take a lot of internal storage (the manual's 16 minutes ≈ 185 MB
  works out to roughly 11–12 MB per minute), so delete the song pads once the
  chops are made.
- For BPM SYNC on the chops, turn on SYSTEM > "BPM Auto Dtct" before
  importing, or set the tempo by hand afterwards.

## Still to try / open questions
- Is there really a 16-marker limit per sample? Try adding a 17th marker.
