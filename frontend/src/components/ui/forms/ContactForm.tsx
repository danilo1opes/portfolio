'use client';

import { useTranslations } from 'next-intl';
import { CardContent } from '@/components/ui/card';
import { Loader2, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { sendContactEmail } from '@/services/contactService';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface Errors {
  nome?: boolean;
  email?: boolean;
  mensagem?: boolean;
}

export default function ContactForm() {
  const t = useTranslations('form');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Valida campos vazios
    const newErrors: Errors = {
      nome: !nome.trim(),
      email: !email.trim(),
      mensagem: !mensagem.trim(),
    };

    setErrors(newErrors);

    // Se tiver algum erro, não envia
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus('loading');

    try {
      await sendContactEmail({ nome, email, mensagem });
      setStatus('success');
      setNome('');
      setEmail('');
      setMensagem('');
      setErrors({});
    } catch {
      setStatus('error');
    }
  }

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

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-labelledby="contact-form-heading"
      >
        <h2 id="contact-form-heading" className="sr-only">
          Formulário de contato
        </h2>

        <div>
          <label htmlFor="name" className="sr-only">
            {t('name')}
          </label>
          <Input
            id="name"
            type="text"
            placeholder={t('name')}
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              if (errors.nome) setErrors((prev) => ({ ...prev, nome: false }));
            }}
            className={`rounded-xs bg-transparent placeholder:text-white/30 text-white h-12 transition-colors ${
              errors.nome
                ? 'border-red-500 focus-visible:ring-red-500'
                : 'border-white/10'
            }`}
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            {t('email')}
          </label>
          <Input
            id="email"
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors((prev) => ({ ...prev, email: false }));
            }}
            className={`rounded-xs bg-transparent placeholder:text-white/30 text-white h-12 transition-colors ${
              errors.email
                ? 'border-red-500 focus-visible:ring-red-500'
                : 'border-white/10'
            }`}
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            {t('message')}
          </label>
          <Textarea
            id="message"
            placeholder={t('message')}
            rows={6}
            value={mensagem}
            onChange={(e) => {
              setMensagem(e.target.value);
              if (errors.mensagem)
                setErrors((prev) => ({ ...prev, mensagem: false }));
            }}
            className={`rounded-xs min-h-37 bg-transparent placeholder:text-white/30 text-white transition-colors ${
              errors.mensagem
                ? 'border-red-500 focus-visible:ring-red-500'
                : 'border-white/10'
            }`}
          />
        </div>

        {status === 'success' && (
          <p className="text-green-400 text-sm">{t('success')}</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm">{t('error')}</p>
        )}

        <Button
          type="submit"
          disabled={status === 'loading'}
          variant="outline"
          className="group rounded-xs w-full h-14 uppercase border-white text-white hover:bg-white hover:text-black transition flex items-center gap-2 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <>
              Enviando...
              <Loader2 className="animate-spin" size={16} aria-hidden="true" />
            </>
          ) : (
            <>
              {t('button')}
              <Send className="transition" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
