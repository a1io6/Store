import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Загружаем корзину из localStorage при старте
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Сохраняем корзину в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const updateCount = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, (item.count || 1) + delta) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
