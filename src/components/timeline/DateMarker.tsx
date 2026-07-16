import { cn } from "../../lib/utils";

interface DateMarkerProps {
  data: string; // "YYYY-MM-DD"
  diaSemana: string;
  marcos: string[];
  eventCount: number;
}

const MESES = [
  { abreviacao: "JAN", nome: "janeiro" },
  { abreviacao: "FEV", nome: "fevereiro" },
  { abreviacao: "MAR", nome: "março" },
  { abreviacao: "ABR", nome: "abril" },
  { abreviacao: "MAI", nome: "maio" },
  { abreviacao: "JUN", nome: "junho" },
  { abreviacao: "JUL", nome: "julho" },
  { abreviacao: "AGO", nome: "agosto" },
  { abreviacao: "SET", nome: "setembro" },
  { abreviacao: "OUT", nome: "outubro" },
  { abreviacao: "NOV", nome: "novembro" },
  { abreviacao: "DEZ", nome: "dezembro" },
] as const;

export function DateMarker({
  data,
  diaSemana,
  marcos,
  eventCount,
}: DateMarkerProps) {
  const [, month, day] = data.split("-");
  const dayNum = parseInt(day, 10);
  const mes = MESES[Number(month) - 1];

  return (
    <div className="flex items-start gap-3 relative">
      {/* Nó circular na timeline */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
            "bg-primary-700 text-white shadow-sm",
            "ring-2 ring-white",
          )}
        >
          {dayNum}
        </div>
        {mes && (
          <span
            className="absolute top-11 left-1/2 -translate-x-1/2 bg-neutral-50 px-1 text-[10px] font-semibold leading-none tracking-[0.08em] text-neutral-400"
            aria-label={`Mês de ${mes.nome}`}
          >
            {mes.abreviacao}
          </span>
        )}
      </div>

      {/* Info do dia */}
      <div className="pt-1.5 min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium text-neutral-700 capitalize">
            {diaSemana}
          </span>
          <span className="text-xs text-neutral-400">
            {eventCount} {eventCount === 1 ? "evento" : "eventos"}
          </span>
        </div>

        {marcos.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {marcos.map((marco) => (
              <span
                key={marco}
                className="inline-flex items-center rounded-md bg-primary-100 text-primary-700 px-2 py-0.5 text-xs font-medium"
              >
                {marco}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
