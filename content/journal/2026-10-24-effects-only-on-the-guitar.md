---
title: "Applying effects only to a guitar"
date: 2026-10-24
tags: [guitar, input-fx, ext-source, bus, dry-routing]
topics: [effects, sampling]
session: 0f14936c
firmware: "5.52"
manual_refs:
  - title: "Inputting sound from an electronic musical instrument, mic or guitar"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943233178517131.html
  - title: "Configuring the input effects (INPUT FX)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904935578470283.html
  - title: "Configuring the output destination for external input"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7957645978536331.html
  - title: "Assigning each sample to a bus"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html
  - title: "Configuring the bus routing"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7954343578531723.html
summary: "INPUT FX sits only on the external input; or send the guitar to a bus with [REMAIN] + [EXT SOURCE] and keep the samples on DRY."
---

## Question
How can I apply effects only to my guitar?

## Key takeaways
- Plug the guitar into the front INPUT jack with `[MIC/GUITAR]` set to the right, and press `[EXT SOURCE]` so it lights. ([Inputting sound from a guitar](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7943233178517131.html))
- INPUT FX only touches the input: `[SHIFT]` + `[EXT SOURCE]`, press `[VALUE]`, choose EFX Type; `[CTRL 1]`–`[CTRL 3]` edit it. One effect at a time. ([INPUT FX](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904935578470283.html))
- Gt Amp Sim, Auto Pitch, Vocoder and Harmony exist only as INPUT FX. ([INPUT FX](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7904935578470283.html))
- Or route it: `[REMAIN]` + `[EXT SOURCE]` sends the input to a bus (lit BUS 1, blinking BUS 2, dark DRY); put the samples on DRY with `[REMAIN]` + a bank button. ([Output destination for external input](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7957645978536331.html), [Assigning each sample to a bus](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html))
- Set EFX SET > OTHER > DRY Routing to "DRY" if the samples should skip BUS 3/4 as well. ([Configuring the bus routing](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7954343578531723.html))

## Details
The two options stack: INPUT FX for a fixed tone (amp sim, chorus), plus the bus
effects for live tweaking and EFX motion. The INPUT FX list: Bypass, Auto Pitch,
Vocoder, Harmony, Gt Amp Sim, Chorus, JUNO Chorus, Reverb, TimeCtrlDly, Chromatic PS,
Downer, WrmSaturator, 303 VinylSim, 404 VinylSim, Cassette Sim, Lo-fi, Equalizer,
Compressor. The same setting is at EFX SET > OTHER > Input FX.

Pads you press while holding `[REMAIN]` toggle between DRY and whichever bus
`[BUS FX]` currently selects, so keep the samples on DRY and the guitar on the bus.

INPUT FX is before the sampling point, so it is captured when you sample. Bus effects
end up in a resample only with ROUTING set to Mix (reasoning from the audio diagram).
