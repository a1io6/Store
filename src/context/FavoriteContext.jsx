import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (item) => {
    // Эгер товар мурун кошулган болсо кайра кошпойт
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
