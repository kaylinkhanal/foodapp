import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email").email("Invalid email format"),
  password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
});

export const RestaurantFormSchema = Yup.object({
  name: Yup.string().required("Please enter restaurant name"),
  location:Yup.string().required("Please enter the location of restaurant"),
  rating:Yup.number().min(0).max(5).required("Enter the rating"),
  restaurantCategory:Yup.string().required("Select the restaurant category")
})

export const AddFoodSchema = Yup.object({
  foodType: Yup.string().required("Please select the type of food"),
  restaurant:Yup.string().required("Please enter the name of restaurant"),
  foodCategory:Yup.string().required("Select the food category")
})