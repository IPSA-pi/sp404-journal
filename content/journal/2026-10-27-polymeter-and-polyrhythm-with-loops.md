---
title: "Polymeter and polyrhythm: a 3-bar loop against a 4-bar loop"
date: 2026-10-27
tags: [polymeter, polyrhythm, loop, bpm-sync, pad-link, theory, claude-app]
topics: [patterns-and-sequencing, pads-and-banks]
session: 3e7bdeb3
firmware: "5.52"
manual_refs:
  - title: "Configuring the sampling settings (RECORD SETTING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html
  - title: "Automatically setting the end point of a sample (END SNAP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html
  - title: "Playing back a sample to the tempo of a song (BPM SYNC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html
  - title: "Playing back samples repeatedly (LOOP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7888500378452619.html
  - title: "Playing back multiple pads at the same time (PAD LINK GROUPS)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895130778458763.html
  - title: "Creating a new pattern (real-time recording)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html
summary: "Two BPM-synced looping samples of 3 and 4 bars drift and realign every 12 bars (polymeter); a true 3:4 polyrhythm divides one bar both ways."
---

## Question
How could I do polyrhythms, for example record a 3-bar and a 4-bar sample and play
them at the same time? And what is the difference between polymeter and polyrhythm?

## Key takeaways
- Record each layer at the same tempo with the length set in measures (`[CTRL 2]`, 1–32) and END SNAP on, so each loop is exactly 3 or 4 bars. ([RECORD SETTING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html), [END SNAP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html))
- Give both pads correct BPM data, turn `[BPM SYNC]` and `[LOOP]` on, `[GATE]` off, and keep them out of the same mute group. ([BPM SYNC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7886580378450315.html), [LOOP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7888500378452619.html))
- Start them together with PAD LINK GROUPS (`[SHIFT]` + pad `[7]`, up to four pads per group). ([PAD LINK GROUPS](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7895130778458763.html))
- A 3-bar loop over a 4-bar loop lines up again every 12 bars. A real-time pattern can also be 12 bars long, since LENGTH is 1–64 when you first record. ([Real-time recording](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7920321178487947.html))
- Strictly that is polymeter: same pulse, different cycle lengths. Polyrhythm is the same cycle divided into different numbers of equal parts, such as 3 against 4 inside one bar.

## Details
Source: a claude.ai chat (https://claude.ai/chat/3e7bdeb3-c925-4fdf-87d2-e74792cfd23c),
reviewed against the 5.50 reference manual on 2026-10-28. The theory below is general
music knowledge, not from the manual.

**Polyrhythm (3:4 in one bar, 12 slices)**

```
slice:  1 2 3 4 5 6 7 8 9 10 11 12
4:      X . . X . . X . . X  .  .
3:      X . . . X . . . X .  .  .
both:   X . . X X . X . X X  .  .
```

The mnemonic for 3:4 is "pass the god-damn butter". Other common ones are 3:2
(hemiola), 5:4 and 7:4. It feels like tension inside a stable bar.

**Polymeter (3-beat loop against a 4-beat loop)**

```
beat:   1 2 3 4 5 6 7 8 9 10 11 12
4-loop: A . . . A . . . A .  .  .
3-loop: B . . B . . B . . B  .  .
```

Beats line up but loop starts drift, meeting every 12 beats; it feels like rotation.
Common in techno and house (a 3-step figure over 16 steps), IDM and minimalism.

**Quick test:** if the bar lines up but the hits don't, it's polyrhythm. If the hits
line up but the loop starts don't, it's polymeter.

**On the SP-404MKII:** polymeter is loops of different lengths at one BPM. Polyrhythm
is triplet quantize (GRID 8.3, 16.3) over straight 16ths, or a sample chopped into 3
equal pieces across a 4-beat bar. Polytempo is covered in "Phasing, triplets and
groove" (same day).

## Still to try / open questions
- Check how LOOP pads behave with PAD LINK: does a second press stop all linked loops?
