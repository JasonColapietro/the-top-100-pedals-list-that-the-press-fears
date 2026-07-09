// Standalone repo fallback: the original Suede Social component can point to
// forum threads. This archive points readers to the canonical rank instead.

type Props = {
  edition: string;
  rank: number;
  entryKey: string;
  enabled?: boolean;
  compact?: boolean;
};

export function FightAboutThisLink({ rank, compact }: Props) {
  const href = `https://social.suedeai.ai/suede-100/best-and-worst#rank-${rank}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        'inline-flex border border-[#f8efe2]/16 font-mono uppercase tracking-[0.18em] text-[#f8efe2] transition hover:border-[#39d6dc] hover:text-[#39d6dc]',
        compact ? 'px-3 py-2 text-[10px]' : 'px-4 py-3 text-[11px]',
      ].join(' ')}
    >
      {compact ? 'Open rank' : 'Open canonical rank'}
    </a>
  );
}
