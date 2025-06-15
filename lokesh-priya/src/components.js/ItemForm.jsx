import React, { useState, useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

const ItemForm = () => {
  const [itemName, setItemName] = useState("");
  const { addItem } = useContext(ShoppingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      addItem(itemName);
      setItemName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
