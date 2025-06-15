import React, { createContext, useState, useEffect } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList"));
    if (savedItems) setItems(savedItems);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), name: item, purchased: false }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const togglePurchased = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  return (
    <ShoppingContext.Provider value={{ items, addItem, deleteItem, togglePurchased }}>
      {children}
    </ShoppingContext.Provider>
  );
};
