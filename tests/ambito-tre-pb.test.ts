/**
 * Testes de integridade dos eventos de âmbito regional TRE-PB.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md
 */

import { readFileSync } from "node:fs";
import type { EventoCalendario } from "../src/types";
import { eventosTrePb } from "../src/data/eventosTrePb";
import { AMBITO_TRE_PB, ambitoMap } from "../src/data/ambitos";
import { NVI_EXPANSAO, nviMap, ORDEM_NVIS } from "../src/data/nvis";
import { camposBuscaveis, matchesSearch } from "../src/lib/search";

let passed = 0;
let failed = 0;

function test(name: string, result: boolean) {
  if (result) {
    console.log(`✅ ${name}`);
    passed++;
  } else {
    console.log(`❌ ${name}`);
    failed++;
  }
}

const eventosSource = readFileSync("src/data/eventos.ts", "utf8");
const memorando: EventoCalendario | undefined = eventosTrePb.find(
  (ev) => ev.id === "2026-09-11-trepb-1",
);

console.log("=== TESTES DE ÂMBITO REGIONAL TRE-PB ===\n");

// --- Constante de apresentação do âmbito ---
test("AMBITO_TRE_PB usa a cor aprovada #0F766E", AMBITO_TRE_PB.cor === "#0F766E");
test("AMBITO_TRE_PB tem id TRE-PB", AMBITO_TRE_PB.id === "TRE-PB");
test("AMBITO_TRE_PB usa o ícone Building2", AMBITO_TRE_PB.icone === "Building2");
test("ambitoMap indexa TRE-PB", ambitoMap["TRE-PB"] === AMBITO_TRE_PB);

// --- Separação de arquivos de dados ---
test(
  "Nenhuma URL do SEI foi introduzida em src/data/eventos.ts",
  !eventosSource.includes("sei.tre-pb.jus.br"),
);
test(
  "eventosTrePb contém 12 eventos (1 memorando + 6 do despacho AGGTIC + 5 de preparação de urnas)",
  eventosTrePb.length === 12,
);

// ─────────────────────────────────────────────────────────────────────────────
// Cronograma de preparação de urnas (STIC/TRE-PB)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== CRONOGRAMA DE PREPARAÇÃO DE URNAS ===\n");

// A fonte é o Edital nº 14/2026, que substituiu a minuta, que substituiu o PDF v2.
const EDITAL_URL =
  "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar" +
  "&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar" +
  "&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193" +
  "&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874";

const preparacao = eventosTrePb.filter((ev) => ev.preparacaoUrnas?.length);

