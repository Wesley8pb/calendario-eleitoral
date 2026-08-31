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
  "PAR",
];
const VALID_TURNOS = ["1T", "2T", "POS"] as const;
const VALID_AMBITOS = ["TRE-PB", "nacional"] as const;

export function parseUrlToFilters(search: string): FilterState {
  const params = new URLSearchParams(search);

  // Se não há nenhum parâmetro na URL, retorna padrão (mostrar passados)
  if (params.toString() === "") return FILTRO_PADRAO;

  const catParam = params.get("cat");
  const categorias: CategoriaID[] = catParam
    ? catParam
        .split(",")
        .filter((c): c is CategoriaID => VALID_CATS.includes(c as CategoriaID))
    : [];

  const turnoParam = params.get("turno");
  const turno =
    turnoParam && VALID_TURNOS.includes(turnoParam as "1T" | "2T" | "POS")
      ? (turnoParam as "1T" | "2T" | "POS")
      : null;

  const busca = params.get("q") ?? "";

  // Default é mostrar; se o param for "ocultar", ativa o ocultar
  const passadosParam = params.get("passados");
  const ocultarPassados = passadosParam === "ocultar";

  // Filtro por mês (YYYY-MM)
  const mesParam = params.get("mes");
  const mes = mesParam && /^\d{4}-\d{2}$/.test(mesParam) ? mesParam : null;

  // Âmbito: "tre-pb" na URL → "TRE-PB" no estado
  const ambitoParam = params.get("ambito");
  const ambitoNormalizado = ambitoParam === "tre-pb" ? "TRE-PB" : ambitoParam;
  const ambito = VALID_AMBITOS.includes(
    ambitoNormalizado as (typeof VALID_AMBITOS)[number],
  )
    ? (ambitoNormalizado as (typeof VALID_AMBITOS)[number])
    : null;

  // apenasFavoritos e apenasMeusEventos nunca vêm da URL (estado pessoal do browser)
  return {
    ocultarPassados,
    categorias,
    turno,
    busca,
    mes,
    ambito,
    apenasFavoritos: false,
    apenasMeusEventos: false,
  };
}

export function filtersToUrl(filtros: FilterState, pathname: string): string {
  const params = new URLSearchParams();

  // Só escreve param quando o user explicitamente quer ocultar passados
  if (filtros.ocultarPassados) params.set("passados", "ocultar");
  if (filtros.categorias.length > 0)
    params.set("cat", filtros.categorias.join(","));
  if (filtros.turno) params.set("turno", filtros.turno);
  if (filtros.busca.trim()) params.set("q", filtros.busca.trim());
  if (filtros.mes) params.set("mes", filtros.mes);
  if (filtros.ambito)
    params.set("ambito", filtros.ambito === "TRE-PB" ? "tre-pb" : "nacional");

  const qs = params.toString();
  return qs ? `?${qs}` : pathname;
}

export function useUrlFilters() {
  const [filtros, setFiltrosState] = useState<FilterState>(() =>
    parseUrlToFilters(window.location.search),
  );

  // Sync state → URL
  useEffect(() => {
    const newUrl = filtersToUrl(filtros, window.location.pathname);
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
