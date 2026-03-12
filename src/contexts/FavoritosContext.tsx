import { createContext, useContext } from "react";

interface FavoritosContextValue {
  isFavorito: (id: string) => boolean;
  toggleFavorito: (id: string) => void;
}

export const FavoritosContext = createContext<FavoritosContextValue>({
  isFavorito: () => false,
  toggleFavorito: () => {},
});

export function useFavoritosContext() {
  return useContext(FavoritosContext);
}
