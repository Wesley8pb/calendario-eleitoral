# Changelog

## [2026-09-14] Edital nº 14/2026 substitui a minuta como fonte do cronograma de urnas

Publicado o **Edital nº 14/2026 TRE-PB/PTRE/ASPRE** (doc. SEI 2503394, CRC B735BF5C, processo 0007828-72.2026.6.15.8000), assinado pelo Presidente do Tribunal em 14/09/2026. Antes de trocar a fonte, o edital foi conferido contra o que os cards já traziam da minuta — com a tabela do Anexo I **transcrita de novo, do zero**, para que a conferência não se limitasse a reconfirmar a leitura anterior:

- **Escala (Anexo I):** 68 zonas no edital, 68 nos cards, **0 divergências** de polo, data ou horário.
- **Preâmbulo:** idêntico ao da minuta, palavra por palavra — as quatro finalidades e a convocação transcritas na `descricao` seguem valendo.
- **Endereços (Anexos II a VI):** os cinco conferem com `nvis.ts`.
- **Fundamento e processo:** art. 100 da Res. 23.751/2026 e o mesmo processo.

As listas de técnicos dos anexos não foram auditadas, por não integrarem o calendário.

**O que mudou foi só a fonte.** `documentoOrigem` passa ao edital: título "Edital nº 14/2026", unidade `TRE-PB/PTRE/ASPRE` e o link do processo no SEI — que exige login, e por isso volta a levar `restrito: true`, ao contrário do link de conferência da minuta, que era público. Para não deixar sem caminho quem está fora do Tribunal, as `observacoes` passam a trazer o código verificador (2503394) e o CRC (B735BF5C) do edital.

**O aviso de minuta saiu.** Os cinco cards deixam de abrir com "MINUTA —". Há teste para os três elos da cadeia de fontes — PDF v2, minuta e aviso —, para que nenhum volte numa regeração.

**Arquivos modificados:**
- `src/data/eventosTrePb.ts` — `documentoOrigem` e `observacoes` dos 5 eventos; cabeçalho registrando a cadeia PDF v2 → minuta → edital.
- `src/data/nvis.ts` — a origem dos endereços passa a citar o edital.
- `tests/ambito-tre-pb.test.ts` — 129 → 131 asserções.
- `CLAUDE.md`, `AGENTS.md` — fonte atualizada.

**Verificação:** `npx tsc --noEmit` limpo; as cinco suítes passaram (131, 12, 25, 24 e 20 asserções).

## [2026-09-13] Cronograma de urnas do 1º turno pela minuta de edital; 2º turno removido

A minuta de edital da STIC (doc. SEI 2502510, CRC 6D64C59F, processo 0007828-72.2026.6.15.8000, assinada em 12/09/2026) traz uma nova versão do cronograma de preparação de urnas do 1º turno. Comparada zona a zona com o que estava publicado: **56 das 68 zonas idênticas, 12 divergências.**

**Uma mudança de data:** a 52ª zona (Coremas, NVIPBL) sai de 21/09 para 25/09. Com isso 21/09 cai de 15 para 14 zonas e 25/09 sobe de 7 para 8.

**Onze mudanças de horário.** As cinco zonas do NVIPBL (31ª, 69ª, 36ª, 38ª e 52ª) deixam o turno estendido de 07h–17h e passam a 08h–18h — nenhuma zona começa mais às 07h. E sete zonas passam a começar às 09h, com 9h de duração: 06ª e 75ª (21/09), 10ª e 60ª (22/09), 47ª e 66ª (23/09) e 32ª (24/09). Há teste para cada um desses três fatos, porque os eventos são **gerados** a partir de uma tabela: sem isso, uma regeração a partir da v2 desfaria tudo em silêncio.

**A 28ª zona não tinha sumido.** O print do sistema que motivou a conferência estava cortado exatamente na última linha do NVI Patos; a minuta traz `028ª | 25 de set | 08:00 | 18:00`. As 68 zonas continuam cobertas.

**Os 5 eventos do 2º turno (12 a 16/10) foram removidos.** A minuta cobre só o 1º turno; mantê-los com os dados da v2 — inclusive os 07h–17h de Pombal, que acabaram de deixar de existir — poria os dois turnos em critérios diferentes no mesmo site. Voltam quando houver cronograma do 2º turno.

