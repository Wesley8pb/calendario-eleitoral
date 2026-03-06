import type { Categoria } from "../types";

export const categorias: Categoria[] = [
  {
    id: "ELE",
    nome: "Eleitor",
    cor: "#003E7E",
    icone: "User",
    descricao:
      "Prazos que afetam diretamente o eleitor (alistamento, biometria, justificativa, título, voto em trânsito)",
  },
  {
    id: "REG",
    nome: "Registro de Candidatura",
    cor: "#1B6B4A",
    icone: "FileCheck",
    descricao:
      "Convenções, pedidos de registro, substituição, julgamento de registros",
  },
  {
    id: "PRO",
    nome: "Propaganda Eleitoral",
    cor: "#C75C00",
    icone: "Megaphone",
    descricao:
      "Propaganda em rádio/TV, internet, imprensa, comícios, alto-falantes, debates, impulsionamento",
  },
  {
    id: "FIN",
    nome: "Financiamento e Contas",
    cor: "#8B6914",
    icone: "Landmark",
    descricao:
      "FEFC, fundo partidário, arrecadação, prestação de contas parcial e final, doações",
  },
  {
    id: "ADM",
    nome: "Administração Eleitoral",
    cor: "#3D5A80",
    icone: "Building2",
    descricao:
      "Preparação de urnas, mesários, juntas, logística, cessão de servidores, transporte",
  },
  {
    id: "FIS",
    nome: "Fiscalização e Auditoria",
    cor: "#2E4057",
    icone: "ShieldCheck",
    descricao:
      "TPS, lacração, teste de integridade, Comissão de Auditoria, entidades fiscalizadoras",
  },
  {
    id: "CON",
    nome: "Condutas Vedadas",
    cor: "#B91C1C",
    icone: "Ban",
    descricao:
      "Proibições à administração pública, publicidade institucional, distribuição de bens",
  },
  {
    id: "VOT",
    nome: "Votação e Apuração",
    cor: "#1E3A5F",
    icone: "Vote",
    descricao:
      "Dia da eleição (1º e 2º turno), procedimentos de votação, totalização, boletins de urna",
  },
  {
    id: "PES",
    nome: "Pesquisas Eleitorais",
    cor: "#0E7490",
    icone: "BarChart3",
    descricao: "Registro de pesquisas, divulgação, enquetes",
  },
  {
    id: "DIP",
    nome: "Pós-Eleição e Diplomação",
    cor: "#14532D",
    icone: "Award",
    descricao:
      "Diplomação, encerramento de contas bancárias, cancelamento de CNPJ, prazos finais",
  },
  {
    id: "PAR",
    nome: "Atos Partidários",
    cor: "#5B21B6",
    icone: "Flag",
    descricao:
      "Convenções, estatutos, normas internas, indicação de fiscais, distribuição de recursos — atos de responsabilidade exclusiva dos partidos políticos",
  },
];

export const categoriaMap = Object.fromEntries(
  categorias.map((c) => [c.id, c]),
) as Record<string, Categoria>;
