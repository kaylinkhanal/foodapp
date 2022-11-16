import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber:Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("Must enter a phone number"),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
  .string()
  .required('Required')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  passwordConfirm: Yup.string()
  .label('passwordConfirm')
  .required()
  .oneOf([Yup.ref('password')], 'Passwords does not match')
});
const Register = ()=> {

    return (
    
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber:'',
            email: '',
            password:'',
            }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
            const requestOptions={
               method:'POST',
               body:JSON.stringify(values),
               headers:{'Content-Type':'application/json'},
             }
             fetch('http://localhost:4000/register', requestOptions)
          }}
        >
          {({ errors, touched }) => (
            <Form className='divForm'>
              <Field type='text' name="firstName" placeholder='First Name'/>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field  type='text' name="lastName" placeholder='Last Name'/>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}

              <Field type="text" name="phoneNumber"  placeholder='Phone no.'/>
              {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}

              <Field type="email" name="email"  placeholder='Email'/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
   
              <Field type="password" name="password"  placeholder='Password'/>
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <Field type="password" name="passwordConfirm"  placeholder='Confirm Password'/>
              {errors.passwordConfirm && touched.passwordConfirm ? <div>{errors.passwordConfirm}</div> : null}
   
              <input type="submit" value="submit"/>
            </Form>
          )}
        </Formik>
      </div>
    );
   

}

export default Register