# ROADMAP v2 — Sprints de Desenvolvimento (Detalhado)

**Produto:** Calendário Eleitoral Interativo — Eleições 2026  
**Base:** PRD v1.1 — Resolução TSE nº 23.760/2026  
**Metodologia:** Sprints sequenciais com sub-etapas e checkpoint ao final de cada sprint  
**Regra fundamental:** Nenhuma sprint avança sem validação da anterior.

---

## VISÃO GERAL

| Sprint    | Nome                                 | Sub-etapas                                                       | Estimativa  |
| --------- | ------------------------------------ | ---------------------------------------------------------------- | ----------- |
| 0         | Fundação                             | —                                                                | ~30 min     |
| 1A        | Dados — Estrutura e Período Inicial  | Out/2025 a Jun/2026                                              | ~1h         |
| 1B        | Dados — Período Eleitoral Denso      | Jul e Ago/2026 + atribuição de perfis                            | ~2h         |
| 1C        | Dados — Período Final e Validação    | Set/2026 a Abr/2028 + revisão geral                              | ~1.5h       |
| 2A        | Timeline — Componentes Base          | MonthSection, DateMarker, EventCard básico                       | ~1h         |
| 2B        | Timeline — Container e Navegação     | Timeline, MonthNav, agrupamentos, IO                             | ~1h         |
| 3A        | Cards — Expand/Collapse e Detalhes   | Accordion, descrição, animações                                  | ~45 min     |
| 3B        | Cards — Legislação e Estilos Visuais | Chips de fundamentação, destaque, passados, próximos             | ~45 min     |
| 4A        | Filtros — Lógica e Hooks             | useFilteredEvents, filtros individuais                           | ~1h         |
| 4B        | Filtros — UI e Integração            | FilterPanel, FilterSummary, URL sync, highlight                  | ~1h         |
| 5A        | Header e Hero                        | Header, countdown, hero                                          | ~45 min     |
| 5B        | Próximos Prazos, Footer e Integração | Painel de prazos com tabs de perfil, footer, coerência do topo   | ~1h         |
| 6A        | Responsividade                       | Viewports 320px–1440px, mobile adaptations                       | ~1h         |
| 6B        | Acessibilidade                       | Teclado, ARIA, contraste, reduced-motion, leitor de tela         | ~1h         |
| 7A        | Polish e Performance                 | Microinterações, lazy rendering, bundle, re-renders              | ~45 min     |
| 7B        | SEO e Meta                           | Title, OG, Twitter Cards, sitemap, robots                        | ~30 min     |
| 7C        | Coleta de URLs de Legislação         | Inventário de normas, inserção dos links fornecidos pelo usuário | ~1h         |
| 7D        | Segurança, Deploy e Docs             | Headers, HTTPS, Netlify, Lighthouse, README                      | ~45 min     |
| 8         | Ajustes de UI e UX                   | Botão colapsar nos meses e Tooltips em todos os botões           | ~1h         |
| **Total** |                                      | **19 etapas**                                                    | **~17–19h** |

---

## SPRINT 0 — FUNDAÇÃO

**Objetivo:** Projeto funcional rodando localmente, com toda a infraestrutura configurada e zero funcionalidade visual.

### Tarefas

- [ ] **0.1** Criar projeto com Vite + React + TypeScript
- [ ] **0.2** Instalar e configurar Tailwind CSS 3.x com `tailwind.config.ts` customizado
- [ ] **0.3** Instalar e inicializar shadcn/ui (configurar `components.json`, instalar componentes base: `button`, `badge`, `switch`, `sheet`, `collapsible`, `input`, `separator`, `scroll-area`, `tabs`)
- [ ] **0.4** Instalar Lucide React
- [ ] **0.5** Criar estrutura de pastas conforme PRD (components/, data/, hooks/, lib/, types/)
- [ ] **0.6** Criar arquivo `src/types/index.ts` com as interfaces `EventoCalendario`, `Fundamentacao`, `Categoria`, o type `CategoriaID` e o type `Perfil = 'eleitor' | 'candidato' | 'partido' | 'advogado'`
- [ ] **0.7** Criar arquivo `src/data/categorias.ts` com as 10 categorias (ID, nome, cor, ícone Lucide) conforme tabela do PRD
- [ ] **0.8** Criar arquivo `src/data/constants.ts` com datas fixas: `PRIMEIRO_TURNO`, `SEGUNDO_TURNO`, `DIPLOMACAO`, `DATA_HOJE`
- [ ] **0.9** Criar arquivo `src/lib/utils.ts` com função `cn()` (clsx + tailwind-merge) e funções utilitárias de data (`formatDate`, `isEventoPassado`, `isEventoProximo`, `getDiaSemana`, `getUrgenciaPrazo`)
- [ ] **0.10** Configurar fonte Inter via Google Fonts no `index.html`
- [ ] **0.11** Configurar cores customizadas no `tailwind.config.ts` conforme paleta do PRD (primary, secondary, neutros, cores das categorias)
- [ ] **0.12** Criar `App.tsx` com estrutura básica: `<Header />`, `<ProximosPrazos />`, `<main />`, `<Footer />` — todos como placeholders
- [ ] **0.13** Verificar que `npm run dev` roda sem erros e exibe a página placeholder

### Checkpoint

```
✅ Projeto roda com `npm run dev` sem erros
✅ Tailwind funcional (testar classe utilitária qualquer)
✅ shadcn/ui funcional (renderizar um <Button> de teste)
✅ Lucide funcional (renderizar um ícone de teste)
✅ Interfaces TypeScript compilam sem erro (incluindo type Perfil)
✅ Arquivo de categorias exporta array com 10 itens
✅ Arquivo de constantes exporta as 3 datas fixas
✅ Fonte Inter carregando corretamente
```

