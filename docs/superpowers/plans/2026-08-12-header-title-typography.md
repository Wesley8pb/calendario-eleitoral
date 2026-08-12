# Destaque tipográfico do título no Header — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dar presença institucional ao título do Header trocando a família tipográfica para a serifa Lora, ampliando a escala e acrescentando um filete dourado, sem tocar na paleta nem na CSP.

**Architecture:** A família Lora entra no link do Google Fonts que já existe em `index.html` e é registrada como o token `display` em `tailwind.config.js`, expondo a classe `font-display`. Toda a mudança de marcação fica no `h1` de `Header.tsx` e num filete decorativo logo abaixo dele. A verificação automatizada segue o padrão que o projeto já pratica em `tests/links-referencia.test.ts`: asserções sobre o texto-fonte executadas por `tsx`. A verificação visual e responsiva roda no Comet via Playwright global.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Vite 7, Google Fonts, `tsx` para os testes de nó, Playwright global com o navegador Comet.

## Global Constraints

- Paleta restrita a `primary` e `secondary` já definidos em `tailwind.config.js`. Proibido introduzir cor nova ou valor hexadecimal solto em `Header.tsx`.
- Nenhuma alteração em `netlify.toml`. A CSP já autoriza `https://fonts.googleapis.com` em `style-src` e `https://fonts.gstatic.com` em `font-src`.
- Da família Lora, carregar **exclusivamente o peso 700**.
- Fallback obrigatório: `["Lora", "Georgia", "serif"]`. O Georgia é deliberado, para que a troca do `display=swap` ocorra entre duas serifas.
- Escala do título: **30 px no mobile, 48 px a partir de 640 px, 56 px a partir de 1024 px** — em Tailwind, `text-3xl sm:text-5xl lg:text-[3.5rem]`.
- Largura do filete: **56 px, 64 px e 72 px** — `w-14 sm:w-16 lg:w-[72px]`.
- Sombra do título, valor exato: `0 2px 12px rgba(0,0,0,0.30)`.
- Estrutura semântica preservada: exatamente um `<h1>` em `Header.tsx`, com o mesmo texto.
- Badge, descrição, links de resolução, countdown e os três botões continuam em Inter. Proibido estender a serifa a títulos de seção.
- O título deve caber em **uma linha por segmento até 320 px**, sem gerar scroll horizontal.
- Toda alteração vai para `Documentations/CHANGELOG.md` ao final, conforme o `CLAUDE.md` do projeto.
- Os testes de nó rodam com `npx tsx <arquivo>`; não existe script `npm test` neste repositório.

## File Structure

| Arquivo | Ação | Responsabilidade |
| --- | --- | --- |
| `index.html` | Modificar linhas 55–61 | Requisitar a família Lora no peso 700 |
| `tailwind.config.js` | Modificar linhas 7–10 | Registrar o token `display` da pilha de fontes |
| `src/components/layout/Header.tsx` | Modificar linhas 35–45 | Aplicar família, escala, sombra e o filete |
| `tests/header-tipografia.test.ts` | Criar | Travar as decisões da spec contra regressão |
| `Documentations/CHANGELOG.md` | Modificar | Registro da sessão |

---

### Task 1: Família Lora, token `display` e o título

**Files:**
- Create: `tests/header-tipografia.test.ts`
- Modify: `index.html:55-61`
- Modify: `tailwind.config.js:7-10`
- Modify: `src/components/layout/Header.tsx:35-39`

**Interfaces:**
- Consumes: nada de tarefas anteriores.
- Produces: a classe utilitária `font-display`, gerada pelo Tailwind a partir da chave `fontFamily.display` e consumida pelo `h1` nesta tarefa e pela Task 2 apenas indiretamente. O arquivo `tests/header-tipografia.test.ts` expõe a função local `test(name: string, result: boolean): void` e os contadores `passed` e `failed`, que a Task 2 reaproveita ao acrescentar asserções no mesmo arquivo.

- [ ] **Step 1: Escrever o teste que falha**

Criar `tests/header-tipografia.test.ts` com este conteúdo exato:

