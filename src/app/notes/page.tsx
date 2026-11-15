import type { Metadata } from 'next';
import Link from 'next/link';
import { NotesShell } from '@/components/NotesShell';
import { notes } from '@/data/notes';
import { buildNotesIndexJsonLd } from '@/lib/notes-jsonld';
import { NOTES_URL } from '@/lib/site';

const TITLE = 'Suede 100 Notes: Pedal Research, Care and AI Search';
const DESCRIPTION =
  'Notes from Jason Colapietro and Suede AI in West Palm Beach: how the Suede 100 was built, pedalboard care in Florida humidity, and ranking pages for AI answers.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: NOTES_URL },
  openGraph: {
    type: 'website',
    url: NOTES_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'The Suede 100',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Suede 100 notes' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
};

export default function NotesIndex() {
  return (
    <NotesShell>
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#39d6dc]">The Suede 100 · Notes</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">Notes from the Suede 100</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8c8ae]">
          How the list was researched, how to keep a board alive in Palm Beach County air, and how Suede AI structures
          ranking pages so AI answers can cite them. Written by Jason Colapietro and the Suede AI team in West Palm
          Beach, Florida.
        </p>
        <ul className="mt-12 divide-y divide-[#f8efe2]/10 border-y border-[#f8efe2]/10">
          {notes.map((n) => (
            <li key={n.slug} className="py-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#bcae95]">
                <time dateTime={n.datePublished}>{n.datePublished}</time>
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-snug">
                <Link href={`/notes/${n.slug}`} className="hover:text-[#d7b36a]">{n.title}</Link>
              </h2>
              <p className="mt-3 text-base leading-7 text-[#cbbda5]">{n.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildNotesIndexJsonLd(notes)) }}
      />
    </NotesShell>
  );
}
