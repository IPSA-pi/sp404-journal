---
title: "What Melodics, Koala and VariPhrase are"
date: 2026-10-28
tags: [melodics, koala-sampler, variphrase, vari-mode, time-stretch, claude-app]
topics: [companion-apps, sampling]
session: ec158778
firmware: "5.52"
manual_refs:
  - title: "Melodics: Setup"
    url: https://static.roland.com/manuals/sp-404mk2_v300_melodics/eng/98337136.html
  - title: "Melodics: Controlling the Melodics app from the SP-404MK2"
    url: https://static.roland.com/manuals/sp-404mk2_v300_melodics/eng/98337134.html
  - title: "Koala Sampler: Setup"
    url: https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/164266034.html
  - title: "Koala Sampler: Configuring sample banks in Koala Controller Mode"
    url: https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/164266032.html
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
  - title: "SYSTEM (parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
summary: "Melodics and Koala Sampler are apps the unit can control over USB; VariPhrase is Roland's time-stretch, which on the unit is VARI MODE on the pitch/speed screen."
---

## Question
What are Melodics, Koala and VariPhrase on the SP-404MKII?

## Key takeaways
- Melodics is a finger-drumming lesson app on a computer. Connect over USB and launch it; the unit enters Melodics controller mode. `[ROLL]` starts a lesson and `[SHIFT]` + `[EXIT]` leaves the mode. ([Melodics: Setup](https://static.roland.com/manuals/sp-404mk2_v300_melodics/eng/98337136.html), [Controlling Melodics](https://static.roland.com/manuals/sp-404mk2_v300_melodics/eng/98337134.html))
- Koala Sampler is a phone/tablet sampler app. Over USB the unit enters Koala Controller Mode (Koala 1.4082 or later): banks A–D control Koala's banks, E–J stay the SP's own sampler. ([Koala: Setup](https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/164266034.html), [Koala: banks](https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/164266032.html))
- In Koala mode `[EXT SOURCE]` brings in the phone's audio, and `[SHIFT]` + `[EXIT]` returns to normal mode. ([Koala: Setup](https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/164266034.html))
- VariPhrase is Roland's time-stretch and pitch-shift engine. On the unit it is VARI MODE: with VINYL MODE "No", choose "Backing" for percussive sounds or "Ensemble" for sustained ones, so pitch and speed change independently. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- "Ensemble" uses twice the voices for mono samples and four times for stereo. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- SYSTEM > App Auto Connection ON makes the unit connect automatically when Serato DJ, Koala Sampler or Melodics is launched. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/ec158778-4f82-4d01-b1cb-43ace5fe8080),
reviewed against the Roland Melodics and Koala guides and the 5.50 reference manual on
2026-10-28.

**Melodics** is like Duolingo for finger drumming: it scores your timing as you play
along on the pads. In controller mode `[CTRL 1]` is the computer audio volume,
`[CTRL 2]` the metronome, `[CTRL 3]` YOUR NOTES; `[PITCH/SPEED]` switches
performance and practice mode. The chat said Roland bundles Melodics lessons tied to
its Beat Maker packs; that isn't in the guide.

**Koala** lets the SP act as a hardware controller and effects box for the app: pads
play Koala samples, `[REC]` and `[RESAMPLE]` start Koala's sampling, and
`[PATTERN SELECT]` opens its sequencer. The guide is labelled "Version 4"; the chat
dated it to firmware 4.04 (April 2024).

**VariPhrase** comes from the VP-9000 sampler. It lets a loop match the project BPM
without the chipmunk effect, or play chromatically without changing length. DJ mode has
the same choice under SYSTEM > DJ Mode TS type (VINYL, BACKING, ENSEMBLE). The Groove
templates on the pitch/speed screen were described as "inspired by VariPhrase".
