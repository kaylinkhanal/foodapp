import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../../Styles/globalStyles";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas";
import image from "../../productImages/signin.jpeg";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCredentials} from "../../reducersSlice/userSlice"
//import axios from 'axios'

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const triggerLogin = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };
    const response =await fetch(
          "http://localhost:4000/login",
        requestOptions
          )
          const data2 = 10000;
    const data=await response.json()
    console.log(data.status);
    if(data.status==="300"){
      alert(data.message)
    }else if(data.status==="301"){
      alert(data.message)
    }else{
      dispatch(setCredentials(data.registeredUser))
      navigate('/home')
    }


    console.log(await response.json());
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit:async(values, action) => {
        /*        
        axios.post("http://localhost:4000/login/",{
          email:values.email,
          password:values.password
        }).then(data=>{
          alert(data.data.message)
          console.log(data.data);
        }).catch(err=>{
          console.log(err);
        }
        */

      triggerLogin(values);
      action.resetForm();
      },
    });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">LOGIN</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                    <button className="input-button" type="submit">
                      LOGIN
                    </button>
                </form>
                <p className="sign-up">
                  Don't have an account?<Link to="/register">SignUp</Link>
                </p>
              </div>
              <div className="modal-right">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }
  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }
  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }
  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }
  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }
  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
`;

export default Login;
