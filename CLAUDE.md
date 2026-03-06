# Calendário Eleitoral 2026 — Guia do Desenvolvedor

> [!IMPORTANT]
> O projeto já foi totalmente desenvolvido conforme o planejamento inicial. **Não é mais necessário atualizar os arquivos `Documentations/ROADMAP.md` e `Documentations/PRD.md`**, a menos que haja uma mudança estrutural solicitada explicitamente. O foco agora deve ser em manutenção, correções e novas melhorias registradas diretamente no `CHANGELOG.md`.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão Geral

Site single-page institucional que transforma o Calendário Eleitoral das Eleições Gerais 2026 (Resolução TSE nº 23.760/2026, 296 eventos) em uma timeline interativa, com filtros, busca textual e painel de próximos prazos por perfil de usuário.

**Status:** v1.0 concluída. Pronta para deploy no Netlify.

---

## Stack

- **Framework:** React 18 com TypeScript
- **Estilização:** Tailwind CSS 3.x
- **Componentes UI:** shadcn/ui (via Radix UI primitives)
- **Ícones:** Lucide React
- **Build:** Vite 7.x
- **Deploy:** Netlify (configurado) ou Vercel
- **Dados:** JSON estático embarcado em `src/data/eventos.ts` — sem backend, sem banco
- **Bundle:** 490 kB / 123 kB gzipped

---

## Comandos

```bash
npm run dev       # Desenvolvimento local
npm run build     # Build de produção
npm run preview   # Preview do build
npx tsc --noEmit  # Type-check
```

---

## Arquitetura

### Estrutura de Pastas

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Hero com gradiente, countdown integrado, badge TSE
│   │   └── Footer.tsx          # Fonte dos dados, disclaimer jurídico, créditos Wesley Brito
│   ├── timeline/
│   │   ├── Timeline.tsx        # Container com linha vertical e MonthSections
│   │   ├── MonthSection.tsx    # Seção mensal com header sticky, contagem, lazy rendering
│   │   ├── DateMarker.tsx      # Nó circular: dia, dia da semana, marcos temporais
│   │   ├── EventCard.tsx       # Card com expand/collapse, badges, data-event-id, a11y
│   │   ├── EventDetail.tsx     # Detalhe expandido: descrição, obs., perfis, fundamentação
│   │   └── MonthNav.tsx        # Barra horizontal sticky com chips dos meses, botão Início
│   ├── filters/
│   │   ├── FilterPanel.tsx     # Sidebar desktop (w-72) + bottom sheet mobile, expand/collapse
│   │   └── FilterSummary.tsx   # Barra "Exibindo X de Y" + botão limpar filtros, aria-live
│   ├── countdown/
│   │   └── Countdown.tsx       # 4 blocos glassmorphism (dias/horas/min/seg), fade-in
│   ├── proximos-eventos/
│   │   ├── ProximosEventos.tsx # Grid CSS (1/2/3 cols), tabs de perfil + Destaques + Atos Prep.
│   │   └── EventoProximoCard.tsx # Data, título, badge categoria, badge urgência
│   └── ui/                     # Componentes shadcn/ui customizados
├── data/
│   ├── eventos.ts              # Array de 296 EventoCalendario[] (Out/2025–Abr/2028)
│   ├── categorias.ts           # 11 categorias com ID, cor hex, ícone Lucide
│   └── constants.ts            # PRIMEIRO_TURNO, SEGUNDO_TURNO, DIPLOMACAO, metadados TSE
├── hooks/
│   ├── useFilteredEvents.ts    # Filtragem combinada AND: passados + categorias + turno + busca
│   ├── useCountdown.ts         # Timer regressivo: 1T (04/10/2026) → 2T (25/10/2026) → null
│   ├── useProximosEventos.ts   # Próximos N eventos futuros filtrados por perfil
│   ├── useUrlFilters.ts        # Sincronização filtros ↔ query params da URL
│   └── useLazyRender.ts        # IntersectionObserver para lazy rendering por mês
├── lib/
│   ├── utils.ts                # cn(), formatDate, isEventoPassado, isEventoProximo,
│   │                           # getDiaSemana, getUrgenciaPrazo, agruparPorMes, agruparPorData
│   └── search.ts               # normalizeSearch (acentos, lowercase, tokenização)
├── types/
│   └── index.ts                # EventoCalendario, Fundamentacao, Categoria, CategoriaID, Perfil
├── App.tsx                     # Layout flex: sidebar FilterPanel + main (Timeline + MonthNav)
├── main.tsx
└── index.css                   # Animações: countdown-in, tab-fade, section-fade, slide-up/down
```

### Arquivos na raiz / public

```
netlify.toml                    # Headers de segurança, HSTS, CSP, cache, SPA fallback
README.md                       # Documentação completa do projeto
documentations/deploy_guide.md  # Guia de deploy Netlify vs Vercel
public/
├── og-image.png                # Imagem Open Graph 1200×630
├── robots.txt                  # Allow: / + sitemap
└── sitemap.xml                 # URL raiz, priority 1.0
```

### Tipos Centrais

```typescript
type Perfil = "eleitor" | "candidato" | "partido" | "advogado" | "atos-preparatorios";
// NUNCA usar 'servidor' — servidores veem todos os eventos sem filtro
// 'atos-preparatorios' é usado apenas como filtro em ProximosEventos (filtra ADM), não é atribuído a eventos

