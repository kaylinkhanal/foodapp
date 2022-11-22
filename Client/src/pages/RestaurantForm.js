import React from "react";
import styled from "styled-components";

import { useFormik } from "formik";
import { RestaurantFormSchema } from "../schemas";
import {
  FormGroup,
  Label,
  Input,
  Message,
  Button,
  Select,
  Option,
} from "../Styles/RestaurantFormStyle";
const initialValues = {
  name: "",
  location: "",
  rating: "",
  restaurantCategory: "",
};
const RestaurantForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: RestaurantFormSchema,
      onSubmit: async (values, action) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: values.name,
            location: values.location,
            rating: values.rating.toString(),
            category: values.restaurantCategory,
          }),
        };
        const response = await fetch(
          "http://localhost:4000/restaurants/",
          requestOptions
        );
        const data = await response.json();
        console.log(data);
        action.resetForm();
      },
    });
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="screen">
            <div className="screen_content">
              <form onSubmit={handleSubmit}>
                <h4 className="modal-title">Restaurant Info!</h4>
                <FormGroup>
                  <Label htmlFor="label">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    autoComplete="off"
                    name="name"
                    placeholder="name please"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <Message>{errors.name}</Message>
                  ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Location</Label>
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
                  <Label>Rating</Label>
                  <Input
                    id="rating"
                    type="number"
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
                {/* <FormGroup>
                <Label>resturant category</Label>
                <Input
                  id="resturantCategory"
                  type="resturantCategory"
                  autoComplete="off"
                  name="resturantCategory"
                  placeholder="resturantCategory"
                  value={values.resturantCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.resturantCategory && touched.resturantCategory ? (
                  <Message>{errors.resturantCategory}</Message>
                ) : null}{" "}
              </FormGroup> */}
                <FormGroup>
                  <Label>Restaurant Category</Label>
                  <Select
                    id="restaurantCategory"
                    type="restaurantCategory"
                    autoComplete="off"
                    name="restaurantCategory"
                    placeholder="restaurantCategory"
                    value={values.restaurantCategory}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Option>Select Restaurant</Option>
                    <Option value="dinner">Dinner</Option>
                    <Option value="family_style">Family Style</Option>
                    <Option value=" Fast Food"> Fast Food</Option>
                  </Select>
                </FormGroup>
                <div style={{ textAlign: "center" }}>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
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
    background: linear-gradient(90deg, #87cefa, #e0ffff);
    position: relative;
    height: 750px;
    width: 500px;
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

  h4 {
    margin: 60px;
    outline: 0;
    border: 0;
    padding: 10px 10px 10px 60px;
  }
`;

export default RestaurantForm;
