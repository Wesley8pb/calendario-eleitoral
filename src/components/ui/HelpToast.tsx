import { X, Calendar, Filter, Star, ListChecks, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface HelpToastProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpToast({ isOpen, onClose }: HelpToastProps) {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary-700 p-1.5 text-white">
                <Info size={18} />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Guia de Importação
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

          <div className="space-y-4">
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

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-primary-700 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-900 active:scale-[0.98]"
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
