import { useLikeContext } from "../../contexts/LikedContext";

export default function useLikeProducts(product) {
  const { liked, addLikedProduct, removeLikedProduct } = useLikeContext();
  let isLiked = liked.find((p) => p._id == product._id);

  const handleLike = () => {
    isLiked = product;
    addLikedProduct(product);
  };

  const handleRemoveLike = () => {
    isLiked = undefined;
    removeLikedProduct(product);
  };

  return { isLiked, handleLike, handleRemoveLike };
}
