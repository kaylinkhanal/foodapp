import React from 'react';
import Header from '../../component/header/header';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../../images/dummy.svg'

const AddRestaurant = () => {
	const { name } = useSelector(state => state.users)

	// const navigate = useNavigate()
	const saveRestro = async (values, action) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: values.name,
				location: values.location,
				rating: values.rating,
				category: values.category,
			})
		};
		const response = await fetch('http://localhost:4000/restaurant', requestOptions);
		const data = await response.json();
		if (data) {
			message.success(data.message)
			action.resetForm()
		}else{
			message.success(data.errDetail)
		}
	}

	const SignupSchema = Yup.object().shape({
		name: Yup.string()
			.required('Required'),
		location: Yup.string().required('Required'),

		category: Yup.string()
			.required('Required')
	});

	return (
		<>
			{/* <Header /> */}
			<div id='additem_section' className='full_height'>
				<div className='container'>
					<div className='main_content'>
						<div className='form_section'>
							<div className='text_block'>
								<div className='user_info'>
									<img src={Userimage} alt='user'/>
									<span> Hi, {name}</span>
								</div>
								
								<h1>Register <br /> Restaurant</h1>
								<p>Healthy Sashimi Tuna Bites with Sashami grade Tuna, 110 Calories and 13g protein</p>
							</div>

							<div className='form_content transparent_bg'>
								<Formik
									initialValues={{
										name: '',
										location: '',
										rating: '',
										category: '',
									}}
									validationSchema={SignupSchema}
									onSubmit={ ( values, action ) => {
										saveRestro( values, action )
									}}
								>
									{({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
										<Form onSubmit={handleSubmit}>
											<Field name="name" placeholder="Enter Restaurant Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
											{errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

											<Field name="location" placeholder="Enter Location" value={values.location} onChange={handleChange} onBlur={handleBlur} />
											{errors.location && touched.location ? (<div className="error">{errors.location}</div>) : null}

											<Field name="rating" type="number" placeholder="Add Rating" value={values.rating} onChange={handleChange} onBlur={handleBlur} />
											{errors.rating && touched.rating ? <div className="error">{errors.rating}</div> : null}

											<select name="category" value={values.category} onChange={handleChange} onBlur={handleBlur}>
												<option value="" disabled="disabled" label="Select Category"></option>
												<option value="Italian" label="Italian">Italian</option>
												<option value="Chinese" label="Chinese">Category 2</option>
												<option value="Multi Cuisine" label="Multi Cuisine">Category 3</option>
												<option value="Fast Food" label="Fast Food">Thai</option>
											</select>
											{errors.category && touched.category ? <div className="error">{errors.category}</div> : null}

											<button type="submit">Submit</button>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AddRestaurant 