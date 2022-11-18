import React from "react";
import Logo from '../../images/foodapp.png'

const Header = ()=>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="Logo"></img>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header