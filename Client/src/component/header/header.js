import React from "react";
import Logo from '../../images/meal.png'
import './header.css'

const Header = ()=>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="header_wrap">
                        <div className="logo">
                            <img src={Logo} alt="Logo"></img>
                            <span style={{fontWeight: 700, fontSize: '20px', color: '#cf450e', letterSpacing: '2px', fontFamily: `'Poppins', sans-serif`}}>Fast Delivery</span>
                        </div>

                        <div className="right_nav">
                            <ul className="nav_list">
                                <li>logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header