**A fonte deixou de ser o PDF v2.** `documentoOrigem` passa a apontar para a conferência de autenticidade do SEI, que é página **pública** — daí não levar a marca de acesso restrito, ao contrário dos documentos internos. O título nomeia o doc., o CRC e o processo, e há teste garantindo que nenhum resíduo da URL do PDF v2 sobrou no arquivo de dados.

**Por ser minuta, o card avisa.** Todo evento abre `observacoes` com "MINUTA —" e diz que os horários podem mudar até a publicação no Diário da Justiça Eletrônico. Publicar dado de minuta foi decisão do Tribunal; o que não se pode é publicá-lo como se fosse definitivo.

**Fundamentação e descrição vieram do edital.** Os cinco eventos passam a ter `fundamentacao` no art. 100, caput e § 2º, da Resolução nº 23.751/2026/TSE, e a `descricao` transcreve as quatro finalidades da cerimônia (preparação/teste/lacração, embalagem, acondicionamento de mídias e lacração das urnas de lona) e a convocação de partidos, federações, coligações, Ministério Público e OAB.

**Endereços dos NVIs.** `NviInfo` ganhou o campo `endereco`, preenchido a partir dos anexos II a VI da minuta. Não é adorno: o art. 100, § 2º, IV, exige que o calendário divulgado pelo Tribunal informe o **local dos trabalhos**, e era o único dos cinco itens do § 2º que o site não entregava. Aparece no cabeçalho de cada polo, em linha própria (`w-full`), porque é o texto mais longo do bloco e ao lado do nome quebraria o alinhamento no celular. Entra também na busca e na descrição do `.ics` — quem exporta o prazo precisa saber para onde ir, não só em que cidade.

**Arquivos modificados:**
- `src/data/eventosTrePb.ts` — 17 → 12 eventos; os 5 do 1º turno regerados a partir da minuta, os 5 de outubro removidos, cabeçalho reescrito com a fonte atual e o que não pode regredir.
- `src/data/nvis.ts` — campo `endereco` nos cinco polos.
- `src/components/timeline/PreparacaoUrnasBloco.tsx` — endereço no cabeçalho do polo.
- `src/lib/search.ts`, `src/lib/ics.ts` — endereço indexado e exportado.
- `tests/ambito-tre-pb.test.ts` — 120 → 129 asserções.

**Verificação:** `npx tsc --noEmit` limpo; `npm run build` concluído; as cinco suítes passaram (129, 12, 25, 24 e 20 asserções). Conferência em navegador a 1280px e 375px: os 5 endereços aparecem inteiros, **zero elementos truncados e zero overflow horizontal** — o endereço de Pombal tem 74 caracteres e era o risco real de repetir o "Campina Gra…" de 04/09.

**Pendências:** o 2º turno não tem cronograma novo; e o edital, quando publicado, precisa substituir a minuta em `documentoOrigem` — feito em 14/09/2026.

## [2026-09-10] Siglas NVI e SJI passam a ser expandidas

Duas siglas apareciam cruas na interface porque os documentos de origem não as expandem. O TRE-PB informou as expansões:

- **NVI** — Núcleo de Voto Informatizado. Vive em `NVI_EXPANSAO`, em `src/data/nvis.ts`, ao lado da cidade e da cor de cada polo. Aparece **uma vez por card**, como legenda logo abaixo do cabeçalho da escala, e não repetida em cada um dos cinco polos — e como texto, não como tooltip, que no celular não abre. `camposBuscaveis()` também a indexa: procurar "núcleo de voto informatizado" chega aos cards de preparação de urnas.
- **SJI** — Secretaria Judiciária da Informação. Entra nas observações dos dois eventos que a citam no título (fechamento do CAND em 15/09 e relatório "Ambiente de Votação" em 16/09). O título fica com a sigla, por causa do limite de 120 caracteres.

**AGGTIC segue sem expansão**, pela regra de sempre: o despacho de origem não a expande.

