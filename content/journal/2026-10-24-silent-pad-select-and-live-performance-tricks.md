---
title: "Selecting pads silently, and things to change mid-performance"
date: 2026-10-24
tags: [silent-select, pad-mute, pause, roll, live-mode, sub-pad, claude-app]
topics: [performance-and-dj-mode, pads-and-banks]
session: 9f9b785b
firmware: "5.52"
manual_refs:
  - title: "Shortcuts that use the [VALUE] button"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8004929178586251.html
  - title: "Playing a pattern"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html
  - title: "Muting the playback of a sample (Pad MUTE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7894388378457995.html
  - title: "Recording pad mute operations to a pattern (PAD MUTE MOTION REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7927489178496395.html
  - title: "Pausing the sound of a sample (PAUSE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7897050778461067.html
  - title: "Setting the roll interval"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7890497178454923.html
  - title: "Shortcuts that use the [SHIFT] button"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8003597978584715.html
summary: "Hold [VALUE] and press a pad to select it silently; mute with [SHIFT] + [REVERSE] + pad, pause with [SHIFT] + [HOLD], and jump patterns with [SUB PAD] + pad."
---

## Question
How can I select a pad silently? What else can I change during a performance?

## Key takeaways
- Hold `[VALUE]` and press a pad to select a sample without sound; with `[PATTERN SELECT]` lit it selects a pattern without playing it. ([Shortcuts that use the [VALUE] button](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8004929178586251.html))
- In TR-REC, select a sample silently with `[VALUE]` (press) + `[SUB PAD]` + pad. ([Shortcuts that use the [VALUE] button](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8004929178586251.html))
- While a pattern plays, hold `[SUB PAD]` and press another pattern pad to switch immediately instead of at the end. ([Playing a pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html))
- Pad mute: `[SHIFT]` + `[REVERSE]` + pad (muted pads light red); `[SHIFT]` + `[REVERSE]` + `[REMAIN]` latches mute mode, and during real-time recording it records the mutes. ([Pad MUTE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7894388378457995.html), [PAD MUTE MOTION REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7927489178496395.html))
- Pause is `[SHIFT]` + `[HOLD]`; press it again to resume. ([PAUSE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7897050778461067.html))
- During a roll, hold `[ROLL]` and turn `[VALUE]` clockwise to make it faster; it can't go slower than where it started. ([Setting the roll interval](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7890497178454923.html))
- To add to a playing pattern, press `[REC]` (real-time, waits for bar 1) or `[SHIFT]` + `[REC]` (TR-REC). ([Playing a pattern](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7919732378487179.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/9f9b785b-896f-4632-b63d-941bded98998),
reviewed against the 5.50 reference manual on 2026-10-28.

More moves: `[REVERSE]` while a sample plays flips it immediately (where it starts
depends on SYSTEM > Reverse Type). SYSTEM > Pad MUTE = "Master" lets muted pads still
play in the headphones, without effects. LIVE MODE (`[SHIFT]` + hold `[REMAIN]`
three seconds) disables the editing buttons. Roll intervals are set with
`[SHIFT]` + `[ROLL]` and include triplets (3/8, 3/16, 3/32, 3/64).

General tips from the chat (not from the manual): keep the main loop on a bus with a
filter or DJFX Looper and ride the knobs for transitions, keep one bus for throw
effects, and cluster pads you mute or swap together.

**Corrections from the manual.** The chat gave `[REMAIN]` + pad for silent select
(that sets the pad's bus), `[SHIFT]` + `[REMAIN]` for silent select in TR-REC
(that is part of the pad-mute latch), `[REMAIN]` + `[HOLD]` for pause, and
"`[REMAIN]` to overdub a sample onto the playing pattern". The manual's versions are
above.