---

## SPRINT 1A — DADOS: ESTRUTURA E PERÍODO INICIAL

**Objetivo:** Criar a estrutura do arquivo de eventos e mapear o período de menor densidade (Out/2025 a Jun/2026, ~26 eventos).

**⚠️ SPRINT CRÍTICA — Estabelece o padrão de mapeamento para todas as etapas seguintes.**

### Tarefas

- [ ] **1A.1** Criar arquivo `src/data/eventos.ts` com array vazio tipado: `export const eventos: EventoCalendario[] = []`
- [ ] **1A.2** Mapear eventos de **OUTUBRO/2025** (1 evento)
- [ ] **1A.3** Mapear eventos de **DEZEMBRO/2025** (4 eventos)
- [ ] **1A.4** Mapear eventos de **JANEIRO/2026** (4 eventos)
- [ ] **1A.5** Mapear eventos de **MARÇO/2026** (2 eventos)
- [ ] **1A.6** Mapear eventos de **ABRIL/2026** (~5 eventos)
- [ ] **1A.7** Mapear eventos de **MAIO/2026** (~5 eventos)
- [ ] **1A.8** Mapear eventos de **JUNHO/2026** (~5 eventos)

### Regras de mapeamento para a IA

```
PARA CADA EVENTO DA RESOLUÇÃO:
1. Ler o texto integral do evento no Anexo I
2. Criar ID no formato "YYYY-MM-DD-N" (N = número sequencial no dia)
3. Extrair data exata (campo `data` no formato ISO)
4. Extrair dia da semana (campo `diaSemana`)
5. Redigir título resumido com no máximo 120 caracteres
6. Copiar descrição completa do evento (campo `descricao`)
   — NÃO parafrasear, NÃO omitir, NÃO resumir
7. Classificar em 1+ categorias usando os IDs do PRD
8. Preencher campo `perfis[]` conforme critérios da seção 4.1 do PRD:
   — Critério 1: destinatário explícito no texto da Resolução
   — Critério 2: relevância prática para o perfil
   — Perfis possíveis: 'eleitor' | 'candidato' | 'partido' | 'advogado'
   — Evento sem perfil identificável: perfis: []
   — Servidores NÃO constam no array — eles veem todos os eventos
9. Preencher campo `marcos` se houver (ex: "60 dias antes do 1º turno")
10. Preencher campo `turno` (1T, 2T, AMBOS ou null)
11. Extrair TODAS as referências legais citadas entre parênteses:
    — norma (ex: "Lei nº 9.504/1997")
    — dispositivo (ex: "art. 91, caput")
    — url: deixar como string vazia ("") — será preenchido posteriormente
      pelo usuário na Sprint 7C (Coleta de URLs de Legislação)
12. Se o evento é de destaque (PRD 5.7), marcar destaque: true
13. NÃO inventar eventos que não existam na Resolução
14. NÃO omitir eventos que existam na Resolução
```

### Checkpoint

```
✅ Arquivo eventos.ts compila sem erros TypeScript
✅ Total parcial: ~26 eventos mapeados (Out/2025 a Jun/2026)
✅ Cada evento com todos os campos obrigatórios preenchidos (incluindo perfis[])
✅ Nenhum campo com valor vazio ou placeholder (exceto url e perfis[] vazio quando aplicável)
✅ IDs únicos e em formato correto (YYYY-MM-DD-N)
✅ Campo url em fundamentacao[] preenchido com "" (aguardando Sprint 7C)
✅ Campo perfis[] preenchido conforme critérios do PRD (nunca 'servidor')
✅ Eventos ordenados cronologicamente dentro do período
```

---

## SPRINT 1B — DADOS: PERÍODO ELEITORAL DENSO

**Objetivo:** Mapear os dois meses de maior volume — Julho (~40 eventos) e Agosto (~45 eventos) de 2026 — e realizar a revisão geral do campo `perfis[]` em todos os eventos já mapeados.

**⚠️ Estes meses concentram a maior parte dos prazos críticos. Atenção redobrada.**

### Tarefas

- [ ] **1B.1** Mapear eventos de **JULHO/2026** (~40 eventos) — convenções, propaganda, registro de candidaturas
- [ ] **1B.2** Mapear eventos de **AGOSTO/2026** (~45 eventos) — propaganda, pesquisas, financiamento, debates
- [ ] **1B.3** **Revisão do campo `perfis[]`** em todos os eventos mapeados até agora (Out/2025–Ago/2026): verificar consistência da atribuição, aplicar os dois critérios do PRD (seção 4.1) e corrigir atribuições incorretas ou ausentes

### Checkpoint

```
✅ Total parcial acumulado: ~111 eventos (Out/2025 a Ago/2026)
✅ Jul/2026: ~40 eventos mapeados, todos com categorias, fundamentação e perfis[]
✅ Ago/2026: ~45 eventos mapeados, todos com categorias, fundamentação e perfis[]
✅ Nenhuma data duplicada sem diferenciação no ID
✅ Campos `turno` corretamente preenchidos para eventos de 1T e 2T
✅ Normas e dispositivos corretamente extraídos (url vazio aguardando Sprint 7C)
✅ Campo perfis[] revisado em todos os ~111 eventos: sem ocorrência de 'servidor'
✅ Eventos com destinatário explícito na Resolução têm perfil correspondente obrigatório
✅ Eventos sem perfil identificável têm perfis: []
```

---

## SPRINT 1C — DADOS: PERÍODO FINAL E VALIDAÇÃO GERAL

**Objetivo:** Mapear o período restante (Set/2026 a Abr/2028) e realizar a validação completa de todo o arquivo de dados.

