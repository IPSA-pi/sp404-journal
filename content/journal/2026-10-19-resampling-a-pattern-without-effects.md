---
title: "Turning a pattern into a sample without effects"
date: 2026-10-19
tags: [bounce, resample, multipad-export, dry, stems]
topics: [patterns-and-sequencing, effects]
session: e1bce6be
firmware: "5.52"
manual_refs:
  - title: "Converting patterns to samples"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7922932378490251.html
  - title: "Converting patterns to samples (BOUNCE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html
  - title: "Converting a phrase recorded in a pattern to audio for individual pads (MULTIPAD EXPORT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9039245990541067.html
summary: "BOUNCE converts a pattern to a sample with BUS 1–4 bypassed; MULTIPAD EXPORT writes one dry WAV per pad; [RESAMPLE] records what you hear, effects included."
---

## Question
How can I resample a track with no effects, before the buses?

## Key takeaways
- BOUNCE is the dry route: select the pattern as for copying (`[COPY]`, then the pattern pad), press `[PATTERN SELECT]`, press a destination pad, then `[VALUE]` or `[COPY]`. BUS 1–4 are bypassed. ([BOUNCE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html))
- BOUNCE overwrites the destination pad; empty pads blink blue, used ones glow dim blue. Bank buttons or `[CTRL 3]` (project) choose another place. ([BOUNCE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7924109978491787.html))
- MULTIPAD EXPORT writes one dry WAV stem per pad to the card: `[SHIFT]` + pad `[14]` > EXPORT to SD-CARD > MULTIPAD > pattern > `[VALUE]`. ([MULTIPAD EXPORT](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/9039245990541067.html))
- `[RESAMPLE]` records the output with effects. To resample dry you would have to put pads on DRY and keep DRY Routing away from BUS 3/4. ([Converting patterns to samples](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7922932378490251.html))

## Details
BOUNCE is silent while it converts, and long patterns take a moment. Use resampling
only when you want to play or tweak while recording; otherwise BOUNCE is simpler and
guaranteed dry. The dry-resample recipe (all pads DRY, DRY Routing "DRY" or BUS 3/4
Bypass) is reasoning from the bus routing, not a manual procedure.
