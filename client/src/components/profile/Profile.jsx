import styles from "./Profile.module.css";
import ProductItemCard from "../product-showcase/products/ProductItemCard";
import Spinner from "../spinner/Spinner";

import { useAuthContext } from "../../contexts/AuthContext";
import useFetch from "../../hooks/useFetch";
import { getProductsProfile } from "../../api/apiProducts";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuthContext();
  const { values: products, error, isLoading } = useFetch([], () => getProductsProfile(user._id));

  return (
    <section className={styles["profile-section"]}>
      {isLoading && <Spinner />}
      <div className={styles.container}>
        <div className={styles["profile-container"]}>
          <div className={styles["profile-header"]}>
            <div className={styles["profile-picture-container"]}>
              {user.imageUrl ? <img src={user.imageUrl} alt="Profile Picture" className={styles["profile-picture"]} /> : <div className={styles["profile-placeholder"]}></div>}
            </div>
            <h2 className={styles["profile-name"]}>{user.fullName}</h2>
            <p className={styles["profile-username"]}>{user.username}</p>
            <p className={styles["profile-email"]}>{user.email}</p>
          </div>
          <div className={styles["profile-items"]}>
            <h3>Items Added</h3>
            <div className={styles["product-section"]}>
              {products.length > 0 ? (
                <div className="product-grid">
                  {products.map((prod) => (
                    <ProductItemCard key={prod._id} product={prod} />
                  ))}
                </div>
              ) : (
                <div className={styles["no-products"]}>
                  <p>No products added yet.</p>
                  <Link to={"/add-product"} className={styles["add-product-link"]}>
                    Add products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
