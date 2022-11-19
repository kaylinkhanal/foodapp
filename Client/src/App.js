import Login from "./pages/Auth/Login";
import { Routes, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/HomePage";
import ResturantForm from "./pages/ResturantForm";
// importclear Header from "./component/header";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/resturant" element={<ResturantForm/>}/>

      </Routes>
    </div>
  );
};

export default App;
