
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
// We don't have to create the state for formik
//Yup is use for validating the frontend filed data
import '../../App.css'

const usersSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup
  .string()
  .required('Required')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
});
export const Login = () => (
  <div className='loginForm'>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: '',
        password:'',
      }}
      validationSchema={usersSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        const requestOptions={
           method:'POST',
           body:JSON.stringify(values),
           headers:{'Content-Type':'application/json'},
         }
         fetch('http://localhost:4000/Users', requestOptions)
      }}
    >
      {({ errors, touched }) => (
        <Form>
       

          <Field type="email" name="email"  placeholder='Email'/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field type="password" name="password"  placeholder='Password'/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}


          <input type="submit" value="login"/>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;