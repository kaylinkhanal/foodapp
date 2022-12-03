import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardImage from '../../images/card_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faLocationDot, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating';

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState([])
    const params = useParams();
    const { _id } = params;

    console.log(restaurant.name)
    console.log(restaurant)

    const fetchList = async () => {
        const response = await fetch(`http://localhost:4000/restaurant/${_id}`)
        const data = await response.json()
        if (data) {
            setRestaurant(data.details)
        } else {
            setRestaurant({ message: 'not found' })
        }
    }

    useEffect(() => {
        fetchList()
    }, [_id])

    return (
        <div id="detail">
            <div className="container">
                <div className="restro_detail">
                    <div className="restro_img">
                        <img src={CardImage} alt="" />
                    </div>

                    <div className="restro_info">{_id}
                        <h1>{restaurant.name}</h1>
                        <p className='location'><i><FontAwesomeIcon icon={faLocationDot} /></i>{restaurant.location}</p>
                        <p className='category'><i><FontAwesomeIcon icon={faBowlRice} /></i>{restaurant.category}</p>
                        <p className='rating'>
                            <i><FontAwesomeIcon icon={faFontAwesome} /></i>
                            <Rating name="size-small read-only" value={restaurant.rating} defaultValue={2} precision={0.5} readOnly />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RestaurantDetail