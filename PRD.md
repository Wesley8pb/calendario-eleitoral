# PRD — Calendário Eleitoral Interativo das Eleições 2026

**Produto:** Calendário Eleitoral 2026 — Timeline Interativa  
**Versão:** 1.1  
**Autor:** Wesley Wagner de Brito Silva — 56ª ZE/Juazeirinho-PB  
**Base normativa:** Resolução TSE nº 23.760/2026 (Instrução nº 0600273-13.2026.6.00.0000)  
**Data:** 04/03/2026 | **Atualizado em:** 05/03/2026  
**Status:** Em elaboração

---

## 1. VISÃO DO PRODUTO

### 1.1 Problema

O calendário eleitoral das Eleições Gerais 2026, consolidado na Resolução TSE nº 23.760/2026, contém mais de **250 eventos** distribuídos ao longo de **30 meses** (outubro/2025 a abril/2028), com referências cruzadas a dezenas de normas. O formato publicado no DJE (texto corrido, sem hierarquia visual) torna a consulta difícil para o público em geral, para operadores do Direito Eleitoral e para servidores da Justiça Eleitoral. Não existe, hoje, uma ferramenta oficial interativa que permita filtrar, pesquisar e navegar por essas datas de forma intuitiva.

### 1.2 Solução

Um site single-page, institucional e de alta qualidade visual, que apresenta todos os eventos do calendário eleitoral em uma **timeline vertical mês a mês**, com sistema de filtros avançados, cards expandíveis com detalhes e links diretos para a legislação citada. O produto é voltado ao **público em geral** — eleitores, candidatos, partidos, advogados, servidores e imprensa.

### 1.3 Proposta de Valor

- **Acessibilidade normativa:** transformar um documento de 43 páginas em uma experiência navegável e compreensível.
- **Utilidade prática:** filtros por categoria, mês e status (passado/futuro) permitem que cada público encontre rapidamente o que precisa.
- **Confiabilidade institucional:** design sóbrio, fundamentação normativa explícita e links verificáveis para legislação oficial.
- **Responsividade total:** experiência otimizada para dispositivos móveis, onde a maioria do público acessa.

---

## 2. PÚBLICO-ALVO

| Persona                              | Necessidade principal                                                                  | Comportamento esperado                                                                     |
| ------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Eleitor(a) comum**                 | Saber prazos que afetam diretamente seu título (alistamento, biometria, justificativa) | Acessa pelo celular, busca por palavras-chave simples, precisa de linguagem clara          |
| **Pré-candidato(a) / Assessoria**    | Acompanhar prazos de desincompatibilização, convenção, registro, propaganda            | Filtra por categorias específicas, consulta frequentemente, precisa dos fundamentos legais |
| **Advogado(a) Eleitoral**            | Verificar prazos processuais, bases legais, datas de representações e recursos         | Clica nos links das legislações, precisa de citação exata da norma                         |
| **Servidor(a) da Justiça Eleitoral** | Planejar atividades do cartório, preparação de urnas, mesários, logística              | Filtra por categorias administrativas, usa como ferramenta de planejamento                 |
| **Partido Político / Federação**     | Acompanhar prazos de convenção, FEFC, propaganda, prestação de contas                  | Filtra por categorias financeiras e de propaganda                                          |
| **Imprensa**                         | Consultar próximos marcos relevantes do processo eleitoral                             | Visualiza eventos futuros, busca datas-chave para pautas                                   |

---

## 3. CATEGORIAS DE EVENTOS

A categorização é o pilar da filtragem. Cada evento do calendário será classificado em **uma ou mais** das categorias abaixo, derivadas da natureza dos atos previstos na Resolução:

