import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);

  // ➕ Добавить в избранное
  const addToFavorite = (product) => {
    setFavoriteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (!existing) {
        return [...prev, product];
      }
      return prev; // если товар уже есть, не добавляем второй раз
    });
  };

  // ❌ Удалить из избранного
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
