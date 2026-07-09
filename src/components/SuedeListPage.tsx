import type { SuedeList } from '@/lib/suede-100';
import { SuedeListHero } from './SuedeListHero';
import { SuedeListNav } from './SuedeListNav';
import { RevisionNotes } from './RevisionNotes';
import { CanonEntry } from './CanonEntry';
import { GreatEntry } from './GreatEntry';
import { MiddleRow } from './MiddleRow';
import { DisasterEntry } from './DisasterEntry';
import { ClimaxBlock } from './ClimaxBlock';

type TierHeaderProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

function TierHeader({ eyebrow, title, copy }: TierHeaderProps) {
  return (
    <div className="mb-8 grid gap-4 border-b border-[#f8efe2]/12 pb-6 md:grid-cols-[0.42fr_1fr] md:items-end">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#39d6dc]">{eyebrow}</p>
        <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-[#f8efe2] md:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-base leading-7 text-[#cbbda5] md:justify-self-end">
        {copy}
      </p>
    </div>
  );
}

export function SuedeListPage({ list }: { list: SuedeList }) {
  const byTier = {
    canon: list.entries.filter((e) => e.tier === 'canon').sort((a, b) => a.rank - b.rank),
    great: list.entries.filter((e) => e.tier === 'great').sort((a, b) => a.rank - b.rank),
    middle: list.entries.filter((e) => e.tier === 'middle').sort((a, b) => a.rank - b.rank),
    disaster: list.entries.filter((e) => e.tier === 'disaster').sort((a, b) => a.rank - b.rank),
  };
  const climax = byTier.disaster.find((e) => e.rank === 100);
  const disastersBeforeClimax = byTier.disaster.filter((e) => e.rank !== 100);

  return (
    <main className="min-h-screen bg-[#07080b] text-[#f8efe2]">
      <SuedeListHero list={list} />
      <RevisionNotes notes={list.revisionNotes} />
      <SuedeListNav />

      <section id="tier-canon" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TierHeader
            eyebrow="Canon · 1-10"
            title="The board starts here."
            copy="The first ten are not just favorites. They changed the grammar of electric guitar and forced every later box to answer them."
          />
        </div>
        <div className="mx-auto max-w-6xl">
        {byTier.canon.map((e) => <CanonEntry key={e.rank} entry={e} edition={list.edition} />)}
        </div>
      </section>

      <section id="tier-great" className="bg-[#101116] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TierHeader
            eyebrow="Greats · 11-20"
            title="No misses, only arguments."
            copy="This is the dangerous tier: pedals good enough to be canon, held back only by specificity, timing, or one stubborn flaw."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {byTier.great.map((e) => <GreatEntry key={e.rank} entry={e} edition={list.edition} />)}
          </div>
        </div>
      </section>

      <section id="tier-middle" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TierHeader
            eyebrow="Middle · 21-80"
            title="The long uncomfortable middle."
            copy="The list stops being mythology here and becomes judgment: useful boxes, compromised icons, sleeper wins, and expensive shrug machines."
          />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {byTier.middle.map((e) => <MiddleRow key={e.rank} entry={e} edition={list.edition} />)}
          </div>
        </div>
      </section>

      <section id="tier-disaster" className="bg-[#17090a] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TierHeader
            eyebrow="Disasters · 81-99"
            title="The evidence locker."
            copy="The bottom tier is where bad sound, bad design, bad menus, and suspicious reputation management meet the receipts."
          />
        </div>
        <div className="mx-auto max-w-6xl">
          {disastersBeforeClimax.map((e) => <DisasterEntry key={e.rank} entry={e} edition={list.edition} />)}
        </div>
      </section>

      {climax ? <ClimaxBlock entry={climax} edition={list.edition} /> : null}
    </main>
  );
}
