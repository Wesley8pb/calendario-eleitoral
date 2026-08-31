/**
 * Testes de integridade dos eventos de âmbito regional TRE-PB.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-31-eventos-tre-pb-design.md
 */

import { readFileSync } from "node:fs";
import type { EventoCalendario } from "../src/types";
import { eventosTrePb } from "../src/data/eventosTrePb";
import { AMBITO_TRE_PB, ambitoMap } from "../src/data/ambitos";

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
test("eventosTrePb contém exatamente 1 evento", eventosTrePb.length === 1);
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

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
