import { useMemo } from "react";
import type { EventoCalendario } from "../../types";
import { agruparPorMes, agruparPorData } from "../../lib/utils";
import { MonthSection } from "./MonthSection";
import { DateMarker } from "./DateMarker";
import { EventCard } from "./EventCard";

interface TimelineProps {
  eventos: EventoCalendario[];
  allExpanded: boolean | null;
}

export function Timeline({ eventos, allExpanded }: TimelineProps) {
  const meses = useMemo(() => agruparPorMes(eventos), [eventos]);

  // Mês atual para destaque
  const hoje = new Date();
  const mesAtualChave = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;

  return (
    <div className="relative">
      {/* Linha vertical da timeline */}
      <div
        className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-primary-200"
        aria-hidden="true"
      />

      <div className="space-y-10">
        {meses.map((grupoMes) => {
          const gruposDatas = agruparPorData(grupoMes.eventos);

          return (
            <MonthSection
              key={`${grupoMes.chave}-${allExpanded ?? "padrao"}`}
              id={`mes-${grupoMes.chave}`}
              label={grupoMes.label}
              eventCount={grupoMes.eventos.length}
              isCurrentMonth={grupoMes.chave === mesAtualChave}
              allExpanded={allExpanded}
            >
              {gruposDatas.map((grupoData) => (
                <div
                  key={grupoData.data}
                  data-date={grupoData.data}
                  className="relative scroll-mt-36"
                >
                  {/* DateMarker — row layout: circle + info lado a lado, acima dos cards */}
                  <div className="relative z-10 mb-2">
                    <DateMarker
                      data={grupoData.data}
                      diaSemana={grupoData.diaSemana}
                      marcos={grupoData.marcos}
                      eventCount={grupoData.eventos.length}
                    />
                  </div>

                  {/* Cards do dia — com recuo à esquerda alinhado ao conteúdo do DateMarker */}
                  <div className="pl-[52px] space-y-2">
                    {grupoData.eventos.map((evento) => (
                      <EventCard key={evento.id} evento={evento} />
                    ))}
                  </div>
                </div>
              ))}
            </MonthSection>
          );
        })}
      </div>
    </div>
  );
}
