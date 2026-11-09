#!/usr/bin/env python3
"""Prepare audio files for import into the Roland SP-404MKII.

Converts every audio file under SOURCE into the unit's native format
(48 kHz, 16-bit linear PCM WAV, plain RIFF header, no metadata) and mirrors
the folder structure into DEST. Non-audio files (.asd, .mid, .fst, ...) are
skipped.

Why convert everything instead of copying what "should" work:
  * 32-bit float WAVs are rejected by the unit ("Unsupported FILE").
  * The unit stores 16-bit / 48 kHz internally; converting here uses a
    high-quality resampler (soxr) plus dither instead of the unit's.
  * MP3 decoding here trims encoder padding, so loops start on time.
  * FLAC/M4A/OGG/OPUS are not importable from the SD card at all.
  * WAVE_FORMAT_EXTENSIBLE headers and metadata chunks are dropped.

Float and lossy sources can peak above 0 dBFS; those files are turned down
just enough to avoid clipping when they become 16-bit (reported per file).

Usage:
  python3 tools/prepare-samples.py --check SOURCE        # analyse only
  python3 tools/prepare-samples.py SOURCE DEST           # convert
  python3 tools/prepare-samples.py SOURCE /mnt/f/IMPORT/GUARACHA

Options: --jobs N (parallel ffmpeg, default 4), --force (overwrite files
that already exist in DEST; default is to skip them), --keep-names (do not
convert filenames to plain ASCII).

Requires ffmpeg/ffprobe with libsoxr (Ubuntu's ffmpeg package has it).
"""

import argparse
import concurrent.futures as cf
import json
import os
import re
import subprocess
import sys
import unicodedata

AUDIO_EXT = {".wav", ".wave", ".aif", ".aiff", ".aifc", ".mp3", ".flac",
             ".m4a", ".aac", ".ogg", ".oga", ".opus", ".wma", ".alac"}
TARGET_RATE = 48000
MAX_SECONDS = 16 * 60          # unit limit per sample
PEAK_CEILING_DB = 0.0          # float/lossy sources above this get turned down
SAFE_NAME = re.compile(r"[^A-Za-z0-9 _\-\.\(\)\[\]&#+,']")


def probe(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "a:0",
         "-show_entries", "stream=codec_name,sample_rate,channels,"
         "bits_per_sample,bits_per_raw_sample:format=duration",
         "-of", "json", path],
        capture_output=True, text=True)
    if out.returncode != 0:
        return None
    data = json.loads(out.stdout)
    if not data.get("streams"):
        return None
    s = data["streams"][0]
    return {
        "codec": s.get("codec_name", "?"),
        "rate": int(s.get("sample_rate") or 0),
        "channels": int(s.get("channels") or 0),
        "duration": float(data.get("format", {}).get("duration") or 0),
    }


def issues(info, ext):
    """Reasons the file is not already in the ideal format."""
    out = []
    c = info["codec"]
    if c in ("pcm_f32le", "pcm_f32be", "pcm_f64le", "pcm_f64be"):
        out.append("32/64-bit FLOAT (unit rejects it)")
    elif ext not in (".wav", ".wave", ".aif", ".aiff", ".aifc", ".mp3"):
        out.append(f"{ext} not importable from SD")
    elif c.startswith("pcm_s24") or c.startswith("pcm_s32"):
        out.append("24/32-bit int (unit converts to 16)")
    elif c == "mp3":
        out.append("mp3 (lossy, encoder padding)")
    if info["rate"] != TARGET_RATE:
        out.append(f"{info['rate']} Hz (unit is 48000)")
    if info["channels"] > 2:
        out.append(f"{info['channels']} channels")
    if info["duration"] > MAX_SECONDS:
        out.append("longer than 16 min (too long)")
    return out


def needs_peak_check(info):
    c = info["codec"]
    return c.startswith("pcm_f") or not c.startswith("pcm_")


def ascii_name(name):
    n = unicodedata.normalize("NFKD", name)
    n = n.encode("ascii", "ignore").decode("ascii")
    n = SAFE_NAME.sub("_", n)
    n = re.sub(r"\s+", " ", n).strip(" ._") or "sample"
    return n


def peak_db(path, af):
    out = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", path,
         "-af", af + ",volumedetect", "-f", "null", "-"],
        capture_output=True, text=True)
    m = re.search(r"max_volume:\s*(-?[\d.]+|-inf) dB", out.stderr)
    if not m or m.group(1) == "-inf":
        return None
    return float(m.group(1))