test("Há 5 eventos de preparação de urnas", preparacao.length === 5);
test(
  "Só o 1º turno, de 21 a 25/09 — o 2º turno foi removido com o PDF v2",
  JSON.stringify(preparacao.map((ev) => ev.data)) ===
    JSON.stringify([
      "2026-09-21", "2026-09-22", "2026-09-23", "2026-09-24", "2026-09-25",
    ]) && preparacao.every((ev) => ev.turno === "1T"),
);
test(
  "Nenhum evento de outubro sobrou em eventosTrePb",
  !eventosTrePb.some((ev) => ev.data.startsWith("2026-10")),
);
test(
  "Todos são de âmbito TRE-PB e categoria ADM",
  preparacao.every(
    (ev) => ev.ambito === "TRE-PB" && ev.categorias.join() === "ADM",
  ),
);
test(
  "Todos apontam para o Edital nº 14/2026 no SEI, marcado como restrito",
  preparacao.every(
    (ev) =>
      ev.documentoOrigem?.url === EDITAL_URL &&
      ev.documentoOrigem?.unidade === "TRE-PB/PTRE/ASPRE" &&
      ev.documentoOrigem?.restrito === true,
  ),
);
test(
  "O documento de origem nomeia o edital e o processo",
  preparacao.every(
    (ev) =>
      ev.documentoOrigem?.titulo.startsWith("Edital nº 14/2026") &&
      ev.documentoOrigem?.titulo.includes("0007828-72.2026.6.15.8000"),
  ),
);
test(
  "Os eventos de urnas não têm observações",
  preparacao.every((ev) => ev.observacoes === undefined),
);
// Os três elos da cadeia de fontes não podem voltar: PDF v2, minuta e o aviso.
const dadosTrePb = readFileSync("src/data/eventosTrePb.ts", "utf8");
test(
  "Nenhum resíduo do PDF v2 sobrou no arquivo de dados",
  !dadosTrePb.includes("cronograma_preparacao_urnas"),
);
test(
  "Nenhum card aponta mais para a minuta",
  !dadosTrePb.includes("cv=2502510") &&
    preparacao.every((ev) => !ev.documentoOrigem?.titulo.includes("Minuta")),
);
test(
  "O aviso de minuta saiu de todos os cards",
  preparacao.every((ev) => !ev.observacoes?.includes("MINUTA")),
);
test(
  "Todos se fundamentam no art. 100 da Resolução nº 23.751/2026/TSE",
  preparacao.every(
    (ev) =>
      ev.fundamentacao.length === 1 &&
      ev.fundamentacao[0].norma === "Resolução nº 23.751/2026/TSE" &&
      ev.fundamentacao[0].dispositivo === "art. 100, caput e § 2º",
  ),
);
test(
  "A URL do edital usa HTTPS no SEI do TRE-PB e preserva o hash de acesso",
  EDITAL_URL.startsWith("https://sei.tre-pb.jus.br/") &&
    EDITAL_URL.includes("infra_hash="),
);

// O turno escala as 68 zonas eleitorais, uma única vez.
for (const [rotulo, turno] of [["1º turno", "1T"]] as const) {
  const zonas = preparacao
    .filter((ev) => ev.turno === turno)
    .flatMap((ev) => ev.preparacaoUrnas!.flatMap((p) => p.zonas));

  test(`${rotulo}: 68 zonas eleitorais escaladas`, zonas.length === 68);
  test(
    `${rotulo}: nenhuma zona aparece em duas datas`,
    new Set(zonas.map((z) => z.ze)).size === 68,
  );
}

test(
  "Todo polo citado existe em nviMap e na ordem canônica",
  preparacao.every((ev) =>
    ev.preparacaoUrnas!.every(
      (p) => nviMap[p.nvi] !== undefined && ORDEM_NVIS.includes(p.nvi),
    ),
  ),
);
test(
  "Os polos de cada card seguem a ordem canônica",
  preparacao.every((ev) => {
    const idx = ev.preparacaoUrnas!.map((p) => ORDEM_NVIS.indexOf(p.nvi));
    return idx.every((v, i) => i === 0 || idx[i - 1] < v);
  }),
);
test(
  "As zonas de cada polo estão em ordem crescente",
  preparacao.every((ev) =>
    ev.preparacaoUrnas!.every((p) => {
      const n = p.zonas.map((z) => parseInt(z.ze, 10));
      return n.every((v, i) => i === 0 || n[i - 1] < v);
    }),
  ),
);
test(
  "Todo horário segue o formato 00h–00h",
  preparacao.every((ev) =>
    ev.preparacaoUrnas!.every((p) =>
      p.zonas.every((z) => /^\d{2}h–\d{2}h$/.test(z.horario)),
    ),
  ),
);
test(
  "Toda zona tem número no formato 00ª e município-sede preenchido",
  preparacao.every((ev) =>
    ev.preparacaoUrnas!.every((p) =>
      p.zonas.every((z) => /^\d{2}ª$/.test(z.ze) && z.sede.trim().length > 0),
    ),
  ),
);

