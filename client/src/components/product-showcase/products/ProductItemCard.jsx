import { Link } from "react-router-dom";
import useLikeProducts from "../../../hooks/user-action/useLikeProducts";
import useShoppingBag from "../../../hooks/user-action/useShoppingBag";
import NotificationModal from "../../modals/notification/Notification";

export default function ProductItemCard({ product }) {
  const { isLiked, handleLike, handleRemoveLike, isOwner } = useLikeProducts(product);
  const { isAdded, handleAddToBag, handleRemoveFromBag, showMessage, handleHideMessage } = useShoppingBag(product);

  return (
    <div className="showcase">
      {showMessage && <NotificationModal onRemove={handleHideMessage} prod={product}></NotificationModal>}
      <div className="showcase-banner">
        <img src={product.img} alt={product.productName} className="productuct-img default" width="100%" />

        {isOwner ? (
          ""
        ) : (
          <div className="showcase-actions">
            <button className="btn-action" onClick={isLiked ? handleRemoveLike : handleLike}>
              <ion-icon name={isLiked ? "heart" : "heart-outline"}></ion-icon>
            </button>

            <button className="btn-action" onClick={isAdded ? handleRemoveFromBag : handleAddToBag}>
              <ion-icon name={isAdded ? "bag-add" : "bag-add-outline"}></ion-icon>
            </button>
          </div>
        )}
      </div>

      <div className="showcase-content">
        <Link to={`/details/${product._id}`} className="showcase-category">
          {product.sublist}
        </Link>

        <h3>
          <Link to={`/details/${product._id}`} className="showcase-title">
            {product.productName}
          </Link>
        </h3>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>

        <div className="price-box">
          <p className="price">${Number(product.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
