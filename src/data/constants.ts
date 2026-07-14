import { getLinkReferencia } from "./linksReferencia";

// Datas fixas das Eleições 2026 — Resolução TSE nº 23.760/2026
// Abertura da votação às 08:00 (horário de Brasília, UTC-3)
export const PRIMEIRO_TURNO = new Date("2026-10-04T08:00:00-03:00");
export const SEGUNDO_TURNO = new Date("2026-10-25T08:00:00-03:00");
export const DIPLOMACAO = new Date("2026-12-18T00:00:00");

// Referência normativa
export const RESOLUCAO_TSE = {
  numero: "nº 23.760/2026",
  titulo: "Resolução TSE nº 23.760/2026",
  url: getLinkReferencia("res-tse-23760-2026").url,
  dje: "04/03/2026",
};
