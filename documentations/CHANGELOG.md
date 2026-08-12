# Changelog

## [2026-08-12] Título do Header em serifa Lora, com escala ampliada e filete dourado

O título "Calendário Eleitoral / Eleições 2026" usava Inter no peso 700 a 36 px no desktop — o mesmo peso máximo carregado para todo o resto do site, o que não criava hierarquia alguma entre o título e o corpo da interface. Passa a usar a serifa Lora no peso 700, em escala de 30 px no mobile, 48 px a partir de 640 px e 56 px a partir de 1024 px, com um filete dourado decorativo separando o título da descrição.

O destaque vem de contraste de família, não de massa tipográfica. Cinco famílias foram renderizadas sobre o gradiente real do Header antes da escolha; a alternativa de manter Inter e subir para os pesos 800 ou 900 foi renderizada e descartada por soar a produto de tecnologia em vez de Justiça Eleitoral.

**Arquivos modificados:**
- `index.html` — família Lora acrescentada à consulta do Google Fonts que já existia. **Apenas o peso 700**, que é o único com consumidor.
- `tailwind.config.js` — novo token `fontFamily.display`, resolvendo para `["Lora", "Georgia", "serif"]`. O fallback Georgia é deliberado: durante a troca do `display=swap` a substituição ocorre entre duas serifas, o que mantém pequeno o deslocamento de layout. Um fallback sem serifa produziria salto visível de sans para serifa.
- `src/components/layout/Header.tsx` — `h1` com `font-display`, escala `text-3xl sm:text-5xl lg:text-[3.5rem]`, entrelinha 1,1, tracking -0,02 em e sombra `0 2px 12px rgba(0,0,0,0.30)`, que é o que descola a serifa do gradiente azul. Acrescentado o filete dourado de 2 px em `secondary-500` a 85%, com `aria-hidden`. A margem superior da descrição saiu de `mt-3` para `mt-4 sm:mt-[18px]`, equilibrando o espaço nos dois lados do filete.
- `documentations/CHANGELOG.md` — registro desta sessão.

**Arquivos criados:**
- `tests/header-tipografia.test.ts` — 20 asserções que travam as decisões da spec: pesos requisitados da Lora, token e fallback do Tailwind, escala, sombra, entrelinha, tracking, unicidade do `h1`, cor do ano, dimensões e acessibilidade do filete, ausência de literais de cor fora da paleta no Header e integridade da CSP das fontes.

**Nenhuma alteração de segurança.** A `netlify.toml` já autorizava `https://fonts.googleapis.com` em `style-src` e `https://fonts.gstatic.com` em `font-src`, porque o projeto já usava Google Fonts. A CSP não foi tocada, e um dos testes garante isso.

**Validação:**
- `npx tsc --noEmit` e `npm run build` sem erros.
- `tests/header-tipografia.test.ts`: 20/20. `tests/links-referencia.test.ts`: 11/11. `tests/ics.test.ts`: 24/24. `tests/security.test.ts`: 25/25. Contagens conferidas na própria `main` após o merge, não apenas no branch.
- `npm run lint` segue com os 6 erros preexistentes de `src/components/ui/HelpToast.tsx`, `src/lib/search.ts` e `tests/security.test.ts`, sem nenhum acréscimo. Esses erros são anteriores a esta sessão e não foram tocados.
- Verificação visual no navegador em 320, 375, 640, 768 e 1280 px: título em duas linhas em todas as larguras, sem scroll horizontal, e Lora efetivamente carregada — não o fallback.
- A escala foi medida, não estimada. O mobile foi primeiro testado a 32 px e recuou para 30 px porque a 320 px o título quebrava em três linhas. A 320 px a linha "Calendário Eleitoral" ocupa 275 px dos 288 px disponíveis, que é o limite da composição em uma linha.
- A suíte e2e do Playwright não entrou na verificação: os navegadores do Playwright local não estão baixados e `npx playwright test` falha pedindo `npx playwright install`. Situação preexistente, não introduzida aqui.
- **Onda de correções do review final do branch (mesma sessão):** sete achados Minor corrigidos — `perfis` dos eventos de vedação de transporte (`2026-10-04-10`, `2026-10-25-7`) passa a incluir `eleitor`; `observacoes` do evento `2026-10-05-5` deixa de atribuir ao art. 5º uma renovação de pedido que ele não prevê; removido parágrafo defasado sobre carregamento do peso 600 na spec de tipografia; `tests/header-tipografia.test.ts` ganhou ancoragem por `h-0.5` na extração do filete, checagem de hex de 3 dígitos e de `hsl(`, renomeação da asserção de hex de 6 dígitos e escopo do texto do `h1` restrito à própria marcação do elemento; e corrigida a grafia `Documentations/CHANGELOG.md` → `documentations/CHANGELOG.md` nas duas entradas de 2026-08-12.
- **Supressão de verificação de design (mesma sessão):** o hook de design do Impeccable sinaliza a Inter como fonte manjada em `index.html`. Registrada supressão no valor mais estreito possível — regra `overused-font` apenas para o valor `inter` — em `.impeccable/config.json`, com o motivo apontando a decisão: manter a Inter no corpo do site foi escolha explícita, e a spec põe a troca da fonte do corpo em Fora de escopo. A personalidade tipográfica vem da Lora no título. A regra segue ativa para todas as outras fontes manjadas.

