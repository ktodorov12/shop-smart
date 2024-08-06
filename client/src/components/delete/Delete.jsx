import useForm from "../../hooks/useForm";
import useDeleteProduct from "../../hooks/products/useDeleteProduct";

const initialData = {
  productName: "",
};

export default function Delete({ onClose, product }) {
  const { wrongInput, handleDelete } = useDeleteProduct(product, onClose);
  const { data, dataChangeHandler, submitHandler } = useForm(initialData, handleDelete);

  return (
    <div className="modal" data-modal>
      <div className="modal-close-overlay" data-modal-overlay onClick={onClose}></div>

      <div className="modal-content">
        <button className="modal-close-btn" data-modal-close onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="newsletter">
          <form method="POST" onSubmit={submitHandler}>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Are you absolutely sure?</h3>

              <p className="newsletter-desc">
                This action cannot be undone. Please type in <b>{product.productName.toLowerCase()}</b> to confirm.
              </p>
            </div>

            {wrongInput && (
              <p className="error-message">
                Wrong input: <b>{wrongInput.productName}</b>
              </p>
            )}

            <input
              type="text"
              id="productName"
              name="productName"
              className={`email-field ${wrongInput && "invalid"}`}
              value={data.productName}
              onChange={dataChangeHandler}
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
