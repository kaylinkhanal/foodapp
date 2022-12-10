import React from 'react'
import { useSelector } from 'react-redux'
import Userimage from '../../images/dummy.svg'
import {Link} from 'react-router-dom'

const Dashboard = ()=>{
    const { name } = useSelector(state => state.users)

    return(
        <>
            <div id='admin' className='full_height'>
                <div className='container'>
                    <div className='main_content'>
                    <div className='user_info'>
                        <img src={Userimage} alt='user'/>
                        <span> Hi, {name}</span>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard