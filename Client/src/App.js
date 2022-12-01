import Login from "./pages/Auth/Login";
import React, {useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/AddFood";
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
  useEffect(()=>{
    navigationControlFor()
  },[role, token])
  return (
    <div className="App">
     
      {!authorizeRole ? (
        <>
         <Header/>
         <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/food" element={<Food />} />
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
  return (
    <Routes>
    <Route path="/restaurant-list" element={<Restaurant />} />
    <Route path="/food-list" element={<Food />} />
    </Routes>
  )
}

const RiderRoute= () => {
  return(
  <Routes>
    <Route path="/request-delivery" element={<DeliveryRequest />} />
  </Routes>
  )
}


const AdminRoute = () => {
  return(
    <Routes>
    <Route path="/admin" element={<Admin />} />
    <Route path="/admin/restaurant" element={<AddRestaurant />} />
    <Route path="/restaurant-list" element={<Restaurant />} />
    </Routes>
  )
}
export default App;