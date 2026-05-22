import { BookOpen, ExternalLink, Info } from "lucide-react";
import type { EventoCalendario } from "../../types";
import { CalendarExportPanel } from "../calendar/CalendarExportPanel";

function parseObservacoes(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\((https:\/\/[^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer"
        className="underline font-semibold hover:text-primary-900 transition-colors">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

interface EventDetailProps {
  evento: EventoCalendario;
}

function FundamentacaoChip({
  norma,
  dispositivo,
  url,
}: {
  norma: string;
  dispositivo: string;
  url: string;
}) {
  const label = `${norma} — ${dispositivo}`;

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-md bg-primary-100 text-primary-700 px-2.5 py-1 text-xs font-medium hover:bg-primary-200 transition-colors cursor-pointer"
        title={`Abrir ${norma}`}
      >
        <BookOpen size={12} />
        <span>{label}</span>
        <ExternalLink size={10} className="opacity-60" />
      </a>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1 rounded-md bg-neutral-100 text-neutral-500 px-2.5 py-1 text-xs font-medium cursor-default"
      title={`${label} (link ainda não disponível)`}
    >
      <BookOpen size={12} />
      <span>{label}</span>
    </span>
  );
}

export function EventDetail({ evento }: EventDetailProps) {
  return (
    <div className="px-3 sm:px-4 pb-4 pt-1 space-y-3 animate-slide-down">
      {/* Descrição completa */}
      <div className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line break-words">
        {evento.descricao}
      </div>

      {/* Observações */}
      {evento.observacoes && (
        <div className="flex gap-2 rounded-lg bg-primary-100/50 border border-primary-200/60 p-3">
          <Info size={16} className="flex-shrink-0 text-primary-500 mt-0.5" />
          <p className="text-xs text-primary-700 leading-relaxed">
            {parseObservacoes(evento.observacoes!)}
          </p>
        </div>
      )}

      <CalendarExportPanel evento={evento} />

      {/* Fundamentação legal */}
      {evento.fundamentacao.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
            Fundamentação Legal
          </p>
          <div className="flex flex-wrap gap-1.5">
            {evento.fundamentacao.map((f, i) => (
              <FundamentacaoChip
                key={`${f.norma}-${f.dispositivo}-${i}`}
                norma={f.norma}
                dispositivo={f.dispositivo}
                url={f.url}
              />
            ))}
          </div>
        </div>
      )}

      {/* Perfis relevantes */}
      {evento.perfis.length > 0 && (
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-xs text-neutral-400">Relevante para:</span>
          {evento.perfis.map((p) => (
            <span
              key={p}
              className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-600 px-2 py-0.5 text-xs font-medium capitalize"
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
