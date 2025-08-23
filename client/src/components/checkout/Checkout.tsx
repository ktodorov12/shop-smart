import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

import useCheckout from "../../hooks/user-action/useCheckout";
import useFinishCheckout from "../../hooks/user-action/useFinishCheckout";
import type { ProdInBag } from "../../types/products";

export default function Checkout({ onClose }: { onClose: () => void }) {
  const { addedToBag: products, addQuantity, reduceQuantity, removeFromBag } = useCheckout();
  const { finishChekout } = useFinishCheckout(onClose);
  const { user } = useAuthContext();

  const totalProduct = (product: ProdInBag) => Number(product.price) * Number(product.quantity);
  const total = products.reduce((acc, product) => acc + Number(product.price) * Number(product.quantity), 0);
  
  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" data-modal-overlay onClick={onClose}></div>

      <div className="checkout">
        <div className="checkout-header">
          <h2>CART</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {products.length > 0 ? (
          <ul>
            {products.map((product, i) => (
              <li key={product._id + product.size} className="checkout-item">
                <img src={product.img} alt={product.productName} className="item-image" />
                <div className="item-details">
                  <Link to={`/details/${product._id}`} className="item-name">
                    {product.productName}
                  </Link>
                  <span className="item-total">
                    Total: <b>${totalProduct(product).toFixed(2)}</b>
                  </span>
                  <span className="item-size">Size: {product.size}</span>
                  <div className="item-quantity">
                    <span>Quantity:</span>
                    <button onClick={() => reduceQuantity(i)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => addQuantity(i)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromBag(i)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="shopping-bag">
            <p className="empty-message">Your shopping cart is empty. Add some items to get started!</p>
          </div>
        )}

        <div className="order-summary">
          <div className="summary-item total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {user ? (
            <button className="checkout-button" onClick={finishChekout} disabled={products.length <= 0}>
              Checkout
            </button>
          ) : (
            <Link to={"/login"} className="checkout-button">
              Login to Checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
