import Login from "./pages/Auth/Login";
import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./pages/Auth/Register";
// import Header from "./component/header";

const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
