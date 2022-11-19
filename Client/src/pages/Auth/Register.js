import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormText from '../../component/formText';
import Image from '../../images/delivery_girl.svg'
import { useNavigate } from "react-router-dom";


const Register = ()=> {
	const navigate = useNavigate()
    const saveParticipants = async(values)=>{
        const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: values.name,
                phoneNumber: values.phoneNumber,
                address: values.address,
                email: values.email,
                role: values.role,
                password: values.password,
                confirmPassword: values.confirmPassword
			})
		};
		const response = await fetch('http://localhost:4000/register/', requestOptions);
		const data = await response.json();
    if(data){
        navigate('/')
    }  
    }

    const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .required('Required'),
        phoneNumber: Yup.string().required('Required'),
        
        email: Yup.string().email('Invalid email').required('Required'),
        
        password: Yup.string()
          .required('Required')
          .min(6)
          .matches(passwordRule, {message : 'Please create a stronger password'}),

        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords doesnt match'),
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
                            address: '',
                            email: '',
                            role: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            saveParticipants(values)
                            // same shape as initial values
                            // console.log('clicked');
                        }}
                    >
                    {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Field name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

                            <Field name="phoneNumber" placeholder="Enter Phone No." value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                            {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                            <Field name="address" placeholder="Enter Address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                            {errors.address && touched.address ? <div className="error">{errors.address}</div> : null}

                            <Field name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}

                            {/* <Field name="role" placeholder="Select Role" value={values.role} onChange={handleChange} onBlur={handleBlur} /> */}
                            

                            <select name="role" value={values.role} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" label="Select a color">Role</option>
                                <option value="user" label="User">User</option>
                                <option value="rider" label="Rider">Rider</option>
                            </select>
                            {errors.role && touched.role ? <div className="error">{errors.role}</div> : null}

                            <Field name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} ></Field>
                            {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                            <Field name="confirmPassword"  type="password" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
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
export default Register
