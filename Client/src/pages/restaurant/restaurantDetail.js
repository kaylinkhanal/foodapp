import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardImage from '../../images/card_img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faLocationDot, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating';
import Food from "../Food/food"

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState([])
    const [foods, setFoods] = useState([])
    const params = useParams();
    const { id } = params;

    console.log(foods)

    // fetch restaurant by id
    const fetchList = async () => {
        const response = await fetch(`http://localhost:4000/restaurant/${id}`)
        const data = await response.json()
        
        if (data) {
            setRestaurant(data)
        } else {
            setRestaurant({ message: 'not found' })
        }
    }

    // fetch food List
    const fetchRestroFood = async()=>{
        const response = await fetch('http://localhost:4000/food')
        const data = await response.json()
        if(data){
            console.log(data)
            setFoods(data.foodList)
        }else{
            console.log('food not found')
        }
    }

    useEffect(() => {
        fetchList()
        fetchRestroFood()
    }, [id])

    const filterFood = foods.filter((food, id)=>{
        return restaurant.name === food.restaurantName
    })

    console.log(filterFood)
    
    return (
        <div id="detail">
            <div className="restro_detail">
                <div className="restro_img">
                    <img src={CardImage} alt="" />
                </div>

                <div className="restro_info">
                    <h1>{restaurant.name}</h1>
                    <p className='location'><i><FontAwesomeIcon icon={faLocationDot} /></i>{restaurant.location}</p>
                    <p className='category'><i><FontAwesomeIcon icon={faBowlRice} /></i>{restaurant.category}</p>
                    <p className='rating'>
                        <i><FontAwesomeIcon icon={faFontAwesome} /></i>
                        <Rating name="size-small read-only" value={restaurant.rating} defaultValue={2} precision={0.5} readOnly />
                    </p>
                </div>
            </div>

            <div className="related_food">
                <Food filterFood={filterFood}/>
            </div>
        </div>
    )
}
export default RestaurantDetail