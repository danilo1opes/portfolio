'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const locales = ['pt', 'en'] as const;

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((lng, index) => {
        const isActive = locale === lng;

        return (
          <div key={lng} className="flex items-center gap-2">
            {index < locales.length - 1 && (
              <span className="hidden md:block mx-2 h-6 w-px bg-white/40" />
            )}
            <button
              type="button"
              onClick={() => switchLocale(lng)}
              aria-current={isActive ? 'true' : undefined}
              className={
                isActive
                  ? 'text-white cursor-pointer'
                  : 'text-white/40 hover:text-white transition-colors cursor-pointer'
              }
            >
              {lng.toUpperCase()}
            </button>

            {index < locales.length - 1 && (
              <span className="text-white/40">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
