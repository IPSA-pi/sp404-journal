---
title: "Side-chaining from a kick to a sample, a bus or the whole mix"
date: 2026-11-04
tags: [side-chain, ducking, kick, buses, dry-routing]
topics: [mixing-and-levels, effects]
session: "7536f379"
firmware: "5.52"
manual_refs:
  - title: "Applying side chain compression (SIDE CHAIN)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html
  - title: "Assigning each sample to a bus"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html
  - title: "Configuring the bus routing"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7954343578531723.html
  - title: "Using the effects"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7898228378462603.html
summary: "Side chain works bus to bus: give the kick its own bus (e.g. DRY) as SOURCE and put whatever should duck on the TARGET bus."
---

## Question
How can I use a kick sample as the side-chain source, with another sample, the main output, or a bus as the target?

## Key takeaways
- Side chain works between buses, not samples: one SOURCE (DRY, BUS 1–4) and one TARGET (OFF, DRY, BUS 1–4). ([Applying side chain compression (SIDE CHAIN)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html))
- Put the kick alone on its source bus, e.g. DRY via `[REMAIN]` + pad; anything else on that bus also triggers ducking. ([Assigning each sample to a bus](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html))
- To duck one sample, put only that sample on BUS 1 (or BUS 2) and make that bus the TARGET.
- BUS 1 and BUS 2 feed BUS 3 and BUS 4 in series, and DRY can join after BUS 4 or before BUS 3. ([Using the effects](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7898228378462603.html))
- To duck the whole mix except the kick: TARGET BUS 3 or BUS 4 with DRY Routing "DRY" and the kick on DRY.
- TYPE B (parallel) routing keeps BUS 1 and BUS 2 separate; the manual suggests it when the source needs its own effects. ([Applying side chain compression (SIDE CHAIN)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/564410379565838475.html))

## Details
Setup: `[SHIFT]` + pad `[16]`, `[CTRL 3]` to SIDE CHAIN, set SOURCE to the kick's
bus and TARGET to the bus to duck; any TARGET other than OFF enables it. Then tune
it the manual's way: RATIO max and RELEASE min while raising THRESHOLD until it
ducks, then RATIO about 100, a longer RELEASE, and GAIN for makeup.

There is no "master" target; BUS 3/4 is the closest because BUS 1 and BUS 2 pass
through them. If DRY Routing is "BUS 3", DRY can't be SOURCE or TARGET, so put the
kick on BUS 2 instead.

## Still to try / open questions
- Does a BUS 3/4 target still duck when FAVORITE is "Bypass"?
- With TYPE A (serial) routing, does targeting BUS 2 also duck samples on BUS 1?
