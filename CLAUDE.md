# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> [!IMPORTANT]
> O projeto está em fase de manutenção e novas melhorias. **Não é mais necessário atualizar os arquivos `Documentations/ROADMAP.md` e `Documentations/PRD.md`**, a menos que haja uma mudança estrutural solicitada explicitamente. Registrar mudanças diretamente no `Documentations/CHANGELOG.md`.

## Visão Geral

Site single-page institucional que transforma o Calendário Eleitoral das Eleições Gerais 2026 (Resolução TSE nº 23.760/2026, 296 eventos) em uma timeline interativa, com filtros, busca textual, painel de próximos prazos por perfil e exportação para calendário (.ics).

## Stack

- **Framework:** React 18 com TypeScript
- **Estilização:** Tailwind CSS 3.x
- **Componentes UI:** shadcn/ui (via Radix UI primitives)
- **Ícones:** Lucide React
- **Build:** Vite 7.x
- **Deploy:** Netlify
- **Dados:** JSON estático embarcado em `src/data/eventos.ts` — sem backend, sem banco

---

## Comandos

```bash
npm run dev       # Desenvolvimento local
npm run build     # Build de produção
npm run preview   # Preview do build
npx tsc --noEmit  # Type-check sem emitir arquivos
```

---

## Arquitetura

### Estrutura de Pastas

```
src/
├── components/
│   ├── calendar/
│   │   └── CalendarExportPanel.tsx  # Exportação individual (.ics) — aparece no EventDetail expandido
│   ├── layout/
│   │   ├── Header.tsx               # Hero com gradiente, countdown integrado, badge TSE
│   │   └── Footer.tsx               # Fonte dos dados, disclaimer jurídico, créditos
│   ├── timeline/
│   │   ├── Timeline.tsx             # Container com linha vertical e MonthSections
│   │   ├── MonthSection.tsx         # Seção mensal com header sticky, contagem, lazy rendering
│   │   ├── DateMarker.tsx           # Nó circular: dia, dia da semana, marcos temporais
│   │   ├── EventCard.tsx            # Card com expand/collapse, badges, data-event-id, a11y
│   │   ├── EventDetail.tsx          # Detalhe expandido: descrição, obs., perfis, fundamentação, export
│   │   └── MonthNav.tsx             # Barra horizontal sticky com chips dos meses, botão Início
│   ├── filters/
│   │   ├── FilterPanel.tsx          # FAB fixo (bottom-left) → abre bottom sheet (mobile) ou drawer direito (desktop lg+)
│   │   ├── FilterSummary.tsx        # Barra "Exibindo X de Y" + botão limpar filtros, aria-live
│   │   └── BatchCalendarExport.tsx  # Exportação em lote (.ics) — integrado ao FilterSummary
│   ├── countdown/
│   │   └── Countdown.tsx            # 4 blocos glassmorphism (dias/horas/min/seg), fade-in
│   ├── proximos-eventos/
│   │   ├── ProximosEventos.tsx      # Grid CSS (1/2/3 cols), tabs de perfil + Destaques + Atos Prep.
│   │   └── EventoProximoCard.tsx    # Data, título, badge categoria, badge urgência
│   └── ui/
│       ├── Tooltip.tsx              # Tooltip CSS customizado; props: content, position ("top"|"bottom"), wrap (quebra linha, max-w-[200px])
│       └── InfoTooltip.tsx          # Ícone de info com tooltip explicativo (usado nos exports)
├── data/
│   ├── eventos.ts                   # Array de 296 EventoCalendario[] (Out/2025–Abr/2028)
│   ├── categorias.ts                # 11 categorias com ID, cor hex, ícone Lucide
│   └── constants.ts                 # PRIMEIRO_TURNO, SEGUNDO_TURNO, DIPLOMACAO, metadados TSE
├── contexts/
│   └── FavoritosContext.tsx         # Context + useFavoritosContext() — consome useFavoritos, provido no App.tsx
├── hooks/
│   ├── useFilteredEvents.ts         # Filtragem combinada AND: passados + categorias + turno + busca + apenasFavoritos
│   ├── useFavoritos.ts              # Estado de favoritos persistido em localStorage ("calendario-eleitoral-favoritos")
│   ├── useCountdown.ts              # Timer regressivo: 1T (04/10/2026) → 2T (25/10/2026) → null
│   ├── useProximosEventos.ts        # Próximos N eventos futuros filtrados por perfil
│   ├── useUrlFilters.ts             # Sincronização filtros ↔ query params da URL
│   └── useLazyRender.ts             # IntersectionObserver para lazy rendering por mês
├── lib/
│   ├── ics.ts                       # Geração e download de arquivos .ics (RFC 5545)
│   ├── utils.ts                     # cn(), formatDate, isEventoPassado, isEventoProximo,
│   │                                # getDiaSemana, getUrgenciaPrazo, agruparPorMes, agruparPorData
│   └── search.ts                    # normalizeSearch (acentos, lowercase, tokenização)
├── types/
│   ├── index.ts                     # EventoCalendario, Fundamentacao, Categoria, CategoriaID, Perfil
│   └── calendar.ts                  # CalendarReminder, calendarReminderOptions
├── App.tsx                          # Layout flex: sidebar FilterPanel + main (Timeline + MonthNav)
├── main.tsx
└── index.css                        # Animações: countdown-in, tab-fade, section-fade, slide-up/down
```