**Arquivos modificados:**
- `src/data/nvis.ts` — `NVI_EXPANSAO`.
- `src/components/timeline/PreparacaoUrnasBloco.tsx` — a legenda.
- `src/lib/search.ts` — a expansão entra no texto indexado.
- `src/data/eventosTrePb.ts` — SJI expandida em dois eventos.
- `tests/ambito-tre-pb.test.ts` — 4 asserções novas (116 → 120), inclusive a de que a legenda aparece uma vez só.
- `CLAUDE.md`, `AGENTS.md` — a nota de que "NVI" não era expandida foi substituída pela expansão.

## [2026-09-10] Retificação dos municípios-sede da 49ª, 75ª e 74ª zonas eleitorais

Três municípios-sede da escala de preparação de urnas divergem do PDF do cronograma da STIC/TRE-PB. A divergência é **deliberada**: prevalece o cadastro das zonas eleitorais, conferido pelo TRE-PB.

| Zona | Grafia no PDF | No calendário |
|---|---|---|
| 49ª | AROEIRAS | **Queimadas** |
| 75ª | GURINHÉM | **Itabaiana** |
| 74ª | ÀGUA BRANCA | **Água Branca** |

As duas primeiras não são questão de grafia: são municípios diferentes. A 49ª passa a dividir sede com a 59ª (Queimadas) e a 75ª com a 06ª (Itabaiana) — mais de uma zona por município já era o caso de Patos (28ª, 51ª e 65ª) e de João Pessoa (01ª, 64ª, 70ª, 76ª e 77ª). Como os eventos foram **gerados** a partir da tabela, e não digitados, uma regeração futura reintroduziria a grafia do PDF: por isso a divergência está registrada em comentário no topo de `src/data/eventosTrePb.ts` e travada por asserção nos dois turnos.

**36ª e 38ª zonas, ambas de Catolé do Rocha, no mesmo dia e horário do 2º turno — está correto.** Foi levantado como possível erro de fonte e confirmado: o PDF traz as duas em 14/10/2026, 07h–17h, NVIPBL, e o TRE-PB confirmou. Há teste que trava o par, para que a coincidência não seja "corrigida" adiante.

**Arquivos modificados:**
- `src/data/eventosTrePb.ts` — as seis ocorrências (três zonas × dois turnos) e o comentário de cabeçalho que explica por que não são erro.
- `tests/ambito-tre-pb.test.ts` — 4 asserções novas (112 → 116): sede das três zonas nos dois turnos e o par de Catolé do Rocha em 14/10.

**Verificação:** conferência linha a linha contra o texto extraído do PDF publicado na página Eleições 2026 do TRE-PB; `npx tsc --noEmit` limpo; `npm run build` concluído; as cinco suítes passaram (116, 12, 25, 24 e 20 asserções).

## [2026-09-10] Preparativos de 14 a 18/09 no TRE-PB — Despacho AGGTIC e a Resolução de Atos Gerais

O Despacho nº 2497253/2026 — AGGTIC (Processo 0007829-57.2026.6.15.8000) pede a publicação, no calendário interno do TRE-PB, de cinco atividades da semana que antecede a preparação das urnas. Entram como **6 eventos** de âmbito TRE-PB, em `src/data/eventosTrePb.ts`:

| Data | Atividade | Fundamento |
|---|---|---|
| 14/09 | Oficialização do SISTOT pela Zona Eleitoral | art. 5º, caput e §§ 1º e 2º |
| 15/09 | Fechamento do CAND pela SJI | art. 94, caput, I, IV e V, e § 1º |
| 16/09 | Relatório "Ambiente de Votação" pela SJI | art. 92, caput e § 2º |
| 16/09 | Relatório "Ambiente de Votação" pela Zona Eleitoral | art. 93, caput e parágrafo único |
| 17/09 | Geração de mídias pela STIC — 1º de 2 dias | arts. 94 e 95 |
| 18/09 | Geração de mídias pela STIC — 2º de 2 dias | arts. 94 e 95 |

