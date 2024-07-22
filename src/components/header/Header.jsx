import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-main">
        <div className="container">
          <Link to="#" className="header-logo">
            <img src="./assets/images/logo/logo-no-background.png" alt="Shop Smart's logo" width="80" height="60" />
          </Link>

          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <div className="container">
              <ul className="desktop-menu-category-list">
                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Home
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/create-product" className="menu-title">
                    Create
                  </Link>
                </li>

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

                <li className="menu-category">
                  <Link to="#" className="menu-title">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="action-btn" to="/profile">
              <ion-icon name="person-outline"></ion-icon>
            </Link>

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
