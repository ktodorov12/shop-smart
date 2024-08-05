import { useEffect, useState } from "react";
import { useShoppingBagContext } from "../contexts/ShoppingBagContext";

export default function useCheckout() {
  const [products, setProducts] = useState([]);
  const { addedToBag, handleProductsChange } = useShoppingBagContext();

  useEffect(() => {
    if (addedToBag) {
      setProducts(addedToBag);
    }
  }, [addedToBag]);

  const addQuantity = (i) => {
    setProducts((oldState) => {
      const newState = [...oldState];
      newState[i].quantity = Number(newState[i].quantity) + 1;

      handleProductsChange(newState);
      return newState;
    });
  };

  const reduceQuantity = (i) => {
    setProducts((oldState) => {
      const newState = [...oldState];
      newState[i].quantity = Number(newState[i].quantity) - 1;
      if (newState[i].quantity < 1) {
        newState[i].quantity = 1;
      }

      handleProductsChange(newState);
      return newState;
    });
  };

  const removeFromBag = (i) => {
    setProducts((oldState) => {
      const newState = oldState.filter((_, index) => index !== i);

      handleProductsChange(newState);
      return newState;
    });
  };

  return { products, addQuantity, reduceQuantity, removeFromBag };
}
