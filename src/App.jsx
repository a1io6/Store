import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import myRouter from "./Router.jsx";
import "./App.css";
import { ToastContainer} from "react-toastify";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={myRouter} />
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
