import Link from 'next/link';
import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function CanonEntry({ entry, edition }: Props) {
  const padded = String(entry.rank).padStart(2, '0');
  const NameTag: any = entry.catalogKey ? Link : 'span';
  const nameProps = entry.catalogKey ? { href: `/pedal/${entry.catalogKey}` } : {};
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  return (
    <article id={`rank-${entry.rank}`} className="border-t border-[rgba(10,18,36,0.10)] py-12">
      <div className="grid grid-cols-[auto_1fr_auto] gap-x-8 items-start">
        <div className="font-mono text-[88px] leading-none text-[#050b16]">{padded}</div>
        <div>
          <h2 className="text-3xl font-semibold text-[#050b16]">
            <NameTag {...nameProps}>{entry.pedal}</NameTag>
          </h2>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#5a5350]">
            <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
          </p>
          <div className="mt-1">
            <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
          </div>
        </div>
        {photo ? (
          <div className="hidden sm:block w-32 h-32 overflow-hidden rounded-xl border border-[#e6dccb] bg-[#fbf6ee]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`${entry.brand} ${entry.pedal}`} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ) : null}
      </div>
      <div className="prose prose-lg mt-6 max-w-2xl text-[#0a1224]">
        <p>{entry.blurb}</p>
      </div>
      <div className="mt-6">
        <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
      </div>
    </article>
  );
}
