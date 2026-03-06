import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import type { EventoCalendario } from "../../types";
import { agruparPorMes, cn } from "../../lib/utils";

interface MonthNavProps {
  eventos: EventoCalendario[];
  activeMonth?: string;
}

export function MonthNav({
  eventos,
  activeMonth: controlledActive,
}: MonthNavProps) {
  const meses = useMemo(() => agruparPorMes(eventos), [eventos]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Mês atual
  const hoje = new Date();
  const mesAtualChave = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;

  // Intersection Observer para detectar mês ativo
  const [observedMonth, setObservedMonth] = useState<string>(mesAtualChave);
  const activeMonth = controlledActive ?? observedMonth;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const monthId = entry.target.getAttribute("data-month");
            if (monthId) {
              const chave = monthId.replace("mes-", "");
              setObservedMonth(chave);
            }
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 },
    );

    // Observar todas as seções de mês
    const sections = document.querySelectorAll("[data-month]");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [meses]);

  // Scroll do chip ativo para o centro
  useEffect(() => {
    const chip = chipRefs.current.get(activeMonth);
    if (chip && scrollRef.current) {
      const container = scrollRef.current;
      const left =
        chip.offsetLeft - container.offsetWidth / 2 + chip.offsetWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeMonth]);

  const [flashedMonth, setFlashedMonth] = useState<string | null>(null);

  const scrollToMonth = useCallback((chave: string) => {
    const el = document.getElementById(`mes-${chave}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Flash visual (7A.4)
    setFlashedMonth(chave);
    setTimeout(() => setFlashedMonth(null), 400);
  }, []);

  // Monitorar scroll para mostrar botão "Voltar ao Início"
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão após rolar 400px
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-t-[3px] border-t-primary-700 border-b border-b-neutral-200 shadow-md"
        aria-label="Navegação por meses"
      >
        <div
          ref={scrollRef}
          className="flex gap-1.5 overflow-x-auto px-4 py-3 scroll-snap-x max-w-5xl mx-auto pb-3.5"
        >
          {meses.map((m) => {
            const isActive = m.chave === activeMonth;
            const isCurrent = m.chave === mesAtualChave;

            return (
              <button
                key={m.chave}
                ref={(el) => {
                  if (el) chipRefs.current.set(m.chave, el);
                }}
                onClick={() => scrollToMonth(m.chave)}
                className={cn(
                  "flex-shrink-0 scroll-snap-start rounded-full px-4 py-2 text-sm font-medium",
                  "transition-all duration-200 whitespace-nowrap active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
                  flashedMonth === m.chave && "scale-95 brightness-110",
                  isActive
                    ? "bg-primary-700 text-white shadow-sm"
                    : isCurrent
                      ? "bg-primary-100 text-primary-700 ring-1 ring-primary-300"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {m.labelAbrev}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Botão Flutuante Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 pl-3 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2",
          "bg-primary-700 text-white hover:bg-primary-800 hover:scale-110 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/50",
          "min-h-[44px]",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none",
        )}
        title="Voltar ao início do calendário"
        aria-label="Voltar ao início do calendário"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
        <span className="text-sm font-bold pr-1">Início</span>
      </button>
    </>
  );
}
