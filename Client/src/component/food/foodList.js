import React, {useState} from "react";
import '../../pages/Food/food.css'
import defaultImg from '../../images/meal.png'

const FoodList = (props)=>{
    // const [searchItem, setSearchItem] = useState()
    // const searchFood =(key)=>{
    //     const filterFood = props.foodList.filter((item)=>{
    //         return item
    //     })
    //     setSearchItem(key)
    // }
    
    return(
        <>
            <div className="food_list">
                <h3>Menu</h3>

                <div className="search">
                    <input type="search" placeholder="search food item" onKeyUp={(e)=> null}/>
                </div>

                {props.foodList.length > 0 ? props.foodList.map((item)=>{
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
                                <button>+</button>
                            </div>
                        </div>
                    )
                }):'Foods not found'}
            </div>
        </>
    )
}
export default FoodList