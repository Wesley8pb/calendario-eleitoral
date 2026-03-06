import { useMemo } from "react";
import type { EventoCalendario, Perfil } from "../types";
import { isEventoPassado, isEventoHoje } from "../lib/utils";

/**
 * Retorna os próximos N eventos futuros (incluindo hoje) filtrados pelo perfil.
 * Quando perfil = 'todos', retorna eventos independente do perfil.
 */
export function useProximosEventos(
  eventos: EventoCalendario[],
  perfil: Perfil | "todos" | "destaques",
  quantidade = 5,
): EventoCalendario[] {
  return useMemo(() => {
    return eventos
      .filter((ev) => {
        // Só eventos futuros (incluindo hoje)
        if (isEventoPassado(ev.data) && !isEventoHoje(ev.data)) return false;

        // Filtro de destaques
        if (perfil === "destaques") {
          if (!ev.destaque) return false;
        }
        // Filtro de perfil especial: "atos-preparatorios"
        else if (perfil === "atos-preparatorios") {
          if (!ev.categorias.includes("ADM")) return false;
        }
        // Filtro de perfil normal (ex: "eleitor")
        else if (perfil !== "todos") {
          // Eventos com perfis = [] são genéricos (visíveis para todos)
          // exceto se for "atos-preparatorios" (já tratado acima)
          if (ev.perfis.length > 0 && !ev.perfis.includes(perfil)) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => a.data.localeCompare(b.data))
      .slice(0, quantidade);
  }, [eventos, perfil, quantidade]);
}
