import React from "react";
import './error.css'
import { Link } from "react-router-dom"
import donut from '../../images/donut.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const ErrorPage = () => {
	return (
		<>
			<section id="error_section">
				<div className="container">
					<div className="error_content">
						{/* <img src={donut}></img> */}
						<h1>404</h1>
						<h3>Oppsss! page not found</h3>
						<Link to="/home" className="back">Back to <FontAwesomeIcon icon={faHome} style={{ color: `#CF450E` }} /></Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default ErrorPage