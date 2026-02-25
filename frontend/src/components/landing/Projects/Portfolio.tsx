import { useTranslations } from 'next-intl';
import { Subtitle } from '../../ui/Subtitle';
import PortfolioCard, { CardData, GlowConfig } from './PortfolioCard';

// IDs dos cards que terão o glow
const glowIdsMobile = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const glowIdsDesktop = new Set([1, 6, 7, 8]);

const glowConfig: Record<number, GlowConfig> = {
  1: { width: 'w-30', height: 'h-15', top: 'top-1/4', left: '-left-4' },
  6: {
    width: 'w-30 xl:w-37',
    height: 'h-15 xl:h-20',
    top: 'top-1/4 xl:top-1/2',
    left: '-left-4 xl:-left-8',
  },
  7: {
    width: 'w-30 xl:w-37',
    height: 'h-15 xl:h-20',
    top: 'top-1/4 xl:top-1/4',
    left: '-left-4 xl:-left-8',
  },
  8: {
    width: 'w-30 xl:w-25',
    height: 'h-15 xl:h-10',
    top: 'top-1/4 xl:top-3/4',
    left: '-left-4 xl:-left-8',
  },
};

export default function Portfolio() {
  const t = useTranslations('portfolio');

  const cardsRaw = t.raw('card') as CardData[];

  const cards = [...cardsRaw]
    .sort((a, b) => a.id - b.id)
    .map((card) => ({
      ...card,
      isGlowMobile: glowIdsMobile.has(card.id),
      isGlowDesktop: glowIdsDesktop.has(card.id),
      glow: glowConfig[card.id],
    }));

  const cardBig = cards[0];
  const cardsTopRight = cards.slice(1, 5);
  const cardsBottomLeft = cards.slice(5, 7);
  const cardBottomRight = cards[7];

  return (
    <section
      id="portfolio"
      className="bg-primary"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-section py-6 pt-28 pb-24 md:pb-0">
        <Subtitle />
        <h2 className="text-white text-xl leading-7 font-medium mt-6">
          {t('title')}
        </h2>
        <p className="text-white/50 text-lg leading-6 tracking-[-0.31px] mt-4">
          {t('paragraph')}
        </p>

        <div className="pt-14">
          {/* Mobile + Tablet */}
          <div className="flex flex-col gap-4 xl:hidden">
            {cards.map((card) => (
              <PortfolioCard
                key={card.id}
                card={card}
                imageHeight="h-[260px]"
              />
            ))}
          </div>

          {/* Desktop XL */}
          <div className="hidden xl:flex flex-row gap-4">
            {/* Coluna esquerda */}
            <div className="flex flex-col gap-4 w-1/2">
              <PortfolioCard
                card={cardBig}
                imageHeight="h-[340px] 2xl:h-[450px]"
              />
              <div className="grid grid-cols-2 gap-4">
                {cardsBottomLeft.map((card) => (
                  <PortfolioCard
                    key={card.id}
                    card={card}
                    imageHeight="h-[290px] 2xl:h-[400px]"
                  />
                ))}
              </div>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-4 w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {cardsTopRight.map((card) => (
                  <PortfolioCard
                    key={card.id}
                    card={card}
                    imageHeight="h-[103px] 2xl:h-[170px]"
                  />
                ))}
              </div>
              <PortfolioCard
                card={cardBottomRight}
                imageHeight="h-[270px] 2xl:h-[335px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Line */}
      <div className="mt-20 border-b border-white/10" />
    </section>
  );
}
