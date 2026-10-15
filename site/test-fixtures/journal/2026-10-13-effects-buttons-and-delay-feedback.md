---
title: "Effects buttons and why delay feedback stops when toggled"
date: 2026-10-13
tags: [effects, delay, bus-fx]
topics: [effects]
session: 2095c2e6
firmware: "5.52"
manual_refs:
  - title: "Using the effects"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/index.html
summary: "Why the delay tail cuts off when an effect button is switched off, and how to keep it ringing."
---

## Question
When I turn the delay off with its button the echoes stop dead. Can I keep the feedback tail?

## Key takeaways
- The effect buttons around the screen toggle the effect on BUS 1 and BUS 2.
- `[SHIFT]` + pad `[16]` opens EFX SETTING, where the effect behaviour is set.
- `[REMAIN]` + `[BUS FX]` swaps the effects of BUS 1 and BUS 2.
- Hold `[VALUE]` and press an effect button for EFFECT GRAB: the effect only applies while held.

## Details
Switching an effect off cuts its input *and* its output, so the delay's
feedback loop (the "flamingo" echo tail) disappears immediately. Use EFFECT
GRAB or the [CTRL 1] knob instead of the button when you want the tail.

## Still to try / open questions
- Check whether the Looper keeps the tail when bypassed.
