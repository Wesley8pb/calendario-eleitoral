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
  allExpanded?: boolean | null;
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
  const [isExpanded, setIsExpanded] = useState(() =>
    Boolean(allExpanded ?? isCurrentMonth),
  );

  const { ref, isVisible } = useLazyRender("500px");

  useEffect(() => {
    const handler = (e: Event) => {
      const { monthId } = (e as CustomEvent<{ monthId: string }>).detail;
      if (monthId === id) setIsExpanded(true);
    };
    window.addEventListener("expand-month", handler);
    return () => window.removeEventListener("expand-month", handler);
  }, [id]);

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
                "flex items-center justify-center p-2 rounded-lg transition-all border shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                isExpanded
                  ? "bg-primary-700 text-white border-primary-800 hover:bg-primary-800"
                  : "bg-white text-primary-700 border-primary-300 hover:bg-primary-50 hover:border-primary-400"
              )}
              aria-label={isExpanded ? "Recolher eventos" : "Expandir eventos"}
              aria-expanded={isExpanded}
            >
              {isExpanded ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
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
