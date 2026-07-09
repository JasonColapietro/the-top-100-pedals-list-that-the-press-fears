import type { SuedeListEntry } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';
import { FightAboutThisLink } from './FightAboutThisLink';

type Props = { entry: SuedeListEntry; edition: string };

export function ClimaxBlock({ entry, edition }: Props) {
  const photo = getPedalImageUrl(entry.brand, entry.pedal, 'heroes');
  return (
    <section
      id={`rank-${entry.rank}`}
      className="relative isolate overflow-hidden border-t border-[#ff8b8b]/20 bg-[#050303] px-5 py-24 text-[#f8efe2] sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#050303_0%,#17090a_48%,#07080b_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-[#ff8b8b]" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-[#ff8b8b]">
            The worst pedal of all time
          </p>
          <div className="mt-5 font-mono text-[8rem] leading-none text-[#f8efe2] sm:text-[12rem] lg:text-[15rem]">100</div>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-[#f8efe2] md:text-7xl">{entry.pedal}</h2>
          <p className="mt-5 font-mono text-[13px] uppercase tracking-[0.18em] text-[#bcae95]">
            <span>{entry.brand}</span>{entry.year ? <span> · {entry.year}</span> : null}
          </p>
        </div>

        <div>
          {photo ? (
            <div className="mb-8 overflow-hidden rounded-lg border border-[#ff8b8b]/18 bg-[#17090a]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo} alt={`${entry.brand} ${entry.pedal}`} className="h-auto w-full object-cover grayscale opacity-75" loading="lazy" />
            </div>
          ) : null}
          <div className="max-w-3xl text-[18px] leading-9 text-[#f1ded2]">
            <p>{entry.blurb}</p>
          </div>
          {entry.communityQuotes && entry.communityQuotes.length > 0 ? (
            <div className="mt-10 space-y-5 border-t border-[#ff8b8b]/18 pt-7">
              {entry.communityQuotes.map((q, i) => (
                <blockquote key={i} className="border-l border-[#ff8b8b]/45 pl-5 text-lg leading-8 text-[#f1ded2]">
                  <p>"{q.quote}"</p>
                  <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d7b36a]">
                    <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f8efe2]">{q.source}</a>
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : null}
          <div className="mt-12">
            <FightAboutThisLink edition={edition} rank={100} entryKey={entry.entryKey} enabled={entry.forumThreadEnabled} />
          </div>
        </div>
      </div>
    </section>
  );
}
