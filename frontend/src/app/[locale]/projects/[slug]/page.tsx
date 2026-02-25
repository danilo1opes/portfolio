import ProjectDetail, {
  ProjectTranslation,
} from '@/components/landing/Projects/ProjectDetail';
import { cardsPath, slugToId } from '@/constants/cardspath';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(slugToId).flatMap((slug) =>
    ['pt', 'en'].map((locale) => ({ locale, slug })),
  );
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const id = slugToId[slug];
  if (!id) notFound();

  const path = cardsPath[id];

  const t = await getTranslations('projects');
  const project = t.raw(`items.${slug}`) as ProjectTranslation;
  return (
    <main className="bg-primary min-h-screen">
      <ProjectDetail project={project} path={path} />
    </main>
  );
}
