import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className={styles["auth-section"]}>
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post">
          <h2>Sign up</h2>
          <p>Enter your details to continue</p>

          <div className={styles["form-group"]}>
            <label htmlFor="fullname">Full name</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Create your password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="confirm-password">Confirm password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>

          <button type="submit" className={styles["auth-btn"]}>
            Sign up
          </button>

          <p className={styles.link}>
            You already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
