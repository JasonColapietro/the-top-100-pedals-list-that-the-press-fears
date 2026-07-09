import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function MiddleRow({ entry, edition }: Props) {
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  const NameTag: any = entry.catalogKey ? 'a' : 'span';
  const nameProps = entry.catalogKey
    ? {
        href: `https://social.suedeai.ai/pedal/${entry.catalogKey}`,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'transition hover:text-[#39d6dc]',
      }
    : {};

  return (
    <article
      id={`rank-${entry.rank}`}
      className="group grid min-h-[172px] overflow-hidden rounded-lg border border-[#f8efe2]/10 bg-[#101116] transition hover:border-[#d7b36a]/50"
    >
      <div className="grid grid-cols-[7rem_1fr]">
        {photo ? (
          <div className="relative overflow-hidden bg-[#15120e]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt={`${entry.brand} ${entry.pedal}`}
              className="h-full min-h-[172px] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.05] group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,8,11,0.78)_100%)]" />
            <div className="absolute bottom-3 left-3 font-mono text-xl text-[#f8efe2]">{entry.rank}</div>
          </div>
        ) : (
          <div className="flex min-h-[172px] items-center justify-center bg-[#15120e]">
            <div className="font-mono text-4xl text-[#f8efe2]/80">{entry.rank}</div>
          </div>
        )}
        <div className="flex min-w-0 flex-col p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcae95]">
              {entry.year ? `${entry.year} · ` : ''}{entry.brand}
            </p>
            <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-tight text-[#f8efe2]">
            <NameTag {...nameProps}>{entry.pedal}</NameTag>
          </h3>
          <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#cbbda5]">{entry.blurb}</p>
          <div className="mt-auto pt-4">
            <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} compact />
          </div>
        </div>
      </div>
    </article>
  );
}
