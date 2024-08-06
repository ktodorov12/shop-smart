import { useShoppingBagContext } from "../../contexts/ShoppingBagContext";

export default function useCheckout() {
  const { addedToBag, updateProductQuantity, removeFromBag } = useShoppingBagContext();

  const addQuantity = (i) => {
    const updatedQty = Number(addedToBag[i].quantity) + 1;
    updateProductQuantity(i, updatedQty);
  };

  const reduceQuantity = (i) => {
    const updatedQty = Number(addedToBag[i].quantity) - 1;
    updateProductQuantity(i, updatedQty);
  };

  return { addedToBag, addQuantity, reduceQuantity, removeFromBag };
}
