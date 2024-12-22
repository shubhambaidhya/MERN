import * as Yup from "yup";

const loginUserValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Required")
    .max(55, "Email must be 55 characters")
    .trim()
    .lowercase(),
  password: Yup.string()
    .required("Password is required")
    .max(20, "Password must be of 20 characters"),
});
export default loginUserValidationSchema;
