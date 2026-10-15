---
title: SD card & file management
description: Supported file formats, getting files onto the card, importing on the unit, filename problems and handling the card safely.
order: 50
---

## File formats
- The unit imports WAV, AIFF and MP3. FLAC and M4A are supported only through the SP-404MK2 App.
  <!-- learned: 2026-10-11, entry: 2026-10-11-ableton-latin-percussion-pack-to-sd-card, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html, status: manual -->
- Convert FLAC, M4A and OGG files to 48 kHz 16-bit WAV before copying them to the card.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, status: unverified -->
- Ableton Factory Pack samples (e.g. Latin Percussion `Samples/Combined/*.aif`) are encrypted files only Live can read; export them from Live as WAV (Export Audio/Video, or Freeze and Flatten / Consolidate) first. The pack's `.ogg` files are low-quality browser previews.
  <!-- learned: 2026-10-11, entry: 2026-10-11-ableton-latin-percussion-pack-to-sd-card, status: unverified -->
- 24-bit WAVs with a WAVE_FORMAT_EXTENSIBLE header (some Bandcamp downloads) may not import; the manual doesn't say. Plain 16-bit 48 kHz WAV is the safe conversion.
  <!-- learned: 2026-10-12, entry: 2026-10-12-bandcamp-albums-unsupported-file, status: unverified -->

## Importing on the unit
- Files on the card do nothing until imported: put them in the card's `IMPORT` folder, then `[SHIFT]` + pad `[14]` > IMPORT from SD-CARD > SAMPLE, press a pad (empty pads blink yellow) and pick the file with `[VALUE]`.
  <!-- learned: 2026-10-11, entry: 2026-10-11-ableton-latin-percussion-pack-to-sd-card, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html, status: manual -->
- On the file list, `[SHIFT]` + turn `[VALUE]` selects several files, `[SUB PAD]` previews, holding `[MARK]` while turning `[VALUE]` scrolls fast, and pressing `[VALUE]` on a folder opens it.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html, status: manual -->
- Imports and exports run in the background (an indicator shows in the display), so you can keep working.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958234778537099.html, status: manual -->
- Whole songs import fine if each is under 16 minutes, but they use a lot of storage (16 minutes ≈ 185 MB, roughly 11–12 MB per minute); delete the song pad after chopping.
  <!-- learned: 2026-10-12, entry: 2026-10-12-importing-whole-songs-to-chop, status: unverified -->

## Names and "Unsupported FILE"
- "Unsupported FILE" means the file type isn't supported; the manual says to check the file extension, format and folder directory.
  <!-- learned: 2026-10-12, entry: 2026-10-12-bandcamp-albums-unsupported-file, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html, status: manual -->
- Filenames with en dashes (`–`) or Cyrillic likely cause "Unsupported FILE" with FileSystem = "Latin1" (the Gost Zvuk album); a copy with short ASCII names is the fix being tested.
  <!-- learned: 2026-10-12, entry: 2026-10-12-bandcamp-albums-unsupported-file, status: unverified -->
- Keep file and folder names short and plain ASCII, and leave cover art (JPG/PNG) off the card; you browse on a small screen.
  <!-- learned: 2026-10-12, entry: 2026-10-12-bandcamp-albums-unsupported-file, status: unverified -->

## Card layout
- The user's card (`F:`, label SP404MKII) has `IMPORT`, `EXPORT` and `BKUP` folders at the root; `BKUP` is presumably where UTILITY > BACKUP writes (the manual doesn't name it).
  <!-- learned: 2026-10-12, entry: 2026-10-12-bandcamp-albums-unsupported-file, status: unverified -->

## Inserting and removing the card
- No power-off is required to remove the card; the rule is never to turn off the power or remove the SD card while the screen indicates "Working...".
  <!-- learned: 2026-10-12, entry: 2026-10-12-removing-the-sd-card-safely, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html, status: manual -->
- Wait until a background import, export or backup indicator is gone before pulling the card, not just until you're back on the main screen.
  <!-- learned: 2026-10-12, entry: 2026-10-12-removing-the-sd-card-safely, status: unverified -->
- "No SD CARD!": turn off the power, make sure the card is fully inserted, then turn the power back on.
  <!-- learned: 2026-10-12, entry: 2026-10-12-removing-the-sd-card-safely, manual: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html, status: manual -->
- Eject `F:` in Windows before pulling the card from the PC's reader; Windows can still be writing after a copy looks finished.
  <!-- learned: 2026-10-12, entry: 2026-10-12-removing-the-sd-card-safely, status: unverified -->
- Powering off before removing the card is the cautious habit, especially right after a backup or project export.
  <!-- learned: 2026-10-12, entry: 2026-10-12-removing-the-sd-card-safely, status: unverified -->
