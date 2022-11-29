import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormText from '../../component/formText';
import Image from '../../images/delivery_girl.svg'
import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import ShowHidePassword from '../../component/showHidePassword';

const Register = () => {
	const navigate = useNavigate()
	const saveParticipants = async (values) => {
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
		const response = await fetch('http://localhost:4000/register', requestOptions);
		const data = await response.json();

		if (data) {
			console.log(data)
			navigate('/')
			message.success("User has been registered")
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
			.matches(passwordRule, { message: 'Please create a stronger password' }),

		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords doesnt match'),
	});

	return (
    <>
		<div className="section_bg">
			<div className="form_section" id="register">
				<div className='info_text'>
					<FormText image={Image} />
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
                <>
								<Form onSubmit={handleSubmit}>
									<Field name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
									{errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

									<Field name="phoneNumber" placeholder="Enter Phone No." value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
									{errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

									<Field name="address" placeholder="Enter Address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
									{errors.address && touched.address ? <div className="error">{errors.address}</div> : null}

									<Field name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
									{errors.email && touched.email ? <div className="error">{errors.email}</div> : null}

                  <select>
                    <option>Rider</option>
                    <option>Customer</option>
                  </select>
                  {errors.role && touched.role ? (
                    <p className="form-error">{errors.role}</p>
                  ) : null}
               
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Registration
                    </button>
                  </div>
                </Form>
                <p className="sign-up">
                  Already have an account? <Link to ="/">Sign In now</Link>
                </p>
                </> )}
                </Formik>
                </div>
              </div>
              </div>
              </div>
              </>
            
          
  
)
}

export default Register
