# Eventos de âmbito regional TRE-PB — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Acrescentar ao calendário uma dimensão de âmbito regional (TRE-PB), ortogonal às categorias de assunto, com card diferenciado, link estruturado para o ato administrativo de origem e filtro próprio — entregando como primeiro dado o prazo de 11/09/2026 do Memorando-Circular nº 18/2026 - TRE-PB/PTRE/DG/STIC.

**Architecture:** Dois campos opcionais em `EventoCalendario` (`ambito` e `documentoOrigem`), um arquivo de dados próprio (`src/data/eventosTrePb.ts`) concatenado à lista principal em `App.tsx`, e uma constante única de apresentação (`src/data/ambitos.ts`) consumida pelo card, pelo card de próximos prazos e pelo painel de filtros. Nenhum evento existente é alterado.

**Tech Stack:** React 19 + TypeScript, Tailwind CSS 3, Lucide React, Vite 7. Testes são scripts de asserção próprios do projeto, executados com `npx tsx tests/<arquivo>.test.ts` — não há vitest nem jest.

**Spec:** `docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md`

## Global Constraints

- **Nunca inventar eventos.** `descricao` transcreve literalmente a fonte. Regra 1 do CLAUDE.md do projeto.
- **`'servidor'` é proibido** em `perfis[]`. Regra 3 do CLAUDE.md.
- **Paleta:** proibido lilás/roxo e cores partidárias. A cor do âmbito TRE-PB é exatamente `#0F766E`, declarada uma única vez em `src/data/ambitos.ts` — nenhum componente pode repetir o hexadecimal.
- **Mobile-first:** todo componente funciona em 375 px antes de qualquer ajuste para desktop. Regra 5 do CLAUDE.md.
- **URLs do SEI nunca entram em `src/data/eventos.ts`.** `tests/links-referencia.test.ts` varre esse arquivo e exige catalogação em `linksReferencia.ts`, que é a central pública de legislação. Eventos regionais vivem em `src/data/eventosTrePb.ts`.
- **Nunca fazer `git push`.** Commits locais apenas.
- **Ao final da implementação, registrar a alteração em `Documentations/CHANGELOG.md`**, no formato já estabelecido no arquivo. Exigência do CLAUDE.md do projeto.
- **Comando de teste:** `npx tsx tests/<arquivo>.test.ts` a partir de `calendario-eleitoral/`. Type-check: `npx tsc --noEmit`. Build: `npm run build`.
- **`npm run lint` já tem 6 erros preexistentes** em `src/components/ui/HelpToast.tsx`, `src/lib/search.ts` e `tests/security.test.ts`. Não corrigir; apenas garantir que nenhum erro novo apareça.

---

### Task 1: Tipos, constante de âmbito e o evento de 11/09/2026

Entrega o dado e o vocabulário. Ao final desta task o evento existe e é tipado, mas ainda não aparece na tela.

**Files:**
- Modify: `src/types/index.ts`
- Create: `src/data/ambitos.ts`
- Create: `src/data/eventosTrePb.ts`
- Test: `tests/ambito-tre-pb.test.ts`

**Interfaces:**
- Consumes: `EventoCalendario` de `src/types/index.ts` (já existe).
- Produces:
  - `type Ambito = "TRE-PB"` e `interface DocumentoOrigem { titulo: string; unidade: string; url: string; restrito?: boolean }` em `src/types/index.ts`
  - `EventoCalendario.ambito?: Ambito` e `EventoCalendario.documentoOrigem?: DocumentoOrigem`
  - `AMBITO_TRE_PB: AmbitoInfo` e `ambitoMap: Record<Ambito, AmbitoInfo>` em `src/data/ambitos.ts`, onde `interface AmbitoInfo { id: Ambito; nome: string; rotulo: string; cor: string; icone: string; descricao: string }`
  - `eventosTrePb: EventoCalendario[]` em `src/data/eventosTrePb.ts`

- [ ] **Step 1: Escrever o teste que falha**

Criar `tests/ambito-tre-pb.test.ts`:

