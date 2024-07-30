import { useCallback, useEffect, useState } from "react";
import { getCategories, getSublist } from "../api/apiCategories";
import { setCategoryData } from "../utils/userData";

export function useGetAllCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const memorizedCategories = useCallback(getCategories, [getCategories]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const result = await memorizedCategories();

        setCategories(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { categories, isLoading, error };
}

export function useGetSublistForCattegory(category) {
  const [sublist, setSublist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSublistCall = () => getSublist("categoryId", category._id);
  const memorizedSub = useCallback(handleSublistCall, [handleSublistCall, category]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const result = await memorizedSub();

        setSublist(result);

        const mixed = {...category, sublist: result };

        setCategoryData(mixed);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

  }, []);

  return { sublist, isLoading, error };
}
