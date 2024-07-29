import styles from "./AddEdit.module.css";

import useForm from "../../hooks/useForm";
import useAddProduct from "../../hooks/products/useAddProduct";

import { getSessionData } from "../../utils/userData";

const initialData = {
  category: "none",
  sublist: "none",
  productName: "",
  img: "",
  price: "",
  description: "",
  sizes: [
    {
      size: "none",
      amount: "0"
    }
  ]
};

export default function AddProduct() {
  const { 
    handleAddProduct,
    addedProduct,
    error,
    isLoading
  } = useAddProduct();
  const {
    data, 
    dataChangeHandler, 
    submitHandler,
    nestedDataChangeHandler,
    addItemToArray
  } = useForm(initialData, handleAddProduct);

  const categories = getSessionData("categories");
  const pickedCategory = categories.find(c => c.name == data.category);

  function handleAddNewSize() {
    const newSize = {
      size: "none",
      amount: "0"
    };

    addItemToArray("sizes", newSize);
  }

  return (
    <section className={styles["create-product-section"]}>
      <div className={styles.container}>
        <div className={styles["create-product-form-container"]}>
          <h2 className={styles["form-title"]}>Add Product</h2>
          <form method="post" className={styles["create-product-form"]} onSubmit={submitHandler}>

            <div className={styles["form-group"]}>
              <label htmlFor="category">Category</label>
              <select type="text" id="category" name="category" value={data.category} onChange={dataChangeHandler} required>
                <option value="none">Select Category</option>
                {categories.map(c => {
                  return <option key={c._id} value={c.name}>{c.name}</option>;
                })}
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="sublist">Subcategory</label>
              <select type="text" id="sublist" name="sublist" value={data.sublist} onChange={dataChangeHandler} required>
              <option value="none">Select Subcategory</option>
              {data.category !== "none" 
                ? pickedCategory.sublist.map(s => {
                  return <option key={s._id} value={s.name}>{s.name}</option>;
                  })
                : null
              }
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="productName">Product Name</label>
              <input type="text" id="product-name" name="productName" value={data.productName} onChange={dataChangeHandler} required />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="img">Image</label>
              <input type="text" id="product-name" value={data.img} onChange={dataChangeHandler} name="img" required />
            </div> 

            <div className={styles["form-group"]}>
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" value={data.price} onChange={dataChangeHandler} step="0.01" required />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows="4" value={data.description} onChange={dataChangeHandler} required></textarea>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="sizes">Current Sizes</label>
              {data.sizes.map((item, index) => {
                return (
                  <div key={item.index} id="sizes-container" >
                    <div className={styles["size-group"]}>
                      <select name="size" value={item.size} onChange={e => nestedDataChangeHandler(e, index, "sizes")} required>
                        <option value="none">Select Size</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <input type="number" name="amount" placeholder="Amount" value={item.amount} onChange={e => nestedDataChangeHandler(e, index, "sizes")} required />
                    </div>
                  </div>
                );
              })}
              <button type="button" className={styles["add-size-btn"]} onClick={handleAddNewSize}>
                Add Another Size
              </button>
            </div>
            <button type="submit" className={styles["create-product-btn"]}>
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
