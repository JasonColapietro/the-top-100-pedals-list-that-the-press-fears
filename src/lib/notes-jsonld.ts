import type { Note } from '../data/notes';
import { BASE_URL, NOTES_URL, ORG_ID, PERSON_ID, noteUrl } from './site';

const PLACES = [
  { '@type': 'City', name: 'West Palm Beach, Florida' },
  { '@type': 'City', name: 'Jupiter, Florida' },
  { '@type': 'AdministrativeArea', name: 'Palm Beach County, Florida' },
];

export function buildNoteJsonLd(note: Note) {
  const url = noteUrl(note.slug);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: note.title,
        description: note.description,
        url,
        datePublished: note.datePublished,
        dateModified: note.dateModified,
        inLanguage: 'en-US',
        keywords: note.keywords.join(', '),
        image: `${BASE_URL}/og-image.png`,
        author: { '@id': PERSON_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        isPartOf: { '@id': `${NOTES_URL}#blog` },
        spatialCoverage: PLACES,
        about: PLACES,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'The Suede 100', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Notes', item: NOTES_URL },
          { '@type': 'ListItem', position: 3, name: note.title, item: url },
        ],
      },
    ],
  };
}

export function buildNotesIndexJsonLd(notes: Note[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${NOTES_URL}#blog`,
        name: 'Suede 100 Notes',
        url: NOTES_URL,
        inLanguage: 'en-US',
        author: { '@id': PERSON_ID },
        publisher: { '@id': ORG_ID },
        blogPost: notes.map((n) => ({ '@id': `${noteUrl(n.slug)}#article` })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${NOTES_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'The Suede 100', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Notes', item: NOTES_URL },
        ],
      },
    ],
  };
}
