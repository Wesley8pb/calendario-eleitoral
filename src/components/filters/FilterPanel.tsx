import { useState, useEffect, useRef } from "react";
import { Filter, Search, X, CalendarDays } from "lucide-react";
import type { CategoriaID } from "../../types";
import { categorias } from "../../data/categorias";
import type { FilterState } from "../../hooks/useFilteredEvents";
import { cn } from "../../lib/utils";
import { Tooltip } from "../ui/Tooltip";

interface FilterPanelProps {
  filtros: FilterState;
  onChange: (filtros: FilterState) => void;
  onLimpar: () => void;
  totalEventos: number;
  totalFiltrados: number;
  totalPassados: number;
  mesesDisponiveis: Array<{ chave: string; label: string }>;
}

export function FilterPanel({
  filtros,
  onChange,
  onLimpar,
  totalEventos,
  totalFiltrados,
  totalPassados,
  mesesDisponiveis,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [buscaLocal, setBuscaLocal] = useState(filtros.busca);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Fechar painel com Escape e retornar foco ao FAB
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Bloquear scroll do body quando o painel está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Debounce busca
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onChange({ ...filtros, busca: buscaLocal });
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buscaLocal]);

  // Sync busca quando filtros mudam externamente (ex: limpar)
  useEffect(() => {
    if (filtros.busca !== buscaLocal) {

      setBuscaLocal(filtros.busca);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtros.busca]);

  const toggleCategoria = (catId: CategoriaID) => {
    const next = filtros.categorias.includes(catId)
      ? filtros.categorias.filter((c) => c !== catId)
      : [...filtros.categorias, catId];
    onChange({ ...filtros, categorias: next });
  };

  const hasActiveFilters =
    filtros.ocultarPassados ||
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null;

  const activeFilterCount =
    (filtros.ocultarPassados ? 1 : 0) +
    filtros.categorias.length +
    (filtros.turno !== null ? 1 : 0) +
    (filtros.busca.trim() !== "" ? 1 : 0) +
    (filtros.mes !== null ? 1 : 0);

  const closePanel = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const filterContent = (
    <div className="space-y-5">
      {/* Contagem de eventos */}
      <div className="bg-neutral-50 rounded-lg p-3 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">Eventos exibidos</span>
          <span className="text-sm font-bold text-primary-700">
            {totalFiltrados}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-500">Eventos passados</span>
          <span className="text-sm font-semibold text-neutral-400">
            {totalPassados}
          </span>
        </div>
        <div className="border-t border-neutral-200 pt-1 mt-1 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Total de eventos</span>
          <span className="text-sm font-bold text-neutral-700">
            {totalEventos}
          </span>
        </div>
      </div>

      {/* Busca textual */}
      <div>
        <label
          htmlFor="filter-search"
          className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5"
        >
          Buscar
        </label>
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            id="filter-search"
            type="text"
            value={buscaLocal}
            onChange={(e) => setBuscaLocal(e.target.value)}
            placeholder="Ex: convenção, 9.504, FEFC..."
            className="w-full pl-8 pr-8 py-2 text-sm rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          />
          {buscaLocal && (
            <Tooltip content="Limpar busca">
              <button
                onClick={() => setBuscaLocal("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                aria-label="Limpar busca"
              >
                <X size={14} />
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Filtro por Mês */}
      <div>
        <label
          htmlFor="filter-mes"
          className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5"
        >
          <CalendarDays size={12} />
          Mês
        </label>
        <select
          id="filter-mes"
          value={filtros.mes ?? ""}
          onChange={(e) =>
            onChange({ ...filtros, mes: e.target.value || null })
          }
          className={cn(
            "w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
            "transition-colors cursor-pointer appearance-none",
            filtros.mes ? "text-primary-700 font-medium" : "text-neutral-600",
          )}
        >
          <option value="">Todos os meses</option>
          {mesesDisponiveis.map((m) => (
            <option key={m.chave} value={m.chave}>
              {m.label}
            </option>
          ))}
        </select>
      </div>

      {/* Ocultar passados */}
      <div>
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <button
            role="switch"
            aria-checked={filtros.ocultarPassados}
            onClick={() =>
              onChange({
                ...filtros,
                ocultarPassados: !filtros.ocultarPassados,
              })
            }
            className={cn(
              "relative inline-flex h-5 w-9 items-center rounded-full transition-colors",
              filtros.ocultarPassados ? "bg-primary-700" : "bg-neutral-200",
            )}
          >
            <span
              className={cn(
                "inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform",
                filtros.ocultarPassados ? "translate-x-4.5" : "translate-x-0.5",
              )}
            />
          </button>
          <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
            Ocultar eventos passados
          </span>
        </label>
      </div>

      {/* Categorias */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Categorias
        </p>
        <div className="flex flex-wrap gap-1.5">
          {categorias.map((cat) => {
            const isActive = filtros.categorias.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategoria(cat.id)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  isActive
                    ? "text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                )}
                style={isActive ? { backgroundColor: cat.cor } : undefined}
                title={cat.descricao}
              >
                {cat.nome}
              </button>
            );
          })}
        </div>
      </div>

      {/* Turno */}
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
          Turno
        </p>
        <div className="flex gap-1.5">
          {([null, "1T", "2T", "POS"] as const).map((t) => {
            const label =
              t === null
                ? "Todos"
                : t === "1T"
                  ? "1º Turno"
                  : t === "2T"
                    ? "2º Turno"
                    : "Pós-eleição";
            const isActive = filtros.turno === t;
            return (
              <button
                key={t ?? "todos"}
                onClick={() => onChange({ ...filtros, turno: t })}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  isActive
                    ? "bg-primary-700 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Limpar filtros */}
      {hasActiveFilters && (
        <button
          onClick={onLimpar}
          className="w-full text-center text-xs font-medium text-primary-700 hover:text-primary-900 py-2 rounded-lg hover:bg-primary-100/50 transition-colors"
        >
          ✕ Limpar todos os filtros
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* FAB — todos os dispositivos, bottom-left */}
      <Tooltip content="Abrir filtros">
        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className={cn(
            "fixed bottom-6 left-6 z-40",
            "flex items-center gap-2 rounded-full px-4 py-3 shadow-lg",
            "bg-primary-700 text-white hover:bg-primary-900 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            "min-h-[44px]",
          )}
          aria-label={`Abrir filtros${activeFilterCount > 0 ? ` (${activeFilterCount} ativos)` : ""}`}
        >
          <Filter size={18} />
          <span className="text-sm font-medium">Filtros</span>
          {activeFilterCount > 0 && (
            <span className="bg-white text-primary-700 text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </Tooltip>

      {/* Backdrop + Painel (bottom sheet no mobile, drawer direito no desktop) */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={closePanel}
          />

          {/* Painel responsivo */}
          <div
            className={cn(
              "fixed z-50 bg-white shadow-2xl overflow-y-auto",
              // Mobile: bottom sheet
              "inset-x-0 bottom-0 rounded-t-2xl max-h-[85vh] animate-slide-up",
              // Desktop: right drawer
              "lg:inset-y-0 lg:right-0 lg:left-auto lg:bottom-auto lg:rounded-t-none lg:rounded-l-2xl lg:w-96 lg:max-h-full lg:animate-slide-in-right",
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-panel-title"
          >
            {/* Header sticky */}
            <div className="sticky top-0 bg-white border-b border-neutral-100 px-4 py-3 flex items-center justify-between z-10 rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-primary-700" />
                <h2
                  id="filter-panel-title"
                  className="text-sm font-bold text-neutral-700"
                >
                  Filtros
                </h2>
                {hasActiveFilters && (
                  <span className="text-xs bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 font-medium">
                    {totalFiltrados}/{totalEventos}
                  </span>
                )}
              </div>
              <button
                onClick={closePanel}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Fechar filtros"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conteúdo dos filtros */}
            <div className="p-4 pb-safe overflow-y-auto">{filterContent}</div>
          </div>
        </>
      )}
    </>
  );
}
