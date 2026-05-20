import { ExternalLink, Scale } from "lucide-react";
import { Countdown } from "../countdown/Countdown";
import { RESOLUCAO_TSE } from "../../data/constants";

export function Header() {
  return (
    <header className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-10 sm:py-14 text-center">
        {/* Institutional badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 border border-white/15">
          <Scale size={14} className="text-secondary-500" />
          <span className="text-xs sm:text-sm font-medium text-white/90">
            Justiça Eleitoral
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
          Calendário Eleitoral
          <br />
          <span className="text-secondary-500">Eleições 2026</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
          Todos os prazos e datas do processo eleitoral das Eleições Gerais de
          2026, organizados para você.
        </p>

        {/* Resolution links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
          <a
            href={RESOLUCAO_TSE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 transition-colors underline underline-offset-2"
          >
            {RESOLUCAO_TSE.titulo}
            <ExternalLink size={11} />
          </a>
          <span className="hidden sm:inline text-white/30 text-xs select-none">•</span>
          <a
            href="https://www.tse.jus.br/legislacao/compilada/res/2026/resolucao-no-23-750-de-26-de-fevereiro-de-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 transition-colors underline underline-offset-2"
          >
            Resolução nº 23.750/2026 (datas mais importantes)
            <ExternalLink size={11} />
          </a>
        </div>

        {/* Countdown */}
        <div className="mt-8">
          <Countdown />
        </div>
      </div>
    </header>
  );
}
