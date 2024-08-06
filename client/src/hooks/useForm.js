import { useEffect } from "react";
import { useState } from "react";

export default function useForm(initialValue, callback) {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    setData(initialValue);
  }, [initialValue]);

  function dataChangeHandler(e) {
    const { name, value } = e.target;
    //TODO add value check here
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

  function submitHandler(e) {
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
    callback(Object.fromEntries(entries));

    setData(initialValue);
  }

  return { data, dataChangeHandler, submitHandler, nestedDataChangeHandler, addItemToArray };
}
