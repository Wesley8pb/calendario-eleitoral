/**
 * Testes de integridade dos eventos de âmbito regional TRE-PB.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md
 */

import { readFileSync } from "node:fs";
import type { EventoCalendario } from "../src/types";
import { eventosTrePb } from "../src/data/eventosTrePb";
import { AMBITO_TRE_PB, ambitoMap } from "../src/data/ambitos";
import { nviMap, ORDEM_NVIS } from "../src/data/nvis";
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
  "eventosTrePb contém 11 eventos (1 memorando + 10 de preparação de urnas)",
  eventosTrePb.length === 11,
);

// ─────────────────────────────────────────────────────────────────────────────
// Cronograma de preparação de urnas (STIC/TRE-PB)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== CRONOGRAMA DE PREPARAÇÃO DE URNAS ===\n");

const PDF_CRONOGRAMA =
  "https://www.tre-pb.jus.br/eleicoes/e/arquivos/" +
  "cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/" +
  "@@display-file/file/" +
  "cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf";

const preparacao = eventosTrePb.filter((ev) => ev.preparacaoUrnas?.length);

test("Há 10 eventos de preparação de urnas", preparacao.length === 10);
test(
  "5 datas no 1º turno (21 a 25/09) e 5 no 2º (12 a 16/10)",
  JSON.stringify(preparacao.map((ev) => ev.data)) ===
    JSON.stringify([
      "2026-09-21", "2026-09-22", "2026-09-23", "2026-09-24", "2026-09-25",
      "2026-10-12", "2026-10-13", "2026-10-14", "2026-10-15", "2026-10-16",
    ]),
);
test(
  "Todos são de âmbito TRE-PB e categoria ADM",
  preparacao.every(
    (ev) => ev.ambito === "TRE-PB" && ev.categorias.join() === "ADM",
  ),
);
test(
  "Todos apontam para o PDF público do cronograma, sem marca de acesso restrito",
  preparacao.every(
    (ev) =>
      ev.documentoOrigem?.url === PDF_CRONOGRAMA &&
      ev.documentoOrigem?.unidade === "TRE-PB/STIC" &&
      ev.documentoOrigem?.restrito !== true,
  ),
);
test(
  "A URL do cronograma usa HTTPS no domínio tre-pb.jus.br",
  PDF_CRONOGRAMA.startsWith("https://www.tre-pb.jus.br/"),
);

// Cada turno escala as 68 zonas eleitorais, uma única vez.
for (const [rotulo, turno] of [["1º turno", "1T"], ["2º turno", "2T"]] as const) {
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
  "Descrição do .ics nomeia o polo com a cidade",
  icsDia23.includes("NVIPBL - Pombal:"),
);
test(
  "Descrição do .ics traz zona, município e horário",
  icsDia23.includes("57ª Cabedelo 08h–18h"),
);
test(
  "Descrição do .ics traz o link público do cronograma",
  icsDia23.includes(PDF_CRONOGRAMA),
);

// As cores dos polos são únicas e vivem só em nvis.ts.
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
