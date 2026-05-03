
# Fantom Web

[![CI](https://github.com/Fantom-Labs/Fantom-Web/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/Fantom-Labs/Fantom-Web/actions/workflows/ci.yml)

Landing page institucional da Fantom, focada em apresentar serviços digitais, cases e prova social, com visual moderno e alta performance.
Veja em: https://fantomweb.com.br

## Desenvolvimento local

Requisitos: **Node.js 20+** e **npm**.

```bash
npm ci
npm run dev
```

O app sobe em `http://localhost:5173` (porta padrão do Vite).

## Build e verificação

```bash
npm run lint
npm run build
```

Saída de produção em `dist/`. Pré-visualização local: `npm run preview`.

## Visão Geral

O projeto é uma SPA construída com React + Vite + TypeScript, com foco em:
- Experiência visual forte (background animado com WebGL/Three.js).
- Seções comerciais de conversão (benefícios, cases, depoimentos e CTA).
- Layout responsivo para desktop e mobile.
- Componentização com `shadcn/ui`, Tailwind CSS e Radix UI.

## Stack Tecnológica

- **Frontend:** React 18, TypeScript, React Router DOM
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS, `tailwindcss-animate`
- **UI:** shadcn/ui + Radix UI
- **Animações:** GSAP, Framer Motion
- **Gráficos/3D:** Three.js + React Three Fiber + Drei
- **Utilitários:** TanStack Query, React Hook Form, Zod

## Estrutura do Projeto

```bash
.
├── public/
│   ├── Icons/
│   └── navbar2/
├── src/
│   ├── components/
│   │   ├── blocks/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json
├── tailwind.config.ts
├── vite.config.ts
└── package.json