| ID    | Categoria                    | Cor (sugestão)                | Ícone Lucide  | Descrição                                                                                                 |
| ----- | ---------------------------- | ----------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `ELE` | **Eleitor**                  | Azul TSE `#003E7E`            | `User`        | Prazos que afetam diretamente o eleitor (alistamento, biometria, justificativa, título, voto em trânsito) |
| `REG` | **Registro de Candidatura**  | Verde institucional `#1B6B4A` | `FileCheck`   | Convenções, pedidos de registro, substituição, julgamento de registros                                    |
| `PRO` | **Propaganda Eleitoral**     | Laranja `#C75C00`             | `Megaphone`   | Propaganda em rádio/TV, internet, imprensa, comícios, alto-falantes, debates, impulsionamento             |
| `FIN` | **Financiamento e Contas**   | Dourado `#8B6914`             | `Landmark`    | FEFC, fundo partidário, arrecadação, prestação de contas parcial e final, doações                         |
| `ADM` | **Administração Eleitoral**  | Cinza-azulado `#3D5A80`       | `Building2`   | Preparação de urnas, mesários, juntas, logística, cessão de servidores, transporte                        |
| `FIS` | **Fiscalização e Auditoria** | Índigo `#2E4057`              | `ShieldCheck` | TPS, lacração, teste de integridade, Comissão de Auditoria, entidades fiscalizadoras                      |
| `CON` | **Condutas Vedadas**         | Vermelho `#B91C1C`            | `Ban`         | Proibições à administração pública, publicidade institucional, distribuição de bens                       |
| `VOT` | **Votação e Apuração**       | Azul-escuro `#1E3A5F`         | `Vote`        | Dia da eleição (1º e 2º turno), procedimentos de votação, totalização, boletins de urna                   |
| `PES` | **Pesquisas Eleitorais**     | Ciano `#0E7490`               | `BarChart3`   | Registro de pesquisas, divulgação, enquetes                                                               |
| `DIP` | **Pós-Eleição e Diplomação** | Verde-escuro `#14532D`        | `Award`       | Diplomação, encerramento de contas bancárias, cancelamento de CNPJ, prazos finais                         |

---

## 4. ESTRUTURA DE DADOS DOS EVENTOS

Cada evento será representado como um objeto com a seguinte estrutura:

```typescript
type Perfil = "eleitor" | "candidato" | "partido" | "advogado";

interface EventoCalendario {
  id: string; // Identificador único (ex: "2026-10-04-1")
  data: string; // Data no formato ISO "YYYY-MM-DD"
  diaSemana: string; // Ex: "sábado"
  titulo: string; // Resumo curto do evento (max 120 chars)
  descricao: string; // Texto completo do evento conforme Resolução
  categorias: CategoriaID[]; // Array de IDs de categoria (multi-categoria)
  perfis: Perfil[]; // Perfis para os quais o evento é relevante.
  // Array vazio = relevante para todos (visão geral).
  // Servidores sempre veem todos os eventos.
  marcos: string | null; // Marcos temporais especiais (ex: "1 ano antes do 1º turno")
  turno: "1T" | "2T" | "AMBOS" | null; // Relação com turno
  fundamentacao: Fundamentacao[]; // Referências legais
  observacoes?: string; // Notas complementares para o público leigo
  destaque?: boolean; // Eventos de maior relevância pública
}

interface Fundamentacao {
  norma: string; // Ex: "Lei nº 9.504/1997"
  dispositivo: string; // Ex: "art. 91, caput"
  url: string; // Link para legislação compilada (TSE ou Planalto)
}

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
  | "DIP";
```

### 4.1 Critérios de atribuição do campo `perfis[]`

A atribuição de perfis a cada evento segue dois critérios objetivos, aplicados durante o mapeamento da Resolução (Sprint 1B):

**Critério 1 — Destinatário explícito no texto da Resolução.** Se o dispositivo menciona expressamente "candidatos", "partidos", "eleitores", "advogados" etc., o perfil correspondente é obrigatório.

**Critério 2 — Relevância prática.** Quando o prazo impacta um direito ou uma ação concreta do perfil — mesmo que não mencionado expressamente no texto —, o perfil é incluído por relevância operacional. Ex: prazo de transferência de domicílio eleitoral inclui `eleitor` mesmo que o dispositivo não use o termo.

**Regra de fallback:** eventos sem perfil identificável pelos critérios acima recebem `perfis: []`, ficando visíveis apenas na visão geral (sem filtro de perfil ativo).

---

## 5. FUNCIONALIDADES

### 5.1 Timeline Vertical (Core)

A funcionalidade principal é a apresentação dos eventos em uma **timeline vertical**, organizada cronologicamente e agrupada por mês/ano.

**Comportamento:**

- Cada mês é uma seção com cabeçalho sticky contendo nome do mês, ano e contador de eventos.
- Dentro de cada mês, os eventos aparecem como **cards** na timeline, ordenados por data.
- A linha vertical da timeline conecta visualmente os meses.
- Eventos na mesma data são agrupados sob o mesmo marcador de data.
- O marcador de data exibe: dia, dia da semana e, quando aplicável, o marco temporal (ex: "60 dias antes do 1º turno").
- **Scroll suave** entre seções, com a possibilidade de clicar em um mês no navegador para saltar diretamente.

**Card do evento (estado fechado):**

- Indicador colorido da(s) categoria(s) (borda lateral ou badge).
- Ícone(s) da(s) categoria(s).
- Título resumido do evento.
- Badge de turno (1T/2T/Ambos) quando aplicável.
- Badge "Expirado" ou "Próximo" conforme status temporal.
- Indicador visual de que é expandível (chevron).

