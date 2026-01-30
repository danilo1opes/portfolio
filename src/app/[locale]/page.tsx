import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/common/Navbar';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return <Navbar />;
}
