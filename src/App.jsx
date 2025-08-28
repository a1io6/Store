import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import myRouter from "./router";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <RouterProvider router={myRouter} />
    </CartProvider>
  );
}

export default App;
