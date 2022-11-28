import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faRightFromBracket, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setCredentials } from "../../reducerSlice/userSlice";

const Navigation = () => {
	const { token } = useSelector(state => state.users)
	const dispatch = useDispatch()

	const userLogout = () => {
		dispatch(setCredentials(''))
	}
	console.log(token)

	return (
		<div className="navbar">
			{token ?
				<>
					<div className="navbar_left">
						<ul className="nav_list">
							<li><Link to="/">Restaurant</Link></li>
							<li><Link to="/food">Food/Cuisine</Link></li>
						</ul>
					</div>

					<div className="navbar_right">
						<ul className="nav_list">
							<li className="user_profile"><Link to="/user-profile"><FontAwesomeIcon icon={faUser} /></Link></li>
							<li onClick={() => userLogout()}><i><FontAwesomeIcon icon={faRightFromBracket} /></i></li>
						</ul>
					</div>
				</> : null
				// <div className="navbar_right">
				// 	<ul className="nav_list">
				// 		<li>
				// 			<Link to="/register"><FontAwesomeIcon icon={faUserPlus} /></Link>
				// 		</li>
				// 		{/* <li>
				// 			<Link to="/"><FontAwesomeIcon icon={faRightToBracket} /></Link>
				// 		</li> */}
				// 	</ul>
				// </div>
			}
		</div>
	)
}
export default Navigation