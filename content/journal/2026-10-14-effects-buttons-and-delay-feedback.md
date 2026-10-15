---
title: "Effects buttons and why delay feedback stops when toggled"
date: 2026-10-14
tags: [effects, bus-fx, delay, mfx, mute-bus, side-chain, ko-da-ma]
topics: [effects]
session: 2095c2e6
firmware: "5.52"
manual_refs:
  - title: "Adding effects (BUS FX)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7899047578463371.html
  - title: "Editing the effects"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7901249178466443.html
  - title: "Assigning each sample to a bus"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html
  - title: "Playing a break in the performance (MUTE BUS)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7903245978467979.html
  - title: "Ko-Da-Ma"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7978791578554763.html
  - title: "Configuring the effect settings (EFX SET)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7953677978530955.html
  - title: "Recording effect operations to a pattern (EFX MOTION REC)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7925799578494091.html
summary: "The effect buttons toggle BUS 1/2 effects and switching one off cuts its repeats; to keep a delay tail, stop feeding it (Ko-Da-Ma SEND, MUTE BUS, or DRY pads) instead."
---

## Question
Explain the effects buttons around the screen and how they work. When I turn
the delay on and off, the feedback stops playing: how can I change that? Give
me the basic parameters and modes, then some advanced use cases.

## Key takeaways
- `[BUS FX]` picks which bus the effect buttons and knobs control: lit orange = BUS 1, blinking orange = BUS 2. ([Adding effects (BUS FX)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7899047578463371.html))
- Pressing a lit effect button turns the effect off. The manual has no tails/spillover setting, so the repeats stop with it. ([Adding effects (BUS FX)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7899047578463371.html))
- To keep a tail, stop feeding the delay: Ko-Da-Ma's SEND sets "the volume of sound sent to the effect", so turning it down should leave the repeats fading. Sync Delay, Tape Echo and TimeCtrlDly have LEVEL (the echo volume) instead. ([Ko-Da-Ma](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7978791578554763.html))
- MUTE BUS, `[SHIFT]` + `[BUS FX]`, mutes the bus input so only the delay or reverb tail is heard; pressing it again lets the sound back in and turns the bus effect off. ([MUTE BUS](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7903245978467979.html))
- Hold `[REMAIN]` and press a pad to switch it between the selected bus and DRY (no BUS 1/2 effects). ([Assigning each sample to a bus](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7900225178464907.html))
- BUS 1/2 main effect parameters survive power-off only after `[SHIFT]` + `[MARK]` held for 3 seconds. ([Editing the effects](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7901249178466443.html))
- `[SHIFT]` + pad `[16]` (EFX SET) holds the routing (TYPE A serial / TYPE B parallel), FAVORITE for BUS 3/4, SIDE CHAIN, DIRECT FX button assignments and OTHER. ([EFX SET](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7953677978530955.html))

## Details
**The buttons.** `[FILTER+DRIVE]`, `[RESONATOR]`, `[DELAY]`, `[ISOLATOR]` and
`[DJFX LOOPER]` each toggle one effect on the selected bus; DIRECT FX can put a
different effect on each. `[MFX]` gives any effect: hold it and turn `[VALUE]`
or `[CTRL 3]`, or press pads `[1]`–`[16]` (add `[DJFX LOOPER]` for #17 and up,
`[ISOLATOR]` for #33 and up). `[CTRL 1]`–`[CTRL 3]` edit the main parameters;
hold `[VALUE]` and turn them for sub-parameters. `[REMAIN]` + an effect button
keeps the edit screen from timing out (`[VALUE]` flips main/sub, `[EXIT]`
leaves). The same effect on both buses shows "Same EFX on other BUS".
Sub-parameters are shared between INPUT FX, BUS 1 and BUS 2.

**Bus colours** while holding `[REMAIN]`: orange = BUS 1, green = BUS 2, white
= DRY (factory colours). `[REMAIN]` + a bank button sets a whole bank;
`[REMAIN]` + `[EXT SOURCE]` sets the bus for the external inputs.

**Effect grab:** hold `[VALUE]` and press an effect button; the effect is on
only while the button is held.

**Keeping the delay tail** (Claude's recommendations built on the manual):
1. Use Ko-Da-Ma (via `[MFX]`, or assign it to `[DELAY]` with DIRECT FX) and
   pull SEND down instead of switching it off. The manual doesn't describe
   this as a "tails" feature; it's how a send control behaves.
2. MUTE BUS. Whether it hits both buses (ALL) or only the selected one (BUS) is
   set under EFX SET > OTHER > Mute Bus.
3. Leave the delay on and move pads to DRY with `[REMAIN]` + pad.
4. Raise FEEDBACK before the drop; near 99% it can run away.

**Main / sub parameters** (main = the first three in the manual's tables):

| Effect | Main | Sub |
| --- | --- | --- |
| Filter+Drive | CUTOFF, RESONANCE, DRIVE | FLT TYPE (HPF/LPF), LOW FREQ, LOW GAIN |
| Resonator | ROOT, BRIGHT, FEEDBACK | CHORD, PANNING, ENV MOD |
| Sync Delay | TIME (1/32–1/1, triplets and dotted), FEEDBACK 0–99%, LEVEL | L DAMP F, H DAMP F |
| Isolator | LOW, MID, HIGH (-INF, -41.87 to +12 dB) | – |
| DJFX Looper | LENGTH, SPEED (-100 to 100; negative = backwards, 0 = stop), LOOP SW | – |
| Ko-Da-Ma | TIME, FEEDBACK, SEND | L DAMP F, H DAMP F, MODE (SINGLE/PAN) |
| Tape Echo | TIME (10–800 ms), FEEDBACK, LEVEL | MODE (head combinations), W/F RATE, W/F DEPTH |

**Advanced uses**
1. TYPE A runs BUS 1 into BUS 2 (e.g. DJFX Looper into Tape Echo, so the echo
   repeats the stutter); TYPE B runs them in parallel.
2. BUS 3 and BUS 4 (EFX SET > FAVORITE 1–16) are master effects after BUS 1/2,
   saved independently of projects. `[VALUE]` + `[BUS FX]` bypasses them
   without changing the FAVORITE. EFX SET > OTHER > DRY Routing = BUS3 sends
   DRY pads through them too.
3. SIDE CHAIN: SOURCE = the kick's bus, TARGET = the bus to duck; THRESHOLD,
   RATIO, RELEASE, GAIN.
4. EFX MOTION REC: play the pattern, `[REC]`, then `[MARK]` ("MOTION REC
   START"), and perform. `[START/END]` toggles playback of the moves;
   `[DEL]` + `[MARK]` on the pattern edit screen erases them.
5. Resample (`[RESAMPLE]`) with the effects running to print a delay tail into
   a sample.
6. Stopper slows playback like a turntable stopping; Back Spin needs up to
   about 3 seconds of playback first (BACK SW blinks while charging); Scatter's
   SCATTER switch turns the effect on and off.
7. Input FX (EFX SET > OTHER): Auto Pitch, Vocoder, Harmony and Gt Amp Sim
   exist only there; Input Bus sends the input to DRY, BUS 1 or BUS 2.

## Still to try / open questions
- Put Ko-Da-Ma on `[DELAY]` and check that pulling SEND down leaves the repeats ringing.
- Try MUTE BUS with ALL vs BUS on a delay break.
