---
title: "Editing sample volume and pitch, and the Humanize/Rate/Groove screen"
date: 2026-10-12
tags: [pitch-speed, volume, pitch, groove, humanize]
topics: [sampling]
session: 142b20ff
firmware: "5.52"
manual_refs:
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
  - title: "Adding unique rhythmic character to a sample (Groove)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html
summary: "Humanize / Rate / Groove is the Groove screen, reached by pressing [ROLL] on the pitch/speed screen; volume and pitch are on [PITCH/SPEED] itself."
---

## Question
I'm trying to change a sample's volume and pitch, but when I hit the pad and
then PITCH/SPEED I get a different screen: Humanize, Rate, Groove.

## Key takeaways
- `[PITCH/SPEED]`, then a pad: `[CTRL 1]` SPEED (50–150%, only with BPM SYNC off), `[CTRL 2]` PITCH, `[CTRL 3]` VOLUME (0–127). ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- `[SHIFT]` + `[CTRL 2]` is FINE pitch, `[SHIFT]` + `[CTRL 3]` is PAN. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- Humanize / Rate / Groove is the Groove screen: press `[PITCH/SPEED]`, then `[ROLL]`. ([Groove](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html))
- Knobs turned on that screen change the sample's groove; set Humanize and Groove to Off if the sample sounds rhythmically off. ([Groove](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html))
- To get back: press `[ROLL]` again (not documented, Claude's assumption), or `[EXIT]` and then `[PITCH/SPEED]` again.

## Details
On the Groove screen the knobs are `[CTRL 1]` Humanize (Off, Low, Mid, High),
`[CTRL 2]` Rate (1–15; sound quality may suffer if it is too high) and
`[CTRL 3]` Groove (Off, 8<, 8<<, 8>, 8>>, 16<, 16<<, 16>, 16>>). The templates
play in sync with the sample's tempo, so the sample's BPM must be right, and
they assume 4/4.

The manual only documents `[ROLL]` as the way *into* the Groove screen; that
pressing it again flips back is Claude's assumption.

**Correction from the manual:** the session gave PITCH as -12 to +12. That's
with VINYL MODE "No"; with VINYL MODE "Yes" the range is -12.00 to +7.00 (and
FINE is -0.49 to +0.50 instead of -1.00 to +1.00).

## Still to try / open questions
- Does pressing `[ROLL]` a second time return from the Groove screen to pitch/speed?
- Check whether Humanize/Groove were changed on the sample by accident.
