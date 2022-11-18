import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email").email("Invalid email format"),
  password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
});