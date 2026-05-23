type Props = {
  rank: number;
  previousRank: number | undefined;
  isNew?: boolean;
  moveReason?: string;
};

export function RankIndicator({ rank, previousRank, isNew, moveReason }: Props) {
  if (isNew) {
    return (
      <span
        className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#22d3ee]"
        title={moveReason}
      >
        NEW
      </span>
    );
  }
  if (previousRank === undefined || previousRank === rank) return null;
  const delta = previousRank - rank;
  const symbol = delta > 0 ? '▲' : '▼';
  const color = delta > 0 ? 'text-[#0a7a2f]' : 'text-[#9f101a]';
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.1em] ${color}`}
      title={moveReason}
      aria-label={`Moved ${delta > 0 ? 'up' : 'down'} ${Math.abs(delta)} positions${moveReason ? `: ${moveReason}` : ''}`}
    >
      {symbol} {Math.abs(delta)}
    </span>
  );
}
