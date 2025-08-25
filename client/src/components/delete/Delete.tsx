import useDeleteProduct from "../../hooks/products/useDeleteProduct";
import type { ProdData } from "../../types/products";

export default function Delete({
  onClose,
  product,
}: {
  onClose: () => void;
  product: ProdData;
}) {
  let { userValidationInput, handleUserValidationInputChange, handleDelete, error } =
    useDeleteProduct();

  const onDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDelete(product, onClose);
  };

  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" data-modal-overlay onClick={onClose}></div>

      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close onClick={onClose}>
          {/* @ts-ignore */}
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="newsletter">
          <form method="POST" onSubmit={onDelete}>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Are you absolutely sure?</h3>

              <p className="newsletter-desc">
                This action cannot be undone. Please type in{" "}
                <b>{product.productName.toLowerCase()}</b> to confirm.
              </p>
            </div>

            {error && (
              <p className="error-message">
                Wrong input: <b>{error}</b>
              </p>
            )}

            <input
              type="text"
              id="productName"
              name="productName"
              className={`email-field ${error && "invalid"}`}
              value={userValidationInput}
              onChange={handleUserValidationInputChange}
              required
            />

            <button type="submit" className="btn-newsletter">
              Remove
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
