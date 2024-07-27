import { Link } from "react-router-dom";

export default function ProductItemCard() {
  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img src="./assets/images/products/jacket-5.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default" width="300" />
        <img src="./assets/images/products/jacket-6.jpg" alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover" width="300" />

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
        <Link to="/details" className="showcase-category">
          Jacket
        </Link>

        <h3>
          <Link to="/details" className="showcase-title">
            MEN Yarn Fleece Full-Zip Jacket
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
          <p className="price">$65.00</p>
        </div>
      </div>
    </div>
  );
}
