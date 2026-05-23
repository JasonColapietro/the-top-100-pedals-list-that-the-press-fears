export type SuedeListTier = 'canon' | 'great' | 'middle' | 'disaster';

export type SuedeListCommunityQuote = {
  quote: string;
  source: string;
  sourceUrl: string;
};

export type SuedeListEntry = {
  rank: number;
  pedal: string;
  brand: string;
  tier: SuedeListTier;
  blurb: string;
  year?: number;
  catalogKey?: string;
  communityQuotes?: SuedeListCommunityQuote[];
  entryKey: string;
  previousRank?: number;
  moveReason?: string;
  forumThreadEnabled?: boolean;
};

export type SuedeListByline = {
  author: 'jason' | 'johnny';
  ratifiedBy?: string[];
};

export type SuedeList = {
  edition: string;
  previousEdition?: string;
  slug: string;
  title: string;
  subtitle?: string;
  manifesto: string;
  revisionNotes?: string;
  publishedAt: string;
  byline: SuedeListByline;
  entries: SuedeListEntry[];
};
