import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/common/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import About from '@/components/landing/About';
import Portfolio from '@/components/landing/Projects/Portfolio';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <aside>
        <About />
      </aside>
      <Portfolio />
    </div>
  );
}
