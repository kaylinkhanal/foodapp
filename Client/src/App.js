import Login from "./pages/Auth/Login";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/AddFood";
import Restaurant from "./pages/restaurant/restaurant";
import { useSelector } from "react-redux";

const App = () => {

  const token = useSelector( state => state.users.token );
  console.log( token )
  //use -> token
  return (
    <div className="App">
      <Header/>
      <Routes>
        { ( token != '' ) ? (
          <>
            <Route path="/" element={<Restaurant />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/restaurant" element={<AddRestaurant />} />
            <Route path="/admin/food" element={<AddFood />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        ) }
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
};

export default App;