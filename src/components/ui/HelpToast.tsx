import { X, Calendar, Filter, Star, ListChecks, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface HelpToastProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpToast({ isOpen, onClose }: HelpToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"export" | "import">("export");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-4 bottom-20 z-50 flex justify-center transition-all duration-300 ease-out sm:bottom-6 sm:inset-x-auto sm:right-6 sm:max-w-md",
        isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        {/* Background Accent */}
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-100/50 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-3.5">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary-700 p-1.5 text-white">
                <Info size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-900 font-sans">
                Guia de Ajuda
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
              aria-label="Fechar guia"
            >
              <X size={20} />
            </button>
          </div>

          {/* Pill Tabs Selector */}
          <div className="flex rounded-lg bg-neutral-100 p-1 mb-4">
            <button
              onClick={() => setActiveTab("export")}
              className={cn(
                "flex-1 rounded-md py-1.5 text-xs font-bold transition-all duration-200",
                activeTab === "export"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Como Exportar
            </button>
            <button
              onClick={() => setActiveTab("import")}
              className={cn(
                "flex-1 rounded-md py-1.5 text-xs font-bold transition-all duration-200",
                activeTab === "import"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              Importar no Google Agenda
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[220px] transition-all duration-300">
            {activeTab === "export" ? (
              <div className="space-y-4 animate-tab-fade">
                <HelpItem
                  icon={<Calendar size={16} />}
                  title="Individual"
                  description="Expanda qualquer evento e clique em 'Adicionar ao calendário' para baixar o arquivo .ics."
                />
                <HelpItem
                  icon={<ListChecks size={16} />}
                  title="Em Lote"
                  description="Use o painel 'Exportar eventos filtrados' acima da lista para baixar todos os eventos visíveis de uma vez. Para que funcione, é necessário fazer alguma filtragem antes."
                />
                <HelpItem
                  icon={<Filter size={16} />}
                  title="Refinar com Filtros"
                  description="Use o painel de filtros (ícone flutuante) para selecionar apenas categorias, meses, ou turnos específicos antes de exportar."
                />
                <HelpItem
                  icon={<Star size={16} />}
                  title="Favoritos"
                  description="Marque eventos com a estrela e filtre por 'Apenas favoritos' para criar um calendário 100% personalizado."
                />
              </div>
            ) : (
              <div className="space-y-3.5 animate-tab-fade">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Para importar um arquivo <code className="bg-neutral-100 px-1 py-0.5 rounded text-primary-700 font-mono text-[10px]">.ics</code> para o seu Google Agenda, utilize a versão Web:
                </p>
                
                <div className="relative border-l-2 border-primary-100 pl-4 ml-2.5 space-y-3">
                  <StepItem
                    step={1}
                    description="Acesse o Google Agenda pelo computador e faça login na sua conta."
                  />
                  <StepItem
                    step={2}
                    description='Abaixo do calendário na barra vertical à esquerda, procure "Outras Agendas" e clique no botão +'
                  />
                  <StepItem
                    step={3}
                    description='No menu, clique em Importar.'
                  />
                  <StepItem
                    step={4}
                    description='Clique em Selecionar arquivo no seu computador, escolha o seu arquivo .ics e clique em Abrir.'
                  />
                  <StepItem
                    step={5}
                    description='No menu suspenso "Adicionar à agenda", escolha qual calendário receberá os eventos.'
                  />
                  <StepItem
                    step={6}
                    description='Clique em Importar.'
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-5 w-full rounded-xl bg-primary-700 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-900 active:scale-[0.98]"
          >
            Entendi, obrigado!
          </button>
        </div>
      </div>
    </div>
  );
}

function HelpItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-neutral-800">{title}</h4>
        <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function StepItem({ step, description }: { step: number; description: string }) {
  return (
    <div className="relative flex gap-3">
      <div className="absolute -left-[24.5px] top-0 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-primary-700 text-[9px] font-bold text-white shadow-sm ring-4 ring-white">
        {step}
      </div>
      <div>
        <p className="text-xs leading-relaxed text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
}
