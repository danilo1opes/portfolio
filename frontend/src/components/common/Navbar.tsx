'use client';

import { NAV_ITEMS } from '@/constants/navitems';
import { useMenuBehavior } from '@/hooks/useMenuBehavior';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import { ChevronRight, Menu, X } from 'lucide-react';
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
    <header id="home" className="bg-linear-to-r from-black to-accent">
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
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="lg:hidden fixed inset-0 bg-black z-40 pt-24 container-section"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-4 px-2 text-white/40 hover:text-white active:text-white transition-colors border-b border-white/10"
                  >
                    <ChevronRight size={14} aria-hidden="true" />
                    <span className="text-sm tracking-wider uppercase font-light">
                      {t(key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
