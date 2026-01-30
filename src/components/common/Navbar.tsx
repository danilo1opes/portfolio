'use client';

import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');
  return <section>{t('title')}</section>;
}
