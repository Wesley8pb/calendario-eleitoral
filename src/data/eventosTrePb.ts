import type { EventoCalendario } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Eventos de âmbito regional — Tribunal Regional Eleitoral da Paraíba.
//
// Vivem em arquivo próprio, e não em eventos.ts, porque suas fontes são atos
// administrativos internos (SEI/TRE-PB) e não legislação. O teste
// tests/links-referencia.test.ts exige que toda URL presente em eventos.ts
// esteja catalogada na central pública de links de legislação, onde uma URL
// do SEI não pertence.
//
// Os eventos de preparação de urnas são gerados a partir do cronograma do
// TRE-PB; a escala por polo vive no campo estruturado preparacaoUrnas, e não
// na descrição, para poder ser renderizada agrupada e indexada na busca.
//
// FONTE: Edital nº 14/2026 TRE-PB/PTRE/ASPRE (doc. SEI 2503394, CRC B735BF5C,
// processo 0007828-72.2026.6.15.8000), assinado pelo Presidente em 14/09/2026.
// Substitui a minuta (doc. SEI 2502510), da qual não diverge em nada do que o
// calendário usa — escala das 68 zonas, preâmbulo e endereços conferidos. O
// link do SEI é restrito. Os eventos de urnas não têm observacoes.
//
// SÓ O 1º TURNO. Os 5 eventos de 12 a 16/10 foram removidos em 13/09/2026:
// o edital cobre apenas o 1º turno, e manter o 2º com os dados da v2 deixaria
// os dois turnos em critérios diferentes.
//
// TRÊS MUNICÍPIOS-SEDE DIVERGEM DO CRONOGRAMA — não "corrija" de volta sem
// falar com o TRE-PB. Foram retificados por conferência do cadastro das zonas:
//
//   49ª — o cronograma grafa "AROEIRAS";     a sede é Queimadas.
//   75ª — o cronograma grafa "GURINHÉM";     a sede é Itabaiana.
//   74ª — o cronograma grafa "ÀGUA BRANCA";  o município é Água Branca.
//
// O edital não traz coluna de município: as sedes acima vêm do cadastro.
// ─────────────────────────────────────────────────────────────────────────────

