import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { RankIndicator } from './RankIndicator';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function DisasterEntry({ entry, edition }: Props) {
  const NameTag: any = entry.catalogKey ? 'a' : 'span';
  const nameProps = entry.catalogKey
    ? {
        href: `https://social.suedeai.ai/pedal/${entry.catalogKey}`,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'transition hover:text-[#ff8b8b]',
      }
    : {};
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'thumbs');
  return (
    <article
      id={`rank-${entry.rank}`}
      className="mb-5 overflow-hidden rounded-lg border border-[#ff8b8b]/14 bg-[#0c0808] p-5 md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-[8rem_minmax(0,1fr)_12rem] md:items-start">
        <div>
          <div className="font-mono text-[64px] leading-none text-[#ff8b8b] md:text-[88px]">{entry.rank}</div>
          <div className="mt-3 h-1 w-14 bg-[#b31324]" />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d7b36a]">
            Disaster file
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
          <div className="h-48 overflow-hidden rounded-lg border border-[#ff8b8b]/14 bg-[#17090a] md:h-40 lg:h-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={`${entry.brand} ${entry.pedal}`} className="h-full w-full object-cover grayscale opacity-75" loading="lazy" />
          </div>
        ) : null}
      </div>
      <div className="mt-7 max-w-3xl text-[17px] leading-8 text-[#e7dcc9]">
        <p>{entry.blurb}</p>
      </div>
      {entry.communityQuotes && entry.communityQuotes.length > 0 ? (
        <div className="mt-7 grid gap-5 border-t border-[#ff8b8b]/14 pt-5 md:grid-cols-3">
          {entry.communityQuotes.map((q, i) => (
            <blockquote key={i} className="border-l border-[#ff8b8b]/35 pl-4 text-sm leading-6 text-[#f1ded2]">
              <p>"{q.quote}"</p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7b36a]">
                <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f8efe2]">{q.source}</a>
              </footer>
            </blockquote>
          ))}
        </div>
      ) : null}
      <div className="mt-6">
        <FightAboutThisLink edition={edition} rank={entry.rank} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
      </div>
    </article>
  );
}
