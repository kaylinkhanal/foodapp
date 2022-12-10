import React from "react";
import AddRestaurant from "../pages/admin/AddRestaurant";
import AddFood from "../pages/admin/AddFood";
import Restaurant from "../pages/restaurant/restaurant";
import Profile from "../pages/userProfile";
import Food from "../pages/Food/food";
import Dashboard from "../pages/admin/dashboard";
import { Routes, Route} from "react-router-dom";
import DeliveryRequest from "../pages/Rider/deliveryRequest";
import MyOrders from "../pages/Rider/myOrders";
import RestaurantDetail from "../pages/restaurant/restaurantDetail";
import FoodData from '../pages/admin/foodData'
import RestaurantData from "../pages/admin/restaurantData";

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
        <Route path="/restaurant/:id" element={<RestaurantDetail/>}></Route>
        <Route path="/food" element={<Food />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    );
  };
  
  const RiderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<DeliveryRequest />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    );
  };
  
  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/food-data" element={<FoodData />} />
        <Route path="/restaurant-data" element={<RestaurantData />} />
      </Routes>
    );
  };
export default AuthorizedUsers