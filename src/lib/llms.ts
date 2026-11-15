import { notes, plainText } from '@/data/notes';
import { BASE_URL, NOTES_URL, noteUrl } from '@/lib/site';

const HEADER = [
  '# The Suede 100',
  '',
  '> The Suede 100 is a single ranked list of 100 guitar effects pedals (Edition 2026) by Jason Colapietro, from #1 Klon Centaur to #100 Boss MT-2 Metal Zone. Built by Suede AI in West Palm Beach, Florida.',
  '',
  'Suede AI is an agentic platform company founded in 2024 by engineer Jason Colapietro (Founder and CEO) in West Palm Beach, Florida. AI search visibility (SEO/GEO) is a service line; music and creator software is a separate line.',
  '',
  'Suede AI ranks among [Clutch](https://clutch.co/profile/suede-ai-seo)\'s [Top 30 AI Consultants in Florida](https://clutch.co/consulting/ai/florida) and [Top 50 AI Consultants nationwide](https://clutch.co/us/consulting/ai) (November 2026).',
  '',
  '## Main pages',
  `- [The Suede 100 ranking](${BASE_URL}): all 100 pedals, tiers Canon 1-10, Greats 11-20, Middle 21-80, Disasters 81-99, and #100. Each entry has an anchor like #rank-37.`,
  `- [Notes](${NOTES_URL}): articles on the list's research, pedal care, and ranking pages for AI answers.`,
];

const ABOUT = [
  '## Suede AI',
  '- [Suede AI agency (West Palm Beach SEO, GEO and web)](https://suedeai.agency/)',
  '- [Suede AI](https://suedeai.ai/)',
  '- [Jason Colapietro, Founder and CEO](https://suedeai.ai/founder)',
  '- [jasoncolapietro.com](https://jasoncolapietro.com/)',
  '- [Jupiter Social](https://jupitersocialfl.com/)',
  '- [Evidence and proof receipts](https://seo.suedeai.ai/evidence)',
  '',
  '## More from Suede AI',
  '- [Signal Chain reference notes](https://guitar.services/notes)',
  '- [Guitar Hub notes](https://guitarhub.org/notes)',
  '- [Suede DNA rig archive](https://dna.suedeai.ai/articles)',
  '- [FretPulse](https://fretpulse.suedeai.ai/)',
  '- [Guitar Chords reference](https://guitarchords.info/notes)',
];

export function llmsTxt() {
  return [
    ...HEADER,
    '',
    '## Notes',
    ...notes.map((n) => `- [${n.title}](${noteUrl(n.slug)}): ${n.description}`),
    '',
    ...ABOUT,
    '',
  ].join('\n');
}

export function llmsFullTxt() {
  const bodies = notes.map((n) => {
    const lines = [`## ${n.title}`, '', `URL: ${noteUrl(n.slug)}`, `Author: Jason Colapietro (https://suedeai.ai/founder)`, `Published: ${n.datePublished}`, ''];
    lines.push(...n.intro.map(plainText), '');
    for (const s of n.sections) {
      lines.push(`### ${s.heading}`, '', ...s.paragraphs.map(plainText));
      if (s.list) lines.push(...s.list.map((li) => `- ${plainText(li)}`));
      lines.push('');
    }
    return lines.join('\n');
  });
  return [...HEADER, '', ...bodies, ...ABOUT, ''].join('\n');
}
