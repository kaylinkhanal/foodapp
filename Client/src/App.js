import Login from "./pages/Auth/Login";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./pages/Auth/Register"
const App = () => {
  return (
    <div className="parent">
      <Routes>
       <Route path="/Register" element={<Register/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
