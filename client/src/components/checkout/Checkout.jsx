export default function Checkout({ onClose }) {
  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" data-modal-overlay onClick={onClose}></div>

      <div className="checkout">
        <div className="checkout-header">
          <h2>CART</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <ul>
          <li className="checkout-item">
            <img src="/assets/images/products/jacket-5.jpg" alt="name" className="item-image" />
            <div className="item-details">
              <span className="item-name">Jacket</span>
              <span className="item-total">
                Total: <b>$100</b>
              </span>
              <div className="item-quantity">
                <span>Quantity:</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="remove-button">Remove</button>
            </div>
          </li>
        </ul>
        <div className="order-summary">
          <div className="summary-item total">
            <span>Total:</span>
            <span>$100</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