```typescript
/**
 * Testes de integridade da tipografia do título do Header.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-12-header-title-typography-design.md
 */

import { readFileSync } from "node:fs";

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

const indexHtml = readFileSync("index.html", "utf8");
const tailwind = readFileSync("tailwind.config.js", "utf8");
const header = readFileSync("src/components/layout/Header.tsx", "utf8");
const netlify = readFileSync("netlify.toml", "utf8");

const fontsQuery = indexHtml.match(/fonts\.googleapis\.com\/css2\?([^"]+)/)?.[1] ?? "";
const pesosDaLora = fontsQuery.match(/family=Lora:wght@([^&]+)/)?.[1] ?? "";
const classesDoH1 = header.match(/<h1[^>]*className="([^"]*)"/)?.[1] ?? "";

console.log("=== TESTES DE TIPOGRAFIA DO HEADER ===\n");

test("Lora é requisitada ao Google Fonts", pesosDaLora !== "");
test("Lora carrega exclusivamente o peso 700", pesosDaLora === "700");
test("A requisição de fontes mantém display=swap", fontsQuery.includes("display=swap"));
test(
  "Inter e JetBrains Mono seguem carregadas",
  fontsQuery.includes("family=Inter:") && fontsQuery.includes("family=JetBrains+Mono:"),
);
test(
  "tailwind expõe o token display com Lora e fallback Georgia",
  /display:\s*\[\s*"Lora",\s*"Georgia",\s*"serif"\s*\]/.test(tailwind),
);
test("O h1 usa a família display", classesDoH1.split(/\s+/).includes("font-display"));
test(
  "O h1 usa a escala 30/48/56 px",
  ["text-3xl", "sm:text-5xl", "lg:text-[3.5rem]"].every((c) =>
    classesDoH1.split(/\s+/).includes(c),
  ),
);
test(
  "O h1 tem a sombra que descola o texto do gradiente",
  classesDoH1.includes("[text-shadow:0_2px_12px_rgba(0,0,0,0.30)]"),
);
test(
  "O h1 fecha o bloco com entrelinha 1,1 e tracking -0,02 em",
  classesDoH1.split(/\s+/).includes("leading-[1.1]") &&
    classesDoH1.split(/\s+/).includes("tracking-[-0.02em]"),
);
test("Existe exatamente um h1 no Header", (header.match(/<h1[\s>]/g) ?? []).length === 1);
test(
  "O h1 preserva o texto original",
  header.includes("Calendário Eleitoral") && header.includes("Eleições 2026"),
);
test(
  "O ano permanece em secondary-500",
  /<span className="text-secondary-500">Eleições 2026<\/span>/.test(header),
);
test(
  "A CSP segue autorizando as fontes, sem alteração",
  netlify.includes("https://fonts.googleapis.com") &&
    netlify.includes("font-src https://fonts.gstatic.com"),
);
test("Header.tsx não introduz cor hexadecimal fora da paleta", !/#[0-9a-fA-F]{6}/.test(header));

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/header-tipografia.test.ts`

Expected: FAIL, saindo com código 1. Devem falhar exatamente sete asserções — "Lora é requisitada ao Google Fonts", "Lora carrega exclusivamente o peso 700", "tailwind expõe o token display com Lora e fallback Georgia", "O h1 usa a família display", "O h1 usa a escala 30/48/56 px", "O h1 tem a sombra que descola o texto do gradiente" e "O h1 fecha o bloco com entrelinha 1,1 e tracking -0,02 em". As demais já passam, por descreverem o estado atual que deve ser preservado.

- [ ] **Step 3: Requisitar a Lora no `index.html`**

Substituir o bloco das linhas 55 a 61 por:

```html
    <!-- Google Fonts: Inter + JetBrains Mono + Lora (título) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Lora:wght@700&display=swap"
      rel="stylesheet"
    />
```

- [ ] **Step 4: Registrar o token `display` no Tailwind**

Em `tailwind.config.js`, substituir o bloco `fontFamily` das linhas 7 a 10 por:

```javascript
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Lora", "Georgia", "serif"],
      },
```

- [ ] **Step 5: Aplicar a tipografia no `h1`**

Em `src/components/layout/Header.tsx`, trocar a abertura do `h1` na linha 35. De:

```tsx
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
```

Para:

```tsx
        <h1 className="font-display font-bold text-white text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.02em] [text-shadow:0_2px_12px_rgba(0,0,0,0.30)]">
```

O corpo do `h1` não muda: as três linhas com `Calendário Eleitoral`, `<br />` e o `<span className="text-secondary-500">Eleições 2026</span>` permanecem exatamente como estão.

