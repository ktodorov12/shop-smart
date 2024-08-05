import { useParams } from "react-router-dom";

import { getProductById } from "../../api/apiProducts";
import { useAuthContext } from "../../contexts/AuthContext";
import { useCallback, useEffect, useState } from "react";

export default function useGetDetails() {
  const { productId } = useParams();
  const { user, isOwner: funcIsOwner } = useAuthContext();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const memorizedFetch = useCallback(getProductById, [getProductById]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await memorizedFetch(productId);
        setProduct(res);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId, memorizedFetch]);

  const isGuest = !!user;
  const isOwner = funcIsOwner(product?._ownerId);

  return { product, isGuest, isOwner, isLoading, error };
}
