import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { removeProduct } from "../../api/apiProducts";

import useCategories from "../useCategories";

import type { ProdData } from "../../types/products";

export default function useDeleteProduct() {
  const [userValidationInput, setUserValidationInput] = useState("");
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateSublistAmount } = useCategories([]);

  const navigate = useNavigate();

  async function handleDelete(product: ProdData, onClose: () => void) {
    setError(null);
    const check = product.productName.toLowerCase() === userValidationInput.toLowerCase();

    if (!check) {
      setError("Input and Product name doesn't match!");
      return;
    }

    try {
      await removeProduct(product._id);
      await updateSublistAmount(product.categoryId, product.sublist, "reduce");

      navigate("/");
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }

    setUserValidationInput("");
  }

  const handleUserValidationInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserValidationInput(e.target.value);
  const openDeleteModal = () => setDeleteClicked(true);
  const closeDeleteModal = () => setDeleteClicked(false);

  return {
    userValidationInput,
    handleUserValidationInputChange,
    error,
    deleteClicked,
    handleDelete,
    openDeleteModal,
    closeDeleteModal,
  };
}
