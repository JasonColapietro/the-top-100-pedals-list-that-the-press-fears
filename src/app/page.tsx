import type { Metadata } from 'next';
import { SuedeListPage } from '@/components/SuedeListPage';
import { list } from '@/data/best-and-worst-2026';

export const metadata: Metadata = {
  title: 'Top 100 Guitar Pedals of All Time — The Suede 100',
  description:
    'The definitive 100-pedal ranking: canon greats, cult sleepers, expensive mistakes, and disasters. The list guitar media is too afraid to publish.',
  alternates: {
    canonical: 'https://social.suedeai.ai/suede-100/best-and-worst',
  },
};

export default function Page() {
  return <SuedeListPage list={list} />;
}