## [2026-08-12] Programa Seu Voto Importa: fundamentação na Resolução TSE nº 23.753/2026 e vedação de transporte por candidatos e partidos

O calendário já citava textualmente a "Resolução que disciplina o Programa Seu Voto Importa" em quatro eventos de transporte especial, mas sem nunca identificá-la e com `fundamentacao` vazia. A norma foi localizada — Resolução TSE nº 23.753/2026, de 26 de fevereiro de 2026 — e os quatro eventos passam a apontar para ela. Da leitura integral da resolução, o único dispositivo com relevância temporal ainda ausente do calendário era a vedação do art. 3º, § 2º, que ganha eventos próprios nos dois dias de votação.

Nenhum prazo novo com data fixa decorre da resolução: os dois marcos que ela cria (pedido até 20 dias antes e confirmação até 48 horas antes) já constavam do calendário, derivados da Resolução nº 23.760/2026.

**Eventos criados (2):**
- `2026-10-04-10` e `2026-10-25-7` — vedação a candidatas, candidatos, órgãos partidários, federações, coligações ou qualquer pessoa de fornecer transporte a eleitoras ou eleitores no dia da votação, para o primeiro e o segundo turno. Categorias `CON` e `TRA`; perfis candidato, partido e advogado. As `observacoes` registram a faculdade de fiscalização dos partidos prevista no art. 3º, § 3º, com a vedação de interferência, patrocínio, promoção ou benefício político.

**Arquivos modificados:**
- `src/data/eventos.ts` — eventos `2026-09-14-4` (art. 5º, caput, e art. 4º, que ampara as comunidades indígenas, quilombolas e tradicionais), `2026-10-05-5` (art. 5º, caput), `2026-10-02-1` e `2026-10-23-1` (art. 3º, IV) recebem `fundamentacao` apontando para a Resolução nº 23.753/2026, com URL da íntegra no portal do TSE, e `observacoes` explicando o procedimento do pedido e o prazo de confirmação. As `descricao` foram preservadas na transcrição literal da Resolução nº 23.760/2026.
- `src/data/linksReferencia.ts` — nova referência `res-tse-23753-2026` na categoria `resolucoes-normas`, exigida pela verificação de cobertura das URLs dos eventos.
- `tests/links-referencia.test.ts` — contagens aprovadas atualizadas de 28 para 29 referências e de 12 para 13 em `resolucoes-normas`.
- `documentations/CHANGELOG.md` — registro desta sessão.

**Descartado por ausência de marco temporal:**
- Art. 2º, § 2º — remessa dos acordos de cooperação ao Ministério Público Eleitoral em 5 dias da assinatura: prazo relativo a evento sem data definida.
- Art. 6º — prioridade de atendimento no local de votação aos beneficiários do Programa.
- Art. 7º, parágrafo único — alteração permanente do local de votação requerida até 150 dias antes da eleição (07/05/2026): não incluído por colidir com o marco oficial de 06/05/2026 (`2026-05-06-1`, 151 dias antes do primeiro turno, art. 91 da Lei nº 9.504/1997), data em que o recebimento de revisões já se encerra.

