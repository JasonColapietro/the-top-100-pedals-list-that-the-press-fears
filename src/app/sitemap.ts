import { MetadataRoute } from 'next';
import { notes, NOTES_LASTMOD } from '@/data/notes';
import { BASE_URL, NOTES_URL, noteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: NOTES_LASTMOD, changeFrequency: 'weekly', priority: 1 },
    { url: NOTES_URL, lastModified: NOTES_LASTMOD, changeFrequency: 'monthly', priority: 0.7 },
    ...notes.map((n) => ({
      url: noteUrl(n.slug),
      lastModified: NOTES_LASTMOD,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
