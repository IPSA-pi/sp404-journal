---
title: "Recording a guitar loop over a drum pattern, and layering loops for polyrhythm"
date: 2026-10-25
tags: [resample, extin, pattern, guitar, looper, skip-back, polyrhythm]
topics: [sampling, patterns-and-sequencing]
session: 0f14936c
firmware: "5.52"
manual_refs:
  - title: "Resampling a sample (RESAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html
  - title: "Sampling a pattern (RESAMPLE)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7923444378491019.html
  - title: "Configuring the sampling settings (RECORD SETTING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html
  - title: "Automatically setting the end point of a sample (END SNAP)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html
  - title: "Sampling what you previously played (SKIP-BACK SAMPLING)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907879578474123.html
  - title: "Recording samples by looping (LOOPER)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/8584103589852939.html
summary: "[REC] in sample mode stops the sequencer; start from pattern mode with [RESAMPLE] and ROUTING ExtIn so the pattern and a guitar-only recording start together."
---

## Question
When I go to record guitar over my drum pattern, the pattern stops. What am I doing
wrong, and what are the best practices for recording over patterns? For polyrhythms,
should I resample patterns at different bar lengths and play them together?

## Key takeaways
- `[REC]` in sample mode is sampling standby, a separate mode that stops the sequencer. ([RECORD SETTING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html))
- Record over a pattern from pattern mode: `[PATTERN SELECT]` lit, `[RESAMPLE]`, set length with `[CTRL 2]`, END Snap on with `[START/END]`. ([RESAMPLE](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907213978473355.html), [END SNAP](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7906701978472587.html))
- In `[RECORD SETTING]` set ROUTING (`[CTRL 2]`) to ExtIn to record only the guitar while the drums play as backing, or Mix for one combined stem. ([RECORD SETTING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904269978469515.html))
- Press an empty pad ("Press Pad to START"), then the drum pattern's pad: the pattern and the recording start together. ([Sampling a pattern (RESAMPLE)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7923444378491019.html))
- Skip-back works over a playing pattern without stopping it, but it captures the whole mix. ([SKIP-BACK SAMPLING](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7907879578474123.html))
- Only one pattern plays at a time, so add the guitar pad into the drum pattern by overdubbing it, or play it as a looping BPM-synced sample over the pattern.
- For polyrhythm, record or resample each layer at its own bar length and play them as looping BPM-synced samples; the sequencer can't run a 3-bar and a 4-bar pattern at once.

## Details
Full steps: guitar in the INPUT jack, `[EXT SOURCE]` lit. `[PATTERN SELECT]`,
`[RESAMPLE]`, `[CTRL 2]` length 4 (or 8 to get two passes), `[START/END]` for END
Snap. `[RECORD SETTING]`: ROUTING ExtIn, `[CTRL 1]` REC BPM matching the pattern,
`[CTRL 3]` level, `[EXIT]`. Press an empty pad, then the pattern pad, and play.
Recording stops at the set length, or press `[REC]`.

There is no count-in this way. Set 8 bars, start playing in bar 5, and trim the first
four bars with `[START/END]` afterwards.

A clean habit is to keep drums as patterns and everything recorded over them as
looping, BPM-synced samples. `[SHIFT]` + `[EXIT]`, or `[EXIT]` four times quickly,
stops everything. See "Polymeter and polyrhythm" (2026-10-27) for the theory and
setup of 3-against-4 loops.

## Still to try / open questions
- Looper mode (`[MARK]` with MARK Function = Looper) has ExtIn routing and overdub,
  but the manual doesn't say it runs alongside a pattern. Test it.
- Check whether a count-in (`[SHIFT]` + pad `[10]`) applies when resampling a
  pattern this way.
