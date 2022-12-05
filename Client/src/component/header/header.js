import React from "react"
import Logo from '../../images/meal.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { resetCredentials } from "../../reducersSlice/userSlice"

const Header = () => {
    const { token } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const triggerLogout = () => {
        dispatch( resetCredentials() )
        navigate('/')
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="header_wrap">
                        <div className="logo">
                            <img src={Logo} alt="Logo"></img>
                            <span style={{ fontWeight: 700, fontSize: '20px', color: '#cf450e', letterSpacing: '2px', fontFamily: `'Poppins', sans-serif` }}>Fast Delivery</span>
                        </div>

                        <div className="right_nav" >
                            <ul className="nav_list" style={{ display: token ? "block" : "none" }}>
                                <li><i><FontAwesomeIcon icon={faRightToBracket} /></i></li>
                                <li><i><FontAwesomeIcon icon={faUserPlus} /></i></li>
                                <li onClick={()=>triggerLogout() }><i><FontAwesomeIcon icon={faRightFromBracket}/></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header