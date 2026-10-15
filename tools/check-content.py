#!/usr/bin/env python3
"""Validate content/ against section 1 of SITE-PLAN.md (the content model).

Usage: python3 -I tools/check-content.py [content-dir]

Checks
  knowledge/_topics.yaml  list of {key, title}; unique kebab-case keys
  journal/*.md            filename YYYY-MM-DD-slug.md; frontmatter title, date
                          (matching the filename), tags, topics (known keys),
                          session (8 hex chars), firmware (quoted string),
                          manual_refs ({title, url} list), summary; body sections
                          Question, Key takeaways (3-7 bullets), Details,
                          optional "Still to try / open questions", in that order
  knowledge/<topic>.md    file name is a known topic key; frontmatter title,
                          description, order (int); every bullet is followed by
                          a provenance comment
                            <!-- learned: YYYY-MM-DD, entry: <slug>, [manual: <url>,] status: <s> -->
                          with an existing entry slug, a valid status
                          (manual | verified | unverified), a manual URL when
                          status is manual, and no duplicate bullets

Exit status 1 if any error is found. Warnings do not fail the run.
"""
import datetime as dt
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.exit("check-content: PyYAML is required (pip install pyyaml)")

ROOT = Path(__file__).resolve().parent.parent
STATUSES = {"manual", "verified", "unverified"}
MANUAL_PREFIX = "https://static.roland.com/manuals/"
KEY_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
ENTRY_FILE_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$")
SESSION_RE = re.compile(r"^[0-9a-f]{8}$")
PROV_RE = re.compile(
    r"^<!--\s*learned:\s*(?P<learned>\d{4}-\d{2}-\d{2})\s*,"
    r"\s*entry:\s*(?P<entry>[a-z0-9-]+)\s*,"
    r"(?:\s*manual:\s*(?P<manual>\S+?)\s*,)?"
    r"\s*status:\s*(?P<status>[a-z]+)\s*-->$"
)
SECTIONS = ["Question", "Key takeaways", "Details", "Still to try / open questions"]
REQUIRED_SECTIONS = SECTIONS[:3]

errors: list[str] = []
warnings: list[str] = []


def err(path, msg):
    errors.append(f"ERROR {path}: {msg}")


def warn(path, msg):
    warnings.append(f"WARN  {path}: {msg}")


def split_frontmatter(path: Path):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        err(path, "missing frontmatter (file must start with '---')")
        return None, text
    end = text.find("\n---\n", 4)
    if end == -1:
        err(path, "unterminated frontmatter")
        return None, text
    try:
        fm = yaml.safe_load(text[4:end]) or {}
    except (yaml.YAMLError, ValueError) as e:
        err(path, f"frontmatter is not valid YAML (or has an invalid date): {e}")
        return None, text
    if not isinstance(fm, dict):
        err(path, "frontmatter must be a mapping")
        return None, text
    return fm, text[end + 5:]


def as_date(value):
    if isinstance(value, dt.datetime):
        return value.date()
    if isinstance(value, dt.date):
        return value
    if isinstance(value, str):
        try:
            return dt.date.fromisoformat(value)
        except ValueError:
            return None
    return None


def nonempty_str(fm, key, path):
    v = fm.get(key)
    if not isinstance(v, str) or not v.strip():
        err(path, f"'{key}' must be a non-empty string")
        return False
    return True


def load_topics(content: Path):
    path = content / "knowledge" / "_topics.yaml"
    if not path.exists():
        err(path, "missing")
        return {}
    try:
        data = yaml.safe_load(path.read_text(encoding="utf-8"))
    except (yaml.YAMLError, ValueError) as e:
        err(path, f"not valid YAML: {e}")
        return {}
    if not isinstance(data, list):
        err(path, "must be a YAML list of {key, title}")
        return {}
    topics = {}
    for i, item in enumerate(data):
        if not isinstance(item, dict) or not isinstance(item.get("key"), str) or not isinstance(item.get("title"), str):
            err(path, f"item {i} must have string 'key' and 'title'")
            continue
        key = item["key"]
        if not KEY_RE.match(key):
            err(path, f"key '{key}' is not kebab-case")
        if key in topics:
            err(path, f"duplicate key '{key}'")
        topics[key] = item["title"]
    return topics


