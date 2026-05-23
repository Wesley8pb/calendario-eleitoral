export interface EventoCustom {
  id: string;        // "custom-{timestamp}"
  data: string;      // "YYYY-MM-DD"
  titulo: string;    // max 120 chars
  descricao?: string;
  cor: string;       // hex color da paleta abaixo
  criadoEm: string;  // ISO timestamp
}

export const MEUS_EVENTOS_CORES: readonly string[] = [
  "#0D9488", // teal
  "#E11D48", // rose
  "#7C3AED", // violet
  "#059669", // emerald
  "#EA580C", // orange
  "#2563EB", // blue
  "#D97706", // amber
  "#DB2777", // pink
];

export const MAX_MEUS_EVENTOS = 20;
