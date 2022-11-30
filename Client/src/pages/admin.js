import React from 'react'
import Header from '../component/header/header'
// import { Tabs } from 'antd';
// import AddRestro from './AddRestro';
// import AddFood from './AddFood';
import { useSelector } from 'react-redux'
import Userimage from '../images/dummy.svg'
import {Link} from 'react-router-dom'

const Admin = () => {
    const { name } = useSelector(state => state.users)
    // const items = [
    //     { label: 'Restaurant', key: 'item-1', children: <AddRestro/> }, // remember to pass the key prop
    //     { label: 'Food', key: 'item-2', children: <AddFood/> },
    // ];

    return(
        <>
            {/* <Header /> */}
            <div id='home_pg' className='full_height'>
                <div className='container'>
                    <div className='main_content'>
                    <div className='user_info'>
                        <img src={Userimage} alt='user'/>
                        <span> Hi {name}</span>
                    </div>

                    {/* <Tabs items={items} /> */}
                    <div className='btn_grp'>
                        <ul className="home_items">
                            <li>
                                <Link to="/admin/restaurant">Add Restaurant</Link>
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