import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email").email("Invalid email format"),
  password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
});

export const ResturantFormSchema = Yup.object({
  name: Yup.string().required("Please enter resturant name"),
  location:Yup.string().required("Please enter the location of resturant"),
  rating:Yup.number().min(0).max(5).required("Enter the rating"),
  resturantCategory:Yup.string().required("Select the resturant category")
})