import { useEffect } from "react";
import { useState } from "react";
import { inputValidation } from "../utils/inputValidation";
import type { AnyObjectSchema, InferType } from "yup";

export default function useForm<V, S extends AnyObjectSchema>(
  initialValue: V,
  callback: (arg: V) => Promise<void> | void,
  validationSchema?: S
) {
  const [data, setData] = useState<V>(initialValue);
  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<keyof InferType<S>, string>>
  >({});

  useEffect(() => {
    setData(initialValue);
  }, [initialValue]);

  function dataChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setData((oldState) => ({ ...oldState, [name]: value }));
  }

  function nestedDataChangeHandler<
    K extends keyof V,
    Item = V[K] extends Array<infer U> ? U : unknown
  >(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number,
    arrayName: K
  ) {
    const { name, value } = e.target;

    const arr = Array.isArray(data[arrayName])
      ? [...(data[arrayName] as unknown as Item[])]
      : [];
    const item = { ...(arr[index] as any) };
    item[name] = value;
    arr[index] = item as Item;

    setData((oldState) => ({ ...oldState, [arrayName]: arr } as V));
  }

  //   function nestedDataChangeHandler(
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number,
  //   arrayName: string
  // ) {
  //   const { name, value } = e.target;

  //   if (typeof initialValue != "object") {
  //     throw new Error("Wrong type of data!");
  //   }
  //   const newArray: T[] = [...data[arrayName]];

  //   if (typeof value === "number" && value < 1) {
  //     newArray[index][name] = value;
  //   } else {
  //     newArray[index][name] = value;
  //   }

  //   setData((oldState) => ({ ...oldState, [arrayName]: newArray }));
  // }

  // function addItemToArray(arrayName: string, newItem: T) {
  //   const newArray = [...data[arrayName], newItem];
  //   setData((oldState) => ({ ...oldState, [arrayName]: newArray }));
  // }

  function addItemToArray<
    K extends keyof V,
    Item = V[K] extends Array<infer U> ? U : never
  >(arrayName: K, newItem: Item) {
    const arr = Array.isArray(data[arrayName])
      ? [...(data[arrayName] as unknown as Item[]), newItem]
      : [newItem];
    setData((oldState) => ({ ...oldState, [arrayName]: arr } as V));
  }

  type Entries<T> = {
    [K in keyof T]: [key: K, value: T[K]];
  }[keyof T][]

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = Object.entries({ ...data } as Entries<typeof data>);
    const entries = formData.map(([k, v]) => {
      if (!v) return [k, ""];
      if (typeof v === "object") {
        return [k, v];
      }

      return [k, String(v).trim()];
    });

    const entr = Object.fromEntries(entries);
    try {
      if (validationSchema) {
        await inputValidation(validationSchema, entr);
      }
      callback(entr);

      setData(initialValue);
      setValidationErrors({} as InferType<S>);
    } catch (error) {
      setValidationErrors(error as InferType<S>);
    }
  }

  return {
    data,
    dataChangeHandler,
    submitHandler,
    nestedDataChangeHandler,
    addItemToArray,
    validationErrors,
  };
}
