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

/** Polo de preparação de urnas do TRE-PB (Núcleos de apoio às Zonas Eleitorais). */
export type NviID = "NVIJPA" | "NVICGE" | "NVIPAT" | "NVIPBL" | "NVICJZ";

/** Uma zona eleitoral escalada para preparar urnas em determinada data e polo. */
export interface ZonaPreparacao {
  ze: string; // Ex: "01ª"
  sede: string; // Município-sede da zona. Ex: "João Pessoa"
  horario: string; // Ex: "08h–18h"
}

/** Zonas que preparam urnas em um mesmo polo, na data do evento. */
export interface PoloPreparacao {
  nvi: NviID;
  zonas: ZonaPreparacao[]; // ordenadas por número de zona
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
  /**
   * Escala de preparação de urnas por polo. Presente apenas nos eventos do
   * cronograma do TRE-PB; renderizada como bloco estruturado, não como texto.
   */
  preparacaoUrnas?: PoloPreparacao[];
}

export interface Categoria {
  id: CategoriaID;
  nome: string;
  cor: string; // Hex
  icone: string; // Nome do ícone Lucide
  descricao: string;
}
