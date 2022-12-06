import Login from "./pages/Auth/Login";
import React, {useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/Food/AddFood";
import Restaurant from "./pages/restaurant/restaurant";
import DeliveryRequest from "./pages/Rider/deliveryRequest";
import {useDispatch, useSelector} from "react-redux";
import Food from "./pages/Food/AddFood";

const App = () => {

  const {token, role} = useSelector(state=> state.users)
  const [authorizeRole, setAuthorizeRole] = useState(null)
  const navigationControlFor = ()=>{
    if(token && role === 'user'){
      setAuthorizeRole('user')
    }else if(token && role === 'rider'){
      setAuthorizeRole('rider')
    }else if(token){
      setAuthorizeRole('admin')
    }else{
      setAuthorizeRole(null)
    }
  }

  // UseEffect is use to render a property or activities duing first page render, here navigationControlFor(), toke and role will rende when login page is render
  useEffect(()=>{
    navigationControlFor()
  },[role, token])
  return (
    <div className="App">
      {!authorizeRole ? (
        <>
         <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/foods" element={<AddFood />} />
         <Route path="/food-list" element={<Food />} />
         <Route path="/register" element={<Register />} />
         <Route path="*" element={<ErrorPage/>}></Route>
       </Routes>
       </>
      ) : (
        <>
        <Header/>
        <AuthorizedUsers authorizeRole={authorizeRole}/>
        </>
      )
      }
     
    </div>
  );
};


const AuthorizedUsers = (props) => {//props is used as role is taken from above authorizeRole
  if(props.authorizeRole === 'rider') { // if authorizeRole is rider, navigate to RiderRole which a function in below
    return <RiderRoute/>
  }else if(props.authorizeRole === 'user'){ // if authorizeRole is rider, navigate to RiderRole which a function in below
    return <UserRoute/>
  }else{
    return <AdminRoute/> // if authorizeRole is rider, navigate to RiderRole which a function in below
  }

}

const UserRoute= () => {
  return (
    <Routes>
    <Route path="/restaurant-list" element={<Restaurant />} />
    <Route path="/" element={<Restaurant />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/food" element={<AddFood />} />
    <Route path="/admin/restaurant" element={<AddRestaurant />} />
    </Routes>
  )
}

const RiderRoute= () => {
  return(
  <Routes>
    <Route path="/request-delivery" element={<DeliveryRequest />} />
    <Route path="/" element={<DeliveryRequest />} />
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  )
}


const AdminRoute = () => {
  return(
    <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/food" element={<AddFood />} />
    <Route path="/admin/restaurant" element={<AddRestaurant />} />
    <Route path="/admin/foods" element={<AddFood />} />
    <Route path="/restaurant-list" element={<Restaurant />} />
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}
export default App;