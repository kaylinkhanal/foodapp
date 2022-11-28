import React from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetCredentials } from '../../reducersSlice/userSlice';
import './nav.css'

function Nav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const triggerLogOut = () => {
        dispatch(resetCredentials());
        navigate('/')
    }

  return (
    <div className="nav">
            <div className="nav-left">
                <h2>Deliveree</h2>
            </div>
            <div className="nav-right">
                <ul>
                    <li>Home</li>
                    <li>Orders</li>
                    <li>Contact Us</li>
                </ul>
                {/* <button style={{backgroundColor: '#6482de', height: '80%'}}>sign out</button> */}
                <button style={{height: '80%'}} onClick={triggerLogOut}>sign out</button>
            </div>
        </div>
  )
}

export default Nav