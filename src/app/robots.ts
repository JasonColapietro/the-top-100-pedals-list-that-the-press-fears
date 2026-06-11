import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://social.suedeai.ai/suede-100/best-and-worst/sitemap.xml',
  };
}
