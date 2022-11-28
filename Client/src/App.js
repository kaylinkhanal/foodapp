import React, { useEffect, useState } from 'react'
import Login from "./pages/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Header from "./component/header/header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useSelector } from 'react-redux'
import AuthorizedUsers from './component/authUsersRoute';


const App = () => {
	const { token, role } = useSelector((state) => state.users);
	const [authorizeRole, setAuthorizeRole] = useState(null);
	const navigationControl = () => {
		if (token && role === "user") {
			setAuthorizeRole("user");
		} else if (token && role === "rider") {
			setAuthorizeRole("rider");
		} else if (token ) {
			setAuthorizeRole("admin");
		}else{
			setAuthorizeRole(null)
		}
	};

	useEffect(() => {
		navigationControl();
	}, [authorizeRole]);

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
				<>
					<Header />
					<AuthorizedUsers authorizeRole={authorizeRole} />
				</>
			)}
		</div>
	);
};

export default App;
