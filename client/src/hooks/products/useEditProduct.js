import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGetDetails from "./useGetDetails";
import { editProduct } from "../../api/apiProducts";

export default function useEditProduct(initialValues) {
  const { 
    product: productDetails, 
    error: detailsError, 
    isLoading: detailsLoading 
  } = useGetDetails();

  const [product, setProduct] = useState(initialValues);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (productDetails && Object.entries(productDetails).length > 0) {
        setProduct(productDetails);
    }
  }, [productDetails]);

  useEffect(() => {
    setIsLoading(detailsLoading);
  }, [detailsLoading]);

  useEffect(() => {
    setError(detailsError);
  }, [detailsError]);

  async function handleEditProduct(product) {
    setIsLoading(true);
    setError(null);

    try {
      const edited = await editProduct(product);

      navigate(`/details/${edited._id}`);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { product, error, isLoading, handleEditProduct };
}
