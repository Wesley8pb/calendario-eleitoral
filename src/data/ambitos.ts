import type { Ambito } from "../types";

export interface AmbitoInfo {
  id: Ambito;
  nome: string; // rótulo curto exibido no badge
  rotulo: string; // nome por extenso, usado em title/tooltip
  cor: string; // Hex — fonte única da verdade
  icone: string; // Nome do ícone Lucide
  descricao: string;
}

export const AMBITO_TRE_PB: AmbitoInfo = {
  id: "TRE-PB",
  nome: "TRE-PB",
  rotulo: "Tribunal Regional Eleitoral da Paraíba",
  cor: "#0F766E",
  icone: "Building2",
  descricao:
    "Prazos e atos de âmbito regional, fixados pelo Tribunal Regional Eleitoral da Paraíba e aplicáveis às Zonas Eleitorais do estado.",
};

export const ambitoMap: Record<Ambito, AmbitoInfo> = {
  "TRE-PB": AMBITO_TRE_PB,
};
