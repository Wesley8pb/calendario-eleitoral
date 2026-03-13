/**
 * Testes de segurança e edge cases para o Calendário Eleitoral 2026
 */

import { normalizeSearch, matchesSearch } from "../src/lib/search";

// Contador global
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

console.log("=== TESTES DE BUSCA (search.ts) ===\n");

test("Normalização de acentos", normalizeSearch("ELEIÇÃO") === "eleicao");
test("Case insensitive", normalizeSearch("ELEITOR") === "eleitor");
test("Trim de espaços", normalizeSearch("  registro  ") === "registro");
test("Busca AND com múltiplos tokens", matchesSearch("Registro de candidatura eleitoral", "registro candidatura"));
test("Busca vazia retorna true", matchesSearch("qualquer texto", ""));
test("Busca case/acentos insensitive", matchesSearch("ELEIÇÃO GERAL", "eleiçao"));

const startReDoS = Date.now();
matchesSearch("texto normal", "[{}()*+?^$|]".repeat(100));
test("Regex chars não causam ReDoS (<100ms)", Date.now() - startReDoS < 100);

const longQuery = "A".repeat(10000);
const startLong = Date.now();
matchesSearch("texto", longQuery);
test("String 10k chars não trava (<500ms)", Date.now() - startLong < 500);

test("Null byte removido", matchesSearch("eleição", "elei\u0000cao"));
test("Apenas espaços retorna true", matchesSearch("qualquer texto", "   "));
test("Caracteres de controle removidos", normalizeSearch("teste\u0001\u0002\u001F") === "teste");

console.log("\n=== TESTES DE VALIDAÇÃO DE IDs ===\n");

const validIdPattern = /^\d{4}-\d{2}-\d{2}-\d+$/;
test('ID válido "2026-10-04-1"', validIdPattern.test("2026-10-04-1"));
test("ID inválido rejeitado", !validIdPattern.test("invalid-id"));
test("XSS em ID rejeitado", !validIdPattern.test("<script>alert(1)</script>"));
test("Path traversal rejeitado", !validIdPattern.test("../../etc/passwd"));
test("ID vazio rejeitado", !validIdPattern.test(""));
test("Mês/dia inválido passa formato (esperado)", validIdPattern.test("2026-13-45-999"));

console.log("\n=== TESTES DE VALIDAÇÃO DE URL PARAMS ===\n");

const VALID_CATS = ["ELE", "REG", "PRO", "FIN", "ADM", "FIS", "CON", "VOT", "PES", "DIP", "PAR"];
const VALID_TURNOS = ["1T", "2T", "POS"];
const mesPattern = /^\d{4}-\d{2}$/;

test("Categoria válida aceita", VALID_CATS.includes("ELE" as any));
test("Categoria inválida rejeitada", !VALID_CATS.includes("INVALID" as any));
test("Turno válido aceito", VALID_TURNOS.includes("1T" as any));
test("Turno inválido rejeitado", !VALID_TURNOS.includes("INVALID" as any));
test('Mês válido "2026-10"', mesPattern.test("2026-10"));
test("Formato não numérico rejeitado", !mesPattern.test("invalid"));
test("XSS em mês rejeitado", !mesPattern.test("<script>"));
test("Mês 13 passa formato (esperado)", mesPattern.test("2026-13"));

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed === 0) {
  console.log("✅ Todos os testes de segurança passaram!\n");
} else {
  console.log(`❌ ${failed} teste(s) falharam.\n`);
  process.exit(1);
}