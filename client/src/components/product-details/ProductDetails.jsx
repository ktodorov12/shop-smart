import { Link } from "react-router-dom";
import styles from "./ProductDetails.module.css";

import Delete from "../delete/Delete";
import NotificationModal from "../modals/notification/Notification";

import useGetDetails from "../../hooks/products/useGetDetails";
import useLikeProducts from "../../hooks/user-action/useLikeProducts";
import useShoppingBag from "../../hooks/user-action/useShoppingBag";
import useDeleteProduct from "../../hooks/products/useDeleteProduct";
import usePickSizeAndQty from "../../hooks/user-action/usePickSizeAndQty";

export default function ProductDetails() {
  const { product, isGuest, isOwner, isLoading, error } = useGetDetails();
  const { isLiked, handleLike, handleRemoveLike } = useLikeProducts(product);
  const { handleAddToBag, showMessage, handleHideMessage } = useShoppingBag(product);

  const { deleteClicked, openDeleteModal, closeDeleteModal } = useDeleteProduct();
  const { handlePickSize, pickedSize, changeQuantity, quantity } = usePickSizeAndQty();

  return (
    <>
      {showMessage && <NotificationModal onRemove={handleHideMessage} prod={product}></NotificationModal>}
      {deleteClicked && <Delete onClose={closeDeleteModal} product={product} />}
      <div className={styles["product-wrapper"]}>
        <div className={styles["product-page"]}>
          <div className={styles["left-column"]}>
            <div className={styles["image-box"]}>
              <img src={product.img} alt={product.productName} className={styles["main-image"]} />
            </div>
          </div>
          <div className={styles["right-column"]}>
            <h1>{product.productName}</h1>
            <div className={styles["price"]}>${Number(product.price).toFixed(2)}</div>

            <div className={styles["size-selection"]}>
              <p>Select Size</p>
              <div className={styles["sizes"]}>
                {product?.sizes?.map(({ size, amount }, i) => (
                  <div className={`${styles.size} ${size == pickedSize ? styles.active : ""}`} key={i}>
                    <button onClick={handlePickSize} disabled={amount <= 0 ? true : false}>
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
                      <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={changeQuantity} />
                      <button className={styles["add-to-bag"]} onClick={() => handleAddToBag(pickedSize, quantity)} disabled={pickedSize ? false : true}>
                        Add to Bag
                      </button>
                    </div>
                    <button className={styles["favorite"]} onClick={isLiked ? handleRemoveLike : handleLike}>
                      <ion-icon name={isLiked ? "heart" : "heart-outline"}></ion-icon>
                    </button>
                  </>
                )}
              </div>

              <p className={styles["description"]}>{product.description}</p>
              <div className={styles["reviews"]}>
                <h3>Reviews</h3>
                <div className={styles["review-content"]}>
                  {!isOwner && !isGuest ? <button className={styles["write-review"]}>Write a Review</button> : null}
                  <div className={styles["review"]}>
                    <p className={styles["review-title"]}>Amazing Shoes!</p>
                    <div className={styles["review-meta"]}>
                      <span className={styles["stars"]}>★★★★★</span>
                      <span className={styles["username"]}>John Doe</span>
                      <span className={styles["date"]}>July 25, 2024</span>
                    </div>
                    <p className={styles["review-body"]}>These shoes are incredibly comfortable and provide excellent support for long runs. Highly recommended!</p>
                  </div>
                </div>
                <button className={styles["toggle-reviews"]}>More Reviews</button>
                <div className={`${styles["review-form"]} ${styles.hidden}`}>
                  <form>
                    <label htmlFor="review-title">Title:</label>
                    <input type="text" id="review-title" name="review-title" required />

                    <label htmlFor="review-stars">Rating:</label>
                    <select id="review-stars" name="review-stars" required>
                      <option value="5">★★★★★ - Excellent</option>
                      <option value="4">★★★★☆ - Good</option>
                      <option value="3">★★★☆☆ - Average</option>
                      <option value="2">★★☆☆☆ - Poor</option>
                      <option value="1">★☆☆☆☆ - Terrible</option>
                    </select>

                    <label htmlFor="review-body">Your Review:</label>
                    <textarea id="review-body" name="review-body" required></textarea>

                    <button type="submit">Submit Review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
