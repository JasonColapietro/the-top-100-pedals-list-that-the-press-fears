import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Suede 100: The List the Press Will Never Print',
  description:
    'Jason Colapietro ranks the 100 most important guitar effects pedals — from the Canon (1–10) to the Disasters (81–100). The list the gear press will never print.',
  openGraph: {
    title: 'The Suede 100: The List the Press Will Never Print',
    description:
      'Jason Colapietro ranks the 100 most important guitar effects pedals.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Suede 100',
    description:
      'Jason Colapietro ranks the 100 most important guitar effects pedals.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
