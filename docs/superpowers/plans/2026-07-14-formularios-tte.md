# Formulários TTE individualizados Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o link genérico da Extranet por quatro formulários diretos do TRE-PB nos eventos de TTE de 20 de julho e 20 de agosto de 2026.

**Architecture:** Manter os links nas observações textuais dos eventos, usando o parser Markdown restrito já existente em `EventDetail`. Preservar quebras de linha no aviso para apresentar os formulários como uma lista vertical, sem alterar tipos ou adicionar dependências.

**Tech Stack:** React 19, TypeScript 5.9, Tailwind CSS 3, Playwright 1.58, Vite 7.

---

## Estrutura de arquivos

- `e2e/calendario.spec.ts`: cobrir a renderização e os destinos dos quatro formulários em ambos os eventos.
- `src/data/eventos.ts`: substituir as observações dos eventos `2026-07-20-20` e `2026-08-20-1`.
- `src/components/timeline/EventDetail.tsx`: preservar as quebras de linha presentes nas observações.
- `Documentations/CHANGELOG.md`: registrar a atualização de conteúdo e apresentação.

### Task 1: Criar o teste de regressão dos formulários

**Files:**
- Modify: `e2e/calendario.spec.ts`

- [ ] **Step 1: Escrever o teste inicialmente falho**

Adicionar dentro do `test.describe`:

```typescript
  test('deve individualizar os formulários de TTE nos eventos de 20 de julho e 20 de agosto', async ({ page }) => {
    const formularios = [
      {
        nome: 'Presos provisórios',
        url: 'https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-presos-provisorios/@@display-file/file/TRE-PB-requerimento-tte-presos-provisorios.pdf',
      },
      {
        nome: 'Militares',
        url: 'https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-militares-em-transito/@@display-file/file/TRE-PB-requerimento-tte-militares-em-transito.pdf',
      },
      {
        nome: 'Juízas, juízes, promotoras, promotores eleitorais e servidoras e servidores da Justiça Eleitoral',
        url: 'https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-servidores-justica-eleitoral/@@display-file/file/TRE-PB-requerimento-tte-servidores-justica-eleitoral.pdf',
      },
      {
        nome: 'Pessoas em serviço em unidades penais ou de internação',
        url: 'https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao/@@display-file/file/TRE-PB-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao.pdf',
      },
    ];

    for (const eventId of ['2026-07-20-20', '2026-08-20-1']) {
      const mes = eventId.slice(0, 7);
      await page.goto(`/?mes=${mes}`);

      const card = page.locator(`[data-event-id="${eventId}"]`);
      await expect(card).toBeVisible();
      await card.getByRole('button', { name: /Abrir detalhes:/ }).click();

      for (const formulario of formularios) {
        const link = card.getByRole('link', { name: formulario.nome, exact: true });
        await expect(link).toHaveAttribute('href', formulario.url);
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }

      await expect(card.getByRole('link', { name: 'Extranet do TSE' })).toHaveCount(0);
    }
  });
```

- [ ] **Step 2: Executar o teste e confirmar a falha esperada**

Run:

```powershell
npx playwright test e2e/calendario.spec.ts --project=chromium --grep "individualizar os formulários"
```

Expected: `FAIL`, porque o primeiro link `Presos provisórios` ainda não existe no evento de julho.

- [ ] **Step 3: Versionar somente o teste vermelho**

```powershell
git add -- e2e/calendario.spec.ts
git commit -m "test: cobre formularios individualizados de TTE"
```

### Task 2: Implementar a lista vertical nos dois eventos

**Files:**
- Modify: `src/data/eventos.ts:1895-1896`
- Modify: `src/data/eventos.ts:2840-2841`
- Modify: `src/components/timeline/EventDetail.tsx:78-80`

- [ ] **Step 1: Atualizar a observação do evento de 20 de julho**

Substituir `observacoes` de `2026-07-20-20` por:

```typescript
    observacoes:
      "Eleitores em situações especiais (viagem, internação, serviço no dia da eleição, deficiência, etc.) podem solicitar o voto em trânsito — votar fora da sua seção de origem — até 20/08/2026. Formulários para transferência temporária (TTE):\n• [Presos provisórios](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-presos-provisorios/@@display-file/file/TRE-PB-requerimento-tte-presos-provisorios.pdf)\n• [Militares](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-militares-em-transito/@@display-file/file/TRE-PB-requerimento-tte-militares-em-transito.pdf)\n• [Juízas, juízes, promotoras, promotores eleitorais e servidoras e servidores da Justiça Eleitoral](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-servidores-justica-eleitoral/@@display-file/file/TRE-PB-requerimento-tte-servidores-justica-eleitoral.pdf)\n• [Pessoas em serviço em unidades penais ou de internação](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao/@@display-file/file/TRE-PB-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao.pdf)",
```

