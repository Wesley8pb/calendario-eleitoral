import type { NviID } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Polos de preparação de urnas do TRE-PB.
//
// Fonte única da cidade, do endereço e da cor de cada polo: nenhum componente
// repete o hexadecimal, à semelhança de ambitos.ts. Os endereços vêm dos anexos
// II a VI do Edital nº 14/2026 TRE-PB/PTRE/ASPRE e existem porque o art. 100,
// § 2º, IV, da Resolução nº 23.751/2026/TSE exige que o calendário divulgado
// pelo Tribunal informe o local dos trabalhos. O código (ex.: "NVIJPA") é o que
// aparece no cronograma oficial; a cidade é a sede do polo, deduzida do próprio
// sufixo do código e confirmada pelas zonas atendidas.
//
// O cronograma do TRE-PB não expande a sigla "NVI"; a expansão abaixo foi
// confirmada pelo Tribunal e é exibida uma vez por card, como legenda, em
// vez de repetida em cada polo.
// ─────────────────────────────────────────────────────────────────────────────

/** Expansão da sigla que nomeia os polos, exibida como legenda do bloco. */
export const NVI_EXPANSAO = "Núcleo de Voto Informatizado";

export interface NviInfo {
  id: NviID;
  cidade: string;
  endereco: string; // Local da cerimônia — exigido pelo art. 100, § 2º, IV
  cor: string; // Hex — contraste AA sobre branco
}

export const nviMap: Record<NviID, NviInfo> = {
  NVIJPA: {
    id: "NVIJPA",
    cidade: "João Pessoa",
    endereco: "Av. Hilton Souto Maior, s/nº, José Américo, João Pessoa – PB",
    cor: "#1D4ED8",
  },
  NVICGE: {
    id: "NVICGE",
    cidade: "Campina Grande",
    endereco: "Rua Rio Grande do Sul, s/nº, Liberdade, Campina Grande – PB",
    cor: "#B45309",
  },
  NVIPAT: {
    id: "NVIPAT",
    cidade: "Patos",
    endereco: "Rua Janúncio Nóbrega, s/nº, Liberdade, Patos – PB",
    cor: "#9D174D",
  },
  NVIPBL: {
    id: "NVIPBL",
    cidade: "Pombal",
    endereco:
      "Rua Profª. Maria Claudete Bandeira de Sousa, s/nº, Petrópolis, Pombal – PB",
    cor: "#15803D",
  },
  NVICJZ: {
    id: "NVICJZ",
    cidade: "Cajazeiras",
    endereco: "Av. Comandante Vital Rolim, 820, Centro, Cajazeiras – PB",
    cor: "#155E75",
  },
};

/** Ordem canônica de exibição dos polos — a mesma em todos os cards. */
export const ORDEM_NVIS: NviID[] = [
  "NVIJPA",
  "NVICGE",
  "NVIPAT",
  "NVIPBL",
  "NVICJZ",
];
