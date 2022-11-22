import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 
      'Phone number is not valid'
    )
    .min(7, "Please Enter at Least 7 Digits.")
    .max(14, "Sorry, No More Than 14 Digits")
    .required("Required"),
  password: Yup.string()
    .required('Please Enter Your Password')
});

const Login = () => {
  return (
    <>
      <div>
          <h1>Login</h1>
          <Formik
            initialValues={{
              phone: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={ ( values, action ) => {
              // same shape as initial values
              console.log(values);
              const requestOptions = {
                method:"POST",
                headers:{
                    'Content-Type':'application/JSON'
                },
                body:JSON.stringify(values),
              }
              fetch('http://localhost:4000/login',requestOptions).then(res=>res.json())
              .then(data=> console.log(data))
              action.resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label className="foodapp-form-label">Phone</label>
                  <Field name="phone" />
                  {errors.phone && touched.phone ? (
                    <div className="foodapp-form-errors">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="foodapp-form-label">Password</label>
                  <Field name="password" type="password" />
                  {errors.password && touched.password ? <div className="foodapp-form-errors">{errors.password}</div> : null}
                </div>
                <div className="form-group">
                  <button type="submit">Login</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    </>
  )
}

export default Login