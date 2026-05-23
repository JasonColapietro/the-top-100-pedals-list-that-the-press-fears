import type { SuedeList } from '@/lib/suede-100';
import { SuedeListHero } from './SuedeListHero';
import { SuedeListNav } from './SuedeListNav';
import { RevisionNotes } from './RevisionNotes';
import { CanonEntry } from './CanonEntry';
import { GreatEntry } from './GreatEntry';
import { MiddleRow } from './MiddleRow';
import { DisasterEntry } from './DisasterEntry';
import { ClimaxBlock } from './ClimaxBlock';

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
    <main className="bg-[#fbf6ee] text-[#050b16]">
      <SuedeListHero list={list} />
      <RevisionNotes notes={list.revisionNotes} />
      <SuedeListNav />

      <section id="tier-canon" className="px-6 max-w-3xl mx-auto">
        <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mt-16 mb-4">Canon · 1-10</h2>
        {byTier.canon.map((e) => <CanonEntry key={e.rank} entry={e} edition={list.edition} />)}
      </section>

      <section id="tier-great" className="px-6 max-w-3xl mx-auto">
        <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mt-16 mb-4">Greats · 11-20</h2>
        {byTier.great.map((e) => <GreatEntry key={e.rank} entry={e} edition={list.edition} />)}
      </section>

      <section id="tier-middle" className="px-6 max-w-3xl mx-auto">
        <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mt-16 mb-4">The Middle · 21-80</h2>
        {byTier.middle.map((e) => <MiddleRow key={e.rank} entry={e} edition={list.edition} />)}
      </section>

      <section id="tier-disaster" className="px-6 max-w-3xl mx-auto">
        <h2 className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mt-16 mb-4">Disasters · 81-100</h2>
        {disastersBeforeClimax.map((e) => <DisasterEntry key={e.rank} entry={e} edition={list.edition} />)}
      </section>

      {climax ? <ClimaxBlock entry={climax} edition={list.edition} /> : null}
    </main>
  );
}
