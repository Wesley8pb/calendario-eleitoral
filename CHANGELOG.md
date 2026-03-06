# CHANGELOG — Calendário Eleitoral Interativo 2026

> Produto: Calendário Eleitoral 2026 — Timeline Interativa
> Base normativa: Resolução TSE nº 23.760/2026
> Metodologia: Sprints sequenciais conforme ROADMAP.md

---

## [Unreleased] — Em desenvolvimento

> **Nota:** Sprint 7D concluída em 06/03/2026. **v1.0 pronta para deploy no Netlify.**

### Sprint 7C — Coleta de URLs de Legislação ❌ Descartada

> Decisão do usuário: a citação dos dispositivos legais nos cards já é suficiente. Sprint cancelada.

---

### Sprint 7D — Segurança, Deploy e Documentação ✅

- **7D.1** `netlify.toml` criado com headers de segurança completos:
  - `X-Frame-Options: DENY` (anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (anti-MIME sniffing)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (restringe Google Fonts, scripts e imagens)
  - `Strict-Transport-Security` (HSTS 1 ano + preload)
  - `Permissions-Policy` (camera/mic/geo desabilitados)
  - Cache `immutable` para `/assets/*` (hash-based)
- **7D.2** Redirect HTTP → HTTPS no `netlify.toml`
- **7D.3** SPA fallback redirect (`/* → /index.html 200`) para roteamento client-side
- **7D.4** Build de produção verificado: ✅ zero erros, **123 kB gzipped** (490 kB raw)
- **7D.5–7D.7** Deploy Netlify + domínio: ⏳ aguardando ação manual do responsável
- **7D.8** `README.md` criado com: descrição do projeto, setup local, stack, estrutura de pastas, guia de edição de eventos, critérios de perfis[], paleta de cores, segurança e disclaimer
- **7D.9** CHANGELOG atualizado com histórico completo de todos os sprints
- **7D.10** `documentations/deploy_guide.md` criado com comparativo Vercel vs Netlify, instruções de apontamento de domínio e segurança.

#### Arquivos criados
- `netlify.toml`
- `README.md`
- `documentations/deploy_guide.md`

> ⚠️ **Antes do deploy definitivo:** atualizar a URL base (`canonical`, `og:url`, `og:image`, `twitter:image`, `sitemap.xml`) com o domínio/subdomínio real.

---



### Sprint 7B — SEO e Meta ✅

- **7B.1** `<title>`: "Calendário Eleitoral 2026 — Resolução TSE nº 23.760"
- **7B.2** `<meta name="description">`: texto descritivo com palavras-chave relevantes e referência à Resolução
- **7B.3** Open Graph completo: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (1200×630), `og:image:alt`, `og:locale` (pt_BR)
- **7B.4** Twitter Card: `summary_large_image`, title, description, image, alt
- **7B.5** Imagem OG gerada (`public/og-image.png`): fundo gradiente azul institucional, título em branco, badge "Justiça Eleitoral", padrão de pontos sutil
- **7B.6** `<link rel="canonical">` apontando para URL de produção (⚠️ atualizar após deploy definitivo)
- **7B.7** `public/robots.txt`: `Allow: /` + referência ao sitemap; `public/sitemap.xml`: URL raiz com `priority=1.0` e `changefreq=monthly`
- Adicionado `<meta name="theme-color" content="#003E7E">`: barra do navegador fica azul TSE em dispositivos mobile

#### Arquivos criados
- `public/og-image.png`
- `public/robots.txt`
- `public/sitemap.xml`

#### Arquivos modificados
- `index.html` (reescrito com todas as meta tags)

> ⚠️ **Ação necessária antes do deploy:** Atualizar a URL de produção nos campos `og:url`, `og:image`, `twitter:image`, `<link rel="canonical">` e `sitemap.xml` quando o domínio/subdomínio definitivo for definido.



### Sprint 7A — Polish e Performance ✅

#### Microinterações
- **7A.1** Hover nos cards: `hover:shadow-card-hover` e `hover:border-primary-200` já presentes desde Sprint 3 ✅
- **7A.2** Transição nos chips de categoria: `transition-all duration-150` já presente no `FilterPanel` ✅
- **7A.3** Scroll suave global: `scroll-behavior: smooth` já no `index.css` ✅
- **7A.4** Flash ao clicar em mês no **MonthNav**: estado `flashedMonth` com `setTimeout(400ms)`; `active:scale-95` + `brightness-110` transitório
- **7A.5** Fade-in do **Countdown**: animação `countdown-in` (translateY + scale, 0.6s) ao carregar pela primeira vez
- **7A.6** Fade ao trocar tab de perfil: `key={perfilAtivo}` no grid de cards = React re-monta com animação `tab-fade` (0.2s)

#### Performance
- **7A.7** Lazy rendering por mês: criado hook `useLazyRender.ts` (IntersectionObserver com 500px de antecipação); `MonthSection` renderiza placeholder com altura estimada até o mês entrar na viewport — evita renderizar todos os 296 cards simultaneamente
- **7A.8** Bundle verificado: **490 kB / 123 kB gzipped** — acima do alvo de 300 kB (meta era sem dados); o peso é dominado pelo arquivo `eventos.ts` (296 eventos com textos completos da Resolução). Para um projeto 100% estático, 123 kB gzipped é aceitável ✅
- **7A.9** Imports do Lucide: todos via named imports (`import { X } from "lucide-react"`) — tree-shaking ativo ✅
- **7A.10** Re-renders: `useMemo` em `useFilteredEvents`, `useProximosPrazos` e hooks de agrupamento; `useCallback` em `MonthNav`, `ProximosPrazos` ✅

#### Arquivos criados
- `src/hooks/useLazyRender.ts`

#### Arquivos modificados
- `src/index.css` (animações `countdown-in`, `tab-fade`, `section-fade`)
- `src/components/countdown/Countdown.tsx` (`animate-countdown-in`)
- `src/components/timeline/MonthSection.tsx` (lazy rendering via `useLazyRender`)
- `src/components/timeline/MonthNav.tsx` (`flashedMonth` state, `active:scale-95`)
- `src/components/proximos-prazos/ProximosPrazos.tsx` (`key={perfilAtivo}` no grid, `animate-tab-fade`)



### Sprint 6B — Acessibilidade ✅

- **`FilterSummary.tsx`:** `aria-live="polite"` + `aria-atomic="true"` no contador de eventos filtrados; `aria-label` descritivo no botão "Limpar filtros"; `min-h-[44px]` no botão
- **`MonthSection.tsx`:** `role="region"` + `aria-label={label}` em cada seção de mês — leitores de tela anunciam "Outubro / 2026", "Novembro / 2026" etc. ao navegar por landmarks
- **`FilterPanel.tsx`:** `useEffect` + listener de `Escape` para fechar o bottom sheet de filtros; `role="dialog"`, `aria-modal="true"`, `aria-labelledby="filter-sheet-title"` no painel; `id="filter-sheet-title"` no título
- **`EventCard.tsx`:** `useEffect` + listener de `Escape` para fechar cards expandidos; `aria-label` dinâmico no botão ("Abrir detalhes: [título]" / "Fechar detalhes: [título]"); `useEffect` importado
- **`ProximosPrazos.tsx`:** Navegação por teclado (setas ←→, Home, End) entre as tabs de perfil via **roving tabindex** (apenas a tab ativa tem `tabIndex=0`, demais têm `tabIndex=-1`); `tabRefs` e `handleTabKeyDown` conectados a cada botão; `id="tab-{value}"` em cada tab

#### Itens já cobertos anteriormente
- **`prefers-reduced-motion`:** Implementado no `index.css` desde a configuração inicial
- **`role="tablist"` / `aria-selected`:** Já presentes nas sprints anteriores
- **Touch 44×44px:** Coberto na Sprint 6A



### Sessão 06/03/2026 — Ajustes visuais e Sprint 6A (Responsividade)

#### Ajustes de UI (pré-sprint)
- Tooltip explicativo dos perfis adicionado ao título "Próximos Prazos" com ícone `Info`
- Título "Calendário Interativo" inserido acima da timeline em `App.tsx` com ícone e subtítulo
- Botão de colapsar/expandir da seção "Próximos Prazos" redesenhado (mais visível, cor primária + texto)
- Botão flutuante "Início" adicionado ao `MonthNav` para retorno ao topo
- Rodapé atualizado: "Desenvolvido por Wesley Brito — servidor da 56ª Zona Eleitoral/PB"
- **MonthNav:** Adicionado título "Acesso Mensal" com ícone à esquerda e altura aumentada para melhor visibilidade e instrução.

#### Sprint 6A — Responsividade ✅
- **`index.css`:** Adicionadas utilidades `.touch-target` (44px mínimo), `.pb-safe` (env safe-area-inset), animações `slide-up` e `slide-down` consolidadas em CSS puro
- **`App.tsx`:** `overflow-x-hidden` no root para evitar scroll horizontal em 320px; padding reduzido `px-3 sm:px-4` e espaçamento `py-6 sm:py-8`
- **`FilterPanel.tsx`:** FAB movido para a **esquerda** (`left-6`) para não colidir com o botão "Início" (direita); `pb-safe` no bottom sheet (seguro para notch/iPhone); `min-h-[44px]` no FAB
- **`MonthNav.tsx`:** Botão flutuante com `min-h-[44px]` e padding assimétrico adequado
- **`ProximosPrazos.tsx`:** Tabs com `min-h-[44px]`; `aria-label` no tablist; `pb-1` para evitar corte do scroll horizontal
- **`EventCard.tsx`:** `break-words` no título; `min-h-[44px]` no botão de expandir
- **`EventDetail.tsx`:** `break-words` na descrição para evitar overflow em 320px com textos legais longos



### Sessão 06/03/2026 — Revisão de dados, categorias e ajustes visuais

#### Nova categoria: Atos Partidários (PAR)
- Adicionado `CategoriaID "PAR"` em `types/index.ts` e `categorias.ts` (cor: `#5B21B6`, ícone: `Flag`)
- 11 eventos reclassificados de REG/ADM/PRO → `["PAR"]` (atos exclusivos de partido: convenções, fiscais, atas)
- 15 eventos receberam PAR como tag adicional (REG+PAR, FIN+PAR, ADM+FIS+PAR)

#### Perfil Advogado — Expansão (62 novos eventos)
- Adicionado `"advogado"` em 62 eventos cobrindo: registro de candidaturas (15), propaganda eleitoral (22), prestação de contas e financiamento (21), fiscalização e vedações (4)
- Total de eventos com perfil advogado: de 14 → **76**

#### Perfil Eleitor — Revisão (18 adições + 1 remoção)
- Adicionado `"eleitor"` em 18 eventos: comunicados TSE (4), voto em trânsito (4), propaganda eleitoral (5), pesquisas (2), biometria e segurança (3)
- Removido `"eleitor"` de `2027-03-03-1` (edital de cancelamento — ato administrativo puro)
- Total de eventos com perfil eleitor: de 33 → **50**

#### Perfil Atos Preparatórios — Implementação
- Adicionado `"atos-preparatorios"` ao tipo `Perfil`
- Nova aba "Atos Preparatórios" no componente ProximosPrazos (filtra eventos com categoria `ADM`)

#### Reclassificações pontuais de categorias
- `2026-04-01-1` e mais 5 eventos de propaganda institucional/comunicados TSE: `PRO/ADM` → `["ELE", "ADM"]`
- `2026-06-05-1` (devedores de multa): removido `FIN`, mantido apenas `ADM`
- `2026-06-30-1` (vedação a programas de pré-candidato): `PRO` → `CON`, perfis `["candidato", "partido"]`

#### Componentes de UI — Expandir/Colapsar
- **ProximosPrazos:** botão expand/collapse com `ChevronUp`/`ChevronDown`, padrão expandido, tooltip no hover
- **FilterPanel (desktop):** botão expand/collapse na sidebar, padrão expandido, tooltip no hover

#### MonthNav — Aumento de área e transição visual
- Chips maiores: `px-4 py-2 text-sm` (antes: `px-3 py-1.5 text-xs`)
- Linha decorativa azul `border-t-[3px] border-t-primary-700` no topo
- Sombra reforçada `shadow-md` + borda inferior mais definida
- FilterSummary: fundo ajustado para `primary-50` com `shadow-sm` para melhor transição

#### Outros ajustes
- URL da Resolução TSE atualizada para o PDF oficial do TSE em `constants.ts`
- Rodapé: adicionado "Desenvolvido por Wesley Brito — 56ª Zona Eleitoral"

### Hotfixes de UI (sessão anterior)

- **FilterPanel:**
  - Filtro por mês movido para o topo, logo abaixo do campo de busca textual.
  - Ajuste de padding inferior (`pb-12`) no mobile bottom sheet para evitar que o último filtro (Turno) fique inacessível ou oculto por barras de navegação do sistema.
  - Adicionado `max-h` e `overflow-y-auto` na sidebar do desktop para manter os filtros acessíveis em monitores/telas de notebook com pouca altura.
- **ProximosPrazos:**
  - Redesign completo: substituído carrossel horizontal por display em CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
  - Limite de cards aumentado de 4 para 6.
  - Cards agora expandem verticalmente preenchendo o grid, mantendo a tag da categoria ancorada na base.
  - Adicionada aba **"Destaques"** (agora a aba padrão inicial), exibindo apenas eventos marcados como `destaque: true` com um visual exclusivo na lista de abas.
- **MonthNav:** Scrollbar horizontal invisível agora visível via `pb-3`/`scroll-snap`.

---

## Sprint 5A/5B — Header/Hero, Countdown, Próximos Prazos e Footer

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **5A.1** `Header.tsx` — gradiente `primary-900→primary-700`, badge TSE, título com "Eleições 2026" em dourado, link para resolução
- **5A.2** Hook `useCountdown.ts` — contagem regressiva com transição 1T→2T→null, atualiza a cada 1s
- **5A.3** `Countdown.tsx` — 4 blocos glassmorphism (dias/horas/min/seg), rótulo dinâmico, estado "realizada"
- **5A.4** Countdown integrado no Header/Hero
- **5A.5** Descrição breve no Hero: "Todos os prazos e datas..."
- **5B.1** `ProximosPrazos.tsx` — container entre Hero e MonthNav, fundo branco
- **5B.2** Tabs de perfil inline (Todos/Eleitor/Candidato/Partido/Advogado) com estilo chips
- **5B.3** `PrazoCard.tsx` — data, título (line-clamp-2), badge categoria, badge urgência (Hoje/Esta semana/Em X dias)
- **5B.4** Integração com `useProximosPrazos` (perfil ativo, qty=5)
- **5B.5** Scroll horizontal com snap em mobile, inline em desktop
- **5B.6** Click no PrazoCard → scroll suave + expand do card na timeline via `data-event-id`
- **5B.7** Tab de perfil persistido em `localStorage` (key: `cal-eleitoral-perfil-tab`)
- **5B.8** Mensagem "Nenhum prazo próximo para este perfil." como fallback
- **5B.9** `Footer.tsx` — fonte dos dados, link resolução, disclaimer jurídico, créditos
- **5B.10/5B.11** Z-index e sticky coerentes: Header(estático) → ProximosPrazos → MonthNav(sticky z-30) → FilterSummary → Timeline

### Arquivos criados

- `src/hooks/useCountdown.ts`
- `src/components/countdown/Countdown.tsx`
- `src/components/proximos-prazos/PrazoCard.tsx`

### Arquivos modificados

- `src/components/layout/Header.tsx` (reescrito completo)
- `src/components/layout/Footer.tsx` (reescrito completo)
- `src/components/proximos-prazos/ProximosPrazos.tsx` (reescrito completo)
- `src/components/timeline/EventCard.tsx` (adicionado `data-event-id`)

---

## Sprint 4A/4B — Filtros: Lógica, Hooks, UI e Integração

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **4A.1** Hook `useFilteredEvents.ts` — filtragem combinada com `useMemo`
- **4A.2** Filtro "Ocultar passados" — remove eventos com `data < hoje`
- **4A.3** Filtro de categorias — lógica OR (evento com pelo menos uma categoria selecionada)
- **4A.4** Filtro de turno — "Todos" / "1º Turno" / "2º Turno"
- **4A.5** Filtro de busca textual — busca em título + descrição + fundamentação
- **4A.6** Função `normalizeSearch` em `src/lib/search.ts` — remove acentos, lowercase, tokeniza
- **4A.7** Lógica combinada: `passados AND categorias AND turno AND busca`
- **4A.8** Meses sem eventos após filtragem são automaticamente ocultados (via Timeline)
- **4A.9** Hook `useProximosPrazos.ts` — próximos N eventos futuros filtrados por perfil
- **4B.1** `FilterPanel.tsx` — sidebar fixa em desktop (w-72), bottom sheet em mobile
- **4B.2** Toggle "Ocultar passados" — switch custom com transição
- **4B.3** Chips de categorias — multi-select coloridos com cores do PRD
- **4B.4** Input de busca textual — debounce 300ms, botão limpar
- **4B.5** Botões de turno — "Todos" / "1º Turno" / "2º Turno"
- **4B.6** `FilterSummary.tsx` — barra "Exibindo X de Y eventos" + "Limpar filtros"
- **4B.7** Botão "Limpar filtros" restaura estado padrão
- **4B.8** Hook `useUrlFilters.ts` — sincroniza filtros ↔ query params (`?cat=ELE&turno=1T&q=...`)
- **4B.9** _(Adiado para sprint de polish)_ Highlight de termos de busca nos cards

### Arquivos criados

- `src/lib/search.ts`
- `src/hooks/useFilteredEvents.ts`
- `src/hooks/useProximosPrazos.ts`
- `src/hooks/useUrlFilters.ts`
- `src/components/filters/FilterPanel.tsx`
- `src/components/filters/FilterSummary.tsx`

### Arquivos modificados

- `src/App.tsx` (layout flex com sidebar + integração dos filtros)
- `tailwind.config.js` (animação `slide-up` para bottom sheet)

---

## Sprint 3A/3B — Cards: Expand/Collapse, Legislação e Estilos Visuais

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **3A.1** Expand/collapse no `EventCard.tsx` com `useState` (modo múltiplos abertos)
- **3A.2** Componente `EventDetail.tsx` — descrição completa, observações, perfis relevantes
- **3A.3** Renderização do campo `descricao` com formatação adequada (`whitespace-pre-line`)
- **3A.4** Ícone chevron com rotação 0°→180° via `transition-transform duration-300`
- **3A.5** Animação slide-down com `max-h` + `opacity` + `transition-all duration-300`
- **3B.1** Chips de fundamentação legal: clicáveis (com URL) ou texto (sem URL) com estilo diferenciado
- **3B.2** Cards de destaque: borda `border-l-4 secondary-500`, badge Star, fundo `secondary-100/30`
- **3B.3** Cards passados: `opacity-60`, badge "Expirado" em cinza
- **3B.4** Cards próximos (7 dias): badge "Próximo" em âmbar; cards "Hoje": badge pulsante em vermelho

### Arquivos criados

- `src/components/timeline/EventDetail.tsx`

### Arquivos modificados

- `src/components/timeline/EventCard.tsx` (expand/collapse + estilos)

---

## Sprint 2A/2B — Timeline: Componentes Base, Container e Navegação

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **2A.1** `MonthSection.tsx` — seção mensal com header sticky, contagem, destaque do mês atual
- **2A.2** `DateMarker.tsx` — nó circular com dia, dia da semana, marcos temporais
- **2A.3** `EventCard.tsx` — versão simplificada com badges de categoria, turno e status
- **2A.4** Função `agruparPorMes` (já existia em `utils.ts`)
- **2A.5** Função `agruparPorData` (já existia em `utils.ts`)
- **2A.6** Badges de categoria com cores corretas do PRD (10 categorias)
- **2B.1** `Timeline.tsx` — container com linha vertical conectora e MonthSections
- **2B.2** `MonthNav.tsx` — barra de navegação horizontal sticky com chips dos meses
- **2B.3** Hook de Intersection Observer integrado ao MonthNav para detectar mês visível
- **2B.4** Integração no `App.tsx` com array completo de 296 eventos
- **2B.5** Linha vertical: `w-0.5 bg-primary-200` com nós circulares `bg-primary-700`
- **2B.6** MonthNav com `overflow-x-auto`, `scroll-snap-x` e `scrollbar-hide`
- **2B.7** Mês atual destacado com `bg-primary-100` e `ring-1 ring-primary-300`

### Arquivos criados

- `src/components/timeline/MonthSection.tsx`
- `src/components/timeline/DateMarker.tsx`
- `src/components/timeline/EventCard.tsx`
- `src/components/timeline/Timeline.tsx`
- `src/components/timeline/MonthNav.tsx`

### Arquivos modificados

- `src/App.tsx` (integração da timeline)

---

## Sprint 1C — Dados: Pré-eleição, Turnos, Pós-eleição e Encerramento

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **1C.1** Mapeados **~18 eventos** de **Setembro/2026** (01/09 ×3, 04/09 ×6, 09/09 ×2, 13/09, 14/09 ×7, 15/09, 19/09 ×3, 24/09 ×2, 28/09, 29/09 ×3): vagas remanescentes de candidaturas, imunidade prisional, prestações parciais de contas, lacramento de sistemas, transporte de eleitores, auditorias e pesquisas eleitorais
- **1C.2** Mapeados **~60 eventos** de **Outubro/2026** (01/10 ×9, 02/10 ×6, 03/10 ×9, 04/10 ×9, 05/10 ×6, 06/10, 07/10, 08/10, 09/10 ×2, 10/10, 12/10, 15/10 ×3, 19/10, 20/10 ×4, 22/10 ×7, 23/10 ×8, 24/10 ×8, 25/10 ×6, 26/10 ×4, 27/10 ×2, 28/10, 30/10 ×2): 1º turno (03/10), 2º turno (25/10), propaganda, votação, auditorias, testes de integridade, prestações de contas, pesquisas, transporte
- **1C.3** Mapeados **~19 eventos** de **Novembro/2026** (03/11 ×8, 06/11, 09/11 ×2, 10/11 ×2, 14/11 ×3, 17/11, 24/11 ×3): prestações de contas do 1T e 2T, transferência de sobras/FEFC, remoção de propaganda, auditorias de urnas
- **1C.4** Mapeados **~30 eventos** de **Dezembro/2026 a Abril/2028** (dez/26 ×10, jan/27 ×7, mar/27, jun/27, jul/27 ×2, dez/27, abr/28): diplomação (18/12/2026), justificativas de ausência, manutenção de urnas, conservação de documentação, encerramento de contas bancárias, obrigações da Receita Federal e do MP
- **1C.5** Revisão de `destaque: true` em todos os marcos principais (1T, 2T, diplomação, encerramento de propaganda, etc.)
- **1C.6** TypeScript: zero erros de compilação ✅

### Totais acumulados até Sprint 1C

- **296 eventos** mapeados (Out/2025 a Abr/2028)
- TypeScript: zero erros de compilação ✅
- Campo `'servidor'` ausente em todos os `perfis[]` ✅

### Destaques marcados nesta sprint

| Data       | Evento                                                           |
| ---------- | ---------------------------------------------------------------- |
| 01/10/2026 | Último dia para propaganda eleitoral gratuita no rádio/TV (1T)   |
| 01/10/2026 | Último dia para comícios e sonorização fixa (1T)                 |
| 01/10/2026 | Último dia para circulação paga/impulsionada na internet (1T)    |
| 03/10/2026 | Último dia para alto-falantes, carreatas e material gráfico (1T) |
| 04/10/2026 | **1º Turno — Dia da votação**                                    |
| 22/10/2026 | Último dia para comícios e sonorização fixa (2T)                 |
| 22/10/2026 | Último dia para circulação paga/impulsionada na internet (2T)    |
| 23/10/2026 | Último dia para propaganda eleitoral gratuita no rádio/TV (2T)   |
| 24/10/2026 | Último dia para alto-falantes, carreatas e material gráfico (2T) |
| 25/10/2026 | **2º Turno — Dia da votação**                                    |
| 03/11/2026 | Último dia para prestação de contas do 1º turno                  |
| 14/11/2026 | Último dia para prestação de contas do 2º turno                  |
| 18/12/2026 | **Diplomação das eleitas e dos eleitos**                         |

---

## Sprint 1B — Dados: Período Eleitoral Denso

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **1B.1** Mapeados **42 eventos** de **Julho/2026** (04/07 ×6, 05/07 ×2, 06/07 ×2, 07/07, 10/07, 13/07, 16/07, 17/07 ×2, 19/07 ×2, 20/07 ×21, 24/07, 30/07, 31/07): condutas vedadas, acesso ao CANDex, edital de MRV, convenções partidárias e todos os atos delas decorrentes (CNPJ, limites de gastos, dados financeiros, direito de resposta, representação partidária, habilitação de voto em trânsito)
- **1B.2** Mapeados **51 eventos** de **Agosto/2026** (04/08 ×2, 05/08 ×7, 06/08, 15/08 ×15, 16/08 ×10, 18/08, 20/08 ×2, 21/08 ×2, 23/08, 25/08, 26/08 ×2, 27/08, 28/08 ×3, 30/08 ×2, 31/08): fim das convenções, registro de candidaturas, início da propaganda eleitoral, horário eleitoral gratuito, FEFC, prazos processuais eleitorais, voto em trânsito, transporte de eleitores
- **1B.3** Revisão geral do campo `perfis[]` em todos os 127 eventos mapeados (Out/2025–Ago/2026): padronizada a ordem canônica dos perfis (eleitor → candidato → partido → advogado); confirmada ausência de `'servidor'` em todos os eventos; distribuição final: `[]` (60), `['partido']` (22), `['candidato', 'partido']` (20), `['candidato']` (11), `['eleitor']` (7), `['candidato', 'partido', 'advogado']` (5), `['advogado']` (2)

### Totais acumulados até Sprint 1B

- **127 eventos** mapeados (Out/2025 a Ago/2026)
- **8 eventos** com `destaque: true`
- TypeScript: zero erros de compilação ✅
- Campo `'servidor'` ausente em todos os `perfis[]` ✅

### Destaques marcados nesta sprint

| Data       | Evento                                                        |
| ---------- | ------------------------------------------------------------- |
| 20/07/2026 | Início das convenções partidárias                             |
| 05/08/2026 | Último dia para convenções — encerramento                     |
| 15/08/2026 | Último dia para registro de candidaturas (até 19h)            |
| 16/08/2026 | Início da propaganda eleitoral                                |
| 16/08/2026 | Início da propaganda paga e impulsionada na internet          |
| 28/08/2026 | Início da propaganda eleitoral gratuita no rádio e na TV (1T) |

---

## Sprint 1A — Dados: Estrutura e Período Inicial

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **1A.1** Criado `src/data/eventos.ts` com array tipado `EventoCalendario[]`
- **1A.2** Mapeados **1 evento** de **Outubro/2025** (04/10/2025 — acesso antecipado das entidades fiscalizadoras aos sistemas do TSE)
- **1A.3** Mapeados **5 eventos** de **Dezembro/2025** (01/12, 05/12 ×2, 18/12, 19/12 — TPS 2025 e designação de juízes auxiliares)
- **1A.4** Mapeados **4 eventos** de **Janeiro/2026** (01/01 ×4 — pesquisas eleitorais, condutas vedadas e limites de publicidade)
- **1A.5** Mapeados **2 eventos** de **Março/2026** (05/03 ×2 — janela de migração partidária e data-limite instruções TSE)
- **1A.6** Mapeados **8 eventos** de **Abril/2026** (01/04, 03/04, 04/04 ×3, 06/04, 07/04 ×2 — desincompatibilização, filiação, domicílio eleitoral, autoatendimento)
- **1A.7** Mapeados **7 eventos** de **Maio/2026** (06/05 ×2, 07/05, 13/05, 15/05 ×3 — alistamento, TPS confirmação, arrecadação prévia)
- **1A.8** Mapeados **7 eventos** de **Junho/2026** (01/06 ×2, 05/06, 16/06, 22/06, 30/06 ×2 — FEFC, multas eleitorais, seções no exterior, vedação a pré-candidatos em TV)

### Totais do período

- **34 eventos** mapeados (Out/2025 a Jun/2026)
- **2 eventos** marcados com `destaque: true` (04/04 — filiação/domicílio; 06/05 — alistamento)
- **51 entradas** em `fundamentacao[]` com `url: ""` (aguardando Sprint 7C)
- Campo `perfis[]` sem ocorrência de `'servidor'` em nenhum evento ✅

### Observação técnica

> A Resolução contém provável erro tipográfico: "6 de abril – **quarta-feira**". O dia 06/04/2026 é efetivamente **segunda-feira**, confirmado pela sequência 04/abr (sábado) → 07/abr (terça-feira). O campo `diaSemana` foi preenchido com o dia correto.

---

## Sprint 0 — Fundação

**Data:** 05/03/2026 | **Status:** ✅ Concluída

### Tarefas concluídas

- **0.1** Criado projeto com **Vite + React + TypeScript** (`react-ts` template)
- **0.2** Instalado e configurado **Tailwind CSS 3.x** com `tailwind.config.js` customizado (paleta do PRD: primary, secondary, neutral, cat ×10 categorias) e `postcss.config.js`
- **0.3** Instalados componentes **Radix UI** necessários para shadcn/ui (`@radix-ui/react-collapsible`, `@radix-ui/react-dialog`, `@radix-ui/react-separator`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`, `class-variance-authority`)
- **0.4** Instalado **Lucide React**
- **0.5** Criada estrutura de pastas: `src/components/layout`, `src/components/timeline`, `src/components/filters`, `src/components/countdown`, `src/components/proximos-prazos`, `src/components/ui`, `src/data`, `src/hooks`, `src/lib`, `src/types`
- **0.6** Criado `src/types/index.ts` com interfaces `EventoCalendario`, `Fundamentacao`, `Categoria`, types `CategoriaID` e `Perfil = 'eleitor' | 'candidato' | 'partido' | 'advogado'`
- **0.7** Criado `src/data/categorias.ts` com as **10 categorias** (ELE, REG, PRO, FIN, ADM, FIS, CON, VOT, PES, DIP) com ID, nome, cor hex, ícone Lucide e descrição
- **0.8** Criado `src/data/constants.ts` com `PRIMEIRO_TURNO` (04/10/2026), `SEGUNDO_TURNO` (25/10/2026), `DIPLOMACAO` (18/12/2026) e metadados da `RESOLUCAO_TSE`
- **0.9** Criado `src/lib/utils.ts` com funções: `cn()` (clsx + tailwind-merge), `formatDate`, `getDiaSemana`, `getNomeMes`, `getMesAnoChave`, `getMesAnoLabel`, `isEventoPassado`, `isEventoHoje`, `isEventoProximo`, `getUrgenciaPrazo`, `getDiasAte`, `agruparPorMes`, `agruparPorData`
- **0.10** Configurada fonte **Inter** (pesos 400/500/600/700) + **JetBrains Mono** via Google Fonts no `index.html`; `lang` alterado para `pt-BR`; `<title>` e `<meta description>` institucionais definidos
- **0.11** Configurada paleta de cores do PRD no `tailwind.config.js`: primary (900/700/500/200/100), secondary (700/500/100), neutral (950/700/400/100/50), semânticas (success, warning, muted) e cat (ELE/REG/PRO/FIN/ADM/FIS/CON/VOT/PES/DIP)
- **0.12** Criado `src/App.tsx` com estrutura placeholder: `<Header />`, `<ProximosPrazos />`, `<main />`, `<Footer />`; criados componentes placeholder em `components/layout/Header.tsx`, `components/layout/Footer.tsx` e `components/proximos-prazos/ProximosPrazos.tsx`; criado `src/data/eventos.ts` com array vazio tipado
- **0.13** Verificado `npm run build` sem erros (32 módulos transformados); `npx tsc --noEmit` sem erros; CSS gerado: 6.83 kB; JS: 194.39 kB (gzip: 61.15 kB)

### Dependências instaladas

| Pacote                     | Versão | Finalidade                |
| -------------------------- | ------ | ------------------------- |
| `vite`                     | 7.x    | Build tool                |
| `react` + `react-dom`      | 18.x   | Framework UI              |
| `typescript`               | 5.x    | Tipagem estática          |
| `tailwindcss`              | 3.x    | Estilização utility-first |
| `postcss` + `autoprefixer` | latest | Processamento CSS         |
| `clsx` + `tailwind-merge`  | latest | Utilitário de classes     |
| `lucide-react`             | latest | Ícones SVG                |
| `@radix-ui/*` (7 pacotes)  | latest | Primitivos UI acessíveis  |
| `class-variance-authority` | latest | Variantes de componentes  |

---

_Atualizado automaticamente a cada sprint concluída._