**Card do evento (estado expandido):**

- Descrição completa extraída da Resolução.
- Bloco "Observações" com linguagem simplificada para o público leigo (quando houver).
- Seção "Base Legal" com referências normativas como chips/badges clicáveis que abrem o link em nova aba.
- Botão "Compartilhar" para copiar link direto do evento.
- Animação suave de expansão/colapso.

### 5.2 Barra de Navegação por Meses

**Componente:** Barra horizontal fixa (sticky) no topo ou abaixo do header, com scroll horizontal em mobile.

**Comportamento:**

- Lista dos meses do calendário (Out/2025 a Abr/2028) como chips/botões.
- O mês atualmente visível na viewport fica destacado (highlight automático via Intersection Observer).
- Ao clicar em um mês, o scroll salta suavemente para aquela seção.
- Meses sem eventos ficam visualmente esmaecidos.
- Em mobile, comportamento de scroll horizontal com snap.
- Indicador visual do mês atual (hoje).

### 5.3 Sistema de Filtros Avançados

**Localização:** Painel lateral em desktop (drawer retrátil) / bottom sheet ou modal em mobile.

**Filtros disponíveis:**

| Filtro                       | Tipo                                        | Comportamento                                                                                           |
| ---------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Ocultar eventos passados** | Toggle (switch)                             | Remove da visualização todos os eventos cuja data já passou. Ativado por padrão: NÃO.                   |
| **Categorias**               | Multi-select com chips coloridos            | Filtra eventos que contenham pelo menos uma das categorias selecionadas. Todas selecionadas por padrão. |
| **Turno**                    | Single-select (1º Turno / 2º Turno / Todos) | Filtra eventos pelo turno associado. "Todos" por padrão.                                                |
| **Busca textual**            | Input de texto com debounce (300ms)         | Pesquisa no título, descrição e fundamentação legal. Highlight dos termos encontrados no texto.         |
| **Mês/Período**              | Range selector ou multi-select de meses     | Filtra por intervalo ou meses específicos.                                                              |

**Comportamento geral dos filtros:**

- Os filtros são combinados com lógica AND entre tipos e OR dentro de multi-selects.
- Contador de "Exibindo X de Y eventos" sempre visível.
- Botão "Limpar filtros" restaura o estado padrão.
- Estado dos filtros é mantido na URL (query params) para permitir compartilhamento de buscas filtradas.
- Ao filtrar, meses que ficam vazios são automaticamente ocultados.

### 5.4 Contagem Regressiva

**Localização:** Hero section, no topo da página.

**Comportamento:**

- Conta regressivamente até o **1º turno (04/10/2026)**.
- Após o 1º turno, muda automaticamente para o **2º turno (25/10/2026)**.
- Após o 2º turno, exibe mensagem estática "Eleições 2026 realizadas" (sem contagem adicional).
- Formato: Dias / Horas / Minutos / Segundos.
- Atualização em tempo real (setInterval de 1s).

### 5.5 Header Institucional

- Título: "Calendário Eleitoral — Eleições 2026"
- Subtítulo: "Resolução TSE nº 23.760/2026"
- Link para download da resolução completa (PDF no site do TSE).
- Logo/brasão institucional opcional (se aplicável à zona eleitoral ou TRE).
- Descrição breve: "Todos os prazos e datas do processo eleitoral, organizados para você."

### 5.6 Painel "Próximos Prazos" com Filtro por Perfil

**Localização:** Seção fixa entre o Hero/Countdown e o início da Timeline principal.

**Descrição:**
Painel horizontal que exibe os próximos eventos a partir da data atual, com tabs de perfil para personalização da visualização. Funciona como ponto de entrada rápido para os prazos mais imediatos, sem necessidade de rolar a timeline.

**Layout:**

```
┌──────────────────────────────────────────────────────────┐
│  PRÓXIMOS PRAZOS                                         │
│  [ Todos ] [ Eleitor ] [ Candidato ] [ Partido ] [ Adv ] │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  →     │
│  │ 15/03/2026  │ │ 22/03/2026  │ │ 01/04/2026  │        │
│  │ Título do   │ │ Título do   │ │ Título do   │        │
│  │ evento...   │ │ evento...   │ │ evento...   │        │
│  │ [categoria] │ │ [categoria] │ │ [categoria] │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
└──────────────────────────────────────────────────────────┘
```

**Tabs de perfil:**

