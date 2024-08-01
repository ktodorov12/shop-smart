import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import { getProductById } from "../../api/apiProducts";
import useAuthContext from "../auth/useAuthContext";

export default function useGetDetails() {
  const { productId } = useParams();
  const { values: product, isLoading, error } = useFetch({}, () => getProductById(productId));
  const { user } = useAuthContext();

  const isGuest = !!user;
  const isOwner = user?._id === product?._ownerId;

  return { product, isGuest, isOwner, isLoading, error };
}
