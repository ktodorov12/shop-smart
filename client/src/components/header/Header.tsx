import { Link } from "react-router-dom";

import Checkout from "../checkout/Checkout";
import SearchBar from "./SearchBar";

import useLogout from "../../hooks/auth/useLogout";

import { useAuthContext } from "../../contexts/AuthContext";
import { useLikeContext } from "../../contexts/LikedContext";
import useCheckout from "../../hooks/user-action/useCheckout";

export default function Header() {
  const { addedToBag, openBag, handleCloseBag, handleOpenBag } = useCheckout();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { liked } = useLikeContext();

  function handleLogout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    logout();
  }

  return (
    <>
      {openBag && <Checkout onClose={handleCloseBag} />}
      <header>
        <div className="header-main">
          <div className="container">
            <Link to="/" className="header-logo">
              <img
                src="/assets/images/logo/logo-no-background.png"
                alt="Shop Smart's logo"
                width="80"
                height="60"
              />
            </Link>

            <SearchBar />

            <div className="header-user-actions">
              <div className="container">
                <ul className="desktop-menu-category-list">
                  <li className="menu-category">
                    <Link to="/" className="menu-title">
                      Home
                    </Link>
                  </li>

                  {user ? (
                    <>
                      <li className="menu-category">
                        <Link to="/add-product" className="menu-title">
                          Add
                        </Link>
                      </li>
                      <li className="menu-category">
                        <Link to="/" className="menu-title" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="menu-category">
                        <Link to="/register" className="menu-title">
                          Register
                        </Link>
                      </li>
                      <li className="menu-category">
                        <Link to="/login" className="menu-title">
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              {user && (
                <Link className="action-btn" to={`/profile/${user._id}`}>
                  {/* @ts-ignore */}
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
              )}

              <Link to={"/favourites"} className="action-btn">
                {/* @ts-ignore */}
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">{liked.length}</span>
              </Link>

              <button
                className="action-btn"
                onClick={openBag ? handleCloseBag : handleOpenBag}>
                {/* @ts-ignore */}
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">{addedToBag.length}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