### Tarefas

- [ ] **1C.1** Mapear eventos de **SETEMBRO/2026** (~25 eventos)
- [ ] **1C.2** Mapear eventos de **OUTUBRO/2026** (~60 eventos) — **mês mais extenso: 1T, 2T, pós-eleição**
- [ ] **1C.3** Mapear eventos de **NOVEMBRO/2026** (~15 eventos)
- [ ] **1C.4** Mapear eventos de **DEZEMBRO/2026** (~12 eventos)
- [ ] **1C.5** Mapear eventos de **JANEIRO/2027** (~5 eventos)
- [ ] **1C.6** Mapear eventos de **MARÇO a DEZEMBRO/2027** (4 eventos)
- [ ] **1C.7** Mapear eventos de **ABRIL/2028** (1 evento)
- [ ] **1C.8** Marcar campo `destaque: true` em todos os eventos listados no PRD (Seção 5.7)
- [ ] **1C.9** **Revisão geral:** verificar que todas as normas e dispositivos estão extraídos (campo `url` permanece vazio — será preenchido na Sprint 7C)
- [ ] **1C.10** **Contagem final:** conferir total de eventos mapeados vs. total esperado (~235)
- [ ] **1C.11** **Consistência geral:** verificar que não há IDs duplicados, campos vazios (exceto `url`), categorias inexistentes ou ocorrência de `'servidor'` no campo `perfis[]`

### Checkpoint (VALIDAÇÃO FINAL DOS DADOS)

```
✅ Arquivo eventos.ts compila sem erros TypeScript
✅ Total de eventos: ~235 (± 5 de tolerância por agrupamento)
✅ Cada evento possui: id, data, titulo, descricao, categorias[], perfis[], fundamentacao[]
✅ Nenhum campo obrigatório com valor vazio ou placeholder
✅ Meses mapeados: Out/2025 a Abr/2028 (19 meses com eventos)
✅ Eventos de destaque marcados: ≥ 12 eventos com destaque: true
✅ Todas as normas e dispositivos extraídos (url vazio aguardando Sprint 7C)
✅ Nenhum evento duplicado (IDs únicos)
✅ Eventos ordenados cronologicamente
✅ Nenhuma categoria inexistente referenciada
✅ Campo perfis[] sem ocorrência de 'servidor' em nenhum evento
✅ Ao menos 1 perfil atribuído nos eventos com destinatário explícito na Resolução
```

---

## SPRINT 2A — TIMELINE: COMPONENTES BASE

**Objetivo:** Criar os componentes visuais individuais da timeline (seção de mês, marcador de data e card básico), ainda sem container ou navegação.

### Tarefas

- [ ] **2A.1** Criar componente `MonthSection.tsx` — seção mensal com header sticky (nome do mês, ano, contador de eventos)
- [ ] **2A.2** Criar componente `DateMarker.tsx` — marcador de data na timeline (dia, dia da semana, marco temporal quando houver)
- [ ] **2A.3** Criar componente `EventCard.tsx` — versão simplificada (estado fechado apenas): badge de categoria (cor + ícone), título, badges de turno e status temporal
- [ ] **2A.4** Criar função utilitária `agruparPorMes` em `src/lib/utils.ts` — agrupa array de eventos por mês/ano
- [ ] **2A.5** Criar função utilitária `agruparPorData` — agrupa eventos do mesmo dia sob o mesmo DateMarker
- [ ] **2A.6** Estilizar badges de categoria com cores corretas do PRD

### Checkpoint

```
✅ MonthSection renderiza com nome do mês, ano e contagem
✅ DateMarker exibe dia, dia da semana e marco (quando houver)
✅ EventCard exibe título, badge de categoria com cor e ícone, badge de turno
✅ Funções de agrupamento retornam estrutura correta (testar com subset de eventos)
✅ Componentes compilam sem erros TypeScript
```

---

## SPRINT 2B — TIMELINE: CONTAINER E NAVEGAÇÃO

**Objetivo:** Montar o container da timeline, conectar todos os componentes e implementar a navegação por meses.

### Tarefas

- [ ] **2B.1** Criar componente `Timeline.tsx` — container que agrupa MonthSections com linha vertical conectora
- [ ] **2B.2** Criar componente `MonthNav.tsx` — barra de navegação horizontal sticky com chips dos meses; ao clicar, faz scroll suave para a seção correspondente
- [ ] **2B.3** Criar hook `useActiveMonth.ts` — Intersection Observer que detecta qual mês está visível na viewport e destaca o chip correspondente no MonthNav
- [ ] **2B.4** Integrar Timeline no `App.tsx` alimentando com array completo de `eventos.ts`
- [ ] **2B.5** Estilizar linha vertical da timeline (2px, cor primary-200) com nós circulares na cor da categoria
- [ ] **2B.6** Estilizar MonthNav com scroll horizontal em mobile e snap behavior
- [ ] **2B.7** Destacar mês atual (hoje) no MonthNav com estilo diferenciado

### Checkpoint (VALIDAÇÃO COMPLETA DA SPRINT 2)

```
✅ Todos os ~235 eventos visíveis na timeline
✅ Eventos agrupados corretamente por mês
✅ Eventos na mesma data compartilham o mesmo DateMarker
✅ MonthNav exibe todos os meses com eventos
✅ Clicar em mês no MonthNav faz scroll suave para a seção
✅ Mês atualmente visível fica destacado no MonthNav automaticamente
✅ Linha vertical da timeline contínua e visualmente correta
✅ Badges de categoria com cores corretas
✅ Scroll manual pela timeline funciona sem travamentos
```

---

