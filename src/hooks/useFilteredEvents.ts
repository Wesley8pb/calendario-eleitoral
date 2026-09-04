import { useMemo } from "react";
import type { EventoCalendario, CategoriaID } from "../types";
import { isEventoPassado } from "../lib/utils";
import { camposBuscaveis, matchesSearch } from "../lib/search";

export interface FilterState {
  ocultarPassados: boolean;
  categorias: CategoriaID[]; // [] = todas (sem filtro)
  turno: "1T" | "2T" | "POS" | null; // null = todos
  busca: string;
  mes: string | null; // "YYYY-MM" ou null = todos
  ambito: "TRE-PB" | "nacional" | null; // null = todos os âmbitos
  apenasFavoritos: boolean;    // não serializado na URL — estado pessoal do browser
  apenasMeusEventos: boolean;  // não serializado na URL — estado pessoal do browser
}

export const FILTRO_PADRAO: FilterState = {
  ocultarPassados: false,
  categorias: [],
  turno: null,
  busca: "",
  mes: null,
  ambito: null,
  apenasFavoritos: false,
  apenasMeusEventos: false,
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
      const isCustom = ev.id.startsWith("custom-");

      // 0. Quando o filtro "apenasMeusEventos" está ativo, mostra só eventos customizados.
      // Caso contrário, todos os eventos (TSE + customizados) aparecem na timeline.
      if (filtros.apenasMeusEventos && !isCustom) return false;

      // 0b. Filtro de âmbito — aplica-se apenas a eventos oficiais.
      // Eventos particulares do usuário são governados por apenasMeusEventos.
      if (filtros.ambito && !isCustom) {
        if (filtros.ambito === "TRE-PB" && ev.ambito !== "TRE-PB") return false;
        if (filtros.ambito === "nacional" && ev.ambito !== undefined) return false;
      }

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
        if (!matchesSearch(camposBuscaveis(ev), filtros.busca)) {
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

      // 6. Apenas favoritos (só se não estiver em modo meus eventos)
      if (!filtros.apenasMeusEventos && filtros.apenasFavoritos && !favoritosIds.has(ev.id)) {
        return false;
      }

      return true;
    });
  }, [eventos, filtros, favoritosIds]);
}
