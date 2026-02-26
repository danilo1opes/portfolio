# 🗂️ Danilo Lopes — Portfolio

> Portfólio pessoal desenvolvido com Next.js, integrando tudo que aprendi desde: UI/UX, acessibilidade, SEO semântico, internacionalização e um formulário de contato funcional com backend próprio.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-4.8.1-purple?style=flat)](https://next-intl-docs.vercel.app/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)

🌐 **[Visualizar o Projeto](https://danilo1opes.vercel.app)**

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Backend](#-backend)
- [Design](#-design)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

**danilo1opes** é um portfólio pessoal desenvolvido para apresentar minha trajetória como desenvolvedor Front-end. O projeto úne tudo que aprendi ao longo desses ultimos 2 anos:

- 💼 Projetos selecionados com páginas de detalhes individuais
- 📬 Formulário de contato funcional integrado a um backend próprio
- 🌍 Suporte a múltiplos idiomas (PT-BR / EN)
- ♿ Acessibilidade e SEO semântico aplicados em toda a estrutura
- 🎨 UI construída com shadcn/ui e Tailwind CSS v4

---

## 🚀 Tecnologias

### Core

- **[Next.js 16.1.6](https://nextjs.org/)** — Framework React com App Router e Turbopack
- **[React 19.2.3](https://react.dev/)** — Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** — Superset tipado do JavaScript

### Estilização

- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** — Framework CSS utility-first
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Merge inteligente de classes Tailwind
- **[clsx](https://github.com/lukeed/clsx)** — Utilitário para classes condicionais
- **[tw-animate-css](https://github.com/Wombosvideo/tw-animate-css)** — Animações CSS para Tailwind

### UI & Componentes

- **[shadcn/ui](https://ui.shadcn.com/)** — Componentes acessíveis e customizáveis
- **[Radix UI](https://www.radix-ui.com/)** — Primitivos de UI sem estilo
- **[Lucide React](https://lucide.dev/)** — Biblioteca de ícones
- **[Motion](https://motion.dev/)** — Animações declarativas para React

### Internacionalização

- **[next-intl 4.8.1](https://next-intl-docs.vercel.app/)** — i18n para Next.js com suporte a PT-BR e EN

### Ferramentas de Desenvolvimento

- **[ESLint 9](https://eslint.org/)** — Linter para código JavaScript/TypeScript
- **[shadcn CLI](https://ui.shadcn.com/docs/cli)** — CLI para gerenciamento de componentes shadcn

---

## ✨ Funcionalidades

### 🎨 Design & UX

- ▪️ Design responsivo (Mobile-first)
- ▪️ Animações com Motion (menu mobile, transições de página)
- ▪️ Navbar com scroll infinito de frameworks
- ▪️ Páginas individuais para cada projeto do portfólio

### 🌍 Internacionalização

- ▪️ Suporte completo a PT-BR e Inglês
- ▪️ Alternância de idioma via `LocaleSwitcher`
- ▪️ Rotas localizadas com `next-intl`

### 📬 Formulário de Contato

- ▪️ Validação de campos no front-end
- ▪️ Integração com backend próprio (Express + Resend)
- ▪️ Feedback visual de envio (loading, sucesso, erro)
- ▪️ E-mail HTML estilizado entregue via Resend

### ♿ Acessibilidade

- ▪️ Navegação por teclado completa
- ▪️ Atributos ARIA semânticos (`aria-labelledby`, `aria-label`, `aria-hidden`)
- ▪️ Estrutura semântica correta (`article`, `section`, `nav`, `header`, `footer`, `dl/dt/dd`)
- ▪️ Focus indicators visíveis

### 🔍 SEO

- ▪️ Metadados otimizados com Open Graph e Twitter Cards
- ▪️ Hierarquia de headings correta (`h1` → `h2`)
- ▪️ Imagens com `alt` descritivo
- ▪️ `<time>` e elementos semânticos para motores de busca
- ▪️ HTML5 semântico em todos os componentes

---

## 🖥️ Backend

O formulário de contato é integrado a uma API própria desenvolvida com **Node.js + Express + TypeScript**, hospedada separadamente.

### Tecnologias

- **[Express 5](https://expressjs.com/)** — Framework HTTP para Node.js
- **[Resend](https://resend.com/)** — Serviço de envio de e-mails transacionais
- **[CORS](https://github.com/expressjs/cors)** — Controle de origens permitidas
- **[dotenv](https://github.com/motdotla/dotenv)** — Gerenciamento de variáveis de ambiente
- **[TypeScript 5](https://www.typescriptlang.org/)** — Tipagem estática

### Endpoint

```
POST /enviar
```

**Body:**

```json
{
  "nome": "string",
  "email": "string",
  "mensagem": "string"
}
```

**Respostas:**
| Status | Descrição |
|--------|-----------|
| `200` | E-mail enviado com sucesso |
| `400` | Campos obrigatórios ausentes |
| `500` | Erro interno ao enviar e-mail |

---

## 🎨 Design

O design do portfólio foi criado por uma profissional incrível que tive o prazer de contratar para o projeto.

Todo o trabalho foi pensado com muito cuidado, atenção aos detalhes e uma identidade visual que realmente elevou o resultado final. A qualidade e o profissionalismo dela fizeram toda a diferença no projeto, recomendo muito seu trabalho:

- Behance: [uxariane](https://www.behance.net/uxariane)

---

## 👨‍💻 Autor

**Danilo Lopes**

- GitHub: [@danilo1opes](https://github.com/danilo1opes)
- LinkedIn: [Danilo Lopes](https://linkedin.com/in/danilo1opes)

---

## 📄 Licença

Este projeto é privado e todos os direitos são reservados.

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/danilo1opes">danilo1opes</a></p>
  <p>© 2026 danilo1opes • Todos os direitos reservados</p>
</div>