// A busca precisa alcançar polo, número de zona e município — é como se procura.
const dia23 = preparacao.find((ev) => ev.data === "2026-09-23")!;
// Sedes retificadas por conferência do cadastro das zonas eleitorais: divergem
// de propósito da grafia do PDF e não podem regredir numa regeração da tabela.
const sedePorZona = new Map(
  preparacao.flatMap((ev) =>
    ev.preparacaoUrnas!.flatMap((polo) =>
      polo.zonas.map((z) => [`${ev.turno} ${z.ze}`, z.sede] as const),
    ),
  ),
);
for (const [ze, sede] of [
  ["49ª", "Queimadas"],
  ["75ª", "Itabaiana"],
  ["74ª", "Água Branca"],
] as const) {
  test(
    `${ze} zona tem ${sede} como município-sede`,
    sedePorZona.get(`1T ${ze}`) === sede,
  );
}

// O que o edital mudou em relação ao PDF v2 — nenhuma dessas linhas pode
// regredir numa regeração a partir da tabela antiga.
const escalaPorZona = new Map(
  preparacao.flatMap((ev) =>
    ev.preparacaoUrnas!.flatMap((polo) =>
      polo.zonas.map((z) => [z.ze, { data: ev.data, horario: z.horario }] as const),
    ),
  ),
);
test(
  "52ª zona (Coremas) passou de 21/09 para 25/09, das 08h às 18h",
  escalaPorZona.get("52ª")?.data === "2026-09-25" &&
    escalaPorZona.get("52ª")?.horario === "08h–18h",
);
test(
  "Nenhuma zona começa mais às 07h — o turno estendido de Pombal acabou",
  [...escalaPorZona.values()].every((e) => !e.horario.startsWith("07h")),
);
test(
  "As sete zonas que passaram a começar às 09h",
  ["06ª", "10ª", "32ª", "47ª", "60ª", "66ª", "75ª"].every(
    (ze) => escalaPorZona.get(ze)?.horario === "09h–18h",
  ),
);

test(
  'Busca por município encontra o card ("Cabedelo" → 23/09)',
  matchesSearch(camposBuscaveis(dia23), "cabedelo"),
);
test(
  'Busca ignora acento ("juazeirinho" → 23/09)',
  matchesSearch(camposBuscaveis(dia23), "juazeirinho"),
);
test(
  'Busca por sigla de polo encontra o card ("NVIPBL" → 23/09)',
  matchesSearch(camposBuscaveis(dia23), "nvipbl"),
);
test(
  'Busca pela cidade do polo encontra o card ("Pombal" → 23/09)',
  matchesSearch(camposBuscaveis(dia23), "pombal"),
);
test(
  'Busca por município ausente da data não retorna o card ("Sapé" ∉ 23/09)',
  !matchesSearch(camposBuscaveis(dia23), "sape"),
);
test(
  'Busca por município ausente encontra a data certa ("Sapé" ∈ 25/09)',
  matchesSearch(
    camposBuscaveis(preparacao.find((ev) => ev.data === "2026-09-25")!),
    "sape",
  ),
);

// O .ics precisa levar a escala junto — sem ela o evento exportado fica vazio.
const { buildEventDescription: descreverIcs } = await import(
  "../src/lib/ics"
);
const icsDia23 = descreverIcs(dia23);
test(
  "Descrição do .ics traz a escala de preparação de urnas",
  icsDia23.includes("Escala de preparacao de urnas:"),
);
test(
  "Descrição do .ics nomeia o polo com a cidade e o endereço da cerimônia",
  icsDia23.includes(
    "NVIPBL - Pombal (Rua Profª. Maria Claudete Bandeira de Sousa, s/nº, Petrópolis, Pombal – PB):",
  ),
);
test(
  "Descrição do .ics traz zona, município e horário",
  icsDia23.includes("57ª Cabedelo 08h–18h"),
);
test(
  "Descrição do .ics traz o link do edital",
  icsDia23.includes(EDITAL_URL),
);

const blocoSourcePreview = readFileSync(
  "src/components/timeline/PreparacaoUrnasBloco.tsx",
  "utf8",
);

