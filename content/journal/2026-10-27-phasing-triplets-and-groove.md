---
title: "Phasing, triplets in TR-REC, and groove"
date: 2026-10-27
tags: [phasing, polytempo, triplets, substep, shuffle, groove, claude-app]
topics: [patterns-and-sequencing, sampling]
session: 3e7bdeb3
firmware: "5.52"
manual_refs:
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
  - title: "Setting the tempo data in a sample"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html
  - title: "Creating a new pattern (TR-REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html
  - title: "SUBSTEP parameter values"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/124845195125394699.html
  - title: "Aligning the playback timing of samples inputted to a pattern (QUANTIZE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html
  - title: "Adding unique rhythmic character to a sample (Groove)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html
summary: "Phase two loops by turning BPM SYNC off on one and nudging SPEED; TR-REC is a straight grid, so use substeps, Microscope or triplet quantize for triplets; Groove templates swing audio loops."
---

## Question
How do I get polytempo or phasing? How do I enter triplets in TR-REC? What are groove
templates and how do I use them?

## Key takeaways
- Phasing: put the same loop on two pads, LOOP on, GATE off, then turn BPM SYNC off on one and nudge its SPEED (`[CTRL 1]`, 50–150%, finer with `[SHIFT]`). SPEED only works with BPM SYNC off. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- Or keep BPM SYNC on and set one pad's BPM slightly wrong in MANU-F (0.01 steps), e.g. 90.50 for a 90 BPM loop. ([Setting the tempo data in a sample](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7935706778507915.html))
- A loop 0.5% faster realigns after about 200 passes; use 1–3% for drift you hear within a minute or two.
- TR-REC is a straight grid. For triplets use SUBSTEP (`[CTRL 1]`, MODE TRIG) for fast rolls inside a step, nudge notes in Microscope, or record in real time with QTZ GRID 8.3 / 16.3 / 4.3. ([TR-REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html), [SUBSTEP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/124845195125394699.html), [QUANTIZE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7930714778501003.html))
- Shuffle for patterns: QTZ SHUFFLE 16/8 with SHFL RATE (-50 to +50) in real time, or SHUFFLE in TR-REC; +10 to +16 "generally give a pleasant shuffle feel". ([TR-REC](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7921805978489483.html))
- Groove for audio loops: `[PITCH/SPEED]` then `[ROLL]`; templates 8<…16>> need the sample's BPM set right and are 4/4 only. ([Groove](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8591783590384523.html))

## Details
Source: a claude.ai chat (https://claude.ai/chat/3e7bdeb3-c925-4fdf-87d2-e74792cfd23c),
reviewed against the 5.50 reference manual on 2026-10-28.

**Phasing** (Steve Reich style) works best on short, percussive or repetitive
material. DJ mode is another route: two loops on CH1 and CH2 at slightly different
BPMs, without pressing SYNC.

**Triplets.** For 8th-note triplets across one beat by hand: step 1 on the grid, the
next note late by a third of a step, the next by two thirds; Microscope's `[VALUE]`
nudge makes this easier. Another route is to record the triplet part in real time with
triplet quantize, then add straight parts with TR-REC. After recording,
PATTERN EDIT > `[RECORD SETTING]` quantizes chosen pads only, so one pad can be
triplet and the rest straight.

**Groove** is a timing (and sometimes velocity) fingerprint applied to a rigid grid;
swing is the simplest form. Tips: match groove across layers to avoid flams, keep
kicks straight and swing the hats.

**Correction from the manual.** The chat said substeps give "triplets within a 16th".
The SUBSTEP table offers splits of 1–4 with various on/off patterns; check by ear
which value gives an even three.
