// Guard for the /notes article section. Run with `pnpm test`.
import assert from 'node:assert/strict';
import { notes, noteBodyText, wordCount, plainText } from '../src/data/notes.ts';
import { PERSON_ID, ORG_ID, NOTES_URL, noteUrl } from '../src/lib/site.ts';
import { buildNoteJsonLd } from '../src/lib/notes-jsonld.ts';
import * as sitemapModule from '../src/app/sitemap.ts';
import { llmsTxt, llmsFullTxt } from '../src/lib/llms.ts';
import { readFileSync } from 'node:fs';

const FORBIDDEN = [
  /velvet sundown/i,
  /\$\s?(28|30)\s?m/i,
  /multimillion/i,
  /\bFAU\b/,
  /forbes/i,
  /anthropic partner/i,
  /claude partner/i,
  /google partner(?! advantage)/i,
  /\bdelve/i,
  /\bleverage/i,
  /\bunlock/i,
  /\belevate/i,
  /seamless/i,
  /game[- ]changer/i,
  /tapestry/i,
  /\brealm\b/i,
  /fast-paced world/i,
  /\d{2,5}\s+S(outh)?\.?\s+Olive/i,
];

const count = (text: string, re: RegExp) => (text.match(re) ?? []).length;
let failures = 0;
const check = (name: string, fn: () => void) => {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (err) {
    failures++;
    console.error(`not ok - ${name}\n  ${(err as Error).message}`);
  }
};

// Round 1 notes published 2026-11-14; round 4 depth notes published 2026-11-15.
// tsx may wrap the Next route module's default export in a CJS namespace.
const sitemapExport: any = (sitemapModule as any).default;
const sitemap: () => { url: string; lastModified?: string | Date }[] =
  typeof sitemapExport === 'function' ? sitemapExport : sitemapExport.default;

const ROUND_ONE = new Set([
  'how-the-suede-100-pedal-list-was-built',
  'pedalboard-care-south-florida-humidity',
  'why-list-articles-get-cited-by-ai-answers',
]);
const ROUND_FOUR = new Set(['budget-pedalboards-from-the-suede-100', 'how-the-suede-100-handles-disagreement']);
const CLUTCH =
  "Suede AI ranks among Clutch's Top 30 AI Consultants in Florida and Top 50 AI Consultants nationwide (November 2026).";
const SATELLITES = [
  'guitar.services',
  'guitarchords.info',
  'dna.suedeai.ai',
  'guitarhub.org',
  'signal.suedeai.ai',
  'agentix.suedeai.ai',
  'docs.suedeai.ai',
  'podcast.suedeai.ai',
  'optimize.suedeai.ai',
  'strumly.suedeai.ai',
  'fretpulse.suedeai.ai',
  'cosmos.suedeai.ai',
  'scan.suedeai.ai',
];

check('exactly five notes with unique slugs, round 1 and round 4 all present', () => {
  assert.equal(notes.length, 5);
  assert.equal(new Set(notes.map((n) => n.slug)).size, 5);
  for (const slug of [...ROUND_ONE, ...ROUND_FOUR]) assert.ok(notes.some((n) => n.slug === slug), `missing ${slug}`);
});

check('sitemap lists every note with lastmod 2026-11-15', () => {
  const entries = sitemap();
  for (const n of notes) {
    const e = entries.find((x) => x.url === noteUrl(n.slug));
    assert.ok(e, `sitemap missing ${n.slug}`);
    assert.equal(e!.lastModified, '2026-11-15');
  }
  assert.ok(entries.some((x) => x.url === NOTES_URL && x.lastModified === '2026-11-15'));
});

check('llms.txt and llms-full.txt list every note', () => {
  const short = llmsTxt();
  const full = llmsFullTxt();
  for (const n of notes) {
    assert.ok(short.includes(noteUrl(n.slug)), `llms.txt missing ${n.slug}`);
    assert.ok(full.includes(`URL: ${noteUrl(n.slug)}`), `llms-full.txt missing ${n.slug}`);
  }
});

