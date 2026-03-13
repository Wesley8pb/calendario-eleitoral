/**
 * Testes de exportação ICS (RFC 5545)
 */

import {
  escapeIcsText,
  buildEventDescription,
  buildEventsIcs,
} from "../src/lib/ics";
import type { EventoCalendario } from "../src/types";

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

console.log("=== TESTES DE EXPORTAÇÃO ICS ===\n");

// Teste de escape
test("Escape de backslash", escapeIcsText("a\\b") === "a\\\\b");
test("Escape de ponto-e-vírgula", escapeIcsText("a;b") === "a\\;b");
test("Escape de vírgula", escapeIcsText("a,b") === "a\\,b");
test("Escape de newline", escapeIcsText("a\nb") === "a\\nb");
test("Escape de CRLF", escapeIcsText("a\r\nb") === "a\\nb");
test("Escape múltiplo", escapeIcsText("a\\,b;c\nd") === "a\\\\\\,b\\;c\\nd");

// Teste de descrição
const eventoTeste: EventoCalendario = {
  id: "2026-10-04-1",
  data: "2026-10-04",
  diaSemana: "domingo",
  titulo: "Eleições Gerais 2026",
  descricao: "Primeiro turno das eleições.",
  categorias: ["VOT"],
  perfis: [],
  marcos: null,
  turno: "1T",
  fundamentacao: [{ norma: "Resolução TSE", dispositivo: "Art. 1º", url: "" }],
};

const desc = buildEventDescription(eventoTeste);
test("Descrição inclui conteúdo", desc.includes("Primeiro turno"));
test("Descrição inclui fundamentação", desc.includes("Resolução TSE"));
test("Descrição inclui assinatura", desc.includes("Calendario Eleitoral 2026"));

// Teste de ICS completo
const ics = buildEventsIcs([eventoTeste], "none");
test("ICS começa com VCALENDAR", ics.startsWith("BEGIN:VCALENDAR"));
test("ICS termina com VCALENDAR", ics.includes("END:VCALENDAR"));
test("ICS contém VEVENT", ics.includes("BEGIN:VEVENT"));
test("ICS contém UID", ics.includes("UID:2026-10-04-1@calendario-eleitoral"));
test("ICS contém SUMMARY", ics.includes("SUMMARY:Elei"));
test("ICS contém DTSTART", ics.includes("DTSTART;VALUE=DATE:20261004"));
test("ICS contém DTEND", ics.includes("DTEND;VALUE=DATE:20261005"));
test("ICS contém VERSION:2.0", ics.includes("VERSION:2.0"));
test("ICS termina com CRLF", ics.endsWith("\r\n"));

// Teste com lembrete
const icsWithReminder = buildEventsIcs([eventoTeste], "1d");
test("ICS com lembrete contém VALARM", icsWithReminder.includes("BEGIN:VALARM"));
test("ICS com lembrete contém TRIGGER", icsWithReminder.includes("TRIGGER:-P1D"));

// Teste com caracteres especiais no título
const eventoEspecial: EventoCalendario = {
  ...eventoTeste,
  id: "2026-10-05-1",
  titulo: "Evento com vírgula, ponto-e-vírgula; e backslash\\",
};
const icsEspecial = buildEventsIcs([eventoEspecial], "none");
test("Título com caracteres especiais é escapado", icsEspecial.includes("\\,"));
test("Título com ponto-e-vírgula escapado", icsEspecial.includes("\\;"));
test("Título com backslash escapado", icsEspecial.includes("\\\\"));

// Teste com múltiplos eventos
const eventosMultiplos: EventoCalendario[] = [
  { ...eventoTeste, id: "2026-10-01-1", data: "2026-10-01", titulo: "Evento 1" },
  { ...eventoTeste, id: "2026-10-02-1", data: "2026-10-02", titulo: "Evento 2" },
];
const icsMultiplo = buildEventsIcs(eventosMultiplos, "none");
const veventCount = (icsMultiplo.match(/BEGIN:VEVENT/g) || []).length;
test("ICS com 2 eventos contém 2 VEVENTs", veventCount === 2);

console.log(`\n=== RESULTADO: ${passed}/${passed + failed} testes passaram ===\n`);

if (failed === 0) {
  console.log("✅ Todos os testes de ICS passaram!\n");
} else {
  console.log(`❌ ${failed} teste(s) falharam.\n`);
  process.exit(1);
}