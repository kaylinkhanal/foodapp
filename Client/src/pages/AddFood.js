import React from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../images/dummy.svg'

const AddRestro = () => {
	const { name } = useSelector(state => state.users)

	// const navigate = useNavigate()
	const saveFood = async (values) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				foodType: values.foodType,
				restaurant: values.restaurant,
				isNonVeg: values.isNonVeg,
			})
		};
		const response = await fetch('http://localhost:4000/food', requestOptions);
		const data = await response.json();

		if (data) {
			console.log(data)
			message.success(data.message)
		}else{
			message.success(data.errorMsg)
		}
	}

	const SignupSchema = Yup.object().shape({
		foodType: Yup.string()
			.required('Required'),
			restaurant: Yup.string().required('Required'),

			isNonVeg: Yup.string()
			.required('Required')
	});

	return (
		<>
			{/* <Header /> */}
			<div id="additem_section" className='full_height'>
				<div className='container'>
					<div className='main_content'>
						<div className='form_section'>
							<div className='text_block'>
								<div className='user_info'>
									<img src={Userimage} alt='user'/>
									<span> Hi, {name}</span>
								</div>
								
								<h1>Add<br /> Cuisine</h1>
								<p>Healthy Sashimi Tuna Bites with Sashami grade Tuna, 110 Calories and 13g protein</p>
							</div>

							<div className='form_content transparent_bg'>
								<Formik
									initialValues={{
										foodType: '',
										restaurant: '',
										isNonVeg: '',
									}}
									validationSchema={SignupSchema}
									onSubmit={values => {
										saveFood(values)
										// same shape as initial values
										// console.log('clicked');
									}}
								>
									{({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
										<Form onSubmit={handleSubmit}>
											<select name="foodType" value={values.foodType} onChange={handleChange} onBlur={handleBlur}>
												<option value="" disabled="disabled" label="Select Food Type"></option>
												<option value="Category 1" label="Category 1">Category 1</option>
												<option value="Category 2" label="Category 2">Category 2</option>
												<option value="Category 3" label="Category 3">Category 3</option>
												<option value="Category 4" label="Category 4">Category 4</option>
											</select>
											{errors.restroCategory && touched.restroCategory ? <div className="error">{errors.restroCategory}</div> : null}

											<Field name="restaurant" placeholder="Enter Restro Name" value={values.restaurant} onChange={handleChange} onBlur={handleBlur} />
											{errors.restaurant && touched.restaurant ? (<div className="error">{errors.restaurant}</div>) : null}

											<select name="isNonVeg" value={values.isNonVeg} onChange={handleChange} onBlur={handleBlur}>
												<option value="" disabled="disabled" label="Select Category"></option>
												<option value="Veg" label="Veg">Veg</option>
												<option value="Non Veg" label="Non Veg">Non Veg</option>
											</select>
											{errors.isNonVeg && touched.isNonVeg ? <div className="error">{errors.isNonVeg}</div> : null}

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
export default AddRestro 