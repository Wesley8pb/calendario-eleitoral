# Changelog

## [2026-07-14] Central de links de referência

O site passa a reunir 28 referências oficiais em uma seção própria após “Meus Eventos”, organizada em cinco categorias. Um novo botão no header leva diretamente à seção, e uma verificação de integridade garante que links informativos usados nos eventos também estejam presentes no catálogo central.

**Arquivos criados:**
- `src/data/linksReferencia.ts` — catálogo imutável com leis, resoluções, formulários TTE, manuais, orientações e portais oficiais, além de consulta por identificador.
- `src/components/links-referencia/LinksReferencia.tsx` — seção responsiva em cards, com uma coluna no mobile, duas no desktop e links externos acessíveis.
- `tests/links-referencia.test.ts` — verificação de quantidade, categorização, duplicidades, HTTPS e cobertura das URLs informativas dos eventos.
- `docs/superpowers/specs/2026-07-14-links-referencia-design.md` — especificação visual e funcional aprovada.
- `docs/superpowers/plans/2026-07-14-links-referencia.md` — plano técnico da implementação.

**Arquivos modificados:**
- `src/components/layout/Header.tsx` — inclusão do botão “Links de referência” e consumo centralizado das duas resoluções exibidas no topo.
- `src/components/layout/Footer.tsx` — substituição das URLs repetidas das resoluções por consultas ao catálogo; o Instagram permanece apenas como crédito pessoal.
- `src/App.tsx` — posicionamento da nova seção após “Meus Eventos” e antes do rodapé.
- `src/data/constants.ts` — URL da Resolução TSE nº 23.760/2026 passa a ser obtida do catálogo.
- `src/data/eventos.ts` — normalização da URL da Resolução TSE nº 23.659/2021 para o endereço canônico catalogado.
- `README.md` — documentação da regra obrigatória de manutenção do catálogo.

**Validação:**
- Catálogo confirmado com 28 referências únicas nas contagens aprovadas: 5 leis e códigos, 12 resoluções e normas, 4 formulários TTE, 6 manuais e orientações e 1 portal oficial.
- Verificação automatizada confirma a presença da Resolução TSE nº 23.610/2019, do Manual ELO de TTE e de todas as URLs informativas usadas nos eventos.
- Type-check, build de produção e lint dos arquivos alterados concluídos sem erros.
- O lint global ainda aponta seis ocorrências preexistentes em `HelpToast.tsx`, `search.ts` e `tests/security.test.ts`, não modificados nesta entrega.

## [2026-07-14] Formulários de transferência temporária individualizados

Os eventos de início e encerramento da habilitação para voto em trânsito agora oferecem acesso direto aos quatro formulários de transferência temporária de eleitores disponibilizados pelo TRE-PB.

**Arquivos modificados:**
- `src/data/eventos.ts` — substituição do link genérico da Extranet pelos formulários para presos provisórios, militares, membros e servidores da Justiça Eleitoral e pessoas em serviço em unidades penais ou de internação nos eventos `2026-07-20-20` e `2026-08-20-1`; o evento `2026-07-20-20` também foi marcado como destaque.
- `src/components/timeline/EventDetail.tsx` — preservação das quebras de linha nas observações para exibir os formulários em lista vertical.
- `.gitignore` — inclusão da pasta local `.worktrees/` entre os caminhos ignorados pelo Git.
- `docs/superpowers/specs/2026-07-14-formularios-tte-design.md` — especificação aprovada da alteração.
- `docs/superpowers/plans/2026-07-14-formularios-tte.md` — plano de implementação da alteração.

**Validação:**
- Testes automatizados dispensados por solicitação do responsável, que realizará a conferência visual pelo ambiente localhost.

## [2026-06-26] Contador regressivo: alvo ajustado para 08:00 (horário de Brasília)

O contador passava a zerar à meia-noite (00:00) do dia da eleição, no horário local do navegador. Agora mira a abertura da votação, às 08:00 no fuso de Brasília (UTC-3), para qualquer usuário independentemente do fuso do dispositivo.

**Arquivos modificados:**
- `src/data/constants.ts` — `PRIMEIRO_TURNO` e `SEGUNDO_TURNO` passam de `2026-10-04T00:00:00`/`2026-10-25T00:00:00` (hora local) para `2026-10-04T08:00:00-03:00`/`2026-10-25T08:00:00-03:00` (08:00 horário de Brasília).

