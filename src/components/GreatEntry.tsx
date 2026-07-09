import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function GreatEntry({ entry, edition }: Props) {
  const NameTag: any = entry.catalogKey ? 'a' : 'span';
  const nameProps = entry.catalogKey
    ? {
        href: `https://social.suedeai.ai/pedal/${entry.catalogKey}`,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'transition hover:text-[#39d6dc]',
      }
    : {};
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  return (
    <article
      id={`rank-${entry.rank}`}
      className="group min-h-full overflow-hidden rounded-lg border border-[#f8efe2]/10 bg-[#07080b] transition hover:border-[#39d6dc]/50"
    >
      <div className="grid min-h-full sm:grid-cols-[10rem_1fr]">
        {photo ? (
          <div className="h-44 overflow-hidden bg-[#15120e] sm:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt={`${entry.brand} ${entry.pedal}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="hidden bg-[#15120e] sm:block" />
        )}
        <div className="flex min-h-full flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="font-mono text-[42px] leading-none text-[#f8efe2]">{entry.rank}</div>
            <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[#f8efe2]">
            <NameTag {...nameProps}>{entry.pedal}</NameTag>
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#bcae95]">
            <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
          </p>
          <p className="mt-4 flex-1 text-[15px] leading-7 text-[#d8c8ae]">{entry.blurb}</p>
          <div className="mt-5">
            <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
          </div>
        </div>
      </div>
    </article>
  );
}
