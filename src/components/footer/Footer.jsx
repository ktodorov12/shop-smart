import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright &copy; <Link to="/">Shop Smart</Link> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
