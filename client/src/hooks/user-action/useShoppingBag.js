import { useState } from "react";
import { useShoppingBagContext } from "../../contexts/ShoppingBagContext";
import { useAuthContext } from "../../contexts/AuthContext";

export default function useShoppingBag(product) {
  const [showMessage, setShowMessage] = useState(false);
  const { addedToBag, addToBag } = useShoppingBagContext();
  const { isOwner } = useAuthContext();

  let isAdded = addedToBag.find((p) => p?._id === product?._id);

  function handleAddToBag(size, quantity) {
    const newProd = JSON.parse(JSON.stringify(product));
    newProd.size = size;    
    newProd.quantity = quantity;
    isAdded = newProd;

    addToBag(newProd);
    setShowMessage(true);
  }

  const handleHideMessage = () => setShowMessage(false);

  return {
    addedToBag,
    isAdded,
    handleAddToBag,
    isOwner: isOwner(product._ownerId),
    showMessage,
    handleHideMessage,
  };
}
