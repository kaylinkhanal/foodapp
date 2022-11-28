import React, { useState, useEffect } from "react";
import Logo from '../../images/meal.png'
import './header.css'
import Navigation from "./navigation";
import {Link} from 'react-router-dom'

const Header = () => {
	const [headerColor, setHeaderColor] = useState('')

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setHeaderColor("rgba(255,132,101,.9)") : setHeaderColor("transparent")
	}
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent)
	})

	return (
		<>
			<header style={{ backgroundColor: headerColor }}>
				<div className="container">
					<div className="header_wrap">
						<div className="logo">
							<Link to="/">
								<img src={Logo} alt="Logo"></img>
								<span style={{ fontWeight: 700, fontSize: '20px', color: '#cf450e', letterSpacing: '2px', fontFamily: `'Poppins', sans-serif` }}>Fast Delivery</span>
							</Link>
						</div>

						<Navigation />
					</div>
				</div>
			</header>
		</>
	)
}
export default Header