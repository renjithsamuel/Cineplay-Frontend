import * as Yup from "yup";

export const createLoginValidation = (): Yup.AnySchema =>
  Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