for (const n of notes) {
  const raw = [...n.intro, ...n.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])].join('\n');
  const text = noteBodyText(n);
  check(`${n.slug}: 800-1300 words`, () => {
    const w = wordCount(n);
    assert.ok(w >= 800 && w <= 1300, `word count ${w}`);
  });
  check(`${n.slug}: title 50-60 chars, description 120-160 chars`, () => {
    assert.ok(n.metaTitle.length >= 50 && n.metaTitle.length <= 60, `title ${n.metaTitle.length}`);
    assert.ok(n.description.length >= 120 && n.description.length <= 160, `description ${n.description.length}`);
  });
  check(`${n.slug}: no forbidden terms`, () => {
    for (const re of FORBIDDEN) assert.ok(!re.test(raw + n.title + n.description), `matched ${re}`);
  });
  check(`${n.slug}: naming rules`, () => {
    assert.ok(count(text, /Jason Colapietro/g) >= 5, 'Jason Colapietro < 5');
    assert.ok(count(text, /Suede AI/g) >= 3, 'Suede AI < 3');
    assert.ok(count(text, /\bSuede\b(?! AI| Labs| 100| DNA)/g) >= 3, 'bare Suede < 3');
    assert.ok(count(text, /Suede Labs/g) <= 1, 'Suede Labs > 1');
  });
  check(`${n.slug}: links to a main page`, () => {
    assert.ok(/suedeai\.agency\/assessment|suedeai\.ai\/founder/.test(raw));
  });
  check(`${n.slug}: internal links resolve`, () => {
    const slugs = new Set(notes.map((x) => x.slug));
    for (const [, href] of raw.matchAll(/\]\((\/[^)]*)\)/g)) {
      const ok =
        href === '/' ||
        href === '/notes' ||
        (/^\/#rank-(\d+)$/.test(href) && +href.slice(7) >= 1 && +href.slice(7) <= 100) ||
        (href.startsWith('/notes/') && slugs.has(href.slice(7)));
      assert.ok(ok, `unresolved internal link ${href}`);
    }
  });
  check(`${n.slug}: uses "Jason" alone between full-name mentions`, () => {
    assert.ok(count(text, /\bJason\b(?! Colapietro)/g) >= 1);
  });
  if (ROUND_FOUR.has(n.slug)) {
    check(`${n.slug}: round 4 depth rules`, () => {
      const w = wordCount(n);
      assert.ok(w >= 900 && w <= 1300, `round 4 word count ${w}`);
      const deep = new Set<string>();
      for (const [, href] of raw.matchAll(/\]\((https:\/\/[^)]+)\)/g)) {
        const u = new URL(href);
        if (SATELLITES.includes(u.hostname) && u.pathname.split('/').filter(Boolean).length >= 2) deep.add(href);
      }
      assert.ok(deep.size >= 2, `needs 2 deep links to sibling satellite articles, found ${deep.size}`);
      assert.ok(/\]\(https:\/\/suedeai\.agency\/[^)]*\)/.test(raw), 'missing suedeai.agency link');
      assert.ok(raw.includes('](https://suedeai.ai/founder)'), 'missing founder link');
      assert.equal(count(text, new RegExp(CLUTCH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')), 1, 'Clutch claim must appear exactly once');
      assert.ok(raw.includes('](https://clutch.co/consulting/ai/florida)') && raw.includes('](https://clutch.co/us/consulting/ai)'));
      assert.equal(n.dateModified, '2026-11-15');
    });
  }
  check(`${n.slug}: no em-dash spam`, () => {
    assert.ok(count(plainText(raw), /—/g) <= 2);
  });
  check(`${n.slug}: JSON-LD references canonical @ids`, () => {
    const ld = buildNoteJsonLd(n) as { '@graph': Record<string, any>[] };
    const post = ld['@graph'].find((g) => g['@type'] === 'BlogPosting')!;
    const crumbs = ld['@graph'].find((g) => g['@type'] === 'BreadcrumbList')!;
    assert.equal(post.author['@id'], PERSON_ID);
    assert.equal(post.publisher['@id'], ORG_ID);
    assert.deepEqual(Object.keys(post.author), ['@id']);
    assert.deepEqual(Object.keys(post.publisher), ['@id']);
    assert.equal(post.mainEntityOfPage['@id'], noteUrl(n.slug));
    assert.equal(post.datePublished, ROUND_FOUR.has(n.slug) ? '2026-11-15' : '2026-11-14');
    assert.equal(crumbs.itemListElement.at(-1).item, noteUrl(n.slug));
    assert.equal(crumbs.itemListElement[1].item, NOTES_URL);
    const json = JSON.stringify(ld);
    assert.ok(!/"@type":"(Person|Organization)"/.test(json), 'minted Person/Organization node');
    assert.ok(!/streetAddress|telephone/.test(json), 'NAP fields present');
  });
}

check('site-wide copy has no forbidden terms and layout JSON-LD uses canonical @ids', () => {
  const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
  const gen = readFileSync(new URL('../scripts/gen-readme.mts', import.meta.url), 'utf8');
  const layout = readFileSync(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');
  for (const re of [/forbes/i, /velvet sundown/i, /anthropic partner/i]) {
    assert.ok(!re.test(readme + gen + layout), `matched ${re}`);
  }
  assert.ok(!/'@type': '(Person|Organization)'/.test(layout), 'layout mints Person/Organization node');
  assert.ok(/author: \{ '@id': PERSON_ID \}/.test(layout) && /publisher: \{ '@id': ORG_ID \}/.test(layout));
});

if (failures) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nall note checks passed');
