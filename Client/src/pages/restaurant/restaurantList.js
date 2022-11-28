import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'

const RestaurantList = () => {

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
  
    return (
      <>
        { users.email }
        { restaurantList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { restaurantList.map( ( item, id ) => {
            return (
              <React.Fragment key={ id }>
                <div className='foodapp-res-card-item'>
                  <div className=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxDnWRNODj8srZmAnpGvF-rpzur_DD8UyixQwiy1wqxXfgUZrFp3MF5Xe7tX0UfX44WA&usqp=CAU" alt="" /></div>
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
      </>
    )
  
  }
  
  export default RestaurantList