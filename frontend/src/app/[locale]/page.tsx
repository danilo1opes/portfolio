import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/landing/Hero/HeroSection';
import About from '@/components/landing/About/About';
import Portfolio from '@/components/landing/Projects/Portfolio';
import Form from '@/components/landing/Form/Form';

type Props = {
  params: Promise<{ locale: string }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div>
      <main>
        <HeroSection />
        <About />
        <Portfolio />
        <Form />
      </main>
    </div>
  );
}
