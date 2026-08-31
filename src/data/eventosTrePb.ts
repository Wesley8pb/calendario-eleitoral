import type { EventoCalendario } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Eventos de âmbito regional — Tribunal Regional Eleitoral da Paraíba.
//
// Vivem em arquivo próprio, e não em eventos.ts, porque suas fontes são atos
// administrativos internos (SEI/TRE-PB) e não legislação. O teste
// tests/links-referencia.test.ts exige que toda URL presente em eventos.ts
// esteja catalogada na central pública de links de legislação, onde uma URL
// do SEI não pertence.
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
];
