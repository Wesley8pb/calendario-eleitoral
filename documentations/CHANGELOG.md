# Changelog

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
