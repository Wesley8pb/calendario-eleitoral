# Changelog

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
