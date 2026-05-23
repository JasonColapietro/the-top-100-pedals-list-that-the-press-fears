import type { SuedeList } from '@/lib/suede-100';

const AUTHOR_DISPLAY_NAME: Record<SuedeList['byline']['author'], string> = {
  jason: 'Jason Colapietro',
  johnny: 'Johnny Suede',
};

export function SuedeListHero({ list }: { list: SuedeList }) {
  const authorName = AUTHOR_DISPLAY_NAME[list.byline.author];
  const ratifiedBy = list.byline.ratifiedBy;
  return (
    <header className="py-16 px-6 max-w-3xl mx-auto">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#9f101a] mb-4">
        The Suede 100 · Edition <span className="text-[#050b16]">{list.edition}</span>
      </p>
      <h1 className="text-5xl md:text-7xl font-semibold text-[#050b16] leading-tight">
        {list.title}
      </h1>
      {list.subtitle ? (
        <p className="mt-4 text-xl text-[#5a5350]">{list.subtitle}</p>
      ) : null}
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#5a5350] mt-8">
        By {authorName}
        {ratifiedBy && ratifiedBy.length > 0 ? ` · Ratified by ${ratifiedBy.join(', ')}` : ''}
      </p>
      <div className="prose prose-lg mt-10 text-[#0a1224] whitespace-pre-wrap">
        {list.manifesto}
      </div>
    </header>
  );
}
