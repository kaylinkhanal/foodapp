import React from "react";
import AddRestaurant from '../pages/restaurant/AddRestaurant';
import AddFood from "../pages/Food/AddFood";
import Restaurant from "../pages/restaurant/restaurant";
import Profile from "../pages/userProfile";
import Food from "../pages/Food/food";
import Admin from "../pages/admin";
import { Routes, Route} from "react-router-dom";
import DeliveryRequest from '../pages/deliveryRequest'

const AuthorizedUsers = (props) => {
    if(props.authorizeRole === 'user'){
      return <UserRoutes />
    }else if(props.authorizeRole === 'rider'){
      return <RiderRoutes />
    }else{
      return <AdminRoutes />
    }
  }
  
  const UserRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/food" element={<Food />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    );
  };
  
  const RiderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<DeliveryRequest />} />
      </Routes>
    );
  };
  
  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/restaurant" element={<AddRestaurant />} />
        <Route path="/admin/food" element={<AddFood />} />
      </Routes>
    );
  };
export default AuthorizedUsers