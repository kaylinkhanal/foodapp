
import React from "react";
import image from "../../productImages/signin.jpeg"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../../Styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
 
const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber:"",
  confirm_password: "",
  address: "",
  role:""
};


const Register = ()=> {
  return <h1>hello i am Register</h1>
}

export default Register