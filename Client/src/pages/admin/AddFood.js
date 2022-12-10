import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../../images/dummy.svg'

const AddFood = (props) => {
	const { name } = useSelector(state => state.users)
	const {restaurantList} =useSelector(state => state.restaurant)
	const [foodImg, setImage] = useState()
	const [initialValues, setInitialValues] = useState({
		foodName: '',
		foodCategory: '',
		restaurantName: '',
		foodPrice: '',
		foodType: '',
		foodImage:'',
	})

	useEffect(()=>{
		if(props.selectedItem){
			if(props.flag==="edit_food"){
			setInitialValues(props.selectedItem)
			}
		}
	},[props.selectedItem])

	const saveImage = (e)=>{
		setImage(e.target.files[0])
	}

	const saveFood = async (values) => {
		const formData = new FormData();
		formData.append('file', foodImg)
		formData.append('foodName', values.foodName)
		formData.append('foodCategory', values.foodCategory)
		formData.append('restaurantName', values.restaurantName)
		formData.append('foodPrice', values.foodPrice)
		formData.append('foodType', values.foodType)

		// const requestOptions = {
		// 	method: props.flag ? 'PUT' : 'POST',
		// 	headers: { "Content-Type": "application/json" },
		// 	body: formData,
		// 	dataType: 'jsonP',
		// };

		let requestOptions
		if(props.flag==='edit_food'){
			requestOptions = {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				// body: JSON.stringify(values),
				body: JSON.stringify({
					_id: props.selectedItem._id,
					foodName: values.foodName,
					foodCategory: values.foodCategory,
					foodPrice: values.foodPrice,
					foodType: values.fooodType,
					restaurantName: values.restaurantName
				})
			}
		}else{
			requestOptions = {
				method: 'POST',
				body: formData,
				dataType: 'jsonP',
			}
		}
		
		const response = await fetch('http://localhost:4000/food', requestOptions);
		const data = await response.json();

		if (data) {
			// console.log(data)
			message.success(data.message)
		}else{
			message.error(data)
		}
		props.fetchFood()
	}

	const SignupSchema = Yup.object().shape({
		foodName: Yup.string()
		.required('Required'),
		foodCategory: Yup.string()
		.required('Required'),
		restaurantName: Yup.string()
		.required('Required'),
		foodPrice: Yup.number()
		.required('Required'),
		foodType: Yup.string()
		.required('Required')
	});

	return (
		<>
			{/* <Header /> */}
			<div id="additem_section">
				<div className='form_section'>
					<div className='text_block'>
						<div className='user_info'>
							<img src={Userimage} alt='user'/>
							<span> Hi, {name}</span>
						</div>
					</div>

					<div className='form_content'>
						<Formik
							initialValues={props.selectedItem || initialValues}
							enableReinitialize={true}
							validationSchema={SignupSchema}
							onSubmit={values => {
								saveFood(values)
								props.handleCancel()
									// same shape as initial values
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

									<select name="restaurantName" value={values.restaurantName} onChange={handleChange} onBlur={handleBlur}>
										<option value="" disabled="disabled" label="Enter Restaurant Name"></option>
										{restaurantList.map((options,id)=>{
											return(
												<option value={options.name} label={options.name} key={id}></option>
											)
										})}
									</select>
									{errors.restaurantName && touched.restaurantName ? (<div className="error">{errors.restaurantName}</div>) : null}

									<Field name="foodPrice" placeholder="Enter Food Price" value={values.foodPrice} onChange={handleChange} onBlur={handleBlur} />
									{errors.foodPrice && touched.foodPrice ? (<div className="error">{errors.foodPrice}</div>) : null}

									<select name="foodType" value={values.foodType} onChange={handleChange} onBlur={handleBlur}>
										<option value="" disabled="disabled" label="Select Food Type"></option>
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
		</>
	)
}
export default AddFood