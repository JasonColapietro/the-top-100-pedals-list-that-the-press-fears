import { list } from '../src/data/best-and-worst-2026';
import { getPedalImageUrl } from '../src/lib/pedal-images';

const CANONICAL = 'https://social.suedeai.ai/suede-100/best-and-worst';
const REPO_RAW =
  'https://raw.githubusercontent.com/JasonColapietro/the-top-100-pedals-list-that-the-press-fears/main/public';

const tierLabel: Record<string, string> = {
  canon: 'The Canon · 1–10',
  great: 'The Great · 11–20',
  middle: 'The Middle · 21–79',
  disaster: 'The Disasters · 80–100',
};
const TIER_ORDER: ('canon' | 'great' | 'middle' | 'disaster')[] = [
  'canon',
  'great',
  'middle',
  'disaster',
];

const sorted = [...list.entries].sort((a, b) => a.rank - b.rank);
const byTier: Record<string, typeof sorted> = {
  canon: [],
  great: [],
  middle: [],
  disaster: [],
};
for (const e of sorted) byTier[e.tier].push(e);

const out: string[] = [];
out.push(`# The Top 100 Pedals List That The Press Fears`);
out.push('');
out.push(`> **${list.title}**`);
out.push(
  `> *Best guitar effects pedals, ranked 1–100. Edition ${list.edition}. By Jason Colapietro.*`,
);
out.push('');
out.push(
  `[![Edition ${list.edition}](https://img.shields.io/badge/edition-${list.edition}-9f101a)](${CANONICAL}) [![100 pedals ranked](https://img.shields.io/badge/pedals%20ranked-100-22d3ee)](${CANONICAL}) [![read on Suede Social](https://img.shields.io/badge/read%20on-suede.social-050b16)](${CANONICAL})`,
);
out.push('');
out.push(`> **Canonical URL:** <${CANONICAL}>`);
out.push(
  '> This repo is a standalone Next.js port of the article, intended for archival and portfolio use. The live editorial version (with images, JSON-LD, OG cards, and the broader Suede Social site) ships at the canonical URL above.',
);
out.push('');
out.push('## Manifesto');
out.push('');
for (const para of list.manifesto
  .split('\n')
  .map((p) => p.trim())
  .filter(Boolean)) {
  out.push(para);
  out.push('');
}

for (const tier of TIER_ORDER) {
  out.push(`## ${tierLabel[tier]}`);
  out.push('');
  for (const e of byTier[tier]) {
    const photo = getPedalImageUrl(e.brand, e.pedal, 'thumbs');
    const photoUrl = photo && photo.startsWith('/') ? `${REPO_RAW}${photo}` : photo;
    out.push(`### #${e.rank} · ${e.pedal}`);
    out.push('');
    out.push(`*${e.brand}${e.year ? ` · ${e.year}` : ''}*`);
    out.push('');
    if (photoUrl) {
      out.push(`<img src="${photoUrl}" alt="${e.brand} ${e.pedal}" width="320" />`);
      out.push('');
    }
    out.push(e.blurb);
    out.push('');
    if (e.communityQuotes && e.communityQuotes.length > 0) {
      for (const q of e.communityQuotes) {
        out.push(`> "${q.quote}"`);
        out.push(`> — [${q.source}](${q.sourceUrl})`);
        out.push('');
      }
    }
  }
}

out.push('---');
out.push('');
out.push('## Running this repo locally');
out.push('');
out.push('```bash');
out.push('pnpm install');
out.push('pnpm dev');
out.push('# → http://localhost:3000');
out.push('```');
out.push('');
out.push('## Image coverage');
out.push('');
out.push('| Tier | With image | Notes |');
out.push('|---|---|---|');
out.push('| Canon (1–10) | 10/10 | Full color |');
out.push('| Great (11–20) | 10/10 | Full color |');
out.push('| Middle (21–79) | 15/60 | Text-only in the rendered article by design |');
out.push('| Disaster (80–99) | 0/19 | Text-only in the rendered article by design |');
out.push('| #100 Climax | ✓ | Desaturated for tone |');
out.push('');
out.push(
  'Hot-takes set (60) was originally sourced for the Suede Social magazine; the additional 15 covering Canon + Great + #100 were sourced from Wikimedia Commons (CC-licensed) and manufacturer pages.',
);
out.push('');
out.push('## License');
out.push('');
out.push(
  `Code: MIT. Article text and ranking: © Jason Colapietro / Suede. Photos: see the editorial credits on the [canonical article](${CANONICAL}).`,
);
out.push('');

console.log(out.join('\n'));
