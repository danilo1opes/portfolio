'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '../../ui/card';
import { Mail, Send } from 'lucide-react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';

export default function ContactForm() {
  const t = useTranslations('form');
  return (
    <div className="mt-12 space-y-10 xl:grid xl:grid-cols-2 xl:gap-24">
      <aside
        aria-labelledby="contact-email-heading"
        className="bg-transparent border border-white/10 rounded-xs xl:h-58"
      >
        <CardContent className="p-8 space-y-6">
          <Mail className="text-white/60" size={26} aria-hidden="true" />
          <h2 className="text-white">{t('cardTitle')}</h2>
          <address className="text-white/40">parceriasnyx@gmail.com</address>
        </CardContent>
      </aside>

      {/* Formulario */}
      <form className="space-y-6" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">
          Formulário de contato
        </h2>

        <div>
          <label htmlFor="name" className="sr-only">
            {t('name')}
          </label>
          <Input
            type="text"
            name="name"
            placeholder={t('name')}
            className="rounded-xs bg-transparent border-white/10 placeholder:text-white/30 text-white h-12"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {t('email')}
          </label>
          <Input
            type="email"
            name="email"
            placeholder={t('email')}
            className="rounded-xs bg-transparent border-white/10 placeholder:text-white/30 text-white h-12"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t('message')}
          </label>
          <Textarea
            name="message"
            placeholder={t('message')}
            rows={6}
            className="rounded-xs min-h-37 bg-transparent border-white/10 placeholder:text-white/30 text-white"
            required
          />
        </div>

        <Button
          variant="outline"
          className="group rounded-xs w-full h-14 uppercase border-white text-white hover:bg-white hover:text-black transition flex items-center gap-2"
        >
          {t('button')}
          <Send className="transition" aria-hidden="true" />
        </Button>
      </form>
    </div>
  );
}
