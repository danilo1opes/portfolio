'use client';

import { ProjectTranslation } from '@/types/projectTranslation';
import {
  ArrowLeft,
  Calendar,
  Dot,
  ExternalLink,
  Github,
  Tag,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  project: ProjectTranslation;
  path: { image: string; siteUrl?: string; codeUrl?: string };
}

export default function ProjectDetail({ project, path }: Props) {
  const locale = useLocale();
  const t = useTranslations('projects');

  return (
    <article aria-labelledby="project-title">
      {/* BackPage */}
      <nav aria-label={t('back')}>
        <div className="container-section pt-12">
          <Link
            href={`/${locale}#portfolio`}
            className="flex items-center gap-4 text-white/60 hover:text-white"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            <span className="uppercase text-sm tracking-[0.55px]">
              {t('back')}
            </span>
          </Link>
        </div>
        <div className="mt-10 border-b border-white/10" />
      </nav>

      {/* Content */}
      <div className="container-section mt-10">
        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-normal tracking-widest uppercase text-white/40 leading-4">
            <time dateTime={String(new Date().getFullYear())}>
              {new Date().getFullYear()}
            </time>
            {' • '}
            <span>{project.subtitle}</span>
          </p>
          <h1 id="project-title" className="mt-12 text-5xl text-white">
            {project.title}
          </h1>
          <p className="mt-6 font-light text-xl text-white/60 leading-7 tracking-[-0.45px]">
            {project.description}
          </p>
        </header>

        {/* Hero Image */}
        <figure className="relative w-full h-50 md:h-125 xl:h-250 rounded-xs overflow-hidden border border-white/10 mb-12">
          <Image
            src={path.image}
            fill
            alt={`${project.title} — project preview`}
            className="object-cover"
            sizes="100vw"
            priority
          />
        </figure>

        {/* Meta cards */}
        <dl className="flex flex-col xl:grid xl:grid-cols-3 gap-3 mb-12">
          {[
            { label: t('client'), value: project.client, icon: Tag },
            { label: t('duration'), value: project.duration, icon: Calendar },
            { label: t('role'), value: project.role, icon: Tag },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="border border-white/10 hover:border-white transition-all rounded-xs p-6"
              >
                <dt className="flex items-center gap-3 text-sm tracking-widest uppercase text-white/40 font-light mb-4">
                  <Icon size={16} aria-hidden="true" />
                  {item.label}
                </dt>
                <dd className="text-base text-white leading-6 font-light">
                  {item.value}
                </dd>
              </div>
            );
          })}
        </dl>

        {/* Challenge */}
        <section aria-labelledby="challenge-title" className="mt-18">
          <h2
            id="challenge-title"
            className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5"
          >
            {t('challenge')}
          </h2>
          <p className="text-[20px] leading-[32.5px] tracking-[-0.45px] text-white/80 font-light">
            {project.challenge}
          </p>
        </section>

        {/* Solution */}
        <section aria-labelledby="solution-title" className="mt-18">
          <h2
            id="solution-title"
            className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5"
          >
            {t('solution')}
          </h2>
          <p className="text-[20px] leading-[32.5px] tracking-[-0.45px] text-white/80 font-light">
            {project.solution}
          </p>
        </section>

        {/* Results */}
        <section aria-labelledby="results-title" className="mt-24">
          <h2
            id="results-title"
            className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5"
          >
            {t('results')}
          </h2>
          <ul className="flex flex-col xl:grid xl:grid-cols-2 gap-3 xl:w-250 2xl:w-300">
            {project.results.map((result, index) => (
              <li
                key={index}
                className="flex items-center border border-white/10 hover:border-white rounded-xs px-1 py-3"
              >
                <Dot size={36} aria-hidden="true" />
                <span className="text-white/80 text-base font-light leading-6 tracking-[-0.31px]">
                  {result}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section aria-labelledby="technologies-title" className="mt-24">
          <h2
            id="technologies-title"
            className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5"
          >
            {t('technologies')}
          </h2>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="text-base text-white border border-white/10 rounded-xs px-3 py-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Line */}
      <div className="mt-20 border-b border-white/10" role="separator" />

      {/* CTAs */}
      <footer className="container-section mt-24 flex flex-col items-center md:flex-row gap-3 pb-12">
        {path.siteUrl && (
          <Link
            href={path.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t('viewSite')} — ${project.title}`}
            className="inline-flex items-center gap-2 h-14 px-12 text-sm font-normal rounded-xs bg-white text-black hover:bg-white/90 transition cursor-pointer"
          >
            {t('viewSite')}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}

        {path.codeUrl && (
          <Link
            href={path.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t('viewCode')} — ${project.title} on GitHub`}
            className="inline-flex items-center gap-2 h-14 px-12 text-sm font-normal rounded-xs border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition cursor-pointer"
          >
            {t('viewCode')}
            <Github className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </footer>

      {/* Line */}
      <div className="border-b border-white/10" role="separator" />
    </article>
  );
}