export const eventosTrePb: EventoCalendario[] = [
  {
    id: "2026-09-11-trepb-1",
    data: "2026-09-11",
    diaSemana: "sexta-feira",
    titulo:
      "Prazo final para cadastramento de informações no sistema SINPLES (TRE-PB)",
    descricao:
      "Prazo final para o cadastramento, no sistema SINPLES, das informações abaixo relacionadas, essenciais para o planejamento logístico das Eleições Gerais 2026.\n\n" +
      "1. Revisão das unidades eleitorais — Solicita-se a revisão dos cadastros de PC (Polo de Contingência), PCT (Polo de Contingência e Transmissão), LAT (Local de Armazenamento Temporário) e Junta Eleitoral, no menu Manutenção > Unidades Eleitorais. Ressalta-se que os kits para uso do JE Connect em PCT são gerados a partir das informações cadastradas nesse sistema, portanto o cadastramento dos dados é fundamental.\n\n" +
      "2. Quantidade de urnas de contingência por LAT — Solicita-se a definição da quantidade de urnas de contingência por LAT, no menu Manutenção > Quantidade de Urnas de Contingência por LAT.\n\n" +
      "3. Cronograma local de votação x LAT — Solicita-se o preenchimento do cronograma de vinculação entre local de votação e LAT, no menu Manutenção > Locais de Votação.\n\n" +
      "Ressalta-se que o cumprimento do prazo é fundamental para a consistência das etapas subsequentes de preparação eleitoral.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
    documentoOrigem: {
      titulo: "Memorando-Circular nº 18/2026",
      unidade: "TRE-PB/PTRE/DG/STIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2556015&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=881cabce3a7e578521b0fd5b176ae4acce053764130f1185e66ad7bd4fa5cce6",
      restrito: true,
    },
    observacoes:
      "Destinatário: chefias das Zonas Eleitorais da Paraíba. Eventuais dúvidas devem ser encaminhadas à Coordenadoria de Eleições Informatizadas e Segurança Cibernética.",
  },

  {
    id: "2026-09-14-trepb-1",
    data: "2026-09-14",
    diaSemana: "segunda-feira",
    titulo:
      "Oficialização do SISTOT pela Zona Eleitoral (TRE-PB)",
    descricao:
      "Oficialização do SISTOT pela Zona Eleitoral.\n\n" +
      "A oficialização dos sistemas eleitorais observará cronograma técnico definido pelo Tribunal Superior Eleitoral e será realizada, em cada circunscrição, pela autoridade eleitoral ou por servidora ou servidor a quem for delegada a atribuição, utilizando-se código de acesso individualizado. A oficialização consiste em etapa técnica a partir da qual o sistema somente admite o tráfego de arquivos assinados por outros sistemas já oficializados, não se exigindo formalidade ou solenidade (Resolução nº 23.751/2026/TSE, art. 5º, caput e §§ 1º e 2º).",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 5º, caput e §§ 1º e 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "Prazo interno do TRE-PB, sem correspondente no calendário nacional. Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },

  {
    id: "2026-09-15-trepb-1",
    data: "2026-09-15",
    diaSemana: "terça-feira",
    titulo:
      "Fechamento do CAND pela SJI (TRE-PB)",
    descricao:
      "Fechamento do CAND pela SJI.\n\n" +
      "Os dados das tabelas de partidos políticos, federações e coligações concorrentes, de candidatas e candidatos aptos e de candidatas e candidatos inaptos a concorrer à eleição para cargos proporcionais, utilizados na geração das mídias, são os relativos à data do fechamento do Sistema de Candidaturas (CAND) pelo Tribunal Superior Eleitoral e pelo Tribunal Regional Eleitoral (Resolução nº 23.751/2026/TSE, art. 94, caput, I, IV e V, e § 1º).",
    categorias: ["ADM", "REG"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 94, caput, I, IV e V, e § 1º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "SJI — Secretaria Judiciária da Informação. O fechamento do CAND é a fotografia das candidaturas que vai para a urna — por isso ocorre depois de 14/09, data em que todos os pedidos de registro devem estar julgados pelas instâncias ordinárias e em que se encerra o prazo geral de substituição de candidaturas. Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },

  {
    id: "2026-09-16-trepb-1",
    data: "2026-09-16",
    diaSemana: "quarta-feira",
    titulo:
      "Emissão e certidão de conferência do relatório \"Ambiente de Votação\" pela SJI (TRE-PB)",
    descricao:
      "Emissão e certidão de conferência do relatório ambiente de votação pela SJI.\n\n" +
      "Antes da geração das mídias, a pessoa responsável pelo fechamento do Sistema de Candidaturas (CAND) do Tribunal Regional Eleitoral emitirá o relatório \"Ambiente de Votação\", pelo Sistema de Gerenciamento da Totalização (SISTOT), para a conferência dos dados a serem utilizados na preparação das urnas e na totalização de resultados, assinado pela(o) Presidente do Tribunal ou por autoridade por ela/ele designada. O relatório deverá ser anexado à Ata Geral da Eleição (Resolução nº 23.751/2026/TSE, art. 92, caput e § 2º).",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 92, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "SJI — Secretaria Judiciária da Informação. Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },

  {
    id: "2026-09-16-trepb-2",
    data: "2026-09-16",
    diaSemana: "quarta-feira",
    titulo:
      "Emissão e certidão de conferência do relatório \"Ambiente de Votação\" pela Zona Eleitoral (TRE-PB)",
    descricao:
      "Emissão e certidão de conferência do relatório ambiente de votação pela Zona Eleitoral.\n\n" +
      "Concluídos os procedimentos do caput do art. 92, a Juíza ou o Juiz Eleitoral determinará a emissão do relatório \"Ambiente de Votação\" pelo Sistema de Gerenciamento da Totalização (SISTOT) para conferência dos dados relativos ao eleitorado apto e às seções a serem instaladas em cada município de sua circunscrição, do qual constará, em anexo, a listagem de candidatas e candidatos concorrentes. Conferidos os dados relativos ao eleitorado apto e às seções eleitorais, o relatório \"Ambiente de Votação\" será assinado pela Juíza ou pelo Juiz Eleitoral, devendo constar da Ata da Junta Eleitoral (Resolução nº 23.751/2026/TSE, art. 93, caput e parágrafo único).",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 93, caput e parágrafo único",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },

  {
    id: "2026-09-17-trepb-1",
    data: "2026-09-17",
    diaSemana: "quinta-feira",
    titulo:
      "Geração de mídias pela STIC — 1º de 2 dias (TRE-PB)",
    descricao:
      "Geração de mídias pela STIC, em 17 e 18 de setembro de 2026.\n\n" +
      "Os Tribunais Regionais Eleitorais, de acordo com o planejamento estabelecido, determinarão a geração das mídias a partir dos dados das tabelas de partidos políticos, federações e coligações concorrentes; de eleitoras e eleitores; de seções com as respectivas agregações; e de candidatas e candidatos aptos e inaptos. As mídias são os dispositivos utilizados para carga da urna, votação, ativação de aplicativos de urna e gravação de resultado. A geração de mídias será feita em cerimônia pública presidida pela Juíza ou pelo Juiz Eleitoral ou por autoridade designada pelo Tribunal Regional Eleitoral, para a qual deverá ser publicado edital, com antecedência mínima de 2 (dois) dias, convocando os partidos políticos, as federações, as coligações, o Ministério Público e a Ordem dos Advogados do Brasil para acompanhamento (Resolução nº 23.751/2026/TSE, arts. 94 e 95).",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "arts. 94 e 95",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "Após o início da geração das mídias, os dados não são alterados nas urnas, salvo determinação da Presidência ou de autoridade designada, ouvida a área de tecnologia da informação (art. 94, § 3º). Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },

  {
    id: "2026-09-18-trepb-1",
    data: "2026-09-18",
    diaSemana: "sexta-feira",
    titulo:
      "Geração de mídias pela STIC — 2º de 2 dias (TRE-PB)",
    descricao:
      "Geração de mídias pela STIC, em 17 e 18 de setembro de 2026.\n\n" +
      "Os Tribunais Regionais Eleitorais, de acordo com o planejamento estabelecido, determinarão a geração das mídias a partir dos dados das tabelas de partidos políticos, federações e coligações concorrentes; de eleitoras e eleitores; de seções com as respectivas agregações; e de candidatas e candidatos aptos e inaptos. As mídias são os dispositivos utilizados para carga da urna, votação, ativação de aplicativos de urna e gravação de resultado. A geração de mídias será feita em cerimônia pública presidida pela Juíza ou pelo Juiz Eleitoral ou por autoridade designada pelo Tribunal Regional Eleitoral, para a qual deverá ser publicado edital, com antecedência mínima de 2 (dois) dias, convocando os partidos políticos, as federações, as coligações, o Ministério Público e a Ordem dos Advogados do Brasil para acompanhamento (Resolução nº 23.751/2026/TSE, arts. 94 e 95).",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "arts. 94 e 95",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    documentoOrigem: {
      titulo:
        "Despacho nº 2497253/2026 — Processo 0007829-57.2026.6.15.8000",
      unidade: "TRE-PB/STIC/AGGTIC",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=procedimento_controlar&acao_retorno=procedimento_controlar&id_procedimento=2571853&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=d001df209a8aae7b90d46db75cf33094b9c44d6ed6d45450b95f0823574d0330",
      restrito: true,
    },
    observacoes:
      "Após o início da geração das mídias, os dados não são alterados nas urnas, salvo determinação da Presidência ou de autoridade designada, ouvida a área de tecnologia da informação (art. 94, § 3º). Etapa do encadeamento técnico que antecede a preparação das urnas na Paraíba: oficialização do SISTOT (14/09) → fechamento do CAND (15/09) → conferência do relatório \"Ambiente de Votação\" (16/09) → geração de mídias (17 e 18/09) → cerimônias de preparação de urnas nos polos (a partir de 21/09).",
  },
  {
    id: "2026-09-21-trepb-1",
    data: "2026-09-21",
    diaSemana: "segunda-feira",
    titulo:
      "Preparação de urnas do 1º turno — 14 zonas eleitorais em 4 polos (TRE-PB)",
    descricao:
      "Audiência pública para a cerimônia de preparação das urnas para o 1º turno das Eleições 2026, nos Núcleos de Voto Informatizado (NVI), com as seguintes finalidades: 1) preparação, teste e lacração das urnas de votação e urnas de contingência; 2) embalagem das urnas, identificando-se a zona eleitoral, o Município e o fim a que se destinam; 3) acondicionamento das mídias de carga e de votação para contingência, individualmente, em envelopes lacrados; 4) lacração das urnas de lona, a serem utilizadas no caso de votação por cédula, depois de verificado se estão vazias.\n\n" +
      "Ficam convocados os representantes e fiscais dos partidos políticos e coligações, federações, do Ministério Público, da Ordem dos Advogados do Brasil e das demais entidades fiscalizadoras para, querendo, fazerem-se presentes neste ato solene.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 4 polos, abrangendo 14 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário previstos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 100, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "01ª", sede: "João Pessoa", horario: "08h–18h" },
          { ze: "06ª", sede: "Itabaiana", horario: "09h–18h" },
          { ze: "55ª", sede: "Rio Tinto", horario: "08h–18h" },
          { ze: "75ª", sede: "Itabaiana", horario: "09h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "11ª", sede: "Areia", horario: "08h–18h" },
          { ze: "14ª", sede: "Bananeiras", horario: "08h–18h" },
          { ze: "50ª", sede: "Pocinhos", horario: "08h–12h" },
          { ze: "58ª", sede: "Serra Branca", horario: "14h–18h" },
          { ze: "59ª", sede: "Queimadas", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "26ª", sede: "Santa Luzia", horario: "08h–18h" },
          { ze: "27ª", sede: "Taperoá", horario: "08h–18h" },
          { ze: "74ª", sede: "Água Branca", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "53ª", sede: "São João do Rio do Peixe", horario: "08h–12h" },
          { ze: "63ª", sede: "Sousa", horario: "14h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Edital nº 14/2026 — Cronograma de preparação das urnas eletrônicas do 1º turno (Processo 0007828-72.2026.6.15.8000)",
      unidade: "TRE-PB/PTRE/ASPRE",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874",
      restrito: true,
    },
  },

  {
    id: "2026-09-22-trepb-1",
    data: "2026-09-22",
    diaSemana: "terça-feira",
    titulo:
      "Preparação de urnas do 1º turno — 18 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Audiência pública para a cerimônia de preparação das urnas para o 1º turno das Eleições 2026, nos Núcleos de Voto Informatizado (NVI), com as seguintes finalidades: 1) preparação, teste e lacração das urnas de votação e urnas de contingência; 2) embalagem das urnas, identificando-se a zona eleitoral, o Município e o fim a que se destinam; 3) acondicionamento das mídias de carga e de votação para contingência, individualmente, em envelopes lacrados; 4) lacração das urnas de lona, a serem utilizadas no caso de votação por cédula, depois de verificado se estão vazias.\n\n" +
      "Ficam convocados os representantes e fiscais dos partidos políticos e coligações, federações, do Ministério Público, da Ordem dos Advogados do Brasil e das demais entidades fiscalizadoras para, querendo, fazerem-se presentes neste ato solene.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 18 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário previstos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 100, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "10ª", sede: "Guarabira", horario: "09h–18h" },
          { ze: "60ª", sede: "Jacaraú", horario: "09h–18h" },
          { ze: "61ª", sede: "Bayeux", horario: "08h–18h" },
          { ze: "64ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "09ª", sede: "Alagoa Grande", horario: "08h–12h" },
          { ze: "13ª", sede: "Alagoa Nova", horario: "08h–12h" },
          { ze: "19ª", sede: "Esperança", horario: "08h–12h" },
          { ze: "20ª", sede: "Araruna", horario: "14h–18h" },
          { ze: "23ª", sede: "Soledade", horario: "14h–18h" },
          { ze: "24ª", sede: "Cuité", horario: "14h–18h" },
          { ze: "25ª", sede: "Picuí", horario: "14h–18h" },
          { ze: "48ª", sede: "Solânea", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "34ª", sede: "Princesa Isabel", horario: "08h–18h" },
          { ze: "42ª", sede: "Itaporanga", horario: "08h–18h" },
          { ze: "65ª", sede: "Patos", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "31ª", sede: "Pombal", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "40ª", sede: "São José de Piranhas", horario: "14h–18h" },
          { ze: "41ª", sede: "Conceição", horario: "08h–12h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Edital nº 14/2026 — Cronograma de preparação das urnas eletrônicas do 1º turno (Processo 0007828-72.2026.6.15.8000)",
      unidade: "TRE-PB/PTRE/ASPRE",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874",
      restrito: true,
    },
  },

  {
    id: "2026-09-23-trepb-1",
    data: "2026-09-23",
    diaSemana: "quarta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 14 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Audiência pública para a cerimônia de preparação das urnas para o 1º turno das Eleições 2026, nos Núcleos de Voto Informatizado (NVI), com as seguintes finalidades: 1) preparação, teste e lacração das urnas de votação e urnas de contingência; 2) embalagem das urnas, identificando-se a zona eleitoral, o Município e o fim a que se destinam; 3) acondicionamento das mídias de carga e de votação para contingência, individualmente, em envelopes lacrados; 4) lacração das urnas de lona, a serem utilizadas no caso de votação por cédula, depois de verificado se estão vazias.\n\n" +
      "Ficam convocados os representantes e fiscais dos partidos políticos e coligações, federações, do Ministério Público, da Ordem dos Advogados do Brasil e das demais entidades fiscalizadoras para, querendo, fazerem-se presentes neste ato solene.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 14 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário previstos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 100, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "03ª", sede: "Santa Rita", horario: "08h–18h" },
          { ze: "47ª", sede: "Pirpirituba", horario: "09h–18h" },
          { ze: "57ª", sede: "Cabedelo", horario: "08h–18h" },
          { ze: "70ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "18ª", sede: "Umbuzeiro", horario: "14h–18h" },
          { ze: "22ª", sede: "São João do Cariri", horario: "14h–18h" },
          { ze: "49ª", sede: "Queimadas", horario: "14h–18h" },
          { ze: "56ª", sede: "Juazeirinho", horario: "14h–18h" },
          { ze: "72ª", sede: "Campina Grande", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "29ª", sede: "Monteiro", horario: "08h–18h" },
          { ze: "33ª", sede: "Itaporanga", horario: "08h–18h" },
          { ze: "66ª", sede: "Piancó", horario: "09h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "69ª", sede: "São Bento", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "37ª", sede: "São João do Rio do Peixe", horario: "08h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Edital nº 14/2026 — Cronograma de preparação das urnas eletrônicas do 1º turno (Processo 0007828-72.2026.6.15.8000)",
      unidade: "TRE-PB/PTRE/ASPRE",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874",
      restrito: true,
    },
  },

  {
    id: "2026-09-24-trepb-1",
    data: "2026-09-24",
    diaSemana: "quinta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 14 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Audiência pública para a cerimônia de preparação das urnas para o 1º turno das Eleições 2026, nos Núcleos de Voto Informatizado (NVI), com as seguintes finalidades: 1) preparação, teste e lacração das urnas de votação e urnas de contingência; 2) embalagem das urnas, identificando-se a zona eleitoral, o Município e o fim a que se destinam; 3) acondicionamento das mídias de carga e de votação para contingência, individualmente, em envelopes lacrados; 4) lacração das urnas de lona, a serem utilizadas no caso de votação por cédula, depois de verificado se estão vazias.\n\n" +
      "Ficam convocados os representantes e fiscais dos partidos políticos e coligações, federações, do Ministério Público, da Ordem dos Advogados do Brasil e das demais entidades fiscalizadoras para, querendo, fazerem-se presentes neste ato solene.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 14 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário previstos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 100, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "02ª", sede: "Santa Rita", horario: "08h–18h" },
          { ze: "44ª", sede: "Pedras de Fogo", horario: "08h–18h" },
          { ze: "73ª", sede: "Alhandra", horario: "08h–18h" },
          { ze: "76ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "08ª", sede: "Ingá", horario: "14h–18h" },
          { ze: "16ª", sede: "Campina Grande", horario: "08h–12h" },
          { ze: "43ª", sede: "Sumé", horario: "14h–18h" },
          { ze: "62ª", sede: "Boqueirão", horario: "14h–18h" },
          { ze: "67ª", sede: "Remígio", horario: "14h–18h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "30ª", sede: "Teixeira", horario: "08h–18h" },
          { ze: "32ª", sede: "Piancó", horario: "09h–18h" },
          { ze: "51ª", sede: "Patos", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "36ª", sede: "Catolé do Rocha", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "35ª", sede: "Sousa", horario: "08h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Edital nº 14/2026 — Cronograma de preparação das urnas eletrônicas do 1º turno (Processo 0007828-72.2026.6.15.8000)",
      unidade: "TRE-PB/PTRE/ASPRE",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874",
      restrito: true,
    },
  },

  {
    id: "2026-09-25-trepb-1",
    data: "2026-09-25",
    diaSemana: "sexta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 8 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Audiência pública para a cerimônia de preparação das urnas para o 1º turno das Eleições 2026, nos Núcleos de Voto Informatizado (NVI), com as seguintes finalidades: 1) preparação, teste e lacração das urnas de votação e urnas de contingência; 2) embalagem das urnas, identificando-se a zona eleitoral, o Município e o fim a que se destinam; 3) acondicionamento das mídias de carga e de votação para contingência, individualmente, em envelopes lacrados; 4) lacração das urnas de lona, a serem utilizadas no caso de votação por cédula, depois de verificado se estão vazias.\n\n" +
      "Ficam convocados os representantes e fiscais dos partidos políticos e coligações, federações, do Ministério Público, da Ordem dos Advogados do Brasil e das demais entidades fiscalizadoras para, querendo, fazerem-se presentes neste ato solene.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 8 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário previstos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [
      {
        norma: "Resolução nº 23.751/2026/TSE",
        dispositivo: "art. 100, caput e § 2º",
        url: "https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-751-de-26-de-fevereiro-de-2026",
      },
    ],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "04ª", sede: "Sapé", horario: "08h–18h" },
          { ze: "07ª", sede: "Mamanguape", horario: "08h–18h" },
          { ze: "77ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "17ª", sede: "Campina Grande", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "28ª", sede: "Patos", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "38ª", sede: "Catolé do Rocha", horario: "08h–18h" },
          { ze: "52ª", sede: "Coremas", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "68ª", sede: "Cajazeiras", horario: "08h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Edital nº 14/2026 — Cronograma de preparação das urnas eletrônicas do 1º turno (Processo 0007828-72.2026.6.15.8000)",
      unidade: "TRE-PB/PTRE/ASPRE",
      url: "https://sei.tre-pb.jus.br/sei/controlador.php?acao=procedimento_trabalhar&acao_origem=acompanhamento_listar&acao_retorno=acompanhamento_listar&id_procedimento=2571729&infra_sistema=100000100&infra_unidade_atual=193&infra_hash=833a5cf2d0f4abe904a12c2e30ac931c8b00a4fc5db630d3ecf7ca87aae34874",
      restrito: true,
    },
  },
];
