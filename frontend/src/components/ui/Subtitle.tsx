'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

export function Subtitle() {
  const t = useTranslations('portfolio');
  return (
    <motion.div
      className="flex items-center gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.span
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-18 h-1 bg-blur origin-left"
      />

      <motion.p
        variants={{
          hidden: { y: 12, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.6 }}
        className="text-blur text-xl uppercase font-normal leading-4 tracking-[1.2px]"
      >
        {t('subtitle')}
      </motion.p>
    </motion.div>
  );
}
