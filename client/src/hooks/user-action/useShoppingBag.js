import { useShoppingBagContext } from "../../contexts/ShoppingBagContext";
import useAuthContext from "../auth/useAuthContext";

export default function useShoppingBag(product) {
  const { addedToBag, addToBag, removeFromBag } = useShoppingBagContext();
  const { isOwner } = useAuthContext();

  let isAdded = addedToBag.find((p) => p?._id === product?._id);

  function handleAddToBag() {
    addToBag(product);
    isAdded = product;
  }

  function handleRemoveFromBag() {
    removeFromBag(product);
    isAdded = undefined;
  }

  return { addedToBag, isAdded, handleAddToBag, handleRemoveFromBag, isOwner: isOwner(product._ownerId) };
}
