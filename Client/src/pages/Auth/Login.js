import FormText from "../../component/formText";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from '../../images/order.svg'
import { Link } from 'react-router-dom'
import { message } from "antd";
// import 'antd/dist/antd.min.css';
import ShowHidePassword from "../../component/showHidePassword";
import { setCredentials } from "../../reducersSlice/userSlice";
import {useDispatch} from 'react-redux'

const Login = () => {
	const dispatch = useDispatch()

	const logParticipants = async (values) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: values.email,
				password: values.password
			})
		};
		const response = await fetch('http://localhost:4000/login', requestOptions);
		const data = await response.json();

		if (data) {
			// console.log(data)
			//message.success(data.msg) // to display the success msg after submit
            data.detail.token = data.token
			dispatch(setCredentials(data.detail)) // to access the user data
			
		} else {
			message.error("invalid details")
		}
	}

	const LoginSchema = Yup.object().shape({
		password: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
	});

	return (
		<div className="section_bg">
			<div className="form_section login">
				<div className='info_text'>
					<FormText image={Image} />
				</div>

				<div className='form_content'>
					<h2 className='pg_title'>Login</h2>

					<div className="register">
						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={LoginSchema}
							onSubmit={values => {
								logParticipants(values)
								// same shape as initial values
								// console.log(values);
							}}
						>
							{({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
								<Form onSubmit={handleSubmit}>
									<Field name="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
									{errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

									<Field name="password" placeholder="Enter Password" value={values.password} component={ShowHidePassword} onChange={handleChange} onBlur={handleBlur} />
									{errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

									<button type="submit">Login</button>
								</Form>
							)}
						</Formik>
						<p style={{ color: '#fff', marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;
