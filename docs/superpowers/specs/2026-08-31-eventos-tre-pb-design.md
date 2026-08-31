# Eventos de âmbito regional — TRE/PB

## Objetivo

O calendário hoje contém exclusivamente eventos de âmbito nacional, extraídos da Resolução TSE nº 23.760/2026 e de resoluções complementares. O TRE-PB, porém, emite atos próprios com marco temporal definido — memorandos-circulares dirigidos às Zonas Eleitorais da Paraíba — que hoje não têm lugar na timeline.

Este desenho abre essa porta: uma dimensão nova de **âmbito**, ortogonal às categorias de assunto já existentes, com identidade visual própria no card e um campo estruturado para o documento administrativo de origem. O primeiro evento a entrar é o prazo de 11/09/2026 do Memorando-Circular nº 18/2026 - TRE-PB/PTRE/DG/STIC (cadastramento no sistema SINPLES), mas o desenho existe para que os próximos memorandos entrem como dado, sem código novo.

## Decisão de modelagem: âmbito é eixo próprio, não categoria

As 13 categorias existentes (`ELE`, `REG`, `PRO`, `FIN`, `ADM`, `FIS`, `CON`, `VOT`, `PES`, `DIP`, `PAR`, `GAR`, `TRA`) descrevem **assunto**. "TRE/PB" não é assunto: é **origem**. Criar uma 14ª categoria `TRE` foi considerado e descartado, porque forçaria uma escolha falsa em cada evento regional — o Memorando 18/2026 trata de urnas de contingência, LAT e juntas eleitorais, ou seja, é inequivocamente Administração Eleitoral (`ADM`). Marcá-lo como "TRE-PB" em vez de `ADM` perderia a categorização de assunto; marcá-lo como ambos faria o filtro por `ADM` devolver eventos regionais misturados aos nacionais, sem que o usuário tivesse pedido isso.

A solução é um campo próprio. Um evento regional continua tendo sua categoria de assunto **e** ganha a marca de âmbito por cima. Os dois eixos permanecem independentes e cada um ganha seu filtro.

O tipo é deliberadamente fechado em `"TRE-PB"`, e não genérico. Abrir hoje para "regional" ou para outros tribunais seria especulação: não há segundo consumidor. Quando houver, o tipo se abre com uma alteração de uma linha.

## Modelo de dados

Em `src/types/index.ts`, dois campos **opcionais** em `EventoCalendario`. Sendo opcionais, os 316 eventos existentes não sofrem alteração alguma — não há migração de dados.

```ts
export type Ambito = "TRE-PB";

export interface DocumentoOrigem {
  titulo: string;     // "Memorando-Circular nº 18/2026"
  unidade: string;    // "TRE-PB/PTRE/DG/STIC"
  url: string;
  restrito?: boolean; // true → exibe aviso de acesso restrito
}

export interface EventoCalendario {
  // ... campos atuais, inalterados
  ambito?: Ambito;
  documentoOrigem?: DocumentoOrigem;
}
```

`DocumentoOrigem` é campo próprio, e não mais um item de `fundamentacao[]`. Um memorando-circular é ato administrativo interno, não norma; equipará-lo a "Lei nº 9.504/1997 — art. 91" no mesmo chip visual seria impreciso do ponto de vista jurídico e enganoso do ponto de vista do usuário. `fundamentacao` segue reservada a normas.

A constante de apresentação do âmbito (rótulo, cor `#0F766E`, ícone `Building2`) fica em `src/data/ambitos.ts`, num objeto só, para que nenhum componente carregue o valor hexadecimal solto e os próximos eventos não repitam configuração visual.

## Arquivo de dados separado

Os eventos regionais vivem em `src/data/eventosTrePb.ts`, exportando `eventosTrePb: EventoCalendario[]`, e não em `src/data/eventos.ts`.

A razão é concreta, não organizacional. O teste `tests/links-referencia.test.ts` lê o código-fonte de `src/data/eventos.ts` e exige que **toda URL `https://` ali presente** — tanto em `fundamentacao[].url` quanto em links markdown de `observacoes` — esteja catalogada em `src/data/linksReferencia.ts`. Esse catálogo é a central pública de leis, resoluções e manuais do site. Uma URL do SEI interno do TRE-PB não pertence a ele: não é legislação e não abre para o público. Manter os eventos regionais em arquivo próprio resolve isso por separação real de responsabilidades, e não burlando a asserção do teste.

Efeito colateral desejável: cada memorando novo é um append num arquivo curto, sem navegar por um arquivo de 316 eventos.

## Composição em `App.tsx`

