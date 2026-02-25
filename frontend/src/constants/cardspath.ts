export const cardsPath: Record<
  number,
  {
    image: string;
    href: string;
    year: number;
    slug: string;
    siteUrl?: string;
    codeUrl?: string;
  }
> = {
  1: {
    image: '/assets/calisthenyx.webp',
    href: '/projects/calisthenyx',
    slug: 'calisthenyx',
    year: 2025,
    siteUrl: 'https://calistenyx.vercel.app/',
    codeUrl: 'https://github.com/danilo1opes/CalisthenyX',
  },
  2: {
    image: '/assets/nyxlobby.webp',
    href: '/projects/nyxlobby',
    slug: 'nyxlobby',
    year: 2025,
    siteUrl: 'https://nyxlobby.vercel.app',
    codeUrl: 'https://github.com/danilo1opes/nyxlobby',
  },
  3: {
    image: '/assets/nyxtech.webp',
    href: '/projects/nyxtech',
    slug: 'nyxtech',
    year: 2025,
    siteUrl: 'https://nyxtech.vercel.app',
    codeUrl: 'https://github.com/danilo1opes/nyxtech',
  },
  4: {
    image: '/assets/forest.webp',
    slug: 'forest',
    href: '/projects/forest',
    year: 2025,
    siteUrl: 'https://nyxlobby.vercel.app',
    codeUrl: 'https://github.com/danilo1opes/forest',
  },
  5: {
    image: '/assets/tendshop.webp',
    href: '/projects/tendshop',
    slug: 'tendshop',
    year: 2025,
    siteUrl: 'https://nyxlobby.vercel.app',
    codeUrl: 'https://github.com/danilo/nyxlobby',
  },
  6: {
    image: '/assets/animais.webp',
    href: '/projects/animais',
    slug: 'animais',
    year: 2025,
    siteUrl: 'https://nyxlobby.vercel.app',
    codeUrl: 'https://github.com/danilo/nyxlobby',
  },
  7: {
    image: '/assets/advocacia.webp',
    href: '/projects/advocacia',
    year: 2025,
    slug: 'advocacia',
    siteUrl: 'https://www.tavaressaraivaadvogados.com.br/',
    codeUrl: 'https://github.com/danilo/nyxlobby',
  },
  8: {
    image: '/assets/nyxstellar.webp',
    href: '/projects/nyxstellar',
    slug: 'nyxstellar',
    year: 2025,
    siteUrl: 'https://nyxlobby.vercel.app',
    codeUrl: 'https://github.com/danilo/nyxlobby',
  },
};

export const slugToId: Record<string, number> = {
  calisthenyx: 1,
  nyxlobby: 2,
  nyxtech: 3,
  forest: 4,
  tendshop: 5,
  animais: 6,
  advocacia: 7,
  nyxstellar: 8,
};
