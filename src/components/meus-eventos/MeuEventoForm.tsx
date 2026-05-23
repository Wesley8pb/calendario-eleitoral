import { useState, useEffect, useRef, useId } from "react";
import { X, Trash2, Save, Calendar } from "lucide-react";
import type { EventoCustom } from "../../types/custom";
import { MEUS_EVENTOS_CORES } from "../../types/custom";
import { cn } from "../../lib/utils";

interface MeuEventoFormProps {
  evento: EventoCustom | null;
  onSave: (dados: Omit<EventoCustom, "id" | "criadoEm">) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

export function MeuEventoForm({
  evento,
  onSave,
  onDelete,
  onClose,
}: MeuEventoFormProps) {
  const [titulo, setTitulo] = useState(evento?.titulo ?? "");
  const [data, setData] = useState(evento?.data ?? "");
  const [descricao, setDescricao] = useState(evento?.descricao ?? "");
  const [cor, setCor] = useState(evento?.cor ?? MEUS_EVENTOS_CORES[0]);
  const [errors, setErrors] = useState<{ titulo?: string; data?: string }>({});
  const [confirmDelete, setConfirmDelete] = useState(false);

  const tituloId = useId();
  const dataId = useId();
  const descricaoId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const validate = () => {
    const next: { titulo?: string; data?: string } = {};
    if (!titulo.trim()) next.titulo = "Título obrigatório";
    else if (titulo.trim().length > 120) next.titulo = "Máximo 120 caracteres";
    if (!data) next.data = "Data obrigatória";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave({
      titulo: titulo.trim(),
      data,
      descricao: descricao.trim() || undefined,
      cor,
    });
    onClose();
  };

  const handleDelete = () => {
    if (confirmDelete && evento) {
      onDelete(evento.id);
      onClose();
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed z-50 bg-white shadow-2xl flex flex-col",
          "inset-x-0 bottom-0 rounded-t-2xl max-h-[90vh] animate-slide-up",
          "lg:inset-y-0 lg:right-0 lg:left-auto lg:bottom-auto lg:rounded-t-none lg:rounded-l-2xl lg:w-[400px] lg:max-h-full lg:animate-slide-in-right",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="form-evento-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-100 px-4 py-3 flex items-center justify-between z-10 rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl flex-shrink-0">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-teal-700" />
            <h2
              id="form-evento-title"
              className="text-sm font-bold text-neutral-700"
            >
              {evento ? "Editar evento" : "Novo evento pessoal"}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Fechar formulário"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Título */}
          <div>
            <label
              htmlFor={tituloId}
              className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5"
            >
              Título <span className="text-red-500">*</span>
            </label>
            <input
              id={tituloId}
              type="text"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
                if (errors.titulo)
                  setErrors((p) => ({ ...p, titulo: undefined }));
              }}
              maxLength={120}
              placeholder="Nome do evento ou prazo"
              aria-invalid={!!errors.titulo}
              aria-describedby={errors.titulo ? `${tituloId}-err` : undefined}
              className={cn(
                "w-full px-3 py-2 text-sm rounded-lg border bg-white",
                "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors",
                errors.titulo
                  ? "border-red-300 bg-red-50/30"
                  : "border-neutral-200",
              )}
            />
            {errors.titulo && (
              <p id={`${tituloId}-err`} className="mt-1 text-xs text-red-600">
                {errors.titulo}
              </p>
            )}
            <p className="mt-0.5 text-xs text-neutral-400 text-right">
              {titulo.length}/120
            </p>
          </div>

          {/* Data */}
          <div>
            <label
              htmlFor={dataId}
              className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5"
            >
              Data <span className="text-red-500">*</span>
            </label>
            <input
              id={dataId}
              type="date"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
                if (errors.data)
                  setErrors((p) => ({ ...p, data: undefined }));
              }}
              aria-invalid={!!errors.data}
              aria-describedby={errors.data ? `${dataId}-err` : undefined}
              className={cn(
                "w-full px-3 py-2 text-sm rounded-lg border bg-white",
                "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors",
                errors.data
                  ? "border-red-300 bg-red-50/30"
                  : "border-neutral-200",
              )}
            />
            {errors.data && (
              <p id={`${dataId}-err`} className="mt-1 text-xs text-red-600">
                {errors.data}
              </p>
            )}
          </div>

          {/* Notas */}
          <div>
            <label
              htmlFor={descricaoId}
              className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5"
            >
              Notas{" "}
              <span className="text-xs font-normal text-neutral-400">
                (opcional)
              </span>
            </label>
            <textarea
              id={descricaoId}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Detalhes, lembretes, observações..."
              rows={3}
              className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Cor */}
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Cor do evento
            </p>
            <div className="flex flex-wrap gap-2.5">
              {MEUS_EVENTOS_CORES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCor(c)}
                  aria-label={`Selecionar cor ${c}`}
                  aria-pressed={cor === c}
                  className={cn(
                    "w-9 h-9 rounded-full transition-all duration-150 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500",
                    cor === c
                      ? "border-neutral-700 scale-110 shadow-md"
                      : "border-white hover:scale-105 shadow-sm",
                  )}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 bg-white border-t border-neutral-100 px-4 py-3 flex items-center gap-2">
          {evento && (
            <button
              type="button"
              onClick={handleDelete}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors min-h-[44px]",
                confirmDelete
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "text-red-600 hover:bg-red-50 border border-red-200",
              )}
              aria-label={
                confirmDelete ? "Confirmar exclusão do evento" : "Excluir evento"
              }
            >
              <Trash2 size={15} />
              {confirmDelete ? "Confirmar exclusão" : "Excluir"}
            </button>
          )}
          <div className="flex-1" />
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors min-h-[44px]"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors shadow-sm min-h-[44px]"
          >
            <Save size={15} />
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}
