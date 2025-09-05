import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoriteItems, setFavoriteItems] = useState([]);


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