| Tab           | Comportamento                                                                    |
| ------------- | -------------------------------------------------------------------------------- |
| **Todos**     | Exibe os próximos eventos sem filtro de perfil (padrão). Equivale à visão geral. |
| **Eleitor**   | Exibe apenas eventos com `perfis` contendo `'eleitor'`.                          |
| **Candidato** | Exibe apenas eventos com `perfis` contendo `'candidato'`.                        |
| **Partido**   | Exibe apenas eventos com `perfis` contendo `'partido'`.                          |
| **Advogado**  | Exibe apenas eventos com `perfis` contendo `'advogado'`.                         |

**Comportamento:**

- Exibe os próximos **5 eventos** a partir de `new Date()`, filtrados pelo perfil ativo no tab selecionado.
- Scroll horizontal em mobile com snap entre os cards.
- Em desktop, os cards são exibidos lado a lado em linha (overflow-x: auto se necessário).
- O tab selecionado persiste em `localStorage` — na próxima visita, o usuário já encontra o painel filtrado pelo seu perfil.
- Cada card exibe: data formatada, título do evento, badge de categoria (com cor), e badge de urgência ("Hoje", "Esta semana", "Em X dias") conforme proximidade.
- Clicar em um card faz scroll suave até o evento correspondente na timeline principal e o expande automaticamente.
- Se não houver eventos futuros para o perfil selecionado, exibir mensagem: "Nenhum prazo próximo para este perfil."
- Tab "Todos" nunca exibe essa mensagem enquanto houver eventos futuros no calendário.

**Responsividade:**

- Mobile (< 768px): 1 card visível + scroll horizontal. Tabs em scroll horizontal se necessário.
- Tablet (768px–1024px): 2–3 cards visíveis.
- Desktop (≥ 1024px): 4–5 cards visíveis.

**Relação com o campo `perfis[]`:**
O painel consome diretamente o campo `perfis: Perfil[]` de cada `EventoCalendario`. A lógica de filtragem é idêntica à do hook `useFilteredEvents`, podendo ser encapsulada em um hook dedicado `useProximosPrazos(perfil: Perfil | 'todos', quantidade: number)`.

### 5.7 Indicadores de Destaque

Eventos de alto impacto público recebem tratamento visual diferenciado:

**Eventos sugeridos para destaque:**

- 04/04/2026 — Prazo final para filiação partidária e domicílio eleitoral dos candidatos
- 06/05/2026 — Último dia para regularizar título eleitoral
- 20/07 a 05/08/2026 — Período de convenções partidárias
- 15/08/2026 — Último dia para registro de candidaturas
- 16/08/2026 — Início da propaganda eleitoral
- 28/08/2026 — Início da propaganda em rádio/TV
- 01/10/2026 — Último dia para comícios, propaganda em rádio/TV e impulsionamento pago na internet (1º turno)
- 03/10/2026 — Último dia para alto-falantes, carreatas, passeatas e distribuição de material gráfico (1º turno)
- 04/10/2026 — 1º Turno
- 22/10/2026 — Último dia para comícios, propaganda em rádio/TV e impulsionamento pago na internet (2º turno)
- 24/10/2026 — Último dia para alto-falantes, carreatas, passeatas e distribuição de material gráfico (2º turno)
- 25/10/2026 — 2º Turno
- 03/11/2026 — Prazo final para prestação de contas referentes ao 1º turno
- 14/11/2026 — Prazo final para prestação de contas referentes ao 2º turno
- 18/12/2026 — Último dia para diplomação dos eleitos

**Tratamento visual:** Card com borda mais espessa, badge "Destaque" e/ou fundo sutilmente diferenciado.

### 5.8 Acessibilidade e Inclusão

- HTML semântico (landmarks, headings hierárquicos, listas).
- Navegação completa por teclado (Tab, Enter, Escape nos modais).
- Atributos ARIA em componentes interativos (aria-expanded, aria-label, role).
- Contraste mínimo WCAG AA (4.5:1 para texto, 3:1 para elementos gráficos).
- Textos alternativos em ícones decorativos.
- Tamanho mínimo de toque: 44x44px.
- Resposta a `prefers-reduced-motion` (desabilita animações).
- Resposta a `prefers-color-scheme` (preparar para dark mode futuro).

---

## 6. DESIGN E IDENTIDADE VISUAL

### 6.1 Princípios de Design

