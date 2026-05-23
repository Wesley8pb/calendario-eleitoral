import { useState, useId } from "react";
import {
  BookMarked,
  Plus,
  ChevronDown,
  ChevronUp,
  Download,
  CalendarPlus,
  Settings2,
} from "lucide-react";
import type { EventoCustom } from "../../types/custom";
import { MAX_MEUS_EVENTOS } from "../../types/custom";
import { cn } from "../../lib/utils";
import { Tooltip } from "../ui/Tooltip";
import { MeuEventoCard } from "./MeuEventoCard";
import { MeuEventoForm } from "./MeuEventoForm";
import { GerenciarEventosModal } from "./GerenciarEventosModal";
import { buildCustomEventsIcs, downloadIcsFile } from "../../lib/ics";
import {
  calendarReminderOptions,
  type CalendarReminder,
} from "../../types/calendar";

interface MeusEventosProps {
  meusEventos: EventoCustom[];
  onAdd: (dados: Omit<EventoCustom, "id" | "criadoEm">) => void;
  onEdit: (id: string, changes: Partial<Omit<EventoCustom, "id" | "criadoEm">>) => void;
  onDelete: (id: string) => void;
  onImportar: (eventos: EventoCustom[]) => void;
  limiteAtingido: boolean;
}

export function MeusEventos({
  meusEventos,
  onAdd,
  onEdit,
  onDelete,
  onImportar,
  limiteAtingido,
}: MeusEventosProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [gerenciarOpen, setGerenciarOpen] = useState(false);
  const [editando, setEditando] = useState<EventoCustom | null>(null);
  const [showBatchExport, setShowBatchExport] = useState(false);
  const [batchReminder, setBatchReminder] = useState<CalendarReminder>("none");
  const batchSelectId = useId();

  const temEventos = meusEventos.length > 0;

  const handleOpenAdd = () => {
    setEditando(null);
    setFormOpen(true);
  };

  const handleOpenEdit = (evento: EventoCustom) => {
    setEditando(evento);
    setFormOpen(true);
  };

  const handleSave = (dados: Omit<EventoCustom, "id" | "criadoEm">) => {
    if (editando) {
      onEdit(editando.id, dados);
    } else {
      onAdd(dados);
    }
    setFormOpen(false);
    setEditando(null);
  };

  const handleDelete = (id: string) => {
    onDelete(id);
    setFormOpen(false);
    setEditando(null);
  };

  const handleBatchDownload = () => {
    const content = buildCustomEventsIcs(meusEventos, batchReminder);
    downloadIcsFile(content, "meus-eventos.ics");
    setShowBatchExport(false);
  };

  return (
    <section id="meus-eventos" className="max-w-5xl w-full mx-auto px-3 sm:px-4 py-6 sm:py-8 border-t border-neutral-100">
      {/* Header da seção */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-50 rounded-xl text-teal-700">
            <BookMarked size={24} strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-neutral-800 tracking-tight">
              Meus Eventos
            </h2>
            <p className="text-sm text-neutral-500 mt-0.5">
              {temEventos
                ? `${meusEventos.length} de ${MAX_MEUS_EVENTOS} eventos pessoais`
                : "Seus prazos e compromissos pessoais"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Gerenciar — backup/restore */}
          <Tooltip content="Importar e exportar eventos (backup)">
            <button
              onClick={() => setGerenciarOpen(true)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg",
                "text-neutral-600 bg-white hover:bg-neutral-50 border border-neutral-200",
                "shadow-sm hover:shadow transition-all active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400",
              )}
              aria-label="Gerenciar eventos — importar e exportar"
            >
              <Settings2 size={18} strokeWidth={2.5} />
              <span className="hidden sm:inline">Gerenciar</span>
            </button>
          </Tooltip>

          {/* Exportar todos (.ics) — só aparece quando tem eventos */}
          {temEventos && (
            <div className="relative">
              <button
                onClick={() => setShowBatchExport(!showBatchExport)}
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 shadow-sm hover:shadow transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <CalendarPlus size={18} strokeWidth={2.5} />
                <span className="hidden sm:inline">Exportar todos (.ics)</span>
                <span className="sm:hidden">.ics</span>
              </button>

              {showBatchExport && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowBatchExport(false)}
                  />
                  <div className="absolute right-0 top-full mt-1 z-20 bg-white rounded-xl border border-primary-200 shadow-lg p-3 w-64">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                      Lembrete
                    </p>
                    <select
                      id={batchSelectId}
                      value={batchReminder}
                      onChange={(e) =>
                        setBatchReminder(e.target.value as CalendarReminder)
                      }
                      className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {calendarReminderOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={handleBatchDownload}
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-900 rounded-lg transition-colors"
                    >
                      <Download size={14} />
                      Baixar {meusEventos.length} evento
                      {meusEventos.length !== 1 ? "s" : ""}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Adicionar evento */}
          {limiteAtingido ? (
            <Tooltip
              content={`Limite de ${MAX_MEUS_EVENTOS} eventos atingido. Exclua um para adicionar outro.`}
              wrap
            >
              <button
                disabled
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-neutral-400 bg-neutral-100 border border-neutral-200 cursor-not-allowed"
              >
                <Plus size={18} />
                <span className="hidden sm:inline">Adicionar evento</span>
                <span className="sm:hidden">Adicionar</span>
              </button>
            </Tooltip>
          ) : (
            <button
              onClick={handleOpenAdd}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg text-white bg-teal-600 hover:bg-teal-700 border border-teal-700 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <Plus size={18} strokeWidth={2.5} />
              <span className="hidden sm:inline">Adicionar evento</span>
              <span className="sm:hidden">Adicionar</span>
            </button>
          )}

          {/* Expand/collapse — só aparece quando tem eventos */}
          {temEventos && (
            <Tooltip
              content={isExpanded ? "Ocultar meus eventos" : "Mostrar meus eventos"}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-lg",
                  "text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200",
                  "shadow-sm hover:shadow transition-all active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                )}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Ocultar meus eventos" : "Mostrar meus eventos"}
              >
                {isExpanded ? (
                  <ChevronUp size={20} strokeWidth={2.5} />
                ) : (
                  <ChevronDown size={20} strokeWidth={2.5} />
                )}
              </button>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Estado vazio */}
      {!temEventos && (
        <div className="flex flex-col items-center justify-center py-14 text-center">
          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-4">
            <BookMarked size={28} className="text-teal-600" strokeWidth={1.5} />
          </div>
          <p className="text-base font-semibold text-neutral-600">
            Você ainda não tem eventos pessoais
          </p>
          <p className="text-sm text-neutral-400 mt-1 max-w-xs leading-relaxed">
            Anote prazos, reuniões ou compromissos do processo eleitoral que
            sejam relevantes para você.
          </p>
          <button
            onClick={handleOpenAdd}
            className="mt-5 flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            <Plus size={16} />
            Criar primeiro evento
          </button>
        </div>
      )}

      {/* Grid de cards */}
      {temEventos && isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {meusEventos.map((evento) => (
            <MeuEventoCard
              key={evento.id}
              evento={evento}
              onEdit={handleOpenEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Modal: Gerenciar Eventos */}
      {gerenciarOpen && (
        <GerenciarEventosModal
          meusEventos={meusEventos}
          onImportar={onImportar}
          onClose={() => setGerenciarOpen(false)}
        />
      )}

      {/* Modal: Formulário de criação/edição */}
      {formOpen && (
        <MeuEventoForm
          evento={editando}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={() => {
            setFormOpen(false);
            setEditando(null);
          }}
        />
      )}
    </section>
  );
}
