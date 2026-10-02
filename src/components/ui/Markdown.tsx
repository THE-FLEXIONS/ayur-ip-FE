import type { ReactNode } from "react";

// ─── Markdown ────────────────────────────────────────────────────────────────
// Renders the subset of Markdown the AI writes: headings, bullet and numbered
// lists, paragraphs, **bold**, *italic*/_italic_, `code` and [links](https://…).
// It builds React elements (never raw HTML), so answers can't inject markup,
// and it copes with half-finished text while an answer is still streaming.

type Block =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "paragraph"; text: string };

function parseBlocks(source: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join("\n") });
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push({ type: "list", ...list });
    list = null;
  };

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trimEnd();
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    const bullet = /^\s*[-*•]\s+(.*)$/.exec(line);
    const numbered = /^\s*\d+[.)]\s+(.*)$/.exec(line);

    if (!line.trim()) {
      flushParagraph();
      flushList();
    } else if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: Math.min(heading[1].length, 3) as 1 | 2 | 3, text: heading[2] });
    } else if (bullet || numbered) {
      flushParagraph();
      const ordered = Boolean(numbered);
      if (list && list.ordered !== ordered) flushList();
      list ??= { ordered, items: [] };
      list.items.push((bullet ?? numbered)![1]);
    } else if (list && /^\s{2,}/.test(rawLine)) {
      // Indented continuation of the previous list item.
      list.items[list.items.length - 1] += ` ${line.trim()}`;
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*|_[^_\s][^_]*_)/g;

function safeHref(url: string): string | null {
  return /^https?:\/\//i.test(url) ? url : null;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(INLINE)) {
    const token = match[0];
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const key = `${keyPrefix}-${i++}`;

    if (token.startsWith("**")) {
      nodes.push(<strong key={key} className="font-semibold text-ayur-ink">{renderInline(token.slice(2, -2), key)}</strong>);
    } else if (token.startsWith("`")) {
      nodes.push(<code key={key} className="rounded bg-ayur-mint/70 px-1 py-0.5 text-[0.92em]">{token.slice(1, -1)}</code>);
    } else if (token.startsWith("[")) {
      const [, label, url] = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token)!;
      const href = safeHref(url);
      nodes.push(
        href ? (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-ayur-green underline underline-offset-2">
            {label}
          </a>
        ) : (
          label
        ),
      );
    } else {
      nodes.push(<em key={key}>{renderInline(token.slice(1, -1), key)}</em>);
    }
    last = start + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function withLineBreaks(text: string, key: string): ReactNode[] {
  return text.split("\n").flatMap((line, i) => (i === 0 ? renderInline(line, `${key}-${i}`) : [<br key={`${key}-br${i}`} />, ...renderInline(line, `${key}-${i}`)]));
}

export default function Markdown({ text, className = "" }: { text: string; className?: string }) {
  const blocks = parseBlocks(text);
  return (
    <div className={`space-y-3 text-[15px] leading-relaxed text-[#2d3733] ${className}`}>
      {blocks.map((block, i) => {
        const key = `b${i}`;
        if (block.type === "heading") {
          const size = block.level === 1 ? "text-[19px]" : block.level === 2 ? "text-[17px]" : "text-[15.5px]";
          return (
            <h3 key={key} className={`${size} pt-1 font-semibold leading-snug text-ayur-ink`}>
              {renderInline(block.text, key)}
            </h3>
          );
        }
        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag key={key} className={`space-y-1.5 pl-5 ${block.ordered ? "list-decimal" : "list-disc"} marker:text-ayur-leaf`}>
              {block.items.map((item, j) => (
                <li key={j}>{renderInline(item, `${key}-${j}`)}</li>
              ))}
            </ListTag>
          );
        }
        return <p key={key}>{withLineBreaks(block.text, key)}</p>;
      })}
    </div>
  );
}
