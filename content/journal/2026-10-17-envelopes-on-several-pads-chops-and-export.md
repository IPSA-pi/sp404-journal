---
title: "Envelopes on several pads, saving chops, and exporting them"
date: 2026-10-17
tags: [envelope, mute-group, chop, assign-to-pad, export, claude-app]
topics: [pads-and-banks, sampling, sd-card-and-file-management]
session: f3836cc2
firmware: "5.52"
manual_refs:
  - title: "Making fade-in/fade-out settings (ENVELOPE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html
  - title: "Preventing samples from playing back at the same time (MUTE GROUP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895796378459531.html
  - title: "Using a marker to split and assign a sample to a pad (CHOP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html
  - title: "Exporting samples (EXPORT SAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7959642778538635.html
summary: "Hold [REMAIN] (whole bank) or [COPY] (mute group) while turning envelope knobs; ASSIGN TO PAD saves chops; EXPORT to SD-CARD > SAMPLE writes them to the card."
---

## Question
How can I apply an envelope to multiple pads? I chopped a sample; how do I save all
the chops to pads, and then to the SD card?

## Key takeaways
- On the ENVELOPE screen (`[SHIFT]` + `[PITCH/SPEED]`), holding `[REMAIN]` while turning a knob changes every sample in the bank; holding `[COPY]` changes the samples in the same mute group. ([ENVELOPE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html))
- To envelope only some pads, put them in a mute group first with `[SHIFT]` + pad `[8]`; only the last-played pad of a group sounds, so remove the group afterwards if they must layer. ([MUTE GROUP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895796378459531.html))
- On the ENVELOPE screen, hold `[MARK]` and press a pad to select it without playing it. ([ENVELOPE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7913255578478731.html))
- Chops: on the marker screen press `[VALUE]` > ASSIGN TO PAD, pick pads (empty ones blink yellow, picked ones turn green, red means overwrite), then press `[VALUE]` last. ([CHOP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7912513178477963.html))
- Export: `[SHIFT]` + pad `[14]` > EXPORT to SD-CARD > SAMPLE, press pads (lit orange = selected), then `[VALUE]`. ([EXPORT SAMPLE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7959642778538635.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/f3836cc2-d599-461f-adcd-1cd10f4d752b),
reviewed against the 5.50 reference manual on 2026-10-28.

The `[REMAIN]` and `[COPY]` modifiers on the envelope screen work for ATTACK,
HOLD, RELEASE, BPM SYNC, GATE, LOOP and REVERSE.

On the ASSIGN TO PAD screen, `[CTRL 2]` selects which slice you are placing,
`[CTRL 3]` toggles GATE, and turning `[VALUE]` lays the slices out in order from a
starting pad, confirmed with `[MARK]`. You can switch bank before `[MARK]`.
Nothing is assigned until the final `[VALUE]` press.

Exported samples land in the card's export folder for samples (the manual calls it
"EXPORT SAMPLE"; on the card it is `EXPORT\SAMPLE`). Never remove the card while
"Working..." is shown.

**Corrections from the manual.** The chat's sources pointed to the v2/v4 manuals;
the links above are the 5.50 pages. The steps themselves matched.
