import Logo from '../../images/meal.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice";
import React from "react";




const Header = ()=>{
   const {token} = useSelector(state=> state.users)
   const dispatch = useDispatch();
   const logout =()=>{
        dispatch( resetCredentials() )
    }


    return(
        <>
            <header>
                <div className="container">
                    <div className="header_wrap">
                        <div className="logo">
                            <img src={Logo} alt="Logo"></img>
                            <span>Fast Delivery</span>
                        </div>
                        <div className="right_nav">
                                <ul className="nav_list">
                                    <li><i><FontAwesomeIcon icon={faUserPlus}/></i></li>
                                    <li onClick={logout}><i><FontAwesomeIcon icon={faRightToBracket}/></i></li>
                                </ul>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header