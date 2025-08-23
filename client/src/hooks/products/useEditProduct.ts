import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGetDetails from "./useGetDetails";
import { editProduct } from "../../api/apiProducts";

import type { EditProduct, Product } from "../../types/products";

export default function useEditProduct(initialValues: Product) {
  const {
    product: productDetails,
    error: detailsError,
    isLoading: detailsLoading,
  } = useGetDetails();

  const [product, setProduct] = useState<Product>(initialValues);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Type guard: check if productDetails has expected keys
    if (productDetails && "productName" in productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

  useEffect(() => {
    setIsLoading(detailsLoading);
  }, [detailsLoading]);

  useEffect(() => {
    setError(detailsError);
  }, [detailsError]);

  async function handleEditProduct(product: EditProduct) {
    setIsLoading(true);
    setError(null);

    try {
      const edited = await editProduct(product);

      navigate(`/details/${edited._id}`);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { product, error, isLoading, handleEditProduct };
}
