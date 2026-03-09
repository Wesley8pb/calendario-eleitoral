import { useId, useState } from "react";
import { CalendarRange, Download } from "lucide-react";
import type { EventoCalendario } from "../../types";
import {
  calendarReminderOptions,
  type CalendarReminder,
} from "../../types/calendar";
import { buildEventsIcs, downloadIcsFile } from "../../lib/ics";
import { InfoTooltip } from "../ui/InfoTooltip";

interface BatchCalendarExportProps {
  eventos: EventoCalendario[];
}

export function BatchCalendarExport({
  eventos,
}: BatchCalendarExportProps) {
  const [reminder, setReminder] = useState<CalendarReminder>("none");
  const selectId = useId();
  const tooltipContent =
    "Depois do download, abra o arquivo .ics e importe no app de calendario do aparelho. Todos os eventos filtrados entram no mesmo arquivo e o lembrete escolhido sera aplicado igualmente a cada evento.";

  if (eventos.length === 0) {
    return null;
  }

  const handleDownload = () => {
    const content = buildEventsIcs(eventos, reminder);
    const fileName =
      eventos.length === 1
        ? `calendario-eleitoral-filtrado-1-evento.ics`
        : `calendario-eleitoral-filtrados-${eventos.length}-eventos.ics`;

    downloadIcsFile(content, fileName);
  };

  return (
    <div className="w-full rounded-xl border border-primary-200 bg-white/90 p-3 shadow-sm">
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 rounded-lg bg-primary-100 p-2 text-primary-700">
          <CalendarRange size={18} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-primary-900">
              Exportar eventos filtrados
            </p>
            <InfoTooltip
              content={tooltipContent}
              className="flex-shrink-0"
              label="Como funciona a exportacao em lote para calendario"
            />
          </div>
          <p className="mt-1 text-xs leading-relaxed text-primary-700/85">
            Gere um unico arquivo .ics com os {eventos.length} eventos exibidos
            e aplique o mesmo lembrete para todos.
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label
            htmlFor={selectId}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500"
          >
            Lembrete unico
          </label>
          <select
            id={selectId}
            value={reminder}
            onChange={(event) =>
              setReminder(event.target.value as CalendarReminder)
            }
            className="min-h-[44px] w-full rounded-lg border border-primary-200 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {calendarReminderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          aria-label={`Baixar arquivo .ics com ${eventos.length} eventos filtrados`}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          <Download size={16} strokeWidth={2.2} />
          <span>Baixar filtrados</span>
        </button>
      </div>
    </div>
  );
}
