import { createContext, useContext, useState } from "react";

import { getSessionData, removeSessionData, setSessionData } from "../utils/userData";

import type { PropsChildren } from "../types/props";
import type { ProdInBag } from "../types/products";

interface ShoppingBagContextType {
  addedToBag: ProdInBag[];
  addToBag: (product: ProdInBag) => void;
  removeFromBag: (i: number) => void;
  updateProductQuantity: (index: number, quantity: number) => void;
  removeAllProducts: () => void;
}

const ShoppingBagContext = createContext<ShoppingBagContextType>({
  addedToBag: [],
  addToBag: () => {},
  removeFromBag: () => {},
  updateProductQuantity: () => {},
  removeAllProducts: () => {},
});

export default function ShoppingBagProvider({ children }: PropsChildren) {
  const bag: ProdInBag[] | [] | undefined = getSessionData("shoppingBag");
  const [addedToBag, setAddedToBag] = useState(bag || []);

  function addToBag(product: ProdInBag) {
    setAddedToBag((oldState) => {
      const newState = [...oldState];
      const isAdded = newState.find(
        (p) => p.size === product.size && p._id === product._id
      );
      if (!isAdded) {
        newState.push(product);
      } else {
        isAdded.quantity = String(Number(isAdded.quantity) + Number(product.quantity));
      }

      setSessionData("shoppingBag", newState);
      return newState;
    });
  }

  function removeFromBag(i: number) {
    setAddedToBag((oldState) => {
      const newState = oldState.filter((_, ind) => ind !== i);
      setSessionData("shoppingBag", newState);
      return newState;
    });
  }

  function updateProductQuantity(index: number, quantity: number) {
    setAddedToBag((oldState) => {
      const newState = [...oldState];
      newState[index].quantity = String(quantity < 1 ? 1 : quantity);
      return newState;
    });
  }

  function removeAllProducts() {
    setAddedToBag([]);
    removeSessionData("shoppingBag");
  }

  return (
    <ShoppingBagContext.Provider
      value={{
        addedToBag,
        addToBag,
        removeFromBag,
        updateProductQuantity,
        removeAllProducts,
      }}>
      {children}
    </ShoppingBagContext.Provider>
  );
}

export function useShoppingBagContext() {
  return useContext(ShoppingBagContext);
}
