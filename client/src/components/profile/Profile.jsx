import styles from "./Profile.module.css";
import useAuthContext from "../../hooks/auth/useAuthContext";

export default function Profile() {
  const { user } = useAuthContext();

  return (
    <section className={styles["profile-section"]}>
      <div className={styles.container}>
        <div className={styles["profile-container"]}>
          <div className={styles["profile-header"]}>
            <div className={styles["profile-picture-container"]}>
              {user?.imageUrl 
                ? <img src={user.imageUrl} alt="Profile Picture" className={styles["profile-picture"]} /> 
                : <div className={styles["profile-placeholder"]}></div>
              }
            </div>
            {user?.fullName && <h2 className={styles["profile-name"]}>{user.fullName}</h2>}
            <p className={styles["profile-username"]}>{user?.username}</p>
            <p className={styles["profile-email"]}>{user?.email}</p>
            <button className={styles["edit-profile-btn"]}>Edit Profile</button>
          </div>
          <div className={styles["profile-items"]}>
            <h3>Items Created</h3>
            <div className={styles["items-container"]}>
              <div className={styles.item}>
                <img src="./path/to/item1.jpg" alt="Item 1" />
                <p className={styles["item-name"]}>Handcrafted Wooden Bowl</p>
              </div>
              <div className={styles.item}>
                <img src="./path/to/item2.jpg" alt="Item 2" />
                <p className={styles["item-name"]}>Colorful Knitted Scarf</p>
              </div>
              <div className={styles.item}>
                <img src="./path/to/item3.jpg" alt="Item 3" />
                <p className={styles["item-name"]}>Hand-painted Ceramic Vase</p>
              </div>
            </div>
            <button className={styles["load-more-btn"]}>Load more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
