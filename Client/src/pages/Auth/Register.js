import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = ()=> {

 
 const usersSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   phoneNumber: Yup.number()
    //  .min(10, 'Too Short!')
    //  .max(50, 'Too Long!')
     ,
     address: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
    ,
   email: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
    ,
    password: Yup.string()
    .oneOf([Yup.ref('password'),null],'password must match')
    .required('password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('confirmPassword'),null],'password must match')
    .required('confirm password is required'),
//    password: Yup.string()
//      .min(2, 'Too Short!')
//      .max(20, 'Too Long!')
//      .required('Required'),
    
 });

  return (
    <>
      <Formik
       initialValues={{
         name: '',
         phoneNumber: '',
         address: '',
         email: '',
         password: '',
         }}
       validationSchema={usersSchema}
       onSubmit={values => {
            const requestOptions={
                method:"POST",
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:JSON.stringify(values),
            }
            fetch('http://localhost:4000/register',requestOptions)
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" placeholder="Name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null} <br/><br/>
           <Field name="phoneNumber" placeholder="Phone Number"/>
           {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}<br/><br/>
           <Field name="address" placeholder="Address"/>
           {errors.address && touched.address ? (
             <div>{errors.address}</div>
           ) : null}<br/><br/>
           <Field name="email" placeholder="Email Address"/>
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}<br/><br/>
           <Field name="password" type="password" placeholder="Password"/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}<br/><br/>
           <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
           {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}<br/><br/>

           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </>
  )
  
}

export default Register