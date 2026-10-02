import { useState, useEffect } from "react";
import {
  PRIMEIRO_TURNO,
  RETOMADA_CONTADOR_2T,
  SEGUNDO_TURNO,
} from "../data/constants";

export interface CountdownResult {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  label: string;
}

export type CountdownState =
  | { fase: "contagem"; contagem: CountdownResult }
  | { fase: "votacao-1t" }
  | { fase: "encerrado" };

function calcDiff(target: Date, now: Date): Omit<CountdownResult, "label"> {
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

/**
 * Fase do contador em um dado instante:
 * - Antes do 1T → conta para o 1T
 * - Da abertura do 1T até a meia-noite seguinte → oculto (votação/apuração)
 * - Daí até o 2T → conta para o 2T
 * - Após o 2T → encerrado
 */
export function getCountdownState(now: Date): CountdownState {
  if (now < PRIMEIRO_TURNO) {
    return {
      fase: "contagem",
      contagem: { ...calcDiff(PRIMEIRO_TURNO, now), label: "até o 1º Turno" },
    };
  }
  if (now < RETOMADA_CONTADOR_2T) {
    return { fase: "votacao-1t" };
  }
  if (now < SEGUNDO_TURNO) {
    return {
      fase: "contagem",
      contagem: { ...calcDiff(SEGUNDO_TURNO, now), label: "até o 2º Turno" },
    };
  }
  return { fase: "encerrado" };
}

export function useCountdown(): CountdownState {
  const [state, setState] = useState<CountdownState>(() =>
    getCountdownState(new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const next = getCountdownState(new Date());
      setState(next);
      if (next.fase === "encerrado") clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return state;
}
