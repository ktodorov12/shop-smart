import ProductItemCard from "./ProductItemCard";

import { useFetchProducts } from "../../../hooks/products/useFetchProducts";

export default function Products() {
  const { products, error, isLoading } = useFetchProducts();

  return (
    <div className="product-main">
      <h2 className="title">Explore Marketplace</h2>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((prod) => (
            <ProductItemCard key={prod._id} product={prod} />
          ))}
        </div>
      ) : (
        <p>No products yet</p>
      )}
    </div>
  );
}
