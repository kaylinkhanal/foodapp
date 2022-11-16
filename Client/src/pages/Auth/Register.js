
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
  return <h1>hello i am Register</h1>
}

export default Register