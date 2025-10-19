import React from "react";

// Very small markdown-to-React renderer for headings, paragraphs and lists.
// Skips local images and <video> tags in the source.

function strongify(text: string) {
  const parts: React.ReactNode[] = [];
  let rest = text;
  // Replace **bold** segments
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text))) {
    if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
    parts.push(<strong key={m.index}>{m[1]}</strong>);
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : [text];
}

export function renderBasicMarkdown(md: string) {
  const lines = md.split(/\r?\n/);
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (/^\s*<video/i.test(line) || /^\s*!\[/.test(line) || /typora-user-images/.test(line)) {
      i++;
      continue; // skip local-only media in the md
    }
    // Headings
    const hx = line.match(/^(#{1,6})\s+(.*)$/);
    if (hx) {
      const level = hx[1].length;
      const content = hx[2];
      const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
      out.push(
        <Tag key={`h-${i}`} className="mt-10 mb-4 font-semibold tracking-tight">
          {strongify(content)}
        </Tag>,
      );
      i++;
      continue;
    }
    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && /^\d+\.\s+/.test(lines[j])) {
        items.push(lines[j].replace(/^\d+\.\s+/, ""));
        j++;
      }
      out.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-1">
          {items.map((t, idx) => (
            <li key={idx}>{strongify(t)}</li>
          ))}
        </ol>,
      );
      i = j;
      continue;
    }
    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      let j = i;
      while (j < lines.length && /^[-*]\s+/.test(lines[j])) {
        items.push(lines[j].replace(/^[-*]\s+/, ""));
        j++;
      }
      out.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-1">
          {items.map((t, idx) => (
            <li key={idx}>{strongify(t)}</li>
          ))}
        </ul>,
      );
      i = j;
      continue;
    }
    // Paragraph (can include inline **bold**)
    out.push(
      <p key={`p-${i}`} className="leading-7 text-[15px] text-black/85">
        {strongify(line)}
      </p>,
    );
    i++;
  }
  return out;
}

// Note: file reading is handled server-side in /api/intro.
