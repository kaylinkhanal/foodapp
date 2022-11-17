import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
 // We don't have to create the state for formik
 //Yup is use for validating the frontend filed data
 import '../../index.css'


 //use the yup module to create a schema for validation
 const usersSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup
  .string()
  .required('Required')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  confirmPassword: Yup
  .string()
  .required('Required')
  .oneOf([Yup.ref('password'),null],'password must match')
  // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
  // "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
});

 export const Register = () => (
   <div className='divForm'>
     <h1>Signup</h1>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         address:'',
         phoneNumber:'',
         email: '',
         password:'',
         confirmPassword:''
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
          fetch('http://localhost:4000/register', requestOptions)//this register should be from Model in line no 14
       }}
     >
       {({ errors, touched }) => (
         <Form >
           <Field type='text' name="firstName" placeholder='First Name'/>

           {/* If validation is not passed show errors */}
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <Field  type='text' name="lastName" placeholder='Last Name'/>
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}

           <Field type="text" name="address"  placeholder='Address'/>
           {errors.address && touched.address ? <div>{errors.address}</div> : null}

           <Field type="text" name="phoneNumber"  placeholder='Phone Number'/>
           {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}

           <Field type="email" name="email"  placeholder='Email'/>
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <Field type="password" name="password"  placeholder='Password'/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}

           <Field type="password" name="confirmPassword"  placeholder='Confirm Password'/>
           {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

           <input type="submit" value="submit"/>
         </Form>
       )}
     </Formik>
   </div>
 );

 export default Register;