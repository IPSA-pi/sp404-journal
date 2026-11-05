---
title: "Deleting a whole bank and changing the pitch of every sample in it"
date: 2026-11-04
tags: [delete-bank, bank-protect, pitch, remain, bank-wide-edit]
topics: [pads-and-banks]
session: "7536f379"
firmware: "5.52"
manual_refs:
  - title: "Deleting the sample from a pad"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918785178485643.html
  - title: "Protecting a sample (PROTECT)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918273178484875.html
  - title: "Changing the pitch or playback speed of a sample (PITCH/SPEED)"
    url: https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html
summary: "[DEL] + [EXIT] deletes every sample in a bank; hold [REMAIN] while turning PITCH to retune the whole bank (FINE isn't included)."
---

## Question
How can I delete all the samples in a bank? And how can I change the pitch of all the samples in a bank?

## Key takeaways
- Hold `[DEL]` and press `[EXIT]` to open DELETE BANK, press a bank `[A/F]`–`[E/J]` button, then `[VALUE]` or `[DEL]`. It can't be undone. ([Deleting the sample from a pad](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918785178485643.html))
- A protected bank (`[SHIFT]` + `[COPY]`) can't be accidentally deleted; repeat the operation to unprotect. Protection covers samples and patterns. ([Protecting a sample (PROTECT)](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7918273178484875.html))
- To retune a bank: `[PITCH/SPEED]`, press a pad in the bank, then hold `[REMAIN]` and turn `[CTRL 2]` (PITCH). ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- The `[REMAIN]` bank-wide edit covers SPEED, PITCH, VOLUME, PAN, BPM, BPM SYNC, GATE, LOOP and REVERSE, not FINE. ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))
- PITCH runs -12.00 to +12.00 (VINYL MODE "No") or -12.00 to +7.00 (VINYL MODE "Yes"). ([PITCH/SPEED](https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/7914381978479499.html))

## Details
Deleting a bank: hold `[DEL]`, press `[EXIT]` and the DELETE BANK screen appears.
Choose the bank with its bank button (for F–J press it twice so it blinks), then
press `[VALUE]` or `[DEL]`. The manual recommends a backup (UTILITY > BACKUP)
first, since deleted samples can't be restored.

Pitch for the whole bank: on the pitch/speed screen, holding `[REMAIN]` while
changing a parameter changes it for the other samples in the same bank. With Edit
Knob Mode set to Catch, `[CTRL 2]` does nothing until it passes the current value.

## Still to try / open questions
- Does `[REMAIN]` + PITCH set every sample to the same value, or shift each by the same amount? Try it on a bank whose samples have different pitches.
