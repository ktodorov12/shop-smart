import { useState } from "react";

export default function useForm(initialValue, callback) {
  const [data, setData] = useState(initialValue);

  function dataChangeHandler(e) {
    const nameValue = e.target.name;
    //TODO add value check here
    setData((oldState) => ({ ...oldState, [nameValue]: e.target.value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    const formData = Object.entries({ ...data });
    const entries = formData.map(([k, v]) => [k, v.trim()]);
    callback(Object.fromEntries(entries));

    setData(initialValue);
  }

  return { data, dataChangeHandler, submitHandler };
}