def convert(src, dst, info, force):
    if os.path.exists(dst) and not force:
        return "exists (skipped)"
    resample = (f"aresample={TARGET_RATE}:resampler=soxr:precision=28"
                ":dither_method=triangular")
    filters = [resample]
    note = ""
    if needs_peak_check(info):
        pk = peak_db(src, f"aresample={TARGET_RATE}:resampler=soxr:precision=28")
        if pk is not None and pk > PEAK_CEILING_DB:
            gain = PEAK_CEILING_DB - pk
            gain -= 0.1  # volumedetect rounds to 0.1 dB
            filters.insert(0, f"volume={gain:.2f}dB")
            note = f"peak {pk:+.1f} dBFS -> gain {gain:.1f} dB"
    cmd = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", src,
           "-map", "0:a:0", "-map_metadata", "-1", "-fflags", "+bitexact",
           "-af", ",".join(filters), "-c:a", "pcm_s16le"]
    if info["channels"] > 2:
        cmd += ["-ac", "2"]
    tmp = dst + ".part.wav"
    cmd += ["-f", "wav", "-rf64", "never", tmp]
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        if os.path.exists(tmp):
            os.remove(tmp)
        return "FAILED: " + r.stderr.strip().splitlines()[-1]
    os.replace(tmp, dst)
    return note or "ok"


def collect(source):
    audio, other = [], []
    for root, dirs, files in os.walk(source):
        dirs.sort()
        for f in sorted(files):
            p = os.path.join(root, f)
            ext = os.path.splitext(f)[1].lower() or f.lower()  # ".wav" has no stem
            if f.startswith("._") or f == ".DS_Store":  # macOS junk
                other.append(p)
            elif ext in AUDIO_EXT:
                audio.append(p)
            else:
                other.append(p)
    return audio, other


def plan_dest(source, dest, files, keep_names):
    """Map each source file to a unique .wav path under dest."""
    used, mapping = set(), {}
    for p in files:
        rel = os.path.relpath(p, source)
        parts = rel.split(os.sep)
        stem = os.path.splitext(parts[-1])[0] or "untitled"
        parts = parts[:-1] + [stem]
        if not keep_names:
            parts = [ascii_name(x) for x in parts]
        base = os.path.join(dest, *parts)
        out, i = base + ".wav", 2
        while out.lower() in used:
            out, i = f"{base}_{i}.wav", i + 1
        used.add(out.lower())
        mapping[p] = out
    return mapping


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("source")
    ap.add_argument("dest", nargs="?")
    ap.add_argument("--check", action="store_true", help="analyse only, write nothing")
    ap.add_argument("--jobs", type=int, default=4)
    ap.add_argument("--force", action="store_true", help="overwrite existing outputs")
    ap.add_argument("--keep-names", action="store_true")
    a = ap.parse_args()

    if not a.check and not a.dest:
        ap.error("DEST is required unless --check is given")
    source = os.path.abspath(a.source)
    if not os.path.isdir(source):
        sys.exit(f"not a folder: {source}")
    if a.dest and os.path.abspath(a.dest).startswith(source + os.sep):
        sys.exit("DEST must not be inside SOURCE")

    audio, other = collect(source)
    print(f"{len(audio)} audio files, {len(other)} non-audio files (skipped)")

    with cf.ThreadPoolExecutor(a.jobs) as ex:
        infos = dict(zip(audio, ex.map(probe, audio)))

    unreadable = [p for p in audio if infos[p] is None]
    audio = [p for p in audio if infos[p] is not None]
    summary = {}
    for p in audio:
        ext = os.path.splitext(p)[1].lower() or os.path.basename(p).lower()
        for why in issues(infos[p], ext):
            summary.setdefault(why.split(" (")[0], []).append(p)

    print("\nProblems found (a file can have several):")
    for why, ps in sorted(summary.items(), key=lambda kv: -len(kv[1])):
        print(f"  {len(ps):5d}  {why}")
    floats = summary.get("32/64-bit FLOAT", [])
    if floats:
        print("\n  Float files (these are the ones the unit refuses):")
        for p in floats[:15]:
            print("    " + os.path.relpath(p, source))
        if len(floats) > 15:
            print(f"    ... and {len(floats) - 15} more")
    for p in unreadable:
        print("  UNREADABLE: " + os.path.relpath(p, source))
    odd = [p for p in audio if not p.isascii()]
    if odd:
        print(f"\n  {len(odd)} filename(s) with non-ASCII characters"
              + (" (will be transliterated)" if not a.keep_names else ""))

    if a.check:
        return

    dest = os.path.abspath(a.dest)
    mapping = plan_dest(source, dest, audio, a.keep_names)
    print(f"\nConverting to 48 kHz / 16-bit WAV into {dest} ...")
    fails = skipped = 0
    with cf.ThreadPoolExecutor(a.jobs) as ex:
        futs = {ex.submit(convert, p, mapping[p], infos[p], a.force): p for p in audio}
        for n, f in enumerate(cf.as_completed(futs), 1):
            p = futs[f]
            try:
                res = f.result()
            except Exception as e:  # noqa: BLE001
                res = f"FAILED: {e}"
            if res != "ok":
                print(f"  [{n}/{len(audio)}] {os.path.relpath(p, source)}: {res}")
            fails += res.startswith("FAILED")
            skipped += res.startswith("exists")
    print(f"\nDone: {len(audio) - fails - skipped} converted, {fails} failed, "
          f"{skipped} already existed, {len(other)} non-audio skipped.")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
