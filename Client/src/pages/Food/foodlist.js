import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice"
import { useNavigate } from "react-router-dom"
import './food.css'

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
          <div className='card_list'>
           { foodList.map( ( item, id ) => {
            return (
              <>
                <div className='food_card'>
                  <div className='card_img'><img src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" /></div>
                  <div className='card_info'>
                    <div>{ item.foodType }</div>
                    <div>{ item.restaurant }</div>
                    <div>{ item.foodCategory }</div>
                  </div>                  
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