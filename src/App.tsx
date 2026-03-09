import { useState, useMemo } from "react";
import { Header } from "./components/layout/Header";
import { CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import { Tooltip } from "./components/ui/Tooltip";
import { Footer } from "./components/layout/Footer";
import { ProximosEventos } from "./components/proximos-eventos/ProximosEventos";
import { MonthNav } from "./components/timeline/MonthNav";
import { Timeline } from "./components/timeline/Timeline";
import { FilterPanel } from "./components/filters/FilterPanel";
import { FilterSummary } from "./components/filters/FilterSummary";
import { eventos } from "./data/eventos";
import { useFilteredEvents } from "./hooks/useFilteredEvents";
import { useUrlFilters } from "./hooks/useUrlFilters";
import { isEventoPassado, agruparPorMes } from "./lib/utils";

function App() {
  const { filtros, setFiltros, limparFiltros } = useUrlFilters();
  const [allExpanded, setAllExpanded] = useState(true);
  const eventosFiltrados = useFilteredEvents(eventos, filtros);

  // Contagem de eventos passados
  const totalPassados = eventos.filter((ev) => isEventoPassado(ev.data)).length;

  // Lista de meses disponíveis para o dropdown (a partir de TODOS os eventos, sem filtro)
  const mesesDisponiveis = useMemo(() => {
    return agruparPorMes(eventos).map((m) => ({
      chave: m.chave,
      label: m.label,
    }));
  }, []);

  const hasActiveFilters =
    filtros.ocultarPassados ||
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null;
  const canExportFilteredEvents =
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 overflow-x-hidden">
      <Header />
      <ProximosEventos />
      <MonthNav eventos={eventosFiltrados} />
      <FilterSummary
        totalEventos={eventos.length}
        totalFiltrados={eventosFiltrados.length}
        hasActiveFilters={hasActiveFilters}
        canExportFilteredEvents={canExportFilteredEvents}
        onLimpar={limparFiltros}
        eventosFiltrados={eventosFiltrados}
      />
      <div className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <main>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary-50 rounded-xl text-primary-600">
                <CalendarDays size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-neutral-800 tracking-tight">
                  Calendário Interativo
                </h1>
                <p className="text-sm text-neutral-500 mt-0.5">
                  Acompanhe todos os prazos e eventos do ciclo eleitoral
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Tooltip content={allExpanded ? "Recolher todos os meses" : "Expandir todos os meses"}>
                <button
                  onClick={() => setAllExpanded(!allExpanded)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-200 border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 active:scale-95"
                  aria-label={allExpanded ? "Recolher todos os meses" : "Expandir todos os meses"}
                >
                  {allExpanded ? (
                    <>
                      <ChevronUp size={16} />
                      <span className="hidden xs:inline">Recolher Tudo</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      <span className="hidden xs:inline">Expandir Tudo</span>
                    </>
                  )}
                </button>
              </Tooltip>
            </div>
          </div>

          {eventosFiltrados.length > 0 ? (
            <Timeline eventos={eventosFiltrados} allExpanded={allExpanded} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-semibold text-neutral-500">
                Nenhum evento encontrado
              </p>
              <p className="text-sm text-neutral-400 mt-1">
                Tente ajustar os filtros aplicados.
              </p>
              <button
                onClick={limparFiltros}
                className="mt-4 text-sm font-medium text-primary-700 hover:text-primary-900 px-4 py-2 rounded-lg bg-primary-100 hover:bg-primary-200 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </main>
      </div>
      <FilterPanel
        filtros={filtros}
        onChange={setFiltros}
        onLimpar={limparFiltros}
        totalEventos={eventos.length}
        totalFiltrados={eventosFiltrados.length}
        totalPassados={totalPassados}
        mesesDisponiveis={mesesDisponiveis}
      />
      <Footer />
    </div>
  );
}

export default App;
