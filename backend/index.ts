import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ['https://danilo1opes.vercel.app', 'http://localhost:3000'],
  }),
);
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
} as any);

interface ContactBody {
  nome: string;
  email: string;
  mensagem: string;
}

app.post(
  '/enviar',
  async (req: Request<{}, {}, ContactBody>, res: Response) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    const mailOptions = {
      from: `"${nome}" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_DESTINY,
      subject: `📩 Nova mensagem de ${nome}`,
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ sucesso: 'Email enviado!' });
    } catch (error) {
      console.error((error as Error).message);
      res.status(500).json({ erro: 'Erro ao enviar email' });
    }
  },
);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
