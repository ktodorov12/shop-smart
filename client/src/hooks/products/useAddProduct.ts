import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCategories from "../useCategories";

import { addProduct } from "../../api/apiProducts";

import type { AddProduct } from "../../types/products";

export default function useAddProduct() {
  const [addedProduct, setAddedProduct] = useState({});
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { updateSublistAmount } = useCategories([]);

  const navigate = useNavigate();

  async function handleAddProduct(product: AddProduct) {
    setError(null);
    setIsLoading(true);

    try {
      const prod = await addProduct(product);
      updateSublistAmount(prod.categoryId, prod.sublist, "increase");

      setAddedProduct(prod);

      navigate(`/details/${prod._id}`);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { handleAddProduct, addedProduct, error, isLoading };
}
