/**
 * Normaliza texto para busca: remove acentos, lowercase, trim.
 */
export function normalizeSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
