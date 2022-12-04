import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

const FoodList = () => {

    const { users } = useSelector( state => state );
  
    const [ foodsList, setFoodList ] = useState( [] )
    const fetchData = async() => {
      const response  = await fetch( 'http://localhost:4000/foods/' )
      const data      = await response.json()
      setFoodList( data.foodsList )
    }
  
    useEffect( () => {
      fetchData();
    }, [] )
  
    return (
      <>
        { foodsList.length > 0 ? (
          <div className='full_height'>
            <div className='foodapp-res-card-coll'>
            { foodsList.map( ( item, id ) => {
              return (
                <React.Fragment key={ id }>
                  <div className='foodapp-res-card-item'>
                    <div className=''><img src={require('../../uploads/' + item.foodImage)} alt="" /></div>
                    <div>Type: { item.foodType }</div>
                    <div>Category: { item.foodCategory }</div>
                    <div>Restaurant Name: { item.restaurant }</div>
                    <li>
                        <Link to={{pathname: '/restaurant-list', state: [{id: item._id}]}}>Edit</Link>
                    </li>
                  </div>
                </React.Fragment>
                )
            }) }
            </div>
          </div>
        ) : 'loading...' }
      </>
    )
  
  }
  
  export default FoodList