| Princípio                       | Diretriz                                                                                                                                       |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Institucional**               | O site representa a Justiça Eleitoral. O design transmite seriedade, confiança e neutralidade política.                                        |
| **Elegante sem ser decorativo** | Uso estratégico de espaço em branco, tipografia refinada e microinterações sutis. Zero elementos desnecessários.                               |
| **Sem cores partidárias**       | Evitar combinações que remetam a partidos ou movimentos políticos. Proibido: degradês lilás/roxo, verde-amarelo excessivo, vermelho dominante. |
| **Mobile-first**                | A experiência no celular é a experiência primária. Desktop é uma expansão, não o contrário.                                                    |
| **Legibilidade máxima**         | Nenhuma informação sacrificada por estética. Textos longos da resolução devem ser legíveis e bem formatados.                                   |

### 6.2 Paleta de Cores

**Cor primária (institucional):**

- `--primary-900: #0C2340` — Azul-marinho profundo (headers, textos de destaque)
- `--primary-700: #003E7E` — Azul TSE (botões primários, links, timeline)
- `--primary-500: #1A6FB5` — Azul médio (hover states, badges)
- `--primary-100: #E8F1FA` — Azul muito claro (backgrounds sutis)

**Cor secundária (warmth):**

- `--secondary-700: #92652B` — Dourado escuro (acentos, destaques)
- `--secondary-500: #C9924D` — Dourado (badges especiais)
- `--secondary-100: #FDF6EC` — Creme (backgrounds de destaque)

**Neutros:**

- `--neutral-950: #0F1419` — Quase preto (textos principais)
- `--neutral-700: #374151` — Cinza escuro (textos secundários)
- `--neutral-400: #9CA3AF` — Cinza médio (placeholders, bordas)
- `--neutral-100: #F3F4F6` — Cinza claro (backgrounds)
- `--neutral-50: #F9FAFB` — Quase branco (base da página)
- `--white: #FFFFFF` — Branco (cards)

**Semânticas (para categorias e estados):**

- Cada categoria possui sua cor conforme tabela da Seção 3.
- `--success: #059669` — Verde (evento futuro/ativo)
- `--warning: #D97706` — Âmbar (evento próximo, dentro de 7 dias)
- `--muted: #9CA3AF` — Cinza (evento passado)

### 6.3 Tipografia

- **Headings:** Inter (Google Fonts) — peso 600/700. Alternativa: system-ui.
- **Body text:** Inter — peso 400/500.
- **Monospace (referências legais):** JetBrains Mono ou `font-mono` do Tailwind.
- **Escalas:** text-sm (cards), text-base (corpo), text-lg (subtítulos), text-xl a text-3xl (headings).

### 6.4 Componentes Visuais

**Cards dos eventos:**

- Fundo branco com sombra sutil (`shadow-sm`), borda arredondada (`rounded-xl`).
- Borda lateral colorida (4px) indicando a categoria primária.
- Hover: elevação sutil (`shadow-md`) com transição de 200ms.
- Estado expandido: conteúdo revelado com animação slide-down.

**Timeline:**

- Linha vertical contínua (`2px`, cor `primary-200`).
- Nós da timeline: círculos de 12px na cor da categoria, com ring externo.
- Marcadores de data: pill/badge com dia + dia da semana.
- Marcos temporais: badge com fundo `secondary-100` e texto `secondary-700`.

**Filtros:**

- Chips de categoria: retângulo arredondado com ícone + nome + cor, toggle on/off.
- Switch para "ocultar passados": estilo iOS-like.
- Input de busca: com ícone de lupa, placeholder "Pesquisar eventos, leis...".

**Hero section:**

- Fundo com gradiente sutil de `primary-900` para `primary-700`.
- Texto branco com drop-shadow mínimo.
- Contagem regressiva em blocos separados (dias, horas, min, seg) com fundo `white/10` (glassmorphism leve).

**Painel "Próximos Prazos":**

- Fundo `neutral-50` com borda inferior sutil separando do restante do conteúdo.
- Tabs de perfil: estilo underline, tab ativo com cor `primary-700` e borda inferior de 2px.
- Cards de prazo: fundo branco, `rounded-lg`, `shadow-sm`, borda lateral colorida pela categoria primária do evento.
- Badge de urgência: "Hoje" em vermelho, "Esta semana" em âmbar, demais em cinza neutro.

---

## 7. ARQUITETURA TÉCNICA

### 7.1 Stack

| Camada             | Tecnologia               | Justificativa                                             |
| ------------------ | ------------------------ | --------------------------------------------------------- |
| **Framework**      | React 18+ com TypeScript | Componentização, tipagem, ecossistema robusto             |
| **Estilização**    | Tailwind CSS 3.x         | Utility-first, responsividade nativa, consistência        |
| **Componentes UI** | shadcn/ui                | Componentes acessíveis, customizáveis, sem vendor lock-in |
| **Ícones**         | Lucide React             | Leve, consistente, ampla biblioteca                       |
| **Build**          | Vite                     | Build rápido, HMR, otimização para produção               |
| **Deploy**         | Netlify ou Vercel        | CDN global, HTTPS automático, CI/CD integrado             |
| **Dados**          | JSON estático embarcado  | Sem backend — todos os dados são públicos e estáticos     |

