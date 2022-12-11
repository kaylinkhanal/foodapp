import React, {useState} from "react";
import '../../pages/Food/food.css'
import defaultImg from '../../images/meal.png'
import {useDispatch, useSelector} from  'react-redux';
import { setOrderList } from "../../reducerSlice/orderSlice";
import { message } from 'antd';
import 'antd/dist/antd.min.css';

const FoodList = (props)=>{
    const [searchItem, setSearchItem] = useState()
    const searchFood =(key)=>{
        console.log(key)
        const filterFood = props.foodList.filter((item)=>{
            return item
        })
        setSearchItem(filterFood)
    }

    const dispatch = useDispatch()

    const handleClick = (e, id) => {
        e.currentTarget.disabled = true;
        props.foodList[id].quantity = 1
        message.success('Added your order to cart')
    };
    
    return(
        <>
            <div className="food_list">
                <h3>Menu</h3>

                <div className="search">
                    <input type="search" placeholder="search food item" onKeyUp={(e)=> searchFood(e.target.value)}/>
                </div>

                {props.foodList.length > 0 ? props.foodList.map((item, id)=>{
                    const {foodName, restaurantName, foodPrice, foodType, foodImage} = item
                    return(
                        <div className="food_items" key={item._id}>
                            <div className="food_img">
                                <img src={foodImage ? require('../../uploads/' + item.foodImage) : defaultImg} alt="food"/>
                            </div>
                            <div className="food_info">
                                <h3 className="food_title">{foodName} {foodType ? `-${foodType}` : ''}</h3>
                                <span>{restaurantName},</span>
                                <span>{foodPrice}</span>
                                <button onClick={(e)=> {dispatch(setOrderList(item), handleClick(e, id))}}>+</button>
                            </div>
                        </div>
                    )
                }):'Foods not found'}
            </div>
        </>
    )
}
export default FoodList