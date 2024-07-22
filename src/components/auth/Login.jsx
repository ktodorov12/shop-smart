import styles from "./Auth.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className={styles["auth-section"]}>
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post">
          <h2>Log in</h2>
          <p>Enter your details to continue</p>

          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className={styles["auth-btn"]}>
            Log in
          </button>

          <p className={styles.link}>
            Dont have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