## SPRINT 3A — CARDS: EXPAND/COLLAPSE E DETALHES

**Objetivo:** Implementar a mecânica de expansão dos cards com descrição completa e animações.

### Tarefas

- [ ] **3A.1** Implementar estado expandido/colapsado no `EventCard.tsx` usando `useState` + componente `Collapsible` do shadcn
- [ ] **3A.2** Criar componente `EventDetail.tsx` — conteúdo expandido: descrição completa, observações (quando houver)
- [ ] **3A.3** Renderizar campo `descricao` com formatação adequada (parágrafos, incisos com recuo quando houver)
- [ ] **3A.4** Adicionar ícone chevron no card (rotação de 0° → 180° ao expandir) com transição CSS
- [ ] **3A.5** Implementar animação de slide-down ao expandir (`transition-all duration-300`)
- [ ] **3A.6** Definir e implementar comportamento: accordion (um card por vez) ou múltiplos abertos — **definir com Wesley**

### Checkpoint

```
✅ Clicar no card expande com animação suave
✅ Clicar novamente colapsa o card
✅ Descrição completa visível no estado expandido
✅ Chevron rotaciona ao expandir/colapsar
✅ Comportamento accordion/múltiplos definido e implementado
```

---

## SPRINT 3B — CARDS: LEGISLAÇÃO E ESTILOS VISUAIS

**Objetivo:** Adicionar os chips de fundamentação legal clicáveis e os estilos diferenciados para eventos de destaque, passados e próximos.

### Tarefas

- [ ] **3B.1** Renderizar campo `fundamentacao[]` como chips/badges clicáveis no `EventDetail.tsx`: cada chip exibe "Lei nº X — art. Y" e ao clicar abre URL em nova aba (`target="_blank" rel="noopener noreferrer"`). **Nota:** URLs estarão vazias até a Sprint 7C — chips sem URL devem ser renderizados como texto (sem link), com estilo visual diferenciado indicando que o link ainda não foi inserido
- [ ] **3B.2** Estilizar cards de eventos com `destaque: true` — borda mais espessa, badge "Destaque" com ícone Star, fundo sutil `secondary-100`
- [ ] **3B.3** Estilizar cards de eventos passados — opacidade reduzida (`opacity-60`), badge "Expirado" em cinza
- [ ] **3B.4** Estilizar cards de eventos próximos (dentro de 7 dias) — badge "Próximo" em âmbar

### Checkpoint (VALIDAÇÃO COMPLETA DA SPRINT 3)

```
✅ Links de legislação renderizados como chips (texto quando sem URL, clicáveis quando com URL)
✅ Chips sem URL exibidos com estilo visual diferenciado (não-clicável)
✅ Eventos de destaque visualmente diferenciados (borda, badge, fundo)
✅ Eventos passados visualmente esmaecidos (opacidade)
✅ Eventos próximos (7 dias) com badge "Próximo" em âmbar
```

---

## SPRINT 4A — FILTROS: LÓGICA E HOOKS

**Objetivo:** Implementar toda a lógica de filtragem em hooks reutilizáveis, sem UI ainda.

### Tarefas

- [ ] **4A.1** Criar hook `useFilteredEvents.ts` — recebe array completo de eventos + estado dos filtros, retorna array filtrado com `useMemo`
- [ ] **4A.2** Implementar filtro **"Ocultar eventos passados"** — remove eventos com data < hoje
- [ ] **4A.3** Implementar filtro **"Categorias"** — lógica OR (exibe evento se tiver pelo menos uma categoria selecionada)
- [ ] **4A.4** Implementar filtro **"Turno"** — "Todos" / "1º Turno" / "2º Turno"
- [ ] **4A.5** Implementar filtro **"Busca textual"** — busca em titulo + descricao + fundamentacao[].norma + fundamentacao[].dispositivo
- [ ] **4A.6** Criar função `normalizeSearch` em `src/lib/search.ts` — normaliza acentos, lowercase, tokeniza para busca parcial
- [ ] **4A.7** Implementar lógica combinada de filtros: `passados AND categorias AND turno AND busca`
- [ ] **4A.8** Ao filtrar, ocultar automaticamente meses que ficam sem eventos visíveis
- [ ] **4A.9** Criar hook `useProximosPrazos.ts` — recebe array de eventos, perfil (`Perfil | 'todos'`) e quantidade (padrão: 5); retorna os próximos N eventos futuros filtrados pelo perfil, ordenados por data

### Checkpoint

```
✅ Hook useFilteredEvents retorna array filtrado corretamente
✅ Cada filtro individual funciona isoladamente (testar via console/testes)
✅ Filtros combinados funcionam (ex: "Propaganda" + "1T" + ocultar passados)
✅ Meses sem eventos após filtragem são removidos do resultado
✅ Busca normalizada encontra "convencao" e "convenção" igualmente
✅ Hook useProximosPrazos retorna corretamente para cada perfil (testar todos: eleitor, candidato, partido, advogado, todos)
✅ Hook useProximosPrazos retorna array vazio quando não há eventos futuros para o perfil
```

---

## SPRINT 4B — FILTROS: UI E INTEGRAÇÃO

**Objetivo:** Construir os componentes visuais dos filtros, integrar com a timeline e sincronizar com a URL.

### Tarefas

