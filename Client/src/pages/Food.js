import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFoods } from "../reducersSlice/foodSlice";
import "../css/food.css";
import { Link } from "react-router-dom";

function Food() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.foods);

  const fetchFoods = () => {
    axios
      .get("http://localhost:4000/food")
      .then((response) => dispatch(updateFoods(response.data.foodDetails)))
      .then(console.log(foods));
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  console.log(foods);

  return (
    <div className="page">
      <div className="header">
        <div>
          <span>Find the best foods</span>
        </div>
        
          <Link
            to="/restaurants"
            style={{ textDecoration: "none", color: "black" }}
          >
            Back to Restaurants
          </Link>
        
      </div>
      {/* <div className="header">
        <p>alksjalsdkj</p>
        <p>alksjalsdkj</p>
      </div> */}
      <div className="foods">
        {/* <div className="info"></div> */}
        {foods.map((food, index) => (
          <div className="food" key={index}>
            {/* <div> */}
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            {/* </div> */}
            <div>
              <h3>{food.name}</h3>
              {/* <FontAwesomeIcon icon={faStar} style={{ color: "#ccae3b" }} /> {food.rating} */}
              {/* <Rating name="half-rating-read" defaultValue={food.rating} precision={0.5} readOnly /> */}
              <h6>description: {food.description}</h6>
              <h6>price: {food.price}</h6>
            </div>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
