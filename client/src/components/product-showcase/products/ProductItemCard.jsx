import { Link } from "react-router-dom";

export default function ProductItemCard({ product }) {
  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img src={product.img} alt={product.productName} className="productuct-img default" width="100%" />

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <Link to={`/details/${product._id}`} className="showcase-category">
          {product.sublist}
        </Link>

        <h3>
          <Link to={`/details/${product._id}`} className="showcase-title">
            {product.productName}
          </Link>
        </h3>

        <div className="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>

        <div className="price-box">
          <p className="price">${Number(product.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
