import { useState, useEffect } from "react";
import { PRIMEIRO_TURNO, SEGUNDO_TURNO } from "../data/constants";

export interface CountdownResult {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  label: string;
}

function calcDiff(target: Date): Omit<CountdownResult, "label"> {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

/**
 * Hook de contagem regressiva:
 * - Antes do 1T → conta para o 1T
 * - Entre 1T e 2T → conta para o 2T
 * - Após 2T → retorna null
 */
export function useCountdown(): CountdownResult | null {
  const [result, setResult] = useState<CountdownResult | null>(() => {
    const now = new Date();
    if (now < PRIMEIRO_TURNO) {
      return { ...calcDiff(PRIMEIRO_TURNO), label: "até o 1º Turno" };
    }
    if (now < SEGUNDO_TURNO) {
      return { ...calcDiff(SEGUNDO_TURNO), label: "até o 2º Turno" };
    }
    return null;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now < PRIMEIRO_TURNO) {
        setResult({ ...calcDiff(PRIMEIRO_TURNO), label: "até o 1º Turno" });
      } else if (now < SEGUNDO_TURNO) {
        setResult({ ...calcDiff(SEGUNDO_TURNO), label: "até o 2º Turno" });
      } else {
        setResult(null);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return result;
}
