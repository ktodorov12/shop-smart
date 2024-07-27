import styles from "./Profile.module.css";

export default function EditProfile() {
  return (
    <section className={styles["edit-profile-section"]}>
      <div className={styles.container}>
        <form className={styles["edit-profile-form"]} action="/update-profile" method="post" >
          <h2>Edit Profile</h2>

          <div className={styles["form-group"]}>
            <label htmlFor="profile-picture">Profile Picture</label>
            <input type="text" id="profile-picture" name="profile-picture" value="https://..." />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value="Jane" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value="@janesmith" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value="jane.smith@example.com" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" placeholder="Enter new password" />
          </div>

          <button type="submit" className={styles["save-btn"]}>
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}
