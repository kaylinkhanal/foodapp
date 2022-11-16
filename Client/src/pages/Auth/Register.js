 import React from "react";
 import ReactDOM from "react-dom";
 import { Formik } from "formik";
 import * as Yup from "yup";
 
//  import "./styles.css";
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

        <label for="passowrd">Password</label>
        <input
          type="password"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
       />
            <span class="error" style={{ color: "red" }}>
              {errors.password}
            </span>

            <label for="passowrd">Confirm Password</label>
            <input
              type="password"
              name="changepassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.changepassword}
            />
 
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default SignupForm();