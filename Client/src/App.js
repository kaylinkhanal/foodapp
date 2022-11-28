import Login from "./pages/Auth/Login";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/HomePage";
import Users from "./pages/Users";
import ResturantForm from "./pages/ResturantForm";
import Restaurants from "./pages/Restaurants";
import AddFood from './pages/AddFood'
import Food from "./pages/Food";
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
        <Route path="/addFood" element={<AddFood/>}/>
        <Route path="/food" element={<Food/>}/>

      </Routes>
    </div>
  );
};

export default App;
