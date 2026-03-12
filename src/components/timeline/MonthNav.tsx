import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ArrowUp, CalendarDays } from "lucide-react";
import type { EventoCalendario } from "../../types";
import { agruparPorMes, cn } from "../../lib/utils";
import { Tooltip } from "../ui/Tooltip";

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

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
    document.getElementById("monthnav")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handlers para Drag-to-Scroll (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // multiplicador de velocidade
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMonthClick = (chave: string, e: React.MouseEvent) => {
    // Se houve movimento significativo (drag), não dispara o scroll suave para o mês
    if (hasMoved) {
      e.preventDefault();
      return;
    }
    scrollToMonth(chave);
  };

  return (
    <>
      <nav
        id="monthnav"
        className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-t-[3px] border-t-primary-700 border-b border-b-neutral-200 shadow-md"
        aria-label="Navegação por meses"
      >
        <div className="max-w-5xl mx-auto flex items-center px-4">
          {/* Título instrutivo à esquerda */}
          <div className="flex flex-shrink-0 items-center gap-2 mr-4 pr-4 border-r border-neutral-100 py-4 sm:py-5">
            <CalendarDays size={18} className="text-primary-700 max-[360px]:hidden" />
            <div className="flex flex-col leading-none">
              <span className="text-[9px] sm:text-[10px] font-black text-neutral-400 uppercase tracking-widest">Acesso</span>
              <span className="text-[11px] sm:text-xs font-bold text-primary-900 uppercase">Mensal</span>
            </div>
          </div>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={cn(
              "flex-1 flex gap-1.5 overflow-x-auto py-4 sm:py-5 scrollbar-hide select-none",
              !isDragging && "scroll-snap-x"
            )}
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
                  onClick={(e) => handleMonthClick(m.chave, e)}
                  onDragStart={(e) => e.preventDefault()}
                  className={cn(
                    "flex-shrink-0 scroll-snap-start rounded-full px-4 py-2 text-sm font-medium",
                    "transition-all duration-200 whitespace-nowrap active:scale-95",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",
                    "cursor-grab active:cursor-grabbing",
                    flashedMonth === m.chave && "scale-95 brightness-110",
                    isActive
                      ? "bg-primary-700 text-white shadow-sm"
                      : isCurrent
                        ? "bg-primary-100 text-primary-700 ring-1 ring-primary-300"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Tooltip content="Clique e arraste para navegar horizontalmente">
                    <span>{m.labelAbrev}</span>
                  </Tooltip>
                </button>
              );
            })}
          </div>
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
