import { useState, useEffect, useCallback } from "react";
import type { CategoriaID } from "../types";
import { FILTRO_PADRAO, type FilterState } from "./useFilteredEvents";

const VALID_CATS: CategoriaID[] = [
  "ELE",
  "REG",
  "PRO",
  "FIN",
  "ADM",
  "FIS",
  "CON",
  "VOT",
  "PES",
  "DIP",
];
const VALID_TURNOS = ["1T", "2T"] as const;

function parseUrlToFilters(): FilterState {
  const params = new URLSearchParams(window.location.search);

  // Se não há nenhum parâmetro na URL, retorna padrão (ocultarPassados: true)
  if (params.toString() === "") return FILTRO_PADRAO;

  const catParam = params.get("cat");
  const categorias: CategoriaID[] = catParam
    ? catParam
        .split(",")
        .filter((c): c is CategoriaID => VALID_CATS.includes(c as CategoriaID))
    : [];

  const turnoParam = params.get("turno");
  const turno =
    turnoParam && VALID_TURNOS.includes(turnoParam as "1T" | "2T")
      ? (turnoParam as "1T" | "2T")
      : null;

  const busca = params.get("q") ?? "";

  // Default é ocultar; se o param for "mostrar", desativa o ocultar
  const passadosParam = params.get("passados");
  const ocultarPassados = passadosParam === "mostrar" ? false : true;

  // Filtro por mês (YYYY-MM)
  const mesParam = params.get("mes");
  const mes = mesParam && /^\d{4}-\d{2}$/.test(mesParam) ? mesParam : null;

  return { ocultarPassados, categorias, turno, busca, mes };
}

function filtersToUrl(filtros: FilterState): string {
  const params = new URLSearchParams();

  // Só escreve param quando o user explicitamente quer MOSTRAR passados (não-default)
  if (!filtros.ocultarPassados) params.set("passados", "mostrar");
  if (filtros.categorias.length > 0)
    params.set("cat", filtros.categorias.join(","));
  if (filtros.turno) params.set("turno", filtros.turno);
  if (filtros.busca.trim()) params.set("q", filtros.busca.trim());
  if (filtros.mes) params.set("mes", filtros.mes);

  const qs = params.toString();
  return qs ? `?${qs}` : window.location.pathname;
}

export function useUrlFilters() {
  const [filtros, setFiltrosState] = useState<FilterState>(() =>
    parseUrlToFilters(),
  );

  // Sync state → URL
  useEffect(() => {
    const newUrl = filtersToUrl(filtros);
    const currentUrl = window.location.pathname + window.location.search;
    if (newUrl !== currentUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [filtros]);

  const setFiltros = useCallback(
    (next: FilterState | ((prev: FilterState) => FilterState)) => {
      setFiltrosState(next);
    },
    [],
  );

  const limparFiltros = useCallback(() => {
    setFiltrosState(FILTRO_PADRAO);
  }, []);

  return { filtros, setFiltros, limparFiltros };
}
