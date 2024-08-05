import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import { getProductById } from "../../api/apiProducts";
import { useAuthContext } from "../../contexts/AuthContext";

export default function useGetDetails() {
  const { productId } = useParams();
  const { values: product, isLoading, error } = useFetch({}, () => getProductById(productId));
  const { user, isOwner: funcIsOwner } = useAuthContext();

  const isGuest = !!user;
  const isOwner = funcIsOwner(product?._ownerId);

  return { product, isGuest, isOwner, isLoading, error };
}
