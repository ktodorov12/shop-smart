import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  return (
    <section className={styles["product-container"]}>
      <div className={styles["img-card"]}>
        <img src="img/image-1.png" alt="" id="featured-image" />
        <div className={styles["small-Card"]}>
          <img src="img/image-1.png" alt="" className={styles["small-Img"]} />
          <img src="img/small-img-2.png" alt="" className={styles["small-Img"]} />
          <img src="img/small-img-3.png" alt="" className={styles["small-Img"]} />
          <img src="img/image-1.png" alt="" className={styles["small-Img"]} />
        </div>
      </div>

      <div className={styles["product-info"]}>
        <h3>LEVI'S® WOMEN'S XL TRUCKER JACKET</h3>
        <h5>
          Price: $140 <del>$170</del>
        </h5>
        <p>Lorem, ipsum .</p>
        <p>Lorem ii?</p>

        <div className={styles.sizes}>
          <p>Size:</p>
          <select name="Size" id="size" className={styles["size-option"]}>
            <option value="xxl">XXL</option>
            <option value="xl">XL</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </div>

        <div className={styles.quantity}>
          <input type="number" value="1" min="1" />
          <button>Add to Cart</button>
        </div>

        <div>
          <p>Delivery:</p>
          <p>Free standard shipping on orders over $35 before tax, plus free returns.</p>
          <div className={styles.delivery}>
            <p>TYPE</p> <p>HOW LONG</p> <p>HOW MUCH</p>
          </div>
          <hr />
          <div className={styles.delivery}>
            <p>Standard delivery</p>
            <p>1-4 business days</p>
            <p>$4.50</p>
          </div>
          <hr />
          <div className={styles.delivery}>
            <p>Express delivery</p>
            <p>1 business day</p>
            <p>$10.00</p>
          </div>
          <hr />
          <div className={styles.delivery}>
            <p>Pick up in store</p>
            <p>1-3 business days</p>
            <p>Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
