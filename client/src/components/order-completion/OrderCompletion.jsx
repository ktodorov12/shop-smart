import { useNavigate } from "react-router-dom";

export default function OrderCompletion() {
  const navigate = useNavigate();

  return (
    <div className="order-completion-container">
      <div className="order-completion">
        <div className="order-completion-header">
          <h2>Thank You for Your Order!</h2>
          <p>Your order has been successfully placed.</p>
        </div>
        <button className="home-button" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
