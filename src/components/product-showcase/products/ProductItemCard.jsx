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
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          Jacket
        </a>

        <h3>
          <a href="#" className="showcase-title">
            MEN Yarn Fleece Full-Zip Jacket
          </a>
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
          
          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
