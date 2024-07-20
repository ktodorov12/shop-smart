import classes from "./Auth.module.css";

export default function Auth() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes["forms-container"]}>
          <div className={classes["signin-signup"]}>
            <form action="" className={classes["sign-in-form"]}>
              <h2 className={classes.title}>Sign In</h2>
              <div className={classes["input-field"]}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={classes["input-field"]}>
                <i className={classes["fas fa-lock"]}></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className={`${classes.btn} ${classes.solid}`} />
            </form>

            <form action="" className={classes["sign-up-form"]}>
              <h2 className={classes.title}>Sign Up</h2>
              <div className={classes["input-field"]}>
                <i className={classes["fas fa-user"]}></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={classes["input-field"]}>
                <i className={classes["fas fa-envelope"]}></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className={classes["input-field"]}>
                <i className={classes["fas fa-lock"]}></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className={`${classes.btn} ${classes.solid}`} />
            </form>
          </div>
        </div>
        <div className={classes["panels-container"]}>
          <div className={`${classes.panel} ${classes["left-panel"]}`}>
            <div className={classes.content}>
              <h3>New here?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className={`${classes.btn} ${classes.transparent}`} id="sign-up-btn">
                Sign Up
              </button>
            </div>
            <img src="./img/log.svg" className={classes.image} alt="" />
          </div>

          <div className={`${classes.panel} ${classes["right-panel"]}`}>
            <div className={classes.content}>
              <h3>One of us?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className={`${classes.btn} ${classes.transparent}`} id="sign-in-btn">
                Sign In
              </button>
            </div>
            <img src="./img/register.svg" className={classes.image} alt="" />
          </div>
        </div>
      </div>

      <script src="./app.js"></script>
    </>
  );
}
