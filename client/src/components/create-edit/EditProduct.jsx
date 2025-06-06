import SizeSelector from "../sizes/SizeSelector";
import Spinner from "../spinner/Spinner";
import styles from "./AddEdit.module.css";

import useForm from "../../hooks/useForm";
import useEditProduct from "../../hooks/products/useEditProduct";
import useCategories from "../../hooks/useCategories";
import { processValidationErrors } from "../../utils/processValidationErrors";

import { productSchema } from "../../validations/productsCreateValidation";

const initialData = {
  categoryId: "none",
  description: "",
  img: "",
  price: "",
  productName: "",
  sizes: [
    {
      size: "none",
      amount: "0",
    },
  ],
  stars: "0",
  sublist: "none",
};

export default function EditProduct() {
  const { product, handleEditProduct, error, isLoading } = useEditProduct(initialData);
  const { 
    data, 
    dataChangeHandler, 
    submitHandler, 
    nestedDataChangeHandler, 
    addItemToArray,
    validationErrors
  } = useForm(product, handleEditProduct, productSchema);

  console.log(data.sublist);
  

  const processed = processValidationErrors(validationErrors);

  const { categoriesStored: categories } = useCategories([]);
  const pickedCategory = categories.find((c) => c._id == data.categoryId);
  console.log(pickedCategory);
  

  function handleAddNewSize() {
    const newSize = {
      size: "none",
      amount: 1,
    };

    addItemToArray("sizes", newSize);
  }


  return (
    <section className={styles["create-product-section"]}>
      {isLoading && <Spinner />}
      <div className={styles.container}>
        <div className={styles["create-product-form-container"]}>
          <h2 className={styles["form-title"]}>Edit Product</h2>
          {error && <div className="error-message">{error}</div>}

          <form method="post" className={styles["create-product-form"]} onSubmit={submitHandler}>
            <div className={styles["form-group"]}>
              <label htmlFor="categoryId">Category</label>
              {processed?.categoryId && <div className="error-message">{processed.categoryId}</div>}
              <select type="text" id="category" name="categoryId" className={processed?.categoryId && "invalid"} value={data.categoryId} onChange={dataChangeHandler} required>
                <option value="none">Select Category</option>
                {categories.map((c) => {
                  return (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="sublist">Subcategory</label>
              {processed?.sublist && <div className="error-message">{processed.sublist}</div>}
              <select type="text" id="sublist" name="sublist" className={processed?.sublist && "invalid"} value={data.sublist} onChange={dataChangeHandler} required>
                <option value="none">Select Subcategory</option>
                {data.categoryId !== "none"
                  ? pickedCategory.sublist.map((s) => {
                      return (
                        <option key={s._id} value={s.name.toLowerCase()}>
                          {s.name}
                        </option>
                      );
                    })
                  : null}
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="productName">Product Name</label>
              {processed?.productName && <div className="error-message">{processed.productName}</div>}
              <input
                type="text"
                id="product-name"
                name="productName"
                className={processed?.productName && "invalid"}
                value={data.productName}
                onChange={dataChangeHandler}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="img">Image</label>
              {processed?.img && <div className="error-message">{processed.img}</div>}
              <input type="text" id="img" className={processed?.img && "invalid"} value={data.img} onChange={dataChangeHandler} name="img" required />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="price">Price</label>
              {processed?.price && <div className="error-message">{processed.price}</div>}
              <input type="number" id="price" className={processed?.price && "invalid"} name="price" value={data.price} onChange={dataChangeHandler} step="0.01" required />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="description">Description</label>
              {processed?.description && <div className="error-message">{processed.description}</div>}
              <textarea
                id="description"
                name="description"
                rows="4"
                className={processed?.description && "invalid"}
                value={data.description}
                onChange={dataChangeHandler}
                required></textarea>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="sizes">Current Sizes</label>
              {processed?.sizes && <div className="error-message">{processed.sizes}</div>}
              {data.sizes.map((item, index) => {
                return (
                  <div key={item.index} id="sizes-container">
                    {processed[index]?.size && <div className="error-message">{processed[index].size}</div>}
                    {processed[index]?.amount && <div className="error-message">{processed[index].amount}</div>}
                    <div className={styles["size-group"]}>
                      {pickedCategory ? (
                        <>
                          <select
                            name="size"
                            value={item.size}
                            className={processed[index]?.size && "invalid"}
                            onChange={(e) => nestedDataChangeHandler(e, index, "sizes")}
                            required>
                            <SizeSelector sizeType={pickedCategory.sizeType} />
                          </select>
                          <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={item.amount}
                            className={processed[index]?.amount && "invalid"}
                            min={1}
                            onChange={(e) => nestedDataChangeHandler(e, index, "sizes")}
                            required
                          />
                        </>
                      ) : (
                        <p>Please pick category in order to choose a size</p>
                      )}
                    </div>
                  </div>
                );
              })}
              <button type="button" className={styles["add-size-btn"]} onClick={handleAddNewSize} disabled={!pickedCategory ? true : false}>
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
