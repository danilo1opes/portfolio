import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const skills = t.raw('skills') as string[];

  return (
    <section id="about" className="bg-primary" aria-labelledby="about-heading">
      <div className="container-section py-6 pt-32 xl:grid xl:grid-cols-2 xl:gap-6 2xl:gap-2">
        {/* About */}
        <article>
          <header>
            <h2
              id="about-heading"
              className="text-white text-xl font-medium leading-7"
            >
              {t('title.textOne')}
            </h2>
          </header>

          <p className="text-white/60 text-lg font-normal leading-7 tracking-tight mt-14 md:max-w-xl">
            {t('paragraph')}
          </p>

          {/* Stats Cards */}
          <div
            className="pt-12 md:flex items-center gap-8"
            role="list"
            aria-label="Professional statistics"
          >
            <div
              className="mb-6 md:mb-0 border border-white/10 pt-8 px-4 pb-8 w-xs md:w-68"
              role="listitem"
            >
              <strong className="text-white text-base font-normal leading-7 tracking-[-0.31px] mb-4 block">
                2+ Anos
              </strong>
              <p className="text-white/40 text-sm leading-5 tracking-[0.2px]">
                {t('card.textOne')}
              </p>
            </div>

            <div
              className="border border-white/10 pt-8 px-4 pb-8 w-xs md:w-68"
              role="listitem"
            >
              <strong className="text-white text-base font-normal leading-7 tracking-[-0.31px] mb-4 block">
                10+
              </strong>
              <p className="text-white/40 text-sm leading-5 tracking-[0.2px]">
                {t('card.textTwo')}
              </p>
            </div>
          </div>
        </article>

        {/* Skills Section */}
        <aside aria-labelledby="skills-heading">
          <header className="mt-24 xl:mt-0">
            <h2
              id="skills-heading"
              className="text-white text-xl font-medium leading-7"
            >
              {t('title.textTwo')}
            </h2>
          </header>

          <ul
            className="pt-12 flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6 mb-12"
            role="list"
            aria-label="List of skills"
          >
            {skills.map((item, index) => (
              <li
                key={index}
                className="border border-white/10 hover:border-white/50 active:border-white/50 px-4 py-6 xl:py-4 max-w-88 xl:mt-1 mb-0"
              >
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      {/* Line */}
      <div className="mt-20 border-b border-white/10" />
    </section>
  );
}