**Cinco linhas na tabela do despacho, seis cards.** "17 e 18/09/26 — Geração de mídias pela STIC" é um bloco único na origem, mas a unidade da timeline é a data: com um só card, o dia 18 sumiria da linha do tempo. Os dois cards trazem a mesma transcrição e se distinguem no título ("1º de 2 dias", "2º de 2 dias"); a descrição de ambos registra que a atividade ocorre em 17 e 18 de setembro.

**Estes eventos têm `fundamentacao` — e os de preparação de urnas não.** A diferença é real, não inconsistência. O cronograma de urnas é escala: o TRE-PB decide qual zona vai a qual polo, e nenhuma norma diz isso. Já as cinco atividades do despacho são deveres da Resolução nº 23.751/2026/TSE (Atos Gerais do Processo Eleitoral); o despacho apenas fixa as datas locais em que serão cumpridos. Por isso os seis carregam **as duas coisas**: `documentoOrigem` no despacho do SEI (restrito) e `fundamentacao` na Resolução, com URL para a página oficial no `tse.jus.br`.

**Relação com o que já estava no calendário.** Nenhuma das cinco atividades tem evento nacional correspondente — arts. 5º e 92 a 97 da Res. 23.751/2026 não fixam data, delegando-a ao planejamento de cada TRE. Há, porém, duas conexões que os cards registram em `observacoes`:

- **Com o calendário nacional:** o fechamento do CAND em 15/09 depende de 14/09, data em que todos os pedidos de registro devem estar julgados pelas instâncias ordinárias (`2026-09-14-2`) e em que se encerra o prazo geral de substituição de candidaturas (`2026-09-14-3`). O CAND é a fotografia das candidaturas que vai para a urna; fechá-lo antes seria fotografar cedo demais.
- **Com os eventos regionais já publicados:** as seis datas formam a cadeia que desemboca nas cerimônias de preparação de urnas de 21 a 25/09 — oficialização do SISTOT → fechamento do CAND → conferência do "Ambiente de Votação" → geração de mídias → preparação nos polos. Todos os seis cards trazem essa cadeia por extenso.

**Ordem das duas emissões de 16/09.** O art. 93 condiciona a emissão pelo juízo eleitoral à conclusão dos procedimentos do art. 92, a cargo do Tribunal — os cards seguem essa sequência: SJI primeiro, Zona Eleitoral em seguida.

**Arquivos modificados:**
- `src/data/eventosTrePb.ts` — os 6 eventos (11 → 17). Categoria `ADM` em todos; o fechamento do CAND recebe também `REG`, por ser o corte técnico do registro de candidaturas. `perfis: []`, `turno: "1T"`, `marcos: null`.
- `src/data/linksReferencia.ts` — Resolução TSE nº 23.751/2026 catalogada em "Resoluções e normas do TSE" (29 → 30 referências).
- `tests/ambito-tre-pb.test.ts` — 22 asserções novas (90 → 112): contagem e ordem das datas, dias da semana conferidos contra o calendário de 2026, mapeamento evento → dispositivo, unicidade do despacho de origem com marca de acesso restrito, transcrição do art. 5º, presença do relatório "Ambiente de Votação" nas duas emissões, registro da cadeia até 21/09 e busca por "SISTOT", "CAND" e "mídias".
- `tests/links-referencia.test.ts` — contagens atualizadas e asserção de que a Res. 23.751/2026 está catalogada.
- `CLAUDE.md`, `AGENTS.md` — por que estes eventos regionais têm fundamentação e os de urnas não.

**Verificação:** `npx tsc --noEmit` limpo; `npm run build` concluído; as cinco suítes de `tests/` passaram (112, 12, 25, 24 e 20 asserções). Os dispositivos foram conferidos no texto integral da Resolução nº 23.751/2026 no `tse.jus.br`, não de memória.

**Pendência conhecida:** as siglas "SJI" e "AGGTIC" não são expandidas em nenhum ponto da interface, pela mesma razão de "NVI" — o documento de origem não as expande.

## [2026-09-04] Cronograma de preparação de urnas do TRE-PB — 10 eventos com escala por polo

