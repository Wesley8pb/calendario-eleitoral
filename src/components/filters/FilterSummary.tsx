import { X } from "lucide-react";
import type { EventoCalendario } from "../../types";
import { cn } from "../../lib/utils";
import { Tooltip } from "../ui/Tooltip";
import { BatchCalendarExport } from "./BatchCalendarExport";

interface FilterSummaryProps {
  totalEventos: number;
  totalFiltrados: number;
  hasActiveFilters: boolean;
  canExportFilteredEvents: boolean;
  onLimpar: () => void;
  eventosFiltrados: EventoCalendario[];
}

export function FilterSummary({
  totalEventos,
  totalFiltrados,
  hasActiveFilters,
  canExportFilteredEvents,
  onLimpar,
  eventosFiltrados,
}: FilterSummaryProps) {
  if (!hasActiveFilters) return null;

  return (
    <div className="bg-primary-50 border-b border-primary-200 py-2.5 px-4 shadow-sm">
      <div className="max-w-5xl mx-auto space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* aria-live anuncia ao leitor de tela quando o filtro muda */}
          <p
            className="text-xs text-primary-700 font-medium"
            aria-live="polite"
            aria-atomic="true"
          >
            Exibindo <span className="font-bold">{totalFiltrados}</span> de{" "}
            <span className="font-bold">{totalEventos}</span> eventos
          </p>
          <Tooltip content="Remover todos os filtros aplicados">
            <button
              onClick={onLimpar}
              aria-label={`Limpar filtros — exibindo ${totalFiltrados} de ${totalEventos} eventos`}
              className={cn(
                "inline-flex items-center gap-1 self-start text-xs font-medium text-primary-700",
                "hover:text-primary-900 transition-colors rounded-full px-2 py-1.5",
                "hover:bg-primary-200/50 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
              )}
            >
              <X size={12} />
              Limpar filtros
            </button>
          </Tooltip>
        </div>
        {canExportFilteredEvents && (
          <BatchCalendarExport eventos={eventosFiltrados} />
        )}
      </div>
    </div>
  );
}
