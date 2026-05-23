// frontend/src/components/social/suede-100/ClimaxBlock.tsx
import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function ClimaxBlock({ entry, edition }: Props) {
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'heroes');
  return (
    <section
      id={`rank-${entry.rank}`}
      className="min-h-screen flex flex-col justify-center border-t-4 border-[#9f101a] py-24 px-6 max-w-5xl mx-auto"
    >
      <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#9f101a] mb-6">
        The Worst Pedal of All Time
      </p>
      <div className="font-mono text-[180px] leading-none text-[#050b16] mb-8">100</div>
      {photo ? (
        <div className="mb-8 w-full max-w-md overflow-hidden rounded-2xl border border-[#e6dccb] bg-[#fbf6ee]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt={`${entry.brand} ${entry.pedal}`} className="w-full h-auto object-cover grayscale opacity-70" loading="lazy" />
        </div>
      ) : null}
      <h2 className="text-5xl md:text-6xl font-semibold text-[#050b16] mb-4">{entry.pedal}</h2>
      <p className="font-mono text-[14px] uppercase tracking-[0.18em] text-[#5a5350] mb-8">
        <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
      </p>
      <div className="prose prose-xl max-w-3xl text-[#0a1224]">
        <p>{entry.blurb}</p>
      </div>
      {entry.communityQuotes && entry.communityQuotes.length > 0 ? (
        <div className="mt-10 space-y-6 max-w-3xl">
          {entry.communityQuotes.map((q, i) => (
            <blockquote key={i} className="border-l-2 border-[#22d3ee] pl-6 italic text-xl text-[#0a1224]">
              <p>"{q.quote}"</p>
              <footer className="not-italic text-[11px] font-mono uppercase tracking-[0.18em] text-[#5a5350] mt-2">
                — <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{q.source}</a>
              </footer>
            </blockquote>
          ))}
        </div>
      ) : null}
      <div className="mt-12">
        <FightAboutThisLink edition={edition} rank={100} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
      </div>
    </section>
  );
}
