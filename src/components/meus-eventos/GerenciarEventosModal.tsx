import { useState, useEffect, useRef } from "react";
import {
  X,
  Download,
  Upload,
  FolderOpen,
  AlertTriangle,
  CheckCircle2,
  Settings2,
} from "lucide-react";
import type { EventoCustom } from "../../types/custom";
import { MAX_MEUS_EVENTOS } from "../../types/custom";
import { cn } from "../../lib/utils";

interface GerenciarEventosModalProps {
  meusEventos: EventoCustom[];
  onImportar: (eventos: EventoCustom[]) => void;
  onClose: () => void;
}

interface ArquivoExportado {
  versao: string;
  app: string;
  exportadoEm: string;
  totalEventos: number;
  eventos: EventoCustom[];
}

function isEventoValido(val: unknown): val is EventoCustom {
  if (!val || typeof val !== "object") return false;
  const v = val as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    v.id.startsWith("custom-") &&
    typeof v.data === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(v.data) &&
    typeof v.titulo === "string" &&
    v.titulo.trim().length > 0 &&
    v.titulo.trim().length <= 120 &&
    (v.descricao === undefined || typeof v.descricao === "string") &&
    typeof v.cor === "string" &&
    typeof v.criadoEm === "string"
  );
}

function parseArquivoImportacao(texto: string): EventoCustom[] | null {
  try {
    const parsed = JSON.parse(texto) as unknown;

    let lista: unknown[];
    if (Array.isArray(parsed)) {
      lista = parsed;
    } else if (
      parsed &&
      typeof parsed === "object" &&
      "eventos" in parsed &&
      Array.isArray((parsed as Record<string, unknown>).eventos)
    ) {
      lista = (parsed as ArquivoExportado).eventos;
    } else {
      return null;
    }

    return lista.filter(isEventoValido);
  } catch {
    return null;
  }
}

function exportarJSON(meusEventos: EventoCustom[]) {
  const dados: ArquivoExportado = {
    versao: "1.0",
    app: "Calendario Eleitoral 2026",
    exportadoEm: new Date().toISOString(),
    totalEventos: meusEventos.length,
    eventos: meusEventos,
  };

  const json = JSON.stringify(dados, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `meus-eventos-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function GerenciarEventosModal({
  meusEventos,
  onImportar,
  onClose,
}: GerenciarEventosModalProps) {
  const [pendingImport, setPendingImport] = useState<EventoCustom[] | null>(
    null,
  );
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPendingImport(null);
    setImportError(null);

    const reader = new FileReader();
    reader.onload = (ev) => {
      const texto = ev.target?.result as string;
      const eventos = parseArquivoImportacao(texto);

      if (!eventos || eventos.length === 0) {
        setImportError(
          "Arquivo inválido ou sem eventos reconhecíveis. Verifique se é um arquivo exportado por este app.",
        );
        return;
      }

      setPendingImport(eventos.slice(0, MAX_MEUS_EVENTOS));
    };
    reader.readAsText(file, "utf-8");

    // Permite selecionar o mesmo arquivo novamente se necessário
    e.target.value = "";
  };

  const handleConfirmImport = () => {
    if (!pendingImport) return;
    onImportar(pendingImport);
    setImportSuccess(true);
    setPendingImport(null);
  };

  const excedeLimite =
    pendingImport !== null && pendingImport.length === MAX_MEUS_EVENTOS;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed z-50 bg-white shadow-2xl flex flex-col",
          // Mobile: bottom sheet
          "inset-x-0 bottom-0 rounded-t-2xl max-h-[88vh] animate-slide-up",
          // Desktop: modal centralizado
          "lg:inset-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
          "lg:rounded-2xl lg:w-full lg:max-w-lg lg:max-h-[85vh]",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gerenciar-title"
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b border-neutral-100 px-4 py-3 flex items-center justify-between rounded-t-2xl lg:rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Settings2 size={16} className="text-neutral-600" />
            <h2
              id="gerenciar-title"
              className="text-sm font-bold text-neutral-700"
            >
              Gerenciar Meus Eventos
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* ── Exportar ── */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary-50 rounded-lg text-primary-700 flex-shrink-0 mt-0.5">
                <Download size={16} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-800">
                  Exportar eventos
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  Salva todos os seus eventos em um arquivo{" "}
                  <code className="bg-neutral-100 px-1 rounded text-neutral-600">
                    .json
                  </code>{" "}
                  para transferir entre dispositivos ou criar um backup.
                </p>
              </div>
            </div>

            {meusEventos.length === 0 ? (
              <p className="text-xs text-neutral-400 italic pl-1">
                Nenhum evento para exportar.
              </p>
            ) : (
              <button
                onClick={() => exportarJSON(meusEventos)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary-700 hover:bg-primary-900 rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <Download size={15} />
                Exportar {meusEventos.length} evento
                {meusEventos.length !== 1 ? "s" : ""} (.json)
              </button>
            )}
          </div>

          {/* ── Importar ── */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-teal-50 rounded-lg text-teal-700 flex-shrink-0 mt-0.5">
                <Upload size={16} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-800">
                  Importar eventos
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                  Restaure eventos de um arquivo exportado anteriormente.{" "}
                  <span className="font-medium text-amber-700">
                    Os eventos atuais serão completamente substituídos.
                  </span>
                </p>
              </div>
            </div>

            {/* Estado: sucesso */}
            {importSuccess ? (
              <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 p-3">
                <CheckCircle2
                  size={16}
                  className="text-green-600 flex-shrink-0"
                />
                <p className="text-sm font-medium text-green-700">
                  Eventos importados com sucesso!
                </p>
              </div>
            ) : (
              <>
                {/* Botão selecionar arquivo */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  <FolderOpen size={15} />
                  Selecionar arquivo (.json)
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileChange}
                  className="sr-only"
                  aria-label="Selecionar arquivo de eventos para importar"
                />

                {/* Erro de parse */}
                {importError && (
                  <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3">
                    <AlertTriangle
                      size={14}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <p className="text-xs text-red-700">{importError}</p>
                  </div>
                )}

                {/* Confirmação de importação */}
                {pendingImport && (
                  <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle
                        size={14}
                        className="text-amber-600 flex-shrink-0 mt-0.5"
                      />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-amber-900">
                          {pendingImport.length} evento
                          {pendingImport.length !== 1 ? "s" : ""} encontrado
                          {pendingImport.length !== 1 ? "s" : ""}
                          {excedeLimite && (
                            <span className="font-normal text-amber-700">
                              {" "}
                              (limite de {MAX_MEUS_EVENTOS} aplicado)
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Esta ação vai{" "}
                          <strong>substituir permanentemente</strong> seus{" "}
                          {meusEventos.length} evento
                          {meusEventos.length !== 1 ? "s" : ""} atuais. Esta
                          operação não pode ser desfeita.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => setPendingImport(null)}
                        className="flex-1 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors border border-neutral-200 bg-white"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleConfirmImport}
                        className="flex-1 py-2 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                      >
                        Importar mesmo assim
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Nota informativa */}
          <p className="text-xs text-neutral-400 text-center px-2 leading-relaxed">
            Os dados ficam salvos apenas no navegador deste dispositivo. Use a
            exportação para sincronizá-los com outros dispositivos ou protegê-los
            de limpezas de cache.
          </p>
        </div>
      </div>
    </>
  );
}