### 7.2 Estrutura de Pastas

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Header institucional + hero
│   │   ├── Footer.tsx           # Créditos, links institucionais
│   │   └── MonthNav.tsx         # Navegação por meses (sticky)
│   ├── timeline/
│   │   ├── Timeline.tsx         # Container principal da timeline
│   │   ├── MonthSection.tsx     # Seção mensal com header sticky
│   │   ├── DateMarker.tsx       # Marcador de data na timeline
│   │   ├── EventCard.tsx        # Card do evento (fechado/aberto)
│   │   └── EventDetail.tsx      # Conteúdo expandido do card
│   ├── filters/
│   │   ├── FilterPanel.tsx      # Painel de filtros (desktop sidebar / mobile sheet)
│   │   ├── CategoryFilter.tsx   # Chips de categoria
│   │   ├── SearchInput.tsx      # Busca textual
│   │   └── FilterSummary.tsx    # "Exibindo X de Y eventos"
│   ├── countdown/
│   │   └── Countdown.tsx        # Contagem regressiva
│   ├── proximos-prazos/         # NOVO
│   │   ├── ProximosPrazos.tsx   # Container do painel com tabs de perfil
│   │   ├── PerfilTabs.tsx       # Tabs: Todos / Eleitor / Candidato / Partido / Advogado
│   │   └── PrazoCard.tsx        # Card individual de prazo próximo
│   └── ui/                      # Componentes shadcn/ui customizados
│       ├── badge.tsx
│       ├── button.tsx
│       ├── switch.tsx
│       ├── sheet.tsx
│       └── ...
├── data/
│   ├── eventos.ts               # Array completo de EventoCalendario[]
│   ├── categorias.ts            # Definição das categorias
│   └── constants.ts             # Datas fixas (1T, 2T, diplomação)
├── hooks/
│   ├── useFilteredEvents.ts     # Lógica de filtragem combinada
│   ├── useCountdown.ts          # Timer da contagem regressiva
│   ├── useActiveMonth.ts        # Intersection Observer para mês ativo
│   ├── useUrlFilters.ts         # Sincronização filtros ↔ URL params
│   └── useProximosPrazos.ts     # NOVO — filtra próximos N eventos por perfil
├── lib/
│   ├── utils.ts                 # Utilitários (cn, formatDate, etc.)
│   └── search.ts                # Lógica de busca textual (normalize, tokenize)
├── types/
│   └── index.ts                 # Interfaces TypeScript (inclui Perfil e perfis[])
├── App.tsx
├── main.tsx
└── index.css                    # Tailwind directives + custom CSS
```

### 7.3 Hook `useProximosPrazos`

```typescript
// hooks/useProximosPrazos.ts
import { useMemo } from "react";
import type { EventoCalendario, Perfil } from "../types";

