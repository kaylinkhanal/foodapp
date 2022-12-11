import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setCredentials } from "../../reducerSlice/userSlice";

const Navigation = () => {
	const { name, role, token } = useSelector(state => state.users)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const userLogout = () => {
		dispatch(setCredentials(''))
		navigate('/')
	}

	return (
		<div className="navbar">
			{token ? (
				<>
					<div className="navbar_left">
						{role === 'user' ? (
							<ul className="nav_list">
								<li><Link to="/">Restaurant</Link></li>
								<li><Link to="/food">Food/Cuisine</Link></li>
							</ul>
							
						) :role === 'rider' ?
							<ul className="nav_list">
								<li><Link to="/">Delivery Requests</Link></li>
								<li><Link to="/orders">My orders</Link></li>
							</ul>
						: role === 'admin' ? (
							<ul className="nav_list">
								{/* <li><Link to="/add-restaurant">Add Restaurant</Link></li>
								<li><Link to="/add-food">Add Food</Link></li> */}
								<li><Link to="/food-data">Food Data</Link></li>
								<li><Link to="/restaurant-data">Restaurant Data</Link></li>
							</ul>
						) : null}
					</div>

					<div className="navbar_right">
						<ul className="nav_list">
							<li className="user_profile"><Link to="/user-profile"><FontAwesomeIcon icon={faUser} /></Link><span>{name}</span></li>
							<li onClick={() => userLogout()}><i><FontAwesomeIcon icon={faRightFromBracket} /></i></li>
						</ul>
					</div>
				</>
			): null}
		</div>
	)
}
export default Navigation