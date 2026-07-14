/**
 * Testes de integridade da central de links de referência.
 */

import { readFileSync } from "node:fs";

type LinkCatalogo = {
  id: string;
  titulo: string;
  url: string;
  categoria: string;
};

type ModuloCatalogo = {
  linksReferencia: readonly LinkCatalogo[];
  getLinkReferencia: (id: string) => LinkCatalogo;
};

let modulo: ModuloCatalogo | null = null;

try {
  modulo = (await import("../src/data/linksReferencia.ts")) as ModuloCatalogo;
} catch {
  // O primeiro ciclo TDD deve falhar por asserção enquanto o catálogo não existir.
}

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

const links = modulo?.linksReferencia ?? [];
const urlsCatalogo = new Set(links.map((link) => link.url));
const idsCatalogo = new Set(links.map((link) => link.id));

const contagensEsperadas: Record<string, number> = {
  "leis-codigos": 5,
  "resolucoes-normas": 12,
  "formularios-tte": 4,
  "manuais-orientacoes": 6,
  "portais-consultas": 1,
};

const contagensReais = links.reduce<Record<string, number>>((total, link) => {
  total[link.categoria] = (total[link.categoria] ?? 0) + 1;
  return total;
}, {});

const eventosSource = readFileSync("src/data/eventos.ts", "utf8");
const urlsMarkdown = Array.from(
  eventosSource.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g),
  (match) => match[1],
);
const urlsFundamentacao = Array.from(
  eventosSource.matchAll(/url:\s*"(https:\/\/[^"]+)"/g),
  (match) => match[1],
);
const urlsInformativasEventos = [...new Set([...urlsMarkdown, ...urlsFundamentacao])];

console.log("=== TESTES DA CENTRAL DE LINKS DE REFERÊNCIA ===\n");

test("Módulo do catálogo existe", modulo !== null);
test("Catálogo contém 28 referências", links.length === 28);
test("IDs do catálogo são únicos", idsCatalogo.size === links.length);
test("URLs do catálogo são únicas", urlsCatalogo.size === links.length);
test("Todos os links usam HTTPS", links.every((link) => link.url.startsWith("https://")));
test(
  "Categorias possuem as contagens aprovadas",
  Object.entries(contagensEsperadas).every(
    ([categoria, quantidade]) => contagensReais[categoria] === quantidade,
  ),
);
test(
  "Todas as URLs informativas dos eventos estão catalogadas",
  urlsInformativasEventos.every((url) => urlsCatalogo.has(url)),
);
test(
  "Resolução TSE nº 23.610/2019 está catalogada",
  links.some((link) => link.id === "res-tse-23610-2019"),
);
test(
  "Manual ELO de TTE está catalogado",
  links.some((link) => link.id === "manual-elo-tte"),
);
test(
  "Instagram dos créditos não integra o catálogo",
  !links.some((link) => link.url.includes("instagram.com")),
);
test(
  "Consulta por ID retorna a referência esperada",
  modulo?.getLinkReferencia("res-tse-23760-2026")?.id === "res-tse-23760-2026",
);

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