export function useProximosPrazos(
  eventos: EventoCalendario[],
  perfil: Perfil | "todos",
  quantidade: number = 5,
): EventoCalendario[] {
  return useMemo(() => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    return eventos
      .filter((e) => {
        const dataEvento = new Date(e.data);
        if (dataEvento < hoje) return false;
        if (perfil === "todos") return true;
        return e.perfis.includes(perfil);
      })
      .sort((a, b) => a.data.localeCompare(b.data))
      .slice(0, quantidade);
  }, [eventos, perfil, quantidade]);
}
```

### 7.4 Decisões Técnicas

**Por que JSON estático e não banco de dados?**
O calendário eleitoral é um documento público, fixo e imutável após publicação. Não há necessidade de CRUD, autenticação ou persistência. JSON embarcado garante velocidade máxima de carregamento, zero dependência de backend, facilidade de auditoria dos dados e impossibilidade de manipulação externa.

**Segurança:**

- Sem backend exposto, sem APIs, sem banco — superfície de ataque zero.
- Deploy em CDN com HTTPS obrigatório.
- Sem coleta de dados pessoais, sem cookies, sem rastreamento.
- Content Security Policy (CSP) configurado no deploy.
- Subresource Integrity (SRI) para dependências externas.
- Headers de segurança via configuração Netlify/Vercel (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).

**Performance:**

- Todos os dados carregados no bundle — zero latência de rede após carregamento inicial.
- Lazy loading de meses distantes via Intersection Observer (renderização condicional).
- Debounce na busca textual (300ms).
- `useMemo` para filtragem de eventos (evitar recálculo desnecessário).
- Imagens: zero imagens pesadas, ícones via SVG inline (Lucide).
- Meta: Lighthouse score alvo ≥ 95 em todas as categorias.

---

## 8. VOLUME DE DADOS ESTIMADO

| Mês/Ano            | Qtd. estimada de eventos                               |
| ------------------ | ------------------------------------------------------ |
| Out/2025           | 1                                                      |
| Dez/2025           | 4                                                      |
| Jan/2026           | 4                                                      |
| Mar/2026           | 2                                                      |
| Abr/2026           | 5                                                      |
| Mai/2026           | 5                                                      |
| Jun/2026           | 5                                                      |
| Jul/2026           | ~40 (mês mais denso — convenções, início campanha)     |
| Ago/2026           | ~45 (registro, propaganda, rádio/TV)                   |
| Set/2026           | ~25 (prestação parcial, lacração, contagem regressiva) |
| Out/2026           | ~60 (1T, 2T, totalização, auditorias, pós-eleição)     |
| Nov/2026           | ~15 (prestação de contas, remoção de propaganda)       |
| Dez/2026           | ~12 (diplomação, encerramentos)                        |
| Jan/2027           | 5                                                      |
| Mar/2027           | 1                                                      |
| Jun/2027           | 1                                                      |
| Jul/2027           | 2                                                      |
| Dez/2027           | 1                                                      |
| Abr/2028           | 1                                                      |
| **Total estimado** | **~235 eventos**                                       |

---

## 9. FLUXO DO USUÁRIO

```
[Acessa o site]
    │
    ▼
[Hero + Contagem Regressiva + Link para Resolução]
    │
    ▼
[Painel "Próximos Prazos" — tabs de perfil]        ← NOVO
    │
    ├──► [Seleciona perfil: Eleitor / Candidato / Partido / Advogado]
    │       │
    │       └──► [Visualiza cards filtrados] → [Clica no card] → Scroll + expande evento na timeline
    │
    ▼
[Barra de Navegação por Meses — sticky]
    │
    ├──► [Clica em mês] → Scroll automático para seção
    │
    ▼
[Timeline vertical — mês a mês]
    │
    ├──► [Visualiza cards dos eventos]
    │       │
    │       ├──► [Clica no card] → Expande detalhes
    │       │       │
    │       │       ├──► [Clica em link de legislação] → Abre em nova aba
    │       │       └──► [Clica em "Compartilhar"] → Copia URL do evento
    │       │
    │       └──► [Identifica cor/ícone da categoria]
    │
    ├──► [Abre painel de filtros]
    │       │
    │       ├──► [Ativa "Ocultar passados"]
    │       ├──► [Seleciona categorias]
    │       ├──► [Seleciona turno]
    │       ├──► [Digita busca textual]
    │       └──► [Visualiza contador "X de Y eventos"]
    │
    └──► [Scroll livre pela timeline]
