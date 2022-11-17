import { Formik, Form, Field } from 'formik';
import { useActionData } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Enter Your Full Name'),
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 
      'Phone number is not valid'
    )
    .min(7, "Please Enter at Least 7 Digits.")
    .max(14, "Sorry, No More Than 14 Digits")
    .required("Enter Your Phone Number"),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter Your Address'),
  email: Yup.string().email('Invalid Email').required('Enter Your Email ID'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required('Enter Your Password'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('ReEnter Your Password.')
});

const Register = () => { 
  return (
    <>
        <div>
          <h1>Signup</h1>
          <Formik
            initialValues={{
              full_name: '',
              phone: '',
              address: '',
              email: '',
              password: '',
              confirm_password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={ (values, action) => {
              // same shape as initial values
              console.log(values);
              action.resetForm();
            }}
          >
            {({ errors, touched }) => (
               console.log( errors ),
              <Form>
                <div className="form-group">
                  <label className="foodapp-form-label">Full Name</label>
                  <Field name="full_name" />
                  {errors.full_name && touched.full_name ? (
                    <div className="foodapp-form-errors">{errors.full_name}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Phone</label>
                  <Field name="phone" />
                  {errors.phone && touched.phone ? (
                    <div className="foodapp-form-errors">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Address</label>
                  <Field name="address" />
                  {errors.address && touched.address ? (
                    <div className="foodapp-form-errors">{errors.address}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Email</label>
                  <Field name="email" type="email" />
                  {errors.email && touched.email ? <div className="foodapp-form-errors">{errors.email}</div> : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Password</label>
                  <Field name="password" type="password" />
                  {errors.password && touched.password ? <div className="foodapp-form-errors">{errors.password}</div> : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Confirm Password</label>
                  <Field name="confirm_password" type="password" />
                  {errors.confirm_password && touched.confirm_password ? <div className="foodapp-form-errors">{errors.confirm_password}</div> : null}
                </div>
                <div className="form-group">
                  <button type="submit">Register</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    </>
  ) 
}

export default Register