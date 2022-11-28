import Login from "./pages/Auth/Login";
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./Food/AddFood";
import Restaurant from "./pages/restaurant/restaurant";
import Profile from "./pages/userProfile";
import Food from "./Food/food";
import {useSelector} from 'react-redux'


const App = () => {
  const { token } = useSelector(state => state.users)
  return (
    <div className="App">
      <Header/>
      <Routes>
        {token ? <Route path="/" element={<Restaurant />} /> : <Route path="/" element={<Login />} />}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/restaurant" element={<AddRestaurant />} />
        <Route path="/" element={<Restaurant />} />
        <Route path="/admin/food" element={<AddFood />} />
        <Route path="/food" element={<Food />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
