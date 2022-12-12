import Login from "./pages/Auth/Login";
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/Food/AddFood";
import RestaurantList from "./pages/restaurant/restaurantList";
import RestaurantDetails from "./pages/restaurant/RestaurantDetails";
import DeliveryRequest from "./pages/Rider/deliveryRequest";
import {useDispatch, useSelector} from "react-redux";
import FoodList from "./pages/Food/foodlist"

const App = () => {

  const {token, role} = useSelector(state=> state.users)
  const [authorizeRole, setAuthorizeRole] = useState(null)
  const navigationControlFor = () => {
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
            <Route path="*" element={<ErrorPage />}></Route>
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

const AuthorizedUsers = (props) => {
  if(props.authorizeRole === 'rider') {
    return <RiderRoute/>
  }else if(props.authorizeRole === 'user'){
    return <UserRoute/>
  }else{
    return <AdminRoute/>
  }
}

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<RestaurantList />} />
      <Route path="*" element={<ErrorPage/>}></Route>
      <Route path="/restaurant-list/:id" element={<RestaurantDetails />} />
    </Routes>
  )
}

const RiderRoute = () => {
  return(
  <Routes>
    <Route path="*" element={<ErrorPage/>}></Route>
    <Route path="/" element={<DeliveryRequest />} />
  </Routes>
  )
}

const AdminRoute = () => {
  return(
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/restaurant-list" element={<RestaurantList />} />
      <Route path="/add-food" element={<AddFood />} />
      <Route path="/food-list" element={<FoodList />} />
      <Route path="*" element={<ErrorPage/>}></Route>
      
      
      
    
    </Routes>
  )
}
export default App;