// As cores dos polos são únicas e vivem só em nvis.ts.
test(
  "Todo polo tem endereço preenchido, em fonte única",
  ORDEM_NVIS.every((n) => nviMap[n].endereco.trim().length > 0) &&
    new Set(ORDEM_NVIS.map((n) => nviMap[n].endereco)).size === ORDEM_NVIS.length,
);
test(
  "O endereço de cada polo nomeia a própria cidade",
  ORDEM_NVIS.every((n) => nviMap[n].endereco.includes(nviMap[n].cidade)),
);
test(
  "Nenhum componente repete um endereço — todos vêm de nvis.ts",
  !blocoSourcePreview.includes("Hilton Souto Maior") &&
    blocoSourcePreview.includes("info.endereco"),
);
test(
  "A busca alcança o endereço da cerimônia",
  matchesSearch(camposBuscaveis(dia23), "maria claudete bandeira"),
);
test(
  "A sigla NVI tem expansão oficial",
  NVI_EXPANSAO === "Núcleo de Voto Informatizado",
);
test(
  "A legenda do NVI aparece uma vez por card, e não em cada polo",
  blocoSourcePreview.includes("NVI — {NVI_EXPANSAO}") &&
    blocoSourcePreview.split("NVI_EXPANSAO").length - 1 === 2,
);
test(
  "A busca alcança a expansão da sigla",
  matchesSearch(camposBuscaveis(dia23), "nucleo de voto informatizado"),
);
test(
  "A SJI é expandida nos dois eventos que a citam",
  eventosTrePb
    .filter((ev) => ev.titulo.includes("SJI"))
    .every((ev) =>
      ev.observacoes?.includes("SJI — Secretaria Judiciária da Informação"),
    ) && eventosTrePb.filter((ev) => ev.titulo.includes("SJI")).length === 2,
);

