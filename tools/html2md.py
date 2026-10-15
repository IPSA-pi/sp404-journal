"""Convert a downloaded Roland web manual (directory of HTML pages + order.txt) to one Markdown file.

usage: html2md.py <manual_dir> <index_html> <base_url> <title> <out.md>
"""
import re
import sys
from urllib.parse import urljoin
from html.parser import HTMLParser

BASE = sys.argv[3]
SKIP = {"script", "style", "nav", "header", "footer", "noscript", "button", "form", "colgroup"}
VOID = {"br", "img", "col", "meta", "link", "input", "hr"}
BLOCK = {"p", "div", "section", "figure", "article", "ul", "ol", "table", "h1", "h2", "h3", "h4", "h5", "dl", "dt", "dd"}


class Conv(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []          # finished blocks
        self.buf = []          # current inline text
        self.skip = 0
        self.active = False    # inside the content container
        self.depth = 0
        self.lists = []        # stack of ["ol"/"ul", counter]
        self.li_first = []     # whether the current li still needs its marker
        self.table = None      # rows being collected
        self.row = None
        self.cell = None
        self.heading = None
        self.title = None
        self.crumbs = []
        self.in_crumb = False
        self.stack = []

    # --- helpers
    def text(self):
        t = re.sub(r"[ \t\r\n ]+", " ", "".join(self.buf)).strip()
        self.buf = []
        return t

    def flush(self):
        t = self.text()
        if not t:
            return
        if self.cell is not None:
            self.cell.append(t)
            return
        if self.lists:
            indent = "  " * (len(self.lists) - 1)
            if self.li_first and self.li_first[-1]:
                kind, n = self.lists[-1]
                mark = f"{n}." if kind == "ol" else "-"
                self.out.append(f"{indent}{mark} {t}")
                self.li_first[-1] = False
            else:
                self.out.append(f"{indent}  {t}")
        else:
            self.out.append(t)
            self.out.append("")

    # --- parser callbacks
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = a.get("class") or ""
        if tag not in VOID:
            self.stack.append(tag)
        if tag == "li" and "breadcrumb-item" in cls:
            self.in_crumb = True
            self.buf = []
            return
        if not self.active:
            if tag == "article" or (tag == "div" and "wiki-content" in cls):
                self.active = True
                self.depth = len(self.stack)
            elif tag == "h1" and self.title is None:
                self.heading = "title"
                self.buf = []
            return
        if tag in SKIP and tag not in VOID:
            self.skip += 1
            return
        if self.skip:
            return
        if tag == "br":
            self.buf.append(" ")
            if self.cell is None:
                self.flush()
            return
        if tag == "img":
            src = a.get("src")
            if src and a.get("alt") != "Cell_header" and a.get("width") != "1":
                self.buf.append(f" ![image]({urljoin(BASE, src)}) ")
            return
        if tag in ("strong", "b"):
            self.buf.append("**")
            return
        if tag in BLOCK or tag in ("li", "tr", "td", "th"):
            self.flush()
        if tag in ("h1", "h2", "h3", "h4", "h5"):
            self.heading = tag
        elif tag in ("ol", "ul"):
            start = a.get("start")
            kind = "ul" if "bullet" in cls else tag
            self.lists.append([kind, int(start) - 1 if start and start.isdigit() else 0])
        elif tag == "li":
            if not self.lists:
                self.lists.append(["ul", 0])
            v = a.get("value")
            if "intermediateresults" in cls or "nest-safty" in cls:
                self.li_first.append(False)
            else:
                self.lists[-1][1] = int(v) if v and v.isdigit() else self.lists[-1][1] + 1
                self.li_first.append(True)
        elif tag == "table":
            self.table = []
        elif tag == "tr" and self.table is not None:
            self.row = []
        elif tag in ("td", "th") and self.row is not None:
            self.cell = []
            self.cellspan = (int(a.get("rowspan") or 1), int(a.get("colspan") or 1))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        while self.stack and self.stack[-1] != tag:
            self.stack.pop()
        if self.in_crumb and tag == "li":
            self.crumbs.append(self.text())
            self.in_crumb = False
        if self.heading == "title" and tag == "h1":
            self.title = self.text()
            self.heading = None
        if not self.active:
            if self.stack:
                self.stack.pop()
            return
        if len(self.stack) == self.depth and tag in ("article", "div"):
            self.flush()
            self.active = False
            self.stack.pop()
            return
        if self.stack:
            self.stack.pop()
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip:
            return
        if tag in ("strong", "b"):
            self.buf.append("**")
            return
        if tag in ("h1", "h2", "h3", "h4", "h5") and self.heading == tag:
            t = self.text()
            self.heading = None
            if tag == "h1":
                self.title = self.title or t
            elif t:
                if self.cell is not None:
                    self.cell.append(f"**{t}**")
                elif t in ("MEMO", "NOTE", "Additional information"):
                    self.out.append(f"**{t}:**")
                else:
                    self.out.append("")
                    self.out.append("#" * (int(tag[1]) + 1) + " " + t)
                    self.out.append("")
            return
        if tag in ("td", "th") and self.cell is not None:
            self.flush()
            self.row.append((" <br> ".join(self.cell).replace("|", "\\|"), self.cellspan))
            self.cell = None
        elif tag == "tr" and self.row is not None and self.table is not None:
            self.table.append(self.row)
            self.row = None
        elif tag == "table" and self.table is not None:
            self.emit_table()
            self.table = None
        elif tag == "li":
            self.flush()
            if self.li_first:
                self.li_first.pop()
        elif tag in ("ol", "ul"):
            self.flush()
            if self.lists:
                self.lists.pop()
            if not self.lists:
                self.out.append("")
        elif tag in BLOCK:
            self.flush()

    def handle_data(self, data):
        if self.in_crumb or self.heading == "title" or (self.active and not self.skip):
            self.buf.append(data)

    def emit_table(self):
        grid, pending = [], {}
        for row in self.table:
            line, col, cells = [], 0, list(row)
            while cells or col in pending:
                if col in pending:
                    txt, left = pending[col]
                    line.append(txt)
                    if left > 1:
                        pending[col] = (txt, left - 1)
                    else:
                        del pending[col]
                    col += 1
                    continue
                txt, (rs, cs) = cells.pop(0)
                for i in range(cs):
                    line.append(txt if i == 0 else "")
                    if rs > 1:
                        pending[col] = (txt if i == 0 else "", rs - 1)
                    col += 1
            grid.append(line)
        if not grid:
            return
        w = max(len(r) for r in grid)
        self.out.append("")
        for i, r in enumerate(grid):
            r = r + [""] * (w - len(r))
            self.out.append("| " + " | ".join(r) + " |")
            if i == 0:
                self.out.append("|" + " --- |" * w)
        self.out.append("")


def main():
    mdir, index_html, base, title, outp = sys.argv[1:6]
    order = [l.strip() for l in open(f"{mdir}/order.txt") if l.strip()]
    parts = [f"# {title}", "", f"Source: {base}index.html", "",
             "Plain-text mirror of the official Roland web manual (images are kept as links to the original PNGs — fetch and view one when a step depends on a screenshot or diagram). "
             "Each `##` section is one manual page; `Path:` is its place in the manual's table of contents.", ""]
    n = 0
    for name in order:
        if name in ("index.html", "search.html"):
            continue
        try:
            html = open(f"{mdir}/{name}", encoding="utf-8-sig").read()
        except FileNotFoundError:
            continue
        c = Conv()
        c.feed(html)
        c.close()
        body = re.sub(r"\n{3,}", "\n\n", "\n".join(c.out)).strip()
        if not c.title or (not body and len(c.crumbs) < 2):
            continue
        n += 1
        parts.append(f"## {c.title}")
        parts.append("")
        crumbs = [x for x in c.crumbs[:-1] if x and x != "Top"]
        if crumbs:
            parts.append("Path: " + " > ".join(crumbs))
        parts.append(f"URL: {base}{name}")
        parts.append("")
        if body:
            parts.append(body)
            parts.append("")
    open(outp, "w", encoding="utf-8").write("\n".join(parts).rstrip() + "\n")
    print(f"{outp}: {n} pages")


main()
