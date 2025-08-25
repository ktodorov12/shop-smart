import { Link } from "react-router-dom";

import Spinner from "../../spinner/Spinner";
import ProductItemCard from "./ProductItemCard";

import { useFetchProducts } from "../../../hooks/products/useFetchProducts";

export default function Products() {
  const { products, isLoading } = useFetchProducts();

  return (
    <div className="product-main">
      <Link to="/" className="title">Explore Marketplace</Link>
      {isLoading && <Spinner isProd={true} />}

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((prod) => (
            <ProductItemCard key={prod._id} product={prod} />
          ))}
        </div>
      ) : isLoading ? "" : <p>No products yet</p>}
    </div>
  );
}