```ts
/**
 * Testes de integridade dos eventos de âmbito regional TRE-PB.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md
 */

import { readFileSync } from "node:fs";
import type { EventoCalendario } from "../src/types";
import { eventosTrePb } from "../src/data/eventosTrePb";
import { AMBITO_TRE_PB, ambitoMap } from "../src/data/ambitos";

let passed = 0;
let failed = 0;

function test(name: string, result: boolean) {
  if (result) {
    console.log(`✅ ${name}`);
    passed++;
  } else {
    console.log(`❌ ${name}`);
    failed++;
  }
}

const eventosSource = readFileSync("src/data/eventos.ts", "utf8");
const memorando: EventoCalendario | undefined = eventosTrePb.find(
  (ev) => ev.id === "2026-09-11-trepb-1",
);

console.log("=== TESTES DE ÂMBITO REGIONAL TRE-PB ===\n");

// --- Constante de apresentação do âmbito ---
test("AMBITO_TRE_PB usa a cor aprovada #0F766E", AMBITO_TRE_PB.cor === "#0F766E");
test("AMBITO_TRE_PB tem id TRE-PB", AMBITO_TRE_PB.id === "TRE-PB");
test("AMBITO_TRE_PB usa o ícone Building2", AMBITO_TRE_PB.icone === "Building2");
test("ambitoMap indexa TRE-PB", ambitoMap["TRE-PB"] === AMBITO_TRE_PB);

// --- Separação de arquivos de dados ---
test(
  "Nenhuma URL do SEI foi introduzida em src/data/eventos.ts",
  !eventosSource.includes("sei.tre-pb.jus.br"),
);
test("eventosTrePb contém exatamente 1 evento", eventosTrePb.length === 1);
test(
  "Todo evento de eventosTrePb declara ambito TRE-PB",
  eventosTrePb.every((ev) => ev.ambito === "TRE-PB"),
);
test(
  "IDs de eventosTrePb carregam o infixo trepb",
  eventosTrePb.every((ev) => ev.id.includes("-trepb-")),
);

// --- O evento de 11/09/2026 ---
test("Evento 2026-09-11-trepb-1 existe", memorando !== undefined);
test("Data é 2026-09-11", memorando?.data === "2026-09-11");
test("Dia da semana é sexta-feira", memorando?.diaSemana === "sexta-feira");
test("Título cabe em 120 caracteres", (memorando?.titulo.length ?? 999) <= 120);
test(
  "Categoria é exclusivamente ADM",
  memorando?.categorias.length === 1 && memorando?.categorias[0] === "ADM",
);
test("Turno é 1T", memorando?.turno === "1T");
test("perfis é vazio (relevante para todos)", memorando?.perfis.length === 0);
test(
  "fundamentacao é vazia — memorando não é norma",
  memorando?.fundamentacao.length === 0,
);

// --- Documento de origem ---
test("documentoOrigem existe", memorando?.documentoOrigem !== undefined);
test(
  "documentoOrigem aponta para o SEI do TRE-PB por HTTPS",
  memorando?.documentoOrigem?.url.startsWith("https://sei.tre-pb.jus.br/") === true,
);
test(
  "documentoOrigem preserva o hash de acesso do SEI",
  memorando?.documentoOrigem?.url.includes("infra_hash=") === true,
);
test("documentoOrigem está marcado como restrito", memorando?.documentoOrigem?.restrito === true);
test(
  "documentoOrigem nomeia o Memorando-Circular nº 18/2026",
  memorando?.documentoOrigem?.titulo.includes("18/2026") === true,
);
test(
  "documentoOrigem nomeia a unidade emissora",
  memorando?.documentoOrigem?.unidade === "TRE-PB/PTRE/DG/STIC",
);

// --- Transcrição literal dos três itens ---
const descricao = memorando?.descricao ?? "";
test("Descrição cita o sistema SINPLES", descricao.includes("SINPLES"));
test("Descrição traz o item 1 — revisão das unidades eleitorais", descricao.includes("Polo de Contingência e Transmissão"));
test("Descrição traz o item 2 — urnas de contingência por LAT", descricao.includes("Quantidade de Urnas de Contingência por LAT"));
test("Descrição traz o item 3 — cronograma local de votação x LAT", descricao.includes("cronograma de vinculação entre local de votação e LAT"));
test("Descrição menciona o JE Connect", descricao.includes("JE Connect"));

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA na importação — `Cannot find module '../src/data/eventosTrePb'`.

- [ ] **Step 3: Acrescentar os tipos**

Em `src/types/index.ts`, logo após o bloco de `CategoriaID`, acrescentar:

```ts
/** Âmbito de origem do evento. Ausente = âmbito nacional (TSE). */
export type Ambito = "TRE-PB";

/**
 * Ato administrativo que origina um evento de âmbito regional.
 * Distinto de Fundamentacao, que é reservada a normas.
 */
export interface DocumentoOrigem {
  titulo: string; // Ex: "Memorando-Circular nº 18/2026"
  unidade: string; // Ex: "TRE-PB/PTRE/DG/STIC"
  url: string;
  restrito?: boolean; // true → exibe aviso de acesso restrito
}
```

E, dentro de `interface EventoCalendario`, logo após `corPersonalizada`:

```ts
  ambito?: Ambito; // ausente = evento nacional (TSE)
  documentoOrigem?: DocumentoOrigem; // ato administrativo de origem
```

- [ ] **Step 4: Criar `src/data/ambitos.ts`**

```ts
import type { Ambito } from "../types";

export interface AmbitoInfo {
  id: Ambito;
  nome: string; // rótulo curto exibido no badge
  rotulo: string; // nome por extenso, usado em title/tooltip
  cor: string; // Hex — fonte única da verdade
  icone: string; // Nome do ícone Lucide
  descricao: string;
}

export const AMBITO_TRE_PB: AmbitoInfo = {
  id: "TRE-PB",
  nome: "TRE-PB",
  rotulo: "Tribunal Regional Eleitoral da Paraíba",
  cor: "#0F766E",
  icone: "Building2",
  descricao:
    "Prazos e atos de âmbito regional, fixados pelo Tribunal Regional Eleitoral da Paraíba e aplicáveis às Zonas Eleitorais do estado.",
};

