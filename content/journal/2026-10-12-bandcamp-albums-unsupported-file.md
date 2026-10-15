---
title: "Why some Bandcamp albums show \"Unsupported FILE\""
date: 2026-10-12
tags: [bandcamp, unsupported-file, filenames, filesystem, wav, import]
topics: [sd-card-and-file-management, system-and-settings]
session: f71cf8c0
firmware: "5.52"
manual_refs:
  - title: "Error messages"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html
  - title: "SYSTEM (Parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
  - title: "Main specifications"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html
summary: "The Gost Zvuk album failed with Unsupported FILE; its filenames have en dashes and Cyrillic, so a copy with short ASCII names was put on the card to test."
---

## Question
Check `C:\Users\sebel\Music\bandcamp`: some of the folders weren't accepted by
the SP-404. (Follow-up: the Gost Zvuk album says "Unsupported FILE".)

## Key takeaways
- "Unsupported FILE" means the file type isn't supported; the manual says to check the file extension, format and folder directory. ([Error messages](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html))
- SYSTEM > FileSystem "Latin1" can't recognise files with double-byte characters in their names; "Multi-Byte" can (they display garbled). Changing it needs a restart. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))
- Every Gost Zvuk filename has an en dash (`–`) and four have Cyrillic titles, while its MP3s are otherwise built like albums that work; the names are the likely cause (not yet confirmed).
- A renamed copy with short ASCII names (`F:\IMPORT\GOST ZVUK 10Y\`, 33 tracks) was put on the card for testing; originals untouched.
- Four albums (three Nick Klein, Turning Torso) are 24-bit WAV with a WAVE_FORMAT_EXTENSIBLE header; the manual doesn't say whether that imports, so they are the next suspects.
- Leave cover art (JPG/PNG) off the card, and keep file and folder names short for the small screen.

## Details
All 114 audio files in the folder are in formats the manual lists (63 WAV, 51
MP3) and none is over 16 minutes, so nothing was outright unsupported by type.

**Suspect 1: names.** The Gost Zvuk - GOST ZVUK 10 YEARS MP3s match the other
MP3 albums (same encoder, 320 kbps, 44.1 kHz, same tag version, same cover-art
size); only the filenames differ. "El Polo Opuesto Eres Tú" (DJ Sangre) and
"Peña Adobe" (Nick Klein) have accented letters, which may or may not matter.
Whether an en dash or Cyrillic counts as a "double-byte character" for the
Latin1 setting is Claude's inference.

**Suspect 2: 24-bit extensible WAVs.** Nick Klein - Lowered Flaming Coffin, No
Shortage Of Rope, The Lonesome Dealer, and Turning Torso - Apex are 24-bit with
the extensible header; the other WAV folders are plain 16-bit. The fix, if they
fail, is a converted copy as plain 16-bit 48 kHz WAV.

**Clean folders:** DJ Manny, DJ SPEEDSICK, Duma, Fuuka ASMR, MHV, Nick Klein -
I'd Rather Sit Alone, Smurphy and nondi_ (plain 16-bit WAV or 320 kbps MP3 with
ASCII names); DJ Sangre apart from one accented title. Filenames run up to 134
characters with artist and album repeated.

**What was done.** The 33 tracks were copied to
`C:\Users\sebel\Music\sp404-import\GOST ZVUK 10Y\` with short ASCII names
(Cyrillic transliterated, e.g. `20 Yasen - Ukhodish Ty.mp3`), audio untouched,
cover image left out (320 MB). The WSL mount of `F:` didn't take effect, so the
folder was copied to `F:\IMPORT\GOST ZVUK 10Y\` through Windows; file count and
sizes matched. The old `Gost Zvuk - GOST ZVUK 10 YEARS` folder was left in
`IMPORT`. The card also showed a `BKUP` folder next to `IMPORT` and `EXPORT`
(about 55 GB free).

The alternative to renaming is SYSTEM > FileSystem = "Multi-Byte" (restart
needed), but renamed copies are easier to browse.

## Still to try / open questions
- Import a track from `GOST ZVUK 10Y` on the unit. If it works, the filenames were the problem; if it still says "Unsupported FILE", convert to 48 kHz 16-bit WAV.
- Do the 24-bit WAV albums import?
- Delete the old Gost Zvuk folder from the card once the renamed one works.
