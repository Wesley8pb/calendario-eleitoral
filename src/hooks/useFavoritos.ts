import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "calendario-eleitoral-favoritos";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? new Set<string>(JSON.parse(raw) as string[]) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  // Persiste no localStorage toda vez que o set muda
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favoritos]));
  }, [favoritos]);

  const toggleFavorito = useCallback((id: string) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isFavorito = useCallback(
    (id: string) => favoritos.has(id),
    [favoritos],
  );

  return {
    favoritos,
    toggleFavorito,
    isFavorito,
    totalFavoritos: favoritos.size,
  };
}
