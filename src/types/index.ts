export type Perfil =
  | "eleitor"
  | "candidato"
  | "partido"
  | "advogado"
  | "atos-preparatorios";
// NOTA: 'servidor' nunca é usado — servidores veem todos os eventos sem filtro

export type CategoriaID =
  | "ELE"
  | "REG"
  | "PRO"
  | "FIN"
  | "ADM"
  | "FIS"
  | "CON"
  | "VOT"
  | "PES"
  | "DIP"
  | "PAR"
  | "GAR"
  | "TRA";

/** Âmbito de origem do evento. Ausente = âmbito nacional (TSE). */
export type Ambito = "TRE-PB";

/**
 * Ato administrativo que origina um evento de âmbito regional.
 * Distinto de Fundamentacao, que é reservada a normas.
 */
export interface DocumentoOrigem {
  titulo: string; // Ex: "Memorando-Circular nº 18/2026"
  unidade: string; // Ex: "TRE-PB/PTRE/DG/STIC"
  url: string;
  restrito?: boolean; // true → exibe aviso de acesso restrito
}

export interface Fundamentacao {
  norma: string; // Ex: "Lei nº 9.504/1997"
  dispositivo: string; // Ex: "art. 91, caput"
  url: string; // URL para legislação compilada — preenchido na Sprint 7C
}

export interface EventoCalendario {
  id: string; // Identificador único: "YYYY-MM-DD-N"
  data: string; // Data ISO: "YYYY-MM-DD"
  diaSemana: string; // Ex: "sábado"
  titulo: string; // Resumo curto (max 120 chars)
  descricao: string; // Texto literal extraído da Resolução
  categorias: CategoriaID[];
  perfis: Perfil[]; // [] = relevante para todos (visão geral)
  marcos: string | null; // Ex: "1 ano antes do 1º turno"
  turno: "1T" | "2T" | "AMBOS" | "POS" | null;
  fundamentacao: Fundamentacao[];
  observacoes?: string;
  destaque?: boolean;
  corPersonalizada?: string; // usado apenas em eventos customizados do usuário
  ambito?: Ambito; // ausente = evento nacional (TSE)
  documentoOrigem?: DocumentoOrigem; // ato administrativo de origem
}

export interface Categoria {
  id: CategoriaID;
  nome: string;
  cor: string; // Hex
  icone: string; // Nome do ícone Lucide
  descricao: string;
}
