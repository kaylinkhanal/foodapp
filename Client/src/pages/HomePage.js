import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"
import { Rating } from 'react-simple-star-rating'

const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ restaurantList, setResturantList ] = useState( [] )
  const fetchData = async() => {
    const response  = await fetch( 'http://localhost:4000/restaurants/' )
    const data      = await response.json()
    setResturantList( data.restaurantsList )
  }

  useEffect( () => {
    fetchData();
  }, [] )
  const restaurantLink=()=>{
    navigate('/restaurant-list')
  }

  const triggerLogout = () => {
    dispatch( resetCredentials() )
    navigate('/')
  }

  return (
    <>
      <div>hi i am homepage</div>
      { restaurantList.length > 0 ? (
        <div className='foodapp-res-card-coll'>
         { restaurantList.map( ( item, id ) => {
          return (
            <>
              <div className='foodapp-res-card-item' onClick={ restaurantLink }>
                <div className=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxDnWRNODj8srZmAnpGvF-rpzur_DD8UyixQwiy1wqxXfgUZrFp3MF5Xe7tX0UfX44WA&usqp=CAU" /></div>
                <Rating initialValue={ item.rating } allowFraction={ true } readonly />
                <div>{ item.name }</div>
                <div>{ item.category }</div>
                <div>{ item.location }</div>
              </div>
            </>
            )
        }) }
        </div>
      ) : 'loading...' }
      <button className="input-button" type="submit" onClick={ triggerLogout }>LOGOUT</button>
    </>
  )

}

export default HomePage