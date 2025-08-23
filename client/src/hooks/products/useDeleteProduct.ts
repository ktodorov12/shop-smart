import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { removeProduct } from "../../api/apiProducts";

import useCategories from "../useCategories";

import type { ProdData } from "../../types/products";

export default function useDeleteProduct() {
  const [wrongInput, setWrongInput] = useState("");
  const [deleteClicked, setDeleteClicked] = useState(false);
  const { updateSublistAmount } = useCategories([]);

  const navigate = useNavigate();

  async function handleDelete(
    product: ProdData,
    onClose: () => void,
    { productName }: { productName: string }
  ) {
    const check = product.productName.toLowerCase() === productName.toLowerCase();

    if (check) {
      await removeProduct(product._id);
      updateSublistAmount(product.categoryId, product.sublist, "reduce");

      navigate("/");
      onClose();
    }

    setWrongInput(productName);
  }

  const openDeleteModal = () => setDeleteClicked(true);
  const closeDeleteModal = () => setDeleteClicked(false);

  return { wrongInput, deleteClicked, handleDelete, openDeleteModal, closeDeleteModal };
}
