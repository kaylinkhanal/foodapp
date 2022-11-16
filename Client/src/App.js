import Login from "./pages/Auth/Login";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Register from "./pages/Auth/Register"
const App = () => {
  return (
    <div className="parent">
=======
import Register from "./pages/Auth/Register";
import Header from "./component/header";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
>>>>>>> 1f802ac609b7042d8065b377e0fce8cd928f566a
      <Routes>
       <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
