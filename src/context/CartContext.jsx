
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, count: (item.count || 1) + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const updateCount = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, count: Math.max(1, (item.count || 1) + delta) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCount }}>
      {children}
    </CartContext.Provider>
  );
}
