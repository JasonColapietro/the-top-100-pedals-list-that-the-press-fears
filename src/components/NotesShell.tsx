import Link from 'next/link';
import { SuedeBuiltBy } from './SuedeBuiltBy';

export function NotesShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07080b] text-[#f8efe2]">
      <nav
        aria-label="Suede 100"
        className="sticky top-0 z-20 border-b border-[#f8efe2]/10 bg-[#07080b]/88 py-3 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-4xl gap-2 overflow-x-auto px-5 font-mono text-[11px] uppercase tracking-[0.18em] sm:px-6">
          <li className="shrink-0">
            <Link href="/" className="block border border-[#f8efe2]/12 px-3 py-2 text-[#cbbda5] transition hover:border-[#d7b36a] hover:text-[#f8efe2]">
              The Suede 100
            </Link>
          </li>
          <li className="shrink-0">
            <Link href="/notes" className="block border border-[#f8efe2]/12 px-3 py-2 text-[#cbbda5] transition hover:border-[#d7b36a] hover:text-[#f8efe2]">
              Notes
            </Link>
          </li>
        </ul>
      </nav>
      <main className="px-5 py-16 sm:px-6 lg:px-8">{children}</main>
      <SuedeBuiltBy />
    </div>
  );
}
