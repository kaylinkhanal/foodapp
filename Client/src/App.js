import Login from "./pages/Auth/Login";
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
// import Header from "./component/header";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/AddFood";
import RestaurantList from "./pages/restaurant/restaurant";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/restaurant" element={<AddRestaurant />} />
        <Route path="/restaurant-list" element={<RestaurantList />} />
        <Route path="/admin/food" element={<AddFood />} />
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
