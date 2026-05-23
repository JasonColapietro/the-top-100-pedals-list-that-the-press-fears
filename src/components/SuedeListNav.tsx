export function SuedeListNav() {
  const tiers = [
    { label: 'Canon · 1-10', anchor: '#tier-canon' },
    { label: 'Greats · 11-20', anchor: '#tier-great' },
    { label: 'Middle · 21-80', anchor: '#tier-middle' },
    { label: 'Disasters · 81-100', anchor: '#tier-disaster' },
  ];
  return (
    <nav
      aria-label="Suede 100 tiers"
      className="sticky top-0 z-10 bg-[#fbf6ee]/95 backdrop-blur border-b border-[rgba(10,18,36,0.10)] py-3"
    >
      <ul className="flex justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em]">
        {tiers.map((t) => (
          <li key={t.anchor}>
            <a href={t.anchor} className="text-[#5a5350] hover:text-[#050b16]">{t.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
