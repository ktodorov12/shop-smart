import { useEffect } from "react";

export default function NotificationModal({ prod, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 3000);
    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <div className="notification-toast show" onClick={onRemove} data-toast>
      <button className="toast-close-btn" onClick={onRemove} data-toast-close>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="toast-banner">
        <img src={prod.img} alt={prod.productName} width="80" height="70" />
      </div>

      <div className="toast-detail">
        <p className="toast-title">Product added to bag</p>
        <p className="toast-message">{prod.productName}</p>
      </div>
    </div>
  );
}
