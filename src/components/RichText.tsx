import Link from 'next/link';
import { Fragment } from 'react';

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders a string with [text](url) links. Internal links ("/...") use next/link. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    const cls = 'text-[#d7b36a] underline decoration-[#d7b36a]/40 hover:text-[#f8efe2]';
    parts.push(
      href.startsWith('/') ? (
        <Link key={i} href={href} className={cls}>{label}</Link>
      ) : (
        <a key={i} href={href} className={cls}>{label}</a>
      ),
    );
    last = i + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}
