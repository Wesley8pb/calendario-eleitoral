import { useId, useState } from "react";
import { CalendarPlus, Download } from "lucide-react";
import type { EventoCalendario } from "../../types";
import type { CalendarReminder } from "../../types/calendar";
import { buildEventIcs } from "../../lib/ics";

interface CalendarExportPanelProps {
  evento: EventoCalendario;
}

const reminderOptions: Array<{ value: CalendarReminder; label: string }> = [
  { value: "none", label: "Sem lembrete" },
  { value: "1d", label: "1 dia antes" },
  { value: "3d", label: "3 dias antes" },
  { value: "7d", label: "7 dias antes" },
];

export function CalendarExportPanel({
  evento,
}: CalendarExportPanelProps) {
  const [reminder, setReminder] = useState<CalendarReminder>("none");
  const selectId = useId();

  const handleDownload = () => {
    const content = buildEventIcs(evento, reminder);
    const blob = new Blob([content], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `calendario-eleitoral-${evento.id}.ics`;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="rounded-xl border border-primary-200/70 bg-gradient-to-br from-primary-50 via-white to-secondary-100/40 p-3 sm:p-4 shadow-sm">
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 rounded-lg bg-white p-2 text-primary-700 shadow-sm">
          <CalendarPlus size={18} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-neutral-950">
            Adicionar ao calendario
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600">
            Baixe um arquivo .ics para importar este evento em apps como Google
            Calendar, Apple Calendar e similares.
          </p>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <label
            htmlFor={selectId}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500"
          >
            Lembrete
          </label>
          <select
            id={selectId}
            value={reminder}
            onChange={(event) =>
              setReminder(event.target.value as CalendarReminder)
            }
            className="min-h-[44px] w-full rounded-lg border border-primary-200 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {reminderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          aria-label={`Baixar arquivo .ics do evento ${evento.titulo}`}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          <Download size={16} strokeWidth={2.2} />
          <span>Baixar .ics</span>
        </button>
      </div>
    </section>
  );
}
