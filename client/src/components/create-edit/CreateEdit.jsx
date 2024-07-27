import styles from "./CreateEdit.module.css";

export default function CrateEdit() {
  return (
    <section className={styles["create-product-section"]}>
      <div className={styles.container}>
        <div className={styles["create-product-form-container"]}>
          <h2 className={styles["form-title"]}>Create Product</h2>
          <form action="#" className={styles["create-product-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="product-name">Product Name</label>
              <input type="text" id="product-name" name="product-name" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" step="0.01" required />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="sizes">Current Sizes</label>
              <div id="sizes-container">
                <div className={styles["size-group"]}>
                  <select name="sizes[]" required>
                    <option value="">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                  <input type="number" name="amounts[]" placeholder="Amount" required />
                </div>
              </div>
              <button type="button" id="add-size-btn">
                Add Another Size
              </button>
            </div>
            <button type="submit" className={styles["create-product-btn"]}>
              Create Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
