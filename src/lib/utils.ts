import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { EventoCalendario } from "../types";
import type { EventoCustom } from "../types/custom";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Formatação de datas ────────────────────────────────────────────────────

const DIAS_SEMANA = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MESES_ABREV = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

// Cria Date a partir de "YYYY-MM-DD" sem ajuste de fuso horário
function parseDataISO(dataISO: string): Date {
  const [year, month, day] = dataISO.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatDate(dataISO: string): string {
  const d = parseDataISO(dataISO);
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

export function getDiaSemana(dataISO: string): string {
  return DIAS_SEMANA[parseDataISO(dataISO).getDay()];
}

export function getNomeMes(dataISO: string): string {
  return MESES[parseDataISO(dataISO).getMonth()];
}

export function getNomeMesAbrev(dataISO: string): string {
  return MESES_ABREV[parseDataISO(dataISO).getMonth()];
}

export function getAno(dataISO: string): number {
  return parseDataISO(dataISO).getFullYear();
}

export function getMesAnoChave(dataISO: string): string {
  const d = parseDataISO(dataISO);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export function getMesAnoLabel(dataISO: string): string {
  const d = parseDataISO(dataISO);
  return `${MESES[d.getMonth()]} / ${d.getFullYear()}`;
}

export function getMesAnoLabelAbrev(dataISO: string): string {
  const d = parseDataISO(dataISO);
  return `${MESES_ABREV[d.getMonth()]}/${d.getFullYear()}`;
}

// ─── Status temporal ────────────────────────────────────────────────────────

function getHoje(): Date {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return hoje;
}

export function isEventoPassado(dataISO: string): boolean {
  return parseDataISO(dataISO) < getHoje();
}

export function isEventoHoje(dataISO: string): boolean {
  const d = parseDataISO(dataISO);
  const hoje = getHoje();
  return d.getTime() === hoje.getTime();
}

export function isEventoProximo(dataISO: string, diasLimite = 7): boolean {
  const d = parseDataISO(dataISO);
  const hoje = getHoje();
  const limite = new Date(hoje);
  limite.setDate(hoje.getDate() + diasLimite);
  return d >= hoje && d <= limite;
}

export type UrgenciaPrazo = "hoje" | "semana" | "dias" | "futuro" | "passado";

export function getUrgenciaPrazo(dataISO: string): UrgenciaPrazo {
  if (isEventoPassado(dataISO)) return "passado";
  if (isEventoHoje(dataISO)) return "hoje";
  if (isEventoProximo(dataISO, 7)) return "semana";
  const d = parseDataISO(dataISO);
  const hoje = getHoje();
  const diff = Math.ceil(
    (d.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (diff <= 30) return "dias";
  return "futuro";
}

export function getDiasAte(dataISO: string): number {
  const d = parseDataISO(dataISO);
  const hoje = getHoje();
  return Math.ceil((d.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
}

// ─── Conversão de EventoCustom → EventoCalendario ──────────────────────────

export function toEventoCalendario(e: EventoCustom): EventoCalendario {
  return {
    id: e.id,
    data: e.data,
    diaSemana: getDiaSemana(e.data),
    titulo: e.titulo,
    descricao: e.descricao ?? "",
    categorias: [],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
    observacoes: undefined,
    destaque: false,
    corPersonalizada: e.cor,
  };
}

// ─── Agrupamento de eventos ─────────────────────────────────────────────────

export interface GrupoMes {
  chave: string; // "YYYY-MM"
  label: string; // "Outubro / 2026"
  labelAbrev: string; // "Out/2026"
  ano: number;
  mes: number; // 1-12
  eventos: EventoCalendario[];
}

export interface GrupoData {
  data: string; // "YYYY-MM-DD"
  diaSemana: string;
  marcos: string[];
  eventos: EventoCalendario[];
}

export function agruparPorMes(eventos: EventoCalendario[]): GrupoMes[] {
  const map = new Map<string, GrupoMes>();

  for (const evento of eventos) {
    const chave = getMesAnoChave(evento.data);
    if (!map.has(chave)) {
      const d = parseDataISO(evento.data);
      map.set(chave, {
        chave,
        label: getMesAnoLabel(evento.data),
        labelAbrev: getMesAnoLabelAbrev(evento.data),
        ano: d.getFullYear(),
        mes: d.getMonth() + 1,
        eventos: [],
      });
    }
    map.get(chave)!.eventos.push(evento);
  }

  return Array.from(map.values()).sort((a, b) =>
    a.chave.localeCompare(b.chave),
  );
}

export function agruparPorData(eventos: EventoCalendario[]): GrupoData[] {
  const map = new Map<string, GrupoData>();

  for (const evento of eventos) {
    if (!map.has(evento.data)) {
      const marcosSet = new Set<string>();
      if (evento.marcos) marcosSet.add(evento.marcos);

      map.set(evento.data, {
        data: evento.data,
        diaSemana: evento.diaSemana,
        marcos: evento.marcos ? [evento.marcos] : [],
        eventos: [],
      });
    }

    const grupo = map.get(evento.data)!;
    grupo.eventos.push(evento);

    if (evento.marcos && !grupo.marcos.includes(evento.marcos)) {
      grupo.marcos.push(evento.marcos);
    }
  }

  return Array.from(map.values()).sort((a, b) => a.data.localeCompare(b.data));
}