test(
  "Cada polo tem cor distinta",
  new Set(ORDEM_NVIS.map((n) => nviMap[n].cor)).size === ORDEM_NVIS.length,
);
test(
  "Nenhum polo reutiliza a cor do âmbito TRE-PB",
  ORDEM_NVIS.every((n) => nviMap[n].cor !== AMBITO_TRE_PB.cor),
);
const blocoSource = readFileSync(
  "src/components/timeline/PreparacaoUrnasBloco.tsx",
  "utf8",
);
test(
  "O filete entre colunas só é exibido a partir do breakpoint sm",
  /absolute inset-y-0 left-1\/2 hidden w-px bg-neutral-300 sm:block/.test(
    blocoSource,
  ),
);
test(
  "O filete não é renderizado quando o polo tem uma zona só",
  blocoSource.includes("polo.zonas.length > 1 &&"),
);
test(
  "O filete é decorativo e não entra na árvore de acessibilidade",
  /aria-hidden="true"\s+className="pointer-events-none absolute inset-y-0/.test(
    blocoSource,
  ),
);
test(
  "A grade de duas colunas também é condicionada a sm",
  blocoSource.includes("sm:grid-cols-2") &&
    !/(?<!sm:)grid-cols-2/.test(blocoSource),
);
test(
  "Nenhum hexadecimal de polo está escrito no componente",
  !readFileSync(
    "src/components/timeline/PreparacaoUrnasBloco.tsx",
    "utf8",
  ).match(/#[0-9a-fA-F]{6}/),
);
test(
  "Todo evento de eventosTrePb declara ambito TRE-PB",
  eventosTrePb.every((ev) => ev.ambito === "TRE-PB"),
);
test(
  "IDs de eventosTrePb carregam o infixo trepb",
  eventosTrePb.every((ev) => ev.id.includes("-trepb-")),
);

// ─────────────────────────────────────────────────────────────────────────────
// Despacho nº 2497253/2026 — AGGTIC (Processo 0007829-57.2026.6.15.8000)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== DESPACHO AGGTIC — PREPARATIVOS DE 14 A 18/09 ===\n");

const URL_RES_23751 =
  "https://www.tse.jus.br/legislacao/compilada/res/2026/" +
  "resolucao-no-23-751-de-26-de-fevereiro-de-2026";

const despacho = eventosTrePb.filter((ev) =>
  ev.documentoOrigem?.titulo.includes("2497253/2026"),
);

test("Há 6 eventos oriundos do despacho AGGTIC", despacho.length === 6);
test(
  "Cobrem as datas de 14 a 18/09, com 16/09 em dobro (SJI e Zona Eleitoral)",
  JSON.stringify(despacho.map((ev) => ev.data)) ===
    JSON.stringify([
      "2026-09-14",
      "2026-09-15",
      "2026-09-16",
      "2026-09-16",
      "2026-09-17",
      "2026-09-18",
    ]),
);
test(
  "IDs seguem o padrão do arquivo",
  JSON.stringify(despacho.map((ev) => ev.id)) ===
    JSON.stringify([
      "2026-09-14-trepb-1",
      "2026-09-15-trepb-1",
      "2026-09-16-trepb-1",
      "2026-09-16-trepb-2",
      "2026-09-17-trepb-1",
      "2026-09-18-trepb-1",
    ]),
);
test(
  "Dias da semana conferem com o calendário de 2026",
  JSON.stringify(despacho.map((ev) => ev.diaSemana)) ===
    JSON.stringify([
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
    ]),
);
test("Todos os títulos cabem em 120 caracteres", despacho.every((ev) => ev.titulo.length <= 120));
test("Todos são do 1º turno", despacho.every((ev) => ev.turno === "1T"));
test("perfis é vazio em todos (relevante para todos)", despacho.every((ev) => ev.perfis.length === 0));
test("Todos são categorizados como ADM", despacho.every((ev) => ev.categorias.includes("ADM")));
test(
  "O fechamento do CAND também é categorizado como REG",
  despacho
    .find((ev) => ev.id === "2026-09-15-trepb-1")
    ?.categorias.join(",") === "ADM,REG",
);
test(
  "Todos apontam para o mesmo despacho no SEI, marcado como restrito",
  despacho.every(
    (ev) =>
      ev.documentoOrigem?.url.startsWith("https://sei.tre-pb.jus.br/") === true &&
      ev.documentoOrigem?.url.includes("id_procedimento=2571853") &&
      ev.documentoOrigem?.url.includes("infra_hash=") &&
      ev.documentoOrigem?.unidade === "TRE-PB/STIC/AGGTIC" &&
      ev.documentoOrigem?.restrito === true,
  ),
);
test(
  "O documento de origem nomeia o processo administrativo",
  despacho.every((ev) =>
    ev.documentoOrigem?.titulo.includes("0007829-57.2026.6.15.8000"),
  ),
);

// --- Fundamentação na Resolução de Atos Gerais ---
test(
  "Todos fundamentam-se na Resolução nº 23.751/2026/TSE",
  despacho.every(
    (ev) =>
      ev.fundamentacao.length > 0 &&
      ev.fundamentacao.every(
        (f) => f.norma === "Resolução nº 23.751/2026/TSE" && f.url === URL_RES_23751,
      ),
  ),
);
test(
  "Cada etapa aponta o dispositivo que a sustenta",
  JSON.stringify(despacho.map((ev) => ev.fundamentacao[0]?.dispositivo)) ===
    JSON.stringify([
      "art. 5º, caput e §§ 1º e 2º",
      "art. 94, caput, I, IV e V, e § 1º",
      "art. 92, caput e § 2º",
      "art. 93, caput e parágrafo único",
      "arts. 94 e 95",
      "arts. 94 e 95",
    ]),
);
test(
  "A URL da Resolução nº 23.751/2026 está catalogada em linksReferencia",
  readFileSync("src/data/linksReferencia.ts", "utf8").includes(URL_RES_23751),
);

// --- Transcrição e encadeamento ---
test(
  "A oficialização do SISTOT transcreve o art. 5º",
  despacho[0]?.descricao.includes(
    "somente admite o tráfego de arquivos assinados por outros sistemas já oficializados",
  ) === true,
);
test(
  'As duas emissões de 16/09 nomeiam o relatório "Ambiente de Votação"',
  despacho[2]?.descricao.includes('"Ambiente de Votação"') === true &&
    despacho[3]?.descricao.includes('"Ambiente de Votação"') === true,
);
test(
  "Em 16/09 vem primeiro a emissão pela SJI (art. 92) e depois a da Zona Eleitoral (art. 93)",
  despacho[2]?.titulo.includes("SJI") === true &&
    despacho[3]?.titulo.includes("Zona Eleitoral") === true,
);
test(
  "A geração de mídias registra que ocorre em 17 e 18 de setembro",
  despacho[4]?.descricao.includes("17 e 18 de setembro de 2026") === true &&
    despacho[5]?.descricao.includes("17 e 18 de setembro de 2026") === true,
);
test(
  "Os dois dias de geração de mídias se distinguem no título",
  despacho[4]?.titulo.includes("1º de 2 dias") === true &&
    despacho[5]?.titulo.includes("2º de 2 dias") === true,
);
test(
  "Todos registram o encadeamento até a preparação de urnas de 21/09",
  despacho.every((ev) =>
    ev.observacoes?.includes("preparação de urnas nos polos (a partir de 21/09)"),
  ),
);
test(
  "O fechamento do CAND explica a dependência do julgamento dos registros em 14/09",
  despacho[1]?.observacoes?.includes(
    "todos os pedidos de registro devem estar julgados",
  ) === true,
);
test(
  "A busca encontra os eventos do despacho pelos sistemas citados",
  matchesSearch(camposBuscaveis(despacho[0] as EventoCalendario), "SISTOT") &&
    matchesSearch(camposBuscaveis(despacho[1] as EventoCalendario), "CAND") &&
    matchesSearch(camposBuscaveis(despacho[4] as EventoCalendario), "mídias"),
);

// --- O evento de 11/09/2026 ---
test("Evento 2026-09-11-trepb-1 existe", memorando !== undefined);
test("Data é 2026-09-11", memorando?.data === "2026-09-11");
test("Dia da semana é sexta-feira", memorando?.diaSemana === "sexta-feira");
test("Título cabe em 120 caracteres", (memorando?.titulo.length ?? 999) <= 120);
test(
  "Categoria é exclusivamente ADM",
  memorando?.categorias.length === 1 && memorando?.categorias[0] === "ADM",
);
test("Turno é 1T", memorando?.turno === "1T");
test("perfis é vazio (relevante para todos)", memorando?.perfis.length === 0);
test(
  "fundamentacao é vazia — memorando não é norma",
  memorando?.fundamentacao.length === 0,
);

// --- Documento de origem ---
test("documentoOrigem existe", memorando?.documentoOrigem !== undefined);
test(
  "documentoOrigem aponta para o SEI do TRE-PB por HTTPS",
  memorando?.documentoOrigem?.url.startsWith("https://sei.tre-pb.jus.br/") === true,
);
test(
  "documentoOrigem preserva o hash de acesso do SEI",
  memorando?.documentoOrigem?.url.includes("infra_hash=") === true,
);
test(
  "documentoOrigem está marcado como restrito",
  memorando?.documentoOrigem?.restrito === true,
);
test(
  "documentoOrigem nomeia o Memorando-Circular nº 18/2026",
  memorando?.documentoOrigem?.titulo.includes("18/2026") === true,
);
test(
  "documentoOrigem nomeia a unidade emissora",
  memorando?.documentoOrigem?.unidade === "TRE-PB/PTRE/DG/STIC",
);

// --- Transcrição literal dos três itens ---
const descricao = memorando?.descricao ?? "";
test("Descrição cita o sistema SINPLES", descricao.includes("SINPLES"));
test(
  "Descrição traz o item 1 — revisão das unidades eleitorais",
  descricao.includes("Polo de Contingência e Transmissão"),
);
test(
  "Descrição traz o item 2 — urnas de contingência por LAT",
  descricao.includes("Quantidade de Urnas de Contingência por LAT"),
);
test(
  "Descrição traz o item 3 — cronograma local de votação x LAT",
  descricao.includes("cronograma de vinculação entre local de votação e LAT"),
);
test("Descrição menciona o JE Connect", descricao.includes("JE Connect"));

// ─── Filtro por âmbito ───────────────────────────────────────────────────────
const { FILTRO_PADRAO } = await import("../src/hooks/useFilteredEvents");
const { parseUrlToFilters, filtersToUrl } = await import(
  "../src/hooks/useUrlFilters"
);

console.log("\n=== TESTES DE FILTRO POR ÂMBITO ===\n");

test("FILTRO_PADRAO nasce com ambito null", FILTRO_PADRAO.ambito === null);

test(
  "URL ?ambito=tre-pb é lida como TRE-PB",
  parseUrlToFilters("?ambito=tre-pb").ambito === "TRE-PB",
);
test(
  "URL ?ambito=nacional é lida como nacional",
  parseUrlToFilters("?ambito=nacional").ambito === "nacional",
);
test(
  "Valor inválido de ambito na URL é descartado",
  parseUrlToFilters("?ambito=marte").ambito === null,
);
test(
  "URL sem parâmetros mantém ambito null",
  parseUrlToFilters("").ambito === null,
);
test(
  "Filtro TRE-PB é serializado para a URL",
  filtersToUrl({ ...FILTRO_PADRAO, ambito: "TRE-PB" }, "/") === "?ambito=tre-pb",
);
test(
  "Filtro nacional é serializado para a URL",
  filtersToUrl({ ...FILTRO_PADRAO, ambito: "nacional" }, "/") ===
    "?ambito=nacional",
);
test(
  "ambito null não escreve parâmetro na URL",
  filtersToUrl(FILTRO_PADRAO, "/") === "/",
);
test(
  "Round-trip URL → estado → URL preserva o âmbito",
  filtersToUrl(parseUrlToFilters("?ambito=tre-pb"), "/") === "?ambito=tre-pb",
);

// ─── Identidade visual do card ───────────────────────────────────────────────
const eventCard = readFileSync("src/components/timeline/EventCard.tsx", "utf8");
const proximoCard = readFileSync(
  "src/components/proximos-eventos/EventoProximoCard.tsx",
  "utf8",
);

console.log("\n=== TESTES DE IDENTIDADE VISUAL DO CARD ===\n");

test(
  "EventCard importa a constante de âmbito",
  /import\s*\{[^}]*AMBITO_TRE_PB[^}]*\}\s*from\s*"\.\.\/\.\.\/data\/ambitos"/.test(
    eventCard,
  ),
);
test(
  "EventCard deriva isTrePb do campo ambito",
  /const\s+isTrePb\s*=\s*evento\.ambito\s*===\s*"TRE-PB"/.test(eventCard),
);
test(
  "EventCard não repete o hexadecimal do âmbito",
  !eventCard.includes("#0F766E"),
);
test(
  "EventoProximoCard não repete o hexadecimal do âmbito",
  !proximoCard.includes("#0F766E"),
);
test(
  "EventoProximoCard importa a constante de âmbito",
  proximoCard.includes("AMBITO_TRE_PB"),
);
test(
  "Destaque e favorito prevalecem sobre o âmbito na borda esquerda",
  /const\s+bordaAmbito\s*=\s*isTrePb\s*&&\s*!isCustom\s*&&\s*!evento\.destaque\s*&&\s*!favorito/.test(
    eventCard,
  ),
);
test(
  "Card regional preserva o botão de favorito (condicionado só a isCustom)",
  eventCard.includes("{!isCustom && (") &&
    !eventCard.includes("{!isCustom && !isTrePb && ("),
);