- [ ] **4B.1** Criar componente `FilterPanel.tsx` — em desktop: sidebar fixa à esquerda (~280px); em mobile: bottom sheet (shadcn Sheet) acionado por botão flutuante com ícone Filter
- [ ] **4B.2** Implementar toggle **"Ocultar passados"** — Switch do shadcn
- [ ] **4B.3** Implementar chips de **categorias** — multi-select coloridos
- [ ] **4B.4** Implementar input de **busca textual** — com debounce de 300ms
- [ ] **4B.5** Implementar select/botões de **turno** — "Todos" / "1º Turno" / "2º Turno"
- [ ] **4B.6** Criar componente `FilterSummary.tsx` — barra fixa abaixo do MonthNav com "Exibindo X de Y eventos" + botão "Limpar filtros"
- [ ] **4B.7** Implementar botão "Limpar filtros" que restaura todos os filtros ao estado padrão
- [ ] **4B.8** Criar hook `useUrlFilters.ts` — sincroniza estado dos filtros com query params da URL (ex: `?cat=ELE,REG&turno=1T&q=convenção&passados=ocultar`)
- [ ] **4B.9** Highlight dos termos de busca nos textos dos cards quando busca textual estiver ativa

### Checkpoint (VALIDAÇÃO COMPLETA DA SPRINT 4)

```
✅ Toggle "ocultar passados" remove/exibe corretamente
✅ Filtro de categorias: selecionar apenas "Eleitor" mostra só eventos com categoria ELE
✅ Filtro de categorias: desmarcar todas exibe mensagem "Nenhum evento encontrado"
✅ Busca textual: digitar "convenção" retorna eventos relevantes
✅ Busca textual: digitar "9.504" retorna eventos que citam a Lei nº 9.504/1997
✅ Filtro de turno: "1º Turno" filtra corretamente
✅ Filtros combinados funcionam: ex: "Propaganda" + "1º Turno" + ocultar passados
✅ "Exibindo X de Y eventos" atualiza em tempo real
✅ "Limpar filtros" restaura estado padrão
✅ Meses vazios após filtragem são ocultados
✅ URL atualiza com query params ao filtrar
✅ Acessar URL com params pré-carrega filtros corretamente
✅ Termos de busca destacados nos cards
```

---

## SPRINT 5A — HEADER E HERO

**Objetivo:** Criar o topo institucional com identidade visual e contagem regressiva funcional.

### Tarefas

- [ ] **5A.1** Criar componente `Header.tsx` — fundo gradiente sutil de `primary-900` para `primary-700`, título "Calendário Eleitoral — Eleições 2026", subtítulo "Resolução TSE nº 23.760/2026", link para download da resolução
- [ ] **5A.2** Criar hook `useCountdown.ts` — calcula diferença entre agora e data-alvo; retorna `{ dias, horas, minutos, segundos }`; atualiza a cada 1s via `setInterval`; lógica de transição: antes do 1T → conta para 1T; entre 1T e 2T → conta para 2T; após 2T → retorna `null`
- [ ] **5A.3** Criar componente `Countdown.tsx` — 4 blocos visuais (dias/horas/min/seg) com fundo glassmorphism leve (`bg-white/10 backdrop-blur`), rótulo dinâmico, ou mensagem "Eleições 2026 realizadas"
- [ ] **5A.4** Integrar Countdown no Header/Hero
- [ ] **5A.5** Adicionar descrição breve no Hero: "Todos os prazos e datas do processo eleitoral das Eleições Gerais de 2026, organizados para você."

### Checkpoint

```
✅ Header renderiza com gradiente azul institucional
✅ Título e subtítulo visíveis e legíveis (contraste branco sobre azul)
✅ Link para resolução funcional
✅ Countdown exibe valores corretos (comparar manualmente)
✅ Countdown atualiza a cada segundo
✅ Rótulo do countdown correto: "até o 1º Turno" ou "até o 2º Turno"
```

---

## SPRINT 5B — PRÓXIMOS PRAZOS, FOOTER E INTEGRAÇÃO DO TOPO

**Objetivo:** Criar o painel "Próximos Prazos" com tabs de perfil, criar o footer e garantir que Header + Painel + MonthNav + FilterSummary formem um bloco visualmente coerente.

### Tarefas

**Painel "Próximos Prazos":**

- [ ] **5B.1** Criar componente `ProximosPrazos.tsx` — container do painel; posicionado entre o Hero e a barra de navegação por meses; fundo `neutral-50` com borda inferior sutil
- [ ] **5B.2** Criar componente `PerfilTabs.tsx` — tabs horizontais com as opções: "Todos" / "Eleitor" / "Candidato" / "Partido" / "Advogado"; tab ativo com cor `primary-700` e borda inferior de 2px; implementar com componente `Tabs` do shadcn/ui
- [ ] **5B.3** Criar componente `PrazoCard.tsx` — card individual de prazo próximo: data formatada, título do evento, badge de categoria (cor + ícone), badge de urgência ("Hoje" em vermelho / "Esta semana" em âmbar / "Em X dias" em cinza neutro)
- [ ] **5B.4** Integrar hook `useProximosPrazos` no `ProximosPrazos.tsx`, passando o perfil ativo no tab selecionado e quantidade = 5
- [ ] **5B.5** Implementar scroll horizontal dos `PrazoCard`s em mobile (overflow-x: auto com snap) e exibição em linha em desktop (4–5 cards visíveis)
- [ ] **5B.6** Ao clicar em um `PrazoCard`, fazer scroll suave até o evento correspondente na timeline e expandir o card automaticamente
- [ ] **5B.7** Persistir tab de perfil selecionado em `localStorage` — na próxima visita, o painel carrega já filtrado pelo perfil salvo; padrão inicial: "Todos"
- [ ] **5B.8** Exibir mensagem "Nenhum prazo próximo para este perfil." quando não houver eventos futuros para o perfil selecionado (nunca exibir esta mensagem no tab "Todos" enquanto houver eventos futuros)

**Footer e integração:**

