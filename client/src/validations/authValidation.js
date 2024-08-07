import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .test("no-spaces", "Password cannot contain spaces", (value) => !/\s/.test(value)),
});

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .test("no-spaces", "Password cannot contain spaces", (value) => !/\s/.test(value)),
  rePass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
