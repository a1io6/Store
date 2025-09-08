import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get("https://689ead013fed484cf877ace7.mockapi.io/fruit")
      .then(res => setFruits(res.data))
      .catch(err => console.error("API катасы:", err));
  }, []);

  return (
    <FruitContext.Provider value={{ fruits }}>
      {children}
    </FruitContext.Provider>
  );
};
