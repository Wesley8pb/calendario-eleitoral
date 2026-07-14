export type CategoriaLinkReferencia =
  | "leis-codigos"
  | "resolucoes-normas"
  | "formularios-tte"
  | "manuais-orientacoes"
  | "portais-consultas";

export type IconeCategoriaLink =
  | "scale"
  | "landmark"
  | "file-text"
  | "book-open"
  | "globe";

export interface LinkReferencia {
  id: string;
  titulo: string;
  url: string;
  categoria: CategoriaLinkReferencia;
}
export interface CategoriaLinksReferencia {
  id: CategoriaLinkReferencia;
  titulo: string;
  icone: IconeCategoriaLink;
  ordem: number;
  cardLargo?: boolean;
}

export const categoriasLinksReferencia: readonly CategoriaLinksReferencia[] = [
  { id: "leis-codigos", titulo: "Leis e códigos eleitorais", icone: "scale", ordem: 1 },
  {
    id: "resolucoes-normas",
    titulo: "Resoluções e normas do TSE",
    icone: "landmark",
    ordem: 2,
  },
  {
    id: "formularios-tte",
    titulo: "Formulários de transferência temporária",
    icone: "file-text",
    ordem: 3,
  },
  {
    id: "manuais-orientacoes",
    titulo: "Manuais, vídeos e orientações",
    icone: "book-open",
    ordem: 4,
  },
  {
    id: "portais-consultas",
    titulo: "Portais e consultas oficiais",
    icone: "globe",
    ordem: 5,
    cardLargo: true,
  },
] as const;