## [2026-06-12] Atualizações de observações operacionais (julho 2026)

**Arquivos modificados:**
- `src/data/eventos.ts` — Atualização de observações nos eventos de alocação provisória (`2026-07-23-1`), consulta de locais/vagas para TTE (`2026-07-19-1`) e início da habilitação para TTE/voto em trânsito (`2026-07-20-20`).

**Detalhes da alteração:**
- Evento `2026-07-23-1` (23 de julho de 2026): adicionada observação destacando que alocações provisórias podem ocorrer até a véspera da eleição (com necessidade de planejamento e divulgação) e que refletem no e-Título.
- Eventos `2026-07-19-1` (19 de julho de 2026) e `2026-07-20-20` (20 de julho de 2026): adicionado hiperlink para a Extranet do TSE e orientação de download do documento *"Requerimento de Eleitores Transferidos Temporariamente e especificações"* para a transferência temporária de militares, policiais e servidores da Justiça Eleitoral em serviço no dia da eleição. No evento do dia 20/07, também foi incluído o perfil `atos-preparatorios` para melhor visibilidade administrativa.

## [2026-06-09] Segurança: validação reforçada na importação de "Meus Eventos"

Endurece a validação de eventos importados via arquivo `.json` para ficar consistente com as regras do formulário e evitar a entrada de dados malformados no `localStorage`.

**Arquivos modificados:**
- `src/hooks/useMeusEventos.ts` — `isValidEvento` agora rejeita `titulo` com mais de 120 caracteres e valida que `descricao`, quando presente, seja string.
- `src/components/meus-eventos/GerenciarEventosModal.tsx` — `isEventoValido` recebe as mesmas verificações (limite de 120 caracteres no `titulo` e checagem de tipo de `descricao`).

**Detalhes da alteração:**
- Antes, o limite de 120 caracteres no título e a obrigatoriedade de `descricao` ser texto eram garantidos apenas pelo formulário; a importação de arquivo não os aplicava. Agora ambos os caminhos compartilham as mesmas regras.

## [2026-05-28] Eventos de junho 2026: atualização de observação para alteração de situação por código ASE

**Arquivos modificados:**
- `src/data/eventos.ts` — Inclusão da data de alteração da situação nas observações do evento `2026-06-30-4` (restrição de ASE).

**Detalhes da alteração:**
- Adicionado nas observações do evento de 30 de junho de 2026: *"A alteração da situação somente se dará entre os dias 26 de outubro e 3 de novembro de 2026."*

## [2026-05-23] Feature: Seção "Meus Eventos" com criação, edição e exportação .ics via localStorage

Permite que o usuário registre até 20 eventos pessoais persistidos no `localStorage`, sem necessidade de backend. A seção aparece logo após o calendário interativo.

**Arquivos criados:**
- `src/types/custom.ts` — tipo `EventoCustom`, paleta de 8 cores, constante `MAX_MEUS_EVENTOS = 20`
- `src/hooks/useMeusEventos.ts` — CRUD com validação + persistência em `localStorage` (padrão do `useFavoritos`)
- `src/components/meus-eventos/MeusEventos.tsx` — seção com header, grid de cards, exportação em lote e estado vazio
- `src/components/meus-eventos/MeuEventoCard.tsx` — card com borda colorida, urgência, edição, exclusão com confirmação e export .ics individual
- `src/components/meus-eventos/MeuEventoForm.tsx` — modal form responsivo (bottom-sheet mobile / drawer `lg:`): campos título, data, notas, seletor de cor

**Arquivos modificados:**
- `src/types/index.ts` — campo opcional `corPersonalizada?` em `EventoCalendario`
- `src/hooks/useFilteredEvents.ts` — campo `apenasMeusEventos` em `FilterState`; lógica de exclusão/inclusão de eventos customizados na timeline
- `src/hooks/useUrlFilters.ts` — `apenasMeusEventos` ignorado na URL (estado pessoal do browser)
- `src/lib/ics.ts` — funções `buildCustomEventIcs` e `buildCustomEventsIcs` com suporte a `CalendarReminder`
- `src/lib/utils.ts` — função `toEventoCalendario` (converte `EventoCustom` → `EventoCalendario` para exibição na timeline)
- `src/components/filters/FilterPanel.tsx` — botão "Meus eventos" ao lado do de favoritos (seção "Pessoais"); stats box adaptativos; `totalMeusEventos` como nova prop
- `src/components/timeline/EventCard.tsx` — renderização diferenciada para eventos customizados (chip colorido "Meu evento" em vez de badges de categoria)
- `src/App.tsx` — integração completa: `useMeusEventos`, merge de arrays para `useFilteredEvents`, seção `<MeusEventos />`, `totalMeusEventos` no `FilterPanel`

