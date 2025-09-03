import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext"; // 👈 коштук
import myRouter from "./Router.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <RouterProvider router={myRouter} />
        <ToastContainer />
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