// ─── Documento de origem no detalhe ──────────────────────────────────────────
const eventDetail = readFileSync(
  "src/components/timeline/EventDetail.tsx",
  "utf8",
);

console.log("\n=== TESTES DO BLOCO DOCUMENTO DE ORIGEM ===\n");

test(
  "EventDetail renderiza o bloco Documento de origem",
  eventDetail.includes("Documento de origem"),
);
test(
  "O bloco é condicionado à existência de documentoOrigem",
  /evento\.documentoOrigem\s*&&/.test(eventDetail),
);
test(
  "O link do documento abre em nova aba com rel seguro",
  /rel="noopener noreferrer"/.test(eventDetail),
);
test(
  "O aviso de acesso restrito existe e nomeia o SEI/TRE-PB",
  eventDetail.includes("SEI/TRE-PB") && eventDetail.includes("acesso restrito"),
);
test(
  "O aviso é condicionado ao campo restrito",
  /documentoOrigem\.restrito/.test(eventDetail) ||
    /doc\.restrito/.test(eventDetail),
);

// ─── Integração: App, painel de filtros e .ics ───────────────────────────────
const appSource = readFileSync("src/App.tsx", "utf8");
const filterPanel = readFileSync(
  "src/components/filters/FilterPanel.tsx",
  "utf8",
);
const { buildEventDescription } = await import("../src/lib/ics");

