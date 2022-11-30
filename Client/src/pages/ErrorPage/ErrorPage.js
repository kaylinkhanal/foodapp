import React from "react";
import './error.css'
import { Link } from "react-router-dom"
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
						<Link to="/" className="back">Back to <i><FontAwesomeIcon icon={faHome} style={{ color: `#062b50` }} /></i></Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default ErrorPage