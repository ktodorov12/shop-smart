import { createContext, useContext, useState } from "react";
import { getSessionData, setSessionData } from "../utils/userData";

const ShoppingBagContext = createContext([]);

export default function ShoppingBagProvider({ children }) {
  const [addedToBag, setAddedToBag] = useState(() => getSessionData("shoppingBag") || []);

  function addToBag(product) {
    setAddedToBag((oldState) => {
      const newState = [...oldState];
      const isAdded = newState.find((p) => p.size === product.size);
      if (!isAdded) {
        newState.push(product);
      } else {
        isAdded.quantity = Number(isAdded.quantity) + Number(product.quantity);
      }

      setSessionData("shoppingBag", newState);
      return newState;
    });
  }

  function removeFromBag(product) {
    setAddedToBag((oldState) => {
      const newState = oldState.filter((p) => p._id !== product._id);
      setSessionData("shoppingBag", newState);
      return newState;
    });
  }

  const handleProductsChange = (products) => {
    if (!products) {
      console.log("No products");
      return;
    }
    setAddedToBag(products);
    setSessionData("shoppingBag", products);
  };

  return <ShoppingBagContext.Provider value={{ addedToBag, addToBag, removeFromBag, handleProductsChange }}>{children}</ShoppingBagContext.Provider>;
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
