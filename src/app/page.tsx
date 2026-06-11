import type { Metadata } from 'next';
import { SuedeListPage } from '@/components/SuedeListPage';
import { list } from '@/data/best-and-worst-2026';

export const metadata: Metadata = {
  title: 'Best & Worst Guitar Pedals of All Time — The Suede 100',
  description:
    'The definitive 100-pedal ranking — Canon greats, hidden gems, and disasters. The list guitar media is too afraid to publish. By Jason Colapietro.',
  alternates: {
    canonical: 'https://social.suedeai.ai/suede-100/best-and-worst',
  },
};

export default function Page() {
  return <SuedeListPage list={list} />;
}
