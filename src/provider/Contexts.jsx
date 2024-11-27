import React, { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

const Contexts = ({ children }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/adventures.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <CardContext.Provider value={{ cards }}>
      {children}
    </CardContext.Provider>
  );
};

export default Contexts;
