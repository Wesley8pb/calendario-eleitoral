import type { EventoCalendario } from "../types";
import { nviMap } from "../data/nvis";

/**
 * Normaliza texto para busca: remove acentos, caracteres de controle, lowercase, trim.
 */
export function normalizeSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // Remove caracteres de controle
    .toLowerCase()
    .trim();
}

/**
 * Verifica se o texto contém todos os termos de busca (busca AND por tokens).
 */
export function matchesSearch(text: string, query: string): boolean {
  if (!query) return true;
  const normalizedText = normalizeSearch(text);
  const tokens = normalizeSearch(query).split(/\s+/).filter(Boolean);
  return tokens.every((token) => normalizedText.includes(token));
}

/**
 * Texto indexado de um evento — tudo que a busca deve alcançar.
 *
 * Além de título, descrição, fundamentação e observações, inclui a escala de
 * preparação de urnas: o polo, o número da zona e o município-sede. É assim
 * que quem consulta procura ("Cabedelo", "57", "Patos"), e sem isso os cards
 * do cronograma do TRE-PB só apareceriam buscando por "urna".
 */
export function camposBuscaveis(evento: EventoCalendario): string {
  return [
    evento.titulo,
    evento.descricao,
    ...evento.fundamentacao.map((f) => `${f.norma} ${f.dispositivo}`),
    evento.observacoes ?? "",
    ...(evento.preparacaoUrnas ?? []).map(
      (polo) =>
        `${polo.nvi} ${nviMap[polo.nvi].cidade} ` +
        polo.zonas.map((z) => `${z.ze} ${z.sede}`).join(" "),
    ),
  ].join(" ");
}
