/**
 * Testes da janela em que o contador fica oculto: da abertura da votação
 * do 1º turno (04/10/2026, 08h) até a meia-noite seguinte (05/10/2026, 00h),
 * horário de Brasília. Depois disso, volta contando para o 2º turno.
 */

import { getCountdownState } from "../src/hooks/useCountdown";

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

const em = (iso: string) => getCountdownState(new Date(iso));

const vespera = em("2026-10-04T07:59:59-03:00");
test(
  "Um segundo antes da abertura do 1º turno ainda conta para o 1º turno",
  vespera.fase === "contagem" &&
    vespera.contagem.label === "até o 1º Turno" &&
    vespera.contagem.segundos === 1,
);

test("Na abertura do 1º turno o contador some", em("2026-10-04T08:00:00-03:00").fase === "votacao-1t");
test("Durante a apuração do 1º turno o contador segue oculto", em("2026-10-04T20:00:00-03:00").fase === "votacao-1t");
test("Às 23h59min59s do dia do 1º turno o contador segue oculto", em("2026-10-04T23:59:59-03:00").fase === "votacao-1t");

const retomada = em("2026-10-05T00:00:00-03:00");
test(
  "À meia-noite seguinte o contador volta contando para o 2º turno",
  retomada.fase === "contagem" &&
    retomada.contagem.label === "até o 2º Turno" &&
    retomada.contagem.dias === 20 &&
    retomada.contagem.horas === 8,
);

test(
  "A janela respeita o horário de Brasília, não o fuso do navegador",
  em("2026-10-05T02:59:59Z").fase === "votacao-1t" && em("2026-10-05T03:00:00Z").fase === "contagem",
);

test("Após a abertura do 2º turno o contador encerra", em("2026-10-25T08:00:00-03:00").fase === "encerrado");

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed > 0) process.exit(1);
