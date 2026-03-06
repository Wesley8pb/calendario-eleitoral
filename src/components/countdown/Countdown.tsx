import { useCountdown } from "../../hooks/useCountdown";
import { CheckCircle } from "lucide-react";

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white/15">
        <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-white/70 mt-1.5 font-medium">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const countdown = useCountdown();

  if (!countdown) {
    return (
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/15">
        <CheckCircle size={20} className="text-green-300" />
        <span className="text-white font-medium text-sm">
          Eleições 2026 realizadas
        </span>
      </div>
    );
  }

  return (
    <div className="text-center animate-countdown-in">
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <CountdownBlock value={countdown.dias} label="dias" />
        <span className="text-2xl font-bold text-white/40 mt-[-20px]">:</span>
        <CountdownBlock value={countdown.horas} label="horas" />
        <span className="text-2xl font-bold text-white/40 mt-[-20px]">:</span>
        <CountdownBlock value={countdown.minutos} label="min" />
        <span className="text-2xl font-bold text-white/40 mt-[-20px]">:</span>
        <CountdownBlock value={countdown.segundos} label="seg" />
      </div>
      <p className="text-white/80 text-sm sm:text-base font-medium mt-3">
        {countdown.label}
      </p>
    </div>
  );
}