### Arquivos na raiz / public

```
netlify.toml                    # Headers de segurança, HSTS, CSP, cache, SPA fallback
documentations/deploy_guide.md  # Guia de deploy Netlify vs Vercel
public/
├── og-image.png                # Imagem Open Graph 1200×630
├── robots.txt
└── sitemap.xml
```

### Tipos Centrais

```typescript
type Perfil = "eleitor" | "candidato" | "partido" | "advogado" | "atos-preparatorios";
// NUNCA usar 'servidor' — servidores veem todos os eventos sem filtro
// 'atos-preparatorios' é filtro em ProximosEventos (filtra ADM), não é atribuído a eventos
// 'destaques' é um pseudo-filtro de UI baseado em destaque: true, não é valor do tipo Perfil

type CategoriaID =
  | "ELE" | "REG" | "PRO" | "FIN" | "ADM" | "FIS"
  | "CON" | "VOT" | "PES" | "DIP" | "PAR";

// FilterState (src/hooks/useFilteredEvents.ts)
interface FilterState {
  ocultarPassados: boolean;
  categorias: CategoriaID[];
  turno: "1T" | "2T" | "POS" | null;
  busca: string;
  mes: string | null;          // chave "YYYY-MM"
  apenasFavoritos: boolean;    // requer useFavoritosContext()
}

interface EventoCalendario {
  id: string;           // "YYYY-MM-DD-N"
  data: string;         // ISO "YYYY-MM-DD"
  diaSemana: string;
  titulo: string;       // max 120 chars — resumo
  descricao: string;    // transcrição LITERAL da Resolução
  categorias: CategoriaID[];
  perfis: Perfil[];     // [] = relevante para todos (visão geral)
  marcos: string | null;
  turno: "1T" | "2T" | "AMBOS" | "POS" | null;  // POS = pós-eleições
  fundamentacao: Fundamentacao[];
  observacoes?: string;
  destaque?: boolean;
}
```

### Exportação para Calendário (.ics)

Lógica em `src/lib/ics.ts`. **Regra:** `BatchCalendarExport` não é renderizado quando o único filtro ativo é "Ocultar eventos passados" (sem categorias, turno ou busca).

### Fonte de Dados

Todos os eventos vêm **exclusivamente** do `Documentations/RESOLUÇÃO.md` (Resolução TSE nº 23.760/2026). O campo `fundamentacao[].url` permanece `""` — coleta de URLs foi descartada.

---

## Regras de Desenvolvimento

1. **Dados:** NUNCA inventar eventos. Transcrever `descricao` literalmente da Resolução.
2. **Stack:** Não instalar bibliotecas além das previstas sem justificativa explícita.
3. **Perfis:** `'servidor'` é proibido em `perfis[]`. `'atos-preparatorios'` é filtro, não é atribuído a eventos.
4. **URLs de legislação:** Campo `url` em `fundamentacao[]` permanece `""`.
5. **Mobile-first:** Todo componente deve funcionar em 375px antes de ser expandido para desktop.
6. **Paleta de cores:** Seguir rigorosamente o PRD (`tailwind.config.js`). Proibido: degradês lilás/roxo, cores partidárias.
7. **Segurança:** Ao encontrar vulnerabilidade, sinalizar com `// AVISO DE SEGURANÇA:` e sugerir alternativa segura.

---

## Referências

- `Documentations/RESOLUÇÃO.md` — Fonte primária dos 296 eventos
- `Documentations/CHANGELOG.md` — Histórico detalhado de cada sprint
- `Documentations/PRD.md` — Requisitos completos do produto
- `documentations/deploy_guide.md` — Guia de deploy Netlify vs Vercel
