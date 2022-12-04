import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { AddFoodSchema } from "../../schemas/index";
import './food.css'
import { message } from 'antd';
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
  foodType: "",
  restaurant: "",
  foodCategory: "",
};
const AddFood = () => {
  const  [foodImg, setFoodImg] = useState('')
  const saveImgToState = (e) => {
    setFoodImg(e.target.files[0])
  } 

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: AddFoodSchema,
      onSubmit: async (values, action) => {
        const formData = new FormData();
        formData.append("file",foodImg)
        formData.append("foodType",values.foodType)
        formData.append("restaurant",values.restaurant)
        formData.append("foodCategory",values.foodCategory)

        const requestOptions = {
          
          method: "POST",
      
          body: formData
        };
        const response = await fetch(
          "http://localhost:4000/foods/",
          requestOptions
        );
        const data = await response.json();
		if (data) {
			message.success(data.message)
			action.resetForm()
		}else{
			message.success(data.errDetail)
		}
	}
      ,
    });
  return (
    <>
    <div className="formWrapper">
    <Wrapper>
        <div className="container">
          <div className="screen">
            <div className="screen_content">
              <form onSubmit={handleSubmit}>
                <h2 className="modal-title">Add Food</h2>
                <FormGroup>
                  <Label className="label-modal">Food Type</Label>
                  <Select
                    id="foodType"
                    type="foodType"
                    autoComplete="off"
                    name="foodType"
                    placeholder="foodType"
                    value={values.foodType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Option>Select Food Type</Option>
                    <Option value="Dinner">Dinner</Option>
                    <Option value="breakfast">Breakfast</Option>
                    <Option value="fastfood">Fast Food</Option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label className="label-modal">Restaurant</Label>
                  <Input
                    id="restaurant"
                    type="restaurant"
                    autoComplete="off"
                    name="restaurant"
                    placeholder="Restaurant Name"
                    value={values.restaurant}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.restaurant && touched.restaurant ? (
                    <Message>{errors.restaurant}</Message>
                  ) : null}{" "}
                </FormGroup>
                <FormGroup>
                  <Label className="label-modal">Food Category</Label>
                  <Select
                    id="foodCategory"
                    type="foodCategory"
                    autoComplete="off"
                    name="foodCategory"
                    placeholder="foodCategory"
                    value={values.foodCategory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Option>Select Food Category</Option>
                    <Option value="isVeg">isveg</Option>
                    <Option value="isNonVeg">isNonVeg</Option>
                  </Select>
                </FormGroup>
                {foodImg && (
                  <div>
                    <img src={URL.createObjectURL(foodImg)} />
                  </div>
                )}
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
    height: 750px;
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

export default AddFood;
