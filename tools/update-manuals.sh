#!/usr/bin/env bash
# Re-download the official Roland SP-404MK2 web manuals and regenerate docs/*.md.
# usage: tools/update-manuals.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE=https://static.roland.com/manuals
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# manual path under $BASE | output file | title
MANUALS=(
  "sp-404mk2_reference_v550/en-US|reference-manual-v5.50.md|SP-404MK2 Reference Manual (Ver. 5.50)"
  "sp-404mk2_v4_shortcut/en-US|shortcuts-v4.md|SP-404MK2 Shortcut List (Ver. 4)"
  "sp-404mk2_serato_studio/en-US|serato-studio.md|SP-404MK2 Serato Studio Setup Guide"
  "sp-404mk2_v4_koala_sampler/eng|koala-sampler.md|SP-404MK2 Koala Sampler Setup Guide (Ver. 4)"
  "sp-404mk2_v300_melodics/eng|melodics.md|SP-404MK2 Melodics Setup Guide (Ver. 3)"
)

mkdir -p "$ROOT/docs"
for entry in "${MANUALS[@]}"; do
  IFS='|' read -r path out title <<<"$entry"
  dir="$TMP/${path//\//_}"
  mkdir -p "$dir"
  curl -fsSL -o "$dir.html" "$BASE/$path/index.html"
  # page list, in table-of-contents order
  grep -o 'href="[^"#:]*\.html"' "$dir.html" | sed 's/href="//;s/"$//' | grep -v '^\.\.' | awk '!s[$0]++' > "$dir/order.txt"
  # a few linked pages (e.g. search.html) are not served; the converter skips missing files
  (cd "$dir" && xargs -P 8 -I{} curl -fsSL -o {} "$BASE/$path/{}" < order.txt 2>/dev/null) || true
  python3 -I "$ROOT/tools/html2md.py" "$dir" "$dir.html" "$BASE/$path/" "$title" "$ROOT/docs/$out"
done
