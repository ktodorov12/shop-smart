import { useEffect } from "react";
import { useState } from "react";
import { inputValidation } from "../utils/inputValidation";

export default function useForm(initialValue, callback, validationSchema) {
  const [data, setData] = useState(initialValue);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    setData(initialValue);
  }, [initialValue]);

  function dataChangeHandler(e) {
    const { name, value } = e.target;
    setData((oldState) => ({ ...oldState, [name]: value }));
  }

  function nestedDataChangeHandler(e, index, arrayName) {
    const { name, value } = e.target;
    const newArray = [...data[arrayName]];

    if (typeof value === "number" && value < 1) {
      newArray[index][name] = value;
    } else {
      newArray[index][name] = value;
    }

    setData((oldState) => ({ ...oldState, [arrayName]: newArray }));
  }

  function addItemToArray(arrayName, newItem) {
    const newArray = [...data[arrayName], newItem];
    setData((oldState) => ({ ...oldState, [arrayName]: newArray }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    const formData = Object.entries({ ...data });
    const entries = formData.map(([k, v]) => {
      if (typeof v === "object") {
        return [k, v];
      }
      if (typeof v === "number") {
        v = v.toString();
      }
      return [k, v.trim()];
    });

    const entr = Object.fromEntries(entries);
    try {
      if (validationSchema) {
        await inputValidation(validationSchema, entr);
      }
      callback(entr);

      setData(initialValue);
      setValidationErrors({});
    } catch (error) {
      setValidationErrors(error);
    }
  }

  return { data, dataChangeHandler, submitHandler, nestedDataChangeHandler, addItemToArray, validationErrors };
}
