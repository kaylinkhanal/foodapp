import React from "react";
import { message } from "antd";
import 'antd/dist/antd.min.css';
import { Formik } from "formik";
import Image  from "../images/pngegg.png";
import axios from "axios";



function AddFood() {
  const handleSubmit = (values) => {
    // const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name: values.name,
    //     //   phoneNumber: values.phoneNumber,
    //     //   address: values.address,
    //     //   email: values.email,
    //       description: values.description,
    //     //   password: values.password,
    //       price: values.price,
    //     }),
    //   };
    if(values.name && values.description && values.price){
      axios
      .post("http://localhost:4000/food", {
        name: values.name,
        description: values.description,
        price: values.price,
      }).then(response => message.success(response.data.message))
      
    } else{
      message.error('all form fields required')
    }
  };
  return (
    <div className="section_bg" style={{backgroundColor: "#5388d4"}}>
			<div className="form_section login">
				<div className='info_text'>
					{/* <FormText image={Image} /> */}
          <img src={Image} style={{position: "absolute", marginLeft: "50px", top: "30%", left: "20%"}}/>
				</div>

				<div className='form_content'>
					<h2 className='pg_title'>Add Food</h2>

					<div className="register">
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          //   errors.name = "name required";
          return errors;
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {/* <label>Name</label> */}
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="textarea"
              name="description"
              placeholder="write about your food in a few words"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}

            <input
              type="number"
              name="price"
              placeholder="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" style={{backgroundColor: "#75db6e"}}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      {/* <p style={{ color: '#fff', marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p> */}
					</div>
				</div>
			</div>
		</div>
  );
}


export default AddFood;
