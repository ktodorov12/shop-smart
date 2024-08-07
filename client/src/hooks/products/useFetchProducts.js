import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useCategories from "../useCategories";
import useLikeProducts from "../user-action/useLikeProducts";
import { getAllProducts, getProductsByCategory } from "../../api/apiProducts";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { category, sublist } = useParams();
  const location = useLocation();
  const { categoriesStored } = useCategories([]);
  const { liked } = useLikeProducts();

  const searchQuery = location.search.split("=").at(1);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (category && sublist) {
          const formattedCategory = formatForDisplay(category);
          const formattedSublist = encodeURIComponent(formatForDisplay(sublist));

          const cat = categoriesStored.find((c) => c.name.toLowerCase() === formattedCategory.toLowerCase());
          const fetched = cat ? await getProductsByCategory(cat._id, formattedSublist) : [];

          setProducts(fetched);
        } else if (location.pathname === "/favourites") {
          setProducts(liked);
        } else {
          const fetched = await getAllProducts();
          setProducts(fetched);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

      if (searchQuery) {
        setProducts((oldState) => {
          return oldState.filter((prod) => {
            return prod.productName.toLowerCase().includes(searchQuery.toLowerCase());
          });
        });
      }
    })();
  }, [categoriesStored, category, sublist, location, liked, searchQuery]);

  return { products, error, isLoading };
}

function formatForDisplay(text) {
  return text ? text.split("-").join(" ") : "";
}
