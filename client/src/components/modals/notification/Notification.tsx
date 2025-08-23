import { useEffect } from "react";
import type { ProdData } from "../../../types/products";

export default function NotificationModal({
  prod,
  onRemove,
}: {
  prod: ProdData;
  onRemove: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onRemove, 3000);
    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <div className="notification-toast show" onClick={onRemove} data-toast>
      <button className="toast-close-btn" onClick={onRemove} data-toast-close>
        {/* @ts-ignore */}
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
