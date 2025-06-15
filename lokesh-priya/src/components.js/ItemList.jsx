import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import Item from "./Item";

const ItemList = () => {
  const { items } = useContext(ShoppingContext);

  return (
    <ul>
      {items.length === 0 ? (
        <p>No items in the list.</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </ul>
  );
};

export default ItemList;