export const ambitoMap: Record<Ambito, AmbitoInfo> = {
  "TRE-PB": AMBITO_TRE_PB,
};
```

- [ ] **Step 5: Criar `src/data/eventosTrePb.ts`**

A `descricao` é transcrição literal do memorando. Não parafrasear.

```ts
import type { EventoCalendario } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Eventos de âmbito regional — Tribunal Regional Eleitoral da Paraíba.
//
// Vivem em arquivo próprio, e não em eventos.ts, porque suas fontes são atos
// administrativos internos (SEI/TRE-PB) e não legislação. O teste
// tests/links-referencia.test.ts exige que toda URL presente em eventos.ts
// esteja catalogada na central pública de links de legislação, onde uma URL
// do SEI não pertence.
// ─────────────────────────────────────────────────────────────────────────────

export const eventosTrePb: EventoCalendario[] = [
  {
    id: "2026-09-11-trepb-1",
    data: "2026-09-11",
    diaSemana: "sexta-feira",
    titulo:
      "Prazo final para cadastramento de informações no sistema SINPLES (TRE-PB)",
    descricao:
      "Prazo final para o cadastramento, no sistema SINPLES, das informações abaixo relacionadas, essenciais para o planejamento logístico das Eleições Gerais 2026.\n\n" +
      "1. Revisão das unidades eleitorais — Solicita-se a revisão dos cadastros de PC (Polo de Contingência), PCT (Polo de Contingência e Transmissão), LAT (Local de Armazenamento Temporário) e Junta Eleitoral, no menu Manutenção > Unidades Eleitorais. Ressalta-se que os kits para uso do JE Connect em PCT são gerados a partir das informações cadastradas nesse sistema, portanto o cadastramento dos dados é fundamental.\n\n" +
      "2. Quantidade de urnas de contingência por LAT — Solicita-se a definição da quantidade de urnas de contingência por LAT, no menu Manutenção > Quantidade de Urnas de Contingência por LAT.\n\n" +
      "3. Cronograma local de votação x LAT — Solicita-se o preenchimento do cronograma de vinculação entre local de votação e LAT, no menu Manutenção > Locais de Votação.\n\n" +
      "Ressalta-se que o cumprimento do prazo é fundamental para a consistência das etapas subsequentes de preparação eleitoral.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
    documentoOrigem: {
      titulo: "Memorando-Circular nº 18/2026",
      unidade: "TRE-PB/PTRE/DG/STIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2556015&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=881cabce3a7e578521b0fd5b176ae4acce053764130f1185e66ad7bd4fa5cce6",
      restrito: true,
    },
    observacoes:
      "Destinatário: chefias das Zonas Eleitorais da Paraíba. Eventuais dúvidas devem ser encaminhadas à Coordenadoria de Eleições Informatizadas e Segurança Cibernética.",
  },
];
```

- [ ] **Step 6: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: `=== RESULTADO: 27/27 testes passaram ===`

- [ ] **Step 7: Confirmar que o teste de links continua verde**

Run: `npx tsx tests/links-referencia.test.ts`
Expected: `=== RESULTADO: 11/11 testes passaram ===` — a URL do SEI não vazou para `eventos.ts`.

- [ ] **Step 8: Type-check**

Run: `npx tsc --noEmit`
Expected: sem saída, código de saída 0.

- [ ] **Step 9: Commit**

```bash
git add src/types/index.ts src/data/ambitos.ts src/data/eventosTrePb.ts tests/ambito-tre-pb.test.ts
git commit -m "feat: tipos de ambito regional e evento TRE-PB de 11/09/2026"
```

---

### Task 2: Filtro por âmbito na lógica e na URL

Ensina o motor de filtragem a separar regional de nacional, e faz o filtro sobreviver ao compartilhamento de link. Ainda sem interface.

**Files:**
- Modify: `src/hooks/useFilteredEvents.ts`
- Modify: `src/hooks/useUrlFilters.ts`
- Test: `tests/ambito-tre-pb.test.ts` (acrescentar bloco)

**Interfaces:**
- Consumes: `Ambito` (Task 1), `FilterState` e `FILTRO_PADRAO` de `src/hooks/useFilteredEvents.ts`.
- Produces:
  - `FilterState.ambito: "TRE-PB" | "nacional" | null`, com `null` em `FILTRO_PADRAO`
  - `parseUrlToFilters(search: string): FilterState` — **exportada**, agora recebe a query string em vez de ler `window`
  - `filtersToUrl(filtros: FilterState, pathname: string): string` — **exportada**
  - Parâmetro de URL `ambito`, com valores `tre-pb` e `nacional`

- [ ] **Step 1: Escrever o teste que falha**

Acrescentar em `tests/ambito-tre-pb.test.ts`, imediatamente antes da linha `console.log(\`\n=== RESULTADO...\`)`:

```ts
// ─── Filtro por âmbito ───────────────────────────────────────────────────────
const { FILTRO_PADRAO } = await import("../src/hooks/useFilteredEvents");
const { parseUrlToFilters, filtersToUrl } = await import(
  "../src/hooks/useUrlFilters"
);

console.log("\n=== TESTES DE FILTRO POR ÂMBITO ===\n");

test("FILTRO_PADRAO nasce com ambito null", FILTRO_PADRAO.ambito === null);

test(
  "URL ?ambito=tre-pb é lida como TRE-PB",
  parseUrlToFilters("?ambito=tre-pb").ambito === "TRE-PB",
);
test(
  "URL ?ambito=nacional é lida como nacional",
  parseUrlToFilters("?ambito=nacional").ambito === "nacional",
);
test(
  "Valor inválido de ambito na URL é descartado",
  parseUrlToFilters("?ambito=marte").ambito === null,
);
test(
  "URL sem parâmetros mantém ambito null",
  parseUrlToFilters("").ambito === null,
);
test(
  "Filtro TRE-PB é serializado para a URL",
  filtersToUrl({ ...FILTRO_PADRAO, ambito: "TRE-PB" }, "/") === "?ambito=tre-pb",
);
test(
  "Filtro nacional é serializado para a URL",
  filtersToUrl({ ...FILTRO_PADRAO, ambito: "nacional" }, "/") === "?ambito=nacional",
);
test(
  "ambito null não escreve parâmetro na URL",
  filtersToUrl(FILTRO_PADRAO, "/") === "/",
);
test(
  "Round-trip URL → estado → URL preserva o âmbito",
  filtersToUrl(parseUrlToFilters("?ambito=tre-pb"), "/") === "?ambito=tre-pb",
);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA — `parseUrlToFilters is not a function` (a função existe mas não é exportada) e as asserções de `ambito` reprovam.

- [ ] **Step 3: Acrescentar `ambito` ao `FilterState` e à regra de filtragem**

Em `src/hooks/useFilteredEvents.ts`, na interface `FilterState`, após a linha do `mes`:

```ts
  ambito: "TRE-PB" | "nacional" | null; // null = todos os âmbitos
```

Em `FILTRO_PADRAO`, após `mes: null,`:

```ts
  ambito: null,
```

E na função `useFilteredEvents`, imediatamente após o bloco `// 0. Quando o filtro "apenasMeusEventos"...` e antes de `// 1. Ocultar passados`:

```ts
      // 0b. Filtro de âmbito — aplica-se apenas a eventos oficiais.
      // Eventos particulares do usuário são governados por apenasMeusEventos.
      if (filtros.ambito && !isCustom) {
        if (filtros.ambito === "TRE-PB" && ev.ambito !== "TRE-PB") return false;
        if (filtros.ambito === "nacional" && ev.ambito !== undefined) return false;
      }
```

- [ ] **Step 4: Tornar as funções de URL puras e exportadas**

Em `src/hooks/useUrlFilters.ts`:

Trocar a assinatura de `parseUrlToFilters` para receber a query string, exportá-la, e ler o novo parâmetro. A primeira linha do corpo passa de `const params = new URLSearchParams(window.location.search);` para `const params = new URLSearchParams(search);`:

```ts
const VALID_AMBITOS = ["TRE-PB", "nacional"] as const;

export function parseUrlToFilters(search: string): FilterState {
  const params = new URLSearchParams(search);

  // Se não há nenhum parâmetro na URL, retorna padrão (mostrar passados)
  if (params.toString() === "") return FILTRO_PADRAO;
```

Manter todo o corpo intermediário inalterado. Antes do `return`, acrescentar a leitura do âmbito:

```ts
  // Âmbito: "tre-pb" na URL → "TRE-PB" no estado
  const ambitoParam = params.get("ambito");
  const ambitoNormalizado = ambitoParam === "tre-pb" ? "TRE-PB" : ambitoParam;
  const ambito = VALID_AMBITOS.includes(
    ambitoNormalizado as (typeof VALID_AMBITOS)[number],
  )
    ? (ambitoNormalizado as (typeof VALID_AMBITOS)[number])
    : null;
```

E o `return` final passa a incluir o campo:

```ts
  return {
    ocultarPassados,
    categorias,
    turno,
    busca,
    mes,
    ambito,
    apenasFavoritos: false,
    apenasMeusEventos: false,
  };
}
```

Trocar `filtersToUrl` para receber o pathname e exportá-la:

```ts
export function filtersToUrl(filtros: FilterState, pathname: string): string {
  const params = new URLSearchParams();

  // Só escreve param quando o user explicitamente quer ocultar passados
  if (filtros.ocultarPassados) params.set("passados", "ocultar");
  if (filtros.categorias.length > 0)
    params.set("cat", filtros.categorias.join(","));
  if (filtros.turno) params.set("turno", filtros.turno);
  if (filtros.busca.trim()) params.set("q", filtros.busca.trim());
  if (filtros.mes) params.set("mes", filtros.mes);
  if (filtros.ambito)
    params.set("ambito", filtros.ambito === "TRE-PB" ? "tre-pb" : "nacional");

  const qs = params.toString();
  return qs ? `?${qs}` : pathname;
}
```

Ajustar os dois chamadores dentro do hook `useUrlFilters`:

```ts
  const [filtros, setFiltrosState] = useState<FilterState>(() =>
    parseUrlToFilters(window.location.search),
  );

  // Sync state → URL
  useEffect(() => {
    const newUrl = filtersToUrl(filtros, window.location.pathname);
    const currentUrl = window.location.pathname + window.location.search;
    if (newUrl !== currentUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [filtros]);
```

- [ ] **Step 5: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: `=== RESULTADO: 36/36 testes passaram ===`

- [ ] **Step 6: Type-check**

Run: `npx tsc --noEmit`
Expected: sem erros. Se acusar `Property 'ambito' is missing` em algum literal de `FilterState`, o literal está em `App.tsx` ou `FilterPanel.tsx` — acrescentar `ambito: null` ali.

- [ ] **Step 7: Commit**

```bash
git add src/hooks/useFilteredEvents.ts src/hooks/useUrlFilters.ts tests/ambito-tre-pb.test.ts
git commit -m "feat: filtro por ambito na logica de filtragem e na URL"
```

---

### Task 3: Identidade visual do card

Dá ao evento regional a faixa lateral, o fundo tingido e o badge — na timeline e no painel de Próximos Prazos.

**Files:**
- Modify: `src/components/timeline/EventCard.tsx`
- Modify: `src/components/proximos-eventos/EventoProximoCard.tsx`
- Test: `tests/ambito-tre-pb.test.ts` (acrescentar bloco)

**Interfaces:**
- Consumes: `AMBITO_TRE_PB` de `src/data/ambitos.ts` (Task 1).
- Produces: nada consumido por tasks posteriores.

Convenção de teste deste projeto: componentes React são verificados por asserção sobre o texto-fonte, como já faz `tests/header-tipografia.test.ts`. Não há jsdom no projeto.

- [ ] **Step 1: Escrever o teste que falha**

Acrescentar em `tests/ambito-tre-pb.test.ts`, antes do `console.log` de resultado:

```ts
// ─── Identidade visual do card ───────────────────────────────────────────────
const eventCard = readFileSync("src/components/timeline/EventCard.tsx", "utf8");
const proximoCard = readFileSync(
  "src/components/proximos-eventos/EventoProximoCard.tsx",
  "utf8",
);

console.log("\n=== TESTES DE IDENTIDADE VISUAL DO CARD ===\n");

test(
  "EventCard importa a constante de âmbito",
  /import\s*\{[^}]*AMBITO_TRE_PB[^}]*\}\s*from\s*"\.\.\/\.\.\/data\/ambitos"/.test(eventCard),
);
test(
  "EventCard deriva isTrePb do campo ambito",
  /const\s+isTrePb\s*=\s*evento\.ambito\s*===\s*"TRE-PB"/.test(eventCard),
);
test(
  "EventCard não repete o hexadecimal do âmbito",
  !eventCard.includes("#0F766E"),
);
test(
  "EventoProximoCard não repete o hexadecimal do âmbito",
  !proximoCard.includes("#0F766E"),
);
test(
  "EventoProximoCard importa a constante de âmbito",
  proximoCard.includes("AMBITO_TRE_PB"),
);
test(
  "Destaque e favorito prevalecem sobre o âmbito na borda esquerda",
  /const\s+bordaAmbito\s*=\s*isTrePb\s*&&\s*!isCustom\s*&&\s*!evento\.destaque\s*&&\s*!favorito/.test(
    eventCard,
  ),
);
test(
  "Card regional preserva o botão de favorito (condicionado só a isCustom)",
  eventCard.includes("{!isCustom && (") && !eventCard.includes("{!isCustom && !isTrePb && ("),
);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA nas 6 primeiras asserções do novo bloco (a última já passa, porque o botão de favorito hoje só depende de `isCustom` — ela existe para travar essa condição contra regressão).

- [ ] **Step 3: Acrescentar o badge e a faixa no `EventCard`**

Em `src/components/timeline/EventCard.tsx`:

Acrescentar o import, após a linha `import { categoriaMap } from "../../data/categorias";`:

```ts
import { AMBITO_TRE_PB } from "../../data/ambitos";
```

Acrescentar o componente de badge, logo após a função `CategoriaBadge`:

```tsx
function AmbitoBadge() {
  const Icon = iconeMap[AMBITO_TRE_PB.icone] ?? Calendar;

  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
      style={{ backgroundColor: AMBITO_TRE_PB.cor }}
      title={AMBITO_TRE_PB.rotulo}
    >
      <Icon size={12} strokeWidth={2.2} />
      {AMBITO_TRE_PB.nome}
    </span>
  );
}
```

Dentro do componente `EventCard`, logo após a linha `const isCustom = evento.id.startsWith("custom-");`:

```ts
  const isTrePb = evento.ambito === "TRE-PB";
  // Destaque e favorito já ocupam a borda esquerda; o âmbito só a assume quando
  // ela está livre, para não haver duas cores concorrendo na mesma aresta.
  const bordaAmbito = isTrePb && !isCustom && !evento.destaque && !favorito;
