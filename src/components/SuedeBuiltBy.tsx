import Link from 'next/link';

const MAIN_LINKS = [
  { href: 'https://suedeai.agency/', label: 'Suede AI agency: SEO, GEO and web in West Palm Beach' },
  { href: 'https://suedeai.ai/', label: 'Suede AI agentic platform' },
  { href: 'https://suedeai.ai/founder', label: 'Jason Colapietro, Founder and CEO' },
  { href: 'https://jasoncolapietro.com/', label: 'jasoncolapietro.com' },
  { href: 'https://jupitersocialfl.com/', label: 'Jupiter Social magazine' },
];

const SIBLINGS = [
  { href: 'https://guitar.services/notes', label: 'Signal Chain reference notes' },
  { href: 'https://guitarhub.org/notes', label: 'Guitar Hub notes' },
  { href: 'https://dna.suedeai.ai/articles', label: 'Suede DNA rig archive' },
  { href: 'https://fretpulse.suedeai.ai/', label: 'FretPulse' },
  { href: 'https://guitarchords.info/notes', label: 'Guitar Chords reference' },
];

export function SuedeBuiltBy() {
  return (
    <footer className="border-t border-[#f8efe2]/10 bg-[#050608] px-5 py-14 text-[#cbbda5] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#39d6dc]">Built by Suede AI</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-[#f8efe2]">
            Built by Suede AI in West Palm Beach, Florida
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6">
            Suede AI is an agentic platform company founded in 2024 by engineer Jason Colapietro. Websites and AI
            search visibility for businesses across Jupiter, Palm Beach Gardens and Palm Beach County.
          </p>
          <Link
            href="/notes"
            className="mt-5 inline-block border border-[#f8efe2]/12 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#cbbda5] transition hover:border-[#d7b36a] hover:text-[#f8efe2]"
          >
            Read the notes
          </Link>
        </div>
        <nav aria-label="Suede AI">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#bcae95]">Suede AI</p>
          <ul className="mt-3 space-y-2 text-sm">
            {MAIN_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[#f8efe2]">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="More from Suede AI">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#bcae95]">More from Suede AI</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SIBLINGS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[#f8efe2]">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