console.log("\n=== TESTES DE INTEGRAÇÃO ===\n");

test("App importa eventosTrePb", appSource.includes('from "./data/eventosTrePb"'));
test(
  "App concatena eventosTrePb na lista exibida",
  /\[\s*\.\.\.eventos,\s*\.\.\.eventosTrePb,\s*\.\.\.meusEventosConvertidos\s*\]/.test(
    appSource,
  ),
);
test(
  "Contador total soma os eventos regionais",
  /eventos\.length\s*\+\s*eventosTrePb\.length/.test(appSource),
);
test(
  "hasActiveFilters considera o âmbito",
  /filtros\.ambito\s*!==\s*null/.test(appSource),
);
test("FilterPanel expõe o grupo Âmbito", filterPanel.includes("Âmbito"));
test(
  "FilterPanel conta o âmbito entre os filtros ativos",
  /filtros\.ambito\s*!==\s*null\s*\?\s*1\s*:\s*0/.test(filterPanel),
);

// ProximosEventos monta a própria lista, sem passar por App.tsx: se ele não
// concatenar os regionais, o badge TRE-PB do card compacto nunca renderiza.
const proximosEventosSource = readFileSync(
  "src/components/proximos-eventos/ProximosEventos.tsx",
  "utf8",
);
test(
  "ProximosEventos alimenta-se também dos eventos regionais",
  proximosEventosSource.includes('from "../../data/eventosTrePb"') &&
    /\[\s*\.\.\.eventos,\s*\.\.\.eventosTrePb\s*\]/.test(proximosEventosSource),
);

const descricaoIcs = buildEventDescription(memorando as EventoCalendario);
test(
  "Descrição do .ics carrega a URL do memorando",
  descricaoIcs.includes("sei.tre-pb.jus.br"),
);
test(
  "Descrição do .ics nomeia o documento de origem",
  descricaoIcs.includes("Documento de origem:"),
);
test(
  "Descrição do .ics avisa sobre o acesso restrito",
  descricaoIcs.includes("acesso restrito"),
);

// ─── Regressão: todas as categorias sobrevivem à URL ─────────────────────────
console.log("\n=== TESTE DE REGRESSÃO: CATEGORIAS NA URL ===\n");

test(
  "As 13 categorias sobrevivem ao round-trip pela URL",
  parseUrlToFilters("?cat=ELE,REG,PRO,FIN,ADM,FIS,CON,VOT,PES,DIP,PAR,GAR,TRA")
    .categorias.length === 13,
);

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