- [ ] **5B.9** Criar componente `Footer.tsx` com: fonte dos dados ("Resolução TSE nº 23.760/2026, DJE de 04/03/2026"), link para resolução, disclaimer jurídico ("Site de caráter informativo..."), créditos, ano
- [ ] **5B.10** Garantir que Hero + ProximosPrazos + MonthNav + FilterSummary formem um bloco coerente no topo sem sobreposição
- [ ] **5B.11** Ajustar z-index e posicionamento sticky dos elementos do topo para evitar conflitos

### Checkpoint (VALIDAÇÃO COMPLETA DA SPRINT 5)

```
✅ Painel "Próximos Prazos" visível entre o Hero e o MonthNav
✅ Tab "Todos" exibe os 5 próximos eventos futuros sem filtro de perfil
✅ Tab "Eleitor" exibe apenas eventos com perfis[] contendo 'eleitor'
✅ Tab "Candidato" exibe apenas eventos com perfis[] contendo 'candidato'
✅ Tab "Partido" exibe apenas eventos com perfis[] contendo 'partido'
✅ Tab "Advogado" exibe apenas eventos com perfis[] contendo 'advogado'
✅ Badge de urgência correto: "Hoje" / "Esta semana" / "Em X dias"
✅ Clicar em PrazoCard faz scroll + expande o evento na timeline
✅ Tab selecionado persiste ao recarregar a página (localStorage)
✅ Mensagem de fallback exibida quando perfil não tem eventos futuros
✅ Scroll horizontal dos cards funcional em mobile (375px)
✅ Footer com disclaimer jurídico presente
✅ Footer com link para resolução original
✅ Sem sobreposição visual entre Header, ProximosPrazos, MonthNav, FilterSummary e conteúdo
✅ Scroll pelo site mantém elementos sticky funcionando corretamente
```

---

## SPRINT 6A — RESPONSIVIDADE

**Objetivo:** Garantir experiência impecável em todas as viewports, de 320px a 1440px.

### Tarefas

- [ ] **6A.1** Testar e ajustar layout em viewport **320px** (menor dispositivo)
- [ ] **6A.2** Testar e ajustar em **375px** (iPhone SE/13 mini)
- [ ] **6A.3** Testar e ajustar em **414px** (iPhone Plus/Pro Max)
- [ ] **6A.4** Testar e ajustar em **768px** (tablet portrait)
- [ ] **6A.5** Testar e ajustar em **1024px** (tablet landscape / desktop pequeno)
- [ ] **6A.6** Testar e ajustar em **1440px** (desktop padrão)
- [ ] **6A.7** FilterPanel: garantir que em mobile abre como bottom sheet com botão flutuante
- [ ] **6A.8** MonthNav: garantir scroll horizontal com snap em mobile
- [ ] **6A.9** Cards expandidos: garantir que texto longo não quebra o layout em mobile
- [ ] **6A.10** Painel "Próximos Prazos": garantir que em 320px exibe 1 card com scroll horizontal; em tablet 2–3 cards; em desktop 4–5 cards
- [ ] **6A.11** Painel "Próximos Prazos": garantir que tabs de perfil em mobile fazem scroll horizontal se não couberem na tela

### Checkpoint

```
✅ Site funcional e legível em 320px sem scroll horizontal indesejado
✅ Site funcional em 375px, 414px, 768px, 1024px, 1440px
✅ Filtros acessíveis em mobile via bottom sheet
✅ MonthNav com scroll horizontal suave em mobile
✅ Cards expandidos com texto longo não quebram layout
✅ Painel "Próximos Prazos": cards visíveis conforme breakpoint (1 / 2-3 / 4-5)
✅ Tabs de perfil acessíveis em todas as viewports
```

---

## SPRINT 6B — ACESSIBILIDADE

**Objetivo:** Conformidade WCAG AA — navegação por teclado, ARIA, contraste e compatibilidade com leitores de tela.

### Tarefas

- [ ] **6B.1** Implementar navegação completa por **teclado**: Tab navega entre cards, Enter expande/colapsa, Escape fecha card aberto e fecha painel de filtros
- [ ] **6B.2** Adicionar atributos **ARIA**: `aria-expanded` nos cards, `aria-label` nos botões de filtro, `role="region"` nas seções mensais, `aria-live="polite"` no contador de eventos filtrados
- [ ] **6B.3** Verificar **contraste** de todas as combinações texto/fundo (mínimo 4.5:1 para texto normal, 3:1 para texto grande)
- [ ] **6B.4** Verificar tamanho mínimo de toque: **44x44px** em todos os elementos clicáveis (incluindo tabs de perfil e PrazoCards)
- [ ] **6B.5** Adicionar `@media (prefers-reduced-motion: reduce)` para desabilitar animações
- [ ] **6B.6** Garantir que tabs de perfil no painel "Próximos Prazos" sejam navegáveis por teclado (setas ← → entre tabs, Enter para selecionar) e com `role="tablist"` / `role="tab"` / `aria-selected`
- [ ] **6B.7** Testar com leitor de tela (VoiceOver ou NVDA) — fluxo básico: navegar pelos meses, abrir um card, ouvir descrição, clicar em link de legislação; navegar pelo painel de próximos prazos

### Checkpoint (VALIDAÇÃO COMPLETA DA SPRINT 6)

```
✅ Tab navega sequencialmente pelos cards
✅ Enter expande/colapsa card focado
✅ Escape fecha elementos abertos
✅ Todos os botões e links possuem aria-label ou texto acessível
✅ Contraste mínimo 4.5:1 em todo texto normal
✅ Tamanho mínimo de toque 44x44px (incluindo PrazoCards e tabs de perfil)
✅ Animações desabilitadas com prefers-reduced-motion
✅ Tabs de perfil navegáveis por teclado com roles ARIA corretos
✅ Lighthouse Accessibility ≥ 95
```

