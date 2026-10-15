---
title: "Copying the Ableton Latin Percussion pack to the SD card"
date: 2026-10-11
tags: [ableton, sample-packs, file-formats, import]
topics: [sd-card-and-file-management]
session: cac6ad56
firmware: "5.52"
manual_refs:
  - title: "Main specifications"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html
  - title: "Importing samples (IMPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html
summary: "Ableton Factory Pack samples are encrypted files only Live can read, so they have to be exported from Live as WAV before they can go on the card."
---

## Question
Copy the samples from the Ableton Factory Pack "Latin Percussion"
(`C:\Users\sebel\Documents\Ableton\Factory Packs\Latin Percussion`) onto the
SP-404MKII's SD card so I can use them on the unit.

## Key takeaways
- The unit imports only WAV, AIFF and MP3 (FLAC and M4A only through the SP-404MK2 App). ([Main specifications](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html))
- The pack's 345 `.aif` files in `Samples/Combined` are encrypted Ableton files: `ffprobe` could not read any of them, so the SP can't either. The 629 `.ogg` files are low-quality browser previews.
- To get usable audio, export it from Live: File > Export Audio/Video as WAV, or Freeze and Flatten / Consolidate (Ctrl+J) clips on an audio track.
- Files only need to be in the card's `IMPORT` folder; they then still have to be imported on the unit with `[SHIFT]` + pad `[14]` (IMPORT/EXPORT). ([Importing samples (IMPORT SAMPLE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html))

## Details
Nothing was copied in this session, for two reasons.

**The pack's samples are in Ableton's protected format.** All 345 samples in
`Samples/Combined` (872 MB) are named `.aif` but are encrypted files that only
Live can read. `ffprobe` rejected every one, so copying them would have put
unusable files on the card. The only other audio in the pack is 629 `.ogg`
files, Ableton's browser previews, which are low quality and in a format the
unit doesn't import anyway.

The way around it is to have Live write out plain audio:
- Whole kits or loops: put the sounds on a track and use File > Export
  Audio/Video (WAV, 16-bit, 44.1 or 48 kHz).
- Individual hits: drag them onto an audio track, then Freeze and Flatten the
  track, or Consolidate each clip (Ctrl+J). Claude believed both write normal
  audio files into the project's `Samples/Processed` folder but didn't check.

**The SD card wasn't visible.** At the time only `C:` and `E:` were mounted in
WSL. The card has to be mounted first (see `CLAUDE.md`).

Once exported, the WAVs would go into the card's `IMPORT` folder, organised by
instrument (Bells, Bongo, Conga, Shaker, Timbales…), and be loaded on the unit
with `[SHIFT]` + pad `[14]` > IMPORT from SD-CARD > SAMPLE.

## Still to try / open questions
- Export the Latin Percussion kits from Live as 48 kHz 16-bit WAV and copy them to `F:\IMPORT\`.
- Check whether Freeze and Flatten / Consolidate really writes plain audio into `Samples/Processed`.
