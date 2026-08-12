import { ExternalLink, Scale, CalendarDays, BookMarked, ChevronDown, Link2 } from "lucide-react";
import { Countdown } from "../countdown/Countdown";
import { getLinkReferencia } from "../../data/linksReferencia";

const resolucaoCalendario = getLinkReferencia("res-tse-23760-2026");
const resolucaoCadastro = getLinkReferencia("res-tse-23750-2026");

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
        <h1 className="font-display font-bold text-white text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.02em] [text-shadow:0_2px_12px_rgba(0,0,0,0.30)]">
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
            href={resolucaoCalendario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 transition-colors underline underline-offset-2"
          >
            Resolução TSE nº 23.760/2026
            <ExternalLink size={11} />
          </a>
          <span className="hidden sm:inline text-white/30 text-xs select-none">•</span>
          <a
            href={resolucaoCadastro.url}
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

        {/* Botões de navegação rápida */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("calendario-interativo")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-primary-800 bg-white hover:bg-white/90 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800"
          >
            <CalendarDays size={17} strokeWidth={2.5} />
            Calendário Interativo
            <ChevronDown size={15} strokeWidth={2.5} className="opacity-60" />
          </button>

          <button
            onClick={() => scrollTo("meus-eventos")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-teal-600/80 hover:bg-teal-500/90 border border-teal-400/40 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800"
          >
            <BookMarked size={17} strokeWidth={2.5} />
            Meus Eventos
            <ChevronDown size={15} strokeWidth={2.5} className="opacity-60" />
          </button>

          <button
            onClick={() => scrollTo("links-referencia")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-primary-900 bg-secondary-500 hover:bg-secondary-100 border border-secondary-500/70 shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800"
          >
            <Link2 size={17} strokeWidth={2.5} />
            Links de referência
            <ChevronDown size={15} strokeWidth={2.5} className="opacity-60" />
          </button>
        </div>
      </div>
    </header>
  );
}
