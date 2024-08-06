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

  function removeFromBag(i) {
    setAddedToBag((oldState) => {
      const newState = oldState.filter((_, ind) => ind !== i);
      setSessionData("shoppingBag", newState);
      return newState;
    });
  }

  function updateProductQuantity(index, quantity) {
    setAddedToBag((oldState) => {
      const newState = [...oldState];
      newState[index].quantity = quantity < 1 ? 1 : quantity;
      return newState;
    });
  }

  return <ShoppingBagContext.Provider value={{ addedToBag, addToBag, removeFromBag, updateProductQuantity }}>{children}</ShoppingBagContext.Provider>;
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
