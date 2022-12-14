import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RestaurantDetails () {
  const { restaurant } = useSelector((state) => state.restaurant);
  const [foods, setFoods] = useState([]);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const fetchFoods = async () => {
    const response = await fetch(`http://localhost:4000/foods/${id}`);
    const data = await response.json();
    setFoods(data.foods)

  }

  console.log(foods);

  useEffect(() => {
    fetchFoods()
  }, [])
  

  return (
    <div className="section_bg">
      <div className="foodapp-res-card-item">
        <h4>RestaurantDetails:</h4>
        <h4>{restaurant.name}</h4>
        <h4>Location: {restaurant.location}</h4>
        <h4>Rating: {restaurant.rating}</h4>
        <h4>Category: {restaurant.category}</h4>
      </div>

      <div className="foods">
        {foods?.map((food, index) => 
            <div key={food._id} className="food">
                <div>

                {/* <img src={require(`../../uploads/${food.foodImage}`)}/> */}
                <h4>foodType: {food.foodType}</h4>
                <h4>foodCategory: {food.foodCategory}</h4>
                <h4>Price: 350</h4>
                </div>
                <div className="buttons">
                    <button onClick={() =>setCount(count - 1)}>-</button>
                    {count}
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        )}
      </div>

    </div>
  );
}

export default RestaurantDetails;