type CategoriaID =
  | "ELE"
  | "REG"
  | "PRO"
  | "FIN"
  | "ADM"
  | "FIS"
  | "CON"
  | "VOT"
  | "PES"
  | "DIP"
  | "PAR";

interface EventoCalendario {
  id: string; // "YYYY-MM-DD-N"
  data: string; // ISO "YYYY-MM-DD"
  diaSemana: string;
  titulo: string; // max 120 chars — resumo
  descricao: string; // transcrição LITERAL da Resolução
  categorias: CategoriaID[];
  perfis: Perfil[]; // [] = relevante para todos (visão geral)
  marcos: string | null; // Ex: "1 ano antes do 1º turno"
  turno: "1T" | "2T" | "AMBOS" | null;
  fundamentacao: Fundamentacao[];
  observacoes?: string;
  destaque?: boolean;
}
```

### Fonte de Dados

Todos os eventos vêm **exclusivamente** do `RESOLUÇÃO.md` (Resolução TSE nº 23.760/2026). As URLs de legislação (`fundamentacao[].url`) permanecem como `""` — Sprint 7C foi descartada por decisão do usuário (citação dos dispositivos legais nos cards é suficiente).

---

## Estado de Implementação

| Sprint       | Descrição                                               | Status         |
| ------------ | ------------------------------------------------------- | -------------- |
| Sprint 0     | Fundação (Vite + React + TS + Tailwind + shadcn/ui)     | ✅ Concluída   |
| Sprint 1A    | Dados: estrutura + Out/2025 a Jun/2026 (34 eventos)     | ✅ Concluída   |
| Sprint 1B    | Dados: Jul–Ago/2026 (93 novos eventos, total 127)       | ✅ Concluída   |
| Sprint 1C    | Dados: Set/2026–Abr/2028 (169 novos, total **296**)     | ✅ Concluída   |
| Sprint 2A/2B | Timeline: MonthSection, DateMarker, EventCard, MonthNav | ✅ Concluída   |
| Sprint 3A/3B | Cards: expand/collapse, EventDetail, estilos visuais    | ✅ Concluída   |
| Sprint 4A/4B | Filtros: hooks, FilterPanel, FilterSummary, URL sync    | ✅ Concluída   |
| Sprint 5A/5B | Header/Hero, Countdown, ProximosPrazos, Footer          | ✅ Concluída   |
| Ajustes      | PAR, perfis expandidos, MonthNav, expand/collapse        | ✅ Concluída   |
| Sprint 6A    | Responsividade (320px–1440px)                           | ✅ Concluída   |
| Sprint 6B    | Acessibilidade (ARIA, teclado, contraste, reduced-motion) | ✅ Concluída |
| Sprint 7A    | Polish e Performance (lazy rendering, microinterações)  | ✅ Concluída   |
| Sprint 7B    | SEO e Meta (OG, Twitter Cards, sitemap, robots)         | ✅ Concluída   |
| Sprint 7C    | Coleta de URLs de Legislação                            | ❌ Descartada  |
| Sprint 7D    | Segurança, Deploy e Docs (netlify.toml, README)         | ✅ Concluída   |

---

## Funcionalidades Implementadas

### Timeline Interativa
- 296 eventos organizados cronologicamente (Out/2025–Abr/2028)
- Agrupamento por mês com headers sticky e contagem
- Lazy rendering por mês via IntersectionObserver (500px antecipação)
- Navegação por meses via MonthNav com scroll-snap e flash visual
- Botão flutuante "Início" para retorno ao topo

### Cards de Eventos
- Expand/collapse (modo múltiplos abertos)
- Descrição completa, observações, perfis relevantes, fundamentação legal
- Chips de fundamentação como texto (URLs vazias)
- Estilos diferenciados: destaque (borda + badge Star), passados (opacity-60), próximos (badge âmbar), hoje (badge pulsante)

### Filtros
- Sidebar fixa em desktop / bottom sheet em mobile
- Toggle "Ocultar passados", chips de categorias (OR), turno, busca textual (debounce 300ms)
- Sincronização filtros ↔ URL query params
- Barra "Exibindo X de Y eventos" + "Limpar filtros"
- FilterPanel com expand/collapse

### Próximos Eventos
- Grid CSS responsivo (1/2/3 cols)
- Tabs: Destaques (padrão) | Todos | Eleitor | Candidato | Partido | Advogado | Atos Preparatórios
- Badge de urgência: "Hoje" / "Esta semana" / "Em X dias"
- Click → scroll suave + expand do evento na timeline
- Tab persistido em localStorage
- Expand/collapse do painel

### Header e Countdown
- Gradiente institucional primary-900→700, badge TSE
- Contagem regressiva: 1T → 2T → "Eleições realizadas"
- Glassmorphism nos blocos, fade-in ao carregar

### Acessibilidade (WCAG AA)
- Navegação por teclado (Tab, Enter, Escape, setas ←→ nas tabs)
- ARIA: `aria-expanded`, `aria-label`, `aria-live="polite"`, `role="region"`, `role="dialog"`, `aria-modal`, roving tabindex
- `prefers-reduced-motion: reduce`
- Touch targets 44×44px
- Contraste mínimo 4.5:1

### SEO e Segurança
- Meta tags completas: title, description, OG, Twitter Card, canonical, theme-color
- Imagem OG 1200×630
- robots.txt + sitemap.xml
- Headers de segurança: X-Frame-Options, X-Content-Type-Options, HSTS, CSP, Permissions-Policy
- SPA fallback e redirect HTTP→HTTPS

---

## Regras de Desenvolvimento

1. **Dados:** NUNCA inventar eventos. NUNCA omitir eventos. Transcrever `descricao` literalmente da Resolução.
2. **Stack:** Não instalar bibliotecas além das previstas sem justificativa explícita.
3. **Perfis:** `'servidor'` é proibido no array `perfis[]`. `'atos-preparatorios'` é filtro em ProximosPrazos, não é atribuído a eventos.
4. **URLs de legislação:** Campo `url` em `fundamentacao[]` permanece `""` (Sprint 7C descartada).
5. **Mobile-first:** Todo componente deve funcionar em 375px antes de ser expandido para desktop.
6. **Paleta de cores:** Seguir rigorosamente o PRD. Proibido: degradês lilás/roxo, cores partidárias.

---

## Pendências para Deploy

> Antes do deploy definitivo, atualizar a URL base nos campos: `og:url`, `og:image`, `twitter:image`, `<link rel="canonical">` e `sitemap.xml` com o domínio/subdomínio real.

---

## Referências

- `Documentations/PRD.md` — Requisitos completos do produto
- `Documentations/ROADMAP.md` — Sprints de desenvolvimento com checkpoints
- `Documentations/RESOLUÇÃO.md` — Fonte primária dos 296 eventos do calendário eleitoral
- `Documentations/CHANGELOG.md` — Histórico detalhado de cada sprint concluída
- `README.md` — Documentação do projeto (setup, stack, estrutura, guia de edição)
- `documentations/deploy_guide.md` — Guia de deploy Netlify vs Vercel
