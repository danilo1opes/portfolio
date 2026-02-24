const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:3000';

export interface ContactData {
  nome: string;
  email: string;
  mensagem: string;
}

export async function sendContactEmail(data: ContactData): Promise<void> {
  const res = await fetch(`${API_URL}/enviar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Erro ao enviar email');
  }
}
