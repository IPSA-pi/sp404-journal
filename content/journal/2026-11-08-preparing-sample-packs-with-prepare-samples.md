---
title: "Preparing sample packs for the card with prepare-samples.py"
date: 2026-11-08
tags: [sd-card, import, unsupported-file, 32-bit-float, wav, ffmpeg, workflow, guaracha]
topics: [sd-card-and-file-management, sample-sources]
session: 304a6683
firmware: "5.52"
manual_refs:
  - title: "Specifications"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html
  - title: "Importing samples (IMPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html
  - title: "Error messages"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html
summary: "Some GUARACHA MIX samples were 32-bit float WAVs the unit refuses; a script now converts any pack to 48 kHz 16-bit WAV before it goes to the card."
---

## Question
Some files in the GUARACHA MIX (Dj Bans) pack show as unsupported on the SP-404MKII. Why, and can a script prepare all future tracks in the best format for the unit?

## Key takeaways
- The unit imports WAV, AIFF and MP3, and stores everything as 16-bit linear at 48 kHz. ([Specifications](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html))
- "Unsupported FILE" means the file type isn't supported; check the extension, format and folder. ([Error messages](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html))
- 383 of the pack's 1,608 audio files are 32-bit float WAVs. These are most likely the files the unit refuses (the manual doesn't list accepted bit depths).
- `tools/prepare-samples.py` converts a whole folder to plain 48 kHz, 16-bit WAV, keeps the subfolders and leaves out non-audio files.
- New workflow: run `--check` on the new pack, convert it into `F:\IMPORT\<PACK>`, eject the card, then import on the unit.
- On the unit: `[SHIFT]` + pad `[14]` > IMPORT from SD-CARD > SAMPLE, press the pad, pick the file with `[VALUE]`. ([Importing samples (IMPORT SAMPLE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html))

## Details
A format scan of the pack (`ROLAND SP 4040\GUARACHA MIX _ Dj Bans`) found:

| Files | Format |
| --- | --- |
| 383 | 32-bit float WAV (WAV format code 3) |
| 422 + 25 | 24-bit WAV / AIFF (4 WAVs with a WAVE_FORMAT_EXTENSIBLE header) |
| 710 | 16-bit WAV |
| 68 | MP3 |
| 1,535 | at 44.1 kHz; one file at 32 kHz |

The float files are spread across almost every folder (86 in `DRUMS/Kicks` alone). The manual only says "WAV, AIFF, MP3", so float WAVs being rejected is a commonly reported limit, not something Roland documents. One filename had an `Ñ`; there was also a file named just `.wav`.

`tools/prepare-samples.py` (needs `ffmpeg` with soxr, present in WSL) converts every audio file to the unit's own format instead of copying only the "broken" ones:

- 48 kHz, 16-bit PCM, using the soxr resampler with triangular dither, so the unit has nothing left to convert.
- A plain RIFF header with metadata removed (this also gets rid of WAVE_FORMAT_EXTENSIBLE headers).
- MP3s are decoded with their encoder padding removed, so loops start on time. FLAC, M4A, OGG and OPUS are converted too.
- Float and lossy sources that go above 0 dBFS are turned down just enough not to clip. None of this pack needed it.
- File and folder names are turned into plain ASCII (`ACOMPAÑANTE` becomes `ACOMPANANTE`); `--keep-names` turns this off.
- Non-audio files (`.asd`, `.mid`, `.fst`, `.ini`, macOS `._` files) are skipped. Existing output files are never overwritten unless `--force` is given.

The full run converted all 1,608 files with no failures (1.9 GB in, 1.6 GB out). Every output file was checked as 16-bit PCM at 48 kHz.

Workflow from now on (from WSL, in the repo):

1. Mount the card if `/mnt/f` is empty: `sudo mkdir -p /mnt/f && sudo mount -t drvfs F: /mnt/f`.
2. `python3 tools/prepare-samples.py --check "<pack folder>"` shows what is wrong with a pack.
3. `python3 tools/prepare-samples.py --jobs 8 "<pack folder>" /mnt/f/IMPORT/<PACK>` converts it straight onto the card.
4. Eject `F:` in Windows, put the card in the unit and import.

## Still to try / open questions
- Confirm on the unit that the converted float files (e.g. `DRUMS/Kicks`) now import where the originals failed.
- Check how the unit shows long filenames on the import list (sample names hold up to 23 characters); shorter names may be worth it.