```

No `className` do `<article>`, acrescentar duas linhas imediatamente após `isCustom && "border-l-4 hover:border-primary-200",`:

```tsx
        !isCustom && isTrePb && "bg-teal-50/40",
        bordaAmbito && "border-l-4",
```

Trocar a prop `style` do `<article>` por:

```tsx
      style={
        isCustom && evento.corPersonalizada
          ? { borderLeftColor: evento.corPersonalizada }
          : bordaAmbito
            ? { borderLeftColor: AMBITO_TRE_PB.cor }
            : undefined
      }
```

Na fileira de badges, dentro do ramo `) : (` do ternário `isCustom ?`, acrescentar o badge de âmbito como **primeiro** elemento do fragmento, antes do `.map` de categorias:

```tsx
                    <>
                      {isTrePb && <AmbitoBadge />}
                      {evento.categorias.map((catId) => (
                        <CategoriaBadge key={catId} id={catId} />
                      ))}
                      {evento.turno && <TurnoBadge turno={evento.turno} />}
                    </>
```

- [ ] **Step 4: Acrescentar o badge compacto no `EventoProximoCard`**

Em `src/components/proximos-eventos/EventoProximoCard.tsx`:

Acrescentar o import, após `import { categoriaMap } from "../../data/categorias";`:

```ts
import { AMBITO_TRE_PB } from "../../data/ambitos";
```

Dentro do componente, após a linha `const estaSemana = isEventoProximo(evento.data, 7);`:

```ts
  const isTrePb = evento.ambito === "TRE-PB";
  const AmbitoIcon = iconeMap[AMBITO_TRE_PB.icone] ?? Calendar;
```

Trocar o bloco `{/* Category badge */}` inteiro por:

```tsx
      {/* Category badge + âmbito */}
      <div className="mt-auto flex flex-wrap items-center gap-1.5">
        {isTrePb && (
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold text-white"
            style={{ backgroundColor: AMBITO_TRE_PB.cor }}
            title={AMBITO_TRE_PB.rotulo}
          >
            <AmbitoIcon size={12} strokeWidth={2.2} />
            {AMBITO_TRE_PB.nome}
          </span>
        )}
        {cat && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
            style={{ backgroundColor: cat.cor }}
          >
            <Icon size={12} strokeWidth={2.2} />
            {cat.nome}
          </span>
        )}
      </div>
