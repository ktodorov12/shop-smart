import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { removeProduct } from "../../api/apiProducts";
import useForm from "../../hooks/useForm";
import useCategories from "../../hooks/useCategories";

const initialData = {
  productName: "",
};

export default function Delete({ onClose, product }) {
  const [wrongInput, setWrongInput] = useState("");
  const { data, dataChangeHandler, submitHandler } = useForm(initialData, handleDelete);

  const { updateSublistAmount } = useCategories([]);

  const navigate = useNavigate();

  async function handleDelete(input) {
    const check = product.productName.toLowerCase() === input.productName.toLowerCase();

    if (check) {
      await removeProduct(product._id);
      updateSublistAmount(product.categoryId, product.sublist, "reduce");

      navigate("/");
      onClose();
    }

    setWrongInput(input);
  }

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
