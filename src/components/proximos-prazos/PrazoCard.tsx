import {
  Calendar,
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
  type LucideIcon,
} from "lucide-react";
import type { EventoCalendario } from "../../types";
import { categoriaMap } from "../../data/categorias";
import {
  formatDate,
  getDiasAte,
  isEventoHoje,
  isEventoProximo,
  cn,
} from "../../lib/utils";

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
};

interface PrazoCardProps {
  evento: EventoCalendario;
  onClick?: () => void;
}

export function PrazoCard({ evento, onClick }: PrazoCardProps) {
  const cat = categoriaMap[evento.categorias[0]];
  const Icon = cat ? (iconeMap[cat.icone] ?? Calendar) : Calendar;
  const diasAte = getDiasAte(evento.data);
  const hoje = isEventoHoje(evento.data);
  const estaSemana = isEventoProximo(evento.data, 7);

  let urgenciaBadge: React.ReactNode;
  if (hoje) {
    urgenciaBadge = (
      <span className="rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs font-semibold animate-pulse">
        Hoje
      </span>
    );
  } else if (estaSemana) {
    urgenciaBadge = (
      <span className="rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs font-medium">
        Esta semana
      </span>
    );
  } else {
    urgenciaBadge = (
      <span className="rounded-full bg-neutral-100 text-neutral-600 px-2 py-0.5 text-xs font-medium">
        Em {diasAte} {diasAte === 1 ? "dia" : "dias"}
      </span>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-xl border bg-white p-4 h-full flex flex-col",
        "shadow-card hover:shadow-card-hover transition-all duration-200 text-left",
        "hover:border-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer",
      )}
    >
      {/* Date + urgency */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-neutral-500">
          {formatDate(evento.data)}
        </span>
        {urgenciaBadge}
      </div>

      {/* Title */}
      <h4 className="text-sm font-semibold text-neutral-900 leading-snug line-clamp-2 mb-4 flex-grow">
        {evento.titulo}
      </h4>

      {/* Category badge */}
      <div className="mt-auto">
        {cat && (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white"
            style={{ backgroundColor: cat.cor }}
          >
            <Icon size={12} strokeWidth={2.2} />
            {cat.nome}
          </span>
        )}
      </div>
    </button>
  );
}