```

- [ ] **Step 5: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: `=== RESULTADO: 43/43 testes passaram ===`

- [ ] **Step 6: Type-check e lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: `tsc` sem erros. `npm run lint` com exatamente os 6 erros preexistentes, nenhum a mais.

- [ ] **Step 7: Commit**

```bash
git add src/components/timeline/EventCard.tsx src/components/proximos-eventos/EventoProximoCard.tsx tests/ambito-tre-pb.test.ts
git commit -m "feat: identidade visual do card de ambito regional TRE-PB"
```

---

### Task 4: Bloco "Documento de origem" no detalhe expandido

Publica o hyperlink do memorando, com o aviso de acesso restrito.

**Files:**
- Modify: `src/components/timeline/EventDetail.tsx`
- Test: `tests/ambito-tre-pb.test.ts` (acrescentar bloco)

**Interfaces:**
- Consumes: `DocumentoOrigem` de `src/types/index.ts` (Task 1).
- Produces: nada consumido por tasks posteriores.

- [ ] **Step 1: Escrever o teste que falha**

Acrescentar em `tests/ambito-tre-pb.test.ts`, antes do `console.log` de resultado:

```ts
// ─── Documento de origem no detalhe ──────────────────────────────────────────
const eventDetail = readFileSync("src/components/timeline/EventDetail.tsx", "utf8");

