import { useParams } from "react-router-dom";

import { getProductById } from "../../api/apiProducts";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCallback, useEffect, useState } from "react";

import type { Product } from "../../types/products";

export default function useGetDetails() {
  const { productId } = useParams();
  const { user, isOwner: funcIsOwner } = useAuthContext();

  const [product, setProduct] = useState<Product>({} as Product);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const memorizedFetch = useCallback(getProductById, [getProductById]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!productId)
          throw new Error("Something went wrong with getting the product information");
        const res = await memorizedFetch(productId);
        setProduct(res);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, memorizedFetch]);

  const isGuest = !!user;
  let isOwner = false;
  if ("_ownerId" in product) {
    isOwner = funcIsOwner(product._ownerId);
  }

  return { product, isGuest, isOwner, isLoading, error };
}
