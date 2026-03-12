import { useMemo } from "react";
import type { EventoCalendario, CategoriaID } from "../types";
import { isEventoPassado } from "../lib/utils";
import { matchesSearch } from "../lib/search";

export interface FilterState {
  ocultarPassados: boolean;
  categorias: CategoriaID[]; // [] = todas (sem filtro)
  turno: "1T" | "2T" | "POS" | null; // null = todos
  busca: string;
  mes: string | null; // "YYYY-MM" ou null = todos
  apenasFavoritos: boolean; // não serializado na URL — estado pessoal do browser
}

export const FILTRO_PADRAO: FilterState = {
  ocultarPassados: true,
  categorias: [],
  turno: null,
  busca: "",
  mes: null,
  apenasFavoritos: false,
};

/**
 * Hook que recebe todos os eventos + estado dos filtros + IDs de favoritos
 * e retorna o array filtrado.
 * Lógica combinada: passados AND categorias AND turno AND busca AND mes AND favoritos
 */
export function useFilteredEvents(
  eventos: EventoCalendario[],
  filtros: FilterState,
  favoritosIds: Set<string> = new Set(),
): EventoCalendario[] {
  return useMemo(() => {
    return eventos.filter((ev) => {
      // 1. Ocultar passados
      if (filtros.ocultarPassados && isEventoPassado(ev.data)) {
        return false;
      }

      // 2. Filtro de categorias (OR)
      if (filtros.categorias.length > 0) {
        const match = ev.categorias.some((c) => filtros.categorias.includes(c));
        if (!match) return false;
      }

      // 3. Filtro de turno
      if (filtros.turno) {
        if (filtros.turno === "POS") {
          if (ev.turno !== "POS") return false;
        } else {
          if (
            ev.turno !== filtros.turno &&
            ev.turno !== "AMBOS" &&
            ev.turno !== null
          ) {
            return false;
          }
        }
      }

      // 4. Busca textual
      if (filtros.busca) {
        const campos = [
          ev.titulo,
          ev.descricao,
          ...ev.fundamentacao.map((f) => `${f.norma} ${f.dispositivo}`),
          ev.observacoes ?? "",
        ].join(" ");

        if (!matchesSearch(campos, filtros.busca)) {
          return false;
        }
      }

      // 5. Filtro por mês
      if (filtros.mes) {
        const evMes = ev.data.substring(0, 7); // "YYYY-MM"
        if (evMes !== filtros.mes) {
          return false;
        }
      }

      // 6. Apenas favoritos
      if (filtros.apenasFavoritos && !favoritosIds.has(ev.id)) {
        return false;
      }

      return true;
    });
  }, [eventos, filtros, favoritosIds]);
}
