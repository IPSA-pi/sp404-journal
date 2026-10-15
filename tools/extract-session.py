#!/usr/bin/env python3
"""Print a Claude Code session transcript (JSONL) as readable text.

Usage: python3 -I tools/extract-session.py <session.jsonl | session-id-prefix>

Only the user's typed messages and the assistant's text replies are printed.
Tool calls, tool results, thinking, sidechains (subagents), system reminders,
attachments and slash-command caveats are skipped. The header shows the session
id and the first/last timestamps (UTC and the local date).

A bare id prefix (e.g. 142b20ff) is looked up in
~/.claude/projects/-home-sebel-repos-sp404mkii/.
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path

PROJECT_DIR = Path.home() / ".claude/projects/-home-sebel-repos-sp404mkii"

REMINDER_RE = re.compile(r"<system-reminder>.*?</system-reminder>", re.S)
SKIP_PREFIXES = (
    "<local-command-caveat>",
    "<local-command-stdout>",
    "<local-command-stderr>",
    "<command-name>",
    "<command-message>",
    "<command-args>",
    "<bash-input>",
    "<bash-stdout>",
    "<bash-stderr>",
    "<task-notification>",
    "[Request interrupted",
    "Caveat: The messages below were generated",
)


def resolve(arg: str) -> Path:
    p = Path(arg)
    if p.exists():
        return p
    matches = sorted(PROJECT_DIR.glob(f"{arg}*.jsonl"))
    if len(matches) != 1:
        sys.exit(f"cannot resolve session {arg!r}: {len(matches)} matches in {PROJECT_DIR}")
    return matches[0]


def texts(content):
    """Yield the plain-text parts of a message's content."""
    if isinstance(content, str):
        yield content
        return
    for block in content or []:
        if isinstance(block, dict) and block.get("type") == "text":
            yield block.get("text", "")


def clean(text: str) -> str:
    text = REMINDER_RE.sub("", text).strip()
    if not text or text.startswith(SKIP_PREFIXES):
        return ""
    return text


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    path = resolve(sys.argv[1])
    turns = []
    stamps = []
    session_id = path.stem
    with path.open(encoding="utf-8") as fh:
        for line in fh:
            try:
                rec = json.loads(line)
            except json.JSONDecodeError:
                continue
            ts = rec.get("timestamp")
            if ts:
                stamps.append(ts)
            role = rec.get("type")
            if role not in ("user", "assistant"):
                continue
            if rec.get("isSidechain") or rec.get("isMeta") or rec.get("isCompactSummary"):
                continue
            msg = rec.get("message")
            if not isinstance(msg, dict):
                continue
            if role == "user" and rec.get("toolUseResult") is not None:
                continue
            for t in texts(msg.get("content")):
                t = clean(t)
                if t:
                    turns.append((role, ts, t))

    def fmt(ts):
        if not ts:
            return "?"
        dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
        return f"{dt.isoformat(timespec='minutes')} (local {dt.astimezone().date()})"

    stamps.sort()
    print(f"# Session {session_id}")
    print(f"# first: {fmt(stamps[0] if stamps else None)}")
    print(f"# last:  {fmt(stamps[-1] if stamps else None)}")
    print()
    for role, ts, t in turns:
        label = "USER" if role == "user" else "ASSISTANT"
        print(f"=== {label} [{ts or '?'}] ===")
        print(t)
        print()


if __name__ == "__main__":
    main()