**Validação:**
- `npx tsc --noEmit` sem erros e `npm run build` concluído (1784 módulos transformados).
- `tests/links-referencia.test.ts`: 11/11. A verificação falhava antes da inclusão no catálogo central, exatamente no teste "Todas as URLs informativas dos eventos estão catalogadas".
- `tests/ics.test.ts`: 24/24. `tests/security.test.ts`: 25/25.
- Confirmado por varredura que a vedação do art. 3º, § 2º não tinha correspondente no calendário, inclusive sob a Lei nº 6.091/1974, art. 11.
- Total de eventos: 316, sendo 314 antes desta sessão, todos com `id` único e no intervalo de 04/10/2025 a 04/04/2028.

**Correção de documentação defasada (mesma sessão):**

A contagem de 296 eventos em `CLAUDE.md` e `README.md` estava defasada desde antes desta alteração e foi corrigida para 316. Duas afirmações que esta sessão tornou incorretas também foram ajustadas.

- `CLAUDE.md` — a seção "Fonte de Dados" afirmava que todos os eventos vinham **exclusivamente** da Resolução nº 23.760/2026; passa a admitir expressamente eventos de resoluções complementares com marco temporal definido, mantida a exigência de transcrição literal da norma de origem e de `fundamentacao` preenchida. A mesma seção e a regra 4 diziam que `fundamentacao[].url` permanece `""` e que a coleta de URLs foi descartada, o que já não descrevia o repositório: hoje 35 das 420 entradas de fundamentação têm URL. A redação passa a tratar `""` como padrão e a registrar a obrigação de espelhar toda URL preenchida em `src/data/linksReferencia.ts`, sob pena de falha em `tests/links-referencia.test.ts` — armadilha em que esta própria sessão caiu.
- `README.md` — contagem de eventos na visão geral e na árvore de pastas.
- Registro histórico da entrada de 04/08/2026 preservado como publicado, ainda que a contagem de 296 ali mencionada já estivesse incorreta na ocasião.

## [2026-08-04] Plantão de 15/08 restrito às secretarias dos tribunais eleitorais

Retificação de harmonização normativa da Resolução TSE nº 23.760/2026: o evento de 15/08/2026 que abria o regime de funcionamento aos sábados, domingos e feriados deixa de mencionar os cartórios eleitorais, alcançando apenas as secretarias dos tribunais eleitorais. O ajuste alinha o evento de abertura ao seu correspondente de encerramento em 18/12/2026 (`2026-12-18-3`), que já adotava a redação atual.

**Arquivos modificados:**
- `src/data/eventos.ts` — evento `2026-08-15-3`: título e descrição passam a referir-se somente às secretarias dos tribunais eleitorais.
- `Documentations/CHANGELOG.md` — registro da retificação.

**Validação:**
- Varredura em `src/`, `tests/`, `e2e/`, `docs/` e `README.md`: nenhuma outra ocorrência da redação anterior ("cartórios eleitorais e secretarias dos Tribunais") permanece no repositório.
- Menções remanescentes a "cartório" em `src/data/eventos.ts` foram conferidas e preservadas por integrarem outros dispositivos com redação própria: contagem contínua de prazos processuais (`2026-08-15-4`), justificativa eleitoral pós-turno (`2026-12-03-1` e `2027-01-08-1`) e impedimento de chefe de cartório por parentesco (`2026-12-18-2`).
- Total de eventos inalterado (296): a retificação altera apenas a redação de um evento existente, sem inclusão ou exclusão.

## [2026-07-16] Rótulo do mês nos marcadores da timeline

Inclui a abreviação do mês em cinza discreto sob todos os círculos de data para facilitar a orientação temporal durante a rolagem do calendário, sem aumentar o espaçamento vertical entre os eventos.

**Arquivos modificados:**
- `src/components/timeline/DateMarker.tsx` — extrai o mês da data ISO e exibe a abreviação em três letras, com posicionamento absoluto e identificação acessível do nome completo.
- `Documentations/CHANGELOG.md` — registra a melhoria visual.
- `docs/superpowers/specs/2026-07-16-month-label-date-marker-design.md` — documenta a decisão visual aprovada.
- `docs/superpowers/plans/2026-07-16-month-label-date-marker.md` — registra o plano de implementação executado.

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
- Revisão pré-publicação ajustou a Resolução TSE nº 9.641/1974 para sua página oficial específica, em substituição ao índice geral de resoluções.
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
