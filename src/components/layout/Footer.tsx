import { ExternalLink, Scale } from "lucide-react";
import { RESOLUCAO_TSE } from "../../data/constants";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white/70 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        {/* Source */}
        <div className="flex items-center justify-center gap-2">
          <Scale size={14} className="text-secondary-500 flex-shrink-0" />
          <p className="text-sm">
            Dados extraídos da{" "}
            <a
              href={RESOLUCAO_TSE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 underline underline-offset-2 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              {RESOLUCAO_TSE.titulo}
              <ExternalLink size={11} />
            </a>
            , publicada no DJE/TSE em {RESOLUCAO_TSE.dje}.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/50 max-w-lg mx-auto leading-relaxed">
          Site de caráter exclusivamente informativo. Para fins jurídicos,
          consulte a publicação oficial no Diário de Justiça Eletrônico do TSE.
          Este site não possui vínculo institucional com o Tribunal Superior
          Eleitoral.
        </p>

        {/* Credits */}
        <div className="border-t border-white/10 pt-4 space-y-1">
          <p className="text-xs text-white/60">
            Desenvolvido por Wesley Brito — servidor da 56ª Zona Eleitoral/PB
          </p>
          <p className="text-xs text-white/40">
            © {ano} — Calendário Eleitoral Interativo
          </p>
        </div>
      </div>
    </footer>
  );
}
