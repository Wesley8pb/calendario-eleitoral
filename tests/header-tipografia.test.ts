/**
 * Testes de integridade da tipografia do título do Header.
 * Trava as decisões registradas em
 * docs/superpowers/specs/2026-08-12-header-title-typography-design.md
 */

import { readFileSync } from "node:fs";

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

const indexHtml = readFileSync("index.html", "utf8");
const tailwind = readFileSync("tailwind.config.js", "utf8");
const header = readFileSync("src/components/layout/Header.tsx", "utf8");
const netlify = readFileSync("netlify.toml", "utf8");

const fontsQuery = indexHtml.match(/fonts\.googleapis\.com\/css2\?([^"]+)/)?.[1] ?? "";
const pesosDaLora = fontsQuery.match(/family=Lora:wght@([^&]+)/)?.[1] ?? "";
const classesDoH1 = header.match(/<h1[^>]*className="([^"]*)"/)?.[1] ?? "";

console.log("=== TESTES DE TIPOGRAFIA DO HEADER ===\n");

test("Lora é requisitada ao Google Fonts", pesosDaLora !== "");
test("Lora carrega exclusivamente o peso 700", pesosDaLora === "700");
test("A requisição de fontes mantém display=swap", fontsQuery.includes("display=swap"));
test(
  "Inter e JetBrains Mono seguem carregadas",
  fontsQuery.includes("family=Inter:") && fontsQuery.includes("family=JetBrains+Mono:"),
);
test(
  "tailwind expõe o token display com Lora e fallback Georgia",
  /display:\s*\[\s*"Lora",\s*"Georgia",\s*"serif"\s*\]/.test(tailwind),
);
test("O h1 usa a família display", classesDoH1.split(/\s+/).includes("font-display"));
test(
  "O h1 usa a escala 30/48/56 px",
  ["text-3xl", "sm:text-5xl", "lg:text-[3.5rem]"].every((c) =>
    classesDoH1.split(/\s+/).includes(c),
  ),
);
test(
  "O h1 tem a sombra que descola o texto do gradiente",
  classesDoH1.includes("[text-shadow:0_2px_12px_rgba(0,0,0,0.30)]"),
);
test(
  "O h1 fecha o bloco com entrelinha 1,1 e tracking -0,02 em",
  classesDoH1.split(/\s+/).includes("leading-[1.1]") &&
    classesDoH1.split(/\s+/).includes("tracking-[-0.02em]"),
);
test("Existe exatamente um h1 no Header", (header.match(/<h1[\s>]/g) ?? []).length === 1);
test(
  "O h1 preserva o texto original",
  header.includes("Calendário Eleitoral") && header.includes("Eleições 2026"),
);
test(
  "O ano permanece em secondary-500",
  /<span className="text-secondary-500">Eleições 2026<\/span>/.test(header),
);
test(
  "A CSP segue autorizando as fontes, sem alteração",
  netlify.includes("https://fonts.googleapis.com") &&
    netlify.includes("font-src https://fonts.gstatic.com"),
);
test("Header.tsx não introduz cor hexadecimal fora da paleta", !/#[0-9a-fA-F]{6}/.test(header));

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
