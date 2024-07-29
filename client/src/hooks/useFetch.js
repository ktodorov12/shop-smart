import { useCallback, useEffect, useState } from "react";

export default function useFetch(initialValues, callback) {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const memorizedFetch = useCallback(callback, [callback]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const result = await memorizedFetch();

        setValues(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { values, isLoading, error };
}
