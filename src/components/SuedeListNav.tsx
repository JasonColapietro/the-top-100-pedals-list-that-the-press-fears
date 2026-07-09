export function SuedeListNav() {
  const tiers = [
    { label: 'Canon · 1-10', anchor: '#tier-canon' },
    { label: 'Greats · 11-20', anchor: '#tier-great' },
    { label: 'Middle · 21-80', anchor: '#tier-middle' },
    { label: 'Disasters · 81-99', anchor: '#tier-disaster' },
    { label: '#100', anchor: '#rank-100' },
  ];
  return (
    <nav
      aria-label="Suede 100 tiers"
      className="sticky top-0 z-20 border-b border-[#f8efe2]/10 bg-[#07080b]/88 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur"
    >
      <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 font-mono text-[11px] uppercase tracking-[0.18em] sm:justify-center sm:px-6">
        {tiers.map((t) => (
          <li key={t.anchor} className="shrink-0">
            <a
              href={t.anchor}
              className="block border border-[#f8efe2]/12 px-3 py-2 text-[#cbbda5] transition hover:border-[#d7b36a] hover:text-[#f8efe2]"
            >
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
