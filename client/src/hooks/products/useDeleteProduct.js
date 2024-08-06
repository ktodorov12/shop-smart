import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { removeProduct } from "../../api/apiProducts";

import useCategories from "../useCategories";

export default function useDeleteProduct(product, onClose) {
  const [wrongInput, setWrongInput] = useState("");
  const [deleteClicked, setDeleteClicked] = useState(false);
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

  const openDeleteModal = () => setDeleteClicked(true);
  const closeDeleteModal = () => setDeleteClicked(false);

  return {wrongInput, deleteClicked, handleDelete, openDeleteModal, closeDeleteModal};
}