---

## SPRINT 7A — POLISH E PERFORMANCE

**Objetivo:** Microinterações refinadas e otimização de performance de renderização e bundle.

### Tarefas

**Microinterações:**

- [ ] **7A.1** Transição hover nos cards (elevação sutil `shadow-sm → shadow-md`, 200ms)
- [ ] **7A.2** Transição nos chips de categoria ao ativar/desativar filtro
- [ ] **7A.3** Scroll suave global (`scroll-behavior: smooth` no html)
- [ ] **7A.4** Flash sutil de cor ao clicar em mês no MonthNav
- [ ] **7A.5** Animação fade-in da contagem regressiva ao carregar
- [ ] **7A.6** Transição suave ao trocar tab de perfil no painel "Próximos Prazos" (fade nos cards)

**Performance:**

- [ ] **7A.7** Verificar fluidez de renderização de ~235 cards; se necessário, implementar lazy rendering por mês via Intersection Observer
- [ ] **7A.8** Verificar bundle size (`npm run build` + análise) — alvo: < 300KB gzipped
- [ ] **7A.9** Otimizar imports do Lucide (tree-shaking: importar apenas ícones usados)
- [ ] **7A.10** Verificar ausência de re-renders desnecessários (React DevTools Profiler) — atenção especial ao `useProximosPrazos` e ao painel de próximos prazos ao trocar de tab

### Checkpoint

```
✅ Hover nos cards com transição suave
✅ Troca de tab de perfil com transição suave nos cards
✅ Scroll suave funcional
✅ Renderização fluida sem jank em scroll rápido
✅ Bundle size < 300KB gzipped
✅ Sem re-renders desnecessários detectados no Profiler
```

---

## SPRINT 7B — SEO E META

**Objetivo:** Configurar metadados completos para indexação e compartilhamento em redes sociais.

### Tarefas

- [ ] **7B.1** Configurar `<title>`: "Calendário Eleitoral 2026 — Resolução TSE nº 23.760"
- [ ] **7B.2** Configurar `<meta name="description">` com texto descritivo
- [ ] **7B.3** Configurar Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] **7B.4** Configurar Twitter Card tags
- [ ] **7B.5** Criar imagem OG (1200x630px) para compartilhamento em redes sociais
- [ ] **7B.6** Adicionar `<link rel="canonical">` com URL de produção
- [ ] **7B.7** Criar `robots.txt` e `sitemap.xml` básicos

### Checkpoint

```
✅ Title e description configurados
✅ OG tags configuradas (testar com Facebook Sharing Debugger)
✅ Twitter Cards configuradas (testar com Twitter Card Validator)
✅ Imagem OG criada e referenciada
✅ robots.txt e sitemap.xml presentes
```

---

## SPRINT 7C — COLETA DE URLs DE LEGISLAÇÃO

**Objetivo:** Inventariar todas as normas referenciadas nos eventos, receber as URLs do usuário e inserir os links no arquivo de dados.

**⚠️ ETAPA COLABORATIVA — Depende do fornecimento das URLs pelo usuário (Wesley).**

### Tarefas

- [ ] **7C.1** Gerar inventário completo de todas as normas distintas referenciadas no campo `fundamentacao[]` de todos os eventos (ex: "Lei nº 9.504/1997", "Resolução TSE nº 23.760/2026", "Lei nº 4.737/1965" etc.)
- [ ] **7C.2** Organizar o inventário em formato de tabela com colunas: `norma | quantidade de ocorrências | url (a preencher)`
- [ ] **7C.3** Apresentar a tabela ao usuário para preenchimento das URLs
- [ ] **7C.4** Receber as URLs fornecidas pelo usuário e validar formato (devem apontar para `planalto.gov.br` ou `tse.jus.br/legislacao/compilada`)
- [ ] **7C.5** Inserir as URLs no campo `fundamentacao[].url` de todos os eventos correspondentes no arquivo `eventos.ts`
- [ ] **7C.6** Para normas cujo usuário não fornecer URL, manter campo vazio e renderizar chip como texto não-clicável
- [ ] **7C.7** Atualizar os chips de legislação nos cards: normas com URL viram links clicáveis; normas sem URL permanecem como texto

### Checkpoint

```
✅ Inventário completo de normas gerado (lista de todas as normas distintas)
✅ URLs fornecidas pelo usuário inseridas corretamente no eventos.ts
✅ Amostragem: 10 links de legislação abrem corretamente em nova aba
✅ Chips com URL renderizam como links clicáveis
✅ Chips sem URL renderizam como texto não-clicável (sem erro de navegação)
✅ Nenhuma URL inventada ou genérica no arquivo
```

---

## SPRINT 7D — SEGURANÇA, DEPLOY E DOCUMENTAÇÃO

**Objetivo:** Configurar headers de segurança, publicar em produção e documentar o projeto.

### Tarefas

**Segurança:**

