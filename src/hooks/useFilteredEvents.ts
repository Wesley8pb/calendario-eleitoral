import { useMemo } from "react";
import type { EventoCalendario, CategoriaID } from "../types";
import { isEventoPassado } from "../lib/utils";
import { matchesSearch } from "../lib/search";

export interface FilterState {
  ocultarPassados: boolean;
  categorias: CategoriaID[]; // [] = todas (sem filtro)
  turno: "1T" | "2T" | "AMBOS" | null; // null = todos
  busca: string;
  mes: string | null; // "YYYY-MM" ou null = todos
}

export const FILTRO_PADRAO: FilterState = {
  ocultarPassados: true,
  categorias: [],
  turno: null,
  busca: "",
  mes: null,
};

/**
 * Hook que recebe todos os eventos + estado dos filtros
 * e retorna o array filtrado.
 * Lógica combinada: passados AND categorias AND turno AND busca AND mes
 */
export function useFilteredEvents(
  eventos: EventoCalendario[],
  filtros: FilterState,
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
        if (filtros.turno === "AMBOS") {
          // "Todos" selecionado — não filtra
        } else {
          if (
            ev.turno !== filtros.turno &&
            ev.turno !== "AMBOS" &&
            ev.turno !== null
          ) {
            return false;
          }
          if (
            ev.turno !== null &&
            ev.turno !== filtros.turno &&
            ev.turno !== "AMBOS"
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

      return true;
    });
  }, [eventos, filtros]);
}
