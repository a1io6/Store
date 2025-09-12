import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  // Загружаем из localStorage при старте
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Сохраняем в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorite = (product) => {
    setFavoriteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (!existing) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorite = (id) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
