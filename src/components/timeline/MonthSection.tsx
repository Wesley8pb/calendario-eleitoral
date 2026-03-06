import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";
import { useLazyRender } from "../../hooks/useLazyRender";

interface MonthSectionProps {
  id: string; // para scroll-to / Intersection Observer
  label: string; // "Outubro / 2026"
  eventCount: number;
  isCurrentMonth?: boolean;
  children: React.ReactNode;
}

export function MonthSection({
  id,
  label,
  eventCount,
  isCurrentMonth,
  children,
}: MonthSectionProps) {
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
        <span
          className={cn(
            "ml-auto text-xs font-medium rounded-full px-2.5 py-0.5",
            isCurrentMonth
              ? "bg-primary-700 text-white"
              : "bg-neutral-100 text-neutral-500",
          )}
        >
          {eventCount} {eventCount === 1 ? "evento" : "eventos"}
        </span>
      </div>

      {/* Conteúdo renderizado apenas quando próximo da viewport (7A.7) */}
      {isVisible ? (
        <div className="space-y-6 animate-section-fade">{children}</div>
      ) : (
        // Placeholder com altura mínima estimada para preservar o layout do scroll
        <div
          style={{ minHeight: `${eventCount * 72}px` }}
          aria-hidden="true"
        />
      )}
    </section>
  );
}
