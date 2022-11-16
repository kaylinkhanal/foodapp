import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = ()=> {

 
 const UserSchema = Yup.object().shape({
   Name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   phoneNumber: Yup.number()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   Address: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   emailAddress: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    password: Yup.string()
    .oneOf([Yup.ref('password'),null],'password must match')
    .required('confirm password is required'),
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
         Name: '',
         phoneNumber: '',
         Address: '',
         emailAddress: '',
         password: '',
         confirmPassword: '',
       }}
       validationSchema={UserSchema}
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
           <Field name="Name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="PhoneNumber" />
           {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}
           <Field name="Address" />
           {errors.Address && touched.Address ? (
             <div>{errors.Address}</div>
           ) : null}
           <Field name="Email" />
           {errors.emailAddress && touched.emailAddress ? (
             <div>{errors.emailAddress}</div>
           ) : null}
           <Field name="password" type="password" />
           {errors.password && touched.password ? <div>{errors.password}</div> : null}
           <Field name="phoneNumber"/>
           <Field name="confirmPassword" type="password" />
           {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
           <Field name="phoneNumber"/>
           {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default Register