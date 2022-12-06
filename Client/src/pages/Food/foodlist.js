import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"

const FoodList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const [ foodList, setFoodList ] = useState( [] )
    const fetchData = async() => {
      const response  = await fetch( 'http://localhost:4000/food/' )
      const data      = await response.json()
      setFoodList( data.foodsList )
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
        { foodList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { foodList.map( ( item, id ) => {
            return (
              <>
                <div className='food-card'>
                  <div className=''><img src={require(`../../uploads/${item.foodImg}`)} /></div>
                  <div>{ item.foodType }</div>
                  <div>{ item.restaurant }</div>
                  <div>{ item.foodCategory }</div>
                </div>
              </>
              )
          }) }
          </div>
        ) : 'loading...' }
      </>
    )
  
  }
  
  export default FoodList