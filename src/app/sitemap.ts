import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://social.suedeai.ai/suede-100/best-and-worst',
      lastModified: '2026-06-11',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
