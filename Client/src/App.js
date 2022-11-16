import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";


import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
};

export default App;
