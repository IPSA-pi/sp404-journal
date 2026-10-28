---
title: "Using DJ mode as a standalone mixer"
date: 2026-10-17
tags: [dj-mode, crossfader, cue, roll, live-mode, batteries, claude-app]
topics: [performance-and-dj-mode]
session: 29040d53
firmware: "5.52"
manual_refs:
  - title: "Mixing the samples (DJ MODE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7937626778510219.html
  - title: "Playing back samples while in DJ mode (PAD MODE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7938599578510987.html
  - title: "Playing back patterns while in DJ mode"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7939111578511755.html
  - title: "Monitoring with headphones (CUE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7942721178516363.html
  - title: "Disabling buttons that are not used when playing live (LIVE MODE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7897639578461835.html
  - title: "Using batteries"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7876327578438795.html
  - title: "Main specifications"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html
summary: "DJ mode puts two samples on CH1 and CH2 with levels, crossfader, cue, sync and rolls; prepare tracks as 48 kHz WAVs with correct BPMs in one project."
---

## Question
How could I use the SP-404 as a standalone DJ mixer with preloaded tracks? What's
the workflow to prepare the tracks and then mix them, adding effects?

## Key takeaways
- Press bank `[D/I]` and `[E/J]` together to enter DJ mode; `[VALUE]` > CH1 SELECT / CH2 SELECT assigns a sample to each channel. ([Mixing the samples (DJ MODE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7937626778510219.html))
- `[CTRL 1]` / `[CTRL 2]` are the channel levels; `[CTRL 3]` is either CUE MIX or X-FADE, switched with `[START/END]`. Pads `[13]`/`[15]` play/pause, `[14]`/`[16]` send to CUE, `[10]`/`[12]` SYNC. ([Mixing the samples (DJ MODE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7937626778510219.html))
- `[ROLL]` + pad `[13]` (CH1) or `[15]` (CH2) rolls a deck; `[SHIFT]` + `[ROLL]` sets ROLL SIZE to 1/4, 1/2, 1 or 2 measures. There is no feature called "Quick Loop". ([Mixing the samples (DJ MODE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7937626778510219.html))
- `[REMAIN]` + pad `[14]` or `[16]` cycles a deck through BUS-1, BUS-2 and DRY, so each deck can have its own effects. ([Mixing the samples (DJ MODE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7937626778510219.html))
- `[HOLD]` switches to PAD MODE so you can fire stabs from the pads; patterns can also play in DJ mode. ([PAD MODE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7938599578510987.html))
- Prepare tracks as 48 kHz / 16-bit WAV, the unit's internal format, rather than 44.1 kHz, and set each track's BPM so SYNC works. ([Main specifications](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8010023578592395.html))
- Battery life is about 3.5 hours on Ni-MH and 2.5 hours on alkaline AAs, not 3–4 hours. ([Using batteries](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7876327578438795.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/29040d53-41be-448d-ae9f-7f1ae59147ac),
reviewed against the 5.50 reference manual on 2026-10-28.

**Preparing tracks.** Trim long intros and silences on the computer and export at
48 kHz / 16-bit. Treat one project as one gig crate: 10 banks of 16 pads. Group banks
by energy or BPM, and keep one bank for one-shots, drops and vocal stabs. Import with
the SP-404MK2 App or from the card's `IMPORT` folder.

**Prep on the unit.** Check every track's BPM on the `[PITCH/SPEED]` screen
(BPM SET). If AUTO gets it wrong, set it in MANU mode; SYNC depends on it. Trim start
points so tracks begin on the downbeat. Turn on LIVE MODE (`[SHIFT]` + hold
`[REMAIN]` for three seconds) to disable `[DEL]`, `[REC]`, `[RESAMPLE]`,
`[COPY]` and `[MARK]` during the set.

**Mixing.** Other DJ-mode controls: BPM+ on pads `[2]`/`[4]`, BPM- on `[6]`/`[8]`,
BEND+ on `[1]`/`[3]`, BEND- on `[5]`/`[7]`, `[DEL]` + a BPM pad resets the tempo,
`[REVERSE]` reverses from the current position, and `[RESAMPLE]` + `[VALUE]` picks
the fader curve (FAST CUT, LINEAR, SQUARE, CUBIC). SYSTEM > DJ Mode TS type chooses
VINYL or a VariPhrase-style BACKING/ENSEMBLE stretch when you change speed.

**Patterns in DJ mode:** `[PATTERN SELECT]`, pick the pattern, `[PATTERN SELECT]`,
`[PATTERN EDIT]`, then pad `[13]` plays it.

**Effects.** A filter or Isolator on the outgoing deck, and DJFX Looper, delay or
reverb for exits; Vinyl Sim or Cassette Sim for a lo-fi breakdown.

**Corrections from the manual.** The chat suggested exporting at 44.1 kHz, called
the roll "Quick Loop", listed tap tempo among the DJ controls (it isn't in the DJ
mode list) and quoted 3–4 hours of battery. The manual's figures are used above.

## Still to try / open questions
- The chat said the unit can also control Serato DJ Lite; the manual only names
  "Serato DJ" under SYSTEM > App Auto Connection. Check before relying on it.
- Try DJ Mode TS type BACKING vs VINYL when nudging tempo.
