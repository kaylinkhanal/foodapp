import Login from "./pages/Auth/Login";
import React, {useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import DeliveryRequest from "./pages/Rider/deliveryRequest";
import {useSelector} from "react-redux";
import Food from "./pages/Food/AddFood";
import HomePage from "./pages/HomePage";
import Admin from "./pages/admin";
//import Home from "./pages/ADMIDASHBOARD/DashBoard";
import AdminNav from "./pages/ADMIDASHBOARD/AdminNav";
import DashBoard from "./pages/ADMIDASHBOARD/DashBoard";
import FoodListItem from "./pages/ADMIDASHBOARD/FoodListItem";

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
    <Route path="/food" element={<Food />} />
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
    <Route path="/admin/foods" element={<Food />} />
    </Routes>
  </>)
}

export default App;