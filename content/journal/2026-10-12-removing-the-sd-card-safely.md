---
title: "Do I need to power off to remove the SD card?"
date: 2026-10-12
tags: [sd-card, power, eject]
topics: [sd-card-and-file-management]
session: f71cf8c0
firmware: "5.52"
manual_refs:
  - title: "Importing samples (IMPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html
  - title: "Importing/exporting (using the SD card)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958234778537099.html
  - title: "Error messages"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html
summary: "No: the manual's only rule is never to remove the card or switch off while the screen shows \"Working...\"; eject F: in Windows before pulling it from the PC."
---

## Question
Do I need to turn off the SP to pull out the SD card? What is the best practice?

## Key takeaways
- The manual doesn't require powering off; its rule is: never turn off the power or remove the SD card while the screen indicates "Working...". ([IMPORT SAMPLE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958977178537867.html))
- Imports and exports run in the background with an indicator in the display, so wait until the indicator is gone, not just until you're back on the main screen. ([Importing/exporting (using the SD card)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7958234778537099.html))
- "No SD CARD!" means the card isn't (fully) inserted: turn the power off, seat the card fully, then turn the power back on. ([Error messages](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8008769178590859.html))
- On the PC, eject `F:` in Windows before pulling the card from the reader.
- Powering off first is the cautious habit, especially right after a backup or project export (Claude's advice, not a manual requirement).

## Details
The manual's own procedures (for example for custom images) just say "remove
the SD card from this unit" with no power-off step. The unit doesn't use the
card as live storage, so once import, export or backup has finished nothing
else is being written to it.

On the computer side, Windows can still be holding writes after a copy looks
finished, which can corrupt files, so always eject the drive first.

## Still to try / open questions
- Note what the background import/export indicator looks like on the display.
