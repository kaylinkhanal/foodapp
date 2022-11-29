import React from "react";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Homepage from "./pages/Home";
import RestaurantForm from "./pages/AddRestro";
import Cards from "./pages/AddFood";
const App = () => {
  return (
    <div className="parent">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/restaurant" element={<RestaurantForm/>}/>
        <Route path="/card" element={<Cards/>}/>
      </Routes>
    </div>
  );
};

export default App;
