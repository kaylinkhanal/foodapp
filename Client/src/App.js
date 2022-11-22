import Login from "./pages/Auth/Login";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/HomePage";
import RestaurantForm from "./pages/RestaurantForm";
// importclear Header from "./component/header";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/home" element={<Homepage />} />
=======
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/restaurant" element={<RestaurantForm/>}/>
>>>>>>> 6658e91da6540ddab35693bf4cbcf8a5cbcdafed
      </Routes>
    </div>
  );
};

export default App;