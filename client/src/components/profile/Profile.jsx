import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles["profile-section"]}>
      <div className={styles.container}>
        <div className={styles["profile-container"]}>
          <div className={styles["profile-header"]}>
            <img src="path/to/your/image.jpg" alt="Profile Picture" className={styles["profile-picture"]} />
            <h2 className={styles["profile-name"]}>Jane</h2>
            <p className={styles["profile-username"]}>@janesmith</p>
            <p className={styles["profile-email"]}>jane.smith@example.com</p>
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