- [ ] **Step 2: Repetir os quatro formulários no evento de 20 de agosto**

Substituir `observacoes` de `2026-08-20-1` por:

```typescript
    observacoes:
      "Último prazo para eleitores em situações especiais (viagem, serviço de mesário, militar em serviço, pessoa com deficiência, etc.) solicitarem o voto em trânsito. Formulários para transferência temporária (TTE):\n• [Presos provisórios](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-presos-provisorios/@@display-file/file/TRE-PB-requerimento-tte-presos-provisorios.pdf)\n• [Militares](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-militares-em-transito/@@display-file/file/TRE-PB-requerimento-tte-militares-em-transito.pdf)\n• [Juízas, juízes, promotoras, promotores eleitorais e servidoras e servidores da Justiça Eleitoral](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-servidores-justica-eleitoral/@@display-file/file/TRE-PB-requerimento-tte-servidores-justica-eleitoral.pdf)\n• [Pessoas em serviço em unidades penais ou de internação](https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao/@@display-file/file/TRE-PB-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao.pdf)",
```

- [ ] **Step 3: Preservar as quebras de linha no aviso**

Alterar a classe do parágrafo em `EventDetail`:

```tsx
          <p className="text-xs text-primary-700 leading-relaxed whitespace-pre-line break-words">
            {parseObservacoes(evento.observacoes!)}
          </p>
```

- [ ] **Step 4: Executar o teste e confirmar que passa**

Run:

```powershell
npx playwright test e2e/calendario.spec.ts --project=chromium --grep "individualizar os formulários"
```

Expected: `1 passed`.

- [ ] **Step 5: Executar o teste nas duas dimensões-alvo**

```powershell
npx playwright test e2e/calendario.spec.ts --project=chromium --project="Mobile Chrome" --grep "individualizar os formulários"
```

Expected: `2 passed`, sem estouro horizontal ou link encoberto.

- [ ] **Step 6: Versionar a implementação**

```powershell
git add -- src/data/eventos.ts src/components/timeline/EventDetail.tsx
git commit -m "feat: individualiza formularios de TTE"
```

### Task 3: Documentar e validar a alteração completa

**Files:**
- Modify: `Documentations/CHANGELOG.md:1`

- [ ] **Step 1: Adicionar a entrada do changelog**

Inserir após `# Changelog`:

```markdown
## [2026-07-14] Formulários de transferência temporária individualizados

Os eventos de início e encerramento da habilitação para voto em trânsito agora oferecem acesso direto aos quatro formulários de transferência temporária de eleitores disponibilizados pelo TRE-PB.

**Arquivos modificados:**
- `src/data/eventos.ts` — substituição do link genérico da Extranet pelos formulários para presos provisórios, militares, membros e servidores da Justiça Eleitoral e pessoas em serviço em unidades penais ou de internação nos eventos `2026-07-20-20` e `2026-08-20-1`.
- `src/components/timeline/EventDetail.tsx` — preservação das quebras de linha nas observações para exibir os formulários em lista vertical.
- `e2e/calendario.spec.ts` — cobertura automatizada dos rótulos, destinos e atributos seguros dos links nos dois eventos.
```

- [ ] **Step 2: Executar toda a suíte E2E no Chromium**

```powershell
npx playwright test --project=chromium
```

Expected: todos os testes passam, sem falhas.

- [ ] **Step 3: Executar lint, verificação de tipos e build**

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

Expected: os três comandos encerram com código `0`, sem erros.

- [ ] **Step 4: Conferir visualmente o evento em mobile e desktop**

Abrir `/?mes=2026-07`, expandir o card `2026-07-20-20` em 375 px e desktop; repetir em `/?mes=2026-08` para `2026-08-20-1`. Confirmar quatro linhas legíveis, quebra de palavras longas, ausência da Extranet e nenhum estouro horizontal.

- [ ] **Step 5: Conferir o diff final**

```powershell
git diff --check
git status --short
git diff HEAD~2 -- e2e/calendario.spec.ts src/data/eventos.ts src/components/timeline/EventDetail.tsx Documentations/CHANGELOG.md
```

Expected: nenhum erro de whitespace; somente os arquivos previstos aparecem no escopo da feature, além dos documentos de design e plano já aprovados.

- [ ] **Step 6: Versionar o changelog**

```powershell
git add -- Documentations/CHANGELOG.md
git commit -m "docs: registra formularios individualizados de TTE"
```