- [ ] **Step 6: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/header-tipografia.test.ts`

Expected: PASS, `=== RESULTADO: 14/14 testes passaram ===`, saindo com código 0.

- [ ] **Step 7: Confirmar que type-check, lint e build seguem limpos**

Run: `npx tsc --noEmit` e depois `npm run build`

Expected: nenhum erro de tipo e build concluído. O aviso de chunk acima de 500 kB e o aviso do `caniuse-lite` são preexistentes e esperados.

Run: `npm run lint`

Expected: **falha com exatamente 6 erros, todos preexistentes** — um `no-control-regex` em `src/lib/search.ts:8` e quatro `@typescript-eslint/no-explicit-any` em `tests/security.test.ts:59-62`. Esse é o estado do repositório antes desta tarefa, medido em 12/08/2026. O critério é não aumentar essa contagem e não introduzir erro nos arquivos tocados aqui. **Não corrija os 6 erros preexistentes nesta tarefa** — são de arquivos fora do escopo e merecem decisão própria.

- [ ] **Step 8: Commit**

```bash
git add tests/header-tipografia.test.ts index.html tailwind.config.js src/components/layout/Header.tsx
git commit -m "feat: aplica a serifa Lora e amplia a escala do titulo do Header"
```

---

### Task 2: Filete dourado e verificação visual responsiva

**Files:**
- Modify: `tests/header-tipografia.test.ts`
- Modify: `src/components/layout/Header.tsx:40-45`
- Modify: `Documentations/CHANGELOG.md`

**Interfaces:**
- Consumes: a função local `test(name: string, result: boolean): void` e os contadores `passed` e `failed`, ambos declarados em `tests/header-tipografia.test.ts` na Task 1, além das constantes `header` e `classesDoH1` já lidas no topo daquele arquivo.
- Produces: nada consumido por tarefas posteriores. É a última tarefa.

- [ ] **Step 1: Acrescentar as asserções do filete, que falham**

Em `tests/header-tipografia.test.ts`, inserir estas quatro asserções imediatamente **antes** da linha `console.log(\`\nRESULTADO...\`)`, ou seja, depois da última asserção existente:

```typescript
const filete = header.match(/<div\s+aria-hidden="true"\s+className="([^"]*)"\s*\/>/)?.[1] ?? "";

test("O filete dourado existe e é decorativo", filete !== "");
test(
  "O filete usa a escala de largura 56/64/72 px",
  ["w-14", "sm:w-16", "lg:w-[72px]"].every((c) => filete.split(/\s+/).includes(c)),
);
test(
  "O filete usa o dourado da paleta a 85%, 2 px de altura e cantos arredondados",
  ["bg-secondary-500/85", "h-0.5", "rounded"].every((c) => filete.split(/\s+/).includes(c)),
);
test("O filete é centralizado", filete.split(/\s+/).includes("mx-auto"));
```

- [ ] **Step 2: Rodar o teste e confirmar que falha**

Run: `npx tsx tests/header-tipografia.test.ts`

Expected: FAIL, saindo com código 1, com as quatro novas asserções falhando e as catorze da Task 1 passando.

- [ ] **Step 3: Inserir o filete e ajustar o respiro da descrição**

Em `src/components/layout/Header.tsx`, substituir o bloco que hoje vai da linha 41 à 45 — o comentário `{/* Description */}` e o parágrafo — por:

```tsx
        {/* Filete dourado decorativo */}
        <div
          aria-hidden="true"
          className="mx-auto mt-4 sm:mt-[18px] h-0.5 w-14 sm:w-16 lg:w-[72px] rounded bg-secondary-500/85"
        />

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-4 sm:mt-[18px] leading-relaxed">
          Todos os prazos e datas do processo eleitoral das Eleições Gerais de
          2026, organizados para você.
        </p>
```

A única mudança no parágrafo é a margem superior, que sai de `mt-3` para `mt-4 sm:mt-[18px]`, para equilibrar o espaço nos dois lados do filete.

- [ ] **Step 4: Rodar o teste e confirmar que passa**

Run: `npx tsx tests/header-tipografia.test.ts`

Expected: PASS, `=== RESULTADO: 18/18 testes passaram ===`, saindo com código 0.

- [ ] **Step 5: Subir o servidor de desenvolvimento**

Run: `npm run dev`

Deixar rodando em segundo plano. Confirmar que responde em `http://localhost:5173`.

- [ ] **Step 6: Criar o script de verificação visual responsiva**

Gravar o arquivo **fora do repositório**, no diretório de rascunho da sessão, para não sujar o projeto. Conteúdo exato:

```javascript
const comet = require("C:/Users/wwsilva/.claude/browser-automation/comet-browser.cjs");

const LARGURAS = [320, 375, 640, 768, 1280];

(async () => {
  const browser = await comet.launch();
  let problemas = 0;

  for (const w of LARGURAS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 800 } });
    const page = await ctx.newPage();
    await page.goto("http://localhost:5173/");
    await page.waitForLoadState("load");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1500);

    const m = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const cs = getComputedStyle(h1);
      const alturaDeLinha = parseFloat(cs.lineHeight);
      return {
        vw: window.innerWidth,
        corpo: cs.fontSize,
        familiaComputada: cs.fontFamily,
        loraCarregada: document.fonts.check(`700 ${cs.fontSize} Lora`),
        linhas: Math.round(h1.getBoundingClientRect().height / alturaDeLinha),
        scrollHorizontal: document.documentElement.scrollWidth > window.innerWidth,
      };
    });

    const ok = m.linhas === 2 && !m.scrollHorizontal && m.loraCarregada;
    if (!ok) problemas++;
    console.log(
      `${ok ? "OK  " : "ERRO"} vw=${m.vw} corpo=${m.corpo} linhas=${m.linhas} ` +
        `loraCarregada=${m.loraCarregada} scrollH=${m.scrollHorizontal} familia="${m.familiaComputada}"`,
    );

    await page.screenshot({ path: `titulo-${w}.png`, fullPage: false });
    await ctx.close();
  }

  await browser.close();
  console.log(problemas === 0 ? "\nTODAS AS LARGURAS OK" : `\n${problemas} LARGURA(S) COM PROBLEMA`);
  process.exit(problemas === 0 ? 0 : 1);
})().catch((e) => {
  console.error("FALHOU:", e.message);
  process.exit(1);
});
```

- [ ] **Step 7: Rodar a verificação visual e conferir os números**

Run: o script do passo anterior, com `NODE_PATH` apontando para os pacotes globais:

```bash
NODE_PATH=C:/Users/wwsilva/AppData/Roaming/npm/node_modules node <caminho-do-script>.cjs
```

Expected: `TODAS AS LARGURAS OK`, com `linhas=2` e `scrollHorizontal=false` nas cinco larguras, `loraCarregada=true` em todas e `corpo` valendo 30 px em 320 e 375, 48 px em 640 e 768, e 56 px em 1280. Se `loraCarregada` vier `false`, a fonte não chegou e o título está caindo no Georgia — investigar a requisição do Google Fonts antes de prosseguir.

- [ ] **Step 8: Inspecionar os cinco screenshots**

Abrir `titulo-320.png` a `titulo-1280.png` e confirmar, a olho: o título em serifa, o filete dourado centralizado entre título e descrição, nenhum recorte de letra nas bordas e o countdown ainda visível na primeira tela em 1280 px.

- [ ] **Step 9: Rodar a suíte completa e o build**

Run: `npx tsc --noEmit && npm run build && npx tsx tests/header-tipografia.test.ts && npx tsx tests/links-referencia.test.ts && npx tsx tests/ics.test.ts && npx tsx tests/security.test.ts`

Expected: type-check limpo, build concluído, e os quatro arquivos de teste passando — 18/18, 11/11, 24/24 e 25/25 respectivamente.

Run: `npm run lint`

Expected: os mesmos **6 erros preexistentes** do Step 7 da Task 1, nem um a mais, e nenhum deles em `src/components/layout/Header.tsx` ou `tests/header-tipografia.test.ts`.

- [ ] **Step 10: Registrar no CHANGELOG**

Inserir esta entrada em `Documentations/CHANGELOG.md`, imediatamente abaixo da linha `# Changelog` e antes da entrada de `[2026-08-12] Programa Seu Voto Importa`. Conferir os números da seção de validação contra o que foi efetivamente observado nos passos 7 e 9 e corrigi-los se divergirem:

```markdown
## [2026-08-12] Título do Header em serifa Lora, com escala ampliada e filete dourado

O título "Calendário Eleitoral / Eleições 2026" usava Inter no peso 700 a 36 px no desktop — o mesmo peso máximo carregado para todo o resto do site, o que não criava hierarquia alguma entre o título e o corpo da interface. Passa a usar a serifa Lora no peso 700, em escala de 30 px no mobile, 48 px a partir de 640 px e 56 px a partir de 1024 px, com um filete dourado decorativo separando o título da descrição.

O destaque vem de contraste de família, não de massa tipográfica. Cinco famílias foram renderizadas sobre o gradiente real do Header antes da escolha; a alternativa de manter Inter e subir para os pesos 800 ou 900 foi renderizada e descartada por soar a produto de tecnologia em vez de Justiça Eleitoral.

**Arquivos modificados:**
- `index.html` — família Lora acrescentada à consulta do Google Fonts que já existia. **Apenas o peso 700**, que é o único com consumidor.
- `tailwind.config.js` — novo token `fontFamily.display`, resolvendo para `["Lora", "Georgia", "serif"]`. O fallback Georgia é deliberado: durante a troca do `display=swap` a substituição ocorre entre duas serifas, o que mantém pequeno o deslocamento de layout. Um fallback sem serifa produziria salto visível de sans para serifa.
- `src/components/layout/Header.tsx` — `h1` com `font-display`, escala `text-3xl sm:text-5xl lg:text-[3.5rem]`, entrelinha 1,1, tracking -0,02 em e sombra `0 2px 12px rgba(0,0,0,0.30)`, que é o que descola a serifa do gradiente azul. Acrescentado o filete dourado de 2 px em `secondary-500` a 85%, com `aria-hidden`. A margem superior da descrição saiu de `mt-3` para `mt-4 sm:mt-[18px]`, equilibrando o espaço nos dois lados do filete.
- `Documentations/CHANGELOG.md` — registro desta sessão.

**Arquivos criados:**
- `tests/header-tipografia.test.ts` — 18 asserções que travam as decisões da spec: pesos requisitados da Lora, token e fallback do Tailwind, escala, sombra, entrelinha, tracking, unicidade do `h1`, cor do ano, dimensões e acessibilidade do filete, ausência de hexadecimal solto no Header e integridade da CSP das fontes.

**Nenhuma alteração de segurança.** A `netlify.toml` já autorizava `https://fonts.googleapis.com` em `style-src` e `https://fonts.gstatic.com` em `font-src`, porque o projeto já usava Google Fonts. A CSP não foi tocada, e um dos testes garante isso.

**Validação:**
- `npx tsc --noEmit` e `npm run build` sem erros.
- `tests/header-tipografia.test.ts`: 18/18. `tests/links-referencia.test.ts`: 11/11. `tests/ics.test.ts`: 24/24. `tests/security.test.ts`: 25/25.
- `npm run lint` segue com os 6 erros preexistentes de `src/lib/search.ts` e `tests/security.test.ts`, sem nenhum acréscimo. Esses erros são anteriores a esta sessão e não foram tocados.
- Verificação visual no navegador em 320, 375, 640, 768 e 1280 px: título em duas linhas em todas as larguras, sem scroll horizontal, e Lora efetivamente carregada — não o fallback.
- A escala foi medida, não estimada. O mobile foi primeiro testado a 32 px e recuou para 30 px porque a 320 px o título quebrava em três linhas. A 320 px a linha "Calendário Eleitoral" ocupa 275 px dos 288 px disponíveis, que é o limite da composição em uma linha.
- A suíte e2e do Playwright não entrou na verificação: os navegadores do Playwright local não estão baixados e `npx playwright test` falha pedindo `npx playwright install`. Situação preexistente, não introduzida aqui.
```

- [ ] **Step 11: Commit**

```bash
git add tests/header-tipografia.test.ts src/components/layout/Header.tsx Documentations/CHANGELOG.md
git commit -m "feat: acrescenta filete dourado ao titulo do Header e registra a mudanca"
```

---

## Notas de execução

**O e2e do repositório não roda sem preparação.** `npx playwright test` falha com a mensagem "Please run the following command to download new browsers", porque os navegadores do Playwright local não estão baixados. Este plano não depende dele. Se houver interesse em incluir a suíte e2e na verificação, rode antes `npm run playwright:install` — é um download da ordem de centenas de megabytes e deve ser decisão explícita, não efeito colateral desta tarefa.

**Por que asserções sobre o texto-fonte.** O projeto já valida decisões de dados e de configuração lendo arquivos com `readFileSync`, em `tests/links-referencia.test.ts`. Seguir esse padrão mantém a verificação rápida e sem dependência de navegador; o comportamento visual, que texto-fonte não alcança, é coberto pelo passo do Comet.

**Regressão que o teste guarda.** Se alguém trocar a escala, remover a sombra, carregar pesos extras da Lora, mexer na CSP das fontes ou introduzir hexadecimal solto no Header, `tests/header-tipografia.test.ts` falha e aponta qual decisão da spec foi rompida.
