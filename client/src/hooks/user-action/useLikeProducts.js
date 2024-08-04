import { useLikeContext } from "../../contexts/LikedContext";
import useAuthContext from "../auth/useAuthContext";

export default function useLikeProducts(product) {
  const { liked, addLikedProduct, removeLikedProduct } = useLikeContext();
  const { isOwner } = useAuthContext();

  let isLiked = liked.find((p) => p._id == product._id);

  const handleLike = () => {
    isLiked = product;
    addLikedProduct(product);
  };

  const handleRemoveLike = () => {
    isLiked = undefined;
    removeLikedProduct(product);
  };

  return { isLiked, handleLike, handleRemoveLike, isOwner };
}
