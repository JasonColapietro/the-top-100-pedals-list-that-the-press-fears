import Link from 'next/link';
import type { SuedeListEntry } from '@/lib/suede-100';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function MiddleRow({ entry, edition }: Props) {
  return (
    <div
      id={`rank-${entry.rank}`}
      className="grid grid-cols-[3rem_minmax(0,1fr)_auto_auto] items-center gap-x-4 border-t border-[rgba(10,18,36,0.08)] py-3"
    >
      <div className="font-mono text-[16px] text-[#5a5350]">{entry.rank}</div>
      <div className="min-w-0">
        <span className="text-[15px] font-semibold text-[#050b16]">
          {entry.catalogKey ? (
            <Link href={`/pedal/${entry.catalogKey}`}>{entry.pedal}</Link>
          ) : (
            entry.pedal
          )}
        </span>
        <span className="text-[13px] text-[#5a5350]"> · </span>
        <span className="text-[13px] text-[#5a5350]">{entry.brand}</span>
        <p className="text-[13px] italic text-[#0a1224]">{entry.blurb}</p>
      </div>
      <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
      <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} compact />
    </div>
  );
}
