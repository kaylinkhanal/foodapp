import React from "react";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
const App = () => {
  return (
    <div className="parent">
      <Routes>
       <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