O Cronograma de Preparação de Urnas das Eleições 2026 (v2), da STIC/TRE-PB, escala as 68 zonas eleitorais da Paraíba em cinco dias por turno — 21 a 25/09 no primeiro, 12 a 16/10 no segundo —, distribuídas simultaneamente em cinco polos: NVIJPA (João Pessoa), NVICGE (Campina Grande), NVIPAT (Patos), NVIPBL (Pombal) e NVICJZ (Cajazeiras). Entram como **10 eventos, um por data**, e não um por zona: quem consulta quer saber o que acontece no dia.

**A escala é campo estruturado, não texto.** O dia mais cheio (13/10) tem 21 zonas em 5 polos; como parágrafo corrido isso é ilegível, e a busca não conseguiria distinguir "Patos" município de "Patos" polo. Por isso `preparacaoUrnas: PoloPreparacao[]` em `EventoCalendario`, renderizado por componente próprio.

**Visual — agrupado por polo.** Cada polo é um bloco com filete colorido à esquerda, sigla, cidade e contador de zonas; dentro, uma linha por zona com número, município-sede e horário. Uma coluna no celular, duas a partir de `sm`. Um filete cinza de 1 px (`neutral-300`) separa as duas colunas. Ele é elemento próprio, absolutamente posicionado, e não borda dos itens: como borda ficava picotado, parando antes da última linha sempre que o polo tinha número ímpar de zonas — foi o que motivou a troca, depois de a primeira versão sair "quase imperceptível". É `aria-hidden`, some abaixo de `sm` (onde a lista é de coluna única) e não é renderizado quando o polo tem uma zona só, caso em que não existe segunda coluna. Medido em navegador: 4 filetes visíveis a 1280 px, com altura cheia de cada lista (64, 95, 64 e 32 px), e 0 a 375 px. Alternativas descartadas: tabela única ZE/Sede/Horário/Polo (perde o agrupamento e exige rolagem horizontal em 375px) e agrupamento por faixa de horário (dispersa cada polo por várias seções).

**A busca alcança a escala.** `camposBuscaveis()` nasceu como função pura em `search.ts` justamente para ser testável fora do React: monta o texto indexado do evento incluindo sigla e cidade do polo, número da zona e município-sede. Buscar "Cabedelo", "NVIPBL" ou "Pombal" leva ao card do dia certo; "Sapé" traz 25/09 e não 23/09. Sem isso os cards só apareceriam buscando por "urna".

**Arquivos criados:**
- `src/data/nvis.ts` — `nviMap` e `ORDEM_NVIS`. Fonte única da cidade e da cor de cada polo, no mesmo espírito de `ambitos.ts`; nenhum componente repete o hexadecimal, e há teste que trava isso. As cinco cores são distintas entre si e nenhuma reaproveita o verde-petróleo do âmbito TRE-PB, que já marca a borda do card.
- `src/components/timeline/PreparacaoUrnasBloco.tsx` — o bloco agrupado, com `aria-label` próprio.

**Arquivos modificados:**
- `src/types/index.ts` — `NviID`, `ZonaPreparacao`, `PoloPreparacao` e o campo **opcional** `preparacaoUrnas`. Sendo opcional, nenhum dos 319 eventos nacionais precisou mudar.
- `src/data/eventosTrePb.ts` — os 10 eventos, gerados a partir da tabela do cronograma, não digitados: 68 zonas × 2 turnos é onde o erro de transcrição mora. Categoria ADM, âmbito TRE-PB, turno 1T/2T, `fundamentacao: []` (é ato administrativo, não norma) e `documentoOrigem` apontando para o PDF **público** do TRE-PB — sem o aviso de acesso restrito, que só cabe ao SEI.
- `src/lib/search.ts` — `camposBuscaveis()`.
- `src/hooks/useFilteredEvents.ts` — passa a consumir `camposBuscaveis()` em vez de montar o array de campos inline.
- `src/lib/ics.ts` — a descrição do evento exportado carrega a escala completa ("NVIPBL - Pombal: 69ª São Bento 07h–17h"). Quem leva o prazo para o próprio calendário precisa do horário e do polo lá dentro, não só do título.
- `src/components/timeline/EventDetail.tsx` — renderiza o bloco logo após a descrição, antes das observações.
- `tests/ambito-tre-pb.test.ts` — a asserção `eventosTrePb.length === 1` era um snapshot e foi substituída por 27 asserções sobre o cronograma: contagem de 68 zonas por turno sem repetição, ordem canônica dos polos, ordem crescente das zonas, formato de horário e de número de zona, URL pública do PDF, comportamento da busca (positivo e negativo) e conteúdo do `.ics`. Total: 86 asserções.
- `CLAUDE.md`, `AGENTS.md` — seção "Eventos regionais e o cronograma de urnas do TRE-PB".
- `Documentations/CHANGELOG.md` — registro desta sessão.

