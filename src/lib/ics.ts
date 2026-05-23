import type { EventoCalendario } from "../types";
import type { EventoCustom } from "../types/custom";
import type { CalendarReminder } from "../types/calendar";

const CRLF = "\r\n";
const PROD_ID = "-//Calendario Eleitoral 2026//PT-BR";
const PROJECT_SIGNATURE =
  "Gerado por Calendario Eleitoral 2026 - ferramenta informativa.";

const reminderTriggers: Record<Exclude<CalendarReminder, "none">, string> = {
  "1d": "-P1D",
  "3d": "-P3D",
  "7d": "-P7D",
};

function parseDateOnly(dateIso: string): Date {
  const [year, month, day] = dateIso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function formatUtcTimestamp(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

function getNextDayValue(dateIso: string): string {
  const date = parseDateOnly(dateIso);
  date.setDate(date.getDate() + 1);
  return formatDateValue(date);
}

function foldIcsLine(line: string): string {
  const chunkSize = 75;

  if (line.length <= chunkSize) {
    return line;
  }

  const chunks: string[] = [];

  for (let start = 0; start < line.length; start += chunkSize) {
    const chunk = line.slice(start, start + chunkSize);
    chunks.push(start === 0 ? chunk : ` ${chunk}`);
  }

  return chunks.join(CRLF);
}

export function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n/g, "\\n")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

export function buildValarm(reminder: CalendarReminder): string {
  if (reminder === "none") {
    return "";
  }

  return [
    "BEGIN:VALARM",
    `TRIGGER:${reminderTriggers[reminder]}`,
    "ACTION:DISPLAY",
    "DESCRIPTION:Lembrete do evento",
    "END:VALARM",
  ].join(CRLF);
}

export function buildEventDescription(evento: EventoCalendario): string {
  const sections = [evento.descricao.trim()];

  if (evento.observacoes?.trim()) {
    sections.push(`Observacoes:\n${evento.observacoes.trim()}`);
  }

  if (evento.fundamentacao.length > 0) {
    const fundamentacao = evento.fundamentacao
      .map((item) => `${item.norma} - ${item.dispositivo}`)
      .join("\n");

    sections.push(`Fundamentacao legal:\n${fundamentacao}`);
  }

  sections.push(PROJECT_SIGNATURE);

  return sections.join("\n\n");
}

export function buildEventIcs(
  evento: EventoCalendario,
  reminder: CalendarReminder,
): string {
  return buildEventsIcs([evento], reminder);
}

function buildVevent(
  evento: EventoCalendario,
  reminder: CalendarReminder,
  dtstamp: string,
): string[] {
  const valarm = buildValarm(reminder);

  return [
    "BEGIN:VEVENT",
    `UID:${evento.id}@calendario-eleitoral`,
    `DTSTAMP:${dtstamp}`,
    `SUMMARY:${escapeIcsText(evento.titulo)}`,
    `DTSTART;VALUE=DATE:${formatDateValue(parseDateOnly(evento.data))}`,
    `DTEND;VALUE=DATE:${getNextDayValue(evento.data)}`,
    `DESCRIPTION:${escapeIcsText(buildEventDescription(evento))}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    ...(valarm ? valarm.split(CRLF) : []),
    "END:VEVENT",
  ];
}

export function buildEventsIcs(
  eventos: EventoCalendario[],
  reminder: CalendarReminder,
): string {
  const dtstamp = formatUtcTimestamp(new Date());
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${PROD_ID}`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...eventos.flatMap((evento) => buildVevent(evento, reminder, dtstamp)),
    "END:VCALENDAR",
  ];

  return `${lines.map(foldIcsLine).join(CRLF)}${CRLF}`;
}

export function buildCustomEventIcs(
  evento: EventoCustom,
  reminder: CalendarReminder,
): string {
  return buildCustomEventsIcs([evento], reminder);
}

export function buildCustomEventsIcs(
  eventos: EventoCustom[],
  reminder: CalendarReminder,
): string {
  const dtstamp = formatUtcTimestamp(new Date());
  const valarm = buildValarm(reminder);

  const vevents = eventos.flatMap((evento) => {
    const descricao = evento.descricao?.trim()
      ? `${evento.descricao.trim()}\n\n${PROJECT_SIGNATURE}`
      : PROJECT_SIGNATURE;

    const lines = [
      "BEGIN:VEVENT",
      `UID:${evento.id}@calendario-eleitoral`,
      `DTSTAMP:${dtstamp}`,
      `SUMMARY:${escapeIcsText(evento.titulo)}`,
      `DTSTART;VALUE=DATE:${formatDateValue(parseDateOnly(evento.data))}`,
      `DTEND;VALUE=DATE:${getNextDayValue(evento.data)}`,
      `DESCRIPTION:${escapeIcsText(descricao)}`,
      "STATUS:CONFIRMED",
      "TRANSP:OPAQUE",
      ...(valarm ? valarm.split(CRLF) : []),
      "END:VEVENT",
    ];
    return lines;
  });

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:${PROD_ID}`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...vevents,
    "END:VCALENDAR",
  ];

  return `${lines.map(foldIcsLine).join(CRLF)}${CRLF}`;
}

export function downloadIcsFile(content: string, fileName: string): void {
  const blob = new Blob([content], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
