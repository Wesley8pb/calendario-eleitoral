import { useEffect, useId, useRef, useState } from "react";
import { Info } from "lucide-react";
import { cn } from "../../lib/utils";

interface InfoTooltipProps {
  content: string;
  className?: string;
  label?: string;
}

export function InfoTooltip({
  content,
  className,
  label = "Como funciona a exportacao para calendario",
}: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn("relative inline-flex", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={label}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? tooltipId : undefined}
        className={cn(
          "inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-full",
          "text-primary-700 transition-colors hover:bg-primary-100 hover:text-primary-900",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        )}
      >
        <Info size={16} strokeWidth={2.1} />
      </button>

      {isOpen && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            "absolute right-0 top-full z-50 mt-2 w-[min(20rem,calc(100vw-2rem))]",
            "rounded-xl border border-neutral-200 bg-white p-3 text-xs leading-relaxed text-neutral-700 shadow-xl",
          )}
        >
          {content}
          <div className="absolute -top-2 right-3 h-3 w-3 rotate-45 border-l border-t border-neutral-200 bg-white" />
        </div>
      )}
    </div>
  );
}
