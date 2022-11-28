import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"
import { Rating } from 'react-simple-star-rating'

const RestaurantList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { users } = useSelector( state => state );
  
    const [ restaurantList, setResturantList ] = useState( [] )
    const fetchData = async() => {
      const response  = await fetch( 'http://localhost:4000/restaurant/' )
      const data      = await response.json()
      setResturantList( data.restaurantsList )
    }
  
    useEffect( () => {
      fetchData();
    }, [] )
  
    const triggerLogout = () => {
      dispatch( resetCredentials() )
      navigate('/')
    }
  
    return (
      <>
        {/* { users.email } */}
        { restaurantList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { restaurantList.map( ( item, id ) => {
            return (
              <React.Fragment key={ id }>
                <div className='foodapp-res-card-item'>
                  <div className=''><img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY=" alt="" /></div>
                  <Rating initialValue={ item.rating } allowFraction={ true } readonly />
                  <div>{ item.name }</div>
                  <div>{ item.category }</div>
                  <div>{ item.location }</div>
                </div>
              </React.Fragment>
              )
          }) }
          </div>
        ) : 'loading...' }
        <button className="input-button" type="submit" onClick={ triggerLogout }>LOGOUT</button>
      </>
    )
  
  }
  
  export default RestaurantList