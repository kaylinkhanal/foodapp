<<<<<<< HEAD
import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
 // We don't have to create the state for formik
 //Yup is use for validating the frontend filed data
 import '../../App.css'
=======
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormText from '../../component/formText';
import Image from '../../images/delivery_girl.svg'


const Register = ()=> {
	const saveParticipants = async(values)=>{
		const date = Date.now()
		const requestOptions = {
		 method: 'POST',
		 headers: { 'Content-Type': 'application/json' },
		 body: JSON.stringify({
			 username: values.username,
				  email: values.email,
				  lotteryNo: values.lotteryNo,
				  password: values.password,
				  created: date,
		 })
	 };
	 const response = await fetch('http://localhost:4000/register', requestOptions);
	 const data = await response.json();
	 console.log(data) 
  }

  const SignupSchema = Yup.object().shape({
		name: Yup.string()
		.required('Required'),
		password: Yup.string()
		.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		phoneNumber: Yup.number()
		.required('Required'),
	});

  return (
      <div className="section_bg">
        <div className="form_section" id="register">
            <div className='info_text'>
                <FormText image={Image}/>
            </div>

            <div className='form_content'>
                <h2 className='pg_title'>Create Your Account</h2>

                <div className="register">
                    <Formik
                        initialValues={{
                            name: '',
                            phoneNumber: '',
                            adddress: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            saveParticipants(values)
                            // same shape as initial values
                            // console.log(values);
                        }}
                    >
                    {({ errors, touched, values, handleChange, handleBlur }) => (
                        <Form>
                            <Field name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

                            <Field name="phoneNumber" placeholder="Enter Phone No." value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                            {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                            <Field name="adddress" placeholder="Enter Adddress" value={values.adddress} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                            <Field name="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                            <Field name="confirmPassword" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirmPassword && touched.confirmPassword ? <div className="error">{errors.confirmPassword}</div> : null}

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                    </Formik>
                    
                </div>
            </div>
        </div>
      </div>
    )
}
>>>>>>> 1f802ac609b7042d8065b377e0fce8cd928f566a


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
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
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