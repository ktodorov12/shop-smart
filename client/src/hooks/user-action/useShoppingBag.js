import { useState } from "react";
import { useShoppingBagContext } from "../../contexts/ShoppingBagContext";
import { useAuthContext } from "../../contexts/AuthContext";

export default function useShoppingBag(product) {
  const [showMessage, setShowMessage] = useState(false);
  const { addedToBag, addToBag, removeFromBag } = useShoppingBagContext();
  const { isOwner } = useAuthContext();

  let isAdded = addedToBag.find((p) => p?._id === product?._id);

  function handleAddToBag(size, quantity) {
    product.size = size;    
    product.quantity = quantity;
    isAdded = product;

    addToBag(product);
    setShowMessage(true);
  }

  function handleRemoveFromBag() {
    delete product.quantity;
    isAdded = undefined;

    removeFromBag(product);
    setShowMessage(false);
  }

  const handleHideMessage = () => setShowMessage(false);

  return {
    addedToBag,
    isAdded,
    handleAddToBag,
    handleRemoveFromBag,
    isOwner: isOwner(product._ownerId),
    showMessage,
    handleHideMessage,
  };
}
