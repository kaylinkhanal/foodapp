import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"


const FoodList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const [ foodList, setFoodList ] = useState( [] )
    const fetchData = async() => {
      const response  = await fetch( 'http://localhost:4000/foods/' )
      const data      = await response.json()
      setFoodList( data.foodList )
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
      {console.log(foodList)}
        { foodList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { foodList.map( ( item, id ) => {
            return (
              <>
                <div className='food-card'>
                  <div><img src={require('../../uploads/'+item.foodImage)}/></div>
                  <div>{ item.foodType }</div>
                  <div>{ item.restaurant }</div>
                  <div>{ item.foodCategory }</div>
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
  
  export default FoodList