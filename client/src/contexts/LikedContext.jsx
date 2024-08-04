import { getSessionData, setSessionData } from "../utils/userData";

import { createContext, useState, useContext } from "react";

const LikedContext = createContext([]);

export default function LikedProvider({ children }) {
  const [liked, setLiked] = useState(() => getSessionData("liked") || []);

  function addLikedProduct(product) {
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

  function removeLikedProduct(product) {
    setLiked((oldState) => {
      const newState = oldState.filter((p) => p._id !== product._id);
      setSessionData("liked", newState);
      return newState;
    });
  }

  return <LikedContext.Provider value={{ liked, addLikedProduct, removeLikedProduct }}>{children}</LikedContext.Provider>;
}

export function useLikeContext() {
  return useContext(LikedContext);
}