**Verificação:** `npx tsc --noEmit` e `eslint` limpos nos arquivos tocados; `npm run build` concluído; as cinco suítes de `tests/` passaram (86, 11, 25, 24 e 20 asserções). Conferência em navegador (Comet, Playwright) a 1280px e 375px: busca por "cabedelo" retorna exatamente 1 card, bloco expande sem erro de página e **zero overflow horizontal** nos dois tamanhos. O truncamento de "Campina Gra…" e "São João do Rio do…" surgiu nessa conferência e foi corrigido — município nunca é truncado.

**Pendência conhecida:** o cronograma não expande a sigla "NVI" — resolvido em 10/09/2026, com a expansão informada pelo Tribunal.

## [2026-09-04] Incorporação da Resolução TSE nº 23.771/2026 ao calendário

A Resolução nº 23.771, de 3 de agosto de 2026 (DJE/TSE nº 131, de 7.8.2026, p. 248-251), alterou o Anexo I da Resolução nº 23.760/2026 em dez itens. Sete já constavam do calendário com a redação correta; os outros três estavam ausentes, um estava com a data vencida e um com o destinatário errado. A divergência mais grave era a do FEFC: o prazo de distribuição às candidaturas de mulheres, pessoas negras e indígenas aparecia como encerrado em 30/08, quando a norma o prorrogou para 08/09 — o site exibia como vencido um prazo ainda aberto.

A Resolução nº 23.771/2026 **não** foi lançada em `fundamentacao[]`: é norma meramente alteradora, e a fonte do calendário continua sendo a Resolução nº 23.760/2026. O padrão do arquivo é citar a norma material referida entre parênteses no texto do calendário — a própria 23.760 nunca aparece em `fundamentacao[]`, e 45 eventos têm o campo vazio justamente porque o calendário não indica dispositivo. A alteração ficou registrada em `observacoes`, que é o texto exibido no card expandido, e no cabeçalho de `src/data/eventos.ts`.

**Eventos acrescentados (3):**
- `2026-10-09-3` — último dia para as agremiações transferirem recursos do FEFC a candidaturas majoritárias que concorram ao 2º turno (Res. nº 23.607/2019/TSE, art. 17, §§ 9º-A e 9º-B; art. 6º da Res. nº 23.605/2019/TSE). Categorias FIN e PAR, perfis partido e candidato, turno 2T.
- `2026-10-14-1` — último dia para os TREs encaminharem ao TSE os relatórios individuais de auditoria de cada Regional, relativos ao 1º turno. Categoria FIS, turno 1T, marco "10 dias após o 1º turno". `fundamentacao: []`, porque o item do calendário não remete a dispositivo algum.
- `2026-11-04-1` — o mesmo prazo relativo ao 2º turno. Categoria FIS, turno POS, marco "10 dias após o 2º turno".

**Eventos corrigidos (2):**
- Distribuição do FEFC e do Fundo Partidário a mulheres, negros e indígenas — movido de 30/08 para **08/09/2026** (terça-feira). O antigo `2026-08-30-1` foi removido e o evento renasceu como `2026-09-08-1`; o id mudou porque ele é derivado da data. Em consequência, o único evento restante de 30/08 (homologação dos programas de verificação) foi renumerado de `2026-08-30-2` para `2026-08-30-1`.
- `2026-10-09-2` — relatório conclusivo da auditoria de funcionamento das urnas (1T): o destinatário passou de "ao Tribunal Superior Eleitoral" para "ao respectivo Tribunal Regional Eleitoral", conforme a nova redação.

