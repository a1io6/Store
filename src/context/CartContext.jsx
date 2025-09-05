import React, { createContext, useState } from "react";

// 1️⃣ Контекст түзүлдү
export const CartContext = createContext();

// 2️⃣ Провайдер компоненти
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Товар кошуу
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Эгер товар бар болсо, count өстүр
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }
      // Эгер жок болсо, жаңы кош
      return [...prev, { ...product, count: 1 }];
    });
  };

  // 🔄 Саны өзгөртүү
  const updateCount = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, (item.count || 1) + delta) }
          : item
      )
    );
  };

  // ❌ Товарды өчүрүү
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
