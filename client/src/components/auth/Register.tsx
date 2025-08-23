import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";

import styles from "./Auth.module.css";
import useForm from "../../hooks/useForm";
import useSignup from "../../hooks/auth/useSignup";

import { registerSchema } from "../../validations/authValidation";
import type { InitialValuesRegister } from "../../types/auth";

const initialData: InitialValuesRegister = {
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
    submitHandler,
    validationErrors,
  } = useForm(initialData, signup, registerSchema);

  return (
    <section className={styles["auth-section"]}>
      {isLoading && <Spinner />}
      <div className={styles["auth-container"]}>
        <form className={styles["auth-form"]} method="post" onSubmit={submitHandler}>
          <h2>Sign up</h2>
          <p>Enter your details to continue</p>
          {error && <div className="error-message">{error}</div>}

          <div className={styles["form-group"]}>
            <label htmlFor="fullname">Full name</label>
            {validationErrors?.fullName && (
              <div className="error-message">{validationErrors?.fullName}</div>
            )}
            <input
              type="text"
              id="fullname"
              name="fullName"
              required
              className={validationErrors?.fullName && "invalid"}
              onChange={dataChangeHandler}
              value={userData.fullName}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            {validationErrors?.email && (
              <div className="error-message">{validationErrors?.email}</div>
            )}
            <input
              type="text"
              id="email"
              name="email"
              required
              className={validationErrors?.email && "invalid"}
              onChange={dataChangeHandler}
              value={userData.email}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            {validationErrors?.username && (
              <div className="error-message">{validationErrors?.username}</div>
            )}
            <input
              type="text"
              id="username"
              name="username"
              required
              className={validationErrors?.username && "invalid"}
              onChange={dataChangeHandler}
              value={userData.username}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Create your password</label>
            {validationErrors?.password && (
              <div className="error-message">{validationErrors?.password}</div>
            )}
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

          <div className={styles["form-group"]}>
            <label htmlFor="confirm-password">Confirm password</label>
            {validationErrors?.rePass && (
              <div className="error-message">{validationErrors?.rePass}</div>
            )}
            <input
              type="password"
              id="confirm-password"
              name="rePass"
              required
              className={validationErrors?.rePass && "invalid"}
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