console.log("\n=== TESTES DO BLOCO DOCUMENTO DE ORIGEM ===\n");

test(
  "EventDetail renderiza o bloco Documento de origem",
  eventDetail.includes("Documento de origem"),
);
test(
  "O bloco é condicionado à existência de documentoOrigem",
  /evento\.documentoOrigem\s*&&/.test(eventDetail),
);
test(
  "O link do documento abre em nova aba com rel seguro",
  /rel="noopener noreferrer"/.test(eventDetail),
);
test(
  "O aviso de acesso restrito existe e nomeia o SEI/TRE-PB",
  eventDetail.includes("SEI/TRE-PB") && eventDetail.includes("acesso restrito"),
);
test(
  "O aviso é condicionado ao campo restrito",
  /documentoOrigem\.restrito/.test(eventDetail) ||
    /doc\.restrito/.test(eventDetail),
);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA nas 5 asserções do novo bloco.

- [ ] **Step 3: Implementar o bloco**

Em `src/components/timeline/EventDetail.tsx`:

Trocar a linha de import de ícones por:

```ts
import { BookOpen, ExternalLink, FileText, Info, Lock } from "lucide-react";
```

E acrescentar ao import de tipos:

```ts
import type { DocumentoOrigem, EventoCalendario } from "../../types";
```

Acrescentar o componente, logo após `FundamentacaoChip`:

```tsx
function DocumentoOrigemBloco({ doc }: { doc: DocumentoOrigem }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
        Documento de origem
      </p>
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-left transition-colors hover:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
      >
        <FileText size={16} className="mt-0.5 flex-shrink-0 text-teal-700" />
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-teal-900 break-words">
            {doc.titulo}
            <ExternalLink size={12} className="ml-1 inline opacity-60" />
          </span>
          <span className="block text-xs text-teal-700 break-words">
            {doc.unidade}
          </span>
        </span>
      </a>
      {doc.restrito && (
        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <Lock size={11} className="flex-shrink-0" />
          SEI/TRE-PB — acesso restrito a servidores
        </p>
      )}
    </div>
  );
}
```

Dentro de `EventDetail`, inserir a renderização imediatamente **antes** do bloco `{/* Fundamentação legal */}`:

```tsx
      {/* Documento administrativo de origem */}
      {evento.documentoOrigem && (
        <DocumentoOrigemBloco doc={evento.documentoOrigem} />
      )}
```

- [ ] **Step 4: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: `=== RESULTADO: 48/48 testes passaram ===`

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: sem erros.

- [ ] **Step 6: Commit**

```bash
git add src/components/timeline/EventDetail.tsx tests/ambito-tre-pb.test.ts
git commit -m "feat: bloco de documento de origem com aviso de acesso restrito"
```

---

### Task 5: Ligar tudo — `App.tsx`, painel de filtros e exportação `.ics`

