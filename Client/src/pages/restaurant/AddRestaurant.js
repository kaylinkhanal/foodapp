import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import Header from '../../component/header/header';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Formik, Form, Field } from 'formik';
import { RestaurantFormSchema } from "../../schemas/index";
import * as Yup from 'yup';
// import { useNavigate, Link } from "react-router-dom";
import { message } from 'antd';
import 'antd/dist/antd.min.css';
import Userimage from '../../images/dummy.svg'
import {
	createBrowserRouter as Routes,
	Link,
  } from "react-router-dom";
  import {
	FormGroup,
	Label,
	Input,
	Message,
	Button,
	Select,
	Option,
  } from "../../Styles/FormStyle";

  const initialValues = {
	name: "",
	location: "",
	rating: "",
	category:"",
  };
const AddRestaurant = (props) => {
	const { name } = useSelector(state => state.users)
	const [initialValues, setInitialValues]= useState({
		name: "",
		location: "",
		rating: "",
		category:"",
	  })
	  useEffect(()=>{
		if(props.selectedItem){
		  if(props.flag==="edit_restro"){
			setInitialValues(props.selectedItem)
		  }
		}
	  },[props.selectedItem])

	  const  [RestroImg, setRestroImg] = useState('')
	  const saveImgToState = (e) => {
      console.log(e.target.files[0])
		  setRestroImg(e.target.files[0])
	  }

	  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: props.selectedItem || {
        name: '',
        location:' ',
        rating: '',
		    category:"",
        file: '',

      },
      enableReinitialize: true,
      validationSchema: RestaurantFormSchema,
      onSubmit: async (values, action) => {
        const formData = new FormData();
        formData.append('file', RestroImg);
        formData.append('name',values.name);
        formData.append('location', values.location);
        formData.append('rating', values.rating);
		    formData.append('category ', values.category);

        let requestOptions
        if(props.flag==="edit_restro"){
           requestOptions = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
          };
        }else{
          requestOptions = {
            method:  "POST",
            body:formData
          };
        }
		const response = await fetch('http://localhost:4000/restaurant', requestOptions);
   
		const data = await response.json();
		if (data) {
			message.success(data.message)
			action.resetForm()
		}else{
			message.success(data.errDetail)
		}
	},

	});

	return (
		<>
			 <div className="formWrapper">
    <Wrapper>
        <div className="container">
          <div className="screen">
            <div className="screen_content">
              <form onSubmit={handleSubmit}>
                <h2 className="modal-title">Add Restaurant</h2>
				<FormGroup>
                  <Label className="label-modal">Restaurant Name</Label>
                  <Input
                    id="name"
                    type="name"
                    autoComplete="off"
                    name="name"
                    placeholder="Restaurant Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <Message>{errors.name}</Message>
                  ) : null}{" "}
                </FormGroup>
				<FormGroup>
                  <Label className="label-modal">Location</Label>
                  <Input
                    id="location"
                    type="location"
                    autoComplete="off"
                    name="location"
                    placeholder="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.location && touched.location ? (
                    <Message>{errors.location}</Message>
                  ) : null}{" "}
                </FormGroup>

				<FormGroup>
                  <Label className="label-modal">Rating</Label>
                  <Input
                    id="rating"
                    type="rating"
                    autoComplete="off"
                    name="rating"
                    placeholder="rating"
                    value={values.rating}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.rating && touched.rating ? (
                    <Message>{errors.rating}</Message>
                  ) : null}{" "}
                </FormGroup>
                <FormGroup>
                  <Label className="label-modal">Food Type</Label>
                  <Select
                    id="category"
                    type="category"
                    autoComplete="off"
                    name="category"
                    placeholder="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Option>Select Restaurant Category</Option>
                    <Option value="Italian">Italian</Option>
                    <Option value="Chiness">Chiness</Option>
                    <Option value="Multi Cuisine">Multi Cuisine</Option>
					<Option value="Fast Food">Fast Food</Option>
                  </Select>
                </FormGroup>
                
             
                <img src={require('../../uploads/ic.png')} alt="32" width={100} height={100}/> 
                <input type="file"
                 onChange={(e)=> saveImgToState(e)}
                />
                <div style={{ textAlign: "center" }}>
   <Button type="submit">Submit</Button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
      
    </>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    
  }
  .screen {
    background: #ab0013;
    position: relative;
    height: 1000px;
    width: 500px;
    color: white;
    box-shadow: 0px 0px 24px #bc8f8f;
  }
  .screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
  }
  .screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
  }
  h2 {
    color: white;
    margin: 145px;
    outline: 0;
    border: 0;
    padding: 10px 10px 10px 60px;
  }
  .label-modal{
    color: white;
    font-weight: bold;
  }
`;
export default AddRestaurant;