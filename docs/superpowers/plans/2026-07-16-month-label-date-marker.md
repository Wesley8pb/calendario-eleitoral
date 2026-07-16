# Month Label Date Marker Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Automated tests are intentionally omitted because the user explicitly requested visual review in localhost only.

**Goal:** Exibir uma abreviação discreta do mês sob todos os círculos de data da timeline.

**Architecture:** Manter a mudança isolada em `DateMarker.tsx`. O componente extrai o segmento mensal da data ISO, consulta um mapeamento português local e posiciona o rótulo de forma absoluta para preservar a densidade vertical existente.

**Tech Stack:** React, TypeScript, Tailwind CSS.

---

### Task 1: Adicionar o rótulo mensal ao marcador

**Files:**
- Modify: `src/components/timeline/DateMarker.tsx`

- [ ] **Step 1: Definir o mapeamento dos meses**

Adicionar antes do componente:

```tsx
const MESES = [
  { abreviacao: "JAN", nome: "janeiro" },
  { abreviacao: "FEV", nome: "fevereiro" },
  { abreviacao: "MAR", nome: "março" },
  { abreviacao: "ABR", nome: "abril" },
  { abreviacao: "MAI", nome: "maio" },
  { abreviacao: "JUN", nome: "junho" },
  { abreviacao: "JUL", nome: "julho" },
  { abreviacao: "AGO", nome: "agosto" },
  { abreviacao: "SET", nome: "setembro" },
  { abreviacao: "OUT", nome: "outubro" },
  { abreviacao: "NOV", nome: "novembro" },
  { abreviacao: "DEZ", nome: "dezembro" },
] as const;
```

- [ ] **Step 2: Obter o mês da data ISO**

Substituir a desestruturação atual por:

```tsx
const [, month, day] = data.split("-");
const dayNum = parseInt(day, 10);
const mes = MESES[Number(month) - 1];
```

- [ ] **Step 3: Renderizar o rótulo sem alterar o fluxo vertical**

Após o círculo, ainda dentro de sua coluna, inserir:

```tsx
{mes && (
  <span
    className="absolute top-11 left-1/2 -translate-x-1/2 bg-neutral-50 px-1 text-[10px] font-semibold leading-none tracking-[0.08em] text-neutral-400"
    aria-label={`Mês de ${mes.nome}`}
  >
    {mes.abreviacao}
  </span>
)}
```

### Task 2: Registrar e revisar a alteração

**Files:**
- Modify: `Documentations/CHANGELOG.md`

- [ ] **Step 1: Registrar a mudança**

Adicionar uma entrada datada de `2026-07-16` descrevendo o rótulo de mês e listando `DateMarker.tsx` e este changelog.

- [ ] **Step 2: Revisar o diff**

Executar `git diff --check` e revisar o diff apenas dos arquivos alterados. Não executar testes automatizados, lint ou build.

- [ ] **Step 3: Exibir em localhost**

Iniciar `npm run dev -- --host 127.0.0.1`, abrir a URL local no navegador e manter a página disponível para conferência do usuário.
