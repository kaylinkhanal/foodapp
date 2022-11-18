import React from 'react'
import Header from '../component/header/header'

const Home = ()=>{
    return(
        <>
            <Header />
            <div className='home_pg'>
                <div className='container'>
                    <div className='main_content'>
                        <h1>Welcome to Food Delivery App</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home