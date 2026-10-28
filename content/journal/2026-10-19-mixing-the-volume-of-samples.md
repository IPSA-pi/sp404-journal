---
title: "Mixing the volume of samples"
date: 2026-10-19
tags: [volume, pan, velocity, bank-volume, normalize, side-chain, gain, headroom]
topics: [mixing-and-levels]
session: e1bce6be
firmware: "5.52"
manual_refs:
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
  - title: "Adjusting the volume for all banks (BANK VOLUME)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7885761178449547.html
  - title: "Setting a fixed sample volume (FIXED VELOCITY)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7891700378455691.html
  - title: "Processing a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7910874778476427.html
  - title: "Applying side chain compression (SIDE CHAIN)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html
  - title: "SYSTEM (parameter guide)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html
summary: "Per-sample VOLUME and PAN on the pitch/speed screen are the mixer; BANK VOLUME, velocity, side chain and output GAIN sit around them. Leave headroom and anchor on the kick."
---

## Question
What are the best practices for working with audio levels? How can I mix the volume of
my samples?

## Key takeaways
- The main fader is each sample's VOLUME: `[PITCH/SPEED]`, the pad, `[CTRL 3]` (0–127); `[SHIFT]` + `[CTRL 3]` is PAN. Hold `[REMAIN]` while turning to change the whole bank. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- `[SHIFT]` + pad `[1]` FIXED VELOCITY plays a sample at 127 every time; turn it on for programmed drums, off for parts you play with dynamics. ([FIXED VELOCITY](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7891700378455691.html))
- SIDE CHAIN (EFX SET) ducks a TARGET bus when the SOURCE bus is loud, e.g. the kick pushing down the bass; GAIN adds 0–6 dB makeup. ([SIDE CHAIN](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html))
- Output gain is in SYSTEM > GAIN (`[SHIFT]` + pad `[12]`): LINE OUT 0/+6/+12 dB, PHONES -18 to +12 dB, USB OUT -24/-12/0 dB. Raise these rather than pushing samples into clipping. ([SYSTEM](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7964634778545547.html))
- Leave headroom: set the loudest element (kick or main loop) around 100–110 and mix the rest under it; stacked pads and effects like Resonator or Filter+Drive add level fast.
- Bring samples in at similar levels (about -1 dBFS on the computer) so VOLUME only balances them.

## Details
Volume controls stack from sample to output: sample VOLUME, velocity, BANK VOLUME
(`[SHIFT]` + a bank button), bus effects and BUS 3/4 (a Compressor there acts on the
whole mix), then the GAIN settings and `[VOLUME]`. On the input side, the Attenuator
in SYSTEM > GAIN tames a distorting LINE IN.

NORMALIZE (`[START/END]` > `[VALUE]` > NORMALIZE) raises a quiet sample but can't be
undone, so copy the pad first.

**Working habits (general mixing advice, not from Roland):** set the kick first, then
add snare, bass, chops and texture one at a time. Small pan moves (L:10 to R:10) on
hats, percussion and textures clear the middle for kick, bass and vocals. Group pads by
bus so effects and ducking only hit the right parts. Resample a finished loop to fix
its balance and free voices, but only after setting levels.
