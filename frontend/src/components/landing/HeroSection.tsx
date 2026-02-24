'use client';

import { FRAMEWORKS } from '@/constants/framework';
import { Button } from '@/components/common/PrimaryButton';
import { HeroBlur } from '@/components/ui/HeroBlur';
import { CodeXml, Dot, Mouse } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { InfiniteFrameworkScroll } from '@/components/ui/InfiniteFrameworkScroll';

export default function HeroSection() {
  const t = useTranslations('herosection');
  const items = [...FRAMEWORKS, ...FRAMEWORKS];
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full h-[110vh] md:h-screen overflow-hidden bg-primary"
    >
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
        aria-hidden="true"
        src="/video/video.mp4"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-primary opacity-90"
      />
      {/* Blur */}
      <HeroBlur />

      <div className="relative z-10 flex justify-center pt-20">
        <div className="flex items-center border border-white/20 pr-4 bg-linear-to-r from-secondary/0 to-secondary/40 backdrop-blur-lg">
          <Dot color="white" size={40} />
          <span
            role="note"
            className="uppercase text-white/80 text-base leading-4 tracking-wider font-light"
          >
            {t('mini')}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex justify-center text-center pt-12">
        <h1 className="mt-6 text-white font-medium text-6xl md:text-[108px] xl:text-9xl 2xl:text-[160px]">
          {t('title.part1')}{' '}
          <span className="text-white/60 font-medium">{t('title.part2')}</span>
        </h1>
      </div>

      <div className="relative z-10 flex justify-center text-center pt-6 md:pt-14 lg:pt-6 px-6">
        <p className="text-white/70 md:text-lg font-light leading-relaxed md:max-w-lg xl:max-w-4xl md:w-full tracking-[0.015em]">
          {t('paragraph')}
        </p>
      </div>

      <div className="relative z-10 flex justify-center text-center pt-8 md:pt-14 xl:pt-20">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button variant="primary">{t('btn.textOne')}</Button>
          <Button variant="secondary">{t('btn.textTwo')}</Button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center text-center pt-14 2xl:pt-10">
        <div className="flex flex-col items-center">
          <p className="text-white/40 uppercase text-xs font-light leading-6 tracking-[1.2px] mb-4">
            {t('scroll')}
          </p>
          <Mouse className="animate-bounce text-white/40" size={18} />
        </div>
      </div>

      <div className="relative z-10 pt-14">
        <InfiniteFrameworkScroll items={items} />
      </div>
    </section>
  );
}
