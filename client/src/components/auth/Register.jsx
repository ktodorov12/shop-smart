import { Link } from "react-router-dom";

import styles from "./Auth.module.css";
import useForm from "../../hooks/useForm";
import useSignup from "../../hooks/auth/useSignup";

const initialData = {
  fullName: "",
  email: "",
  username: "",
  password: "",
  rePass: "",
};

export default function Register() {
  const { signup, error, isLoading } = useSignup();
  const {
    data: userData,
    dataChangeHandler,
    submitHandler
  } = useForm(initialData, signup);

  return (
    <section className={styles["auth-section"]}>
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post" onSubmit={submitHandler}>
          <h2>Sign up</h2>
          <p>Enter your details to continue</p>

          <div className={styles["form-group"]}>
            <label htmlFor="fullname">Full name</label>
            <input 
              type="text" 
              id="fullname" 
              name="fullName" 
              required 
              onChange={dataChangeHandler}
              value={userData.fullName}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              required 
              onChange={dataChangeHandler}
              value={userData.email}
            />
          </div>

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
            <label htmlFor="password">Create your password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              onChange={dataChangeHandler}
              value={userData.password}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="confirm-password">Confirm password</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="rePass" 
              required 
              onChange={dataChangeHandler}
              value={userData.rePass}
            />
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
