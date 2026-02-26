'use client';

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

export interface ProjectTranslation {
  year: string;
  subtitle: string;
  title: string;
  description: string;
  client: string;
  duration: string;
  role: string;
  dare: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

interface Props {
  project: ProjectTranslation;
  path: { image: string; siteUrl?: string; codeUrl?: string };
}

export default function ProjectDetail({ project, path }: Props) {
  const locale = useLocale();
  const t = useTranslations('projects');
  return (
    <section className="pt-12 pb-12">
      {/* BackPage */}
      <div>
        <div className="container-section">
          <Link
            href={`/${locale}#portfolio`}
            className="flex items-center gap-4 text-white/60 hover:text-white"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            <p className="uppercase text-sm tracking-[0.55px]">{t('back')}</p>
          </Link>
        </div>

        {/* Line */}
        <div className="mt-10 border-b border-white/10" />
      </div>

      {/* Content */}
      <div className="container-section mt-10">
        {/* Inicio */}
        <div className="mb-12">
          <p className="text-xs font-normal tracking-widest uppercase text-white/40 leading-4">
            {new Date().getFullYear()} • {project.subtitle}
          </p>
          <h1 className="mt-12 text-5xl text-white">{project.title}</h1>
          <p className="mt-6 font-light text-xl text-white/60 leading-7 tracking-[-0.45px]">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-50 md:h-125 xl:h-250 rounded-xs overflow-hidden border border-white/10 mb-12">
          <Image
            src={path.image}
            fill
            alt={project.title}
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Meta cards */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-3 mb-12">
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
                {/* Label */}
                <p className="flex items-center gap-3 text-sm tracking-widest uppercase text-white/40 font-light mb-4">
                  <Icon size={16} />
                  {item.label}
                </p>

                {/* Value */}
                <p className="text-base text-white leading-6 font-light">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Challange */}
        <div className="mt-18">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5">
            {t('challenge')}
          </h2>

          <p className="text-[20px] leading-[32.5px] tracking-[-0.45px] text-white/80 font-light">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mt-18">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5">
            {t('solution')}
          </h2>

          <p className="text-[20px] leading-[32.5px] tracking-[-0.45px] text-white/80 font-light">
            {project.solution}
          </p>
        </div>

        {/* Results */}
        <div className="mt-24">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5">
            {t('results')}
          </h2>
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-3 xl:w-250 2xl:w-300">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="flex items-center border border-white/10 hover:border-white rounded-xs px-1 py-3"
              >
                <Dot size={36} />
                <p className="text-white/80 text-base font-light leading-6 tracking-[-0.31px]">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-24">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-white/40 leading-5">
            {t('technologies')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <ul>
                <li
                  key={tech}
                  className="text-base text-white border border-white/10 rounded-xs px-3 py-2"
                >
                  {tech}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="mt-20 border-b border-white/10" />

      <div className="container-section mt-24 flex flex-col items-center md:flex-row gap-3">
        {path.siteUrl && (
          <Link
            href={path.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
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
            className="inline-flex items-center gap-2 h-14 px-12 text-sm font-normal rounded-xs border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition cursor-pointer"
          >
            {t('viewCode')}
            <Github className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      {/* Line */}
      <div className="mt-20 border-b border-white/10" />
    </section>
  );
}
