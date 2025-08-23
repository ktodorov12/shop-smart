import { createContext, useState, useContext } from "react";

import { getSessionData, setSessionData } from "../utils/userData";

import type { PropsChildren } from "../types/props";
import type { ProdData } from "../types/products";

interface LikedContextType {
  liked: ProdData[];
  addLikedProduct: (product: ProdData) => void;
  removeLikedProduct: (product: ProdData) => void;
}

const LikedContext = createContext<LikedContextType>({
  liked: [],
  addLikedProduct: () => {},
  removeLikedProduct: () => {},
});

export default function LikedProvider({ children }: PropsChildren) {
  const likedProds: ProdData[] | [] | undefined = getSessionData("liked");
  const [liked, setLiked] = useState(likedProds || []);

  function addLikedProduct(product: ProdData) {
    setLiked((oldState) => {
      const newState = [...oldState];
      const isLiked = newState.some((s) => s._id == product._id);
      if (!isLiked) {
        newState.push(product);
      }

      setSessionData("liked", newState);
      return newState;
    });
  }

  function removeLikedProduct(product: ProdData) {
    setLiked((oldState) => {
      const newState = oldState.filter((p) => p._id !== product._id);
      setSessionData("liked", newState);
      return newState;
    });
  }

  return (
    <LikedContext.Provider value={{ liked, addLikedProduct, removeLikedProduct }}>
      {children}
    </LikedContext.Provider>
  );
}

export function useLikeContext() {
  return useContext(LikedContext);
}
