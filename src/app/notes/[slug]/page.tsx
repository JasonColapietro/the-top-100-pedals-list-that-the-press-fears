import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NotesShell } from '@/components/NotesShell';
import { RichText } from '@/components/RichText';
import { getNote, notes } from '@/data/notes';
import { buildNoteJsonLd } from '@/lib/notes-jsonld';
import { noteUrl } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const note = getNote(params.slug);
  if (!note) return {};
  const url = noteUrl(note.slug);
  return {
    title: { absolute: note.metaTitle },
    description: note.description,
    keywords: note.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: note.metaTitle,
      description: note.description,
      siteName: 'The Suede 100',
      publishedTime: note.datePublished,
      modifiedTime: note.dateModified,
      authors: ['https://suedeai.ai/founder'],
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: note.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.metaTitle,
      description: note.description,
      images: ['/og-image.png'],
    },
  };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);
  if (!note) notFound();
  return (
    <NotesShell>
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#bcae95]">
          <Link href="/" className="hover:text-[#f8efe2]">The Suede 100</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/notes" className="hover:text-[#f8efe2]">Notes</Link>
        </nav>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl">{note.title}</h1>
        <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.18em] text-[#bcae95]">
          By <a href="https://suedeai.ai/founder" className="text-[#d7b36a] hover:text-[#f8efe2]">Jason Colapietro</a>
          {' · '}
          <time dateTime={note.datePublished}>{note.datePublished}</time> · West Palm Beach, Florida
        </p>
        <div className="mt-10 space-y-6 text-lg leading-8 text-[#e6d9c4]">
          {note.intro.map((p, i) => (
            <p key={i}><RichText text={p} /></p>
          ))}
          {note.sections.map((s) => (
            <section key={s.heading} className="space-y-5 pt-4">
              <h2 className="font-display text-2xl font-semibold leading-snug text-[#f8efe2] md:text-3xl">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}><RichText text={p} /></p>
              ))}
              {s.list ? (
                <ul className="list-disc space-y-2 pl-6 marker:text-[#d7b36a]">
                  {s.list.map((li, i) => (
                    <li key={i}><RichText text={li} /></li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildNoteJsonLd(note)) }}
      />
    </NotesShell>
  );
}
