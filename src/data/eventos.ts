import type { EventoCalendario } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Fonte: Resolução TSE nº 23.760/2026 (Instrução nº 0600273-13.2026.6.00.0000)
// Publicada no DJE/TSE em 04/03/2026
// URLs de legislação (fundamentacao[].url) serão preenchidas na Sprint 7C
// ─────────────────────────────────────────────────────────────────────────────

export const eventos: EventoCalendario[] = [
  // ══════════════════════════════════════════════════════════════════
  // OUTUBRO DE 2025
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2025-10-04-1",
    data: "2025-10-04",
    diaSemana: "sábado",
    titulo:
      "Acesso antecipado das entidades fiscalizadoras aos sistemas eleitorais do TSE",
    descricao:
      "Data a partir da qual, e até a compilação dos sistemas, é garantido às entidades fiscalizadoras o acesso antecipado aos sistemas eleitorais desenvolvidos pelo Tribunal Superior Eleitoral, bem como o acompanhamento dos trabalhos para sua especificação e desenvolvimento, para fins de fiscalização e auditoria, em ambiente específico e sob a supervisão do Tribunal Superior Eleitoral (Lei nº 9.504/1997, art. 66, § 1º; e Resolução nº 23.673/2021/TSE, art. 9º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 ano antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 66, § 1º", url: "" },
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 9º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // DEZEMBRO DE 2025
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2025-12-01-1",
    data: "2025-12-01",
    diaSemana: "segunda-feira",
    titulo:
      "Início do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS)",
    descricao:
      "Início do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS), realizado no Tribunal Superior Eleitoral (Resolução nº 23.444/2015/TSE, art. 1º, § 1º; e Edital de Chamamento Público nº 10/2025).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.444/2015/TSE",
        dispositivo: "art. 1º, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2025-12-05-1",
    data: "2025-12-05",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS)",
    descricao:
      "Último dia do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS), realizado no Tribunal Superior Eleitoral (Resolução nº 23.444/2015/TSE, art. 1º, § 1º; e Edital de Chamamento Público nº 10/2025).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.444/2015/TSE",
        dispositivo: "art. 1º, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2025-12-05-2",
    data: "2025-12-05",
    diaSemana: "sexta-feira",
    titulo:
      "Evento de encerramento do TPS 2025 com demonstração de resultados e entrega de certificados",
    descricao:
      "Evento de encerramento do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS), com a demonstração dos resultados alcançados e a entrega dos certificados de participação (Resolução nº 23.444/2015/TSE, art. 20, § 1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.444/2015/TSE",
        dispositivo: "art. 20, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2025-12-18-1",
    data: "2025-12-18",
    diaSemana: "quinta-feira",
    titulo: "Publicação dos Relatórios Parciais das Comissões do TPS 2025",
    descricao:
      "Publicação dos Relatórios Parciais da Comissão Avaliadora e da Comissão Reguladora do Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS) na página do Tribunal Superior Eleitoral (Edital de Chamamento Público nº 10/2025).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2025-12-19-1",
    data: "2025-12-19",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para Tribunais Eleitorais designarem juízes auxiliares para representações e direito de resposta",
    descricao:
      "Último dia para os Tribunais Eleitorais designarem 3 (três) Juízas ou Juízes auxiliares dentre suas integrantes ou seus integrantes substitutos, para a apreciação das representações, reclamações e pedidos de direito de resposta (Lei nº 9.504/1997, art. 96, § 3º; e Resolução nº 23.608/2019/TSE, art. 2º, II).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 96, § 3º", url: "" },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 2º, II",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // JANEIRO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-01-01-1",
    data: "2026-01-01",
    diaSemana: "quinta-feira",
    titulo:
      "Início da obrigatoriedade de registro de pesquisas eleitorais no sistema PesqEle",
    descricao:
      "Data a partir da qual as entidades ou empresas que realizarem pesquisas de opinião pública relativas às eleições ou às possíveis candidatas ou candidatos, para conhecimento público, ficam obrigadas a registrar, no Sistema de Registro de Pesquisas Eleitorais (PesqEle), até 5 (cinco) dias antes da divulgação, para cada pesquisa, as informações previstas em lei e na Resolução nº 23.600/2019/TSE, que dispõe sobre pesquisas eleitorais (Lei nº 9.504/1997, art. 33, caput e § 1º; e Resolução nº 23.600/2019/TSE, art. 2º).",
    categorias: ["PES"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 33, caput e § 1º",
        url: "",
      },
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-01-01-2",
    data: "2026-01-01",
    diaSemana: "quinta-feira",
    titulo:
      "Início da proibição de distribuição gratuita de bens pela Administração Pública (até 31/12/2026)",
    descricao:
      "Data a partir da qual, até 31 (trinta e um) de dezembro de 2026, fica proibido distribuir gratuitamente bens, valores ou benefícios por parte da Administração Pública, exceto nos casos de calamidade pública, estado de emergência ou de programas sociais autorizados em lei e já em execução orçamentária no exercício anterior, casos em que o Ministério Público poderá promover o acompanhamento de sua execução financeira e administrativa (Lei nº 9.504/1997, art. 73, § 10; e Resolução nº 23.735/2024/TSE, art. 15, IX).",
    categorias: ["CON"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, § 10", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, IX",
        url: "",
      },
    ],
  },

  {
    id: "2026-01-01-3",
    data: "2026-01-01",
    diaSemana: "quinta-feira",
    titulo:
      "Proibição de execução de programas sociais vinculados a candidatos (até 31/12/2026)",
    descricao:
      "Data a partir da qual, até 31 (trinta e um) de dezembro de 2026, não poderão ser executados programas sociais por entidade nominalmente vinculada a candidata ou candidato ou por esta ou este mantida, ainda que autorizados em lei e já em execução orçamentária no exercício anterior (Lei nº 9.504/1997, art. 73, § 11; e Resolução nº 23.735/2024/TSE, art. 15, § 1º).",
    categorias: ["CON"],
    perfis: ["candidato"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, § 11", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-01-01-4",
    data: "2026-01-01",
    diaSemana: "quinta-feira",
    titulo:
      "Início da limitação de gastos com publicidade de órgãos públicos (até 30/06/2026)",
    descricao:
      "Data a partir da qual, até 30 (trinta) de junho de 2026, é proibido empenhar despesas com publicidade dos órgãos públicos federais, estaduais ou municipais ou das respectivas entidades da Administração indireta que excedam a 6 (seis) vezes a média mensal dos valores empenhados e não cancelados nos 3 (três) últimos anos que antecedem o pleito (Lei nº 9.504/1997, art. 73, VII; e Resolução nº 23.735/2024/TSE, art. 15, VII).",
    categorias: ["CON"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, VII", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, VII",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MARÇO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-03-05-1",
    data: "2026-03-05",
    diaSemana: "quinta-feira",
    titulo:
      "Início da janela de migração partidária para detentores de mandato",
    descricao:
      "Data a partir da qual se inicia a janela de migração partidária, dentro da qual, até 3 (três) de abril de 2026, considera-se justa causa a mudança de partido pelas detentoras ou detentores de mandato de Deputado Federal, Deputado Estadual ou Deputado Distrital para concorrer às eleições majoritária ou proporcional (Lei nº 9.096/1995, art. 22-A, III).",
    categorias: ["REG"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.096/1995", dispositivo: "art. 22-A, III", url: "" },
    ],
  },

  {
    id: "2026-03-05-2",
    data: "2026-03-05",
    diaSemana: "quinta-feira",
    titulo:
      "Data-limite para o TSE publicar instruções relativas às Eleições Gerais de 2026",
    descricao:
      "Data-limite para o Tribunal Superior Eleitoral publicar as instruções relativas às Eleições Gerais de 2026 (Lei nº 9.504/1997, art. 105, caput e § 3º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 105, caput e § 3º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // ABRIL DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-04-01-1",
    data: "2026-04-01",
    diaSemana: "quarta-feira",
    titulo:
      "Início da propaganda institucional do TSE sobre participação na política (até 30/07/2026)",
    descricao:
      "Data a partir da qual, até 30 (trinta) de julho de 2026, o Tribunal Superior Eleitoral promoverá, em até 5 (cinco) minutos diários, contínuos ou não, requisitados às emissoras de rádio e de televisão, propaganda institucional destinada a incentivar a participação feminina, das(dos) jovens e da população negra e indígena na política e a esclarecer cidadãs e cidadãos sobre as regras e o funcionamento do sistema eleitoral brasileiro (Lei nº 9.504/1997, art. 93-A; e Resolução nº 23.610/2019/TSE, art. 116).",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93-A", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 116",
        url: "",
      },
    ],
  },

  {
    id: "2026-04-03-1",
    data: "2026-04-03",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia da janela de migração partidária (justa causa para mudança de partido)",
    descricao:
      "Último dia da janela de migração partidária em que se considera justa causa a mudança de partido pelas detentoras ou detentores de mandato de Deputado Federal, Deputado Estadual ou Deputado Distrital para concorrer às eleições majoritária ou proporcional (Lei nº 9.096/1995, art. 22-A, III).",
    categorias: ["REG"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.096/1995", dispositivo: "art. 22-A, III", url: "" },
    ],
  },

  {
    id: "2026-04-04-1",
    data: "2026-04-04",
    diaSemana: "sábado",
    titulo:
      "Data-limite para registro de estatutos de partidos políticos e federações no TSE",
    descricao:
      "Data-limite para o registro, no Tribunal Superior Eleitoral, dos estatutos de partidos políticos e de federações que poderão participar das Eleições 2026 (Lei nº 9.504/1997, arts. 4º e 6º-A, parágrafo único; Lei nº 9.096/1995, art. 11-A; e Resolução nº 23.609/2019/TSE, art. 2º, I e II, primeira parte).",
    categorias: ["REG", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "6 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "arts. 4º e 6º-A, parágrafo único",
        url: "",
      },
      { norma: "Lei nº 9.096/1995", dispositivo: "art. 11-A", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 2º, I e II, primeira parte",
        url: "",
      },
    ],
  },

  {
    id: "2026-04-04-2",
    data: "2026-04-04",
    diaSemana: "sábado",
    titulo:
      "Prazo final para filiação partidária e domicílio eleitoral dos candidatos nas Eleições 2026",
    descricao:
      "Data até a qual pretensas candidatas e pretensos candidatos a cargo eletivo nas Eleições 2026 devem ter domicílio eleitoral na circunscrição em que desejam concorrer e estar com a filiação deferida pelo partido, desde que o estatuto partidário não estabeleça prazo superior (Lei nº 9.504/1997, art. 9º, caput; Lei nº 9.096/1995, art. 20, caput; e Resolução nº 23.609/2019/TSE, art. 10).",
    categorias: ["REG"],
    perfis: ["candidato", "advogado"],
    marcos: "6 meses antes do 1º turno",
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 9º, caput", url: "" },
      { norma: "Lei nº 9.096/1995", dispositivo: "art. 20, caput", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 10",
        url: "",
      },
    ],
    observacoes:
      "Para disputar qualquer cargo nas Eleições 2026, o candidato precisa estar filiado ao partido e ter domicílio eleitoral (morar ou ter vínculos) até esta data.",
  },

  {
    id: "2026-04-04-3",
    data: "2026-04-04",
    diaSemana: "sábado",
    titulo:
      "Prazo final para desincompatibilização de Presidente, Governadores e Prefeitos que disputarão outros cargos",
    descricao:
      "Data até a qual a Presidente ou o Presidente da República, as Governadoras, os Governadores, as Prefeitas e os Prefeitos que pretendam concorrer a outros cargos devem renunciar aos mandatos em exercício (Constituição Federal, art. 14, § 6º; e Resolução nº 23.609/2019/TSE, art. 13).",
    categorias: ["REG"],
    perfis: ["candidato"],
    marcos: "6 meses antes do 1º turno",
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Constituição Federal", dispositivo: "art. 14, § 6º", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 13",
        url: "",
      },
    ],
    observacoes:
      "Presidente, Governadores e Prefeitos que queiram disputar um cargo diferente do que exercem precisam renunciar ao mandato atual até esta data.",
  },

  {
    id: "2026-04-06-1",
    data: "2026-04-06",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para eleitores sem biometria solicitarem alistamento, transferência ou revisão pelo autoatendimento",
    descricao:
      "Último dia para que eleitoras e eleitores domiciliados no Brasil, que não possuam cadastro biométrico válido na Justiça Eleitoral, solicitem as operações de alistamento, transferência e revisão por meio do serviço de autoatendimento eleitoral na internet.",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: null,
    turno: null,
    fundamentacao: [],
    observacoes:
      "Eleitores que não fizeram a biometria e precisam regularizar o título (alistar-se, transferir domicílio ou revisar cadastro) têm até esta data para usar o autoatendimento online da Justiça Eleitoral.",
  },

  {
    id: "2026-04-07-1",
    data: "2026-04-07",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para partidos/federações publicarem normas de escolha e substituição de candidatos no DOU",
    descricao:
      "Último dia para o órgão de direção nacional do partido político ou da federação que pretenda participar das Eleições 2026, publicar, no Diário Oficial da União, na hipótese de omissão do estatuto, as normas para escolha e substituição de candidatas e candidatos e para a formação de coligações (Lei nº 9.504/1997, art. 7º, § 1º; e Resolução nº 23.609/2019/TSE, art. 3º, § 3º).",
    categorias: ["REG", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "180 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 7º, § 1º", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 3º, § 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-04-07-2",
    data: "2026-04-07",
    diaSemana: "terça-feira",
    titulo:
      "Início da vedação à revisão geral de remuneração de servidores públicos que exceda recomposição de perdas",
    descricao:
      "Data a partir da qual, até a posse das eleitas e dos eleitos, é vedado às agentes e aos agentes públicos fazer, na circunscrição do pleito, revisão geral da remuneração das servidoras públicas e dos servidores públicos que exceda a recomposição da perda de seu poder aquisitivo ao longo do ano da eleição (Lei nº 9.504/1997, art. 73, VIII; e Resolução nº 23.735/2024/TSE, art. 15, VIII).",
    categorias: ["CON"],
    perfis: [],
    marcos: "180 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, VIII", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, VIII",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MAIO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-05-06-1",
    data: "2026-05-06",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para alistamento, transferência e revisão eleitoral em todas as unidades (biometria)",
    descricao:
      "Último dia para o recebimento de solicitações de operações de alistamento, transferência e revisão eleitoral em todas as unidades da Justiça Eleitoral e no serviço de autoatendimento na internet para aqueles que possuam cadastro biométrico (Lei nº 9.504/1997, art. 91, caput).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: "151 dias antes do 1º turno",
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 91, caput", url: "" },
    ],
    observacoes:
      "Este é o prazo final para regularização do título eleitoral (alistamento, transferência de domicílio ou revisão de dados) para quem já possui biometria cadastrada. Após esta data, não é mais possível votar nas Eleições 2026 quem não estiver regularizado.",
  },

  {
    id: "2026-05-06-2",
    data: "2026-05-06",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para alistamento ou regularização de presos provisórios e adolescentes internados",
    descricao:
      "Último dia para que as presas e os presos provisórios e as adolescentes e os adolescentes internados sem inscrição eleitoral regular na unidade da Federação onde estejam sejam alistadas e alistados ou requeiram a regularização de sua situação para votar nas Eleições 2026, mediante revisão ou transferência do título eleitoral (Lei nº 9.504/1997, art. 91, caput; e Resolução nº 23.659/2021/TSE, art. 12, parágrafo único).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: "151 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 91, caput", url: "" },
      {
        norma: "Resolução nº 23.659/2021/TSE",
        dispositivo: "art. 12, parágrafo único",
        url: "",
      },
    ],
  },

  {
    id: "2026-05-07-1",
    data: "2026-05-07",
    diaSemana: "quinta-feira",
    titulo:
      "Início da suspensão do alistamento, transferência e revisão eleitoral (até 02/11/2026)",
    descricao:
      "Data a partir da qual, até 2 (dois) de novembro de 2026, fica suspenso o recebimento de solicitações de operações de alistamento, transferência e revisão eleitoral em todas as unidades da Justiça Eleitoral e no serviço de autoatendimento na internet (Lei nº 9.504/1997, art. 91).",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "150 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 91", url: "" },
    ],
    observacoes:
      'A partir desta data e até 2 de novembro de 2026, não é possível fazer alistamento, transferência ou revisão eleitoral. O eleitorado fica "fechado" para as Eleições 2026.',
  },

  {
    id: "2026-05-07-2",
    data: "2026-05-07",
    diaSemana: "quinta-feira",
    titulo: "Liberação das certidões circunstanciadas no Sistema ELO",
    descricao: "Liberação das certidões circunstanciadas no Sistema ELO.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-05-13-1",
    data: "2026-05-13",
    diaSemana: "quarta-feira",
    titulo:
      "Início do Teste de Confirmação das correções do TPS 2025 (até 15/05/2026)",
    descricao:
      "Data a partir da qual, até 15 (quinze) de maio de 2026, será realizado o Teste de Confirmação das correções decorrentes dos resultados obtidos no Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS), ocorrido no período de 1º (primeiro) a 5 (cinco) de dezembro de 2025, no Tribunal Superior Eleitoral.",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-05-15-1",
    data: "2026-05-15",
    diaSemana: "sexta-feira",
    titulo: "Último dia do Teste de Confirmação das correções do TPS 2025",
    descricao:
      "Último dia do Teste de Confirmação das correções decorrentes dos resultados obtidos no Teste Público de Segurança dos Sistemas Eleitorais 2025 (TPS), ocorrido no período de 1º (primeiro) a 5 (cinco) de dezembro de 2025, no Tribunal Superior Eleitoral.",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-05-15-2",
    data: "2026-05-15",
    diaSemana: "sexta-feira",
    titulo:
      "Início da arrecadação prévia por financiamento coletivo para pré-candidatos",
    descricao:
      "Data a partir da qual é facultada às pré-candidatas e aos pré-candidatos a arrecadação prévia de recursos na modalidade de financiamento coletivo, ficando a liberação dos recursos por entidades arrecadadoras condicionada ao cumprimento, pela candidata ou pelo candidato, do registro da candidatura, da obtenção de CNPJ e da abertura de conta bancária (Lei nº 9.504/1997, art. 22-A, § 3º; e Resolução nº 23.607/2019/TSE, art. 22, § 4º).",
    categorias: ["FIN"],
    perfis: ["candidato"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 22-A, § 3º", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 22, § 4º",
        url: "",
      },
    ],
    observacoes:
      "Pré-candidatos podem começar a arrecadar doações por financiamento coletivo (vaquinha online) a partir desta data. Os recursos só serão liberados após o registro formal da candidatura.",
  },

  {
    id: "2026-05-15-3",
    data: "2026-05-15",
    diaSemana: "sexta-feira",
    titulo:
      "Início da campanha de arrecadação prévia por financiamento coletivo na internet",
    descricao:
      "Data a partir da qual é permitida a campanha de arrecadação prévia de recursos na modalidade de financiamento coletivo, observadas a vedação ao pedido de voto e as regras relativas à propaganda eleitoral na internet (Lei nº 9.504/1997, art. 22-A, § 3º; e Resolução nº 23.610/2019/TSE, art. 3º, § 4º).",
    categorias: ["FIN", "PRO"],
    perfis: ["candidato", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 22-A, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 3º, § 4º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // JUNHO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-06-01-1",
    data: "2026-06-01",
    diaSemana: "segunda-feira",
    titulo: "Data-limite para a União disponibilizar o FEFC ao TSE",
    descricao:
      "Data-limite para que a União disponibilize o Fundo Especial de Financiamento de Campanha (FEFC) para o Tribunal Superior Eleitoral (Lei nº 9.504/1997, art. 16-C, § 2º; e Resolução nº 23.605/2019/TSE, art. 2º, caput).",
    categorias: ["FIN"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16-C, § 2º", url: "" },
      {
        norma: "Resolução nº 23.605/2019/TSE",
        dispositivo: "art. 2º, caput",
        url: "",
      },
    ],
  },

  {
    id: "2026-06-01-2",
    data: "2026-06-01",
    diaSemana: "segunda-feira",
    titulo: "Data-limite para partidos comunicarem renúncia ao FEFC",
    descricao:
      "Data-limite para que os partidos políticos comuniquem ao Tribunal Superior Eleitoral a renúncia ao Fundo Especial de Financiamento de Campanha (FEFC) (Lei nº 9.504/1997, art. 16-C, § 16; e Resolução nº 23.605/2019/TSE, art. 2º, § 2º).",
    categorias: ["FIN", "PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16-C, § 16", url: "" },
      {
        norma: "Resolução nº 23.605/2019/TSE",
        dispositivo: "art. 2º, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-06-03-1",
    data: "2026-06-03",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para envio dos lotes de RAE, incluídos os diligenciados, e dos arquivos de biometria",
    descricao:
      "Último dia para envio dos lotes de RAE, incluídos os diligenciados, e dos arquivos de biometria.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "No sistema ELO: no ambiente Central de Atendimento, atender as Solicitações Web pendentes, convertendo-as em RAE (se os documentos estiverem adequados) ou excluindo-as (se estiverem em desacordo com as regras de gravação). No ambiente Zona Eleitoral: fechar os lotes abertos em uso, emitir o relatório de decisão coletiva para deferimento pelo juiz eleitoral, enviar os lotes para processamento e verificar os RAEs em diligência. Havendo pendências biométricas, contatar os eleitores para nova coleta antes do prazo; havendo biometrias pendentes de envio, abrir chamado GLPI imediatamente, anexando o relatório.",
  },

  {
    id: "2026-06-03-2",
    data: "2026-06-03",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para recebimento na CGE de pedidos de alteração excepcional de situação de RAE",
    descricao:
      "Último dia para recebimento, na Corregedoria-Geral Eleitoral, de pedidos de alteração excepcional de situação de RAE.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "art. 10, parágrafo único, I",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "Pedidos de alteração que não podem ser realizados pela própria zona eleitoral (ex.: reversão de RAE de 'INDEFERIDO' para 'DIGITADO', que implica novo processamento) devem ser remetidos à CRE via PJe, classe RSE, com justificativa, documentos comprobatórios e assinatura do juiz eleitoral. Recomenda-se encaminhar com no mínimo dois dias úteis de antecedência, pois há etapas intermediárias entre a zona e a CGE.",
  },

  {
    id: "2026-06-05-1",
    data: "2026-06-05",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para a Justiça Eleitoral disponibilizar aos partidos a relação de devedores de multa eleitoral",
    descricao:
      "Data-limite para a Justiça Eleitoral disponibilizar aos partidos políticos a relação de todas as devedoras e de todos os devedores de multa eleitoral, a qual embasará a expedição das certidões de quitação (Lei nº 9.504/1997, art. 11, § 9º).",
    categorias: ["ELE", "ADM"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 11, § 9º", url: "" },
    ],
  },

  {
    id: "2026-06-08-1",
    data: "2026-06-08",
    diaSemana: "segunda-feira",
    titulo: "Último dia para alteração, indeferimento ou exclusão de RAE pela zona eleitoral",
    descricao: "Último dia para alteração, indeferimento ou exclusão de RAE pela zona eleitoral.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "art. 9º, § 3º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "Inclui operações de reversão realizadas pela CGE em decorrência de pedidos encaminhados até 3 de junho. Também abrange os casos em que o TRE, ao julgar recurso contra indeferimento de alistamento, comunica o provimento à CGE até 3 de junho para que esta efetue a alteração até esta data.",
  },

  {
    id: "2026-06-09-1",
    data: "2026-06-09",
    diaSemana: "terça-feira",
    titulo: "Último dia para a alteração excepcional de situação de RAE solicitada à CGE",
    descricao: "Último dia para a alteração excepcional de situação de RAE solicitada à Corregedoria-Geral Eleitoral.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-06-09-2",
    data: "2026-06-09",
    diaSemana: "terça-feira",
    titulo: "Processamento automático de RAEs não enviados pelas zonas eleitorais ao TSE ou pendentes",
    descricao: "Processamento automático dos formulários de RAE não enviados até essa data pelas zonas eleitorais ao Tribunal Superior Eleitoral, ou com pendências de processamento, à exceção dos lotes criados pelas zonas do exterior e dos requerimentos oriundos de solicitações formuladas por meio do Título Net nas quais não tenha havido, durante o atendimento, coleta obrigatória de dado biométrico ou autenticação biométrica.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "RAEs ainda nas situações 'DIGITADO', 'PENDENTE DE COLETA', 'EM DILIGÊNCIA' ou 'EM DILIGÊNCIA VIRTUAL' serão processados automaticamente nesta data. A partir de então, não será mais possível solicitar ou realizar reversões ou alterações de operações que ensejem novos processamentos de RAEs.",
  },

  {
    id: "2026-06-13-1",
    data: "2026-06-13",
    diaSemana: "sábado",
    titulo: "Manutenção preventiva da infraestrutura do cadastro — indisponibilidade do Sistema ELO",
    descricao: "Manutenção preventiva da infraestrutura do cadastro, com indisponibilidade do Sistema ELO e de outros sistemas associados ao cadastro eleitoral, em ambientes de produção e treinamento, nos dias 13 e 14 de junho de 2026 (sábado e domingo).",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "A zona eleitoral deve reagendar qualquer atividade cartorária que envolva acesso ao ELO ou outros sistemas relacionados ao Cadastro Eleitoral neste final de semana.",
  },

  {
    id: "2026-06-15-1",
    data: "2026-06-15",
    diaSemana: "segunda-feira",
    titulo: "Último dia para recebimento na CGE de pedidos de regularização de histórico ou reversão de operações",
    descricao: "Último dia para recebimento, na Corregedoria-Geral Eleitoral, de pedidos de regularização de histórico de inscrições ou de reversão de operações.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "Aplica-se a reversões de transferências já atualizadas e ajustes em registros de ASE de suspensão que não impliquem novos processamentos de RAEs. Os pedidos devem ser remetidos à CRE via PJe, classe RSE, com justificativa, documentos comprobatórios e assinatura do juiz eleitoral. Recomenda-se encaminhar com no mínimo dois dias úteis de antecedência.",
  },

  {
    id: "2026-06-16-1",
    data: "2026-06-16",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para o TSE divulgar o montante de recursos disponíveis no FEFC",
    descricao:
      "Data-limite para o Tribunal Superior Eleitoral divulgar o montante de recursos disponíveis no Fundo Especial de Financiamento de Campanha (FEFC), observado o prazo de 15 (quinze) dias a partir do recebimento da dotação orçamentária pelo Tribunal (Lei nº 9.504/1997, art. 16-C, § 2º; e Resolução nº 23.605/2019/TSE, art. 3º).",
    categorias: ["FIN"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16-C, § 2º", url: "" },
      {
        norma: "Resolução nº 23.605/2019/TSE",
        dispositivo: "art. 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-06-18-1",
    data: "2026-06-18",
    diaSemana: "quinta-feira",
    titulo: "Último dia para envio ao TSE dos lotes de RAE corrigidos no banco de erros",
    descricao: "Último dia para o envio, ao Tribunal Superior Eleitoral, dos lotes de Requerimento de Alistamento Eleitoral (RAE) corrigidos no banco de erros.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "No sistema ELO, acessar 'Ajuste >> Banco de Erros >> Consulta', selecionar a situação 'Em Banco de Erros (Com erro e/ou Corrigido)' e acessar cada RAE listado para editar (se passível de correção) ou excluir (caso contrário). RAEs editados e gravados passarão automaticamente à situação 'FECHADO' e serão processados sem necessidade de ação adicional. Para erros do tipo 'CEP/LOGRADOURO INVÁLIDO' ou 'BAIRRO INEXISTENTE', pesquisar pelo CEP ou logradouro e selecionar o bairro na lista apresentada pelo sistema. Em caso de dificuldades, contatar a seção ou coordenadoria responsável pelo Cadastro eleitoral em seu tribunal.",
  },

  {
    id: "2026-06-22-1",
    data: "2026-06-22",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para o MRE formular pedidos ao TSE para seções eleitorais no exterior fora de embaixadas",
    descricao:
      "Último dia para que o Ministério das Relações Exteriores formule pedidos ao Tribunal Superior Eleitoral para o funcionamento de seções eleitorais no exterior fora das sedes das embaixadas, das repartições consulares ou dos locais em que funcionem serviços do governo brasileiro.",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-06-22-2",
    data: "2026-06-22",
    diaSemana: "segunda-feira",
    titulo: "Último dia para cadastramento de situações de DE-PARA dos tipos 1 a 5 pela zona eleitoral",
    descricao: "Último dia para o cadastramento de situações de DE-PARA dos tipos 1 a 5 pela zona eleitoral.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "Os de-para tipos 1 a 4 não se aplicam ao TRE nas Eleições 2026. O de-para tipo 5 destina-se à mudança permanente de seção para outro local de votação (ex.: local demolido ou fechado definitivamente). Para mudanças aplicáveis apenas às Eleições 2026, utilize a 'alocação provisória', disponível após o encerramento do Cadastro em julho. É necessário vistoriar os locais de votação previamente. Após o registro no ELO, não é necessária autorização do TRE para processamento. Mais informações sobre o uso da funcionalidade \"de-para 5\" no ELO podem ser consultadas no [Canal do Conhecimento do TSE](https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-do-tipo-5).",
  },

  {
    id: "2026-06-25-1",
    data: "2026-06-25",
    diaSemana: "quinta-feira",
    titulo: "Último dia para cadastramento de solicitações DE-PARA do tipo 6 pela zona eleitoral",
    descricao: "Último dia para cadastramento de solicitações DE-PARA do tipo 6 pela zona eleitoral.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "O de-para tipo 6 destina-se à junção permanente de duas ou mais seções em uma única, indicado quando a seção diminuta não tem potencial de crescimento futuro. Para junções aplicáveis apenas às Eleições 2026, utilize a 'agregação de seções', disponível após o encerramento do Cadastro em julho. Deve-se emitir previamente a lista dos eleitores das seções a extinguir. Após o registro no ELO, é necessário solicitar autorização ao TRE, preferencialmente via chamado GLPI. Mais informações sobre o uso da funcionalidade \"de-para 6\" no ELO podem ser consultadas no [Canal do Conhecimento do TSE](https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-do-tipo-6).",
  },

  {
    id: "2026-06-25-2",
    data: "2026-06-25",
    diaSemana: "quinta-feira",
    titulo: "Último dia para digitação de decisões de coincidências pelas corregedorias e zonas eleitorais",
    descricao: "Último dia para as corregedorias e as zonas eleitorais digitarem as decisões de coincidências identificadas por batimento de dados biográficos.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
      {
        norma: "Resolução TSE nº 23.659/2021",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/codigo-eleitoral/normas-editadas-pelo-tse/resolucao-no-23-659-de-26-de-outubro-de-2021",
      },
    ],
    observacoes: "Verificar possíveis duplicidades sob responsabilidade da zona eleitoral em 'Ajuste >> Coincidência >> Pendências' no ELO e instruir os respectivos processos no PJe. Após a decisão judicial, registrá-la no mesmo caminho e, se necessário, comunicar a decisão às demais unidades judiciárias envolvidas. A [Resolução TSE 23.659/2021](https://www.tse.jus.br/legislacao/codigo-eleitoral/normas-editadas-pelo-tse/resolucao-no-23-659-de-26-de-outubro-de-2021) estabelece os procedimentos necessários para tratamento das inconformidades detectadas no batimento de inscrições.",
  },

  {
    id: "2026-06-30-1",
    data: "2026-06-30",
    diaSemana: "terça-feira",
    titulo:
      "Início da vedação a emissoras de rádio e TV para transmitir programa apresentado por pré-candidato",
    descricao:
      "Data a partir da qual é vedado às emissoras de rádio e de televisão transmitirem programa apresentado ou comentado por pré-candidata ou pré-candidato (Lei nº 9.504/1997, art. 45, § 1º; e Resolução nº 23.610/2019/TSE, art. 43, § 2º).",
    categorias: ["CON", "PRO"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 45, § 1º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 43, § 2º",
        url: "",
      },
    ],
    observacoes:
      "A partir desta data, quem está pré-candidato não pode mais aparecer como apresentador ou comentarista em rádio ou TV.",
  },

  {
    id: "2026-06-30-2",
    data: "2026-06-30",
    diaSemana: "terça-feira",
    titulo:
      "Fim da limitação de gastos com publicidade de órgãos públicos acima do limite permitido",
    descricao:
      "Data até a qual é proibido empenhar despesas com publicidade dos órgãos públicos federais, estaduais ou municipais ou das respectivas entidades da Administração indireta que excedam a 6 (seis) vezes a média mensal dos valores empenhados e não cancelados nos 3 (três) últimos anos que antecedem o pleito (Lei nº 9.504/1997, art. 73, VII; e Resolução nº 23.735/2024/TSE, art. 15, VII).",
    categorias: ["CON"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, VII", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, VII",
        url: "",
      },
    ],
  },

  {
    id: "2026-06-30-3",
    data: "2026-06-30",
    diaSemana: "terça-feira",
    titulo: "Último dia para cadastramento de solicitações DE-PARA do tipo 7 e envio à CGE",
    descricao: "Último dia para o cadastramento de solicitações DE-PARA do tipo 7 e para o envio da solicitação à CGE.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
      {
        norma: "Provimento CGE nº 2/2024",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/prv-cge/2024/provimento-cge-no-2-de-15-de-maio-de-2024",
      },
    ],
    observacoes: "O de-para tipo 7, regulamentado pelo [Prov. CGE 2/2024](https://www.tse.jus.br/legislacao/compilada/prv-cge/2024/provimento-cge-no-2-de-15-de-maio-de-2024), permite a movimentação extraordinária de eleitores entre seções de um mesmo local de votação para corrigir desequilíbrios que causem transtornos evidentes no dia da votação — não se destina à simples equalização de quantitativos. A operação tem caráter definitivo e é realizada pelo próprio sistema (não há indicação manual dos eleitores). Eleitores com deficiência e idosos só podem ser movimentados para seções com acessibilidade. A solicitação deve ser feita via registro no ELO e ofício encaminhado pelo SEI à CRE com documentação justificadora. Os eleitores movimentados devem ser comunicados sobre sua nova seção. Informações sobre o uso da funcionalidade \"De-para 7\" no ELO podem ser consultadas no [Canal de Conhecimento do TSE](https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/controle/de-para/de-para-tipo-7).",
  },

  {
    id: "2026-06-30-4",
    data: "2026-06-30",
    diaSemana: "terça-feira",
    titulo: "Início da restrição de alteração imediata da inscrição por digitação de códigos de ASE",
    descricao: "Data a partir da qual os códigos de ASE 019, 043, 337, 361, 370, 450 e 469 digitados pelas zonas eleitorais não alterarão de imediato a situação da inscrição.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "A data anterior (29 de junho) é o último dia para registro desses ASEs; após essa data, eles só surtirão efeito após as eleições. A alteração da situação somente se dará entre os dias 26 de outubro e 3 de novembro de 2026. Além disso, os óbitos e suspensões a partir desta data deverão ser carimbados nos cadernos de votação com base em relatório extraído do ELO ou INFODIP.",
  },

  // ══════════════════════════════════════════════════════════════════
  // JULHO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-07-04-1",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Início da possibilidade de cessão de funcionários públicos à Justiça Eleitoral",
    descricao:
      "Data a partir da qual, até 4 (quatro) de janeiro de 2027, para as unidades da Federação que realizarem apenas o 1º turno, e até 25 (vinte e cinco) de janeiro de 2027, para as que realizarem 2º turno, os órgãos e as entidades da Administração Pública direta e indireta poderão ceder funcionárias e funcionários à Justiça Eleitoral, em casos específicos e de forma motivada, quando solicitado pelos Tribunais Eleitorais (Lei nº 9.504/1997, art. 94-A, II).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 94-A, II", url: "" },
    ],
  },

  {
    id: "2026-07-04-2",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Início da vedação de nomeação, contratação ou dispensa de servidores públicos sem justa causa",
    descricao:
      "Data a partir da qual, e até a posse das eleitas e dos eleitos, é proibido às agentes e aos agentes públicos, servidoras e servidores ou não, na circunscrição do pleito, sob pena de nulidade de pleno direito, nomear, contratar ou, por qualquer forma, admitir, dispensar sem justa causa, suprimir ou readaptar vantagens ou, por outros meios, dificultar ou impedir o exercício funcional e, ainda, de ofício, remover, transferir ou exonerar pessoa servidora pública, ressalvadas (Lei nº 9.504/1997, art. 73, V): I - a nomeação ou exoneração de cargos em comissão e designação ou dispensa de funções de confiança; II - a nomeação para cargos do Poder Judiciário, do Ministério Público, dos tribunais ou conselhos de contas e dos órgãos da Presidência da República; III - a nomeação das aprovadas e dos aprovados em concursos públicos homologados até 4 (quatro) de julho de 2026; IV - a nomeação ou contratação necessária à instalação ou ao funcionamento inadiável de serviços públicos essenciais, com prévia e expressa autorização da(o) Chefe do Poder Executivo; e V - a transferência ou remoção de ofício de militares, de policiais civis e de agentes penitenciárias e penitenciários.",
    categorias: ["CON"],
    perfis: [],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, V", url: "" },
    ],
  },

  {
    id: "2026-07-04-3",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Início da proibição de transferência voluntária de recursos, publicidade institucional e pronunciamentos em cadeia",
    descricao:
      "Data a partir da qual, até a realização das eleições, é proibido às agentes e aos agentes públicos, servidoras e servidores ou não (Lei nº 9.504/1997, art. 73, VI): I - realizar transferência voluntária de recursos da União aos Estados e aos Municípios e dos Estados aos Municípios, sob pena de nulidade absoluta, ressalvados os recursos destinados a cumprir obrigação formal preexistente para a execução de obra ou serviço em andamento e com cronograma prefixado e os destinados a atender a situações de emergência e de calamidade pública, objetiva e formalmente justificadas; II - com exceção da propaganda de produtos e serviços com concorrência no mercado, autorizar a publicidade institucional de atos, programas, obras, serviços e campanhas dos órgãos públicos ou das respectivas entidades da Administração indireta, salvo em caso de grave e urgente necessidade pública, assim reconhecida pela Justiça Eleitoral; e III - fazer pronunciamento em cadeia de rádio e de televisão fora do horário eleitoral gratuito, salvo quando, a critério da Justiça Eleitoral, tratar-se de matéria urgente, relevante e relativa às funções de governo.",
    categorias: ["CON"],
    perfis: ["advogado"],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, VI", url: "" },
    ],
  },

  {
    id: "2026-07-04-4",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Agentes públicos devem excluir identificação de autoridades em sítios e canais oficiais",
    descricao:
      "Data a partir da qual as agentes e os agentes públicos devem adotar as providências necessárias para que o conteúdo dos sítios eletrônicos, canais e outros meios de informação oficial exclua nomes, slogans, símbolos, expressões, imagens ou outros elementos que permitam identificar autoridades, governos ou administrações cujos cargos estejam em disputa na campanha eleitoral, ainda que a divulgação tenha sido autorizada em momento anterior, assegurada a manutenção das informações necessárias para o estrito cumprimento, pelos responsáveis, do previsto no art. 48-A da Lei Complementar nº 101/2000, nos arts. 8º e 10 da Lei nº 12.527/2011 e no § 2º do art. 29 da Lei nº 14.129/2021 (Resolução nº 23.735/2024/TSE, art. 15, § 3º).",
    categorias: ["CON"],
    perfis: [],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, § 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-04-5",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Vedação à contratação de shows artísticos pagos com recursos públicos em inaugurações",
    descricao:
      "Data a partir da qual é vedada, na realização de inaugurações de obras públicas ou na divulgação de prestação de serviços públicos, a contratação de shows artísticos pagos com recursos públicos (Lei nº 9.504/1997, art. 75).",
    categorias: ["CON"],
    perfis: ["advogado"],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 75", url: "" },
    ],
  },

  {
    id: "2026-07-04-6",
    data: "2026-07-04",
    diaSemana: "sábado",
    titulo:
      "Proibição de candidatos comparecerem a inaugurações de obras públicas",
    descricao:
      "Data a partir da qual é proibido à candidata ou ao candidato comparecer a inaugurações de obras públicas (Lei nº 9.504/1997, art. 77).",
    categorias: ["CON"],
    perfis: ["candidato"],
    marcos: "3 meses antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 77", url: "" },
    ],
  },

  {
    id: "2026-07-05-1",
    data: "2026-07-05",
    diaSemana: "domingo",
    titulo:
      "Último dia para federações comunicarem à Justiça Eleitoral quais partidos acessam o CANDex",
    descricao:
      "Último dia para o diretório nacional da federação comunicar à Justiça Eleitoral, pelo Sistema de Gerenciamento de Informações Partidárias (SGIP), quais partidos políticos poderão obter acesso ao Sistema CANDex (Resolução nº 23.609/2019/TSE, art. 8º-A, § 2º, I).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 8º-A, § 2º, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-05-2",
    data: "2026-07-05",
    diaSemana: "domingo",
    titulo:
      "Início da propaganda intrapartidária para postulantes à candidatura (15 dias antes da convenção)",
    descricao:
      "Data a partir da qual é permitido à postulante ou ao postulante à candidatura realizar propaganda intrapartidária com vista à indicação de seu nome, observado o período de 15 (quinze) dias que antecede a data da convenção definida pelo partido para a escolha de candidatas e candidatos, vedado o uso de rádio, televisão e outdoor, devendo a propaganda ser removida imediatamente após a convenção (Lei nº 9.504/1997, art. 36, § 1º; e Resolução nº 23.610/2019/TSE, art. 2º, § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 36, § 1º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 2º, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-06-1",
    data: "2026-07-06",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para entidades fiscalizadoras entregarem códigos-fonte de programas de verificação ao TSE",
    descricao:
      "Último dia para entidades fiscalizadoras que desenvolveram programa próprio de verificação entregarem à Secretaria de Tecnologia da Informação do Tribunal Superior Eleitoral, para homologação, os códigos-fonte dos programas de verificação e a chave pública correspondente (Resolução nº 23.673/2021/TSE, art. 15, caput).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "90 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 15, caput",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-06-2",
    data: "2026-07-06",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para o TSE apreciar pedidos do MRE para seções eleitorais no exterior",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral apreciar os pedidos formulados pelo Ministério das Relações Exteriores para o funcionamento de seções eleitorais no exterior fora das sedes das embaixadas, das repartições consulares ou dos locais em que funcionem serviços do governo brasileiro.",
    categorias: ["ADM"],
    perfis: [],
    marcos: "90 dias antes do 1º turno",
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-07-06-3",
    data: "2026-07-06",
    diaSemana: "segunda-feira",
    titulo: "Encerramento do processamento do cadastro eleitoral",
    descricao: "Encerramento do processamento do cadastro eleitoral para as Eleições 2026.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes: "A partir desta data, não haverá mais alteração na quantidade de eleitores aptos à votação. Ainda serão possíveis apenas mudanças de município, local ou seção de votação, por meio de transferências temporárias, alocações provisórias e agregações de seções. Todos os procedimentos que impliquem mudança no local de votação do eleitor devem ser devidamente divulgados.",
  },

  {
    id: "2026-07-07-1",
    data: "2026-07-07",
    diaSemana: "terça-feira",
    titulo:
      "Início do prazo para Juízes Eleitorais publicarem edital de nomeação das Mesas Receptoras de Votos",
    descricao:
      "Início do prazo para que Juízas e Juízes publiquem edital com a nomeação das pessoas que atuarão, no primeiro e eventual segundo turno, como apoio logístico e como integrantes das Mesas Receptoras de Votos (inclusive as do exterior e as específicas para voto em trânsito) e de Justificativa, contando-se da publicação do edital o prazo de 5 (cinco) dias para que os partidos políticos, as federações e as coligações reclamem das designações e para que as pessoas nomeadas apresentem recusa, salvo se o impedimento for superveniente (Código Eleitoral, art. 120, § 4º; Lei nº 9.504/1997, art. 63, caput).",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 120, § 4º", url: "" },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 63, caput", url: "" },
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes:
      "Para instruções sobre o gerenciamento e operacionalização das convocações, consulte o [Manual do Convoca+](https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/processo-eleitoral/convoca/resolveuid/5a1cf205db6e445eb268e70dbedaac0c) e assista ao [vídeo instrucional](https://www.youtube.com/watch?v=UZKJU5cktY8).",
  },

  {
    id: "2026-07-10-1",
    data: "2026-07-10",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para o TSE realizar audiência com entidades interessadas em divulgar resultados eleitorais",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral realizar audiência com as entidades interessadas em divulgar os resultados da eleição e apresentar a definição do modelo de distribuição e os padrões tecnológicos e de segurança exigidos para a divulgação dos resultados.",
    categorias: ["ADM", "FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-07-13-1",
    data: "2026-07-13",
    diaSemana: "segunda-feira",
    titulo:
      "Início do prazo para cadastramento de agregação de seções eleitorais",
    descricao:
      "Início do prazo para cadastramento de agregação de seções eleitorais.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-07-16-1",
    data: "2026-07-16",
    diaSemana: "quinta-feira",
    titulo:
      "Início do período em que o TSE pode divulgar comunicados por rádio e TV (até 15/08 e 1-3/10/2026)",
    descricao:
      "Data a partir da qual, até 15 (quinze) de agosto de 2026 e nos dias 1º (primeiro), 2 (dois) e 3 (três) de outubro de 2026, o Tribunal Superior Eleitoral poderá divulgar comunicados, boletins e instruções ao eleitorado, por até 10 (dez) minutos diários requisitados às emissoras de rádio e de televisão, contínuos ou não, que poderão ser somados e usados em dias descontínuos, podendo ceder, a seu critério, parte desse tempo para utilização por Tribunal Regional Eleitoral (Lei nº 9.504/1997, art. 93; e Resolução nº 23.610/2019/TSE, art. 115).",
    categorias: ["ELE", "ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 115",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-17-1",
    data: "2026-07-17",
    diaSemana: "sexta-feira",
    titulo:
      "Início da habilitacao de locais de votação para voto em trânsito em municípios com mais de 100 mil eleitores",
    descricao:
      "Data a partir da qual, até 20 (vinte) de agosto de 2026, nos municípios com eleitorado apto superior a 100.000 (cem mil), devem ser habilitados locais de votação ou criados locais específicos para essa finalidade.",
    categorias: ["ADM", "ELE"],
    perfis: ["eleitor", "atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-07-17-2",
    data: "2026-07-17",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para criação de locais de votação em estabelecimentos penais e unidades de internação",
    descricao:
      "Data-limite para a criação, no Cadastro Eleitoral, de novos locais de votação onde funcionarão as seções eleitorais dos estabelecimentos penais e das unidades de internação de adolescentes, caso não existam.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-07-19-1",
    data: "2026-07-19",
    diaSemana: "domingo",
    titulo:
      "Disponibilização online dos locais de votação com vagas para voto em trânsito",
    descricao:
      "Data a partir da qual será disponibilizada, na internet, consulta dos locais de votação com vagas para voto em trânsito e para a transferência temporária de seção para militares, agentes de segurança pública, guardas municipais, Juízas e Juízes Eleitorais, Juízas e Juízes auxiliares, servidoras e servidores da Justiça Eleitoral e promotoras e promotores eleitorais em serviço no dia das eleições.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor", "atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes:
      "A partir desta data é possível consultar online quais locais de votação têm vagas para o voto em trânsito (votar fora da sua seção de origem).",
  },

  {
    id: "2026-07-19-2",
    data: "2026-07-19",
    diaSemana: "domingo",
    titulo:
      "TREs devem atualizar locais disponíveis para voto em trânsito (até 20/08/2026)",
    descricao:
      "Data a partir da qual, até 20 (vinte) de agosto de 2026, os Tribunais Regionais Eleitorais deverão atualizar os locais disponíveis para o voto em trânsito, em função da demanda, observando a permanente disponibilidade de vaga.",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-07-20-1",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do período de convenções partidárias para escolha de candidatos (até 05/08/2026)",
    descricao:
      "Data a partir da qual, até 5 (cinco) de agosto de 2026, os partidos políticos e as federações poderão realizar convenções para deliberar sobre coligações e escolher candidatas e candidatos aos cargos de Presidente e Vice-Presidente da República, Governador e Vice-Governador, Senador e Suplentes, Deputado Federal e Deputado Estadual ou Distrital (Lei nº 9.504/1997, art. 8º, caput; e Resolução nº 23.609/2019/TSE, art. 6º).",
    categorias: ["REG", "PAR"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 8º, caput", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 6º",
        url: "",
      },
    ],
    observacoes:
      "As convenções partidárias são as assembleias onde os partidos escolhem oficialmente seus candidatos e decidem sobre coligações. Ocorrem entre 20/07 e 05/08/2026.",
  },

  {
    id: "2026-07-20-2",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Requisitos para partidos e federações participarem das eleições na data da convenção",
    descricao:
      "Data a partir da qual os partidos políticos e as federações deverão assegurar que, na data da convenção: I - o partido político que deseje participar das eleições tenha órgão de direção constituído na circunscrição, devidamente anotado no Tribunal Regional Eleitoral, de acordo com o respectivo estatuto partidário (Lei nº 9.504/1997, art. 4º; e Resolução nº 23.609/2019/TSE, art. 2º, I); e II - a federação que deseje participar das eleições conte, em sua composição, com ao menos um partido político que tenha órgão de direção que atenda ao disposto no item I supra (Lei nº 9.504/1997, arts. 4º e 6º-A; e Resolução nº 23.609/2019/TSE, art. 2º, II).",
    categorias: ["REG", "PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "arts. 4º e 6º-A", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 2º, I e II",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-3",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início da obrigação de transmitir ata e lista de presença das convenções pela internet (CANDex)",
    descricao:
      "Data a partir da qual, observado o dia seguinte ao da realização da convenção, os partidos políticos e as federações deverão transmitir, pela internet, a ata e a lista das pessoas presentes, digitadas no CANDex (Lei nº 9.504/1997, art. 8º, caput; e Resolução nº 23.609/2019/TSE, art. 6º, §§ 4º, I, e 5º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 8º, caput", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 6º, §§ 4º, I, e 5º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-4",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do envio de pedidos de CNPJ de candidaturas à Receita Federal pelo TSE",
    descricao:
      "Data a partir da qual a Justiça Eleitoral encaminhará à Secretaria da Receita Federal do Brasil os pedidos de inscrição no CNPJ das candidaturas cujos registros tenham sido requeridos pelos partidos políticos, pelas federações ou pelas coligações, os quais deverão ser atendidos em até 3 (três) dias úteis (Lei nº 9.504/1997, art. 22-A, § 1º; e Resolução nº 23.609/2019/TSE, art. 33, caput e I).",
    categorias: ["REG", "FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 22-A, § 1º", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 33, caput e I",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-5",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para o TSE publicar portaria com os limites de gastos de campanha por cargo",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral publicar portaria com os limites de gastos de campanha estabelecidos em lei para cada cargo eletivo em disputa (Lei nº 9.504/1997, art. 18; e Resolução nº 23.607/2019/TSE, art. 4º, § 2º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 18", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 4º, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-6",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "TSE divulga quantitativo de eleitores por município para cálculo de limites de gastos",
    descricao:
      "Data em que o Tribunal Superior Eleitoral divulgará, na internet, o quantitativo de eleitoras e eleitores aptos por Município, para fins de cálculo do limite de gastos e do número de contratações diretas ou terceirizadas de pessoal para a prestação de serviços referentes às atividades de militância e mobilização de rua nas campanhas eleitorais (Lei nº 9.504/1997, art. 100-A; Lei nº 13.488/2017, art. 6º; e Resolução nº 23.607/2019/TSE, art. 41, § 4º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 100-A", url: "" },
      { norma: "Lei nº 13.488/2017", dispositivo: "art. 6º", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 41, § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-7",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do envio de dados financeiros de campanha à Justiça Eleitoral (prazo de 72h)",
    descricao:
      "Data a partir da qual os partidos políticos, as candidatas e os candidatos deverão enviar à Justiça Eleitoral os dados sobre os recursos financeiros recebidos para financiamento de campanha eleitoral, observado o prazo de 72 (setenta e duas) horas do recebimento desses recursos, para fins de divulgação na internet (Lei nº 9.504/1997, art. 28, § 4º, I; e Resolução nº 23.607/2019/TSE, art. 47).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 28, § 4º, I", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 47",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-8",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início da possibilidade de formalizar contratos de preparação de campanha após a convenção",
    descricao:
      "Data a partir da qual, realizada a convenção para a escolha de candidaturas, os partidos políticos, as candidatas e os candidatos poderão formalizar contratos que gerem despesas com a preparação da campanha e com a instalação física e virtual de comitês, desde que o desembolso financeiro ocorra após a obtenção do número de registro do CNPJ e a abertura de conta bancária específica (Resolução nº 23.607/2019/TSE, art. 36, § 2º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 36, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-9",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do direito de resposta para candidatos, partidos e coligações",
    descricao:
      "Data a partir da qual é assegurado o exercício do direito de resposta à candidata, ao candidato, ao partido político, à federação ou à coligação atingidos, ainda que de forma indireta, por conceito, imagem ou afirmação caluniosa, difamatória, injuriosa ou notoriamente inverídica difundida por qualquer veículo de comunicação social, inclusive por provedores de aplicativos de internet e redes sociais (Lei nº 9.504/1997, arts. 6º-A e 58, caput; Lei nº 9.096/1995, art. 11-A, caput e § 8º; Resolução nº 23.608/2019/TSE, art. 31; e Resolução nº 23.610/2019/TSE, art. 30).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "arts. 6º-A e 58, caput",
        url: "",
      },
      {
        norma: "Lei nº 9.096/1995",
        dispositivo: "art. 11-A, caput e § 8º",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 31",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 30",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-10",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Verificação da representação dos partidos na Câmara para divisão do tempo de propaganda eleitoral no rádio/TV",
    descricao:
      "Data em que a representação de cada partido político na Câmara dos Deputados será verificada com base no resultado da última totalização das Eleições Gerais de 2022 ocorrida até essa data, visando à divisão de tempo destinado à propaganda eleitoral gratuita no rádio e na televisão (Lei nº 9.504/1997, art. 47, § 3º; e Resolução nº 23.610/2019/TSE, art. 55, § 1º).",
    categorias: ["PRO"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 47, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 55, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-11",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Verificação da representação dos partidos no Congresso para fins de participação em debates",
    descricao:
      "Data em que a representação de cada partido político no Congresso Nacional será verificada com base no resultado da última totalização das Eleições Gerais de 2022 ocorrida até essa data, para fins da garantia legal de participação em debates transmitidos por emissoras de rádio e de televisão (Lei nº 9.504/1997, art. 46, caput; e Resolução nº 23.610/2019/TSE, art. 44, § 6º).",
    categorias: ["PRO"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 46, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 44, § 6º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-12",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para emissoras de rádio/TV e provedores de internet indicarem representante legal à Justiça Eleitoral",
    descricao:
      "Data até a qual as emissoras de rádio e de televisão e os demais veículos de comunicação, inclusive provedores de aplicações de internet, deverão, independentemente de intimação, apresentar ao Tribunal Eleitoral, em meio físico ou eletrônico, a indicação de sua representante ou de seu representante legal, seus endereços para correspondência e de correio eletrônico e o número de telefone móvel que disponha de aplicativo de mensagens instantâneas, pelos quais receberão ofícios, intimações ou citações, podendo indicar procuradora ou procurador com ou sem poderes para receber citação, hipótese em que deverão juntar a respectiva procuração (Resolução nº 23.608/2019/TSE, art. 10; e Resolução nº 23.610/2019/TSE, art. 79).",
    categorias: ["PRO", "ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 10",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 79",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-13",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para provedores de internet apresentarem ao TSE informações sobre serviço de impulsionamento",
    descricao:
      "Data até a qual os provedores de aplicação de internet que pretendam prestar serviço de impulsionamento de propaganda eleitoral, inclusive sob a forma de priorização de resultado, deverão apresentar ao Tribunal Superior Eleitoral as informações que demonstrem o cumprimento das obrigações previstas (Resolução nº 23.608/2019/TSE, art. 10; e Resolução nº 23.610/2019/TSE, arts. 27-A e 29, §§ 3º e 9º).",
    categorias: ["ADM", "PRO"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 10",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 27-A e 29, §§ 3º e 9º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-14",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Nomes de candidatos registrados devem constar das listas de pesquisas eleitorais",
    descricao:
      "Data a partir da qual, observada a publicação dos respectivos editais de registro de candidaturas, os nomes de todas as candidatas e todos os candidatos registrados deverão constar da lista apresentada às pessoas entrevistadas durante a realização das pesquisas eleitorais (Resolução nº 23.600/2019/TSE, art. 3º).",
    categorias: ["PES"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-15",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início da prioridade dos processos eleitorais no Ministério Público e no Judiciário (até 30/10/2026)",
    descricao:
      "Data a partir da qual, até 30 (trinta) de outubro de 2026, os processos eleitorais terão prioridade para a atuação do Ministério Público e dos juízos de todas as Justiças e instâncias, ressalvadas as ações de habeas corpus e de mandado de segurança (Lei nº 9.504/1997, art. 94, caput; e Resolução nº 23.608/2019/TSE, art. 61).",
    categorias: ["ADM"],
    perfis: ["advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 94, caput", url: "" },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 61",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-16",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do auxílio das polícias judiciárias e órgãos de controle à Justiça Eleitoral (até 30/10/2026)",
    descricao:
      "Data a partir da qual, até 30 (trinta) de outubro de 2026, as polícias judiciárias, os órgãos das Receitas Federal, Estadual e Municipal, os tribunais e os órgãos de contas auxiliarão a Justiça Eleitoral na apuração dos delitos eleitorais, com prioridade sobre suas atribuições regulares (Lei nº 9.504/1997, art. 94, § 3º; e Resolução nº 23.608/2019/TSE, art. 61, § 3º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 94, § 3º", url: "" },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 61, § 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-17",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Impedimento de cônjuges e parentes de candidatos atuarem como Juízes Eleitorais nos processos de 2026",
    descricao:
      "Data a partir da qual, desde a escolha em convenção até a diplomação das eleitas e dos eleitos, não poderão atuar como Juíza ou Juiz Eleitoral, Juíza ou Juiz membro ou auxiliar nos tribunais ou chefe de cartório, nos processos relativos às Eleições Gerais de 2026, o cônjuge, a companheira ou o companheiro e parentes consanguíneos ou afins até o segundo grau de candidata ou de candidato a cargo eletivo registrado na circunscrição (Código Eleitoral, arts. 14, § 3º, e 33, § 1º; e Resolução nº 23.608/2019/TSE, arts. 56 e 57).",
    categorias: ["ADM"],
    perfis: ["candidato"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "arts. 14, § 3º, e 33, § 1º",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "arts. 56 e 57",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-18",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início do uso de mural eletrônico e mensagens para comunicações nos processos de registro de candidatura",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro de 2026, o mural eletrônico, as mensagens instantâneas e as mensagens eletrônicas serão utilizados para as comunicações da Justiça Eleitoral nos processos de registro de candidatura, observadas as regras específicas das resoluções respectivas (Resolução nº 23.607/2019/TSE, art. 98, caput; Resolução nº 23.608/2019/TSE, art. 12, caput; e Resolução nº 23.609/2019/TSE, art. 38, caput).",
    categorias: ["ADM"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 98, caput",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 12, caput",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 38, caput",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-19",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Partes e MP intimados dos acórdãos de registro de candidatura em sessão de julgamento",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro de 2026, as partes e o Ministério Público serão intimados dos acórdãos referentes aos registros de candidaturas, em sessão de julgamento, quando nela forem publicados (Resolução nº 23.607/2019/TSE, art. 99; Resolução nº 23.608/2019/TSE, art. 12, §§ 7º e 8º; e Resolução nº 23.609/2019/TSE, art. 38, §§ 7º e 8º).",
    categorias: ["ADM"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 99",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 12, §§ 7º e 8º",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 38, §§ 7º e 8º",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-20-20",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início da habilitação para voto em trânsito e transferência temporária de seção (até 20/08/2026)",
    descricao:
      "Data a partir da qual, até 20 (vinte) de agosto de 2026, poderão habilitar-se, na Justiça Eleitoral, para votar em outra seção ou em outro local de votação: I - a eleitora ou o eleitor em trânsito no solo brasileiro, por meio do autoatendimento ou mediante comparecimento ao Cartório Eleitoral; II - presas e presos provisórios e adolescentes em unidades de internação, mediante formulário próprio encaminhado pela administração dos estabelecimentos penais e das unidades de internação de adolescentes; III - militares e agentes de segurança pública em serviço no dia da eleição, mediante listagem encaminhada pela chefia ou comando do órgão ao qual estiverem subordinados; IV - pessoas com deficiência ou com mobilidade reduzida; V - indígenas, quilombolas, integrantes das demais comunidades tradicionais e residentes de assentamentos rurais; VI - Juízas e Juízes Eleitorais, Juízas e Juízes auxiliares, servidoras e servidores da Justiça Eleitoral e promotoras e promotores eleitorais em serviço no dia das eleições, mediante listagem encaminhada pelo órgão ou pela unidade a que estiver vinculada(o) a eleitora ou o eleitor; e VII - pessoas em situação de rua (Resolução nº 425/2021/CNJ).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Resolução nº 425/2021/CNJ", dispositivo: "caput", url: "" },
    ],
    observacoes:
      "Eleitores em situações especiais (viagem, internação, serviço no dia da eleição, deficiência, etc.) podem solicitar o voto em trânsito — votar fora da sua seção de origem — até 20/08/2026.",
  },

  {
    id: "2026-07-20-21",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo:
      "Início da habilitação para mesários e apoio logístico votarem em seção diferente da origem (até 28/08/2026)",
    descricao:
      "Data a partir da qual, até 28 (vinte e oito) de agosto de 2026, poderá habilitar-se na Justiça Eleitoral para votar em seção ou local diverso de sua seção de origem: I - a mesária ou o mesário, na seção em que atuará; II - a convocada ou o convocado para prestar apoio logístico, no local onde atuará; III - a convocada ou o convocado para atuar nos testes de integridade das urnas eletrônicas, em local próximo ao evento; e IV - a(o) agente penitenciária(o), a(o) policial penal, a servidora ou o servidor de estabelecimentos penal ou de unidade de internação de adolescentes custodiadas(os), se estiver em serviço, na seção eleitoral do local, se for instalada.",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-07-20-22",
    data: "2026-07-20",
    diaSemana: "segunda-feira",
    titulo: "Divulgação do eleitorado apto para as Eleições 2026",
    descricao: "Divulgação do eleitorado apto para votar nas Eleições de 2026, com dados estatísticos detalhados por município e perfil do eleitorado.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-07-23-1",
    data: "2026-07-23",
    diaSemana: "quinta-feira",
    titulo: "Início do prazo para cadastramento de alocação temporária de seções",
    descricao: "Início do prazo para o cadastramento, no Sistema ELO, de transferência temporária (alocação temporária) de seção eleitoral.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-07-24-1",
    data: "2026-07-24",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para publicação do edital com os nomes indicados para as Juntas Eleitorais",
    descricao:
      "Último dia para a publicação do edital com os nomes das pessoas indicadas para compor as Juntas Eleitorais para o primeiro e eventual segundo turno de votação, contando-se da data da publicação o prazo de 3 (três) dias para que partidos políticos e federações apresentem impugnação (Código Eleitoral, art. 36, § 2º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 36, § 2º", url: "" },
    ],
  },

  {
    id: "2026-07-30-1",
    data: "2026-07-30",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia da propaganda institucional do TSE sobre participação na política (5 min diários no rádio/TV)",
    descricao:
      "Data até a qual o Tribunal Superior Eleitoral promoverá, em até 5 (cinco) minutos diários, contínuos ou não, requisitados às emissoras de rádio e de televisão, propaganda institucional destinada a incentivar a participação feminina, das(os) jovens e da comunidade negra e indígena na política e a esclarecer cidadãs e cidadãos sobre as regras e o funcionamento do sistema eleitoral brasileiro (Lei nº 9.504/1997, art. 93-A; e Resolução nº 23.610/2019/TSE, art. 116).",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93-A", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 116",
        url: "",
      },
    ],
  },

  {
    id: "2026-07-31-1",
    data: "2026-07-31",
    diaSemana: "sexta-feira",
    titulo:
      "TSE publica compêndio da Comissão Avaliadora dos Testes Públicos de Segurança (TPS)",
    descricao:
      "Data em que o Tribunal Superior Eleitoral publicará, nos formatos físico e eletrônico, compêndio da documentação produzida e conclusões da Comissão Avaliadora dos Testes Públicos de Segurança dos Sistemas Eleitorais (TPS) sobre o sistema eletrônico de votação (Resolução nº 23.444/2015/TSE, art. 20, §§ 2º e 3º; e Edital de Chamamento Público nº 10/2025).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.444/2015/TSE",
        dispositivo: "art. 20, §§ 2º e 3º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // AGOSTO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-08-04-1",
    data: "2026-08-04",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para propaganda intrapartidária de postulantes à candidatura",
    descricao:
      "Data até a qual é permitido à(ao) postulante à candidatura realizar propaganda intrapartidária com vista à indicação de seu nome, observado o período de 15 (quinze) dias que antecede a data da convenção definida pelo partido para a escolha de candidatas e candidatos em convenção, vedado o uso de rádio, televisão e outdoor e devendo a propaganda ser removida imediatamente após a convenção (Lei nº 9.504/1997, art. 36, § 1º; e Resolução nº 23.610/2019/TSE, art. 2º, § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 36, § 1º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 2º, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-04-2",
    data: "2026-08-04",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para o TSE publicar tabela de representação dos partidos para propaganda/debates",
    descricao:
      "Data-limite para que o Tribunal Superior Eleitoral publique a tabela com a representação dos partidos políticos na Câmara dos Deputados e no Congresso Nacional, consideradas as novas totalizações do resultado das últimas eleições gerais que ocorrerem até 20 (vinte) de julho de 2026, para divisão do tempo destinado à propaganda eleitoral gratuita no rádio e na televisão e para a realização de debates (Resolução nº 23.610/2019/TSE, arts. 44, § 6º, e 55, I).",
    categorias: ["PRO"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 44, § 6º, e 55, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-05-1",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para convenções partidárias — encerramento do período de escolha de candidatos",
    descricao:
      "Último dia para que os partidos políticos e as federações realizem convenções para deliberar sobre a formação de coligações e sobre a escolha de candidatas e candidatos aos cargos de Presidente e Vice-Presidente da República, Governador e Vice-Governador, Senador e Suplentes, Deputado Federal e Deputado Estadual ou Distrital (Lei nº 9.504/1997, art. 8º, caput; e Resolução nº 23.609/2019/TSE, art. 6º).",
    categorias: ["REG", "PAR"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 8º, caput", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 6º",
        url: "",
      },
    ],
    observacoes:
      "Último dia do período de convenções. A partir de amanhã nenhum partido pode mais oficializar candidaturas.",
  },

  {
    id: "2026-08-05-2",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Início da prioridade postal para remessa de material de propaganda dos partidos e candidatos",
    descricao:
      "Data a partir da qual é assegurada aos partidos políticos, às federações e às coligações a prioridade postal para a remessa de material de propaganda de suas candidatas e de seus candidatos (Código Eleitoral, art. 239; e Resolução nº 23.610/2019/TSE, art. 120).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 239", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 120",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-05-3",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para nomeação de mesários e apoio logístico e lançamento de códigos de ASE",
    descricao:
      "Último dia para nomeação de membras e membros das mesas receptoras e do pessoal de apoio logístico para primeiro e eventual segundo turnos e para lançamento dos respectivos códigos de ASE no Sistema ELO.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    destaque: true,
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 120, caput e § 4º",
        url: "",
      },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 63, caput", url: "" },
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
    observacoes:
      "Para instruções sobre o gerenciamento e operacionalização das convocações, consulte o [Manual do Convoca+](https://sticonhecimento.tse.jus.br/csele/secad/sistemas/elo/manual/processo-eleitoral/convoca/resolveuid/5a1cf205db6e445eb268e70dbedaac0c) e assista ao [vídeo instrucional](https://www.youtube.com/watch?v=UZKJU5cktY8).",
  },

  {
    id: "2026-08-05-4",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para publicação de edital com os locais das Mesas Receptoras de Votos",
    descricao:
      "Último dia para a publicação de edital com os locais designados para o funcionamento das Mesas Receptoras de Votos e de Justificativa, incluídas as agregadas, com a numeração ordinal e o local em que deverão funcionar, assim como a indicação da rua, do número e de qualquer outro elemento que facilite a sua localização, contando-se da publicação do edital o prazo de 3 (três) dias para que os partidos políticos, as federações e as coligações reclamem da designação (Código Eleitoral, art. 135, caput e §§ 1º e 7º).",
    categorias: ["ADM"],
    perfis: ["eleitor"],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 135, caput e §§ 1º e 7º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-05-5",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para o Presidente do TRE nomear Presidente e integrantes das Juntas Eleitorais",
    descricao:
      "Último dia para a(o) Presidente do Tribunal Regional Eleitoral nomear a(o) Presidente e as(os) integrantes das Juntas Eleitorais para o primeiro e o eventual segundo turno de votação (Código Eleitoral, art. 36, § 1º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 36, § 1º", url: "" },
    ],
  },

  {
    id: "2026-08-05-6",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para os TREs designarem a Comissão de Auditoria da Votação Eletrônica",
    descricao:
      "Último dia para os Tribunais Regionais Eleitorais designarem, em sessão pública, a Comissão de Auditoria da Votação Eletrônica, contando-se da sessão o prazo de 3 (três) dias para as entidades fiscalizadoras impugnarem a indicação de componente (Resolução nº 23.673/2021/TSE, arts. 55, caput, e 56).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "arts. 55, caput, e 56",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-05-7",
    data: "2026-08-05",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para o Presidente do TRE indicar juízo para convocar auxiliares de auditoria dos testes de integridade",
    descricao:
      'Último dia para a(o) Presidente do Tribunal Regional Eleitoral indicar o juízo eleitoral responsável por convocar pessoas como apoio logístico, na função de "auxiliar de auditoria", para atuarem nas atividades previstas nos testes de integridade previstos na Resolução nº 23.673/2021/TSE.',
    categorias: ["FIS"],
    perfis: [],
    marcos: "60 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Resolução nº 23.673/2021/TSE", dispositivo: "caput", url: "" },
    ],
  },

  {
    id: "2026-08-06-1",
    data: "2026-08-06",
    diaSemana: "quinta-feira",
    titulo:
      "Vedações às emissoras de rádio e TV sobre propaganda política e tratamento privilegiado a candidatos",
    descricao:
      "Data a partir da qual é vedado às emissoras de rádio e de televisão, em sua programação normal e em seu noticiário (Lei nº 9.504/1997, art. 45, I, IV, V e VI; e Resolução nº 23.610/2019/TSE, art. 43): I - transmitir, ainda que sob a forma de entrevista jornalística, imagens de realização de pesquisa ou de qualquer outro tipo de consulta popular de natureza eleitoral em que seja possível identificar a(o) entrevistada(o) ou em que haja manipulação de dados; II - veicular propaganda política; III - dar tratamento privilegiado a candidata, candidato, partido político, federação ou coligação, inclusive sob a forma de retransmissão de live eleitoral; IV - veicular ou divulgar filmes, novelas, minisséries ou qualquer outro programa com alusão ou crítica voltada especificamente a candidata, candidato, partido político, federação ou coligação, mesmo que dissimuladamente, exceto programas jornalísticos ou debates políticos; e V - divulgar nome de programa que se refira a candidata ou candidato escolhido em convenção, ainda se preexistente, inclusive se coincidente com seu nome ou nome escolhido para constar da urna eletrônica.",
    categorias: ["PRO", "CON"],
    perfis: ["advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 45, I, IV, V e VI",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 43",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-1",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Último dia para registro de candidaturas (até as 19h) — Eleições 2026",
    descricao:
      "Último dia, até as 19h (dezenove horas), para os partidos políticos, as federações e as coligações requererem o registro de candidatas e candidatos aos cargos de Presidente e Vice-Presidente da República, Governador e Vice-Governador, Senador e Suplentes, Deputado Federal e Deputado Estadual ou Distrital (Lei nº 9.504/1997, art. 11, caput; Resolução nº 23.609/2019/TSE, arts. 18, III, e 19, § 2º).",
    categorias: ["REG"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 11, caput", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "arts. 18, III, e 19, § 2º",
        url: "",
      },
    ],
    observacoes:
      "Prazo final para que os partidos requeiram oficialmente o registro de seus candidatos na Justiça Eleitoral. Candidatos sem registro deferido não podem disputar as eleições.",
  },

  {
    id: "2026-08-15-2",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Tribunais de contas disponibilizam à Justiça Eleitoral relação de contas rejeitadas por irregularidade insanável",
    descricao:
      "Último dia para os tribunais e conselhos de contas tornarem disponível à Justiça Eleitoral relação daquelas(es) que tiveram suas contas relativas ao exercício de cargos ou funções públicas rejeitadas por irregularidade insanável e por decisão irrecorrível do órgão competente, ressalvados os casos em que a questão estiver submetida à apreciação do Poder Judiciário ou em que haja sentença judicial favorável à interessada ou ao interessado (Lei nº 9.504/1997, art. 11, § 5º).",
    categorias: ["REG"],
    perfis: ["candidato", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 11, § 5º", url: "" },
    ],
  },

  {
    id: "2026-08-15-3",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Cartórios eleitorais e secretarias dos Tribunais passam a funcionar aos sábados, domingos e feriados",
    descricao:
      "Data a partir da qual os cartórios eleitorais e as secretarias dos Tribunais Eleitorais permanecerão abertos aos sábados, domingos e feriados (Lei Complementar nº 64/1990, art. 16).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei Complementar nº 64/1990", dispositivo: "art. 16", url: "" },
    ],
  },

  {
    id: "2026-08-15-4",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Prazos processuais eleitorais passam a ser contados de forma contínua (até 18/12/2026)",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro, os prazos processuais relativos aos processos das Eleições 2026, salvo os submetidos ao procedimento do art. 22 da Lei Complementar nº 64/1990, serão contados, conforme o caso, em cartório ou secretaria ou no PJe, de forma contínua, e não serão prorrogados quando se vencerem aos sábados, domingos e feriados (Lei Complementar nº 64/1990, art. 16; Resolução nº 23.609/2019/TSE, art. 78; e Resolução nº 23.608/2019/TSE, art. 7º).",
    categorias: ["ADM"],
    perfis: ["advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei Complementar nº 64/1990", dispositivo: "art. 16", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 78",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 7º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-5",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Início do uso de mural eletrônico para comunicações nas representações, reclamações e prestações de contas",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro de 2026, o mural eletrônico, mensagens instantâneas e mensagens eletrônicas serão utilizados para as comunicações da Justiça Eleitoral nas representações, ressalvadas aquelas submetidas ao procedimento do art. 22 da Lei Complementar nº 64/1990, nas reclamações, nos pedidos de direito de resposta e nas prestações de contas, observadas as regras específicas das resoluções respectivas (Resolução nº 23.607/2019/TSE, art. 98, caput; Resolução nº 23.608/2019/TSE, caput, art. 12; e Resolução nº 23.609/2019/TSE, art. 38, caput).",
    categorias: ["ADM"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 98, caput",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 12, caput",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 38, caput",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-6",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "MP intimado das decisões nos processos de registro de candidatura por meio eletrônico",
    descricao:
      "Data a partir da qual, até a decisão final da Justiça Eleitoral, nos processos de registro de candidatura, o Ministério Público será intimado das decisões, dos despachos e, quando não publicados em sessão, dos acórdãos por meio eletrônico, com abertura imediata do prazo processual, mesmo após o término do período eleitoral (Resolução nº 23.609/2019/TSE, art. 38, §§ 7º e 8º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 38, §§ 7º e 8º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-7",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "MP intimado das decisões nas representações, reclamações, direito de resposta e prestações de contas por meio eletrônico",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro de 2026, nas representações, ressalvadas aquelas submetidas ao procedimento do art. 22 da Lei Complementar nº 64/1990, nas reclamações, nos pedidos de direito de resposta e nas prestações de contas, o Ministério Público será intimado das decisões e dos despachos por meio eletrônico (Resolução nº 23.607/2019/TSE, art. 99; e Resolução nº 23.608/2019/TSE, art. 12, §§ 7º e 8º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 99",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 12, §§ 7º e 8º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-8",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Partes e MP intimados dos acórdãos em sessão de julgamento (representações e contas)",
    descricao:
      "Data a partir da qual, até 18 (dezoito) de dezembro de 2026, as partes e o Ministério Público serão intimados dos acórdãos, em sessão de julgamento, quando nela forem publicados (Resolução nº 23.607/2019/TSE, art. 99; Resolução nº 23.608/2019/TSE, art. 12, §§ 7º e 8º; e Resolução nº 23.609/2019/TSE, art. 38, §§ 7º e 8º).",
    categorias: ["ADM"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 99",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 12, §§ 7º e 8º",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 38, §§ 7º e 8º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-9",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Tribunais Eleitorais convocam partidos para elaboração do plano de mídia e sorteio do horário eleitoral gratuito",
    descricao:
      "Data a partir da qual, até 21 (vinte e um) de agosto de 2026, os Tribunais Eleitorais convocarão os partidos políticos, as federações, as coligações e a representação das emissoras de televisão e de rádio para a elaboração de plano de mídia para uso da parcela do horário eleitoral gratuito a que tenham direito, assim como para realizar o sorteio para escolha da ordem de veiculação da propaganda em rede (Lei nº 9.504/1997, art. 52; e Resolução nº 23.610/2019/TSE, arts. 53, caput e § 1º).",
    categorias: ["PRO"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 52", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 53, caput e § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-10",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Fim do período em que o TSE pode divulgar comunicados por rádio e TV (10 min diários)",
    descricao:
      "Data até a qual e nos dias 1º (primeiro), 2 (dois) e 3 (três) de outubro de 2026, o Tribunal Superior Eleitoral poderá divulgar comunicados, boletins e instruções ao eleitorado em até 10 (dez) minutos diários, requisitados às emissoras de rádio e de televisão, contínuos ou não, que poderão ser somados e usados em dias descontinuados, podendo ceder, a seu juízo, parte desse tempo para utilização por Tribunal Regional Eleitoral (Lei nº 9.504/1997, art. 93; e Resolução nº 23.610/2019/TSE, art. 115).",
    categorias: ["ELE", "ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 115",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-11",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Último dia para partidos abrirem conta bancária específica para recebimento de doações de campanha",
    descricao:
      "Último dia para que os partidos políticos providenciem a abertura de conta bancária específica destinada ao recebimento de doações de pessoas físicas para a campanha eleitoral, na Caixa Econômica Federal, no Banco do Brasil ou em outra instituição financeira com carteira comercial reconhecida pelo Banco Central do Brasil, caso não a tenham (Resolução nº 23.607/2019/TSE, art. 8º, § 1º, II).",
    categorias: ["FIN", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 8º, § 1º, II",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-12",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Último dia para partidos encaminharem ao TSE os critérios de uso de doações nas campanhas",
    descricao:
      "Último dia para os partidos políticos encaminharem ao Tribunal Superior Eleitoral os critérios definidos pelos órgãos de direção nacional para utilização, nas campanhas eleitorais, das doações recebidas de pessoas físicas ou das contribuições de filiadas e filiados recebidas em anos anteriores ao da eleição (Resolução nº 23.607/2019/TSE, art. 18, II).",
    categorias: ["FIN", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 18, II",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-13",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Início da obrigação de manter registro de tratamento de dados pessoais nas campanhas (até 18/12/2026)",
    descricao:
      "Data a partir da qual, até o dia 18 (dezoito) de dezembro de 2026, os partidos políticos, as federações, as coligações, as candidatas e os candidatos devem manter o registro das operações de tratamento de dados pessoais, permanecendo a obrigação em caso de ajuizamento de ação na qual se apure irregularidade ou ilicitude no tratamento de dados pelas campanhas (Resolução nº 23.610/2019/TSE, art. 33-C, caput e § 2º).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 33-C, caput e § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-15-14",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Data-limite para órgãos públicos informarem à Justiça Eleitoral veículos disponíveis para transporte de eleitores",
    descricao:
      "Data-limite para as pessoas responsáveis por repartições, órgãos e unidades do serviço público federal, estadual e municipal oficiarem ao juízo eleitoral correspondente, informando o número, a espécie e a lotação dos veículos e embarcações de que dispõem para o transporte gratuito de eleitoras e de eleitores residentes em zonas rurais, aldeias indígenas, comunidades remanescentes dos quilombos e demais comunidades tradicionais para o primeiro e eventual segundo turno de votação (Lei nº 6.091/1974, art. 3º).",
    categorias: ["ADM", "ELE", "TRA"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 3º", url: "" },
    ],
  },

  {
    id: "2026-08-15-15",
    data: "2026-08-15",
    diaSemana: "sábado",
    titulo:
      "Data-limite para o poder público informar à Justiça Eleitoral itinerários de transporte gratuito no dia da votação",
    descricao:
      "Data-limite para que o poder público informe ao juízo eleitoral itinerários, horários e modalidades de transporte que irá ofertar gratuitamente nos dias de votação.",
    categorias: ["ADM", "ELE", "TRA"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-08-16-1",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo: "Início da propaganda eleitoral, inclusive na internet",
    descricao:
      "Data a partir da qual será permitida a propaganda eleitoral, inclusive na internet (Lei nº 9.504/1997, arts. 36, caput, e 57-A; e Resolução nº 23.610/2019/TSE, arts. 2º e 27).",
    categorias: ["PRO"],
    perfis: ["eleitor", "candidato", "partido", "advogado"],
    marcos: null,
    turno: null,
    destaque: true,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "arts. 36, caput, e 57-A",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 2º e 27",
        url: "",
      },
    ],
    observacoes:
      "A partir desta data começa oficialmente a campanha eleitoral. Candidatos podem fazer cabos eleitorais, usar redes sociais para propaganda, panfletar, colocar adesivos, distribuir material, etc.",
  },

  {
    id: "2026-08-16-2",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Lives de candidatos passam a ser consideradas ato de campanha eleitoral",
    descricao:
      "Data a partir da qual a utilização de live por pessoa candidata para promoção pessoal ou de atos referentes a exercício de mandato, mesmo sem menção ao pleito, equivale à promoção de candidatura e constitui ato de campanha eleitoral de natureza pública (Resolução nº 23.610/2019/TSE, art. 29-A, caput e § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 29-A, caput e § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-3",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Início do uso de alto-falantes e amplificadores de som na campanha (até 03/10/2026)",
    descricao:
      "Data a partir da qual, até 3 (três) de outubro de 2026, as candidatas, os candidatos, os partidos, as federações e as coligações poderão fazer funcionar, entre 8h (oito horas) e 22h (vinte e duas horas), alto-falantes ou amplificadores de som, desde que distantes no mínimo 200m (duzentos metros) das sedes dos Poderes Executivo e Legislativo da União, dos Estados, do Distrito Federal e dos Municípios; das sedes dos tribunais judiciais, dos quartéis e de outros estabelecimentos militares; dos hospitais e das casas de saúde; e das escolas, das bibliotecas públicas, das igrejas e dos teatros, quando em funcionamento (Lei nº 9.504/1997, art. 39, § 3º; e Resolução nº 23.610/2019/TSE, art. 15).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 15",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-4",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Início da realização de comícios e uso de aparelhagem de sonorização fixa (até 01/10/2026)",
    descricao:
      "Data a partir da qual, até 1º (primeiro) de outubro de 2026, poderão ser realizados comícios e utilizada aparelhagem de sonorização fixa, entre 8h (oito horas) e 24h (vinte e quatro horas), com exceção do comício de encerramento da campanha, que poderá ser prorrogado por mais 2 (duas) horas (Código Eleitoral, art. 240, parágrafo único; Lei nº 9.504/1997, art. 39, § 4º; e Resolução nº 23.610/2019/TSE, art. 15, § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 240, parágrafo único",
        url: "",
      },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 4º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 15, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-5",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Início da distribuição de material gráfico, carreatas e passeatas (até 22h do dia 03/10/2026)",
    descricao:
      "Data a partir da qual, até as 22h (vinte e duas horas) do dia 3 (três) de outubro de 2026, poderá haver distribuição de material gráfico, caminhada, carreata ou passeata na qual se utilize outros meios de locomoção das pessoas, acompanhadas ou não por carro de som ou minitrio (Lei nº 9.504/1997, art. 39, §§ 9º e 11; e Resolução nº 23.610/2019/TSE, art. 16).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 39, §§ 9º e 11",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 16",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-6",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Início da propaganda eleitoral paga na imprensa escrita (até 02/10/2026)",
    descricao:
      "Data a partir da qual, até 2 (dois) de outubro de 2026, serão permitidas a divulgação paga, na imprensa escrita, e a reprodução na internet do jornal impresso, de até 10 (dez) anúncios de propaganda eleitoral, por veículo, em datas diversas, para cada candidata ou candidato, no espaço máximo, por edição, de 1/8 (um oitavo) de página de jornal padrão e de 1/4 (um quarto) de página de revista ou tabloide (Lei nº 9.504/1997, art. 43, caput; e Resolução nº 23.610/2019/TSE, art. 42).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 43, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 42",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-7",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Início da propaganda eleitoral paga e impulsionada na internet (até 01/10/2026)",
    descricao:
      "Data a partir da qual, até 1º (primeiro) de outubro de 2026, poderá haver circulação paga ou impulsionada de propaganda eleitoral na internet (Resolução nº 23.610/2019/TSE, art. 29, § 11).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: "1T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 29, § 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-8",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo: "Proibição de enquetes relacionadas ao processo eleitoral",
    descricao:
      "Data a partir da qual não será permitida a realização de enquetes relacionadas ao processo eleitoral e caberá o exercício do poder de polícia contra a sua divulgação (Lei nº 9.504/1997, art. 33, § 5º, c.c. o art. 36; e Resolução nº 23.600/2019/TSE, art. 23).",
    categorias: ["PES"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 33, § 5º, c.c. o art. 36",
        url: "",
      },
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 23",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-9",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Instalação de telefones nas sedes dos diretórios partidários pelos serviços telefônicos",
    descricao:
      "Data a partir da qual, independentemente do critério para definição de prioridade, os serviços telefônicos, oficiais ou concedidos, farão instalar, nas sedes dos diretórios devidamente registrados, telefones necessários, mediante requerimento da(o) respectiva(o) Presidente e pagamento das taxas devidas (Código Eleitoral, art. 256, § 1º; e Resolução nº 23.610/2019/TSE, art. 118, parágrafo único).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 256, § 1º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 118, parágrafo único",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-16-10",
    data: "2026-08-16",
    diaSemana: "domingo",
    titulo:
      "Autoridades eleitorais expedem ofício sobre relatórios de impacto à proteção de dados para candidaturas presidenciais e governamentais",
    descricao:
      "Data até a qual as autoridades eleitorais competentes que concluírem necessários relatórios de impacto à proteção de dados expedirão ofício dirigido a todos os partidos políticos, federações e coligações que registrarem candidaturas para o cargo de Presidente da República, Governador e Senador, informando o prazo em que deverá ser atendida a requisição (Resolução nº 23.610/2019/TSE, art. 33-D, § 2º).",
    categorias: ["ADM"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 33-D, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-18-1",
    data: "2026-08-18",
    diaSemana: "terça-feira",
    titulo:
      "Data de levantamento das candidaturas para aferição dos percentuais mínimos de repasse do FEFC",
    descricao:
      "Data a ser considerada para levantamento do total de candidaturas que constaram dos pedidos coletivos (RRC) e individuais (RRCI) no território nacional, para aferição dos percentuais mínimos de repasse de recursos do Fundo Especial de Financiamento de Campanha (FEFC) no âmbito da prestação de contas, incluídos os pedidos recebidos e aceitos até 23h59 (vinte e três horas e cinquenta e nove minutos).",
    categorias: ["FIN", "PAR"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-08-20-1",
    data: "2026-08-20",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para habilitação para voto em trânsito (eleitores em trânsito, militares, presos, etc.)",
    descricao:
      "Último dia para o requerimento, a alteração ou o cancelamento da habilitação para votar em seção distinta da origem, das eleitoras e eleitores: I - em trânsito no território nacional; II - presas e presos provisórios e adolescentes em unidades de internação; III - militares, agentes de segurança pública e guardas municipais em serviço no dia da eleição; IV - com deficiência ou mobilidade reduzida; V - indígenas, quilombolas, integrantes das demais comunidades tradicionais e residentes de assentamentos rurais; VI - e Juízas e Juízes Eleitorais, Juízas e Juízes auxiliares, servidoras e servidores da Justiça Eleitoral e promotoras e promotores eleitorais em serviço no dia das eleições; e VII - pessoas em situação de rua (Resolução nº 425/2021/CNJ).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: "45 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Resolução nº 425/2021/CNJ", dispositivo: "caput", url: "" },
    ],
    observacoes:
      "Último prazo para eleitores em situações especiais (viagem, serviço de mesário, militar em serviço, pessoa com deficiência, etc.) solicitarem o voto em trânsito.",
  },

  {
    id: "2026-08-20-2",
    data: "2026-08-20",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para os TREs atualizarem os locais disponíveis para voto em trânsito",
    descricao:
      "Data até a qual os Tribunais Regionais Eleitorais deverão atualizar os locais disponíveis para o voto em trânsito, em função da demanda, observando a permanente disponibilidade de vaga.",
    categorias: ["ADM"],
    perfis: ["eleitor"],
    marcos: "45 dias antes do 1º turno",
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-08-21-1",
    data: "2026-08-21",
    diaSemana: "sexta-feira",
    titulo:
      "TSE divulga percentuais de candidaturas femininas, de pessoas negras e indígenas por partido",
    descricao:
      "Data-limite para que o Tribunal Superior Eleitoral divulgue, em sua página da internet, os percentuais de candidaturas femininas, de pessoas negras e indígenas por partido político, calculados sobre o total de candidaturas que constaram de pedidos coletivos (RRC) e individuais (RRCI) no território nacional, para a destinação dos recursos do fundo partidário e do FEFC, de acordo com as reservas estabelecidas no § 4º do art. 17 e no § 3º do art. 19 da Resolução nº 23.607/2019/TSE.",
    categorias: ["FIN", "REG"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "arts. 17, § 4º, e 19, § 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-21-2",
    data: "2026-08-21",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para emissoras distribuírem atribuições de fornecimento de equipamentos para propaganda eleitoral gratuita",
    descricao:
      "Último dia para as emissoras distribuírem entre si as atribuições relativas ao fornecimento de equipamentos e mão de obra especializada para a geração da propaganda eleitoral e definirem a forma de veiculação de sinal único de propaganda e a forma pela qual todas as emissoras deverão captar e retransmitir o sinal (Lei nº 9.504/1997, art. 47, caput; e Resolução nº 23.610/2019/TSE, art. 64, § 2º).",
    categorias: ["ADM", "PRO"],
    perfis: ["advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 47, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 64, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-23-1",
    data: "2026-08-23",
    diaSemana: "domingo",
    titulo:
      "Data-limite para os TREs convocarem partidos para plano de mídia e sorteio da ordem de propaganda",
    descricao:
      "Data-limite para que os Tribunais Eleitorais convoquem os partidos políticos, as federações, as coligações e a representação das emissoras de televisão e de rádio para a elaboração de plano de mídia para uso da parcela do horário eleitoral gratuito a que tenham direito e para realizar o sorteio para escolha da ordem de veiculação da propaganda em rede (Lei nº 9.504/1997, art. 52; e Resolução nº 23.610/2019/TSE, art. 53, caput e § 1º).",
    categorias: ["PRO"],
    perfis: ["partido", "advogado"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 52", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 53, caput e § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-24-1",
    data: "2026-08-24",
    diaSemana: "segunda-feira",
    titulo: "Prazo final para digitação/cancelamento de transferência temporária (regra geral)",
    descricao: "Prazo final para a digitação no Sistema ELO e o cancelamento de transferência temporária do eleitorado (regra geral).",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-08-25-1",
    data: "2026-08-25",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para partidos indicarem membros para a Comissão Especial de Transporte",
    descricao:
      "Último dia para os partidos políticos e as federações indicarem aos juízos eleitorais até 3 (três) pessoas por agremiação para compor a Comissão Especial de Transporte para o primeiro e eventual segundo turno de votação (Lei nº 6.091/1974, arts. 14, § 1º, e 15; e Resolução nº 9.641/1974/TSE, art. 13, §§ 1º e 3º).",
    categorias: ["PAR", "ADM", "TRA"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 6.091/1974",
        dispositivo: "arts. 14, § 1º, e 15",
        url: "",
      },
      {
        norma: "Resolução nº 9.641/1974/TSE",
        dispositivo: "art. 13, §§ 1º e 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-26-1",
    data: "2026-08-26",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para partidos indicarem pessoas autorizadas a entregar mapas e mídias nas emissoras",
    descricao:
      "Último dia para os partidos, as federações e as coligações indicarem ao grupo de emissoras ou à emissora responsável pela geração do sinal para veiculação da propaganda eleitoral gratuita, as pessoas autorizadas a entregar os mapas e as mídias, comunicando eventual substituição com, no mínimo, 24 (vinte e quatro) horas de antecedência, dispensado o credenciamento para as(os) Presidentes das legendas e as(os) Vice-Presidentes e delegadas e delegados credenciados, mediante certidão obtida no sítio eletrônico do Tribunal Superior Eleitoral (Resolução nº 23.610/2019/TSE, art. 65, §§ 1º e 3º).",
    categorias: ["PAR", "PRO"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 65, §§ 1º e 3º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-26-2",
    data: "2026-08-26",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para emissoras fornecerem dados de contato às partes para recebimento de mapas e mídias",
    descricao:
      "Último dia para o grupo de emissoras e as emissoras responsáveis pela geração fornecerem à Justiça Eleitoral, aos partidos políticos, às federações e às coligações, por formulário estabelecido no Anexo II da Resolução nº 23.610/2019/TSE, seus telefones, endereços, inclusive eletrônico, e nomes das pessoas responsáveis pelo recebimento de mapas e de mídias (Resolução nº 23.610/2019/TSE, art. 65, § 8º).",
    categorias: ["ADM", "PRO"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 65, § 8º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-27-1",
    data: "2026-08-27",
    diaSemana: "quinta-feira",
    titulo: "Último dia para agregação de seções pelas zonas eleitorais",
    descricao: "Último dia para agregação de seções pelas zonas eleitorais.",
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-08-28-1",
    data: "2026-08-28",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para Juízes Eleitorais publicarem edital de mesários para voto em trânsito e estabelecimentos penais",
    descricao:
      'Último dia para que as Juízas e os Juízes Eleitorais publiquem edital com as pessoas nomeadas para o primeiro e eventual segundo turno, contando-se da publicação o prazo de 5 (cinco) dias para que os partidos políticos, federações e coligações reclamem das nomeações e para que as nomeadas e nomeados apresentem recusa, salvo se o impedimento for superveniente, para as funções de (Código Eleitoral, art. 120, § 4º; Lei nº 9.504/1997, art. 63, caput): I - mesárias, mesários e apoio logístico das seções específicas para voto em trânsito; II - mesárias e mesários das seções instaladas em estabelecimentos penais e nas unidades de internação de adolescentes; e III - "auxiliar de auditoria", a que se refere o art. 55-B da Resolução nº 23.673/2021/TSE.',
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 120, § 4º", url: "" },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 63, caput", url: "" },
    ],
  },

  {
    id: "2026-08-28-2",
    data: "2026-08-28",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para habilitação de mesários, apoio logístico e auxiliares de auditoria para voto em seção distinta",
    descricao:
      'Último dia para que o requerimento, a alteração ou o cancelamento da habilitação para votar em seção distinta da origem seja formulado por: I - mesárias, mesários e as pessoas que atuarão como apoio logístico, inclusive as nomeadas e nomeados como "auxiliares de auditoria" para os testes de integridade das urnas eletrônicas, nos termos da Resolução nº 23.673/2021/TSE; e II - agentes penitenciárias(os), policiais penais e servidoras ou servidores de estabelecimentos penais e de unidades de internação de adolescentes custodiadas(os) nos quais haverá instalação de seções eleitorais.',
    categorias: ["ADM"],
    perfis: ["atos-preparatorios"],
    marcos: null,
    turno: null,
    fundamentacao: [
      { norma: "Resolução nº 23.673/2021/TSE", dispositivo: "caput", url: "" },
      {
        norma: "Resolução nº 23.750/2026",
        dispositivo: "",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026",
      },
    ],
  },

  {
    id: "2026-08-28-3",
    data: "2026-08-28",
    diaSemana: "sexta-feira",
    titulo:
      "Início da propaganda eleitoral gratuita no rádio e na televisão — 1º turno (até 01/10/2026)",
    descricao:
      "Data a partir da qual, até 1º (primeiro) de outubro de 2026, será veiculada a propaganda eleitoral gratuita no rádio e na televisão relativa ao primeiro turno (Lei nº 9.504/1997, arts. 47, caput, e 51; e Resolução nº 23.610/2019/TSE, art. 49).",
    categorias: ["PRO"],
    perfis: ["eleitor", "candidato", "partido", "advogado"],
    marcos: null,
    turno: "1T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "arts. 47, caput, e 51",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 49",
        url: "",
      },
    ],
    observacoes:
      "Começa o horário eleitoral gratuito no rádio e na TV (HGPE). Cada partido recebe um tempo proporcional à sua representação na Câmara para divulgar seus candidatos.",
  },

  {
    id: "2026-08-30-1",
    data: "2026-08-30",
    diaSemana: "domingo",
    titulo:
      "Último dia para distribuição do FEFC e do Fundo Partidário às candidaturas de mulheres, negros e indígenas",
    descricao:
      "Último dia para os partidos efetuarem a distribuição dos recursos públicos do Fundo Especial de Financiamento de Campanha (FEFC) e do Fundo Partidário às candidaturas de mulheres, de pessoas negras e de indígenas (Resolução nº 23.607/2019/TSE, arts. 17, § 9º, e 19, § 10).",
    categorias: ["FIN", "PAR"],
    perfis: ["partido"],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "arts. 17, § 9º, e 19, § 10",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-30-2",
    data: "2026-08-30",
    diaSemana: "domingo",
    titulo:
      "Último dia para o TSE homologar programas de verificação das entidades fiscalizadoras",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral homologar os programas de verificação dos sistemas eleitorais desenvolvidos pelas entidades fiscalizadoras para fins de auditoria, observada a data da Cerimônia de Assinatura Digital e Lacração dos Sistemas (Resolução nº 23.673/2021/TSE, art. 16, § 1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 16, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-08-31-1",
    data: "2026-08-31",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para agregação de seções pelos Tribunais Regionais Eleitorais",
    descricao:
      "Último dia para agregação de seções pelos Tribunais Regionais Eleitorais.",
    categorias: ["ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  // ══════════════════════════════════════════════════════════════════
  // SETEMBRO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-09-01-1",
    data: "2026-09-01",
    diaSemana: "terça-feira",
    titulo:
      "Disponibilização no e-Título/internet do serviço de consulta à seção de votação atualizada",
    descricao:
      "Data a partir da qual estará disponível, no e-Título ou na internet, o serviço de consulta à seção de votação, atualizada com as informações a respeito da transferência temporária da eleitora ou do eleitor.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: null,
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-09-01-2",
    data: "2026-09-01",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para Tribunais Eleitorais requisitarem NF-e de bens e serviços de campanha",
    descricao:
      "Último dia para os Tribunais Eleitorais requisitarem, por ofício, à Receita Federal e às secretarias estaduais e municipais de Fazenda, arquivo eletrônico com as notas fiscais eletrônicas relativas ao fornecimento de bens e serviços para campanha eleitoral (Resolução nº 23.607/2019/TSE, art. 92, § 2º, I).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92, § 2º, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-01-3",
    data: "2026-09-01",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para Tribunais Eleitorais requisitarem identificação de permissionários de serviço público",
    descricao:
      "Último dia para os Tribunais Eleitorais requisitarem, por ofício, aos Poderes Executivos Estadual, Distrital e Municipal arquivo eletrônico com identificação dos permissionários de serviço público (Resolução nº 23.607/2019/TSE, art. 92-A, § 2º, I).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92-A, § 2º, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-04-1",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para partidos/federações preencherem vagas remanescentes de candidaturas proporcionais",
    descricao:
      "Último dia para que os órgãos de direção dos partidos políticos e das federações preencham as vagas remanescentes, caso a convenção não tenha indicado o número máximo de candidaturas para os cargos proporcionais, observando os percentuais mínimo e máximo para candidaturas de cada gênero (Lei nº 9.504/1997, art. 10, § 5º; e Resolução nº 23.609/2019/TSE, art. 17, § 7º).",
    categorias: ["REG", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "30 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 10, § 5º", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 17, § 7º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-04-2",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para Presidente da Junta Eleitoral comunicar nomes de escrutinadores ao TRE",
    descricao:
      "Último dia para que a(o) Presidente da Junta Eleitoral comunique à(ao) Presidente do Tribunal Regional Eleitoral os nomes de escrutinadoras, escrutinadores e auxiliares que houver designado e publique o respectivo edital, contando-se da publicação o prazo de 3 (três) dias para que o partido político, a federação ou a coligação apresente impugnação (Código Eleitoral, art. 39).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "30 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 39", url: "" },
    ],
  },

  {
    id: "2026-09-04-3",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para instalação da Comissão Especial de Transporte pelo juízo eleitoral",
    descricao:
      "Último dia para o juízo eleitoral instalar Comissão Especial de Transporte (Lei nº 6.091/1974, art. 14; e Resolução nº 9.641/1974/TSE, art. 13).",
    categorias: ["ADM", "TRA"],
    perfis: [],
    marcos: "30 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 14", url: "" },
      { norma: "Resolução nº 9.641/1974/TSE", dispositivo: "art. 13", url: "" },
    ],
  },

  {
    id: "2026-09-04-4",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para planejamento do transporte de eleitores e requisição de veículos (1T e 2T)",
    descricao:
      "Último dia para o planejamento, pela Juíza ou pelo Juiz Eleitoral, da execução do serviço de transporte de eleitoras e eleitores e para a requisição dos veículos e embarcações necessários aos órgãos ou unidades do serviço público, relativamente ao primeiro e eventual segundo turnos de votação (Lei nº 6.091/1974, art. 3º, § 2º).",
    categorias: ["ADM", "TRA"],
    perfis: [],
    marcos: "30 dias antes do 1º turno",
    turno: "AMBOS",
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 3º, § 2º", url: "" },
    ],
  },

  {
    id: "2026-09-04-5",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para o TSE convocar entidades fiscalizadoras para assinar digitalmente os sistemas eleitorais",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral, observada a data marcada para Cerimônia de Assinatura Digital e Lacração dos Sistemas, convocar as entidades fiscalizadoras, solicitando manifestação de interesse em assinar digitalmente os programas (Resolução nº 23.673/2021/TSE, art. 19, parágrafo único).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "30 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 19, parágrafo único",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-04-6",
    data: "2026-09-04",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para o TRE/DF publicar locais das Mesas Receptoras de Votos no exterior",
    descricao:
      "Último dia para o Tribunal Regional Eleitoral do Distrito Federal (TRE/DF) publicar na sua página da internet, em local de destaque e com ampla visibilidade, os locais onde funcionarão as Mesas Receptoras de Votos no exterior, mantendo-a permanentemente atualizada.",
    categorias: ["ADM"],
    perfis: ["eleitor"],
    marcos: "30 dias antes do 1º turno",
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-09-09-1",
    data: "2026-09-09",
    diaSemana: "quarta-feira",
    titulo:
      "Data-limite para entidades fiscalizadoras apresentarem certificado digital para assinar sistemas eleitorais",
    descricao:
      "Último dia, observada a data marcada para a Cerimônia de Assinatura Digital e Lacração dos Sistemas, para que as entidades fiscalizadoras que demonstraram interesse em assinar digitalmente os sistemas eleitorais com seus próprios programas de verificação, apresentem o certificado digital com o qual assinarão os programas à Secretaria de Tecnologia da Informação do Tribunal Superior Eleitoral (Resolução nº 23.673/2021/TSE, art. 22, § 1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 22, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-09-2",
    data: "2026-09-09",
    diaSemana: "quarta-feira",
    titulo:
      "Início do prazo para envio da prestação parcial de contas de campanha (até 13/09/2026)",
    descricao:
      "Data a partir da qual, até 13 (treze) de setembro de 2026, os partidos políticos, as candidatas e os candidatos deverão enviar à Justiça Eleitoral, pelo Sistema de Prestação de Contas, a prestação parcial de contas, dela constando o registro da movimentação financeira e estimável em dinheiro ocorrida desde o início da campanha até 8 (oito) de setembro de 2026, para cumprimento do disposto no inciso II do § 4º do art. 28 da Lei nº 9.504/1997 (Resolução nº 23.607/2019/TSE, art. 47, § 4º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 28, § 4º, II", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 47, § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-13-1",
    data: "2026-09-13",
    diaSemana: "domingo",
    titulo:
      "Último dia para envio da prestação parcial de contas de campanha (movimentação até 08/09)",
    descricao:
      "Último dia para que os partidos políticos, as candidatas e os candidatos enviem à Justiça Eleitoral, pelo Sistema de Prestação de Contas, a prestação parcial de contas, dela constando o registro da movimentação financeira e estimável em dinheiro ocorrida desde o início da campanha até 8 (oito) de setembro de 2026, para cumprimento do disposto no inciso II do § 4º do art. 28 da Lei nº 9.504/1997 (Resolução nº 23.607/2019/TSE, art. 47, § 4º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 28, § 4º, II", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 47, § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-14-1",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para partidos comunicarem anulação de deliberações de convenção partidária",
    descricao:
      "Último dia para os partidos políticos e as federações comunicarem à Justiça Eleitoral as anulações de deliberações dos atos decorrentes de convenção partidária, observado, quanto à escolha de novas candidatas e candidatos, o prazo de 10 (dez) dias da deliberação para a apresentação dos pedidos (Lei nº 9.504/1997, art. 7º, §§ 3º e 4º; e Resolução nº 23.609/2019/TSE, art. 8º, § 1º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 7º, §§ 3º e 4º",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 8º, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-14-2",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Data em que todos os pedidos de registro de candidaturas devem estar julgados pelas instâncias ordinárias",
    descricao:
      "Data em que todos os pedidos de registro de candidaturas, inclusive os impugnados e os respectivos recursos, devem estar julgados pelas instâncias ordinárias e publicadas as decisões (Lei nº 9.504/1997, art. 16, § 1º; e Resolução nº 23.609/2019/TSE, art. 54).",
    categorias: ["REG"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16, § 1º", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 54",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-14-3",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para pedido de substituição de candidatos para cargos majoritários e proporcionais",
    descricao:
      "Último dia para o pedido de substituição de candidatas ou de candidatos para os cargos majoritários e proporcionais, exceto se a substituição decorrer de falecimento, caso em que poderá ser efetivado após esta data, observado, em qualquer situação, inclusive anulação de convenção ou de decisão judicial que deu origem à substituição, o prazo de até 10 (dez) dias contados do fato para a apresentação do pedido (Lei nº 9.504/1997, arts. 7º, § 4º, e 13, §§ 1º e 3º; e Resolução nº 23.609/2019/TSE, art. 72 § 3º).",
    categorias: ["REG"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "arts. 7º, § 4º, e 13, §§ 1º e 3º",
        url: "",
      },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 72 § 3º",
        url: "",
      },
    ],
    destaque: true,
  },

  {
    id: "2026-09-14-4",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Data-limite para eleitores com deficiência ou de comunidades tradicionais requererem transporte especial (1T)",
    descricao:
      "Último dia para a eleitora ou o eleitor com deficiência ou com mobilidade reduzida, bem como a população de territórios indígenas, de comunidades remanescentes de quilombos e demais comunidades tradicionais, requerer, por conta própria ou por curadora ou curador, apoiadora ou apoiador, ou procuradora ou procurador, o fornecimento de transporte especial previsto na Resolução que disciplina o Programa Seu Voto Importa.",
    categorias: ["ELE", "ADM", "TRA"],
    perfis: ["eleitor"],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
    observacoes:
      "Eleitores com deficiência ou mobilidade reduzida, e populações indígenas, quilombolas e tradicionais podem solicitar transporte especial para votar até esta data.",
  },

  {
    id: "2026-09-14-5",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Data-limite para Comissão de Auditoria expedir ofício com horário/local do sorteio de urnas (1T)",
    descricao:
      "Último dia para a Comissão de Auditoria da Votação Eletrônica expedir ofício aos partidos políticos, às federações e às coligações informando o horário e o local onde será realizada a escolha ou o sorteio das seções cujas urnas serão auditadas no primeiro turno (Resolução nº 23.673/2021/TSE, art. 54, § 2º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 54, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-14-6",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Data-limite para TREs informarem, em edital, locais das auditorias de funcionamento das urnas (1T)",
    descricao:
      "Último dia para os Tribunais Regionais Eleitorais informarem, em edital e mediante divulgação nos respectivos sítios eletrônicos na internet, os locais onde serão realizadas as auditorias de funcionamento das urnas (Resolução nº 23.673/2021/TSE, art. 54, § 1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "20 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 54, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-14-7",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Data-limite para lacramento dos sistemas eleitorais — Cerimônia de Assinatura Digital e Lacração",
    descricao:
      "Data-limite para que os sistemas eleitorais e os programas de verificação desenvolvidos pelas entidades fiscalizadoras sejam lacrados, mediante apresentação, compilação, assinatura digital e guarda das mídias pelo Tribunal Superior Eleitoral em Cerimônia de Assinatura Digital e Lacração dos Sistemas, contando-se do encerramento da cerimônia o prazo de 5 (cinco) dias para as entidades fiscalizadoras impugnarem os programas a serem utilizados nas Eleições 2026 (Lei nº 9.504/1997, art. 66, §§ 2º e 3º; e Resolução nº 23.673/2021/TSE, arts. 19 e 33).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "20 dias antes do 1º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 66, §§ 2º e 3º",
        url: "",
      },
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "arts. 19 e 33",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-15-1",
    data: "2026-09-15",
    diaSemana: "terça-feira",
    titulo: "Divulgação da prestação parcial de contas de campanha na internet",
    descricao:
      "Data em que será divulgada, na internet, a prestação parcial de contas da campanha das candidatas, dos candidatos e dos partidos políticos com a indicação dos nomes, do CPF ou CNPJ das(os) doadoras(es) e dos respectivos valores doados, observadas as diretrizes para tratamento de dados pessoais da Lei nº 13.709/2018 e da Resolução nº 23.650/2021/TSE (Lei nº 9.504/1997, art. 28, § 4º, II; e Resolução nº 23.607/2019/TSE, art. 47, § 5º).",
    categorias: ["FIN"],
    perfis: [],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 28, § 4º, II", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 47, § 5º",
        url: "",
      },
      { norma: "Lei nº 13.709/2018", dispositivo: "caput", url: "" },
    ],
  },

  {
    id: "2026-09-19-1",
    data: "2026-09-19",
    diaSemana: "sábado",
    titulo:
      "Início do período de imunidade prisional de candidatos (até 06/10/2026)",
    descricao:
      "Data a partir da qual, até 6 (seis) de outubro de 2026, nenhuma candidata ou candidato poderá ser detido ou preso, salvo em flagrante delito (Código Eleitoral, art. 236, § 1º).",
    categorias: ["GAR"],
    perfis: ["candidato", "advogado"],
    marcos: "15 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 236, § 1º", url: "" },
    ],
  },

  {
    id: "2026-09-19-2",
    data: "2026-09-19",
    diaSemana: "sábado",
    titulo:
      "Data-limite para Juíza/Juiz Eleitoral requisitar servidores e instalações para transporte de eleitores",
    descricao:
      "Data-limite para a Juíza ou o Juiz Eleitoral requisitar servidoras, servidores e as instalações de órgãos da Administração Pública direta ou indireta da União, dos Estados e dos Municípios para possibilitar a execução dos serviços de transporte para o primeiro e eventual segundo turno de votação (Lei nº 6.091/1974, art. 1º, § 2º).",
    categorias: ["ADM", "TRA"],
    perfis: [],
    marcos: "15 dias antes do 1º turno",
    turno: "AMBOS",
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 1º, § 2º", url: "" },
    ],
  },

  {
    id: "2026-09-19-3",
    data: "2026-09-19",
    diaSemana: "sábado",
    titulo:
      "Divulgação do quadro geral de percursos e horários do transporte de eleitores (1T e 2T)",
    descricao:
      "Data em que deverá ser divulgado o quadro geral de percursos e horários programados para o transporte de eleitoras e de eleitores para o primeiro e eventual segundo turno de votação, contando-se da divulgação o prazo de 3 (três) dias para que os partidos políticos, as federações, as candidatas, os candidatos, as eleitoras e os eleitores apresentem reclamação (Lei nº 6.091/1974, art. 4º).",
    categorias: ["ADM", "ELE", "TRA"],
    perfis: ["eleitor"],
    marcos: "15 dias antes do 1º turno",
    turno: "AMBOS",
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 4º", url: "" },
    ],
  },

  {
    id: "2026-09-24-1",
    data: "2026-09-24",
    diaSemana: "quinta-feira",
    titulo: "TREs iniciam ações educativas sobre o que é necessário para votar",
    descricao:
      "Data a partir da qual os Tribunais Regionais Eleitorais realizarão ações para esclarecer a população sobre o que é necessário para votar, vedada a contratação de terceiros para prestação desse serviço.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "10 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-09-24-2",
    data: "2026-09-24",
    diaSemana: "quinta-feira",
    titulo:
      "Data-limite para Comissão de Auditoria definir locais dos testes de integridade com biometria (1T)",
    descricao:
      'Data-limite para a definição, pela Comissão de Auditoria da Votação Eletrônica, dos locais onde serão realizados os testes de integridade das urnas eletrônicas com biometria, para o primeiro turno (Resolução nº 23.673/2021/TSE, art. 53-C, I, "c").',
    categorias: ["FIS"],
    perfis: [],
    marcos: "10 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: 'art. 53-C, I, "c"',
        url: "",
      },
    ],
  },

  {
    id: "2026-09-28-1",
    data: "2026-09-28",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para registro de pesquisas eleitorais a serem divulgadas no dia das eleições (1T)",
    descricao:
      "Último dia para o registro, no Sistema de Registro de Pesquisas Eleitorais (PesqEle), das pesquisas de opinião pública realizadas em data anterior ao dia das eleições, para conhecimento público, relativas ao pleito ou às candidatas e candidatos, que se pretenda divulgar no dia das eleições, no horário legalmente permitido (Resolução nº 23.600/2019/TSE, art. 11).",
    categorias: ["PES"],
    perfis: ["eleitor"],
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-29-1",
    data: "2026-09-29",
    diaSemana: "terça-feira",
    titulo:
      "Início do período de imunidade prisional de eleitores (até 06/10/2026)",
    descricao:
      "Data a partir da qual, até 6 (seis) de outubro de 2026, nenhuma eleitora ou eleitor poderá ser preso ou detido, salvo em flagrante delito, ou em virtude de sentença criminal condenatória por crime inafiançável, ou por desrespeito a salvo-conduto (Código Eleitoral, art. 236, caput).",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "5 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 236, caput", url: "" },
    ],
  },

  {
    id: "2026-09-29-2",
    data: "2026-09-29",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para Juíza/Juiz Eleitoral designar horário e local para verificação dos sistemas Transportador e JE-Connect (1T)",
    descricao:
      "Último dia para a Juíza ou o Juiz Eleitoral designar horário e local para a verificação da integridade e autenticidade dos sistemas Transportador e JE-Connect instalados nos microcomputadores, no primeiro turno (Resolução nº 23.673/2021/TSE, art. 43, § 1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "5 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 43, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-09-29-3",
    data: "2026-09-29",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para presidente de partido/federação informar nomes de fiscais credenciados no exterior (1T)",
    descricao:
      "Último dia para a(o) Presidente do partido político ou da federação, a(o) representante da coligação ou outra pessoa por elas(eles) indicada informar à Juíza ou ao Juiz Eleitoral da zona responsável pelo exterior, os nomes das pessoas autorizadas a expedir as credenciais das(os) fiscais, das delegadas e dos delegados habilitados a fiscalizar os trabalhos de votação e apuração do primeiro turno das eleições, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "5 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // OUTUBRO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-10-01-1",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para propaganda eleitoral gratuita no rádio e na TV (1º turno)",
    descricao:
      "Último dia para a divulgação da propaganda eleitoral gratuita no rádio e na televisão relativa ao primeiro turno (Lei nº 9.504/1997, art. 47, caput; Código Eleitoral, art. 240, parágrafo único; e Resolução nº 23.610/2019/TSE, art. 49).",
    categorias: ["PRO"],
    perfis: ["eleitor", "candidato", "partido", "advogado"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 47, caput", url: "" },
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 240, parágrafo único",
        url: "",
      },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 49",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-01-2",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para comícios e aparelhagem de sonorização fixa (1º turno)",
    descricao:
      "Último dia para a realização de comícios e utilização de aparelhagem de sonorização fixa, entre as 8h (oito horas) e as 24h (vinte e quatro horas), com exceção do comício de encerramento da campanha, que poderá ser prorrogado por mais 2 (duas) horas (Código Eleitoral, art. 240, parágrafo único; Lei nº 9.504/1997, art. 39, § 4º; e Resolução nº 23.610/2019/TSE, arts. 5º e 15, § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 240, parágrafo único",
        url: "",
      },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 4º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 5º e 15, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-01-3",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo: "Último dia para debate no rádio e na TV (1º turno)",
    descricao:
      "Último dia para a realização de debate no rádio e na televisão, admitida sua extensão até as 7h (sete horas) do dia 2 (dois) de outubro (Resolução nº 23.610/2019/TSE, art. 46, IV).",
    categorias: ["PRO"],
    perfis: ["candidato"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 46, IV",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-01-4",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Início da vedação à publicação de conteúdos sintéticos de IA com imagem/voz de candidatos (1º turno)",
    descricao:
      "Data a partir da qual, até as 24 horas que sucedem o término do pleito, ficam vedadas a publicação e a republicação, ainda que gratuitas, bem como o impulsionamento pago de novos conteúdos sintéticos produzidos ou alterados por inteligência artificial ou por tecnologias equivalentes que utilizem imagem, voz ou manifestação de candidata ou candidato ou de pessoa pública, mesmo que rotulados e em conformidade com as demais exigências previstas no art. 9º-B da Resolução-TSE nº 23.610/2019.",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 9º-B",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-01-5",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para partido/federação comunicar nomes de fiscais para votação e apuração do 1T",
    descricao:
      "Último dia para a(o) Presidente do partido político ou da federação, a(o) representante da coligação ou outra pessoa por elas(eles) indicada comunicarem aos juízos eleitorais os nomes das pessoas autorizadas a expedir as credenciais das(os) fiscais e das delegadas e delegados habilitados a fiscalizar os trabalhos de votação, apuração e totalização do primeiro turno das eleições, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  {
    id: "2026-10-01-6",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Início do período de expedição de salvo-conduto eleitoral (até 06/10/2026)",
    descricao:
      "Data a partir da qual, até 6 (seis) de outubro de 2026, o juízo eleitoral ou a(o) Presidente da Mesa Receptora poderá expedir salvo-conduto em favor de eleitora ou de eleitor que sofrer violência moral ou física na sua liberdade de votar ou pelo fato de haver votado (Código Eleitoral, art. 235).",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 235", url: "" },
    ],
  },

  {
    id: "2026-10-01-7",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para circulação paga/impulsionada de propaganda eleitoral na internet (1º turno)",
    descricao:
      "Último dia para a circulação paga ou impulsionada de propaganda eleitoral na internet, mesmo se a contratação tiver sido realizada antes desse prazo, cabendo ao provedor de aplicação, que comercializa o impulsionamento, realizar o desligamento da veiculação de propaganda eleitoral, estendendo-se a vedação até 5 de outubro de 2026 (Resolução nº 23.610/2019/TSE, art. 29, § 11).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 29, § 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-01-8",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para TREs divulgarem pontos de transmissão de dados para o 1º turno",
    descricao:
      "Último dia para os Tribunais Regionais Eleitorais divulgarem na internet os pontos de transmissão de dados e de coleta de arquivos que funcionarão em locais distintos do local de funcionamento da Junta Eleitoral, para o primeiro turno.",
    categorias: ["ADM", "FIS"],
    perfis: [],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-01-9",
    data: "2026-10-01",
    diaSemana: "quinta-feira",
    titulo:
      "TSE divulga comunicados ao eleitorado em rádio/TV (1º e 3º de outubro)",
    descricao:
      "Data a partir da qual, até 3 (três) de outubro de 2026, o Tribunal Superior Eleitoral poderá divulgar comunicados, boletins e instruções ao eleitorado, em até 10 (dez) minutos diários requisitados às emissoras de rádio e de televisão, contínuos ou não, que poderão ser somados e usados em dias descontinuados, podendo ceder, a seu critério, parte desse tempo para utilização por Tribunal Regional Eleitoral (Lei nº 9.504/1997, art. 93; e Resolução nº 23.610/2019/TSE, art. 115).",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "3 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 115",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-02-1",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para a Justiça Eleitoral confirmar disponibilidade do transporte especial (1T)",
    descricao:
      "Último dia para a Justiça Eleitoral confirmar a disponibilidade do serviço e dos dados do transporte especial a ser fornecido à eleitora e ao eleitor com deficiência ou com mobilidade reduzida que não disponham de meios próprios que viabilizem o comparecimento aos locais de votação no primeiro turno das eleições.",
    categorias: ["ELE", "ADM", "TRA"],
    perfis: ["eleitor"],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-02-2",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para divulgação paga na imprensa escrita de propaganda eleitoral (1º turno)",
    descricao:
      "Último dia para divulgação paga, na imprensa escrita, e reprodução, na internet, de jornal impresso, de até 10 (dez) anúncios de propaganda eleitoral, por veículo, em datas diversas, para cada candidata ou candidato, no espaço máximo, por edição, de 1/8 (um oitavo) de página de jornal padrão e de 1/4 (um quarto) de página de revista ou tabloide (Lei nº 9.504/1997, art. 43, caput; e Resolução nº 23.610/2019/TSE, art. 42).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 43, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 42",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-02-3",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para publicação de edital convocando fiscais para acompanhar a Zerésima do SISTOT (1T)",
    descricao:
      "Último dia para a publicação, no Diário da Justiça Eletrônico, ou na forma estabelecida pelos tribunais eleitorais, do edital convocando as(os) representantes do Ministério Público, da Ordem dos Advogados do Brasil e as(os) fiscais, delegadas e delegados dos partidos políticos, das federações de partidos e das coligações, para acompanhar a emissão da Zerésima do Sistema de Gerenciamento da Totalização.",
    categorias: ["ADM", "FIS", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-02-4",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para audiência de verificação dos sistemas Transportador e JE-Connect (1T)",
    descricao:
      "Data-limite para a audiência destinada à verificação da integridade e autenticidade dos sistemas Transportador e JE-Connect, em computador e em dispositivo para uso no primeiro turno das eleições, a critério do juízo eleitoral, considerando a logística de deslocamento dos equipamentos (Resolução n° 23.673/2021/TSE, art. 43, caput e § 4º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 43, caput e § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-02-5",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para comunicar fiscais nas seções dos estabelecimentos penais (1T)",
    descricao:
      "Último dia para a(o) Presidente do partido político ou da federação, a(o) representante da coligação ou outra pessoa por elas(eles) indicada comunicar aos juízos eleitorais os nomes das pessoas autorizadas a fiscalizar os trabalhos de votação do primeiro turno nas seções eleitorais instaladas nos estabelecimentos penais e de internação de adolescentes, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  {
    id: "2026-10-02-6",
    data: "2026-10-02",
    diaSemana: "sexta-feira",
    titulo:
      "Início da restrição de aproximação de força armada dos locais de votação (até 05/10/2026)",
    descricao:
      "Data a partir da qual, até 5 de outubro de 2026, a força armada não poderá se aproximar do lugar da votação ou nele adentrar sem ordem judicial ou da(o) Presidente da Mesa Receptora, exceto nos estabelecimentos penais e nas unidades de internação de adolescentes, respeitado o sigilo do voto, devendo se conservar a 100m (cem metros) da seção eleitoral (Código Eleitoral, art. 141).",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "2 dias antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 141", url: "" },
    ],
  },

  {
    id: "2026-10-03-1",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Último dia para alto-falantes, carreatas, passeatas e distribuição de material gráfico (1º turno)",
    descricao:
      "Data até a qual as candidatas, os candidatos, os partidos, as federações e as coligações poderão fazer funcionar, entre as 8h (oito horas) e as 22h (vinte e duas horas), alto-falantes ou amplificadores de som, desde que distantes no mínimo 200m (duzentos metros) das sedes dos Poderes Executivo e Legislativo da União, dos Estados, do Distrito Federal e dos Municípios; das sedes dos tribunais judiciais, dos quartéis e de outros estabelecimentos militares; dos hospitais e das casas de saúde; e das escolas, das bibliotecas públicas, das igrejas e dos teatros, quando em funcionamento (Lei nº 9.504/1997, art. 39, § 3º; e Resolução nº 23.610/2019/TSE, art. 15).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 15",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-03-2",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Último dia, até 22h, para distribuição de material gráfico, caminhada, carreata ou passeata (1T)",
    descricao:
      "Último dia, até as 22h (vinte e duas horas), em que é permitido promover distribuição de material gráfico e realização de caminhada, carreata ou passeata, acompanhados ou não por carro de som ou minitrio (Lei nº 9.504/1997, art. 39, § 9º; e Resolução nº 23.610/2019/TSE, art. 16).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 9º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 16",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-03-3",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo: "Constituição da Comissão Apuradora pelo TRE",
    descricao:
      "Data até a qual o Tribunal Regional Eleitoral constituirá uma Comissão Apuradora com 3 (três) de suas membras ou seus membros, presidida por uma(um) delas(es) (Código Eleitoral, art. 199, caput).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 199, caput", url: "" },
    ],
  },

  {
    id: "2026-10-03-4",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Sorteio das seções eleitorais para auditoria da votação eletrônica no 1º turno",
    descricao:
      "Data em que a Comissão de Auditoria da Votação Eletrônica deverá promover, entre as 7h (sete horas) e as 12h (doze horas), no local e horário previamente divulgados, a escolha ou o sorteio das seções eleitorais que serão submetidas às auditorias da votação eletrônica no primeiro turno (Resolução nº 23.673/2021/TSE, art. 57).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 57",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-03-5",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Último dia para TSE publicar correspondências entre urnas e seções (1T)",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral publicar, na sua página da internet, os arquivos com as correspondências esperadas entre urna e seção e os logs do Sistema GEDAI-UE das máquinas utilizadas para geração das mídias relativas ao primeiro turno, devendo eventuais atualizações serem complementadas até as 16h (dezesseis horas) do dia da eleição, observado o horário de Brasília.",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-03-6",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Disponibilização das funcionalidades de totalização no SISTOT (a partir das 12h)",
    descricao:
      'Data em que, a partir das 12h (doze horas), as funcionalidades relativas ao gerenciamento da totalização dos resultados para o primeiro turno estarão disponíveis no SISTOT, em todas as instâncias, pelos procedimentos definidos na "Seção I - Dos Sistemas de Transmissão e Totalização" da Resolução de Atos Gerais do Processo Eleitoral de 2026.',
    categorias: ["FIS", "ADM"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-03-7",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Último dia para entidade fiscalizadora providenciar cópia do programa de verificação da urna (1T)",
    descricao:
      "Último dia para que a entidade fiscalizadora interessada em utilizar programa próprio para verificação da assinatura e do resumo digital na urna na seção eleitoral designada para auditoria no primeiro turno, providencie cópia do programa em mídia apropriada, de acordo com orientações técnicas publicadas no sítio do Tribunal Superior Eleitoral (Resolução nº 23.673/2021/TSE, art. 78, §1°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 78, § 1°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-03-8",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Verificação da integridade dos sistemas SISTOT, RecArquivos, InfoArquivos e Transportador (1T)",
    descricao:
      "Verificação da integridade e autenticidade dos sistemas de Gerenciamento da Totalização (SISTOT), Receptor de Arquivos de Urnas (RecArquivos), InfoArquivos e Transportador, na sua versão web, no Tribunal Superior Eleitoral, em horário previamente comunicado por ofício às entidades fiscalizadoras (Resolução nº 23.673/2021/TSE, art. 41, § 2°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 41, § 2°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-03-9",
    data: "2026-10-03",
    diaSemana: "sábado",
    titulo:
      "Início da proibição de transporte de armas por CAC (até 05/10/2026)",
    descricao:
      "Data a partir da qual colecionadoras, colecionadores, atiradoras, atiradores, caçadoras e caçadores ficam proibidos, em todo o território nacional, até 5 de outubro de 2026, de transportar armas e munições.",
    categorias: ["CON"],
    perfis: [],
    marcos: "1 dia antes do 1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-04-1",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo: "1º Turno das Eleições Gerais 2026 — Dia da votação",
    descricao:
      "Data em que se realizará a votação para os cargos de Presidente e Vice-Presidente da República, Governador e Vice-Governador, Senador e Suplentes, Deputado Federal e Deputado Estadual ou Distrital, por sufrágio universal e voto direto e secreto, observando-se, na seção eleitoral: a partir das 7 horas (horário de Brasília) instalação da seção eleitoral e emissão dos Relatórios Zerésima; às 8 horas início da votação; às 17 horas encerramento da votação e emissão dos boletins de urna; e a partir das 17 horas divulgação dos resultados da votação (Constituição Federal, art. 14, caput; Código Eleitoral, art. 82; e Lei nº 9.504/1997, art. 1º, parágrafo único, I, e art. 3º).",
    categorias: ["VOT"],
    perfis: ["eleitor"],
    marcos: "1º turno",
    turno: "1T",
    destaque: true,
    fundamentacao: [
      { norma: "Constituição Federal", dispositivo: "art. 14, caput", url: "" },
      { norma: "Código Eleitoral", dispositivo: "art. 82", url: "" },
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 1º, parágrafo único, I, e art. 3º",
        url: "",
      },
    ],
    observacoes:
      "Dia da votação do 1º turno. Votação ocorre das 8h às 17h (horário de Brasília). Resultados são divulgados a partir das 17h.",
  },

  {
    id: "2026-10-04-2",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Mesas Receptoras de Justificativa funcionam das 8h às 17h (1º turno)",
    descricao:
      "Data na qual funcionarão as Mesas Receptoras de Justificativa, das 8h (oito horas) às 17h (dezessete horas), horário de Brasília.",
    categorias: ["VOT", "ELE"],
    perfis: ["eleitor"],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [],
    observacoes:
      "Eleitores que não puderem comparecer para votar podem apresentar justificativa nas Mesas Receptoras de Justificativa, das 8h às 17h.",
  },

  {
    id: "2026-10-04-3",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Último dia para partido requerer cancelamento de registro de candidato expulso (1T)",
    descricao:
      "Último dia para o partido político ou a federação requerer o cancelamento do registro de candidata ou candidato expulso de seu partido, em processo no qual seja assegurada a ampla defesa, com observância das normas estatutárias (Lei nº 9.504/1997, art. 14; e Resolução nº 23.609/2019/TSE, art. 71).",
    categorias: ["REG", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 14", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 71",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-04-4",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Data-limite para arrecadação de recursos e contração de obrigações de campanha (1T)",
    descricao:
      "Data-limite para candidatas, candidatos e partidos arrecadarem recursos e contraírem obrigações, ressalvada a hipótese de arrecadação com o fim exclusivo de quitação de despesas já contraídas e não pagas até esta data (Resolução nº 23.607/2019/TSE, art. 33).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 33",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-04-5",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Teste de Integridade das Urnas Eletrônicas por amostragem (1º turno)",
    descricao:
      "Data na qual será realizado, por amostragem e em ambiente controlado, o Teste de Integridade das Urnas Eletrônicas, em cada unidade da Federação, em local público e com expressiva circulação de pessoas, designado pelo Tribunal Regional Eleitoral, no mesmo dia e horário da votação oficial (Lei nº 9.504/1997, art. 66, § 6º; e Resolução nº 23.673/2021/TSE, art. 53, I).",
    categorias: ["FIS", "VOT"],
    perfis: [],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 66, § 6º", url: "" },
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 53, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-04-6",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Teste de Integridade das Urnas com biometria de eleitores voluntários (1º turno)",
    descricao:
      "Data na qual será realizado, em todas as unidades da Federação, o Teste de Integridade das Urnas Eletrônicas com uso de biometria de eleitoras e eleitores voluntários, em ambientes próximos às respectivas seções eleitorais nos locais de votação (Lei nº 9.504/1997, art. 66, § 6º; e Resolução nº 23.673/2021/TSE, art. 53-A).",
    categorias: ["FIS", "VOT"],
    perfis: ["eleitor"],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 66, § 6º", url: "" },
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 53-A",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-04-7",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "TSE disponibiliza boletins de urna e tabelas de correspondências na internet (1T)",
    descricao:
      "Data em que o Tribunal Superior Eleitoral disponibilizará em sua página da internet os boletins de urna enviados para totalização e as tabelas de correspondências efetivadas durante todo o período em que os receber.",
    categorias: ["VOT", "FIS"],
    perfis: [],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-04-8",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Início da disponibilidade dos dados dos resultados do 1T em centro de dados do TSE (até 04/04/2028)",
    descricao:
      "Data a partir da qual, até 4 de abril de 2028, os dados dos resultados relativos ao primeiro turno das eleições estarão disponíveis em centro de dados provido pelo Tribunal Superior Eleitoral.",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-04-9",
    data: "2026-10-04",
    diaSemana: "domingo",
    titulo:
      "Suspensão do fornecimento da certidão de quitação eleitoral pela internet (a partir do 1T)",
    descricao:
      "Data a partir da qual estará suspenso o fornecimento da certidão de quitação eleitoral pela internet, pelo Sistema Elo e pelo e-Título, devendo reiniciar sua emissão até 12 de outubro.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "1º turno",
    turno: "1T",
    fundamentacao: [],
  },

  {
    id: "2026-10-05-1",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "Início do prazo para prestação de contas do 1º turno (para candidatos e partidos)",
    descricao:
      "Data a partir da qual as candidatas, os candidatos e os partidos políticos devem encaminhar à Justiça Eleitoral, via Sistema de Prestação de Contas, as prestações de contas referentes ao primeiro turno (Lei nº 9.504/1997, art. 29, III; e Resolução nº 23.607/2019/TSE, art. 49).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "1 dia após o 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 29, III", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-05-2",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "Início da propaganda sonora, comícios e material gráfico do 2º turno (após 24h do encerramento do 1T)",
    descricao:
      "Data a partir da qual, decorrido o prazo de 24 (vinte e quatro) horas do encerramento da votação, até 24 de outubro de 2026, as candidatas, os candidatos, os partidos, as federações e as coligações participantes do segundo turno poderão fazer funcionar, entre as 8h (oito horas) e as 22h (vinte e duas horas), alto-falantes ou amplificadores de som, desde que distantes no mínimo 200m (duzentos metros) das sedes dos poderes públicos; dos tribunais, quartéis e estabelecimentos militares; dos hospitais e das casas de saúde; e das escolas, das bibliotecas públicas, das igrejas e dos teatros, quando em funcionamento (Código Eleitoral, art. 240, parágrafo único; Lei nº 9.504/1997, art. 39, § 3º; e Resolução nº 23.610/2019/TSE, art. 15).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "20 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 240, parágrafo único",
        url: "",
      },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 15",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-05-3",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "TREs informam locais das auditorias de urnas do 2º turno (último dia)",
    descricao:
      "Último dia para os Tribunais Regionais Eleitorais informarem, em edital e por divulgação nos respectivos sítios eletrônicos na internet, os locais onde serão realizadas as auditorias de funcionamento das urnas relativas ao segundo turno (Resolução nº 23.673/2021/TSE, art. 54, §1°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "20 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 54, § 1°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-05-4",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "Comissão de Auditoria expede ofício informando horário/local do sorteio de urnas do 2T (último dia)",
    descricao:
      "Último dia para a Comissão de Auditoria da Votação Eletrônica expedir ofício aos partidos políticos, às federações e às coligações comunicando-os sobre o horário e o local onde será realizada a escolha ou o sorteio das seções cujas urnas serão auditadas no segundo turno (Resolução nº 23.673/2021/TSE, art. 54, §2°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "20 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 54, § 2°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-05-5",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para eleitores com deficiência requererem transporte especial para o 2º turno",
    descricao:
      "Último dia para a eleitora ou o eleitor com deficiência ou com mobilidade reduzida requerer, para o segundo turno, por conta própria ou por curadora ou curador, apoiadora ou apoiador, ou procuradora ou procurador, o fornecimento de transporte especial previsto na Resolução que disciplina o Programa Seu Voto Importa.",
    categorias: ["ELE", "ADM", "TRA"],
    perfis: ["eleitor"],
    marcos: "20 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-05-6",
    data: "2026-10-05",
    diaSemana: "segunda-feira",
    titulo:
      "Entidades fiscalizadoras podem solicitar à Justiça Eleitoral arquivos de auditoria do 1T (a partir de)",
    descricao:
      "Data a partir da qual as entidades fiscalizadoras poderão solicitar à Justiça Eleitoral arquivos de log do Transportador, do Receptor de Arquivos de Urna e do banco de dados da totalização; arquivos de imagens dos Boletins de Urnas (BUs); arquivos de Registro Digital do Voto (RDV); arquivos de log das urnas; relatório de BUs pendentes, sua motivação e respectiva decisão; relatório Resultado da Totalização emitido pelo SISTOT; arquivos de dados de votação por seção; e relatório com dados sobre o comparecimento e a abstenção em cada seção eleitoral (Resolução nº 23.673/2021/TSE, art. 46, I a VIII).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia após o 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 46, I a VIII",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-06-1",
    data: "2026-10-06",
    diaSemana: "terça-feira",
    titulo:
      "Fim do prazo de salvo-conduto eleitoral e da imunidade prisional de eleitores e candidatos (1T)",
    descricao:
      "Último dia da validade de salvo-conduto expedido por Juíza ou Juiz eleitoral ou pela(o) Presidente da Mesa Receptora em favor de eleitora ou de eleitor que sofrer violência moral ou física na sua liberdade de votar ou pelo fato de haver votado (Código Eleitoral, art. 235). Também é o término do período em que nenhuma eleitora ou eleitor, ou candidata/candidato, poderá ser preso ou detido (Código Eleitoral, art. 236, caput e § 1º).",
    categorias: ["GAR"],
    perfis: ["eleitor", "candidato", "advogado"],
    marcos: "2 dias após o 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 235", url: "" },
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 236, caput e § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-07-1",
    data: "2026-10-07",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para mesária/mesário ausente na votação apresentar justificativa (1T)",
    descricao:
      "Último dia para a mesária ou o mesário que abandonou os trabalhos durante a votação apresentar justificativa ao juízo eleitoral (Código Eleitoral, art. 124, § 4º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "3 dias após o 1º turno",
    turno: "1T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 124, § 4º", url: "" },
    ],
  },

  {
    id: "2026-10-08-1",
    data: "2026-10-08",
    diaSemana: "quinta-feira",
    titulo:
      "Início do cadastramento de Mesas Receptoras de Justificativa e alocação temporária de seções para o 2T",
    descricao:
      "Início do cadastramento de Mesas Receptoras de Justificativa e alocação temporária de seções para o segundo turno.",
    categorias: ["ADM"],
    perfis: [],
    marcos: "4 dias após o 1º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-09-1",
    data: "2026-10-09",
    diaSemana: "sexta-feira",
    titulo:
      "Início da propaganda eleitoral gratuita no rádio e na TV do 2º turno (até 23/10/2026)",
    descricao:
      "Data a partir da qual, até 23 de outubro de 2026, será veiculada propaganda eleitoral gratuita no rádio e na televisão relativa ao segundo turno (Lei nº 9.504/1997, art. 49, caput; e Resolução nº 23.610/2019/TSE, art. 60).",
    categorias: ["PRO"],
    perfis: ["eleitor", "candidato", "partido", "advogado"],
    marcos: "5 dias após o 1º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 49, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 60",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-09-2",
    data: "2026-10-09",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para empresa de auditoria encaminhar relatório conclusivo de auditoria de urnas (1T)",
    descricao:
      "Último dia para a instituição conveniada ou a empresa de auditoria encaminhar ao Tribunal Superior Eleitoral relatório conclusivo da fiscalização realizada na auditoria de funcionamento das urnas eletrônicas, relativa ao primeiro turno (Resolução nº 23.673/2021/TSE, art. 66).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "5 dias após o 1º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 66",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-10-1",
    data: "2026-10-10",
    diaSemana: "sábado",
    titulo:
      "Início da imunidade prisional de candidatos do 2T (até 27/10/2026)",
    descricao:
      "Data a partir da qual, até 27 de outubro de 2026, nenhuma candidata ou candidato que participará do segundo turno poderá ser detido ou preso, salvo em flagrante delito (Código Eleitoral, art. 236, § 1º).",
    categorias: ["GAR"],
    perfis: ["candidato", "advogado"],
    marcos: "15 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 236, § 1º", url: "" },
    ],
  },

  {
    id: "2026-10-12-1",
    data: "2026-10-12",
    diaSemana: "segunda-feira",
    titulo:
      "Data-limite para reinício da emissão de certidão de quitação pela internet (e-Título e Sistema ELO)",
    descricao:
      "Data-limite para reinício da emissão de certidão de quitação pela internet, pelo Sistema ELO e pelo e-Título.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: null,
    turno: null,
    fundamentacao: [],
  },

  {
    id: "2026-10-15-1",
    data: "2026-10-15",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para Receita Federal e secretarias de Fazenda enviarem NF-e de campanha ao TSE",
    descricao:
      "Último dia para a Secretaria da Receita Federal do Brasil e as secretarias estaduais e municipais de Fazenda encaminharem ao Tribunal Superior Eleitoral, pela internet, arquivo eletrônico com as notas fiscais eletrônicas relativas ao fornecimento de bens e serviços para campanha eleitoral emitidas desde o prazo final para o registro de candidatura até o dia da eleição (Resolução nº 23.607/2019/TSE, art. 92).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: "10 dias antes do 2º turno",
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-15-2",
    data: "2026-10-15",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para chefes de Executivos enviarem identificação de permissionários ao TSE",
    descricao:
      "Último dia para as(os) Chefes dos Poderes Executivos Federal, Estadual, Distrital e Municipal encaminharem ao Tribunal Superior Eleitoral, pela internet, arquivo eletrônico com identificação dos permissionários de serviço público, referente às permissões concedidas de 8 de setembro até 4 de outubro (Resolução nº 23.607/2019/TSE, art. 92-A, I).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: "10 dias antes do 2º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92-A, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-15-3",
    data: "2026-10-15",
    diaSemana: "quinta-feira",
    titulo:
      "Data-limite para Comissão de Auditoria definir locais dos testes de integridade com biometria (2T)",
    descricao:
      'Data-limite para a definição, pela Comissão de Auditoria da Votação Eletrônica, dos locais onde serão realizados os testes de integridade das urnas eletrônicas com biometria para o segundo turno (Resolução nº 23.673/2021/TSE, art. 53-C, I, "c").',
    categorias: ["FIS"],
    perfis: [],
    marcos: "10 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: 'art. 53-C, I, "c"',
        url: "",
      },
    ],
  },

  {
    id: "2026-10-19-1",
    data: "2026-10-19",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para registro de pesquisas eleitorais a serem divulgadas no 2º turno",
    descricao:
      "Último dia para o registro, no Sistema de Registro de Pesquisas Eleitorais (PesqEle), das pesquisas de opinião pública realizadas em data anterior ao dia do segundo turno, para conhecimento público, relativas ao pleito ou às respectivas candidatas e candidatos, que se pretenda divulgar no dia das eleições (Resolução nº 23.600/2019/TSE, art. 11).",
    categorias: ["PES"],
    perfis: ["eleitor"],
    marcos: null,
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-20-1",
    data: "2026-10-20",
    diaSemana: "terça-feira",
    titulo:
      "Início da imunidade prisional de eleitores para o 2T (até 27/10/2026)",
    descricao:
      "Data a partir da qual, até 27 de outubro de 2026, nenhuma eleitora ou eleitor poderá ser preso ou detido, salvo em flagrante delito, ou em virtude de sentença criminal condenatória por crime inafiançável, ou por desrespeito a salvo-conduto (Código Eleitoral, art. 236, caput).",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "5 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 236, caput", url: "" },
    ],
  },

  {
    id: "2026-10-20-2",
    data: "2026-10-20",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para Juíza/Juiz Eleitoral designar verificação dos sistemas Transportador e JE-Connect (2T)",
    descricao:
      "Último dia para a Juíza ou o Juiz eleitoral designar horário e local para a verificação da integridade e autenticidade dos sistemas Transportador e JE-Connect instalados nos microcomputadores, no segundo turno (Resolução nº 23.673/2021/TSE, art. 43, §1º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "5 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 43, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-20-3",
    data: "2026-10-20",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para órgão de controle interno cobrar ressarcimento do transporte oficial (sem 2T)",
    descricao:
      "Último dia, caso não haja 2º turno, para o órgão competente de controle interno cobrar o ressarcimento das despesas com o uso de transporte oficial pelo Presidente da República e sua comitiva em campanha eleitoral (Lei nº 9.504/1997, art. 76, caput e § 2º; e Resolução nº 23.735/2024/TSE, art. 18, caput e § 4º).",
    categorias: ["FIN", "CON"],
    perfis: [],
    marcos: "5 dias antes do 2º turno",
    turno: null,
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 76, caput e § 2º",
        url: "",
      },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 18, caput e § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-20-4",
    data: "2026-10-20",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para partido/federação informar fiscais credenciados no exterior (2T)",
    descricao:
      "Último dia para a(o) Presidente do partido político ou da federação, a(o) representante da coligação ou outra pessoa por elas(eles) indicada informar à Juíza ou ao Juiz eleitoral da zona responsável pelo exterior, os nomes das pessoas autorizadas a expedir as credenciais das(os) fiscais, das delegadas e dos delegados habilitados a fiscalizar os trabalhos de votação e apuração do segundo turno das eleições, se houver, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "5 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  {
    id: "2026-10-22-1",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para comícios e aparelhagem de sonorização fixa (2º turno)",
    descricao:
      "Último dia para a realização de comícios e utilização de aparelhagem de sonorização fixa, entre as 8h (oito horas) e as 24h (vinte e quatro horas), com exceção do comício de encerramento da campanha, que poderá ser prorrogado por mais 2 (duas) horas (Código Eleitoral, art. 240, parágrafo único; Lei nº 9.504/1997, art. 39, § 4º; e Resolução nº 23.610/2019/TSE, arts. 5º e 15, § 1º).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 240, parágrafo único",
        url: "",
      },
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 4º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "arts. 5º e 15, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-22-2",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Início da vedação de publicação de conteúdos sintéticos de IA com imagem/voz de candidatos (2T)",
    descricao:
      "Data a partir da qual, até as 24 horas que sucedem o término do pleito, ficam vedadas a publicação e a republicação, ainda que gratuitas, bem como o impulsionamento pago de novos conteúdos sintéticos produzidos ou alterados por inteligência artificial ou por tecnologias equivalentes que utilizem imagem, voz ou manifestação de candidata ou candidato ou de pessoa pública, mesmo que rotulados e em conformidade com as demais exigências previstas no art. 9º-B da Resolução-TSE nº 23.610/2019.",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 9º-B",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-22-3",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para circulação paga/impulsionada de propaganda na internet (2º turno)",
    descricao:
      "Último dia para a circulação paga ou impulsionada de propaganda eleitoral na internet, mesmo se a contratação tiver sido realizada antes desse prazo, cabendo ao provedor de aplicação que comercializa o impulsionamento realizar o desligamento da veiculação de propaganda eleitoral, estendendo-se a vedação até 26 de outubro (Resolução nº 23.610/2019/TSE, art. 29, § 11).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 29, § 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-22-4",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "TSE divulga comunicados ao eleitorado em rádio/TV (22 a 24 de outubro)",
    descricao:
      "Data a partir da qual, até 24 de outubro de 2026, o Tribunal Superior Eleitoral poderá divulgar comunicados, boletins e instruções ao eleitorado, em até 10 (dez) minutos diários requisitados às emissoras de rádio e de televisão, contínuos ou não, que poderão ser somados e usados em dias descontinuados, podendo ceder, a seu critério, parte desse tempo para utilização por Tribunal Regional Eleitoral (Lei nº 9.504/1997, art. 93; e Resolução nº 23.610/2019/TSE, art. 115).",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 93", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 115",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-22-5",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para TREs divulgarem pontos de transmissão de dados (2T)",
    descricao:
      "Último dia para os Tribunais Regionais Eleitorais divulgarem na internet os pontos de transmissão de dados e de coleta de arquivos que funcionarão em locais distintos do local de funcionamento da Junta Eleitoral, para o segundo turno.",
    categorias: ["ADM", "FIS"],
    perfis: [],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-22-6",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Início do período de expedição de salvo-conduto eleitoral (2T, até 27/10/2026)",
    descricao:
      "Data a partir da qual, até 27 de outubro de 2026, o juízo eleitoral ou a(o) Presidente da Mesa Receptora poderá expedir salvo-conduto em favor de eleitora ou de eleitor que sofrer violência moral ou física na sua liberdade de votar ou pelo fato de haver votado (Código Eleitoral, art. 235).",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 235", url: "" },
    ],
  },

  {
    id: "2026-10-22-7",
    data: "2026-10-22",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para partido/federação comunicar nomes de fiscais para o 2T",
    descricao:
      "Último dia para a(o) presidente do partido político ou da federação, ou a(o) representante da coligação, ou outra pessoa por elas(eles) indicada, comunicarem aos juízos eleitorais os nomes das pessoas autorizadas a expedir as credenciais das(os) fiscais e das delegadas e delegados habilitados a fiscalizar os trabalhos de votação, apuração e totalização no segundo turno das eleições, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "3 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  {
    id: "2026-10-23-1",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para Justiça Eleitoral confirmar transporte especial (2T)",
    descricao:
      "Último dia para a Justiça Eleitoral confirmar a disponibilidade do serviço e dos dados do transporte especial a ser fornecido à eleitora e ao eleitor com deficiência ou com mobilidade reduzida que não disponham de meios próprios que viabilizem o comparecimento aos locais de votação no dia da eleição em segundo turno.",
    categorias: ["ELE", "ADM", "TRA"],
    perfis: ["eleitor"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-23-2",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para propaganda eleitoral gratuita no rádio e na TV (2º turno)",
    descricao:
      "Último dia para a divulgação da propaganda eleitoral gratuita no rádio e na televisão relativa ao segundo turno (Lei nº 9.504/1997, art. 49, caput; e Resolução nº 23.610/2019/TSE, art. 60).",
    categorias: ["PRO"],
    perfis: ["eleitor", "candidato", "partido", "advogado"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 49, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 60",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-23-3",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para divulgação paga na imprensa escrita de propaganda eleitoral (2T)",
    descricao:
      "Último dia para a divulgação paga, na imprensa escrita, e a reprodução na internet do jornal impresso, de até 10 (dez) anúncios de propaganda eleitoral, por veículo, em datas diversas, para cada candidata ou candidato, no espaço máximo, por edição, de 1/8 (um oitavo) de página de jornal padrão e de 1/4 (um quarto) de página de revista ou tabloide, relativa ao segundo turno (Lei nº 9.504/1997, art. 43, caput; e Resolução nº 23.610/2019/TSE, art. 42).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 43, caput", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 42",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-23-4",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para debate no rádio e na TV — não podendo ultrapassar a meia-noite (2T)",
    descricao:
      "Último dia para a realização de debate no rádio e na televisão, não podendo ultrapassar a meia-noite (Resolução nº 23.610/2019/TSE, art. 46, IV).",
    categorias: ["PRO"],
    perfis: ["candidato"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 46, IV",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-23-5",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para publicação do edital convocando fiscais para a Zerésima do SISTOT (2T)",
    descricao:
      "Último dia para a publicação, no Diário da Justiça Eletrônico, ou na forma estabelecida pelos Tribunais Eleitorais, do edital convocando as(os) representantes do Ministério Público, da Ordem dos Advogados do Brasil e as(os) fiscais, delegadas e delegados dos partidos políticos, das federações de partidos e das coligações, para acompanhar a emissão da Zerésima do Sistema de Gerenciamento da Totalização relativa ao segundo turno.",
    categorias: ["ADM", "FIS", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-23-6",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para audiência de verificação dos sistemas Transportador e JE-Connect (2T)",
    descricao:
      "Data-limite para a audiência destinada à verificação da integridade e autenticidade dos sistemas Transportador e JE-Connect, em computador e em dispositivo para uso no segundo turno das eleições, a critério do juízo eleitoral, considerando a logística de deslocamento dos equipamentos (Resolução n° 23.673/2021/TSE, art. 43, caput e § 4º).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 43, caput e § 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-23-7",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para comunicar fiscais nas seções dos estabelecimentos penais (2T)",
    descricao:
      "Último dia para a(o) Presidente do partido político ou da federação, a(o) representante da coligação ou outra pessoa por elas(eles) indicada comunicar aos juízos eleitorais os nomes das pessoas autorizadas a fiscalizar os trabalhos de votação do segundo turno nas seções eleitorais instaladas nos estabelecimentos penais e de internação de adolescentes, juntamente com o número de telefone móvel com aplicativo de mensagens instantâneas para contato (Lei nº 9.504/1997, art. 65, § 3º).",
    categorias: ["PAR"],
    perfis: ["partido"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 65, § 3º", url: "" },
    ],
  },

  {
    id: "2026-10-23-8",
    data: "2026-10-23",
    diaSemana: "sexta-feira",
    titulo:
      "Início da restrição de aproximação de força armada dos locais de votação (2T, até 26/10)",
    descricao:
      "Data a partir da qual, até 26 de outubro de 2026, a força armada não poderá aproximar-se do lugar da votação ou nele adentrar sem ordem judicial ou da(o) Presidente da Mesa Receptora, exceto nos estabelecimentos penais e nas unidades de internação de adolescentes, respeitado o sigilo do voto, devendo se conservar a 100 m (cem metros) da seção eleitoral.",
    categorias: ["GAR"],
    perfis: ["eleitor"],
    marcos: "2 dias antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-24-1",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Último dia para alto-falantes, carreatas, passeatas e distribuição de material gráfico (2º turno)",
    descricao:
      "Último dia em que as candidatas, os candidatos, os partidos, as federações e as coligações participantes do segundo turno poderão fazer funcionar, entre as 8h (oito horas) e as 22h (vinte e duas horas), alto-falantes ou amplificadores de som, desde que distantes no mínimo a 200m (duzentos metros) das sedes dos Poderes Executivo e Legislativo da União, dos Estados, do Distrito Federal e dos Municípios; das sedes dos tribunais judiciais, dos quartéis e de outros estabelecimentos militares; dos hospitais e das casas de saúde; e das escolas, das bibliotecas públicas, das igrejas e dos teatros, quando em funcionamento (Lei nº 9.504/1997, art. 39, § 3º; e Resolução nº 23.610/2019/TSE, art. 15).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 3º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 15",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-24-2",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Último dia, até 22h, para distribuição de material gráfico, caminhada, carreata ou passeata (2T)",
    descricao:
      "Último dia, até as 22h (vinte e duas horas), em que é permitido promover distribuição de material gráfico e realização de caminhada, carreata ou passeata, acompanhados ou não por carro de som ou minitrio (Lei nº 9.504/1997, art. 39, § 9º; e Resolução nº 23.610/2019/TSE, art. 16).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido"],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 39, § 9º", url: "" },
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 16",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-24-3",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Sorteio das seções eleitorais para auditoria da votação eletrônica no 2º turno",
    descricao:
      "Data em que a Comissão de Auditoria da Votação Eletrônica deverá promover, entre as 7h (sete horas) e as 12h (doze horas), no local e horário previamente divulgados, a escolha ou o sorteio das seções eleitorais que serão submetidas às auditorias da votação eletrônica no segundo turno (Resolução nº 23.673/2021/TSE, art. 57).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 57",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-24-4",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Verificação da integridade dos sistemas SISTOT, RecArquivos, InfoArquivos e Transportador (2T)",
    descricao:
      "Verificação da integridade e autenticidade dos sistemas de Gerenciamento da Totalização (SISTOT), Receptor de Arquivos de Urnas (RecArquivos), InfoArquivos e Transportador, na sua versão web, no Tribunal Superior Eleitoral, em horário previamente comunicado por ofício às entidades fiscalizadoras (Resolução nº 23.673/2021/TSE, art. 41, § 2°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 41, § 2°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-24-5",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Início da proibição de transporte de armas por CAC (2T, até 26/10/2026)",
    descricao:
      "Data a partir da qual colecionadoras, colecionadores, atiradoras, atiradores, caçadoras e caçadores ficam proibidos, em todo o território nacional, até 26 de outubro de 2026, de transportar armas e munições.",
    categorias: ["CON"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-24-6",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Último dia para TSE publicar correspondências entre urnas e seções (2T)",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral publicar, na sua página da internet, os arquivos com as correspondências esperadas entre urna e seção e os logs do Sistema GEDAI-UE das máquinas utilizadas para geração das mídias relativas ao segundo turno, devendo eventuais atualizações serem complementadas até as 16h (dezesseis horas) do dia da eleição, observado o horário de Brasília.",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-24-7",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Último dia para entidade fiscalizadora providenciar cópia do programa de verificação da urna (2T)",
    descricao:
      "Último dia para que a entidade fiscalizadora interessada em utilizar programa próprio para verificação da assinatura e do resumo digital na urna na seção eleitoral designada para auditoria no segundo turno, providencie cópia do programa em mídia apropriada, de acordo com orientações técnicas publicadas no sítio do Tribunal Superior Eleitoral (Resolução nº 23.673/2021/TSE, art. 78, §1°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 78, § 1°",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-24-8",
    data: "2026-10-24",
    diaSemana: "sábado",
    titulo:
      "Disponibilização das funcionalidades de totalização no SISTOT (2T, a partir das 12h)",
    descricao:
      'Data em que, a partir das 12h (doze horas), as funcionalidades relativas ao gerenciamento da totalização dos resultados para o segundo turno estarão disponíveis no SISTOT, em todas as instâncias, pelos procedimentos definidos na "Seção I - Dos Sistemas de Transmissão e Totalização" da Resolução de Atos Gerais do Processo Eleitoral de 2026.',
    categorias: ["FIS", "ADM"],
    perfis: [],
    marcos: "1 dia antes do 2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-25-1",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo: "2º Turno das Eleições Gerais 2026 — Dia da votação",
    descricao:
      "Data em que se realizará a votação, em segundo turno, para os cargos de Presidente e Vice-Presidente da República e Governador e Vice-Governador, onde houver, por sufrágio universal e voto direto e secreto, observando-se, na seção eleitoral: a partir das 7 horas (horário de Brasília) instalação da seção eleitoral e emissão dos Relatórios Zerésima; às 8 horas início da votação; às 17 horas encerramento da votação e emissão dos boletins de urna; e a partir das 17 horas divulgação dos resultados da votação (Constituição Federal, arts. 14, caput; 28 e 32, §2º; Código Eleitoral, art. 82; e Lei nº 9.504/1997, art. 1º, parágrafo único, I e art. 3º).",
    categorias: ["VOT"],
    perfis: ["eleitor"],
    marcos: "2º turno",
    turno: "2T",
    destaque: true,
    fundamentacao: [
      {
        norma: "Constituição Federal",
        dispositivo: "arts. 14, caput; 28 e 32, §2º",
        url: "",
      },
      { norma: "Código Eleitoral", dispositivo: "art. 82", url: "" },
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 1º, parágrafo único, I e art. 3º",
        url: "",
      },
    ],
    observacoes:
      "Dia da votação do 2º turno. Votação ocorre das 8h às 17h (horário de Brasília). Resultados são divulgados a partir das 17h.",
  },

  {
    id: "2026-10-25-2",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo:
      "Mesas Receptoras de Justificativa funcionam das 8h às 17h (2º turno)",
    descricao:
      "Data na qual funcionarão as Mesas Receptoras de Justificativa, das 8h (oito horas) às 17h (dezessete horas), horário de Brasília.",
    categorias: ["VOT", "ELE"],
    perfis: ["eleitor"],
    marcos: "2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-25-3",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo:
      "Último dia para partido requerer cancelamento de registro de candidato do 2T expulso",
    descricao:
      "Último dia para o partido político ou federação requerer o cancelamento do registro de candidata ou candidato que concorra ao segundo turno, expulso de seu partido, em processo no qual seja assegurada ampla defesa, com observância das normas estatutárias (Lei nº 9.504/1997, art. 14; e Resolução nº 23.609/2019/TSE, art. 71).",
    categorias: ["REG", "PAR"],
    perfis: ["partido", "advogado"],
    marcos: "2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 14", url: "" },
      {
        norma: "Resolução nº 23.609/2019/TSE",
        dispositivo: "art. 71",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-25-4",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo: "Data-limite para arrecadação de recursos de campanha do 2T",
    descricao:
      "Último dia para candidatas, candidatos e partidos que disputarem o segundo turno arrecadarem recursos e contraírem obrigações, ressalvada a hipótese de arrecadação com o fim exclusivo de quitação de despesas já contraídas e não pagas até esta data (Lei nº 9.504/1997, art. 29, § 3º; e Resolução nº 23.607/2019/TSE, art. 33).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 29, § 3º", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 33",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-25-5",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo:
      "Teste de Integridade das Urnas Eletrônicas por amostragem (2º turno)",
    descricao:
      "Data na qual será realizado, por amostragem e em ambiente controlado, o Teste de Integridade das Urnas Eletrônicas, em cada unidade da Federação onde houver segundo turno, em local público e com expressiva circulação de pessoas, designado pelo Tribunal Regional Eleitoral, no mesmo dia e horário da votação oficial (Lei nº 9.504/1997, art. 66, § 6º; e Resolução nº 23.673/2021/TSE, art. 53, I).",
    categorias: ["FIS", "VOT"],
    perfis: [],
    marcos: "2º turno",
    turno: "2T",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 66, § 6º", url: "" },
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 53, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-25-6",
    data: "2026-10-25",
    diaSemana: "domingo",
    titulo: "Divulgação dos resultados do 2º turno (a partir das 17h)",
    descricao:
      "Data na qual, a partir das 17h (dezessete horas), horário de Brasília, serão divulgados os resultados da votação, incluindo os votos em branco, os nulos e as abstenções.",
    categorias: ["VOT"],
    perfis: ["eleitor"],
    marcos: "2º turno",
    turno: "2T",
    fundamentacao: [],
  },

  {
    id: "2026-10-26-1",
    data: "2026-10-26",
    diaSemana: "segunda-feira",
    titulo:
      "Entidades fiscalizadoras podem solicitar arquivos de auditoria do 2T à Justiça Eleitoral (a partir de)",
    descricao:
      "Data a partir da qual as entidades fiscalizadoras poderão solicitar à Justiça Eleitoral arquivos de log do Transportador, do Receptor de Arquivos de Urna e do banco de dados da totalização; arquivos de imagens dos Boletins de Urnas (BUs); arquivos de Registro Digital do Voto (RDV); arquivos de log das urnas; relatório de BUs que estiveram em pendência, sua motivação e respectiva decisão; relatório Resultado da Totalização emitido pelo SISTOT; arquivos de dados de votação por seção; e relatório com dados sobre o comparecimento e a abstenção em cada seção eleitoral (Resolução nº 23.673/2021/TSE, art. 46, I a VIII).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "1 dia após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 46, I a VIII",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-26-2",
    data: "2026-10-26",
    diaSemana: "segunda-feira",
    titulo:
      "Início da suspensão do fornecimento da certidão de quitação eleitoral (2T, até 02/11/2026)",
    descricao:
      "Data a partir da qual, até 2 de novembro de 2026, estará suspenso o fornecimento da certidão de quitação eleitoral pela internet, pelo Sistema Elo e pelo e-Título.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "1 dia após o 2º turno",
    turno: "POS",
    fundamentacao: [],
  },

  {
    id: "2026-10-26-3",
    data: "2026-10-26",
    diaSemana: "segunda-feira",
    titulo: "Início da prestação de contas do 2º turno",
    descricao:
      "Data a partir da qual as candidatas, os candidatos e os partidos políticos devem encaminhar à Justiça Eleitoral, via Sistema de Prestação de Contas, as prestações de contas referentes ao segundo turno (Lei nº 9.504/1997, art. 29, III; e Resolução nº 23.607/2019/TSE, art. 49).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "1 dia após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 29, III", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-26-4",
    data: "2026-10-26",
    diaSemana: "segunda-feira",
    titulo: "Publicização dos relatórios finais das pesquisas eleitorais",
    descricao:
      "Data a partir da qual, salvo determinação da Justiça Eleitoral para que haja divulgação antecipada, devem ser publicizados os relatórios finais dos resultados das pesquisas eleitorais (Resolução nº 23.600/2019/TSE, art. 2º, § 7º-B).",
    categorias: ["PES"],
    perfis: [],
    marcos: "1 dia após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.600/2019/TSE",
        dispositivo: "art. 2º, § 7º-B",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-27-1",
    data: "2026-10-27",
    diaSemana: "terça-feira",
    titulo:
      "Início do prazo para retirada do material de propaganda eleitoral gratuita das emissoras",
    descricao:
      "Data a partir da qual o material da propaganda eleitoral gratuita deverá ser retirado das emissoras, sob pena de sua destruição, contado o prazo de 60 (sessenta) dias após a respectiva divulgação (Resolução nº 23.610/2019/TSE, art. 122).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "2 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 122",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-27-2",
    data: "2026-10-27",
    diaSemana: "terça-feira",
    titulo: "Término da imunidade prisional de eleitores e candidatos (2T)",
    descricao:
      "Último dia da validade de salvo-conduto expedido por Juíza ou Juiz eleitoral ou pela(o) Presidente da Mesa Receptora em favor de eleitora ou de eleitor que sofrer violência moral ou física na sua liberdade de votar ou pelo fato de haver votado (Código Eleitoral, art. 235, parágrafo único). Também é o término do período em que nenhuma eleitora ou eleitor, ou candidata/candidato, poderá ser preso ou detido (Código Eleitoral, art. 236, caput e § 1º).",
    categorias: ["GAR"],
    perfis: ["eleitor", "candidato", "advogado"],
    marcos: "2 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 235, parágrafo único",
        url: "",
      },
      {
        norma: "Código Eleitoral",
        dispositivo: "art. 236, caput e § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-28-1",
    data: "2026-10-28",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para mesária/mesário ausente no 2T apresentar justificativa",
    descricao:
      "Último dia para a mesária ou o mesário que abandonou os trabalhos durante a votação no segundo turno apresentar justificativa ao juízo eleitoral (Código Eleitoral, art. 124, § 4º).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "3 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 124, § 4º", url: "" },
    ],
  },

  {
    id: "2026-10-30-1",
    data: "2026-10-30",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para empresa de auditoria encaminhar relatório conclusivo de auditoria de urnas (2T)",
    descricao:
      "Último dia para a instituição conveniada ou a empresa de auditoria encaminhar ao Tribunal Superior Eleitoral relatório conclusivo da fiscalização realizada na auditoria de funcionamento das urnas eletrônicas, relativa ao segundo turno (Resolução nº 23.673/2021/TSE, art. 66).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "5 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 66",
        url: "",
      },
    ],
  },

  {
    id: "2026-10-30-2",
    data: "2026-10-30",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia de prioridade dos processos eleitorais e de colaboração das polícias judiciárias e órgãos de contas",
    descricao:
      "Último dia em que os processos eleitorais terão prioridade para a participação do Ministério Público e dos juízos de todas as Justiças e instâncias, ressalvados os processos de habeas corpus e mandado de segurança (Lei nº 9.504/1997, art. 94, caput; e Resolução nº 23.608/2019/TSE, art. 61). Também é o último dia em que as polícias judiciárias, os órgãos das Receitas Federal, Estadual e Municipal, os tribunais e os órgãos de contas auxiliarão a Justiça Eleitoral na apuração dos delitos eleitorais, com prioridade sobre suas atribuições regulares (Lei nº 9.504/1997, art. 94, § 3º; e Resolução nº 23.608/2019/TSE, art. 61, § 3º).",
    categorias: ["ADM"],
    perfis: ["advogado"],
    marcos: "5 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 94, caput e § 3º",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 61 e § 3º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // NOVEMBRO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-11-03-1",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para prestação de contas referentes ao 1º turno (candidatos e partidos)",
    descricao:
      "Último dia para as candidatas, os candidatos e os partidos políticos encaminharem à Justiça Eleitoral, via Sistema de Prestação de Contas, as prestações de contas referentes ao primeiro turno (Lei nº 9.504/1997, art. 29, III; e Resolução nº 23.607/2019/TSE, art. 49).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 29, III", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-03-2",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para candidatos (exceto 2T) transferirem sobras de campanha ao partido",
    descricao:
      "Último dia para as candidatas e os candidatos, salvo os que disputaram o segundo turno, transferirem as sobras da campanha ao órgão partidário, na circunscrição do pleito, conforme a origem dos recursos e a sua filiação partidária, inclusive os créditos contratados de impulsionamento não utilizados (Lei nº 9.504/1997, art. 31, I; e Resolução nº 23.607/2019/TSE, arts. 35, § 2º, II, e 50, § 1º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 31, I", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "arts. 35, § 2º, II, e 50, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-03-3",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para candidatos (exceto 2T) transferirem saldo do FEFC ao Tesouro Nacional",
    descricao:
      "Último dia para as candidatas e os candidatos, salvo os que disputaram o segundo turno, observada a data da efetiva apresentação das contas, transferirem ao Tesouro Nacional os valores do Fundo Especial de Financiamento de Campanha (FEFC) eventualmente não utilizados, inclusive os decorrentes da alienação de bens permanentes obtidos com recursos do FEFC e os créditos contratados de impulsionamento não utilizados (Lei nº 9.504/1997, art. 16-C, § 11; Resolução nº 23.607/2019/TSE, art. 35, § 2º, I; art. 50, § 5º; e Resolução nº 23.605/2019/TSE, art. 11).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16-C, § 11", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 35, § 2º, I; art. 50, § 5º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-03-4",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para candidatos/partidos do 2T informarem doações e gastos em favor de eleitos no 1T",
    descricao:
      "Último dia para as candidatas, os candidatos e os partidos políticos que disputarem o segundo turno da eleição informarem à Justiça Eleitoral, via Sistema de Prestação de Contas, as doações e os gastos que tenham realizado em favor das candidatas e dos candidatos eleitos no primeiro turno (Resolução nº 23.607/2019/TSE, art. 49, § 2º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49, § 2º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-03-5",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para remoção de propagandas do 1T e restauração dos bens afetados",
    descricao:
      "Último dia para as candidatas, os candidatos, os partidos políticos, as federações e as coligações removerem as propagandas relativas ao primeiro turno das eleições e promoverem a restauração do bem em que afixada, se for o caso (Resolução nº 23.610/2019/TSE, art. 121).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 121",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-03-6",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para mesária/mesário faltante no 1T apresentar justificativa",
    descricao:
      "Último dia para a mesária ou o mesário que não compareceu aos trabalhos no primeiro turno apresentar justificativa ao juízo eleitoral (Código Eleitoral, art. 124).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 124", url: "" },
    ],
  },

  {
    id: "2026-11-03-7",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Reinício da emissão da certidão de quitação eleitoral (internet, Sistema Elo e e-Título)",
    descricao:
      "Reinício da emissão da certidão de quitação eleitoral pela internet, pelo Sistema Elo e pelo E-Título.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [],
  },

  {
    id: "2026-11-03-8",
    data: "2026-11-03",
    diaSemana: "terça-feira",
    titulo:
      "Reinício do atendimento a eleitores nas unidades da Justiça Eleitoral e pré-atendimento via internet",
    descricao:
      "Reinício do atendimento às eleitoras e aos eleitores nas unidades da Justiça Eleitoral. Reativação do serviço de pré-atendimento, via internet, para requerimento de alistamento, transferência e revisão.",
    categorias: ["ELE", "ADM"],
    perfis: ["eleitor"],
    marcos: "30 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [],
  },

  {
    id: "2026-11-06-1",
    data: "2026-11-06",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para a Justiça Eleitoral identificar omissos na prestação de contas do 1T",
    descricao:
      "Último dia para a Justiça Eleitoral identificar as candidatas, os candidatos e os partidos políticos que se omitiram a prestar as contas referentes ao primeiro turno (Resolução nº 23.607/2019/TSE, art. 49, § 5º).",
    categorias: ["FIN"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49, § 5º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-09-1",
    data: "2026-11-09",
    diaSemana: "segunda-feira",
    titulo:
      "Tribunais das circunscrições com 2T não mais publicarão em sessão decisões sobre propaganda e direito de resposta",
    descricao:
      "Data a partir da qual os Tribunais Eleitorais das circunscrições em que houver segundo turno não mais publicarão em sessão as decisões em representações sobre propaganda eleitoral e direito de resposta.",
    categorias: ["ADM"],
    perfis: [],
    marcos: "15 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [],
  },

  {
    id: "2026-11-09-2",
    data: "2026-11-09",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia para órgão de controle interno cobrar ressarcimento do transporte oficial (com 2T)",
    descricao:
      "Último dia para o órgão competente de controle interno da Presidência da República, caso haja segundo turno, cobrar os valores devidos nos termos dos §§ 1º ao 4º do art. 18 da Resolução nº 23.735/2024/TSE (Lei nº 9.504/1997, art. 76, § 2º).",
    categorias: ["FIN", "CON"],
    perfis: [],
    marcos: "15 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 76, § 2º", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 18, §§ 1º ao 4º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-10-1",
    data: "2026-11-10",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para Receita Federal enviar NF-e complementares (campanha de out/2026) ao TSE",
    descricao:
      "Último dia para a Secretaria da Receita Federal do Brasil e as secretarias estaduais e municipais de Fazenda encaminharem ao Tribunal Superior Eleitoral, pela internet, arquivo eletrônico complementar, contendo as notas fiscais eletrônicas relativas ao fornecimento de bens e serviços para campanha eleitoral emitidas de 5 a 31 de outubro de 2026 (Resolução nº 23.607/2019/TSE, art. 92, II).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92, II",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-10-2",
    data: "2026-11-10",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para Poderes Executivos enviarem identificação complementar de permissionários ao TSE",
    descricao:
      "Último dia para os Poderes Executivos Federal, Estadual, Distrital e Municipal encaminharem ao Tribunal Superior Eleitoral, pela internet, arquivo eletrônico complementar contendo a identificação dos permissionários de serviço público, das permissões concedidas de 5 a 31 de outubro de 2026 (Resolução nº 23.607/2019/TSE, art. 92-A, II).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92-A, II",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-14-1",
    data: "2026-11-14",
    diaSemana: "sábado",
    titulo:
      "Último dia para prestação de contas referentes ao 2º turno (candidatos e partidos)",
    descricao:
      "Último dia para as candidatas e os candidatos que concorreram no segundo turno das eleições e os partidos políticos encaminharem à Justiça Eleitoral, pelo Sistema de Prestação de Contas, as prestações de contas referentes aos dois turnos, incluindo todos os órgãos partidários que efetuaram doações ou gastos com candidaturas do segundo turno, ainda que não concorrentes (Lei nº 9.504/1997, art. 29, IV; e Resolução nº 23.607/2019/TSE, art. 49, § 1º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "20 dias após o 2º turno",
    turno: "POS",
    destaque: true,
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 29, IV", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-14-2",
    data: "2026-11-14",
    diaSemana: "sábado",
    titulo:
      "Último dia para candidatos do 2T transferirem sobras de campanha ao partido",
    descricao:
      "Último dia para as candidatas e os candidatos que disputaram o segundo turno transferirem as sobras da campanha ao órgão partidário, na circunscrição do pleito, conforme a origem dos recursos e a sua filiação partidária, inclusive os créditos contratados de impulsionamento não utilizados (Lei nº 9.504/1997, art. 31, I; e Resolução nº 23.607/2019/TSE, arts. 35, § 2º, II, e 50, § 1º).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "20 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 31, I", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "arts. 35, § 2º, II, e 50, § 1º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-14-3",
    data: "2026-11-14",
    diaSemana: "sábado",
    titulo:
      "Último dia para candidatos do 2T transferirem saldo do FEFC ao Tesouro Nacional",
    descricao:
      "Último dia para as candidatas e os candidatos que disputaram o segundo turno, observada a data da efetiva apresentação das contas, transferirem ao Tesouro Nacional os valores do Fundo Especial de Financiamento de Campanha (FEFC) eventualmente não utilizados, inclusive os decorrentes da alienação de bens permanentes obtidos com recursos do FEFC e os créditos contratados de impulsionamento não utilizados (Lei nº 9.504/1997, art. 16-C, § 11; Resolução nº 23.607/2019/TSE, arts. 35, § 2º, I, e 50, § 5º; e Resolução nº 23.605/2019/TSE, art. 11).",
    categorias: ["FIN"],
    perfis: ["candidato", "partido"],
    marcos: "20 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 16-C, § 11", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "arts. 35, § 2º, I, e 50, § 5º",
        url: "",
      },
      {
        norma: "Resolução nº 23.605/2019/TSE",
        dispositivo: "art. 11",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-17-1",
    data: "2026-11-17",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para a Justiça Eleitoral identificar omissos na prestação de contas do 2T",
    descricao:
      "Último dia para a Justiça Eleitoral identificar as candidatas, os candidatos e os partidos políticos que se omitiram a prestar as contas referentes ao segundo turno (Resolução nº 23.607/2019/TSE, art. 49, § 5º).",
    categorias: ["FIN"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 49, § 5º",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-24-1",
    data: "2026-11-24",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para remoção de propagandas do 2T e restauração dos bens afetados",
    descricao:
      "Último dia para as candidatas, os candidatos, os partidos políticos, as federações e as coligações removerem as propagandas relativas ao segundo turno das eleições e promoverem a restauração do bem em que afixada, se for o caso (Resolução nº 23.610/2019/TSE, art. 121).",
    categorias: ["PRO"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: "30 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.610/2019/TSE",
        dispositivo: "art. 121",
        url: "",
      },
    ],
  },

  {
    id: "2026-11-24-2",
    data: "2026-11-24",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para mesária/mesário faltante no 2T apresentar justificativa",
    descricao:
      "Último dia para a mesária ou o mesário que não compareceu aos trabalhos no segundo turno apresentar justificativa ao juízo eleitoral (Código Eleitoral, art. 124).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "30 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Código Eleitoral", dispositivo: "art. 124", url: "" },
    ],
  },

  {
    id: "2026-11-24-3",
    data: "2026-11-24",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para publicação dos relatórios individuais de auditoria de TREs (1T e 2T) na internet",
    descricao:
      "Data-limite para a publicação, na página da internet do Tribunal Superior Eleitoral, dos relatórios individuais de auditoria de cada Tribunal Regional Eleitoral, no primeiro e segundo turnos, elaborado pela instituição conveniada ou pela empresa de auditoria de funcionamento das urnas eletrônicas (Resolução nº 23.673/2021/TSE, art. 66, § 2°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "30 dias após o 2º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 66, § 2°",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // DEZEMBRO DE 2026
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2026-12-03-1",
    data: "2026-12-03",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para justificativa de ausência no 1º turno (60 dias após a eleição)",
    descricao:
      "Último dia para a eleitora ou o eleitor que deixou de votar no primeiro turno e que não justificou a falta no dia da eleição, apresentar, em qualquer cartório eleitoral, pelo aplicativo e-Título ou pelo serviço disponível no sítio eletrônico do Tribunal Superior Eleitoral e dos Tribunais Regionais Eleitorais, justificativa fundamentada ao juízo eleitoral (Lei nº 6.091/1974, art. 16; Resolução nº 23.659/2021/TSE, art. 126).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: "60 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 16", url: "" },
      {
        norma: "Resolução nº 23.659/2021/TSE",
        dispositivo: "art. 126",
        url: "",
      },
    ],
    observacoes:
      "Eleitores que não votaram no 1º turno e não justificaram no dia têm até esta data para apresentar justificativa no cartório eleitoral, pelo e-Título ou pelo site do TSE.",
    destaque: true,
  },

  {
    id: "2026-12-09-1",
    data: "2026-12-09",
    diaSemana: "quarta-feira",
    titulo:
      "Último dia para juízo eleitoral lançar justificativas não registradas na urna (1T e 2T) no Cadastro Eleitoral",
    descricao:
      "Último dia para o juízo eleitoral responsável pela recepção dos requerimentos de justificativa não registrados na urna no primeiro e no segundo turnos lançar as informações no Cadastro Eleitoral.",
    categorias: ["ADM", "ELE"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [],
  },

  {
    id: "2026-12-15-1",
    data: "2026-12-15",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para publicação das decisões que julgarem contas de candidatos eleitos",
    descricao:
      "Data até a qual, observada a antecedência de 3 (três) dias em relação à data da diplomação, deverão estar publicadas as decisões que julgarem as contas das candidatas e dos candidatos eleitas(os) (Lei nº 9.504/1997, art. 30, § 1º; e Resolução nº 23.607/2019/TSE, art. 78).",
    categorias: ["FIN", "DIP"],
    perfis: ["candidato", "advogado"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 30, § 1º", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 78",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-18-1",
    data: "2026-12-18",
    diaSemana: "sexta-feira",
    titulo: "Último dia para a diplomação das eleitas e dos eleitos",
    descricao: "Último dia para a diplomação das eleitas e dos eleitos.",
    categorias: ["DIP"],
    perfis: ["candidato"],
    marcos: "Diplomação",
    turno: "POS",
    destaque: true,
    fundamentacao: [],
    observacoes:
      "Cerimônia de diplomação dos candidatos eleitos nas Eleições Gerais 2026. É o ato formal que certifica a eleição.",
  },

  {
    id: "2026-12-18-2",
    data: "2026-12-18",
    diaSemana: "sexta-feira",
    titulo:
      "Data-limite para impedimento de magistrado eleitoral aparentado de candidato",
    descricao:
      "Data até a qual não poderão atuar como Juíza ou Juiz eleitoral, Juíza ou Juiz membro ou auxiliar nos tribunais ou chefe de cartório, nos processos relativos às Eleições Gerais de 2026, o cônjuge, a companheira ou companheiro e parentes consanguíneos ou afins até o segundo grau de candidata ou de candidato a cargo eletivo registrado na circunscrição (Código Eleitoral, arts. 14, § 3º e 33, § 1º; e Resolução nº 23.608/2019/TSE, arts. 56 e 57).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "Diplomação",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Código Eleitoral",
        dispositivo: "arts. 14, § 3º e 33, § 1º",
        url: "",
      },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "arts. 56 e 57",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-18-3",
    data: "2026-12-18",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para funcionamento das secretarias dos tribunais eleitorais aos sábados, domingos e feriados",
    descricao:
      "Último dia para permanecerem abertos aos sábados, domingos e feriados as secretarias dos tribunais eleitorais, observada a respectiva regulamentação (Lei Complementar nº 64/1990, art. 16).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "Diplomação",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei Complementar nº 64/1990", dispositivo: "art. 16", url: "" },
    ],
  },

  {
    id: "2026-12-18-4",
    data: "2026-12-18",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia de atuação das Juízas e dos Juízes auxiliares nos Tribunais Eleitorais",
    descricao:
      "Último dia de atuação das Juízas e dos Juízes auxiliares nos Tribunais Eleitorais (Lei nº 9.504/1997, art. 96, § 3º; e Resolução nº 23.608/2019/TSE, art. 2º, II).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "Diplomação",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 96, § 3º", url: "" },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 2º, II",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-18-5",
    data: "2026-12-18",
    diaSemana: "sexta-feira",
    titulo:
      "Fim da contagem contínua de prazos processuais eleitorais e do uso de comunicação eletrônica especial",
    descricao:
      "Data a partir da qual os prazos processuais relativos aos processos das Eleições 2026 não mais serão contados, em cartório ou secretaria ou no PJe, de forma contínua (Lei Complementar nº 64/1990, art. 16; Resolução nº 23.609/2019/TSE, art. 78; e Resolução nº 23.608/2019/TSE, art. 7º). Também é o último dia em que o mural eletrônico, as mensagens instantâneas e as mensagens eletrônicas serão utilizados para as comunicações da Justiça Eleitoral nos processos de registro de candidatura, nas representações, nas reclamações, nos pedidos de direito de resposta e nas prestações de contas; e o último dia em que, nos procedimentos referidos, a publicação dos atos judiciais será realizada em mural eletrônico e os acórdãos serão publicados em sessão de julgamento.",
    categorias: ["ADM"],
    perfis: ["advogado"],
    marcos: "Diplomação",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei Complementar nº 64/1990", dispositivo: "art. 16", url: "" },
      {
        norma: "Resolução nº 23.608/2019/TSE",
        dispositivo: "art. 7º",
        url: "",
      },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 98, caput",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-31-1",
    data: "2026-12-31",
    diaSemana: "quinta-feira",
    titulo:
      "Data-limite para bancos encerrarem contas bancárias de candidatos (Fundo Partidário e doações)",
    descricao:
      "Data-limite para os bancos encerrarem as contas bancárias das candidatas e dos candidatos destinadas à movimentação de recursos do Fundo Partidário e de doações para campanha, transferindo a totalidade do saldo existente para a conta bancária do órgão de direção da circunscrição, na forma prevista no art. 51 da Resolução nº 23.607/2019/TSE, informando o fato à Justiça Eleitoral (Resolução nº 23.607/2019/TSE, art. 12, III).",
    categorias: ["FIN", "DIP"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 12, III",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-31-2",
    data: "2026-12-31",
    diaSemana: "quinta-feira",
    titulo:
      "Data-limite para bancos encerrarem contas do FEFC e transferirem saldo ao Tesouro Nacional",
    descricao:
      "Data-limite para os bancos encerrarem as contas bancárias das candidatas, dos candidatos e dos partidos políticos destinadas à movimentação de recursos do Fundo Especial de Financiamento de Campanha (FEFC) transferindo, de forma unificada, a totalidade do saldo existente para o Tesouro Nacional, na forma prevista no art. 52 da Resolução nº 23.607/2019/TSE, informando o fato à Justiça Eleitoral (Resolução nº 23.607/2019/TSE, art. 12, IV).",
    categorias: ["FIN", "DIP"],
    perfis: ["candidato", "partido"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 12, IV",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-31-3",
    data: "2026-12-31",
    diaSemana: "quinta-feira",
    titulo:
      "Cancelamento de ofício das inscrições de candidatos na Receita Federal",
    descricao:
      "Data em que todas as inscrições das candidatas e dos candidatos na Receita Federal serão, de ofício, canceladas (Instrução Normativa Conjunta-RFB/TSE nº 2001/2020, art. 7º, I).",
    categorias: ["DIP"],
    perfis: ["candidato"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Instrução Normativa Conjunta-RFB/TSE nº 2001/2020",
        dispositivo: "art. 7º, I",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-31-4",
    data: "2026-12-31",
    diaSemana: "quinta-feira",
    titulo:
      "Última data de validade da vedação à distribuição gratuita de bens e benefícios pela Administração Pública",
    descricao:
      "Data até a qual fica proibido distribuir gratuitamente bens, valores ou benefícios por parte da Administração Pública, exceto nos casos de calamidade pública, estado de emergência ou programas sociais autorizados em lei e já em execução orçamentária no exercício anterior, casos em que o Ministério Público poderá promover o acompanhamento de sua execução financeira e administrativa (Lei nº 9.504/1997, art. 73, § 10; e Resolução nº 23.735/2024/TSE, art. 15, IX).",
    categorias: ["CON"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, § 10", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, IX",
        url: "",
      },
    ],
  },

  {
    id: "2026-12-31-5",
    data: "2026-12-31",
    diaSemana: "quinta-feira",
    titulo:
      "Fim da vedação à execução de programas sociais por entidade vinculada a candidato",
    descricao:
      "Data até a qual não poderão ser executados programas sociais por entidade nominalmente vinculada a candidata ou a candidato ou por essa ou esse mantida, ainda que autorizados em lei e já em execução orçamentária no exercício anterior (Lei nº 9.504/1997, art. 73, § 11; e Resolução nº 23.735/2024/TSE, art. 15, § 1º).",
    categorias: ["CON"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 73, § 11", url: "" },
      {
        norma: "Resolução nº 23.735/2024/TSE",
        dispositivo: "art. 15, § 1º",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // JANEIRO DE 2027
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2027-01-04-1",
    data: "2027-01-04",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia de cessão de funcionários à Justiça Eleitoral (UFs apenas com 1T)",
    descricao:
      "Último dia, nas unidades da Federação que realizaram apenas o primeiro turno das eleições, para a cessão de funcionárias e funcionários à Justiça Eleitoral, pelos órgãos e entidades da Administração Pública direta e indireta (Lei nº 9.504/1997, art. 94-A, II).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "3 meses após o 1º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 94-A, II", url: "" },
    ],
  },

  {
    id: "2027-01-07-1",
    data: "2027-01-07",
    diaSemana: "quinta-feira",
    titulo:
      "Último dia para entidades fiscalizadoras solicitarem verificação dos sistemas eleitorais após o pleito",
    descricao:
      "Último dia para as entidades fiscalizadoras solicitarem verificação dos sistemas eleitorais após o pleito, desde que relatados fatos e apresentados indícios e circunstâncias que a justifiquem (Resolução nº 23.673/2021/TSE, art. 51, § 1°).",
    categorias: ["FIS"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 51, § 1°",
        url: "",
      },
    ],
  },

  {
    id: "2027-01-08-1",
    data: "2027-01-08",
    diaSemana: "sexta-feira",
    titulo: "Último dia para justificativa de ausência no 2º turno",
    descricao:
      "Último dia para a eleitora ou o eleitor que não tenha votado no segundo turno e que não justificou a falta no dia da eleição, apresentar, em cartório eleitoral, pelo aplicativo e-Título ou pelo serviço disponível no sítio eletrônico do Tribunal Superior Eleitoral e dos Tribunais Regionais Eleitorais, justificativa ao juízo eleitoral (Lei nº 6.091/1974, art. 16; e Resolução nº 23.659/2021/TSE, art. 126).",
    categorias: ["ELE"],
    perfis: ["eleitor"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 6.091/1974", dispositivo: "art. 16", url: "" },
      {
        norma: "Resolução nº 23.659/2021/TSE",
        dispositivo: "art. 126",
        url: "",
      },
    ],
    observacoes:
      "Eleitores que não votaram no 2º turno e não justificaram no dia têm até esta data para apresentar justificativa.",
    destaque: true,
  },

  {
    id: "2027-01-12-1",
    data: "2027-01-12",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite de preservação dos meios de armazenamento dos sistemas eleitorais e cópias de segurança",
    descricao:
      "Data até a qual os meios de armazenamento de dados utilizados pelos sistemas eleitorais e as cópias de segurança dos dados, inclusive os utilizados nas auditorias e testes de integridade, permanecerão identificados e mantidos em condições apropriadas (Resolução nº 23.637/2021/TSE, art. 81).",
    categorias: ["FIS", "ADM"],
    perfis: [],
    marcos: "100 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.637/2021/TSE",
        dispositivo: "art. 81",
        url: "",
      },
    ],
  },

  {
    id: "2027-01-12-2",
    data: "2027-01-12",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite para envio da ata de encerramento dos testes de integridade das urnas ao TSE",
    descricao:
      "Data-limite para o encaminhamento, ao Tribunal Superior Eleitoral, da ata de encerramento dos trabalhos relativos aos testes de integridade das urnas eletrônicas, elaborada pela Comissão de Auditoria da Votação Eletrônica de cada Tribunal Regional Eleitoral (Resolução nº 23.673/2021/TSE, art. 72).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "100 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 72",
        url: "",
      },
    ],
  },

  {
    id: "2027-01-12-3",
    data: "2027-01-12",
    diaSemana: "terça-feira",
    titulo:
      "Último dia para entidades fiscalizadoras solicitarem arquivos de auditoria com preservação da cadeia de custódia",
    descricao:
      "Último dia para as entidades fiscalizadoras solicitarem à Justiça Eleitoral, para auditoria que demande a preservação da cadeia de custódia, relatórios e cópias dos arquivos de sistemas, incluindo: arquivos de log do GEDAI-UE; arquivos alimentadores do SISTOT; arquivos de log do Transportador; arquivos de imagens dos BUs; arquivos de RDV; arquivos de log das urnas; relatório de BUs em pendência; relatório Resultado da Totalização; arquivos de dados de votação por seção; e relatório de comparecimento e abstenção (Resolução nº 23.673/2021/TSE, art. 48).",
    categorias: ["FIS"],
    perfis: [],
    marcos: "100 dias após o 1º turno",
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "art. 48",
        url: "",
      },
    ],
  },

  {
    id: "2027-01-13-1",
    data: "2027-01-13",
    diaSemana: "terça-feira",
    titulo:
      "Início do período de remoção de lacres, formatação de mídias e manutenção das urnas eletrônicas",
    descricao:
      "Data a partir da qual os seguintes procedimentos podem ser realizados com as urnas eletrônicas utilizadas na votação e na auditoria, desde que seu conteúdo não seja objeto de exame em processo judicial: a remoção dos lacres das urnas eletrônicas; a retirada e a formatação das mídias de votação; a formatação das mídias de carga; a formatação das mídias de resultado; e a manutenção das urnas (Resolução nº 23.763/2021/TSE, arts. 72, § 3º e 81). Também a partir desta data as cédulas e as urnas de lona eventualmente utilizadas nas Eleições 2026 poderão ser respectivamente inutilizadas e deslacradas, e os seguintes procedimentos podem ser realizados desde que não sejam objeto de análise em procedimento administrativo ou processo judicial: formatação dos meios de armazenamento de dados; descarte das cópias de segurança; desinstalação dos sistemas eleitorais; e descarte dos documentos e materiais da Comissão de Auditoria (Resolução nº 23.673/2021/TSE, art. 82).",
    categorias: ["ADM", "FIS"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.673/2021/TSE",
        dispositivo: "arts. 72, § 3º, 81 e 82",
        url: "",
      },
      { norma: "Código Eleitoral", dispositivo: "art. 183, caput", url: "" },
    ],
  },

  {
    id: "2027-01-25-1",
    data: "2027-01-25",
    diaSemana: "segunda-feira",
    titulo:
      "Último dia de cessão de funcionários à Justiça Eleitoral (UFs com 2T)",
    descricao:
      "Último dia, nas unidades da Federação que realizaram segundo turno, para a cessão de funcionárias e funcionários à Justiça Eleitoral, pelos órgãos e entidades da Administração Pública direta e indireta (Lei nº 9.504/1997, art. 94-A, II).",
    categorias: ["ADM"],
    perfis: [],
    marcos: "3 meses após o 2º turno",
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 94-A, II", url: "" },
    ],
  },

  {
    id: "2027-01-31-1",
    data: "2027-01-31",
    diaSemana: "domingo",
    titulo:
      "Último dia para Receita Federal enviar NF-e de campanha (até novembro/2026) ao TSE",
    descricao:
      "Último dia para a Secretaria da Receita Federal do Brasil e as secretarias estaduais e municipais de Fazenda encaminharem ao Tribunal Superior Eleitoral, pela internet, arquivo eletrônico com as notas fiscais eletrônicas relativas ao fornecimento de bens e serviços para campanha eleitoral emitidas desde o prazo final para o registro de candidatura até o último dia do mês de novembro do ano eleitoral (Resolução nº 23.607/2019/TSE, art. 92, III).",
    categorias: ["FIN", "ADM"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 92, III",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MARÇO DE 2027
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2027-03-03-1",
    data: "2027-03-03",
    diaSemana: "quarta-feira",
    titulo:
      "Afixação do edital de cancelamento de inscrições de eleitores faltosos a três pleitos consecutivos",
    descricao:
      "Data em que deverá ser afixado o edital com divulgação do início do procedimento de cancelamento de inscrições de eleitoras e eleitores faltosos a três pleitos consecutivos.",
    categorias: ["ELE", "ADM"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [],
  },

  // ══════════════════════════════════════════════════════════════════
  // JUNHO DE 2027
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2027-06-16-1",
    data: "2027-06-16",
    diaSemana: "quarta-feira",
    titulo:
      "Data-limite para conservação da documentação de contas de campanha",
    descricao:
      "Data até a qual as candidatas, os candidatos e os partidos políticos deverão conservar a documentação relativa a suas contas, desde que não estejam pendentes de julgamento, hipótese na qual deverão conservá-la até a decisão judicial final (Lei nº 9.504/1997, art. 32; e Resolução nº 23.607/2019/TSE, art. 28).",
    categorias: ["FIN", "DIP"],
    perfis: ["candidato", "partido", "advogado"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 32", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 28",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // JULHO DE 2027
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2027-07-30-1",
    data: "2027-07-30",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para o TSE enviar consolidação de valores doados à Receita Federal",
    descricao:
      "Último dia para o Tribunal Superior Eleitoral enviar à Secretaria da Receita Federal do Brasil a consolidação das informações sobre os valores doados e apurados até 31 de dezembro de 2026 (Lei nº 9.504/1997, art. 24-C, §§ 1º e 2º; e Resolução nº 23.607/2019/TSE, art. 27, § 5º, II).",
    categorias: ["FIN"],
    perfis: [],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      {
        norma: "Lei nº 9.504/1997",
        dispositivo: "art. 24-C, §§ 1º e 2º",
        url: "",
      },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 27, § 5º, II",
        url: "",
      },
    ],
  },

  {
    id: "2027-07-30-2",
    data: "2027-07-30",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para Receita Federal comunicar ao MP indícios de excesso nas doações de campanha",
    descricao:
      "Último dia para a Secretaria da Receita Federal do Brasil comunicar ao Ministério Público os indícios de excessos quanto aos limites de doação à campanha eleitoral de 2026, após o cruzamento dos valores doados com os rendimentos da pessoa física no exercício de 2025 (Lei nº 9.504/1997, art. 24-C, § 3º; e Resolução nº 23.607/2019/TSE, art. 27, § 5º, III).",
    categorias: ["FIN"],
    perfis: ["advogado"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 24-C, § 3º", url: "" },
      {
        norma: "Resolução nº 23.607/2019/TSE",
        dispositivo: "art. 27, § 5º, III",
        url: "",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // DEZEMBRO DE 2027
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2027-12-31-1",
    data: "2027-12-31",
    diaSemana: "sexta-feira",
    titulo:
      "Último dia para o MP Eleitoral ajuizar representação por doação acima do limite legal (exercício 2025)",
    descricao:
      "Último dia para o Ministério Público Eleitoral ajuizar representação pleiteando a aplicação da penalidade prevista no art. 23 da Lei nº 9.504/1997 e de outras sanções cabíveis nos casos de doação acima do limite legal nas Eleições 2026, quanto ao que foi apurado relativamente ao exercício de 2025 (Lei nº 9.504/1997, art. 24-C, § 3º).",
    categorias: ["FIN"],
    perfis: ["advogado"],
    marcos: null,
    turno: "POS",
    fundamentacao: [
      { norma: "Lei nº 9.504/1997", dispositivo: "art. 24-C, § 3º", url: "" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // ABRIL DE 2028
  // ══════════════════════════════════════════════════════════════════

  {
    id: "2028-04-04-1",
    data: "2028-04-04",
    diaSemana: "terça-feira",
    titulo:
      "Data-limite de disponibilidade dos dados dos resultados das Eleições 2026 no TSE",
    descricao:
      "Data até a qual os dados dos resultados das Eleições 2026 estarão disponíveis em centro de dados provido pelo Tribunal Superior Eleitoral.",
    categorias: ["DIP"],
    perfis: [],
    marcos: "18 meses após o 1º turno",
    turno: "POS",
    fundamentacao: [],
  },
];
