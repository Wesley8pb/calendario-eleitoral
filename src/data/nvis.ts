import type { NviID } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Polos de preparação de urnas do TRE-PB.
//
// Fonte única da cidade e da cor de cada polo: nenhum componente repete o
// hexadecimal, à semelhança de ambitos.ts. O código (ex.: "NVIJPA") é o que
// aparece no cronograma oficial; a cidade é a sede do polo, deduzida do próprio
// sufixo do código e confirmada pelas zonas atendidas.
//
// O cronograma do TRE-PB não expande a sigla "NVI" — por isso ela não é
// desdobrada em lugar nenhum da interface.
// ─────────────────────────────────────────────────────────────────────────────

export interface NviInfo {
  id: NviID;
  cidade: string;
  cor: string; // Hex — contraste AA sobre branco
}

export const nviMap: Record<NviID, NviInfo> = {
  NVIJPA: { id: "NVIJPA", cidade: "João Pessoa", cor: "#1D4ED8" },
  NVICGE: { id: "NVICGE", cidade: "Campina Grande", cor: "#B45309" },
  NVIPAT: { id: "NVIPAT", cidade: "Patos", cor: "#9D174D" },
  NVIPBL: { id: "NVIPBL", cidade: "Pombal", cor: "#15803D" },
  NVICJZ: { id: "NVICJZ", cidade: "Cajazeiras", cor: "#155E75" },
};

/** Ordem canônica de exibição dos polos — a mesma em todos os cards. */
export const ORDEM_NVIS: NviID[] = [
  "NVIJPA",
  "NVICGE",
  "NVIPAT",
  "NVIPBL",
  "NVICJZ",
];
