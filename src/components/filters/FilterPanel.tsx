import { useState, useEffect, useRef } from "react";
import {
  Filter,
  Search,
  X,
  CalendarDays,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(true);
  const [buscaLocal, setBuscaLocal] = useState(filtros.busca);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Fechar bottom sheet com Escape (6B.1)
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
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

  // setTurno com toggle: se clicar no turno ativo, volta para null
  // (lógica integrada inline nos botões abaixo)

  const hasActiveFilters =
    filtros.ocultarPassados ||
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null;

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
      {/* Desktop: sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-16 self-start">
        <div className="bg-white rounded-xl border border-neutral-100 shadow-card p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pb-2">
            <Filter size={16} className="text-primary-700" />
            <h2 className="text-sm font-bold text-neutral-700">Filtros</h2>
            {hasActiveFilters && isDesktopExpanded && (
              <span className="ml-auto mr-1 text-xs bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 font-medium">
                {totalFiltrados}/{totalEventos}
              </span>
            )}
            <Tooltip content={isDesktopExpanded ? "Recolher painel de filtros" : "Expandir painel de filtros"} position="bottom">
              <button
                onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
                className={cn(
                  "p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors",
                  (!hasActiveFilters || !isDesktopExpanded) && "ml-auto",
                )}
                aria-label={
                  isDesktopExpanded ? "Ocultar filtros" : "Mostrar filtros"
                }
                aria-expanded={isDesktopExpanded}
              >
                {isDesktopExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </Tooltip>
          </div>
          {isDesktopExpanded && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              {filterContent}
            </div>
          )}
        </div>
      </aside>

      {/* Mobile: bottom sheet */}
      <div className="lg:hidden">
        {/* FAB — posicionado à esquerda para não sobrepor o botão "Início" (direita) */}
        <Tooltip content="Ver filtros avançados" className="fixed bottom-6 left-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-3 shadow-lg",
              "bg-primary-700 text-white hover:bg-primary-900 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
              "min-h-[44px]",
            )}
            aria-label="Abrir filtros"
          >
            <Filter size={18} />
            <span className="text-sm font-medium">Filtros</span>
            {hasActiveFilters && (
              <span className="bg-white text-primary-700 text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {totalFiltrados}
              </span>
            )}
          </button>
        </Tooltip>

        {/* Backdrop + Sheet */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto animate-slide-up"
              role="dialog"
              aria-modal="true"
              aria-labelledby="filter-sheet-title"
            >
              <div className="sticky top-0 bg-white border-b border-neutral-100 px-4 py-3 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-primary-700" />
                  <h2 id="filter-sheet-title" className="text-sm font-bold text-neutral-700">
                    Filtros
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-neutral-100 text-neutral-500"
                  aria-label="Fechar filtros"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 pb-safe overflow-y-auto">{filterContent}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