export const linksReferencia: readonly LinkReferencia[] = [
  {
    id: "lei-9504-1997",
    titulo: "Lei nº 9.504/1997 — Lei das Eleições",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9504compilado.htm",
    categoria: "leis-codigos",
  },
  {
    id: "lei-4737-1965",
    titulo: "Lei nº 4.737/1965 — Código Eleitoral",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l4737compilado.htm",
    categoria: "leis-codigos",
  },
  {
    id: "lei-6091-1974",
    titulo: "Lei nº 6.091/1974 — Transporte e alimentação de eleitores",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l6091.htm",
    categoria: "leis-codigos",
  },
  {
    id: "lei-9096-1995",
    titulo: "Lei nº 9.096/1995 — Lei dos Partidos Políticos",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l9096compilado.htm",
    categoria: "leis-codigos",
  },
  {
    id: "lc-64-1990",
    titulo: "Lei Complementar nº 64/1990 — Lei de Inelegibilidades",
    url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp64compilado.htm",
    categoria: "leis-codigos",
  },
  {
    id: "res-tse-23760-2026",
    titulo: "Resolução TSE nº 23.760/2026 — Calendário Eleitoral 2026",
    url: "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/normas-e-documentacoes/arquivos-2026/resolucao-e-voto-calendario/@@display-file/file/Resolucao-e-voto-calendario.pdf",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23750-2026",
    titulo: "Resolução TSE nº 23.750/2026 — Cronograma do Cadastro Eleitoral",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23610-2019",
    titulo: "Resolução TSE nº 23.610/2019 — Propaganda eleitoral",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-610-de-18-de-dezembro-de-2019",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23607-2019",
    titulo: "Resolução TSE nº 23.607/2019 — Arrecadação, gastos e prestação de contas",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-607-de-17-de-dezembro-de-2019",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23673-2021",
    titulo: "Resolução TSE nº 23.673/2021 — Fiscalização e auditoria da votação",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-673-14-de-dezembro-de-2021",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23609-2019",
    titulo: "Resolução TSE nº 23.609/2019 — Escolha e registro de candidaturas",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-609-de-18-de-dezembro-de-2019",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23608-2019",
    titulo: "Resolução TSE nº 23.608/2019 — Representações e direito de resposta",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-608-de-18-de-dezembro-de-2019",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23735-2024",
    titulo: "Resolução TSE nº 23.735/2024 — Ilícitos eleitorais",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2024/resolucao-no-23-735-de-27-de-fevereiro-de-2024",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23600-2019",
    titulo: "Resolução TSE nº 23.600/2019 — Pesquisas eleitorais",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-600-de-12-de-dezembro-de-2019",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-23659-2021",
    titulo: "Resolução TSE nº 23.659/2021 — Gestão do Cadastro Eleitoral",
    url: "https://www.tse.jus.br/legislacao/compilada/res/2021/resolucao-no-23-659-de-26-de-outubro-de-2021",
    categoria: "resolucoes-normas",
  },
  {
    id: "res-tse-9641-1974",
    titulo: "Resolução TSE nº 9.641/1974 — Transporte e alimentação de eleitores",
    url: "https://www.tse.jus.br/legislacao/codigo-eleitoral/normas-editadas-pelo-tse",
    categoria: "resolucoes-normas",
  },
  {
    id: "prov-cge-2-2024",
    titulo: "Provimento CGE nº 2/2024 — Movimentação extraordinária entre seções",
    url: "https://www.tse.jus.br/legislacao/compilada/prv-cge/2024/provimento-cge-no-2-de-15-de-maio-de-2024",
    categoria: "resolucoes-normas",
  },
  {
    id: "form-tte-presos",
    titulo: "Formulário TTE — Presos provisórios",
    url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-presos-provisorios/@@display-file/file/TRE-PB-requerimento-tte-presos-provisorios.pdf",
    categoria: "formularios-tte",
  },
  {
    id: "form-tte-militares",
    titulo: "Formulário TTE — Militares em trânsito",
    url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-militares-em-transito/@@display-file/file/TRE-PB-requerimento-tte-militares-em-transito.pdf",
    categoria: "formularios-tte",
  },
  {
    id: "form-tte-justica-eleitoral",
    titulo: "Formulário TTE — Justiça Eleitoral e Ministério Público Eleitoral",
    url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-servidores-justica-eleitoral/@@display-file/file/TRE-PB-requerimento-tte-servidores-justica-eleitoral.pdf",
    categoria: "formularios-tte",
  },
  {
    id: "form-tte-unidades-penais",
    titulo: "Formulário TTE — Pessoal de unidades penais ou de internação",
    url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/tre-pb-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao/@@display-file/file/TRE-PB-requerimento-tte-pessoal-estabelecimento-penal-unidades-de-internacao.pdf",
    categoria: "formularios-tte",
  },
  {
    id: "manual-elo-de-para-5",
    titulo: "Manual ELO — De-para tipo 5",
    url: "https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-do-tipo-5",
    categoria: "manuais-orientacoes",
  },
  {
    id: "manual-elo-de-para-6",
    titulo: "Manual ELO — De-para tipo 6",
    url: "https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-do-tipo-6",
    categoria: "manuais-orientacoes",
  },
  {
    id: "manual-elo-de-para-7",
    titulo: "Manual ELO — De-para tipo 7",
    url: "https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-tipo-7",
    categoria: "manuais-orientacoes",
  },
  {
    id: "manual-convoca-mais",
    titulo: "Manual do Convoca+ — Convocações eleitorais",
    url: "https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/processo-eleitoral/convoca/resolveuid/5a1cf205db6e445eb268e70dbedaac0c",
    categoria: "manuais-orientacoes",
  },
  {
    id: "video-convoca-mais",
    titulo: "Vídeo instrucional do Convoca+",
    url: "https://www.youtube.com/watch?v=UZKJU5cktY8",
    categoria: "manuais-orientacoes",
  },
  {
    id: "manual-elo-tte",
    titulo: "Manual ELO — Transferência Temporária do Eleitor (TTE)",
    url: "https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/eleitor/atendimento/tte",
    categoria: "manuais-orientacoes",
  },
  {
    id: "extranet-tse-tte",
    titulo: "Extranet do TSE — Requerimentos e especificações de transferência temporária",
    url: "https://extranet.tse.jus.br/justica-eleitoral/tribunais-regionais-eleitorais?activeAccordion=b6d4def7-2ec5-42a8-8306-231c08c88e42",
    categoria: "portais-consultas",
  },
] as const;

export function getLinkReferencia(id: string): LinkReferencia {
  const link = linksReferencia.find((item) => item.id === id);

  if (!link) {
    throw new Error(`Link de referência não encontrado: ${id}`);
  }

  return link;
}
