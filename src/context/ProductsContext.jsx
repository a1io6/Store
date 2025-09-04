import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [actionsLog, setActionsLog] = useState([]); // акыркы аракеттер

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    setActionsLog((prev) => [
      `Новый товар добавлен: "${product.name}"`,
      ...prev,
    ]);
  };

  const deleteProduct = (product) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
    setActionsLog((prev) => [
      `Товар удален: "${product.name}"`,
      ...prev,
    ]);
  };

  const toggleProduct = (product, activated) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, activated } : p
      )
    );
    setActionsLog((prev) => [
      `Товар "${product.name}" ${activated ? "включен" : "отключен"}`,
      ...prev,
    ]);
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, deleteProduct, toggleProduct, actionsLog }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
