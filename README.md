# Moraes Luz Advocacia — Landing Page

Site institucional do escritório **Moraes Luz Advocacia & Assessoria Jurídica**, de Goiânia (GO).

🔗 **No ar:** [moraesluzadvocacia.netlify.app](https://moraesluzadv.com)

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 6](https://vitejs.dev) (build e servidor de desenvolvimento)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) (animações) e [Lucide](https://lucide.dev) (ícones)
- Hospedagem: [Netlify](https://www.netlify.com)

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install      # instala as dependências
npm run dev      # abre em http://localhost:3000
```

Outros comandos:

| Comando           | O que faz                                   |
| ----------------- | ------------------------------------------- |
| `npm run build`   | Gera a versão de produção na pasta `dist/`  |
| `npm run preview` | Serve a pasta `dist/` para conferir o build |
| `npm run lint`    | Checagem de tipos com o TypeScript          |

## Estrutura

```
├── index.html               # HTML base, título e meta tags (SEO / redes sociais)
├── public/                  # Imagens servidas como estão (logo, fotos)
└── src/
    ├── App.tsx              # Monta a página na ordem das seções
    ├── index.css            # Tailwind, fontes e cores da marca
    ├── constants/data.ts    # ✏️ Textos e links editáveis
    └── components/
        ├── sections/        # Header, Hero, About, AreasDeAtuacao,
        │                    # Diferenciais, Depoimentos, Contato, Footer
        └── ui/              # Componentes reutilizáveis (Logo, cards, itens de menu)
```

## Editando o conteúdo

A maior parte do conteúdo fica em **`src/constants/data.ts`**:

- `LINKS`: WhatsApp, Instagram, e-mail e Google Maps
- `SERVICOS`: áreas de atuação
- `DIFERENCIAIS`: seção "Por que escolher"
- `DEPOIMENTOS`: depoimentos de clientes
- `VALORES`: valores do escritório

As cores da marca estão definidas em `src/index.css`:

| Token      | Cor       | Uso                          |
| ---------- | --------- | ---------------------------- |
| `petroleum`| `#1a4a45` | Fundo principal e títulos    |
| `nude`     | `#c9a96e` | Destaques e botões           |
| `nude-dark`| `#b08f55` | Hover dos botões             |

Fontes: **Playfair Display** (títulos) e **Inter** (texto).

## Deploy

Os arquivos gerados pelo `npm run build` (pasta `dist/`) são publicados no Netlify.
Configuração recomendada, com o repositório conectado ao Netlify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Autoria

Desenvolvido por **Miguel Luz** ([@mgluz1](https://github.com/mgluz1)).
Conteúdo e marca © Moraes Luz Advocacia & Assessoria Jurídica. Todos os direitos reservados.
