import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

import styles from "./Auth.module.css";
import useForm from "../../hooks/useForm";
import useLogin from "../../hooks/auth/useLogin";

import { loginSchema } from "../../validations/authValidation";

import type { InitialValuesLogin } from "../../types/auth";

const initialData: InitialValuesLogin = {
  email: "",
  password: "",
};

export default function Login() {
  const { handleLogin, error, isLoading } = useLogin();
  const { 
    data: userData, 
    dataChangeHandler, 
    submitHandler, 
    validationErrors 
  } = useForm(initialData, handleLogin, loginSchema);

  return (
    <section className={styles["auth-section"]}>
      {isLoading && <Spinner />}
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post" onSubmit={submitHandler}>
          <h2>Log in</h2>
          <p>Enter your details to continue</p>
          {error && <div className="error-message">{error}</div>}

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            {validationErrors?.email && <div className="error-message">{validationErrors?.email}</div>}
            <input type="text" id="email" name="email" required className={validationErrors?.email && "invalid"} onChange={dataChangeHandler} value={userData.email} />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            {validationErrors?.password && <div className="error-message">{validationErrors?.password}</div>}
            <input
              type="password"
              id="password"
              name="password"
              required
              className={validationErrors?.password && "invalid"}
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
