import { Link } from "react-router-dom";

import styles from "./Auth.module.css";
import useForm from "../../hooks/useForm";
import useLogin from "../../hooks/auth/useLogin";

const initialData = {
  username: "",
  password: "",
};

export default function Login() {
  const { handleLogin, error, isLoading } = useLogin();
  const {
    data: userData, 
    dataChangeHandler, 
    submitHandler
  } = useForm(initialData, handleLogin);

  return (
    <section className={styles["auth-section"]}>
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post" onSubmit={submitHandler}>
          <h2>Log in</h2>
          <p>Enter your details to continue</p>

          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required 
              onChange={dataChangeHandler}
              value={userData.username}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required
              onChange={dataChangeHandler}
              value={userData.password} 
            />
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
