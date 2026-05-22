import { useState, useMemo } from "react";
import { Header } from "./components/layout/Header";
import { CalendarCheck, CalendarDays, ChevronDown, ChevronUp, Star, StarOff } from "lucide-react";
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
import { useFavoritos } from "./hooks/useFavoritos";
import { FavoritosContext } from "./contexts/FavoritosContext";
import { isEventoPassado, agruparPorMes } from "./lib/utils";
import { HelpToast } from "./components/ui/HelpToast";
import { HelpCircle } from "lucide-react";

function App() {
  const { filtros, setFiltros, limparFiltros } = useUrlFilters();
  const [allExpanded, setAllExpanded] = useState<boolean | null>(null);
  const { favoritos, toggleFavorito, isFavorito, totalFavoritos, favoritarTodos, desfavoritarTodos } = useFavoritos();
  const eventosFiltrados = useFilteredEvents(eventos, filtros, favoritos);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Contagem de eventos passados
  const totalPassados = eventos.filter((ev) => isEventoPassado(ev.data)).length;

  // Lista de meses disponíveis para o dropdown (a partir de TODOS os eventos, sem filtro)
  const mesesDisponiveis = useMemo(() => {
    return agruparPorMes(eventos).map((m) => ({
      chave: m.chave,
      label: m.label,
    }));
  }, []);

  const algumVisivelFavoritado = useMemo(
    () => eventosFiltrados.some((ev) => favoritos.has(ev.id)),
    [eventosFiltrados, favoritos],
  );

  const hasActiveFilters =
    filtros.ocultarPassados ||
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null ||
    filtros.apenasFavoritos;
  const canExportFilteredEvents =
    filtros.categorias.length > 0 ||
    filtros.turno !== null ||
    filtros.busca.trim() !== "" ||
    filtros.mes !== null ||
    filtros.apenasFavoritos;

  const scrollToDataAtual = () => {
    const hoje = new Date();
    const hojeISO = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;
    const datas = Array.from(new Set(eventosFiltrados.map((ev) => ev.data))).sort();
    const dataAlvo =
      datas.find((data) => data === hojeISO) ??
      datas.find((data) => data > hojeISO) ??
      datas[datas.length - 1];

    if (!dataAlvo) return;

    const mesAlvo = dataAlvo.substring(0, 7);
    window.dispatchEvent(
      new CustomEvent("expand-month", { detail: { monthId: `mes-${mesAlvo}` } }),
    );
    const scrollToMesAlvo = () => {
      document.getElementById(`mes-${mesAlvo}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    scrollToMesAlvo();

    let tentativas = 0;
    const centralizarData = () => {
      const el = document.querySelector<HTMLElement>(`[data-date="${dataAlvo}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (tentativas < 10) {
        tentativas += 1;
        scrollToMesAlvo();
        window.setTimeout(centralizarData, 120);
      }
    };

    window.setTimeout(centralizarData, 180);
  };

  const handleToggleFavoritarTodos = () => {
    const ids = eventosFiltrados.map((ev) => ev.id);
    if (algumVisivelFavoritado) {
      desfavoritarTodos(ids);
    } else {
      favoritarTodos(ids);
    }
  };

  const handleSelectEvent = (eventId: string, data: string) => {
    // 1. Verificar se o evento está na lista de filtrados. Caso contrário, limpa os filtros.
    const estaNaLista = eventosFiltrados.some((ev) => ev.id === eventId);
    if (!estaNaLista) {
      limparFiltros();
    }

    // 2. Determinar o mês do evento
    const mesAlvo = data.substring(0, 7);
    const monthId = `mes-${mesAlvo}`;

    // 3. Expandir o mês
    window.dispatchEvent(
      new CustomEvent("expand-month", { detail: { monthId } }),
    );

    // 4. Scroll inicial para o contêiner do mês para acionar o IntersectionObserver (lazy rendering)
    const scrollToMesAlvo = () => {
      document.getElementById(monthId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    scrollToMesAlvo();

    // 5. Loop de retentativas para aguardar a montagem do card no DOM (lazy render)
    let tentativas = 0;
    const centralizarEAbrir = () => {
      const el = document.querySelector<HTMLElement>(`[data-event-id="${eventId}"]`);
      if (el) {
        // Encontrado! Rola até ele e dispara o evento para abrir os detalhes
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        window.dispatchEvent(
          new CustomEvent("open-event", { detail: { eventId } }),
        );
        return;
      }
      if (tentativas < 15) {
        tentativas += 1;
        scrollToMesAlvo(); // Garante o scroll contínuo e acionamento do lazy render
        window.setTimeout(centralizarEAbrir, 100);
      }
    };

    window.setTimeout(centralizarEAbrir, 150);
  };

  return (
    <FavoritosContext.Provider value={{ isFavorito, toggleFavorito }}>
    <div className="min-h-screen flex flex-col bg-neutral-50 overflow-x-hidden">
      <Header />
      <ProximosEventos onSelectEvent={handleSelectEvent} />
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
              <div className="p-2.5 bg-primary-50 rounded-xl text-primary-700">
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
              <Tooltip
                content={
                  algumVisivelFavoritado
                    ? "Remover todos os eventos visíveis dos favoritos"
                    : "Adicionar todos os eventos visíveis aos favoritos"
                }
              >
                <button
                  onClick={handleToggleFavoritarTodos}
                  aria-label={
                    algumVisivelFavoritado
                      ? "Desfavoritar todos os eventos visíveis"
                      : "Favoritar todos os eventos visíveis"
                  }
                  className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 shadow-sm hover:shadow transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {algumVisivelFavoritado ? (
                    <StarOff size={18} strokeWidth={2.5} />
                  ) : (
                    <Star size={18} strokeWidth={2.5} />
                  )}
                  <span className="hidden sm:inline">
                    {algumVisivelFavoritado ? "Desfavoritar todos" : "Favoritar todos"}
                  </span>
                </button>
              </Tooltip>

              <button
                onClick={() => setIsHelpOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-white bg-secondary-500 hover:bg-secondary-700 border border-secondary-700 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2"
              >
                <HelpCircle size={18} strokeWidth={2.5} />
                <span className="hidden md:inline">Como adicionar ao seu calendário</span>
                <span className="md:hidden">Guia Importação</span>
              </button>

              <Tooltip content="Ir para a data atual ou para a data mais próxima disponível">
                <button
                  onClick={scrollToDataAtual}
                  className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-white bg-primary-700 hover:bg-primary-900 border border-primary-900 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <CalendarCheck size={18} strokeWidth={2.5} />
                  <span className="hidden sm:inline">Ir para data atual</span>
                  <span className="sm:hidden">Hoje</span>
                </button>
              </Tooltip>

              <Tooltip content={allExpanded === true ? "Ocultar todos os meses" : "Mostrar todos os meses"}>
                <button
                  onClick={() => setAllExpanded(allExpanded === true ? false : true)}
                  className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 shadow-sm hover:shadow transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  aria-label={allExpanded === true ? "Ocultar todos os meses" : "Mostrar todos os meses"}
                  aria-expanded={allExpanded === true}
                >
                  <span className="hidden sm:inline">
                    {allExpanded === true ? "Ocultar meses" : "Mostrar meses"}
                  </span>
                  {allExpanded === true ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
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
        totalFavoritos={totalFavoritos}
        mesesDisponiveis={mesesDisponiveis}
      />
      <Footer />
      <HelpToast isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
    </FavoritosContext.Provider>
  );
}

export default App;
