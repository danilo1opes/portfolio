'use client';

import { NAV_ITEMS } from '@/constants/navitems';
import { useMenuBehavior } from '@/hooks/useMenuBehavior';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');

  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  const closeMenu = (): void => {
    setOpen(false);
  };

  useMenuBehavior(open, closeMenu);

  return (
    <header
      id="home"
      style={{ '--navbar-height': '80px' } as React.CSSProperties}
      className="sticky top-0 z-50 bg-linear-to-r from-black to-accent"
    >
      <nav
        className="container-section py-6 md:py-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Danilo Lopes - Home">
            <Image
              src="/logo.svg"
              width={160}
              height={40}
              priority
              sizes="(min-width: 1024px) 220px, 160px"
              alt="Danilo Lopes"
              className="h-auto w-40 lg:w-56"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-16">
            <ul className="flex items-center gap-14">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-base font-light tracking-wide text-white/70 hover:text-white transition-colors"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>

            <LocaleSwitcher />
          </div>

          {/* Mobile/Tablet - Locale Switcher */}
          <div className="lg:hidden flex items-center gap-20 md:gap-6">
            <LocaleSwitcher />

            <button
              onClick={toggleMenu}
              aria-label={open ? 'Close Menu' : 'Open Menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="z-50"
            >
              {open ? (
                <X color="white" size={24} />
              ) : (
                <Menu color="white" size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile/Tablet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            style={{ originY: 0, top: 'var(--navbar-height, 80px)' }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden fixed left-0 right-0 bottom-0 z-40 shadow-lg overflow-hidden"
          >
            <nav aria-label="Mobile navigation" className="h-full bg-white">
              <ul className="flex flex-col" onTouchStart={() => {}}>
                {NAV_ITEMS.map(({ key, href }, index) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: index * 0.05 + 0.1,
                      duration: 0.25,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`flex items-center justify-end px-6 py-6 md:py-8 text-sm tracking-widest md:text-lg uppercase font-medium border-b border-gray-200 transition-colors hover:bg-gray-100 active:bg-gray-100 ${
                        index === 0
                          ? 'bg-gray-100 text-black'
                          : 'bg-white text-black/80 hover:bg-gray-100 hover:text-black active:bg-gray-100 active:text-black'
                      }`}
                    >
                      {t(key)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
