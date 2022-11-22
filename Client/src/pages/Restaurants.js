import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/restaurant.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// import {useState} from

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = () => {
    axios
      .get("http://localhost:4000/restaurants")
      .then((response) => setRestaurants(response.data.resturantsList));
  };

  console.log(restaurants);

  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <div className="page">
      <div className="info">
        <span>Find the best foods  </span>
      </div>
      <div className="restaurants">
        <div className="info"></div>
        {restaurants.map((restaurant, index) => (
          <div className="restaurant" key={index}>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <h3>{restaurant.name}</h3>
            <FontAwesomeIcon icon={faStar} style={{ color: "#ccae3b" }} /> {restaurant.rating}
            <h6>Location: {restaurant.location}</h6>
            <h6>Category: {restaurant.category}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
