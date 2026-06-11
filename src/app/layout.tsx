import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://social.suedeai.ai/suede-100/best-and-worst';
const TITLE = 'The Suede 100: Best & Worst Guitar Pedals — The List the Press Fears';
const DESCRIPTION =
  'Jason Colapietro ranks the 100 most important guitar effects pedals ever made — Canon essentials, hidden greats, and disasters the gear press dare not print.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: '%s | The Suede 100',
  },
  description: DESCRIPTION,
  keywords: [
    'best guitar pedals',
    'worst guitar pedals',
    'guitar effects pedals ranked',
    'top 100 guitar pedals',
    'Suede 100',
    'guitar pedal tier list',
    'overdrive pedals',
    'fuzz pedals',
    'delay pedals',
    'reverb pedals',
    'Jason Colapietro',
    'guitar gear list',
    'guitar effects buying guide',
    'guitar pedal reviews',
    'boutique guitar pedals',
  ],
  authors: [{ name: 'Jason Colapietro', url: 'https://github.com/JasonColapietro' }],
  creator: 'Jason Colapietro',
  publisher: 'Suede Labs AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'The Suede 100',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Suede 100 — the definitive guitar pedal ranking the gear press fears to print',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@suedeai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  url: BASE_URL,
  description: DESCRIPTION,
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'Suede Labs AI',
    url: 'https://suedeai.ai',
  },
  author: {
    '@type': 'Person',
    name: 'Jason Colapietro',
    url: 'https://github.com/JasonColapietro',
  },
  sameAs: [
    'https://twitter.com/suedeai',
    'https://github.com/Suede-AI',
    'https://github.com/JasonColapietro',
  ],
  about: {
    '@type': 'ItemList',
    name: 'The Suede 100 — Best & Worst Guitar Pedals',
    description:
      'A ranked list of the 100 most important guitar effects pedals, from Canon essentials to Disasters.',
    numberOfItems: 100,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
