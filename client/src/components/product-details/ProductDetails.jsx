import { useState } from "react";
import { Link } from "react-router-dom";

import Delete from "../delete/Delete";
import styles from "./ProductDetails.module.css";
import useGetDetails from "../../hooks/products/useGetDetails";

export default function ProductDetails() {
  const { product, isGuest, isOwner, isLoading, error } = useGetDetails();
  const [deleteClicked, setDeleteClicked] = useState(false);


  const openDeleteModal = () => setDeleteClicked(true);
  const closeDeleteModal = () => setDeleteClicked(false);

  return (
    <>
      { deleteClicked && <Delete onClose={closeDeleteModal} product={product}/> }
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
                {product.sizes &&
                  product.sizes.map((size, i) => (
                    <div className={styles["size"]} key={i}>
                      <button>{size.size}</button>
                    </div>
                  ))}
              </div>

              <div className={styles["button-group"]}>
                {isOwner ? (
                  <div className={styles["edit-delete-wrapper"]}>
                    <Link to={`/edit/${product._id}`} className={styles["edit-delete"]}>Edit</Link>
                    <button className={styles["edit-delete"]} onClick={openDeleteModal}>Remove</button>
                  </div>
                ) : (
                  <>
                    <div className={styles["quantity-add-bag"]}>
                      <label htmlFor="quantity">Quantity:</label>
                      <input type="number" id="quantity" name="quantity" min="1" />
                      <button className={styles["add-to-bag"]}>Add to Bag</button>
                    </div>
                    <button className={styles["favorite"]}>
                      <span className={styles["heart-icon"]}>❤</span>
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
