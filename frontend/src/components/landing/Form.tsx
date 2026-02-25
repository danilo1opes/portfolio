import { useTranslations } from 'next-intl';
import ContactForm from '../ui/forms/ContactForm';

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
          <h1
            className="text-white font-medium text-xl leading-7"
            id="contact-heading"
          >
            {t('title')}
          </h1>
          <p className="text-white/40 font-normal text-base leading-6 tracking-wide mt-6">
            {t('description')}
          </p>
        </header>
        <ContactForm />
      </div>
      {/* Line */}
      <div className="mt-20 border-b border-white/10" />
    </section>
  );
}