A lista passa a ser `[...eventos, ...eventosTrePb, ...meusEventosConvertidos]`. Os contadores acompanham:

- `totalEventos` passado ao `FilterSummary` e ao `FilterPanel` passa a somar `eventos.length + eventosTrePb.length`.
- `totalPassados` passa a considerar as duas listas oficiais.
- `mesesDisponiveis` já deriva de `todosEventos`, então absorve os eventos regionais sem alteração.
- `eventosTSEFiltrados` (usado no "Favoritar todos" e no export em lote) hoje exclui apenas `custom-`. Eventos regionais **permanecem incluídos**: são eventos oficiais, favoritáveis e exportáveis.

## Card e identidade visual

Em `EventCard.tsx`, uma flag `isTrePb` (`evento.ambito === "TRE-PB"`) ao lado da `isCustom` já existente:

- Borda esquerda de 4 px em `#0F766E` (verde-petróleo), fundo levemente tingido no mesmo matiz.
- Badge **TRE-PB** com ícone `Building2`, posicionado à frente das badges de categoria, seguindo a mesma forma de pílula das demais.
- O ícone entra no `iconeMap` do componente, conforme a convenção já registrada no CLAUDE.md do projeto.

A cor foi escolhida dentro das restrições da paleta: sem lilás/roxo e sem cores partidárias. O verde-petróleo não colide com `ADM` (`#3D5A80`, azul-acinzentado) nem com `DIP` (`#14532D`, verde-escuro) na leitura da timeline.

A hierarquia entre marcadores é explícita: `destaque` e favorito continuam prevalecendo sobre o âmbito na borda esquerda quando coexistirem, para não haver duas fontes concorrentes de cor na mesma aresta. O badge TRE-PB, esse, aparece sempre.

O card regional preserva o botão de favorito e o painel de exportação `.ics` — ele é evento oficial, distinto dos "eventos particulares" do usuário, que seguem com seu próprio tratamento.

Em `EventoProximoCard.tsx`, o mesmo badge aparece em versão compacta, para que a distinção sobreviva ao painel de Próximos Prazos.

## Detalhe expandido: documento de origem

`EventDetail.tsx` ganha um bloco **"Documento de origem"**, renderizado quando `evento.documentoOrigem` existe, posicionado imediatamente acima de "Fundamentação Legal".

O bloco traz um link com o título do memorando e a unidade emissora, ícone de link externo, `target="_blank"` e `rel="noopener noreferrer"`. Quando `restrito` é verdadeiro, acompanha a legenda **"SEI/TRE-PB — acesso restrito a servidores"**.

Essa legenda não é decorativa: o site é público e o endereço do SEI só resolve para quem está autenticado no sistema. Sem o aviso, um visitante externo encontraria uma tela de login sem explicação. Com ele, o link continua útil a quem tem acesso e honesto com quem não tem.

## Filtro por âmbito

`FilterState` ganha `ambito: "TRE-PB" | "nacional" | null`, com `null` como padrão (mostra tudo). A regra de filtragem em `useFilteredEvents` é direta: `"TRE-PB"` mantém apenas eventos com `ambito === "TRE-PB"`; `"nacional"` mantém apenas os sem `ambito`; os eventos particulares do usuário seguem governados pelo filtro `apenasMeusEventos`, que é anterior e independente.

No `FilterPanel`, um grupo novo "Âmbito" com três opções mutuamente exclusivas: Todos, Nacional (TSE), TRE-PB. Diferente de `apenasFavoritos` e `apenasMeusEventos`, que são estado pessoal do navegador, o âmbito **é serializado na URL** em `useUrlFilters`, como os demais filtros de conteúdo — um link compartilhado filtrando só os prazos do TRE-PB é justamente um dos usos previstos.

`hasActiveFilters` e `canExportFilteredEvents` em `App.tsx` passam a considerar `filtros.ambito !== null`.

## O evento de 11/09/2026

Entra como **um único card**, e não três. Os três itens do memorando compartilham a mesma data-limite, o mesmo sistema e o mesmo ato de origem; três cards idênticos na mesma data poluiriam a timeline sem acrescentar informação.

