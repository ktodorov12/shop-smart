import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <p className="not-found-message">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="not-found-home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
