import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../api/apiProducts";

export default function useAddProduct() {
  const [addedProduct, setAddedProduct] = useState({});
  const [error, setEror] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleAddProduct(product) {
    setEror(null);
    setIsLoading(true);

    try {
      const prod = await addProduct(product);
      console.log(prod);
      setAddedProduct(prod);

      navigate("/");
    } catch (error) {
      setEror(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { handleAddProduct, addedProduct, error, isLoading };
}