## [2026-05-22] Eventos de junho-julho 2026: novos cards e observações operacionais

**Arquivos modificados:**
- `src/data/eventos.ts` — 3 eventos novos inseridos; 9 eventos existentes receberam `observacoes`; 3 eventos tiveram `fundamentacao` atualizada

**Novos eventos:**
- `2026-06-13-1` — Manutenção preventiva do Sistema ELO (13-14/06)
- `2026-06-18-1` — Último dia para envio ao TSE dos lotes de RAE corrigidos no banco de erros
- `2026-06-25-2` — Último dia para digitação de decisões de coincidências

**Observações adicionadas aos eventos existentes:**
- `2026-06-03-1` (envio lotes RAE e biometria), `2026-06-03-2` (pedidos de alteração excepcional na CGE), `2026-06-08-1` (alteração/indeferimento/exclusão de RAE), `2026-06-09-2` (processamento automático de RAEs), `2026-06-15-1` (regularização de histórico na CGE), `2026-06-22-2` (DE-PARA 1-5), `2026-06-25-1` (DE-PARA 6), `2026-06-30-3` (DE-PARA 7), `2026-07-06-3` (encerramento do cadastro)

**Fundamentação legal atualizada:**
- `2026-06-03-2` — acrescentado art. 10, parágrafo único, I da Resolução 23.750/2026
- `2026-06-08-1` — acrescentado art. 9º, § 3º da Resolução 23.750/2026
- `2026-06-25-2` (novo) — inclui Resolução TSE nº 23.659/2021
- `2026-06-30-3` — acrescentado Provimento CGE nº 2/2024

**Fonte:** Comunicado 6 da Corregedoria Regional Eleitoral da PB (SEI 0004523-71.2026.6.15.8100) e Resolução TSE nº 23.750/2026.

## [2026-05-22] Botão "Favoritar Todos / Desfavoritar Todos"

**Arquivos modificados:**
- `src/hooks/useFavoritos.ts` — adicionados métodos `favoritarTodos` e `desfavoritarTodos` para operação em lote
- `src/App.tsx` — lógica de toggle em lote com `useMemo`, botão na toolbar do Calendário Interativo
- `e2e/calendario.spec.ts` — 3 novos testes e2e para o botão

**Descrição:** Novo botão na toolbar do Calendário Interativo permite favoritar ou desfavoritar todos os eventos visíveis com um clique. Quando nenhum evento visível está favoritado, o botão exibe "Favoritar todos" (ícone Star); quando qualquer evento visível está favoritado, exibe "Desfavoritar todos" (ícone StarOff). Opera respeitando os filtros ativos.

## [2026-05-21] - Navegação de Próximos Eventos e Correções de Paleta

### Adicionado
- Propriedade opcional `onSelectEvent` no componente `ProximosEventos` para delegar a navegação de cards para o coordenador central.
- Listener para o evento customizado `"open-event"` no componente `EventCard` para expandir os detalhes do evento programaticamente.
- Cores `primary-800`, `primary-600`, `primary-400` e `primary-300` ausentes em `tailwind.config.js` mas utilizadas na estilização de botões, chevrons, bordas e estados de hover dos componentes.

### Corrigido
- Comportamento de clique inativo na seção "Próximos Eventos" que agora rola até o calendário, limpa filtros se necessário, expande o mês, aguarda o render da timeline e abre o card selecionado automaticamente.
- Bug de visualização no botão circular (chevron) de expansão do card de evento ao ser aberto. Para evitar riscos de invisibilidade (white-on-white) decorrentes de cache de CSS antigos ou incompatibilidades, mudamos a cor do botão expandido de azul escuro com texto branco (`bg-primary-700 text-white`) para azul claro com texto azul escuro (`bg-primary-100 text-primary-700`). Essa combinação é 100% visível, nítida e segura contra fundos claros.
