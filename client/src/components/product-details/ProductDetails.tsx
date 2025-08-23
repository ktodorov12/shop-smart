import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import styles from "./ProductDetails.module.css";

import Delete from "../delete/Delete";
import NotificationModal from "../modals/notification/Notification";

import useGetDetails from "../../hooks/products/useGetDetails";
import useLikeProducts from "../../hooks/user-action/useLikeProducts";
import useShoppingBag from "../../hooks/user-action/useShoppingBag";
import useDeleteProduct from "../../hooks/products/useDeleteProduct";
import usePickSizeAndQty from "../../hooks/user-action/usePickSizeAndQty";

export default function ProductDetails() {
  const { product, isOwner, isLoading } = useGetDetails();
  const { isLiked, handleLike, handleRemoveLike } = useLikeProducts(product);
  const { handleAddToBag, showMessage, handleHideMessage } = useShoppingBag(product);

  // TODO: chech circular dependency between delete hook and component!
  const { deleteClicked, openDeleteModal, closeDeleteModal } = useDeleteProduct();
  const { handlePickSize, pickedSize, changeQuantity, quantity } = usePickSizeAndQty();

  return (
    <>
      {showMessage && (
        <NotificationModal
          onRemove={handleHideMessage}
          prod={product}></NotificationModal>
      )}
      {deleteClicked && <Delete onClose={closeDeleteModal} product={product} />}
      {isLoading && <Spinner />}
      <div className={styles["product-wrapper"]}>
        <div className={styles["product-page"]}>
          <div className={styles["left-column"]}>
            <div className={styles["image-box"]}>
              <img
                src={product.img}
                alt={product.productName}
                className={styles["main-image"]}
              />
            </div>
          </div>
          <div className={styles["right-column"]}>
            <h1>{product.productName}</h1>
            <div className={styles["price"]}>${Number(product.price).toFixed(2)}</div>

            <div className={styles["size-selection"]}>
              <p>Select Size</p>
              <div className={styles["sizes"]}>
                {product?.sizes?.map(({ size, amount }, i) => (
                  <div
                    className={`${styles.size} ${
                      size == pickedSize ? styles.active : ""
                    }`}
                    key={i}>
                    <button
                      onClick={handlePickSize}
                      disabled={Number(amount) <= 0 ? true : false}>
                      {size}
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles["button-group"]}>
                {isOwner ? (
                  <div className={styles["edit-delete-wrapper"]}>
                    <Link to={`/edit/${product._id}`} className={styles["edit-delete"]}>
                      Edit
                    </Link>
                    <button className={styles["edit-delete"]} onClick={openDeleteModal}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <div className={styles["quantity-add-bag"]}>
                      <label htmlFor="quantity">Quantity:</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={quantity}
                        onChange={changeQuantity}
                      />
                      <button
                        className={styles["add-to-bag"]}
                        onClick={() => handleAddToBag(pickedSize, quantity)}
                        disabled={pickedSize ? false : true}>
                        Add to Bag
                      </button>
                    </div>
                    <button
                      className={styles["favorite"]}
                      onClick={isLiked ? handleRemoveLike : handleLike}>
                      {/* @ts-ignore */}
                      <ion-icon name={isLiked ? "heart" : "heart-outline"}></ion-icon>
                    </button>
                  </>
                )}
              </div>

              <p className={styles["description"]}>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
