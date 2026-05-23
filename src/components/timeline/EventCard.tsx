import { useState, useEffect } from "react";
import {
  Calendar,
  ChevronDown,
  User,
  FileCheck,
  Megaphone,
  Landmark,
  Building2,
  ShieldCheck,
  Ban,
  Vote,
  BarChart3,
  Award,
  Star,
  Flag,
  Bus,
  type LucideIcon,
} from "lucide-react";
import type { EventoCalendario, CategoriaID } from "../../types";
import { categoriaMap } from "../../data/categorias";
import {
  cn,
  isEventoPassado,
  isEventoProximo,
  isEventoHoje,
} from "../../lib/utils";
import { EventDetail } from "./EventDetail";
import { Tooltip } from "../ui/Tooltip";
import { useFavoritosContext } from "../../contexts/FavoritosContext";

// Mapeamento de nomes de ícone → componente Lucide
const iconeMap: Record<string, LucideIcon> = {
  User,
  FileCheck,
  Megaphone,
  Landmark,
  Building2,
  ShieldCheck,
  Ban,
  Vote,
  BarChart3,
  Award,
  Calendar,
  Flag,
  Bus,
};

function CategoriaBadge({ id }: { id: CategoriaID }) {
  const cat = categoriaMap[id];
  if (!cat) return null;
  const Icon = iconeMap[cat.icone] ?? Calendar;

  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white"
      style={{ backgroundColor: cat.cor }}
      title={cat.nome}
    >
      <Icon size={12} strokeWidth={2.2} />
      <span className="hidden sm:inline">{cat.nome}</span>
    </span>
  );
}

function TurnoBadge({ turno }: { turno: string }) {
  const labels: Record<string, string> = {
    "1T": "1º Turno",
    "2T": "2º Turno",
    AMBOS: "1º e 2º Turnos",
    POS: "Pós-eleição",
  };
  return (
    <span className="inline-flex items-center rounded-full bg-primary-100 text-primary-700 px-2 py-0.5 text-xs font-medium">
      {labels[turno] ?? turno}
    </span>
  );
}

function StatusBadge({ data }: { data: string }) {
  if (isEventoHoje(data)) {
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs font-semibold animate-pulse">
        Hoje
      </span>
    );
  }
  if (isEventoProximo(data, 7)) {
    return (
      <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs font-medium">
        Próximo
      </span>
    );
  }
  if (isEventoPassado(data)) {
    return (
      <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-500 px-2 py-0.5 text-xs font-medium">
        Evento passado
      </span>
    );
  }
  return null;
}

interface EventCardProps {
  evento: EventoCalendario;
}

export function EventCard({ evento }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isFavorito, toggleFavorito } = useFavoritosContext();
  const favorito = isFavorito(evento.id);

  // Fechar com Escape quando expandido (6B.1)
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Escutar evento para expandir detalhes do card
  useEffect(() => {
    const handler = (e: Event) => {
      const { eventId } = (e as CustomEvent<{ eventId: string }>).detail;
      if (eventId === evento.id) {
        setIsOpen(true);
      }
    };
    window.addEventListener("open-event", handler);
    return () => window.removeEventListener("open-event", handler);
  }, [evento.id]);

  const isCustom = evento.id.startsWith("custom-");

  return (
    <article
      data-event-id={evento.id}
      className={cn(
        "group relative rounded-xl border bg-white shadow-card transition-all duration-200",
        "hover:shadow-card-hover",
        isCustom && "border-l-4 hover:border-primary-200",
        !isCustom && evento.destaque &&
          "border-secondary-500 border-l-4 bg-secondary-100/30",
        !isCustom && !evento.destaque && "border-neutral-100 hover:border-primary-200",
        !isCustom && favorito && !evento.destaque && "border-amber-300 border-l-4",
        isOpen && "ring-1 ring-primary-200 shadow-card-hover",
      )}
      style={isCustom && evento.corPersonalizada ? { borderLeftColor: evento.corPersonalizada } : undefined}
    >
      {/* Header do card: botão de expand + botão de favorito (irmãos, não aninhados) */}
      <div className="flex items-stretch">
        {/* Botão de expand — ocupa a maior parte do header */}
        <Tooltip
          content={isOpen ? "Recolher informações" : "Expandir informações"}
          position="top"
          className="flex-1"
        >
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "w-full text-left p-3 sm:p-4 pr-2 cursor-pointer",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
              "rounded-tl-xl rounded-bl-xl min-h-[44px]",
              isCustom && "rounded-tr-xl rounded-br-xl",
            )}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Fechar" : "Abrir"} detalhes: ${evento.titulo}`}
          >
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                {/* Top row: categories + status */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  {isCustom ? (
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-white"
                      style={{ backgroundColor: evento.corPersonalizada ?? "#0D9488" }}
                    >
                      Evento particular
                    </span>
                  ) : (
                    <>
                      {evento.categorias.map((catId) => (
                        <CategoriaBadge key={catId} id={catId} />
                      ))}
                      {evento.turno && <TurnoBadge turno={evento.turno} />}
                    </>
                  )}
                  <StatusBadge data={evento.data} />
                  {!isCustom && evento.destaque && (
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-secondary-500 text-white px-2 py-0.5 text-xs font-semibold">
                      <Star size={11} fill="currentColor" />
                      Destaque
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold leading-snug text-neutral-950 break-words">
                  {evento.titulo}
                </h3>

                {/* Marco temporal */}
                {evento.marcos && (
                  <p className="mt-1 text-xs text-primary-500 font-medium">
                    {evento.marcos}
                  </p>
                )}
              </div>

              {/* Chevron de expansão — agora mais proeminente e robusto */}
              <div
                className={cn(
                  "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 mt-0.5",
                  isOpen 
                    ? "bg-primary-100 text-primary-700 rotate-180 shadow-sm" 
                    : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-700"
                )}
              >
                <ChevronDown size={20} strokeWidth={2.5} />
              </div>
            </div>
          </button>
        </Tooltip>

        {/* Botão de favoritar — só para eventos TSE */}
        {!isCustom && (
          <Tooltip
            content={favorito ? "Remover dos favoritos" : "Salvar nos favoritos"}
            position="top"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorito(evento.id);
              }}
              className={cn(
                "flex items-center justify-center px-3 border-l transition-all duration-150",
                "min-w-[48px] rounded-tr-xl rounded-br-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset",
                favorito
                  ? "border-amber-200 text-amber-400 hover:text-amber-500 hover:bg-amber-50"
                  : "border-neutral-100 text-neutral-300 hover:text-amber-300 hover:bg-amber-50/50",
              )}
              aria-label={favorito ? "Desfavoritar evento" : "Favoritar evento"}
              aria-pressed={favorito}
            >
              <Star
                size={20}
                strokeWidth={1.8}
                fill={favorito ? "currentColor" : "none"}
              />
            </button>
          </Tooltip>
        )}
      </div>

      {/* Expandable content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {isOpen && (
          <>
            <div className="border-t border-neutral-100 mx-3 sm:mx-4" />
            <EventDetail evento={evento} />
          </>
        )}
      </div>
    </article>
  );
}