```ts
{
  id: "2026-09-11-trepb-1",
  data: "2026-09-11",
  diaSemana: "sexta-feira",
  titulo: "Prazo final para cadastramento de informações no sistema SINPLES (TRE-PB)",
  descricao: /* transcrição literal — ver "Texto de origem" adiante */,
  categorias: ["ADM"],
  perfis: [],
  ambito: "TRE-PB",
  marcos: null,
  turno: "1T",
  fundamentacao: [],
  documentoOrigem: {
    titulo: "Memorando-Circular nº 18/2026",
    unidade: "TRE-PB/PTRE/DG/STIC",
    url: URL_SEI, // valor integral transcrito na seção "Texto de origem"
    restrito: true,
  },
  observacoes:
    "Destinatário: chefias das Zonas Eleitorais da Paraíba. " +
    "Dúvidas devem ser encaminhadas à Coordenadoria de Eleições Informatizadas e Segurança Cibernética.",
}
```

Notas sobre os campos:

- **`id`** foge do padrão `YYYY-MM-DD-N` com o infixo `trepb`, deliberadamente. Se o TSE vier a ter um evento em 11/09/2026, ele receberá `2026-09-11-1` sem colisão, e a origem do identificador fica legível.
- **`turno: "1T"`** — o ato é preparatório do primeiro turno, conforme decidido no brainstorming.
- **`perfis: []`** — o destinatário são chefias de Zona Eleitoral, e o tipo `Perfil` proíbe `'servidor'` por regra do projeto. Array vazio significa "relevante para todos", que é a semântica correta aqui; a informação sobre o destinatário fica em `observacoes`.
- **`fundamentacao: []`** — memorando não é norma. A fonte vive em `documentoOrigem`.
- **`descricao`** transcreve literalmente os três itens, seguindo a regra do projeto de nunca parafrasear a fonte.

## Texto de origem

Transcrição do Memorando-Circular nº 18/2026 - TRE-PB/PTRE/DG/STIC, para uso literal em `descricao`. Destinatário: Chefias das Zonas Eleitorais da Paraíba.

> Comunica-se que o dia 11/09/2026 é o prazo final para o cadastramento, no sistema SINPLES, das informações abaixo relacionadas, essenciais para o planejamento logístico das Eleições Gerais 2026.
>
> 1. Revisão das unidades eleitorais — Solicita-se a revisão dos cadastros de PC (Polo de Contingência), PCT (Polo de Contingência e Transmissão), LAT (Local de Armazenamento Temporário) e Junta Eleitoral, no menu Manutenção > Unidades Eleitorais. Ressalta-se que os kits para uso do JE Connect em PCT são gerados a partir das informações cadastradas nesse sistema, portanto o cadastramento dos dados é fundamental.
>
> 2. Quantidade de urnas de contingência por LAT — Solicita-se a definição da quantidade de urnas de contingência por LAT, no menu Manutenção > Quantidade de Urnas de Contingência por LAT.
>
> 3. Cronograma local de votação x LAT — Solicita-se o preenchimento do cronograma de vinculação entre local de votação e LAT, no menu Manutenção > Locais de Votação.
>
> Ressalta-se que o cumprimento do prazo é fundamental para a consistência das etapas subsequentes de preparação eleitoral. Eventuais dúvidas podem ser encaminhadas a Coordenadoria de Eleições Informatizadas e Segurança Cibernética.

URL integral do documento no SEI (valor de `documentoOrigem.url`):

```text
https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2556015&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=881cabce3a7e578521b0fd5b176ae4acce053764130f1185e66ad7bd4fa5cce6
```

## Exportação `.ics`

`src/lib/ics.ts` acrescenta a URL de `documentoOrigem` ao campo `DESCRIPTION` do evento gerado, quando o campo existe. Sem isso, quem exportar o prazo para o próprio calendário perde o acesso ao memorando exatamente no momento em que vai precisar dele.

## Validação

- `npx tsc --noEmit` e `npm run build` sem erros.
- `tests/links-referencia.test.ts` continua passando — a asserção é o motivo do arquivo de dados separado, então é o teste que prova o desenho.
- `tests/security.test.ts` e `tests/ics.test.ts` continuam passando.
- Verificação visual em 375 px antes de qualquer ajuste para desktop, conforme a regra mobile-first do projeto: card na timeline, badge no painel de Próximos Prazos, bloco de documento de origem no detalhe expandido e o grupo "Âmbito" no painel de filtros.
- Confirmação de que o filtro de âmbito sobrevive ao recarregamento da página pela URL.
- Registro da alteração em `Documentations/CHANGELOG.md`, exigência do CLAUDE.md do projeto.

## Fora de escopo

- Autenticação, controle de acesso ou qualquer forma de ocultar os eventos regionais do público. Ficou decidido que são públicos.
- Âmbitos além de TRE-PB.
- Importar automaticamente memorandos do SEI. Cada evento é cadastrado à mão em `eventosTrePb.ts`.
- Catalogar o link do SEI na central pública de links de referência.
