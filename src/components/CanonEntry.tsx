import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function CanonEntry({ entry, edition }: Props) {
  const padded = String(entry.rank).padStart(2, '0');
  const NameTag: any = entry.catalogKey ? 'a' : 'span';
  const nameProps = entry.catalogKey
    ? {
        href: `https://social.suedeai.ai/pedal/${entry.catalogKey}`,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'transition hover:text-[#d7b36a]',
      }
    : {};
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  return (
    <article
      id={`rank-${entry.rank}`}
      className="group mb-5 overflow-hidden rounded-lg border border-[#f8efe2]/10 bg-[#101116] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition hover:border-[#d7b36a]/60 md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-[7rem_minmax(0,1fr)_10rem] md:items-start lg:grid-cols-[9rem_minmax(0,1fr)_13rem]">
        <div>
          <div className="font-mono text-[64px] leading-none text-[#f8efe2] md:text-[88px]">{padded}</div>
          <div className="mt-3 h-1 w-14 bg-[#b31324]" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#39d6dc]">
            Canon entry
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#f8efe2] md:text-4xl">
            <NameTag {...nameProps}>{entry.pedal}</NameTag>
          </h2>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em] text-[#bcae95]">
            <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
          </p>
          <div className="mt-3">
            <RankIndicator rank={entry.rank} previousRank={entry.previousRank} moveReason={entry.moveReason} />
          </div>
        </div>
        {photo ? (
          <div className="h-48 overflow-hidden rounded-lg border border-[#f8efe2]/10 bg-[#07080b] md:h-40 lg:h-52">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt={`${entry.brand} ${entry.pedal}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
      <div className="mt-7 max-w-3xl text-[17px] leading-8 text-[#e7dcc9]">
        <p>{entry.blurb}</p>
      </div>
      <div className="mt-6">
        <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
      </div>
    </article>
  );
}
