import ProductCategory from "./product-category-sidebar/category/ProductCategory";
import Products from "./products/Products";

export default function ProductCategoryShowcase() {
  return (
    <div className="product-container">
      <div className="container">
        <ProductCategory />
        <Products />
      </div>
    </div>
  );
}
