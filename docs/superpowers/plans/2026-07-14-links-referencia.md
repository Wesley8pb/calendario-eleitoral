# Central de Links de Referência — Plano de Implementação

> **Objetivo:** implementar o catálogo central aprovado com 28 referências oficiais, navegação pelo header, seção responsiva após “Meus Eventos”, reutilização das URLs fixas e verificação automática de integridade.

**Arquitetura:** um módulo de dados imutável será a fonte única das referências e dos metadados das cinco categorias. Um componente de apresentação agrupará os itens conforme a ordem do catálogo. Header e rodapé consultarão as resoluções por `id`, enquanto um teste de integridade comparará o catálogo com as URLs informativas existentes nos eventos.

**Stack:** React 19, TypeScript 5.9, Tailwind CSS 3.4, Lucide React, Vite 7 e testes TypeScript executados diretamente pelo Node 24.

---

## Tarefa 1 — Criar a verificação de integridade em estado vermelho

**Arquivo:**

- Criar `tests/links-referencia.test.ts`.

**Passos:**

1. Importar `eventos` e carregar dinamicamente `src/data/linksReferencia.ts`, tratando a ausência do módulo como catálogo vazio para produzir falhas de asserção, não erro de execução.
2. Implementar o mesmo executor simples usado pelos demais testes do projeto.
3. Cobrir estes contratos:
   - o catálogo existe;
   - há 28 itens;
   - as contagens são 5, 12, 4, 6 e 1;
   - IDs e URLs não se repetem;
   - todos os itens usam HTTPS;
   - todas as URLs Markdown de `observacoes` estão no catálogo;
   - todas as URLs não vazias de `fundamentacao` estão no catálogo;
   - a Resolução TSE nº 23.610/2019 e o Manual ELO TTE estão presentes;
   - o Instagram dos créditos não está presente.
4. Executar `node tests/links-referencia.test.ts` e confirmar a falha esperada pela ausência do catálogo.

## Tarefa 2 — Implementar a fonte central de dados

**Arquivo:**

- Criar `src/data/linksReferencia.ts`.

**Passos:**

1. Declarar `CategoriaLinkReferencia` com os valores:
   - `leis-codigos`;
   - `resolucoes-normas`;
   - `formularios-tte`;
   - `manuais-orientacoes`;
   - `portais-consultas`.
2. Declarar `IconeCategoriaLink` e as interfaces `LinkReferencia` e `CategoriaLinksReferencia`.
3. Exportar `categoriasLinksReferencia` na ordem aprovada, com título, ícone e indicação de card largo apenas para portais.
4. Exportar `linksReferencia` com os 28 títulos e URLs exatos do documento de especificação, mantendo os títulos curtos aprovados.
5. Exportar `getLinkReferencia(id)`, lançando erro explícito quando um identificador obrigatório não existir.
6. Usar os identificadores estáveis:
   - `lei-9504-1997`, `lei-4737-1965`, `lei-6091-1974`, `lei-9096-1995`, `lc-64-1990`;
   - `res-tse-23760-2026`, `res-tse-23750-2026`, `res-tse-23610-2019`, `res-tse-23607-2019`, `res-tse-23673-2021`, `res-tse-23609-2019`, `res-tse-23608-2019`, `res-tse-23735-2024`, `res-tse-23600-2019`, `res-tse-23659-2021`, `res-tse-9641-1974`, `prov-cge-2-2024`;
   - `form-tte-presos`, `form-tte-militares`, `form-tte-justica-eleitoral`, `form-tte-unidades-penais`;
   - `manual-elo-de-para-5`, `manual-elo-de-para-6`, `manual-elo-de-para-7`, `manual-convoca-mais`, `video-convoca-mais`, `manual-elo-tte`;
   - `extranet-tse-tte`.
7. Executar novamente o teste e confirmar que os contratos de dados passam.

## Tarefa 3 — Construir a seção visual aprovada

**Arquivo:**

- Criar `src/components/links-referencia/LinksReferencia.tsx`.

**Passos:**

1. Mapear os nomes de ícone do catálogo para componentes Lucide sem armazenar elementos React no módulo de dados.
2. Renderizar um `section` com `id="links-referencia"`, fundo neutro, cabeçalho central e largura máxima compatível com o restante do site.
3. Renderizar as cinco categorias como `article`, agrupando os itens por categoria e exibindo a contagem.
4. Usar uma coluna no mobile e duas em `lg`; o card de portais ocupará as duas colunas no desktop.
5. Renderizar cada item em `ul > li > a`, com título completo, `ExternalLink`, quebra segura de texto, foco visível, `target="_blank"` e `rel="noopener noreferrer"`.
6. Manter a paleta institucional: azul primário, dourado secundário e neutros existentes.

## Tarefa 4 — Integrar navegação, seção e fontes fixas

**Arquivos:**

- Modificar `src/components/layout/Header.tsx`.
- Modificar `src/App.tsx`.
- Modificar `src/components/layout/Footer.tsx`.

**Passos:**

1. No header:
   - importar `Link2`;
   - consultar `res-tse-23760-2026` e `res-tse-23750-2026` no catálogo;
   - substituir as duas URLs literais pelos itens consultados;
   - permitir quebra de linha no grupo de navegação;
   - adicionar o botão “Links de referência” chamando `scrollTo("links-referencia")`.
2. Em `App.tsx`:
   - importar `LinksReferencia`;
   - renderizá-lo imediatamente após `MeusEventos` e antes do painel flutuante/rodapé.
3. No rodapé:
   - obter as duas resoluções pelo catálogo;
   - remover as URLs informativas duplicadas;
   - manter o Instagram como crédito pessoal fora do catálogo.

## Tarefa 5 — Documentar a regra de manutenção

**Arquivos:**

- Modificar `README.md`.
- Modificar `documentations/CHANGELOG.md`.

**Passos:**

1. Adicionar ao README uma seção “Links de referência” explicando:
   - a localização do catálogo;
   - a obrigação de cadastrar todo novo link informativo usado em evento, observação ou componente;
   - a exceção para créditos pessoais expressamente identificados;
   - o teste de integridade a executar.
2. Registrar no changelog a nova seção, o botão, a centralização das URLs, a documentação, o teste e todos os arquivos modificados, seguindo o padrão já existente.

## Tarefa 6 — Verificar a entrega

**Passos:**

1. Executar `node tests/links-referencia.test.ts`.
2. Executar `npm run lint`.
3. Executar `npx tsc --noEmit -p tsconfig.app.json`.
4. Executar `npm run build`.
5. Fazer inspeção estática final confirmando:
   - 28 itens e cinco categorias;
   - seção após “Meus Eventos” e antes do rodapé;
   - destino `#links-referencia` no header;
   - ausência de URL literal das duas resoluções no header e no rodapé;
   - atributos seguros em todos os links da seção.
6. Não executar Playwright: o navegador automatizado não está instalado neste worktree e o usuário fará a conferência visual no localhost.
7. Revisar o diff completo e criar um commit único da implementação.

