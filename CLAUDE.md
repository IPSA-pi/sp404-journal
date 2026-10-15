# SP-404MKII workspace

This directory is the home base for the user's Roland SP-404MKII sampler. Two kinds of work happen here:

1. **Answering questions** about how the unit works (operation, shortcuts, effects, MIDI, companion apps).
2. **File tasks on the SD card** (Windows drive `F:`), such as copying sample packs onto it, pulling exports/backups off it, or preparing audio and images for import.

## Answering questions: use the local manuals

`docs/` holds plain-text mirrors of the official Roland web manuals. Look the answer up there before answering — do not answer hardware-operation questions from memory. Quote the button sequence as the manual gives it (`[SHIFT]` + pad `[13]`, etc.) and give the section's `URL:` when it helps.

| File | Contents | Source |
| --- | --- | --- |
| `docs/reference-manual-v5.50.md` | Full reference manual, firmware Ver. 5.50 (227 pages: operation, effects/parameter lists, MIDI, specs, error messages) | https://static.roland.com/manuals/sp-404mk2_reference_v550/en-US/index.html |
| `docs/shortcuts-v4.md` | Shortcut list (Ver. 4) | https://static.roland.com/manuals/sp-404mk2_v4_shortcut/en-US/index.html |
| `docs/serato-studio.md` | Controlling Serato Studio (needs unit Ver. 5.00+, Serato Studio 2.3.2+) | https://static.roland.com/manuals/sp-404mk2_serato_studio/en-US/index.html |
| `docs/koala-sampler.md` | Koala Controller Mode (Ver. 4, Koala Sampler 1.4082+) | https://static.roland.com/manuals/sp-404mk2_v4_koala_sampler/eng/index.html |
| `docs/melodics.md` | Melodics controller mode (Ver. 3.00) | https://static.roland.com/manuals/sp-404mk2_v300_melodics/eng/index.html |

How to search them:

- Every manual page is one `## ` section, followed by `Path:` (its place in the table of contents) and `URL:` (the original page). List all topics with `grep -n '^## ' docs/reference-manual-v5.50.md`, then read just the section you need — the reference manual is ~5,700 lines, so don't read it whole.
- The reference manual also contains a newer shortcut list ("List of shortcut keys" in the Appendix) than `shortcuts-v4.md`; prefer it when the two differ.
- Images are kept as `![image](https://static.roland.com/...)` links. Screens, panel diagrams, the audio diagram and the MIDI note map are images only; download the PNG to the scratchpad and view it when the text alone doesn't answer the question.
- The manuals describe firmware 5.50. The user's installed version is not recorded here; if an answer depends on it, ask (it is shown under UTILITY > SYSTEM > VERSION).

To refresh the mirrors from Roland's site, run `tools/update-manuals.sh` (re-downloads all five manuals and regenerates `docs/` via `tools/html2md.py`). When Roland publishes a manual for a new firmware version, the URL changes — update the `MANUALS` list in that script and the table above.

## How the unit organises data

- A **project** = 10 sample banks (A–J) + 10 pattern banks (A–J); each bank holds 16 pads. The unit stores 16 projects in 16 GB of internal storage.
- The SD card is **not** live storage. It is only used for import, export, backup/restore, and directly loading projects. Files copied onto the card do nothing until the user imports them on the unit.
- Import formats on the unit: **WAV, AIFF, MP3**. (FLAC and M4A are only supported through the SP-404MK2 App.) Internal format is 16-bit linear, 48 kHz. Maximum sample length is 16 minutes (about 185 MB).

## SD card (`F:`)

The session runs in WSL2. `F:` appears at `/mnt/f`, but removable drives are not mounted automatically. If `/mnt/f` is missing, ask the user to run (it needs sudo):

```
! sudo mkdir -p /mnt/f && sudo mount -t drvfs F: /mnt/f
```

Always confirm the card is really there (`ls /mnt/f` shows `IMPORT` and `EXPORT`) before copying — an unmounted `/mnt/f` is just an empty directory on the Linux disk.

