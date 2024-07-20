import ProductItemCard from "./ProductItemCard";
import classes from "./Products.module.css";

export default function Products() {
  return (
    <div className="product-main">
      <h2 className="title">Explore Marketplace</h2>

      <div className={classes.wrapper}>
        <button className={classes["button-pick"]}>All</button>
        <button className={classes["button-pick"]}>Created</button>
        <button className={classes["button-pick"]}>Liked</button>
      </div>

      <div className="product-grid">
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
        <ProductItemCard />
      </div>
    </div>
  );
}
