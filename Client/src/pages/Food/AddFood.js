import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../../images/dummy.svg'

const AddRestro = () => {
	const { name } = useSelector(state => state.users)
	const [foodImg, setImage] = useState()

	const saveImage = (e)=>{
		setImage(e.target.files[0])
	}

	const saveFood = async (values) => {
		const formData = new FormData();
		formData.append('file', foodImg)
		formData.append('foodName', values.foodType)
		formData.append('foodCategory', values.foodCategory)
		formData.append('restaurantName', values.restaurantName)
		formData.append('foodPrice', values.foodPrice)
		formData.append('foodType', values.foodType)

		const requestOptions = {
			method: 'POST',
			body: formData,
			dataType: 'jsonP',
			// headers: { 'Content-Type': 'application/json' },
			// body: JSON.stringify({
			// 	foodType: values.foodType,
			// 	restaurant: values.restaurant,
			// 	isNonVeg: values.isNonVeg,
			// })
		};
		
		const response = await fetch('http://localhost:4000/food', requestOptions);
		const data = await response.json();

		if (data) {
			console.log(data)
			message.success(data.message)
		}else{
			message.error(data)
		}
	}

	const SignupSchema = Yup.object().shape({
		foodType: Yup.string()
		.required('Required'),
		restaurant: Yup.string()
		.required('Required'),
		price: Yup.number()
		.required('Required'),
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
										foodCategory: '',
										restaurant: '',
										foodType: '',
										foodPrice:'',
										foodImage: '',
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
											<Field name="foodName" placeholder="Enter Food Name" value={values.foodName} onChange={handleChange} onBlur={handleBlur} />
											{errors.foodName && touched.foodName ? (<div className="error">{errors.foodName}</div>) : null}

											<select name="foodCategory" value={values.foodCategory} onChange={handleChange} onBlur={handleBlur}>
												<option value="" disabled="disabled" label="Select Food Category"></option>
												<option value="Category 1" label="Category 1">Category 1</option>
												<option value="Category 2" label="Category 2">Category 2</option>
												<option value="Category 3" label="Category 3">Category 3</option>
												<option value="Category 4" label="Category 4">Category 4</option>
											</select>
											{errors.foodCategory && touched.foodCategory ? <div className="error">{errors.foodCategory}</div> : null}

											<Field name="restaurantName" placeholder="Enter Restro Name" value={values.restaurantName} onChange={handleChange} onBlur={handleBlur} />
											{errors.restaurantName && touched.restaurantName ? (<div className="error">{errors.restaurantName}</div>) : null}

											<Field name="foodPrice" placeholder="Enter Food Price" value={values.foodPrice} onChange={handleChange} onBlur={handleBlur} />
											{errors.foodPrice && touched.foodPrice ? (<div className="error">{errors.foodPrice}</div>) : null}

											<select name="foodType" value={values.foodType} onChange={handleChange} onBlur={handleBlur}>
												<option value="" disabled="disabled" label="Select Category"></option>
												<option value="Veg" label="Veg">Veg</option>
												<option value="Non Veg" label="Non Veg">Non Veg</option>
											</select>
											{errors.foodType && touched.foodType ? <div className="error">{errors.foodType}</div> : null}
											
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
export default AddRestro 