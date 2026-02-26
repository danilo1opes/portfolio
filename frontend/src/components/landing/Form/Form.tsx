import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

export default function Form() {
  const t = useTranslations('form');

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-primary mb-12"
    >
      <div className="container-section pt-28 mb-12">
        <header>
          <h2
            id="contact-heading"
            className="text-white font-medium text-xl leading-7"
          >
            {t('title')}
          </h2>
          <p className="text-white/40 font-normal text-base leading-6 tracking-wide mt-6">
            {t('description')}
          </p>
        </header>
        <ContactForm />
      </div>

      {/* Line */}
      <div className="mt-20 border-b border-white/10" role="separator" />
    </section>
  );
}