Folder layout the unit expects (the card must have been formatted on the unit: `[SHIFT]` + pad `[14]` > FORMAT SD-CARD):

```
F:\
├── IMPORT\                  audio files to import (WAV/AIFF/MP3); subfolders are browsable on the unit
│   └── PROJECT_01\ …        project folders to import
│       ├── PICTURE\         startup_*.bmp, screen_saver_*.bmp
│       ├── PTN\
│       └── SMPL\
└── EXPORT\
    ├── PROJECT\
    │   └── PROJECT_01\ … PROJECT_16\    exported projects (same PICTURE/PTN/SMPL contents)
    └── SAMPLE\              exported samples
```

The manual's diagram labels the image folder "PITCTURE" while its text says "PICTURE"; check the name on the actual card before writing into it. Backups (UTILITY > BACKUP, slots 01–64) also live on the card; the manual doesn't document their folder name, so look at the card rather than guessing.

### Copying sample packs onto the card

1. Copy the audio into `F:\IMPORT\`, one subfolder per pack, keeping names short and recognisable — the user picks files on a 128×64 display with the `[VALUE]` knob.
2. Copy only WAV/AIFF/MP3. Convert anything else first (e.g. FLAC/M4A/OGG to 48 kHz 16-bit WAV with `ffmpeg`), and leave out non-audio clutter (`.asd`, `.DS_Store`, PDFs, MIDI files).
3. Afterwards, tell the user the on-unit steps: `[SHIFT]` + pad `[14]` > IMPORT from SD-CARD > SAMPLE > choose destination pad(s) > pick the file. `[SHIFT]` + turn `[VALUE]` selects multiple files; `[SUB PAD]` previews.
4. Remind the user to eject `F:` in Windows before pulling the card.

### Other card tasks

- **Custom images**: BMP, 128×64 px, monochrome only (1/4/8/24-bit accepted). Names must be `startup_1.bmp`–`startup_2.bmp` (opening screen) or `screen_saver_1.bmp`–`screen_saver_16.bmp`. They go into an exported project's `PICTURE` folder and take effect when that project is imported back.
- **Loading a project straight from the card** requires it to be at `EXPORT\PROJECT\PROJECT_01` … `PROJECT_16`.
- **Importing an exported project on another unit**: it can be picked from `EXPORT` directly (press `[ROLL]` on the project list) or moved to `IMPORT`.

### Care with the card

- The card can hold the only copy of the user's backups and exports. Look at what is there before writing, never overwrite or delete existing files or folders on `F:` without asking first, and never format the card from the computer.
- Check free space before large copies (`df -h /mnt/f`).
- Don't edit files inside `PROJECT_xx\SMPL` or `PTN` by hand; those are the unit's own data.
- Windows-side source folders (Downloads etc.) are under `/mnt/c/Users/<name>/…`.

## Knowledge site

What we learn about the unit is kept as Markdown in `content/`, which a static site (`site/`) renders. The plan and the fixed file format are in `SITE-PLAN.md` (section 1, "Content model").

- `content/journal/YYYY-MM-DD-slug.md`: one entry per subject discussed (Question, Key takeaways, Details, open questions), with `session`, `firmware` and `manual_refs` in the frontmatter.
- `content/knowledge/<topic>.md`: facts grouped by topic, each bullet followed by a provenance comment (`learned`, `entry`, `manual`, `status`: `manual` | `verified` | `unverified`). Topic keys live in `content/knowledge/_topics.yaml`; add new topics there first.
- `/log` (`.claude/skills/log/SKILL.md`) writes both from the current session; `/log <subject>` logs one subject. `python3 -I tools/check-content.py` validates `content/`. `python3 -I tools/extract-session.py <id>` prints an old session's transcript.

**Only log when asked.** Do not update `content/` on your own after answering a question. The user decides when to log, by running `/log` or asking to update the knowledge base; then log every subject from the session that isn't logged yet. Facts get `status: manual` only when checked against `docs/`; set `verified` only when the user confirms something on the unit.
