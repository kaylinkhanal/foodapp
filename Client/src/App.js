import Login from "./pages/Auth/Login";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/HomePage";
import Users from "./pages/Users";
import ResturantForm from "./pages/ResturantForm";
import Restaurants from "./pages/Restaurants";
// importclear Header from "./component/header";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/resturant" element={<ResturantForm/>}/>
        <Route path="/restaurants" element={<Restaurants/>}/>

      </Routes>
    </div>
  );
};

export default App;
