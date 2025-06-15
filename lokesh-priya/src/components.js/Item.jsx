import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

const Item = ({ item }) => {
  const { deleteItem, togglePurchased } = useContext(ShoppingContext);

  return (
    <li style={{ textDecoration: item.purchased ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => togglePurchased(item.id)}
      />
      {item.name}
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
