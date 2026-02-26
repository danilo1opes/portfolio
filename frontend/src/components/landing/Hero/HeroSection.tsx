'use client';

import { FRAMEWORKS } from '@/constants/framework';
import { HeroBlur } from '@/components/ui/HeroBlur';
import { Dot, Mouse } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { InfiniteFrameworkScroll } from '@/components/ui/InfiniteFrameworkScroll';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations('herosection');
  const items = [...FRAMEWORKS, ...FRAMEWORKS];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full h-[120vh] md:h-screen overflow-hidden bg-primary"
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

      {/* Badge */}
      <div className="relative z-10 flex justify-center pt-20">
        <span className="flex items-center border border-white/20 pr-4 bg-linear-to-r from-secondary/0 to-secondary/40 backdrop-blur-lg">
          <Dot color="white" size={40} aria-hidden="true" />
          <span className="uppercase text-white/80 text-base leading-4 tracking-wider font-light">
            {t('mini')}
          </span>
        </span>
      </div>

      {/* Heading */}
      <div className="relative z-10 flex justify-center text-center pt-12">
        <h1
          id="hero-heading"
          className="mt-6 text-white font-medium text-6xl md:text-[108px] xl:text-9xl 2xl:text-[160px]"
        >
          {t('title.part1')}{' '}
          <span className="text-white/60 font-medium">{t('title.part2')}</span>
        </h1>
      </div>

      {/* Paragraph */}
      <div className="relative z-10 flex justify-center text-center pt-6 md:pt-14 lg:pt-6 px-6">
        <p className="text-white/70 md:text-lg font-light leading-relaxed md:max-w-lg xl:max-w-4xl md:w-full tracking-[0.015em]">
          {t('paragraph')}
        </p>
      </div>

      {/* CTAs */}
      <nav
        aria-label="Hero actions"
        className="relative z-10 flex justify-center text-center pt-8 md:pt-14 xl:pt-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="#portfolio"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'px-8 py-7 text-base font-light uppercase transition-colors duration-200',
              'bg-white text-black hover:bg-blur/20 hover:text-white active:bg-blur/20 active:text-white',
              'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black',
            )}
          >
            {t('btn.textOne')}
          </Link>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'px-8 py-7 text-base font-light uppercase transition-colors duration-200',
              'border border-white/30 text-white bg-transparent',
              'hover:bg-linear-to-r hover:from-secondary/0 hover:to-secondary/40 hover:backdrop-blur-md hover:text-white',
              'active:bg-linear-to-r active:from-secondary/0 active:to-secondary/40 active:backdrop-blur-md',
              'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black',
            )}
          >
            {t('btn.textTwo')}
          </Link>
        </div>
      </nav>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center text-center pt-14 2xl:pt-10">
        <div className="flex flex-col items-center" aria-hidden="true">
          <p className="text-white/40 uppercase text-xs font-light leading-6 tracking-[1.2px] mb-4">
            {t('scroll')}
          </p>
          <Mouse className="animate-bounce text-white/40" size={18} />
        </div>
      </div>

      {/* Framework scroll */}
      <div className="relative z-10 pt-14">
        <InfiniteFrameworkScroll items={items} />
      </div>
    </section>
  );
}
