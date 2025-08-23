import { useLikeContext } from "../../contexts/LikedContext";
import { useAuthContext } from "../../contexts/AuthContext";
import type { ProdData } from "../../types/products";

export default function useLikeProducts(product: ProdData) {
  const { liked, addLikedProduct, removeLikedProduct } = useLikeContext();
  const { isOwner } = useAuthContext();

  let isLiked = liked.find((p) => p?._id == product?._id);

  const handleLike = () => {
    isLiked = product;
    addLikedProduct(product);
  };

  const handleRemoveLike = () => {
    isLiked = undefined;
    removeLikedProduct(product);
  };

  return { liked, isLiked, handleLike, handleRemoveLike, isOwner: isOwner(product?._ownerId) };
}
