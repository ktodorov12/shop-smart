import * as yup from "yup";

const sizeSchema = yup.object().shape({
  size: yup.string().notOneOf(["none"], "Size must be picked").required("Size is required"),
  amount: yup.number().moreThan(0, "Amount must be greater than 0").required("Amount is required"),
});

export const productSchema = yup.object().shape({
  categoryId: yup.string().notOneOf(["none"], "Categoty must be picked").required("Category must be picked"),
  sublist: yup.string().notOneOf(["none"], "Sublist must be picked").required("Sublist must be picked"),
  productName: yup.string().required("Product name is required"),
  img: yup.string().url("Invalid URL").required("Image URL is required"),
  price: yup.number().positive("Price must be a positive number").required("Price is required"),
  description: yup.string().min(10).max(150).required("Description is required"),
  sizes: yup.array().of(sizeSchema).min(1, "At least one size is required").required("Sizes are required"),
});
