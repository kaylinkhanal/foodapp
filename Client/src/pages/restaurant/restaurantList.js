import React from 'react'
import CardImage from '../../images/card_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faLocationDot, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating';

const RestaurantList = (props)=>{
    return(
        <div className='card_list'>
            {props.restaurants.length > 0 ? props.restaurants.map((item, id)=>{
                return(
                    <>
                    <li key={id}>{item.name}</li>
                    <li key={id}>{item.location}</li>
                    </>
                    )
            }): 'loading'}
        </div>
    )
}
export default RestaurantList