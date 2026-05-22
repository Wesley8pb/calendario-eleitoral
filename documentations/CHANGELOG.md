# Changelog

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