Última task: o evento passa a aparecer no site, o grupo "Âmbito" entra no painel e o memorando viaja junto no arquivo exportado.

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/filters/FilterPanel.tsx`
- Modify: `src/lib/ics.ts`
- Test: `tests/ambito-tre-pb.test.ts` (acrescentar bloco)

**Interfaces:**
- Consumes: `eventosTrePb` (Task 1), `FilterState.ambito` (Task 2), `AMBITO_TRE_PB` (Task 1).
- Produces: nada — é a task terminal.

- [ ] **Step 1: Escrever o teste que falha**

Acrescentar em `tests/ambito-tre-pb.test.ts`, antes do `console.log` de resultado:

```ts
// ─── Integração: App, painel de filtros e .ics ───────────────────────────────
const appSource = readFileSync("src/App.tsx", "utf8");
const filterPanel = readFileSync("src/components/filters/FilterPanel.tsx", "utf8");
const { buildEventDescription } = await import("../src/lib/ics");

console.log("\n=== TESTES DE INTEGRAÇÃO ===\n");

test("App importa eventosTrePb", appSource.includes('from "./data/eventosTrePb"'));
test(
  "App concatena eventosTrePb na lista exibida",
  /\[\s*\.\.\.eventos,\s*\.\.\.eventosTrePb,\s*\.\.\.meusEventosConvertidos\s*\]/.test(appSource),
);
test(
  "Contador total soma os eventos regionais",
  /eventos\.length\s*\+\s*eventosTrePb\.length/.test(appSource),
);
test(
  "hasActiveFilters considera o âmbito",
  /filtros\.ambito\s*!==\s*null/.test(appSource),
);
test("FilterPanel expõe o grupo Âmbito", filterPanel.includes("Âmbito"));
test(
  "FilterPanel conta o âmbito entre os filtros ativos",
  /filtros\.ambito\s*!==\s*null\s*\?\s*1\s*:\s*0/.test(filterPanel),
);

const descricaoIcs = buildEventDescription(memorando as EventoCalendario);
test(
  "Descrição do .ics carrega a URL do memorando",
  descricaoIcs.includes("sei.tre-pb.jus.br"),
);
test(
  "Descrição do .ics nomeia o documento de origem",
  descricaoIcs.includes("Documento de origem:"),
);
test(
  "Descrição do .ics avisa sobre o acesso restrito",
  descricaoIcs.includes("acesso restrito"),
);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA nas 9 asserções do novo bloco.

- [ ] **Step 3: Ligar `App.tsx`**

Acrescentar o import, após `import { eventos } from "./data/eventos";`:

```ts
import { eventosTrePb } from "./data/eventosTrePb";
```

Trocar `todosEventos`:

```ts
  const todosEventos = useMemo(
    () => [...eventos, ...eventosTrePb, ...meusEventosConvertidos],
    [meusEventosConvertidos],
  );
```

Acrescentar, logo abaixo, a lista de eventos oficiais e os contadores:

```ts
  // Eventos oficiais = nacionais (TSE) + regionais (TRE-PB). Exclui os do usuário.
  const eventosOficiais = useMemo(() => [...eventos, ...eventosTrePb], []);
  const totalOficiais = eventos.length + eventosTrePb.length;
```

Trocar a linha de `totalPassados`:

```ts
  const totalPassados = eventosOficiais.filter((ev) => isEventoPassado(ev.data)).length;
```

Nas props de `FilterSummary` e de `FilterPanel`, trocar `totalEventos={eventos.length}` por:

```tsx
        totalEventos={totalOficiais}
```

Acrescentar o âmbito às duas expressões booleanas:

```ts
  const hasActiveFilters =
    filtros.ocultarPassados ||
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null ||
    filtros.ambito !== null ||
    filtros.apenasFavoritos ||
    filtros.apenasMeusEventos;
```

```ts
  const canExportFilteredEvents =
    !filtros.apenasMeusEventos &&
    (filtros.categorias.length > 0 ||
      filtros.turno !== null ||
      filtros.busca.trim() !== "" ||
      filtros.mes !== null ||
      filtros.ambito !== null ||
      filtros.apenasFavoritos);
```

- [ ] **Step 4: Acrescentar o grupo "Âmbito" ao `FilterPanel`**

Em `src/components/filters/FilterPanel.tsx`:

Acrescentar o import, após `import { categorias } from "../../data/categorias";`:

```ts
import { AMBITO_TRE_PB } from "../../data/ambitos";
```

Acrescentar `filtros.ambito !== null ||` a `hasActiveFilters` (após a linha do `mes`) e `(filtros.ambito !== null ? 1 : 0) +` a `activeFilterCount` (também após a linha do `mes`).

Inserir o grupo novo em `filterContent`, imediatamente **antes** do bloco `{/* Turno */}`:

