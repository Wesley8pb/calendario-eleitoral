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
// Os eventos de preparação de urnas são gerados a partir do cronograma da
// STIC/TRE-PB; a escala por polo vive no campo estruturado preparacaoUrnas,
// e não na descrição, para poder ser renderizada agrupada e indexada na busca.
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
    id: "2026-09-21-trepb-1",
    data: "2026-09-21",
    diaSemana: "segunda-feira",
    titulo:
      "Preparação de urnas do 1º turno — 15 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 1º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 15 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "01ª", sede: "João Pessoa", horario: "08h–18h" },
          { ze: "06ª", sede: "Itabaiana", horario: "08h–18h" },
          { ze: "55ª", sede: "Rio Tinto", horario: "08h–18h" },
          { ze: "75ª", sede: "Gurinhém", horario: "08h–18h" },
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
        nvi: "NVIPBL",
        zonas: [
          { ze: "52ª", sede: "Coremas", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 1º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-09-22-trepb-1",
    data: "2026-09-22",
    diaSemana: "terça-feira",
    titulo:
      "Preparação de urnas do 1º turno — 18 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 1º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 18 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "10ª", sede: "Guarabira", horario: "08h–18h" },
          { ze: "60ª", sede: "Jacaraú", horario: "08h–18h" },
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
          { ze: "31ª", sede: "Pombal", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 1º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-09-23-trepb-1",
    data: "2026-09-23",
    diaSemana: "quarta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 14 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 1º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 14 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "03ª", sede: "Santa Rita", horario: "08h–18h" },
          { ze: "47ª", sede: "Pirpirituba", horario: "08h–18h" },
          { ze: "57ª", sede: "Cabedelo", horario: "08h–18h" },
          { ze: "70ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "18ª", sede: "Umbuzeiro", horario: "14h–18h" },
          { ze: "22ª", sede: "São João do Cariri", horario: "14h–18h" },
          { ze: "49ª", sede: "Aroeiras", horario: "14h–18h" },
          { ze: "56ª", sede: "Juazeirinho", horario: "14h–18h" },
          { ze: "72ª", sede: "Campina Grande", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "29ª", sede: "Monteiro", horario: "08h–18h" },
          { ze: "33ª", sede: "Itaporanga", horario: "08h–18h" },
          { ze: "66ª", sede: "Piancó", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "69ª", sede: "São Bento", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 1º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-09-24-trepb-1",
    data: "2026-09-24",
    diaSemana: "quinta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 14 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 1º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 14 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
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
          { ze: "32ª", sede: "Piancó", horario: "08h–18h" },
          { ze: "51ª", sede: "Patos", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "36ª", sede: "Catolé do Rocha", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 1º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-09-25-trepb-1",
    data: "2026-09-25",
    diaSemana: "sexta-feira",
    titulo:
      "Preparação de urnas do 1º turno — 7 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 1º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 7 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "1T",
    fundamentacao: [],
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
          { ze: "38ª", sede: "Catolé do Rocha", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 1º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-10-12-trepb-1",
    data: "2026-10-12",
    diaSemana: "segunda-feira",
    titulo:
      "Preparação de urnas do 2º turno — 18 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 2º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 18 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "2T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "01ª", sede: "João Pessoa", horario: "08h–18h" },
          { ze: "06ª", sede: "Itabaiana", horario: "08h–18h" },
          { ze: "55ª", sede: "Rio Tinto", horario: "08h–18h" },
          { ze: "75ª", sede: "Gurinhém", horario: "08h–18h" },
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
          { ze: "26ª", sede: "Santa Luzia", horario: "14h–18h" },
          { ze: "27ª", sede: "Taperoá", horario: "08h–12h" },
          { ze: "30ª", sede: "Teixeira", horario: "14h–18h" },
          { ze: "32ª", sede: "Piancó", horario: "14h–18h" },
          { ze: "51ª", sede: "Patos", horario: "08h–12h" },
          { ze: "65ª", sede: "Patos", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "69ª", sede: "São Bento", horario: "07h–17h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "37ª", sede: "São João do Rio do Peixe", horario: "14h–18h" },
          { ze: "63ª", sede: "Sousa", horario: "08h–12h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 2º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-10-13-trepb-1",
    data: "2026-10-13",
    diaSemana: "terça-feira",
    titulo:
      "Preparação de urnas do 2º turno — 21 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 2º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 21 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "2T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "10ª", sede: "Guarabira", horario: "08h–18h" },
          { ze: "60ª", sede: "Jacaraú", horario: "08h–18h" },
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
          { ze: "29ª", sede: "Monteiro", horario: "14h–18h" },
          { ze: "33ª", sede: "Itaporanga", horario: "08h–12h" },
          { ze: "34ª", sede: "Princesa Isabel", horario: "14h–18h" },
          { ze: "42ª", sede: "Itaporanga", horario: "08h–12h" },
          { ze: "66ª", sede: "Piancó", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "31ª", sede: "Pombal", horario: "07h–17h" },
          { ze: "52ª", sede: "Coremas", horario: "07h–17h" },
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
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 2º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-10-14-trepb-1",
    data: "2026-10-14",
    diaSemana: "quarta-feira",
    titulo:
      "Preparação de urnas do 2º turno — 15 zonas eleitorais em 5 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 2º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 5 polos, abrangendo 15 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "2T",
    fundamentacao: [],
    preparacaoUrnas: [
      {
        nvi: "NVIJPA",
        zonas: [
          { ze: "03ª", sede: "Santa Rita", horario: "08h–18h" },
          { ze: "47ª", sede: "Pirpirituba", horario: "08h–18h" },
          { ze: "57ª", sede: "Cabedelo", horario: "08h–18h" },
          { ze: "70ª", sede: "João Pessoa", horario: "08h–18h" },
        ],
      },
      {
        nvi: "NVICGE",
        zonas: [
          { ze: "18ª", sede: "Umbuzeiro", horario: "14h–18h" },
          { ze: "22ª", sede: "São João do Cariri", horario: "14h–18h" },
          { ze: "49ª", sede: "Aroeiras", horario: "14h–18h" },
          { ze: "56ª", sede: "Juazeirinho", horario: "14h–18h" },
          { ze: "72ª", sede: "Campina Grande", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPAT",
        zonas: [
          { ze: "28ª", sede: "Patos", horario: "08h–18h" },
          { ze: "74ª", sede: "Água Branca", horario: "08h–12h" },
        ],
      },
      {
        nvi: "NVIPBL",
        zonas: [
          { ze: "36ª", sede: "Catolé do Rocha", horario: "07h–17h" },
          { ze: "38ª", sede: "Catolé do Rocha", horario: "07h–17h" },
        ],
      },
      {
        nvi: "NVICJZ",
        zonas: [
          { ze: "35ª", sede: "Sousa", horario: "08h–12h" },
          { ze: "53ª", sede: "São João do Rio do Peixe", horario: "14h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 2º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-10-15-trepb-1",
    data: "2026-10-15",
    diaSemana: "quinta-feira",
    titulo:
      "Preparação de urnas do 2º turno — 10 zonas eleitorais em 3 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 2º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 3 polos, abrangendo 10 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "2T",
    fundamentacao: [],
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
        nvi: "NVICJZ",
        zonas: [
          { ze: "68ª", sede: "Cajazeiras", horario: "08h–18h" },
        ],
      },
    ],
    documentoOrigem: {
      titulo:
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 2º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },

  {
    id: "2026-10-16-trepb-1",
    data: "2026-10-16",
    diaSemana: "sexta-feira",
    titulo:
      "Preparação de urnas do 2º turno — 4 zonas eleitorais em 2 polos (TRE-PB)",
    descricao:
      "Cronograma de preparação de urnas das Eleições 2026 — 2º turno, elaborado pela Secretaria de Tecnologia da Informação e Comunicação do Tribunal Regional Eleitoral da Paraíba.\n\n" +
      "Nesta data, a preparação ocorre simultaneamente em 2 polos, abrangendo 4 zonas eleitorais. A escala abaixo indica, para cada zona, o polo e o horário definidos no cronograma.",
    categorias: ["ADM"],
    perfis: [],
    ambito: "TRE-PB",
    marcos: null,
    turno: "2T",
    fundamentacao: [],
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
    ],
    documentoOrigem: {
      titulo:
        "Cronograma de Preparação de Urnas — Eleições 2026 (1º e 2º turnos), v2",
      unidade: "TRE-PB/STIC",
      url: "https://www.tre-pb.jus.br/eleicoes/e/arquivos/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2/@@display-file/file/cronograma_preparacao_urnas__eleicoes_2026_1_2_turno_geral-v2.pdf",
    },
    observacoes:
      "Escala do 2º turno. O documento de origem é público e traz o cronograma completo dos dois turnos.",
  },
];
