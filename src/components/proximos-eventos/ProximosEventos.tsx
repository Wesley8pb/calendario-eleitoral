import { useState, useEffect, useRef, useCallback } from "react";
import {
  Clock,
  CalendarClock,
  Star,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import type { Perfil } from "../../types";
import { eventos } from "../../data/eventos";
import { useProximosEventos } from "../../hooks/useProximosEventos";
import { EventoProximoCard } from "./EventoProximoCard";
import { cn } from "../../lib/utils";
import { Tooltip } from "../ui/Tooltip";

type TabValue = Perfil | "todos" | "destaques";

const PERFIS_TABS: Array<{
  value: TabValue;
  label: string;
  icon?: React.ReactNode;
}> = [
    { value: "todos", label: "Todos" },
    {
      value: "destaques",
      label: "Destaques",
      icon: <Star size={13} className="fill-amber-400 text-amber-500" />,
    },
    { value: "eleitor", label: "Eleitor" },
    { value: "candidato", label: "Candidato" },
    { value: "partido", label: "Partido" },
    { value: "atos-preparatorios", label: "Atos Preparatórios" },
  ];

const STORAGE_KEY = "cal-eleitoral-perfil-tab";

function getPerfilSalvo(): TabValue {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as TabValue;
    if (saved && PERFIS_TABS.some((t) => t.value === saved)) {
      return saved;
    }
  } catch {
    /* localStorage indisponível */
  }
  return "todos"; // Todos como default inicial!
}

interface ProximosEventosProps {
  onSelectEvent?: (eventId: string, data: string) => void;
}

export function ProximosEventos({ onSelectEvent }: ProximosEventosProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [perfilAtivo, setPerfilAtivo] = useState<TabValue>(getPerfilSalvo);
  const proximosEventos = useProximosEventos(eventos, perfilAtivo, 9);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Navegação por teclado entre tabs (6B.6): setas ←→
  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let nextIndex: number | null = null;
      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % PERFIS_TABS.length;
      } else if (e.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + PERFIS_TABS.length) % PERFIS_TABS.length;
      } else if (e.key === "Home") {
        nextIndex = 0;
      } else if (e.key === "End") {
        nextIndex = PERFIS_TABS.length - 1;
      }
      if (nextIndex !== null) {
        e.preventDefault();
        const nextTab = PERFIS_TABS[nextIndex];
        setPerfilAtivo(nextTab.value);
        tabRefs.current.get(nextTab.value)?.focus();
      }
    },
    [],
  );

  // Persistir em localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, perfilAtivo);
    } catch {
      /* ignore */
    }
  }, [perfilAtivo]);

  const scrollToEvento = (eventoId: string, data: string) => {
    if (onSelectEvent) {
      onSelectEvent(eventoId, data);
      return;
    }

    // Localiza o card na timeline pelo data-event-id
    const el = document.querySelector(`[data-event-id="${eventoId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Trigger click para expandir
      const button = el.querySelector("button");
      if (button) {
        setTimeout(() => button.click(), 500);
      }
    }
  };

  return (
    <section className="bg-white border-b border-neutral-100 py-5 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CalendarClock size={18} className="text-primary-700" />
            <h2 className="text-base sm:text-lg font-bold text-neutral-800">
              Próximos Eventos
            </h2>
            <div className="relative group cursor-help ml-1 flex items-center">
              <Info size={16} className="text-neutral-400 hover:text-primary-700 transition-colors" />
              <div className="absolute left-1/2 sm:left-auto sm:right-1/2 sm:translate-x-1/2 -translate-x-1/2 -bottom-2 translate-y-full sm:bottom-full sm:-translate-y-2 mb-2 w-64 bg-neutral-800 text-white text-[11px] sm:text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none border border-neutral-700">
                <p className="font-semibold mb-1.5 text-neutral-100">Filtrar por perfil:</p>
                <ul className="space-y-1 text-neutral-300">
                  <li><span className="font-semibold text-white">Todos:</span> Exibe todos os eventos cadastrados.</li>
                  <li><span className="font-semibold text-amber-400">Destaques:</span> Eventos mais relevantes e urgentes.</li>
                  <li><span className="font-semibold text-white">Eleitor:</span> Título, votação e justificativa.</li>
                  <li><span className="font-semibold text-white">Candidato:</span> Registros, propaganda eleitoral e contas.</li>
                  <li><span className="font-semibold text-white">Partido:</span> Convenções, filiações e fundos.</li>
                  <li><span className="font-semibold text-white">Atos Preparatórios:</span> Organização da Justiça Eleitoral.</li>
                </ul>
                <p className="mt-2 pt-2 border-t border-neutral-700 text-neutral-400 italic">
                  São exibidos sempre os próximos 9 eventos da categoria selecionada.
                </p>
                {/* Arrow */}
                <div className="absolute left-1/2 sm:left-auto sm:right-1/2 sm:translate-x-1/2 -translate-x-1/2 -top-2 sm:top-auto sm:bottom-[-8px] border-[4px] border-transparent border-b-neutral-800 sm:border-b-transparent sm:border-t-neutral-800"></div>
              </div>
            </div>
          </div>
          <Tooltip content={isExpanded ? "Ocultar área de próximos eventos" : "Mostrar área de próximos eventos"}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={
                isExpanded ? "Ocultar próximos eventos" : "Mostrar próximos eventos"
              }
              aria-expanded={isExpanded}
            >
              <span className="hidden sm:inline">
                {isExpanded ? "Ocultar" : "Mostrar"}
              </span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </Tooltip>
        </div>

        {isExpanded && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Tabs de perfil */}
            <div
              className="flex gap-1.5 overflow-x-auto scrollbar-hide mb-4 pb-1"
              role="tablist"
              aria-label="Filtrar próximos eventos por perfil"
            >
              {PERFIS_TABS.map((tab, index) => (
                <button
                  key={tab.value}
                  ref={(el) => {
                    if (el) tabRefs.current.set(tab.value, el);
                  }}
                  id={`tab-${tab.value}`}
                  role="tab"
                  aria-selected={perfilAtivo === tab.value}
                  tabIndex={perfilAtivo === tab.value ? 0 : -1}
                  onClick={() => setPerfilAtivo(tab.value)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={cn(
                    "flex items-center gap-1.5 flex-shrink-0 rounded-full px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                    "min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                    perfilAtivo === tab.value
                      ? tab.value === "destaques"
                        ? "bg-amber-100 text-amber-900 border border-amber-200 shadow-sm"
                        : "bg-primary-700 text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards - Grid layout */}
            {proximosEventos.length > 0 ? (
              <div
                key={perfilAtivo}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2 animate-tab-fade"
              >
                {proximosEventos.map((ev) => (
                  <EventoProximoCard
                    key={ev.id}
                    evento={ev}
                    onClick={() => scrollToEvento(ev.id, ev.data)}
                  />
                ))}
              </div>
            ) : (
              <div
                key={perfilAtivo}
                className="flex items-center gap-2 py-6 justify-center text-neutral-400 animate-tab-fade"
              >
                <Clock size={16} />
                <p className="text-sm">
                  {perfilAtivo === "todos"
                    ? "Não há eventos próximos."
                    : `Nenhum evento próximo para o perfil "${PERFIS_TABS.find((t) => t.value === perfilAtivo)?.label}".`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