**Itens da 23.771 já contemplados, conferidos sem alteração (7):** 15/08 item 3 (`2026-08-15-3`), 30/08 homologação (`2026-08-30-1`), 02/10 item 1 (`2026-10-02-1`), 05/10 item 9 (`2026-10-05-5`), 09/10 item 2 (`2026-10-09-2`), 23/10 item 1 (`2026-10-23-1`) e a publicação dos relatórios em 24/11 (`2026-11-24-3`, item da Res. 23.673/2021 que a 23.771 não tocou).

**Arquivos modificados:**
- `src/data/eventos.ts` — as cinco alterações acima. Total de eventos: **319** (antes 316), todos com id único e em ordem cronológica.
- `src/data/eventos.ts` (cabeçalho) — registro da norma alteradora, ao lado da fonte primária.
- `CLAUDE.md`, `AGENTS.md` — contagem 316 → 319; total de entradas de `fundamentacao[]` 420 → 422; menção à Res. nº 23.771/2026 como alteradora da 23.760.
- `README.md` — contagem 316 → 319 e menção à norma alteradora.
- `Documentations/CHANGELOG.md` — registro desta sessão.

**Verificação:** `npx tsc --noEmit` e `npx eslint src/data/eventos.ts` sem erros; `npm run build` concluído; as cinco suítes de `tests/` passaram (11, 59, 25, 24 e 20 asserções). Nenhuma URL nova em `fundamentacao[].url`, portanto `linksReferencia.ts` não precisou de alteração.

## [2026-08-31] Eventos de âmbito regional TRE-PB, com card diferenciado e documento de origem

O calendário continha exclusivamente eventos de âmbito nacional, extraídos da Resolução TSE nº 23.760/2026 e de resoluções complementares. Passa a acomodar também atos próprios do TRE-PB com marco temporal definido — memorandos-circulares dirigidos às Zonas Eleitorais da Paraíba. O primeiro evento cadastrado é o prazo de 11/09/2026 do Memorando-Circular nº 18/2026 - TRE-PB/PTRE/DG/STIC (cadastramento no sistema SINPLES).

O âmbito foi modelado como **eixo próprio, não como 14ª categoria**. As 13 categorias descrevem assunto; "TRE-PB" é origem. Uma categoria nova forçaria uma escolha falsa em cada evento regional — o Memorando 18/2026 trata de urnas de contingência, LAT e juntas eleitorais, ou seja, é inequivocamente Administração Eleitoral. O evento regional agora mantém sua categoria de assunto **e** ganha a marca de âmbito por cima, cada eixo com seu próprio filtro.

Os eventos regionais vivem em arquivo separado por uma razão concreta: `tests/links-referencia.test.ts` exige que toda URL presente em `eventos.ts` esteja catalogada em `linksReferencia.ts`, que é a central pública de legislação. Uma URL do SEI interno não pertence a esse catálogo — não é norma e não abre para o público.

**Arquivos criados:**
- `src/data/ambitos.ts` — `AMBITO_TRE_PB` e `ambitoMap`. Fonte única da cor `#0F766E` (verde-petróleo), do rótulo e do ícone; nenhum componente repete o hexadecimal, e há teste que trava isso.
- `src/data/eventosTrePb.ts` — eventos de âmbito regional, com a `descricao` transcrita literalmente do memorando. Cada memorando novo é um append neste arquivo.
- `tests/ambito-tre-pb.test.ts` — 59 asserções travando as decisões da spec: integridade do dado do evento, ausência de URL do SEI em `eventos.ts`, round-trip do filtro pela URL, identidade visual do card, bloco de documento de origem e a ligação em `App`, `FilterPanel`, `ProximosEventos` e `.ics`.

