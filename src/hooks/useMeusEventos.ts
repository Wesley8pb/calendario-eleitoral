import { useState, useEffect, useCallback } from "react";
import type { EventoCustom } from "../types/custom";
import { MAX_MEUS_EVENTOS } from "../types/custom";

const STORAGE_KEY = "calendario-eleitoral-meus-eventos";

function isValidEvento(val: unknown): val is EventoCustom {
  if (!val || typeof val !== "object") return false;
  const v = val as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    v.id.startsWith("custom-") &&
    typeof v.data === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(v.data) &&
    typeof v.titulo === "string" &&
    v.titulo.trim().length > 0 &&
    typeof v.cor === "string" &&
    typeof v.criadoEm === "string"
  );
}

export function useMeusEventos() {
  const [meusEventos, setMeusEventos] = useState<EventoCustom[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as unknown[];
      return Array.isArray(parsed) ? parsed.filter(isValidEvento) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meusEventos));
  }, [meusEventos]);

  const addEvento = useCallback(
    (dados: Omit<EventoCustom, "id" | "criadoEm">) => {
      if (meusEventos.length >= MAX_MEUS_EVENTOS) return;
      const novo: EventoCustom = {
        ...dados,
        id: `custom-${Date.now()}`,
        criadoEm: new Date().toISOString(),
      };
      setMeusEventos((prev) =>
        [...prev, novo].sort((a, b) => a.data.localeCompare(b.data)),
      );
    },
    [meusEventos.length],
  );

  const editEvento = useCallback(
    (id: string, changes: Partial<Omit<EventoCustom, "id" | "criadoEm">>) => {
      setMeusEventos((prev) =>
        prev
          .map((e) => (e.id === id ? { ...e, ...changes } : e))
          .sort((a, b) => a.data.localeCompare(b.data)),
      );
    },
    [],
  );

  const removeEvento = useCallback((id: string) => {
    setMeusEventos((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const importarEventos = useCallback((eventos: EventoCustom[]) => {
    const validos = eventos
      .filter(isValidEvento)
      .slice(0, MAX_MEUS_EVENTOS)
      .sort((a, b) => a.data.localeCompare(b.data));
    setMeusEventos(validos);
  }, []);

  return {
    meusEventos,
    addEvento,
    editEvento,
    removeEvento,
    importarEventos,
    totalMeusEventos: meusEventos.length,
    limiteAtingido: meusEventos.length >= MAX_MEUS_EVENTOS,
  };
}
