import React from "react";
import { ShoppingProvider } from "./context/ShoppingContext";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <ShoppingProvider>
      <div>
        <h1>🛒 Shopping List</h1>
        <ItemForm />
        <ItemList />
      </div>
    </ShoppingProvider>
  );
};

export default App;
