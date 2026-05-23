import { useState, useId } from "react";
import { Pencil, Trash2, CalendarPlus, Download } from "lucide-react";
import type { EventoCustom } from "../../types/custom";
import {
  cn,
  formatDate,
  getUrgenciaPrazo,
  getDiasAte,
} from "../../lib/utils";
import {
  calendarReminderOptions,
  type CalendarReminder,
} from "../../types/calendar";
import { buildCustomEventIcs, downloadIcsFile } from "../../lib/ics";
import { Tooltip } from "../ui/Tooltip";

interface MeuEventoCardProps {
  evento: EventoCustom;
  onEdit: (evento: EventoCustom) => void;
  onDelete: (id: string) => void;
}

function UrgenciaBadge({ data }: { data: string }) {
  const urgencia = getUrgenciaPrazo(data);
  const dias = getDiasAte(data);

  if (urgencia === "hoje")
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs font-semibold animate-pulse">
        Hoje
      </span>
    );
  if (urgencia === "semana")
    return (
      <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs font-medium">
        Esta semana
      </span>
    );
  if (urgencia === "dias")
    return (
      <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-600 px-2 py-0.5 text-xs font-medium">
        Em {dias} dias
      </span>
    );
  if (urgencia === "passado")
    return (
      <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-400 px-2 py-0.5 text-xs">
        Passado
      </span>
    );
  return null;
}

export function MeuEventoCard({ evento, onEdit, onDelete }: MeuEventoCardProps) {
  const [showExport, setShowExport] = useState(false);
  const [reminder, setReminder] = useState<CalendarReminder>("none");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const selectId = useId();

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(evento.id);
    } else {
      setConfirmDelete(true);
    }
  };

  const handleDownload = () => {
    const content = buildCustomEventIcs(evento, reminder);
    downloadIcsFile(content, `meu-evento-${evento.id}.ics`);
  };

  return (
    <article
      className="rounded-xl border border-neutral-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-200 border-l-4"
      style={{ borderLeftColor: evento.cor }}
    >
      <div className="p-3 sm:p-4">
        {/* Header: data + urgência + botões de ação */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            <span className="text-xs font-semibold text-neutral-500 flex-shrink-0">
              {formatDate(evento.data)}
            </span>
            <UrgenciaBadge data={evento.data} />
          </div>
          <div className="flex items-center gap-0.5 flex-shrink-0">
            <Tooltip content="Editar evento" position="top">
              <button
                onClick={() => onEdit(evento)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-teal-700 hover:bg-teal-50 transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                aria-label="Editar evento"
              >
                <Pencil size={14} />
              </button>
            </Tooltip>
            <Tooltip
              content={
                confirmDelete ? "Clique novamente para confirmar" : "Excluir evento"
              }
              position="top"
            >
              <button
                onClick={handleDelete}
                onBlur={() => setConfirmDelete(false)}
                className={cn(
                  "p-1.5 rounded-lg transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center",
                  confirmDelete
                    ? "text-white bg-red-600 hover:bg-red-700"
                    : "text-neutral-400 hover:text-red-600 hover:bg-red-50",
                )}
                aria-label={
                  confirmDelete ? "Confirmar exclusão do evento" : "Excluir evento"
                }
              >
                <Trash2 size={14} />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Título */}
        <h3 className="text-sm font-semibold text-neutral-950 leading-snug">
          {evento.titulo}
        </h3>

        {/* Notas truncadas */}
        {evento.descricao && (
          <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
            {evento.descricao}
          </p>
        )}

        {/* Toggle exportar */}
        <button
          onClick={() => setShowExport(!showExport)}
          className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary-700 hover:text-primary-900 transition-colors"
        >
          <CalendarPlus size={13} />
          {showExport ? "Ocultar exportação" : "Exportar para calendário"}
        </button>

        {/* Painel de exportação inline */}
        {showExport && (
          <div className="mt-3 pt-3 border-t border-neutral-100">
            <div className="flex items-end gap-2">
              <div className="flex-1 min-w-0">
                <label
                  htmlFor={selectId}
                  className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1"
                >
                  Lembrete
                </label>
                <select
                  id={selectId}
                  value={reminder}
                  onChange={(e) => setReminder(e.target.value as CalendarReminder)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {calendarReminderOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleDownload}
                aria-label={`Baixar arquivo .ics do evento ${evento.titulo}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-primary-700 hover:bg-primary-900 rounded-lg transition-colors min-h-[36px] flex-shrink-0"
              >
                <Download size={13} />
                Baixar .ics
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
