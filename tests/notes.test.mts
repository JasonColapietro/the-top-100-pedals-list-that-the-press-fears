// Guard for the /notes article section. Run with `pnpm test`.
import assert from 'node:assert/strict';
import { notes, noteBodyText, wordCount, plainText } from '../src/data/notes.ts';
import { PERSON_ID, ORG_ID, NOTES_URL, noteUrl } from '../src/lib/site.ts';
import { buildNoteJsonLd } from '../src/lib/notes-jsonld.ts';

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

check('exactly three notes with unique slugs', () => {
  assert.equal(notes.length, 3);
  assert.equal(new Set(notes.map((n) => n.slug)).size, 3);
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
    assert.ok(count(text, /Suede(?! AI| Labs)/g) >= 3, 'bare Suede < 3');
    assert.ok(count(text, /Suede Labs/g) <= 1, 'Suede Labs > 1');
  });
  check(`${n.slug}: links to a main page`, () => {
    assert.ok(/suedeai\.agency\/assessment|suedeai\.ai\/founder/.test(raw));
  });
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
    assert.equal(post.datePublished, '2026-11-14');
    assert.equal(crumbs.itemListElement.at(-1).item, noteUrl(n.slug));
    assert.equal(crumbs.itemListElement[1].item, NOTES_URL);
    const json = JSON.stringify(ld);
    assert.ok(!/"@type":"(Person|Organization)"/.test(json), 'minted Person/Organization node');
    assert.ok(!/streetAddress|telephone/.test(json), 'NAP fields present');
  });
}

if (failures) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nall note checks passed');
