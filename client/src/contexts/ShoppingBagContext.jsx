import { createContext, useContext, useState } from "react";
import { getSessionData, setSessionData } from "../utils/userData";

const ShoppingBagContext = createContext([]);

export default function ShoppingBagProvider({ children }) {
  const [addedToBag, setAddedToBag] = useState(() => getSessionData("shoppingBag") || []);

  function addToBag(product) {
    setAddedToBag((oldState) => {
      const newState = [...oldState];
      const isAdded = newState.find((p) => p._id === product._id);
      if (!isAdded) {
        newState.push(product);
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

  return <ShoppingBagContext.Provider value={{ addedToBag, addToBag, removeFromBag }}>{children}</ShoppingBagContext.Provider>;
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
