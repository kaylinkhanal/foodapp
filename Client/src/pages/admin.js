import React from 'react'
import { useSelector } from 'react-redux'
import Userimage from '../images/dummy.svg'
import {Link} from 'react-router-dom'

const Admin = ()=>{
    const { name } = useSelector(state => state.users)

    return(
        <>
            <div id='home_pg' className='full_height'>
                <div className='container'>
                    <div className='main_content'>
                    <div className='user_info'>
                        <img src={Userimage} alt='user'/>
                        <span> Hi {name}</span>
                    </div>

                    <div className='btn_grp'>
                        <ul className="home_items">
                            <li>
                                <Link to="/admin/restro">Add Restaurant</Link>
                            </li>
                            <li>
                                <Link to="/admin/food">Add Food</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin