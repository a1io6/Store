import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { OrdersProvider } from "./context/OrdersContext";
import { ReviewProvider } from "./context/ReviewContext.jsx";
import myRouter from "./Router.jsx";
import "./App.css";
import { ToastContainer } from "react-toastify";

import { FruitProvider } from "./context/FruitContext.jsx";

function App() {
  return (
    <CartProvider>
      <FavoriteProvider>
        <OrdersProvider>
          <ReviewProvider>
            <FruitProvider>
              <RouterProvider router={myRouter} />
              <ToastContainer />
            </FruitProvider>
          </ReviewProvider>
        </OrdersProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