```

---

## 10. REQUISITOS NÃO-FUNCIONAIS

| Requisito                 | Meta                          | Métrica                                           |
| ------------------------- | ----------------------------- | ------------------------------------------------- |
| **Tempo de carregamento** | < 2s no 4G                    | Largest Contentful Paint (LCP)                    |
| **Interatividade**        | < 100ms                       | Interaction to Next Paint (INP)                   |
| **Estabilidade visual**   | Zero layout shift             | Cumulative Layout Shift (CLS) < 0.1               |
| **Responsividade**        | Funcional em 320px+           | Teste em viewports 320, 375, 414, 768, 1024, 1440 |
| **Acessibilidade**        | WCAG 2.1 AA                   | Lighthouse Accessibility ≥ 95                     |
| **SEO**                   | Indexável pelo Google         | Meta tags, Open Graph, sitemap                    |
| **Segurança**             | Headers A+                    | securityheaders.com rating A+                     |
| **Compatibilidade**       | 2 últimas versões de browsers | Chrome, Firefox, Safari, Edge                     |
| **Disponibilidade**       | 99.9%                         | Garantida pela CDN (Netlify/Vercel)               |

---

## 11. CONTEÚDO DO FOOTER

- "Dados extraídos da Resolução TSE nº 23.760/2026, publicada no DJE/TSE em 04/03/2026."
- Link para a resolução completa no site do TSE.
- Aviso: "Este site tem caráter informativo. Para fins jurídicos, consulte sempre a publicação oficial no DJE/TSE."
- Créditos de desenvolvimento.
- Ano vigente.

---

## 12. ROADMAP DE DESENVOLVIMENTO

### Fase 1 — MVP (Entrega principal)

- [ ] Estruturação do projeto (Vite + React + TS + Tailwind + shadcn)
- [ ] Mapeamento e digitação de TODOS os eventos da Resolução em `eventos.ts` com campo `perfis[]`
- [ ] Componente Timeline com agrupamento mensal
- [ ] EventCard com estados fechado/expandido
- [ ] Links de legislação funcionais
- [ ] Filtro: ocultar eventos passados
- [ ] Filtro: por categorias
- [ ] Busca textual
- [ ] Navegação por meses (sticky)
- [ ] Contagem regressiva
- [ ] Painel "Próximos Prazos" com tabs de perfil
- [ ] Header e Footer institucionais
- [ ] Responsividade mobile-first
- [ ] Acessibilidade básica (keyboard nav, ARIA, contraste)
- [ ] Deploy em Netlify com HTTPS + headers de segurança
- [ ] Meta tags + Open Graph para compartilhamento

### Fase 2 — Melhorias (Pós-MVP)

- [ ] Filtro por turno (1T/2T)
- [ ] Filtro por período (range de meses)
- [ ] Sincronização filtros ↔ URL params (compartilhamento de busca)
- [ ] Botão "Compartilhar evento" (copia URL com anchor)
- [ ] Modo escuro (dark mode)
- [ ] PWA (Progressive Web App) — instalável no celular
- [ ] Notificações opcionais de prazos importantes (se PWA)
- [ ] Versão impressa / PDF do calendário filtrado

### Fase 3 — Expansões Futuras

- [ ] Calendário sincronizável com Google Calendar / Outlook (.ics)
- [ ] Integração com calendários regionais dos TREs
- [ ] Versão embeddable (iframe/widget) para sites de zonas eleitorais
- [ ] API JSON pública dos eventos (para reuso por outros projetos)

---

## 13. MÉTRICAS DE SUCESSO

| Indicador                              | Meta                                  |
| -------------------------------------- | ------------------------------------- |
| Lighthouse Performance                 | ≥ 95                                  |
| Lighthouse Accessibility               | ≥ 95                                  |
| Lighthouse Best Practices              | ≥ 95                                  |
| Lighthouse SEO                         | ≥ 95                                  |
| Tempo até primeiro filtro aplicado     | < 3 interações                        |
| Taxa de scroll até o final da timeline | > 40% dos visitantes                  |
| Compartilhamentos                      | Monitorar via analytics (anonimizado) |

---

## 14. RISCOS E MITIGAÇÕES

| Risco                                          | Impacto                                                                       | Mitigação                                                                                                   |
| ---------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Erro na transcrição de um evento da Resolução  | Alto — informação jurídica incorreta                                          | Revisão dupla contra o texto oficial; link para fonte original em cada evento; disclaimer no footer         |
| Atribuição incorreta de perfis nos eventos     | Médio — usuário recebe prazos irrelevantes ou deixa de ver prazos importantes | Revisão dos critérios de atribuição (seção 4.1) durante Sprint 1B; validação por amostragem antes do deploy |
| Volume de 235+ eventos torna o scroll lento    | Médio — UX degradada                                                          | Virtualização de lista (react-window) se necessário; lazy rendering por mês                                 |
| Alteração superveniente do calendário pelo TSE | Alto — dados desatualizados                                                   | Monitorar DJE/TSE; versionamento do JSON com data de atualização; aviso de "última atualização"             |
| Uso indevido para fins político-partidários    | Baixo — risco reputacional                                                    | Design neutro; zero referência partidária; disclaimer institucional                                         |

---

## 15. DEFINIÇÃO DE PRONTO (DoD)

O MVP será considerado pronto quando:

1. **Todos os ~235 eventos** da Resolução TSE nº 23.760/2026 estiverem cadastrados, categorizados e com o campo `perfis[]` preenchido conforme os critérios da seção 4.1.
2. A timeline renderizar corretamente em **mobile (375px)** e **desktop (1440px)**.
3. Os filtros de **categorias**, **ocultar passados** e **busca textual** funcionarem corretamente, inclusive combinados.
4. O painel **"Próximos Prazos"** exibir corretamente os eventos filtrados por cada perfil, com persistência do tab selecionado em `localStorage`.
5. **100% dos links de legislação** abrirem na página correta (Planalto ou TSE compilada).
6. O Lighthouse reportar **≥ 90** em todas as quatro categorias.
7. A navegação por **teclado** funcionar integralmente (Tab, Enter, Escape).
8. O site estiver **deployado** com HTTPS e headers de segurança configurados.
9. O **footer** contiver o disclaimer jurídico e link para a resolução original.