**Arquivos modificados:**
- `src/types/index.ts` — `Ambito`, `DocumentoOrigem` e os campos **opcionais** `ambito` e `documentoOrigem` em `EventoCalendario`. Sendo opcionais, os 316 eventos existentes não sofreram alteração: não houve migração de dado. `DocumentoOrigem` é campo próprio, e não mais um item de `fundamentacao[]` — memorando-circular é ato administrativo interno, não norma.
- `src/hooks/useFilteredEvents.ts` — `FilterState.ambito` (`"TRE-PB" | "nacional" | null`) e a regra correspondente, que se aplica apenas a eventos oficiais; eventos particulares do usuário seguem governados por `apenasMeusEventos`.
- `src/hooks/useUrlFilters.ts` — parâmetro `?ambito=tre-pb`. `parseUrlToFilters` e `filtersToUrl` deixaram de ler `window` diretamente: recebem a query string e o pathname por parâmetro e passaram a ser exportadas, o que as tornou testáveis fora do navegador. **Correção de bug preexistente:** `VALID_CATS` listava 11 das 13 categorias — faltavam `GAR` e `TRA`, de modo que um link com `?cat=GAR` ou `?cat=TRA` perdia o filtro em silêncio ao ser aberto.
- `src/components/timeline/EventCard.tsx` — faixa lateral de 4 px, fundo levemente tingido e badge TRE-PB à frente das categorias. Destaque e favorito continuam prevalecendo sobre o âmbito na borda esquerda, para não haver duas cores concorrendo na mesma aresta. O card regional preserva favorito e exportação `.ics`, por ser evento oficial — distinto dos eventos particulares.
- `src/components/timeline/EventDetail.tsx` — bloco "Documento de origem" acima da fundamentação legal, com link externo (`rel="noopener noreferrer"`) e o aviso "SEI/TRE-PB — acesso restrito a servidores". O aviso não é decorativo: o site é público e o endereço do SEI só resolve para quem está autenticado; sem ele, um visitante externo encontraria uma tela de login sem explicação.
- `src/components/proximos-eventos/EventoProximoCard.tsx` — badge TRE-PB compacto, para que a distinção sobreviva ao painel de Próximos Prazos.
- `src/components/proximos-eventos/ProximosEventos.tsx` — passa a montar a lista a partir de `[...eventos, ...eventosTrePb]`. O componente monta a própria lista sem passar por `App.tsx`; sem esta alteração o badge do card compacto nunca renderizaria. A falha foi encontrada na verificação em navegador, não nos testes, e ganhou asserção própria.
- `src/components/filters/FilterPanel.tsx` — grupo "Âmbito" com três opções (Todos / Nacional (TSE) / TRE-PB), acima do grupo Turno, contabilizado no total de filtros ativos. As opções neutras usam a classe `bg-primary-700`; só TRE-PB pinta pela constante de âmbito.
- `src/App.tsx` — `todosEventos` concatena os regionais e os contadores de total e de passados somam as duas listas oficiais (317 eventos).
- `src/lib/ics.ts` — a descrição do evento exportado passa a carregar título, unidade e URL do documento de origem, com o aviso de acesso restrito. Sem isso, quem leva o prazo para o próprio calendário perderia o link no momento em que fosse precisar dele.
- `Documentations/CHANGELOG.md` — registro desta sessão.

**Documentação:**
- `docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md` — spec de projeto, com a transcrição integral do memorando e a URL completa do SEI.
- `docs/superpowers/plans/2026-08-31-eventos-tre-pb.md` — plano de implementação em seis tasks.

**Validação:**
- `tests/ambito-tre-pb.test.ts`: 59/59. `tests/ics.test.ts`: 24/24. `tests/links-referencia.test.ts`: 11/11. `tests/security.test.ts`: 25/25. `tests/header-tipografia.test.ts`: 20/20.
- `npx tsc --noEmit` e `npm run build` sem erros. `npm run lint` segue com os 6 erros preexistentes de `src/components/ui/HelpToast.tsx`, `src/lib/search.ts` e `tests/security.test.ts`, sem nenhum acréscimo.
- Verificação em navegador a 375 px: borda esquerda medida em `rgb(15, 118, 110)` a 4 px e fundo `rgba(240, 253, 250, 0.4)`; badge TRE-PB visível na timeline e no card compacto; link do SEI com `target="_blank"`, `rel="noopener noreferrer"` e `infra_hash` preservado; aviso de acesso restrito visível; sem scroll horizontal no documento e sem erro de console. Filtro `?ambito=tre-pb` reduz a timeline a um evento e sobrevive ao recarregamento da página.

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
