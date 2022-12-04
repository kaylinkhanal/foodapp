import React from "react";
import './error.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
const ErrorPage = () => {
const { name } = useSelector(state => state.users)

	return (
		<>
			<section id="error_section">
				<div className="container">
					<div className="error_content">
						{name}
						{/* <img src={donut}></img> */}
						<h1>404</h1>
						<h3>Oppsss! page not found</h3>
						<Link to="/" className="back">Back to <FontAwesomeIcon icon={faHome} style={{ color: `#CF450E` }} /></Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default ErrorPage