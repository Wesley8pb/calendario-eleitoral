import { useState, useEffect } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { useLazyRender } from "../../hooks/useLazyRender";
import { Tooltip } from "../ui/Tooltip";

interface MonthSectionProps {
  id: string; // para scroll-to / Intersection Observer
  label: string; // "Outubro / 2026"
  eventCount: number;
  isCurrentMonth?: boolean;
  allExpanded?: boolean;
  children: React.ReactNode;
}

export function MonthSection({
  id,
  label,
  eventCount,
  isCurrentMonth,
  allExpanded,
  children,
}: MonthSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Sincronizar com o estado global quando ele mudar
  useEffect(() => {
    if (allExpanded !== undefined) {
      setIsExpanded(allExpanded);
    }
  }, [allExpanded]);

  const { ref, isVisible } = useLazyRender("500px");

  return (
    <section
      id={id}
      data-month={id}
      className="scroll-mt-28"
      role="region"
      aria-label={label}
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Sticky month header — sempre renderizado para Intersection Observer do MonthNav */}
      <div
        className={cn(
          "sticky top-16 z-20 flex items-center gap-3 py-3 px-4 -mx-4 mb-4",
          "bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-100",
          isCurrentMonth && "bg-primary-100/80 border-primary-200",
        )}
      >
        <Calendar
          size={18}
          className={cn(
            "flex-shrink-0",
            isCurrentMonth ? "text-primary-700" : "text-neutral-400",
          )}
        />
        <h2
          className={cn(
            "text-base sm:text-lg font-bold",
            isCurrentMonth ? "text-primary-700" : "text-neutral-700",
          )}
        >
          {label}
        </h2>

        <div className="ml-auto flex items-center gap-3">
          <span
            className={cn(
              "text-xs font-medium rounded-full px-2.5 py-0.5",
              isCurrentMonth
                ? "bg-primary-700 text-white"
                : "bg-neutral-100 text-neutral-500",
            )}
          >
            {eventCount} {eventCount === 1 ? "evento" : "eventos"}
          </span>

          <Tooltip content={isExpanded ? "Recolher eventos deste mês" : "Expandir eventos deste mês"}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "flex items-center justify-center p-1.5 rounded-lg transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                isCurrentMonth
                  ? "text-primary-700 bg-primary-100 hover:bg-primary-200 border-primary-200"
                  : "text-neutral-500 bg-neutral-100 hover:bg-neutral-200 border-neutral-200"
              )}
              aria-label={isExpanded ? "Recolher eventos" : "Expandir eventos"}
              aria-expanded={isExpanded}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Conteúdo renderizado apenas quando próximo da viewport (7A.7) e se estiver expandido */}
      {isExpanded && (
        <>
          {isVisible ? (
            <div className="space-y-6 animate-section-fade">{children}</div>
          ) : (
            // Placeholder com altura mínima estimada para preservar o layout do scroll
            <div
              style={{ minHeight: `${eventCount * 72}px` }}
              aria-hidden="true"
            />
          )}
        </>
      )}
    </section>
  );
}
