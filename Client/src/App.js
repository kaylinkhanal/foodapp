import Login from "./pages/Auth/login";
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Auth/register";
// import Header from "./component/header";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestro from "./pages/AddRestro";
import AddFood from "./pages/AddFood";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/restro" element={<AddRestro />} />
        <Route path="/admin/food" element={<AddFood />} />
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
