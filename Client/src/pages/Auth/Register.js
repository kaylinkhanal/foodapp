import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "antd";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required."),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  mobileNumber: Yup.string().required("Valid Mobile Number is required."),
  password: Yup.string().required("Password is required."),
  confirmPassword: Yup.string().required("Confirm password is required."),
});


const Register = () => (

  <div>
    <h1>Signup for FoodApp</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div style={{display:'flex',justifyContent:'center'}}>
        <Form>
          <label htmlFor="firstName">First Name</label><br />
              <Field  name="firstName" type='text' placehoder='First Name'/><br />
          {errors.firstName && touched.firstName ? (
            <div className="color">{errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Last Name</label><br />
          <Field name="lastName" placehoder="Last Name"/><br />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email</label><br />
           <Field name="email" type="email" placehoder="Email" /><br />

          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <label htmlFor="mobileNumber">Mobile Number</label><br />
          <Field name="mobileNumber" /><br />

          {errors.mobileNumber && touched.mobileNumber ? (
            <div>{errors.mobileNumber}</div>
          ) : null} 
          <label htmlFor="password">Password</label><br />
            <Field name="password" placehoder="Password" /><br />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <label htmlFor="confirmPassword">Confirm Password</label><br />
           <Field name="confirmPassword"  placehoder="confirm Password"/><br /><br />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null} 
          <button type="submit">Sign Up</button>
        </Form>
        </div>
      )}
    </Formik>
  </div>
);
export default Register;
