import Login from "./pages/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import Admin from "./pages/admin";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AddFood from "./pages/AddFood";
import Restaurant from "./pages/restaurant/restaurant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DeliveryRequest from "./pages/rider/deliveryRequest";
import OrderDetails from "./pages/rider/OrderDetails";

const App = () => {
  const { token, role } = useSelector((state) => state.users);
  const [authorizeRole, setAuthorizeRole] = useState(null);
  const navigationControl = () => {
    if (token && role === "user") {
      setAuthorizeRole("user");
    } else if (token && role === "rider") {
      setAuthorizeRole("rider");
    } else if (token && role === "admin") {
      setAuthorizeRole("admin");
    }
  };

  useEffect(() => {
    navigationControl();
  }, [role, token]);

  //use -> token
  return (
    <div className="App">


    {!authorizeRole ? (
      <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      </>
    ) : (
      <AuthorizedUsers authorizeRole={authorizeRole}/>
    )}
      
    </div>
  );
};


const AuthorizedUsers = ({authorizeRole}) => {
  if(authorizeRole === 'user'){
    return <UserRoutes />
  }else if(authorizeRole === 'rider'){
    return <RiderRoutes />
  }else{
    return <AdminRoutes />
  }
}

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/restaurant-list" element={<Restaurant />} />
    </Routes>
  );
};

const RiderRoutes = () => {
  return (
    <Routes>
      <Route path="/delivery-request" element={<DeliveryRequest />} />
      <Route path="/delivery-request/orderDetails" element={<OrderDetails />} />
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/restaurant" element={<AddRestaurant />} />
      <Route path="/admin/food" element={<AddFood />} />
    </Routes>
  );
};

export default App;
