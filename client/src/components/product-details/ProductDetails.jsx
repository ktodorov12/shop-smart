import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

import useFetch from "../../hooks/useFetch";

import { getProductById } from "../../api/apiProducts";

export default function ProductDetails() {
  const { productId } = useParams();
  const { values: product, isLoading, error } = useFetch({}, () => getProductById(productId));

  console.log(product);

  return (
    <div className={styles["product-page"]}>
      <div className={styles["left-column"]}>
        <div className={styles["image-box"]}>
          <img src="main-image.jpg" alt="Nike Alphafly 3" className={styles["main-image"]} />
        </div>
      </div>
      <div className={styles["right-column"]}>
        <h1>Nike Alphafly 3</h1>
        <h2>Men's Road Racing Shoes</h2>
        <div className={styles["rating"]}>Highly Rated</div>
        <div className={styles["price"]}>BGN 599.99</div>

        <div className={styles["size-selection"]}>
          <p>Select Size</p>
          <div className={styles["sizes"]}>
            <div className={styles["size"]}>
              <button>EU 38.5</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 39</button>
            </div>
            <div className={styles["size"]}>
              <button disabled>EU 40</button>
            </div>
            <div className={styles["size"]}>
              <button disabled>EU 40.5</button>
            </div>
            <div className={styles["size"]}>
              <button disabled>EU 41</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 41.5</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 42</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 42.5</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 43</button>
            </div>
            <div className={styles["size"]}>
              <button>EU 44</button>
            </div>
          </div>
        </div>

        <div className={styles["button-group"]}>
          <div className={styles["quantity-add-bag"]}>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value="1" min="1" />
            <button className={styles["add-to-bag"]}>Add to Bag</button>
          </div>
          <button className={styles["favorite"]}>
            <span className={styles["heart-icon"]}>❤</span>
          </button>
        </div>

        <p className={styles["description"]}>
          Fine-tuned for marathon speed, the Alphafly 3 helps push you beyond what you thought possible. Three innovative technologies power your run: a double dose of Air Zoom
          units helps launch you into your next step; a full-length carbon-fibre plate helps propel you forwards with ease; and a heel-to-toe ZoomX foam midsole helps keep you
          fresh from start to 26.2. Time to leave your old personal records in the dust.
        </p>
        <div className={styles["reviews"]}>
          <h3>Reviews</h3>
          <div className={styles["review-content"]}>
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
          <button className={styles["write-review"]}>Write a Review</button>
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
  );
}
