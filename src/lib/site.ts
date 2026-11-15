// Single source for canonical URLs and the canonical Suede AI entity @ids.
// Never mint new Person or Organization @ids on this site: reference these.
export const SITE_ORIGIN = 'https://social.suedeai.ai';
export const BASE_URL = `${SITE_ORIGIN}/suede-100/best-and-worst`;
export const NOTES_URL = `${BASE_URL}/notes`;

export const PERSON_ID = 'https://suedeai.ai/founder#person';
export const ORG_ID = 'https://suedeai.ai/#organization';

export const noteUrl = (slug: string) => `${NOTES_URL}/${slug}`;
