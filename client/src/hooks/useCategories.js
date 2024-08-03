import { useEffect, useState } from "react";

import { getCategories, getSublist, updateSublistValue } from "../api/apiCategories";

import { getSessionData, removeSessionData, setSessionData } from "../utils/userData";

export default function useCategories(initialValues) {
  const [categoriesStored, setCategoriesStored] = useState(initialValues);

  useEffect(() => {
    //Prone to bugs if data is changed in different browser;
    //TODO fix it;
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

  async function updateSublistAmount(categoryId, sublistName, operationType) {
    const foundCategory = categoriesStored.find((c) => c._id === categoryId);
    if (!foundCategory) {
      throw new Error("Category not found");
    }

    const sublist = foundCategory.sublist.find((s) => s.name.toLowerCase() === sublistName.toLowerCase());
    if (!sublist) {
      throw new Error("Sublist not found");
    }

    try {
      const updated = await updateSublistValue(sublist, operationType);
      const newCategory = {
        ...foundCategory,
        sublist: foundCategory.sublist.map((s) => (s._id === updated._id ? updated : s)),
      };

      const updatedCategories = categoriesStored.map((c) => (c._id === newCategory._id ? newCategory : c));
      setCategoriesStored(updatedCategories);

      removeSessionData("categories");
      setSessionData("categories", updatedCategories);
    } catch (error) {
      console.log(error);
      removeSessionData("categories");
      console.log(error);
    }
  }

  return { categoriesStored, updateSublistAmount };
}
