import type { SuedeList } from '@/lib/suede-100';
import { getPedalImageUrl } from '@/lib/pedal-images';

const AUTHOR_DISPLAY_NAME: Record<SuedeList['byline']['author'], string> = {
  jason: 'Jason Colapietro',
  johnny: 'Johnny Suede',
};

export function SuedeListHero({ list }: { list: SuedeList }) {
  const authorName = AUTHOR_DISPLAY_NAME[list.byline.author];
  const ratifiedBy = list.byline.ratifiedBy;
  const manifestoParagraphs = list.manifesto
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean);
  const heroPedals = [1, 2, 3, 8, 11, 100]
    .map((rank) => list.entries.find((entry) => entry.rank === rank))
    .filter(Boolean)
    .map((entry) => ({
      entry,
      photo: getPedalImageUrl(entry!.brand, entry!.pedal, 'thumbs'),
    }))
    .filter((item) => item.photo);

  return (
    <>
      <header className="relative isolate overflow-hidden bg-[#07080b] px-5 py-10 text-[#f8efe2] sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#07080b_0%,#17100c_42%,#050b16_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(248,239,226,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(248,239,226,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[720px] lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
          <div className="pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#39d6dc]">
              The Suede 100 · Edition {list.edition}
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.96] text-[#f8efe2] sm:text-6xl lg:text-7xl">
              {list.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#d8c8ae]">
              {list.subtitle ?? 'No courtesy stars. No ad-buy diplomacy. One hundred ranked verdicts from canon to catastrophe.'}
            </p>
            <p className="mt-7 font-mono text-[12px] uppercase tracking-[0.18em] text-[#bcae95]">
              By {authorName}
              {ratifiedBy && ratifiedBy.length > 0 ? ` · Ratified by ${ratifiedBy.join(', ')}` : ''}
            </p>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-[#d7b36a]/30">
              <div className="py-5 pr-4">
                <div className="font-mono text-3xl text-[#f8efe2]">100</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcae95]">Pedals ranked</div>
              </div>
              <div className="border-x border-[#d7b36a]/30 px-4 py-5">
                <div className="font-mono text-3xl text-[#f8efe2]">0</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcae95]">Courtesy sixes</div>
              </div>
              <div className="py-5 pl-4">
                <div className="font-mono text-3xl text-[#f8efe2]">1</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcae95]">Public canon</div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
              <a href="#tier-canon" className="border border-[#d7b36a] bg-[#d7b36a] px-4 py-3 text-[#07080b] transition hover:bg-[#f8efe2]">
                Start at #1
              </a>
              <a href="#rank-100" className="border border-[#f8efe2]/25 px-4 py-3 text-[#f8efe2] transition hover:border-[#b31324] hover:text-[#ff8b8b]">
                Skip to the crime scene
              </a>
            </div>
          </div>

          <div className="relative hidden h-[560px] max-h-[calc(100vh-120px)] lg:block" aria-hidden="true">
            <div className="absolute left-4 top-8 h-[88%] w-px bg-[#d7b36a]/40" />
            <div className="absolute left-0 top-0 font-mono text-[11rem] leading-none text-[#f8efe2]/[0.06]">100</div>
            <div className="grid h-full grid-cols-3 grid-rows-4 gap-3">
              {heroPedals.map(({ entry, photo }, index) => (
                <div
                  key={entry!.rank}
                  className={[
                    'relative overflow-hidden rounded-lg border border-[#f8efe2]/12 bg-[#15120e]',
                    index === 0 ? 'col-span-2 row-span-2' : '',
                    index === 5 ? 'col-span-2' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo!} alt="" className="h-full w-full object-cover opacity-90" loading="eager" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(7,8,11,0.82)_100%)]" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#39d6dc]">#{entry!.rank}</div>
                    <div className="mt-1 line-clamp-2 text-sm font-semibold text-[#f8efe2]">{entry!.pedal}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-[#2b2119] bg-[#f3eadc] px-5 py-14 text-[#050b16] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#b31324]">Manifesto</p>
            <h2 className="mt-3 max-w-sm font-display text-4xl font-semibold leading-tight text-[#050b16]">
              Every pedal earned its number.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-8 text-[#211a15] lg:columns-2 lg:gap-12">
            {manifestoParagraphs.map((paragraph, index) => (
              <p key={index} className="break-inside-avoid">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
