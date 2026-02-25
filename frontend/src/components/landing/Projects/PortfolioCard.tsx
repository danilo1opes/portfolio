import { cardsPath } from '@/constants/cardspath';
import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface CardTech {
  one: string;
  two: string;
  three: string;
}

export interface GlowConfig {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
}

export interface CardData {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  isGlow?: boolean;
  isGlowMobile?: boolean;
  isGlowDesktop?: boolean;
  glow?: GlowConfig;
  tech: CardTech;
}

interface PortfolioCardProps {
  card: CardData;
  imageHeight?: string;
}

export default function PortfolioCard({
  card,
  imageHeight = 'h-[200px]',
}: PortfolioCardProps) {
  const t = useTranslations('portfolio');
  const path = cardsPath[card.id];

  const locale = useLocale();
  const href = path?.href?.startsWith('http')
    ? path.href
    : `/${locale}${path?.href ?? '#'}`;

  const glow = card.glow ?? {
    width: 'w-30',
    height: 'h-15',
    top: 'top-1/4',
    left: '-left-4',
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-4 flex flex-col gap-4 group hover:bg-blur/5 active:bg-blur/10 transition-colors duration-300 hover:border-blur/20 active:border-blur/20">
      {/* Image area */}
      <div
        className={`relative w-full ${imageHeight} overflow-hidden rounded-2xl border border-white/10 hover:border-blur/20`}
      >
        {/* Year badge */}
        <span className="absolute top-3 left-3 z-10 bg-white/10 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1.5 rounded-xl">
          {path?.year ?? 2025}
        </span>

        {/* Arrow button */}
        <Link
          href={href}
          rel="noopener noreferrer"
          aria-label={`Ver projeto ${card.title}`}
          className="group/arrow absolute top-3 right-3 z-10 h-9 border border-white/10 backdrop-blur-sm hover:bg-blur/30 hover:border-blur/60 rounded-full flex items-center justify-center overflow-hidden w-9 hover:w-16 hover:px-4 transition-all duration-300"
        >
          <ArrowUpRight className="w-4 h-4 text-white absolute transition-all duration-200 opacity-100 scale-100 group-hover/arrow:opacity-0 group-hover/arrow:scale-50" />
          <span className="text-blur text-xs font-semibold tracking-wider uppercase absolute opacity-0 scale-75 group-hover/arrow:opacity-100 group-hover/arrow:scale-100 transition-all duration-200 whitespace-nowrap">
            {t('button')}
          </span>
        </Link>

        {/* Image */}
        <Image
          src={path?.image ?? '/assets/placeholder.webp'}
          fill
          alt={`${card.title} project preview`}
          className="object-cover opacity-50"
          sizes="(max-width: 1280px) 100vw, 50vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-white/5 to-transparent group-hover:from-blur/10 transition-colors duration-300" />
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-2 px-1 pb-1 relative">
        <span className="text-xs font-normal leading-4 tracking-[1.12px] uppercase text-blur/60">
          {card.subtitle}
        </span>

        {/* isGlowMobile/Tablet All*/}
        {card.isGlowMobile && (
          <div
            className={`xl:hidden absolute ${glow.left} ${glow.top} -translate-y-1/2 ${glow.width} ${glow.height} bg-blur/20 rounded-full blur-2xl pointer-events-none`}
          />
        )}

        {/* IsGlow only Desktop*/}
        {card.isGlowDesktop && (
          <div
            className={`hidden xl:block absolute ${glow.left} ${glow.top} -translate-y-1/2 ${glow.width} ${glow.height} bg-blur/20 rounded-full blur-2xl pointer-events-none`}
          />
        )}

        <h3 className="text-lg font-normal leading-7 tracking-[-0.89px] text-white group-hover:text-blur transition-colors duration-300">
          {card.title}
        </h3>

        <p className="text-sm font-normal leading-5 tracking-[-0.15px] text-white/40">
          {card.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {[card.tech.one, card.tech.two, card.tech.three].map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-white/60 border border-white/10 rounded-lg px-3 py-2 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
