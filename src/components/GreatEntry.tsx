import Link from 'next/link';
import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function GreatEntry({ entry, edition }: Props) {
  const NameTag: any = entry.catalogKey ? Link : 'span';
  const nameProps = entry.catalogKey ? { href: `/pedal/${entry.catalogKey}` } : {};
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  return (
    <article id={`rank-${entry.rank}`} className="border-t border-[rgba(10,18,36,0.10)] py-8">
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-6 items-start">
        <div className="font-mono text-[42px] leading-none text-[#050b16]">{entry.rank}</div>
        <div>
          <h3 className="text-xl font-semibold text-[#050b16]">
            <NameTag {...nameProps}>{entry.pedal}</NameTag>
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5a5350]">
            <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
          </p>
        </div>
        {photo ? (
          <div className="hidden sm:block w-20 h-20 overflow-hidden rounded-lg border border-[#e6dccb] bg-[#fbf6ee]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`${entry.brand} ${entry.pedal}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ) : null}
      </div>
      <p className="mt-4 max-w-2xl text-[#0a1224]">{entry.blurb}</p>
      <div className="mt-4 flex items-center gap-4">
        <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
        <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
      </div>
    </article>
  );
}
