import { useEffect, useState } from "react";

import { getCategories, getSublist } from "../api/apiCategories";

import { getSessionData, removeSessionData, setSessionData } from "../utils/userData";

export default function useGetCategories(initialValues) {
  const [categoriesStored, setCategoriesStored] = useState(initialValues);

  useEffect(() => {
    const isStored = getSessionData("categories");
    if (isStored) {
      setCategoriesStored(isStored);
      setSessionData("categories", isStored);
      return;
    }

    (async () => {
      try {
        const fetchedCategories = await getCategories();

        const categoriesWithSublists = await Promise.all(
          fetchedCategories.map(async (cat) => {
            const sublist = await getSublist("categoryId", cat._id);
            cat.sublist = sublist;
            return cat;
          })
        );

        setCategoriesStored(categoriesWithSublists);
        setSessionData("categories", categoriesWithSublists);
      } catch (error) {
        removeSessionData("categories");
        setCategoriesStored(initialValues);
      }
    })();
  }, []);

  return { categoriesStored };
}
