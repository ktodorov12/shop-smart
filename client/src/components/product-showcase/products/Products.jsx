import ProductItemCard from "./ProductItemCard";
import classes from "./Products.module.css";

import useFetch from "../../../hooks/useFetch";
import { getAllProducts } from "../../../api/apiProducts";

export default function Products() {
  const { values: products, isLoading, error } = useFetch([], getAllProducts);

  return (
    <div className="product-main">
      <h2 className="title">Explore Marketplace</h2>

      <div className={classes.wrapper}>
        <button className={classes["button-pick"]}>All</button>
        <button className={classes["button-pick"]}>Created</button>
        <button className={classes["button-pick"]}>Liked</button>
      </div>

      <div className="product-grid">
        {products.map((prod) => (
          <ProductItemCard key={prod._id} product={prod} />
        ))}
      </div>
    </div>
  );
}
