import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { OrdersProvider } from "./context/OrdersContext";
import myRouter from "./Router.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <OrdersProvider>
          <RouterProvider router={myRouter} />
          <ToastContainer />
        </OrdersProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
