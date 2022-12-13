import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../../images/dummy.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setRestaurantList } from '../../reducerSlice/restaurantSlice';

const AddRestaurant = (props) => {
	// const foodId = props.selectedItem._id
	const { name } = useSelector(state => state.users)
	const [foodImg, setImage] = useState()

	const dispatch = useDispatch()

	const [initialValues, setInitialValues] = useState({
		name: '',
		location: '',
		rating: '',
		category: '',
		restroImage:'',
	})
	console.log(initialValues)

	useEffect(()=>{
		if(props.selectedItem){
			if(props.flag==="edit_restro"){
			setInitialValues(props.selectedItem)
			}
		}
	},[props.selectedItem])

	// save restro Image
	const saveImage = (e)=>{
		setImage(e.target.files[0])
	}

	// const navigate = useNavigate()
	const saveRestro = async (values) => {
		const formData = new FormData();
		formData.append('file', foodImg)
		formData.append('name', values.name)
		formData.append('location', values.location)
		formData.append('rating', values.rating)
		formData.append('category', values.category)
		let requestOptions
		if(props.flag){
			requestOptions = {
				method: "PUT",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					_id: props.selectedItem._id,
					name: values.name,
					location: values.location,
					rating: values.rating,
					category: values.category,
				})
			}
		}else{
			requestOptions = {
				method: 'POST',
				body: formData,
				dataType: 'jsonP',
			}
		}

		const response = await fetch('http://localhost:4000/restaurant', requestOptions);
		const data = await response.json();
		console.log(data)
		if (data) {
			message.success(data.message)
			await props.fetchRestaurant()
		}else{
			message.success(data.errDetail)
		}
		if(!props.flag){
			dispatch(setRestaurantList(values))
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
			<div id='additem_section'>
				<div className='container'>
					<div className='main_content'>
						<div className='form_section'>
							<div className='text_block'>
								<div className='user_info'>
									<img src={Userimage} alt='user'/>
									<span> Hi, {name}</span>
								</div>
							</div>

							<div className='form_content'>
								<Formik
									// initialValues={{
									// 	name: '',
									// 	location: '',
									// 	rating: '',
									// 	category: '',
									// }}
									initialValues={initialValues}
      								enableReinitialize
									validationSchema={SignupSchema}
									onSubmit={values => {
										saveRestro(values)
										props.handleCancel()
										// same shape as initial values
										// console.log('clicked');
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

											<input type="file" onChange={(e)=> saveImage(e)}></input>

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