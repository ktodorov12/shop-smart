import { useCallback, useEffect, useState } from "react";

export default function useFetch<InitialValues>(
  initialValues: InitialValues,
  callback: () => Promise<InitialValues>
) {
  const [values, setValues] = useState<InitialValues>(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const memorizedFetch = useCallback(callback, [callback]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const result: InitialValues = await memorizedFetch();

        setValues(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { values, isLoading, error };
}
