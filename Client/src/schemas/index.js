import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),

  phoneNumber:Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(10)
  .required('A phone number is required'),

  email: Yup.string().email().required("Please enter your email").email("Invalid email format"),
  password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});