def check_entry(path: Path, topics):
    m = ENTRY_FILE_RE.match(path.name)
    if not m:
        err(path, "filename must be YYYY-MM-DD-slug.md (lowercase kebab-case slug)")
        return None
    fm, body = split_frontmatter(path)
    if fm is None:
        return None
    nonempty_str(fm, "title", path)
    nonempty_str(fm, "summary", path)
    date = as_date(fm.get("date"))
    if date is None:
        err(path, "'date' missing or not YYYY-MM-DD")
    elif date.isoformat() != m.group(1):
        err(path, f"'date' {date} does not match filename date {m.group(1)}")
    for key in ("tags", "topics"):
        v = fm.get(key)
        if not isinstance(v, list) or not all(isinstance(x, str) and x for x in v):
            err(path, f"'{key}' must be a list of strings")
    if isinstance(fm.get("topics"), list):
        if not fm["topics"]:
            err(path, "'topics' must not be empty")
        for t in fm["topics"]:
            if t not in topics:
                err(path, f"unknown topic key '{t}' (add it to knowledge/_topics.yaml first)")
    session = fm.get("session")
    if not isinstance(session, str) or not SESSION_RE.match(session):
        err(path, "'session' must be the first 8 hex chars of the session id (quote it if it is all digits)")
    if not isinstance(fm.get("firmware"), str):
        err(path, "'firmware' must be a quoted string, e.g. \"5.52\"")
    refs = fm.get("manual_refs", None)
    if refs is None:
        err(path, "'manual_refs' missing (use [] when there are none)")
    elif not isinstance(refs, list):
        err(path, "'manual_refs' must be a list")
    else:
        for r in refs:
            if not isinstance(r, dict) or not isinstance(r.get("title"), str) or not isinstance(r.get("url"), str):
                err(path, "each manual_refs item needs string 'title' and 'url'")
            elif not r["url"].startswith(MANUAL_PREFIX):
                warn(path, f"manual_refs url is not a Roland manual URL: {r['url']}")

    # body sections
    heads = re.findall(r"^## (.+?)\s*$", body, re.M)
    for h in heads:
        if h not in SECTIONS:
            err(path, f"unexpected section '## {h}' (allowed: {', '.join(SECTIONS)})")
    known = [h for h in heads if h in SECTIONS]
    if len(set(known)) != len(known):
        err(path, "a section appears more than once")
    for s in REQUIRED_SECTIONS:
        if s not in known:
            err(path, f"missing section '## {s}'")
    if known != sorted(known, key=SECTIONS.index):
        err(path, f"sections out of order: {known}")
    tk = re.search(r"^## Key takeaways\s*$(.*?)(?=^## |\Z)", body, re.M | re.S)
    if tk:
        n = len(re.findall(r"^- ", tk.group(1), re.M))
        if not 3 <= n <= 7:
            err(path, f"'Key takeaways' has {n} bullets (expected 3-7)")
    return path.stem


def check_topic(path: Path, topics, entries):
    key = path.stem
    if key not in topics:
        err(path, f"topic file '{key}' is not listed in _topics.yaml")
    fm, body = split_frontmatter(path)
    if fm is None:
        return {}
    nonempty_str(fm, "title", path)
    nonempty_str(fm, "description", path)
    if not isinstance(fm.get("order"), int) or isinstance(fm.get("order"), bool):
        err(path, "'order' must be an integer")

    counts = {s: 0 for s in STATUSES}
    lines = body.split("\n")
    seen = {}
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.startswith("- "):
            if line.lstrip().startswith("<!--") and "learned:" in line:
                err(path, f"line {i + 1}: provenance comment not attached to a bullet")
            i += 1
            continue
        start = i
        text = [line[2:].strip()]
        i += 1
        while i < len(lines) and lines[i].startswith("  ") and not lines[i].strip().startswith("<!--"):
            text.append(lines[i].strip())
            i += 1
        bullet = " ".join(text)
        norm = re.sub(r"\s+", " ", bullet).strip().lower()
        if norm in seen:
            err(path, f"line {start + 1}: duplicate bullet (same as line {seen[norm]})")
        seen[norm] = start + 1
        if i >= len(lines) or not lines[i].strip().startswith("<!--"):
            err(path, f"line {start + 1}: bullet has no provenance comment on the next line")
            continue
        comment = lines[i].strip()
        i += 1
        m = PROV_RE.match(comment)
        if not m:
            err(path, f"line {i}: malformed provenance comment: {comment}")
            continue
        if as_date(m["learned"]) is None:
            err(path, f"line {i}: invalid learned date {m['learned']}")
        if m["entry"] not in entries:
            err(path, f"line {i}: entry '{m['entry']}' does not exist in content/journal/")
        elif m["entry"][:10] != m["learned"]:
            warn(path, f"line {i}: learned {m['learned']} differs from entry date {m['entry'][:10]}")
        status = m["status"]
        if status not in STATUSES:
            err(path, f"line {i}: status '{status}' is not one of {sorted(STATUSES)}")
        else:
            counts[status] += 1
        if status == "manual" and not m["manual"]:
            err(path, f"line {i}: status manual requires a 'manual: <url>' field")
        if m["manual"] and not m["manual"].startswith(MANUAL_PREFIX):
            err(path, f"line {i}: manual URL must start with {MANUAL_PREFIX}")
    return counts


def main():
    content = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "content"
    topics = load_topics(content)
    journal = sorted((content / "journal").glob("*.md"))
    # provenance refers to entry files; an entry with bad frontmatter is
    # reported once on its own rather than on every bullet that cites it
    entries = {p.stem: p for p in journal}
    for p in journal:
        check_entry(p, topics)
    topic_files = sorted(p for p in (content / "knowledge").glob("*.md"))
    present = {p.stem for p in topic_files}
    for key in topics:
        if key not in present:
            warn(content / "knowledge" / f"{key}.md", "topic listed in _topics.yaml has no file yet")
    summary = []
    for p in topic_files:
        counts = check_topic(p, topics, entries)
        if counts:
            total = sum(counts.values())
            summary.append(f"  {p.stem}: {total} facts ({', '.join(f'{k} {v}' for k, v in sorted(counts.items()))})")
    for line in warnings + errors:
        print(line)
    print(f"{len(entries)} journal entries, {len(topic_files)} topic files")
    for line in summary:
        print(line)
    if errors:
        print(f"FAILED: {len(errors)} error(s)")
        sys.exit(1)
    print("OK")


if __name__ == "__main__":
    main()
