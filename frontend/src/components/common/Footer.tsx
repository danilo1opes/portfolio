'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary" role="contentinfo">
      <div className="container-section">
        <div className="flex flex-col items-center text-center gap-6 xl:flex-row xl:items-center xl:justify-between xl:text-left pt-28 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2 xl:items-start">
            <Link href="/" aria-label="Danilo Lopes - Home">
              <Image
                src="/logo.svg"
                width={160}
                height={40}
                priority
                sizes="(min-width: 1280px) 220px, 160px"
                alt="Danilo Lopes"
                className="h-auto w-40 xl:w-48 2xl:w-56"
              />
            </Link>
            {/* Copyright */}
            <address className="not-italic text-white/40 text-sm">
              © {new Date().getFullYear()} Danilo Lopes. {t('description')}
            </address>
          </div>

          {/* Social */}
          <nav aria-label="Redes sociais">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="https://github.com/danilo1opes"
                  target="_blank"
                  aria-label="Github"
                  className="text-white/40 hover:text-white transition"
                >
                  <Github size={20} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/danilo-1opes/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-white/40 hover:text-white transition"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
