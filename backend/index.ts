import express, { Request, Response } from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

interface ContactBody {
  nome: string;
  email: string;
  mensagem: string;
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: ['https://danilo1opes.vercel.app', 'http://localhost:3000'],
  }),
);
app.use(express.json());

app.post(
  '/enviar',
  async (req: Request<{}, {}, ContactBody>, res: Response) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    const { error } = await resend.emails.send({
      from: 'Formulário <onboarding@resend.dev>',
      to: process.env.EMAIL_DESTINY!,
      replyTo: email,
      subject: `📩 Nova mensagem de ${nome}`,
      html: `
  <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0e0e0e; border-radius: 8px; overflow: hidden;">
    
    <!-- Header -->
    <div style="background: #161616; padding: 32px; border-bottom: 1px solid #2a2a2a;">
      <p style="margin: 0; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666;">Novo contato</p>
      <h1 style="margin: 8px 0 0; font-size: 22px; color: #ffffff;">📩 ${nome} enviou uma mensagem</h1>
    </div>

    <!-- Body -->
    <div style="padding: 32px; background: #0e0e0e;">

      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Nome</p>
        <p style="margin: 0; font-size: 16px; color: #e8e8e8;">${nome}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Email</p>
        <a href="mailto:${email}" style="margin: 0; font-size: 16px; color: #e8e8e8; text-decoration: none;">${email}</a>
      </div>

      <div style="background: #161616; border: 1px solid #2a2a2a; border-radius: 6px; padding: 20px;">
        <p style="margin: 0 0 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Mensagem</p>
        <p style="margin: 0; font-size: 15px; color: #e8e8e8; line-height: 1.6;">${mensagem}</p>
      </div>

    </div>

    <!-- Footer -->
    <div style="padding: 20px 32px; background: #161616; border-top: 1px solid #2a2a2a;">
      <p style="margin: 0; font-size: 12px; color: #444;">Enviado via formulário de contato · danilo1opes.vercel.app</p>
    </div>

  </div>
`,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao enviar email' });
    }

    res.status(200).json({ sucesso: 'Email enviado!' });
  },
);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