- [ ] **7D.1** Criar `netlify.toml` (ou `vercel.json`) com headers de segurança:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; script-src 'self'`
- [ ] **7D.2** Configurar HTTPS obrigatório (redirect HTTP → HTTPS)
- [ ] **7D.3** Verificar rating no securityheaders.com — alvo: A+

**Deploy:**

- [ ] **7D.4** Build de produção: `npm run build` sem erros nem warnings
- [ ] **7D.5** Deploy no Netlify (ou Vercel) conectado ao repositório Git
- [ ] **7D.6** Configurar domínio customizado (se houver)
- [ ] **7D.7** Testar site em produção: navegação completa, filtros, links, countdown, painel de próximos prazos

**Documentação:**

- [ ] **7D.8** Criar/atualizar `README.md` com: descrição do projeto, como rodar localmente, como fazer deploy, estrutura de pastas, como adicionar/editar eventos, explicação do campo `perfis[]` e dos critérios de atribuição
- [ ] **7D.9** Criar `CHANGELOG.md` com registro da v1.0

**Lighthouse:**

- [ ] **7D.10** Rodar Lighthouse em produção — **alvo: ≥ 90 nas 4 categorias**

### Checkpoint FINAL DO PROJETO

```
✅ Site publicado e acessível via URL pública com HTTPS
✅ Todos os ~235 eventos renderizados corretamente
✅ Filtros funcionais: categorias, ocultar passados, busca, turno
✅ Painel "Próximos Prazos" funcional: tabs de perfil filtram corretamente, localStorage persiste seleção
✅ Links de legislação funcionais (normas com URL fornecida abrem em nova aba)
✅ Normas sem URL fornecida exibidas como texto não-clicável
✅ Countdown exibindo contagem correta
✅ Mobile (375px): layout correto, filtros acessíveis, scroll suave, painel de prazos com 1 card
✅ Desktop (1440px): layout elegante com sidebar de filtros, painel de prazos com 4-5 cards
✅ Lighthouse Performance ≥ 90
✅ Lighthouse Accessibility ≥ 95
✅ Lighthouse Best Practices ≥ 90
✅ Lighthouse SEO ≥ 90
✅ securityheaders.com rating ≥ A
✅ Nenhum erro no console do navegador
✅ README.md documentado (inclui explicação do campo perfis[])
✅ CHANGELOG.md criado
✅ Disclaimer jurídico presente no footer
```

---

## REGRAS GLOBAIS PARA A IA

```
1. NUNCA pule uma sprint ou sub-etapa. Execute na ordem sequencial.

2. NUNCA avance para a próxima sprint/etapa sem que TODOS os itens do
   checkpoint de validação estejam atendidos.

3. Use EXATAMENTE a stack definida:
   React 18+ / TypeScript / Tailwind / shadcn/ui / Lucide / Vite.

4. NUNCA instale bibliotecas não previstas sem justificativa explícita.

5. Os dados dos eventos vêm EXCLUSIVAMENTE da Resolução TSE nº 23.760/2026.
   NUNCA invente eventos. NUNCA omita eventos.

6. Links de legislação:
   — As URLs serão FORNECIDAS PELO USUÁRIO na Sprint 7C.
   — Durante as Sprints 1A–1C, o campo url em fundamentacao[] deve ficar vazio ("").
   — Quando fornecidas, devem apontar para:
     • planalto.gov.br (leis federais)
     • tse.jus.br/legislacao/compilada (resoluções TSE)
   — NUNCA use links genéricos, inventados ou preenchidos pela IA.

7. Textos da Resolução devem ser transcritos LITERALMENTE no campo descricao.
   Resumos vão apenas no campo titulo (max 120 chars).

8. Campo perfis[]:
   — Perfis válidos: 'eleitor' | 'candidato' | 'partido' | 'advogado'
   — NUNCA inserir 'servidor' — servidores veem todos os eventos sem filtro
   — Atribuir conforme critérios da seção 4.1 do PRD (destinatário explícito + relevância prática)
   — Eventos sem perfil identificável: perfis: []

9. Paleta de cores: seguir RIGOROSAMENTE o PRD.
   PROIBIDO: degradês lilás/roxo, cores partidárias, cores "vibe coding".

10. Mobile-first: todo componente deve ser pensado e testado
    primeiro em 375px, depois expandido para desktop.

11. A cada sprint/etapa concluída, listar explicitamente o que foi feito
    e o resultado de cada item do checkpoint.

12. Se encontrar ambiguidade no PRD, PERGUNTE antes de decidir.

13. Credenciais, chaves de API ou dados sensíveis: NÃO SE APLICA.
    Este projeto é 100% estático e público.
```

---

## ESTIMATIVA DE ESFORÇO (REVISADA)

| Sprint                                               | Complexidade         | Estimativa  |
| ---------------------------------------------------- | -------------------- | ----------- |
| 0 — Fundação                                         | Baixa                | ~30 min     |
| 1A — Dados: Estrutura + Período Inicial              | Média                | ~1h         |
| 1B — Dados: Período Denso (Jul-Ago) + revisão perfis | Alta                 | ~2h         |
| 1C — Dados: Período Final + Validação                | Alta                 | ~1.5h       |
| 2A — Timeline: Componentes Base                      | Média                | ~1h         |
| 2B — Timeline: Container e Navegação                 | Média                | ~1h         |
| 3A — Cards: Expand/Collapse                          | Média-Baixa          | ~45 min     |
| 3B — Cards: Legislação e Estilos                     | Média-Baixa          | ~45 min     |
| 4A — Filtros: Lógica e Hooks                         | Média-Alta           | ~1h         |
| 4B — Filtros: UI e Integração                        | Média-Alta           | ~1h         |
| 5A — Header e Hero                                   | Média-Baixa          | ~45 min     |
| 5B — Próximos Prazos, Footer e Integração            | Média-Alta           | ~1h         |
| 6A — Responsividade                                  | Média                | ~1h         |
| 6B — Acessibilidade                                  | Média                | ~1h         |
| 7A — Polish e Performance                            | Média                | ~45 min     |
| 7B — SEO e Meta                                      | Baixa                | ~30 min     |
| 7C — Coleta de URLs de Legislação                    | Média (colaborativa) | ~1h         |
| 7D — Segurança, Deploy e Docs                        | Média                | ~45 min     |
| **Total**                                            |                      | **~16–18h** |
