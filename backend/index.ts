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
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
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
