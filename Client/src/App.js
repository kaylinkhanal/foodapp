import Login from "./pages/Auth/Login";
import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import DeliveryRequest from "./pages/Rider/deliveryRequest";
import {useSelector} from "react-redux";
import AddFood from "./pages/Food/AddFood";
import Admin from "../src/pages/ADMIDASHBOARD/admin";
import AdminNav from "./pages/ADMIDASHBOARD/AdminNav";
import DashBoard from "./pages/ADMIDASHBOARD/DashBoard";
import FoodListItem from "./pages/ADMIDASHBOARD/FoodListItem";
import HomePage from "./pages/Users/HomePage";

const App = () => {
  const navigate = useNavigate();

 const {token, role} = useSelector(state=> state.users)
  const [authorizeRole, setAuthorizeRole] = useState(null)

  const navigationControlFor = ()=>{
     if(token && role === 'user'){
         setAuthorizeRole('user')
         navigate('/home')

      }else if(token && role === 'rider'){
          setAuthorizeRole('rider')
          navigate('/request-delivery')

      }else if(token){
          setAuthorizeRole('admin')
          navigate('/admin')
      }else{
          setAuthorizeRole(null)
          navigate('/')
    }
  }

  useEffect(()=>{
    navigationControlFor()
  },[role, token])

  return (
    <div className="App">
      {!authorizeRole ? (
        <>
         <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="*" element={<ErrorPage/>}></Route>
       </Routes>
       </>
      ) : (
        <AuthorizedUsers authorizeRole={authorizeRole}/>
      )
      }     
    </div>
  );
};

const AuthorizedUsers = (props) => {
  if(props.authorizeRole === 'rider') {
    return <RiderRoute/>
  }else if(props.authorizeRole === 'user'){
    return <UserRoute/>
  }else{
    return <AdminRoute/>
  }
}

const UserRoute= () => {
  
  return (<>
    <Header/>

    <Routes>
    <Route path="/home" element={<HomePage />} />
    </Routes>
    </> )
}

const RiderRoute= () => {
  return(
    <>
        <Header/>

  <Routes>
    <Route path="/request-delivery" element={<DeliveryRequest />} />
  </Routes>
  </> )
}


const AdminRoute = () => {
  return(
    <>
    <AdminNav/>
    <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/foodlist" element={<FoodListItem />} />
    <Route path="/admin/dashboard" element={<DashBoard />} />
    <Route path="/admin/restaurant" element={<AddRestaurant />} />
    <Route path="/admin/foods" element={<AddFood />} />
    </Routes>
  </>)
}

export default App;