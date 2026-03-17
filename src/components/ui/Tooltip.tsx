import React from "react";
import { cn } from "../../lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom";
  className?: string;
  wrap?: boolean;
}

export function Tooltip({
  content,
  children,
  position = "top",
  className,
  wrap = false,
}: TooltipProps) {
  return (
    <div className={cn("relative group/tooltip flex items-center", className)}>
      {children}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-[10px] sm:text-xs font-medium rounded shadow-lg",
          "opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none border border-neutral-700",
          wrap ? "whitespace-normal max-w-[200px] text-center" : "whitespace-nowrap",
          position === "top" ? "bottom-full mb-2" : "top-full mt-2"
        )}
      >
        {content}
        {/* Arrow */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 border-[4px] border-transparent",
            position === "top"
              ? "bottom-[-8px] border-t-neutral-800"
              : "top-[-8px] border-b-neutral-800"
          )}
        />
      </div>
    </div>
  );
}
