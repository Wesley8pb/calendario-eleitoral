import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "calendario-eleitoral-favoritos";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Set<string>();
      const parsed = JSON.parse(raw) as unknown[];
      // Valida formato dos IDs: apenas "YYYY-MM-DD-N" são aceitos
      const valid = Array.isArray(parsed)
        ? parsed.filter((id): id is string => typeof id === "string" && /^\d{4}-\d{2}-\d{2}-\d+$/.test(id))
        : [];
      return new Set<string>(valid);
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

  const favoritarTodos = useCallback((ids: string[]) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      return next;
    });
  }, []);

  const desfavoritarTodos = useCallback((ids: string[]) => {
    setFavoritos((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  }, []);

  return {
    favoritos,
    toggleFavorito,
    isFavorito,
    totalFavoritos: favoritos.size,
    favoritarTodos,
    desfavoritarTodos,
  };
}
