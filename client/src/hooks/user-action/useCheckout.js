import { useState } from "react";
import { useShoppingBagContext } from "../../contexts/ShoppingBagContext";

export default function useCheckout() {
  const [openBag, setOpenBag] = useState(false);
  const { addedToBag, updateProductQuantity, removeFromBag, removeAllProducts } = useShoppingBagContext();

  const addQuantity = (i) => {
    const updatedQty = Number(addedToBag[i].quantity) + 1;
    updateProductQuantity(i, updatedQty);
  };

  const reduceQuantity = (i) => {
    const updatedQty = Number(addedToBag[i].quantity) - 1;
    updateProductQuantity(i, updatedQty);
  };

  const handleOpenBag = () => setOpenBag(true);
  const handleCloseBag = () => setOpenBag(false);

  return { addedToBag, addQuantity, reduceQuantity, removeFromBag, openBag, handleCloseBag, handleOpenBag, removeAllProducts };
}
