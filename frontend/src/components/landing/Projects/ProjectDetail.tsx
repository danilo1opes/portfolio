'use client'

import Image from 'next/image';

export interface ProjectTranslation {
  year: string;
  subtitle: string;
  title: string;
  description: string;
  client: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

interface Props {
  id: number;
  path: { image: string; href: string; year: number };
  slug: string;
}

export default function ProjectDetail({ id, path, slug }: Props) {
  return (
    <section className="container-section pt-28 pb-24">
      <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-white/10">
        <Image
          src={path.image}
          fill
          alt={slug}
          className="object-cover opacity-60"
        />
      </div>
    </section>
  );
}