```tsx
      {/* Âmbito */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Âmbito
        </p>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              { valor: null, label: "Todos", cor: null },
              { valor: "nacional", label: "Nacional (TSE)", cor: null },
              { valor: "TRE-PB", label: AMBITO_TRE_PB.nome, cor: AMBITO_TRE_PB.cor },
            ] as const
          ).map((opcao) => {
            const isActive = filtros.ambito === opcao.valor;
            return (
              <button
                key={opcao.valor ?? "todos"}
                onClick={() => onChange({ ...filtros, ambito: opcao.valor })}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  !isActive && "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                  isActive && "text-white shadow-sm",
                  // "Todos" e "Nacional" usam o azul institucional via classe;
                  // só TRE-PB pinta pela constante de âmbito.
                  isActive && !opcao.cor && "bg-primary-700",
                )}
                style={isActive && opcao.cor ? { backgroundColor: opcao.cor } : undefined}
              >
                {opcao.label}
              </button>
            );
          })}
        </div>
        {filtros.ambito === "TRE-PB" && (
          <p className="mt-1.5 text-xs text-neutral-500 leading-snug">
            {AMBITO_TRE_PB.descricao}
          </p>
        )}
      </div>
```

As opções "Todos" e "Nacional" usam a classe `bg-primary-700` do Tailwind, exatamente como faz o grupo "Turno" logo abaixo. Nenhum hexadecimal novo entra no componente.

- [ ] **Step 5: Acrescentar o documento de origem à descrição do `.ics`**

Em `src/lib/ics.ts`, dentro de `buildEventDescription`, entre o bloco de `observacoes` e o de `fundamentacao`:

```ts
  if (evento.documentoOrigem) {
    const { titulo, unidade, url, restrito } = evento.documentoOrigem;
    const aviso = restrito ? " (acesso restrito a servidores)" : "";
    sections.push(`Documento de origem:\n${titulo} - ${unidade}${aviso}\n${url}`);
  }
```

- [ ] **Step 6: Rodar toda a suíte**

Run: `npx tsx tests/ambito-tre-pb.test.ts && npx tsx tests/ics.test.ts && npx tsx tests/links-referencia.test.ts && npx tsx tests/security.test.ts && npx tsx tests/header-tipografia.test.ts`
Expected: `57/57`, `24/24`, `11/11`, `25/25`, `20/20`. Nenhuma regressão.

- [ ] **Step 7: Type-check, lint e build**

Run: `npx tsc --noEmit && npm run lint && npm run build`
Expected: `tsc` limpo; lint com exatamente os 6 erros preexistentes; build concluído sem erro.

- [ ] **Step 8: Verificação visual em 375 px**

Subir `npm run dev` e conferir, na largura de 375 px, quatro pontos:

1. O card de 11/09/2026 na timeline: faixa lateral verde-petróleo, fundo tingido, badge **TRE-PB** antes do badge Administração Eleitoral, sem scroll horizontal.
2. O card expandido: bloco "Documento de origem" acima da fundamentação, com o aviso de acesso restrito. O link abre em nova aba.
3. O painel de filtros: grupo "Âmbito" com três pílulas; selecionar TRE-PB reduz a timeline a um evento e escreve `?ambito=tre-pb` na URL. Recarregar a página preserva o filtro.
4. O painel de Próximos Prazos: badge TRE-PB compacto no card, sem estourar a largura.

- [ ] **Step 9: Registrar no CHANGELOG**

Acrescentar entrada em `Documentations/CHANGELOG.md`, no topo, seguindo o formato do arquivo — data `2026-08-31`, título da mudança, lista dos arquivos modificados e resultado das contagens de teste medidas no Step 6.

- [ ] **Step 10: Commit**

```bash
git add src/App.tsx src/components/filters/FilterPanel.tsx src/lib/ics.ts tests/ambito-tre-pb.test.ts Documentations/CHANGELOG.md
git commit -m "feat: exibe eventos TRE-PB, filtro de ambito no painel e memorando no .ics"
```

---

### Task 6 (OPCIONAL — bug preexistente, fora do escopo do spec)

`VALID_CATS` em [useUrlFilters.ts:5-17](../../../src/hooks/useUrlFilters.ts#L5-L17) lista 11 das 13 categorias: **faltam `GAR` e `TRA`**. Consequência: um link compartilhado com `?cat=GAR` ou `?cat=TRA` perde silenciosamente o filtro ao ser aberto. O bug é anterior a este trabalho e não faz parte do spec — executar apenas se o usuário autorizar.

**Files:**
- Modify: `src/hooks/useUrlFilters.ts:5-17`
- Test: `tests/ambito-tre-pb.test.ts`

- [ ] **Step 1: Escrever o teste que falha**

```ts
console.log("\n=== TESTE DE REGRESSÃO: CATEGORIAS NA URL ===\n");

test(
  "As 13 categorias sobrevivem ao round-trip pela URL",
  parseUrlToFilters("?cat=ELE,REG,PRO,FIN,ADM,FIS,CON,VOT,PES,DIP,PAR,GAR,TRA")
    .categorias.length === 13,
);
```

- [ ] **Step 2: Rodar e confirmar que falha**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: FALHA — devolve 11 categorias em vez de 13.

- [ ] **Step 3: Corrigir a lista**

```ts
const VALID_CATS: CategoriaID[] = [
  "ELE",
  "REG",
  "PRO",
  "FIN",
  "ADM",
  "FIS",
  "CON",
  "VOT",
  "PES",
  "DIP",
  "PAR",
  "GAR",
  "TRA",
];
```

- [ ] **Step 4: Rodar e confirmar que passa**

Run: `npx tsx tests/ambito-tre-pb.test.ts`
Expected: todas as asserções passam.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useUrlFilters.ts tests/ambito-tre-pb.test.ts
git commit -m "fix: categorias GAR e TRA voltam a sobreviver ao filtro pela URL"
```
