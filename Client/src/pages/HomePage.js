import React, { useState,useEffect } from 'react'
import image from "../productImages/pizza.jpg";

const HomePage = () => {
  const [restaurantLists,setRestaurantLists]=useState([])
  useEffect(()=>{
    fetchData();
  },[]);
//creating fetchData function to fetch data from server and saving them in a state.
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/restaurants/");
    //creating a variable to contain the response in json format
    const data = await response.json();
     //console.log(data.resturantsList);
    setRestaurantLists(data.resturantsList);
  };
  return (
    <div>
      {restaurantLists.map((item) => {
          return (
            <div className="card">
              <div className="image">
                <img src={image} />
              </div>
              <div className="cardDetails">
                <h3 className="title">{item.name}</h3>
                <span className="category">Category:{item.category}</span>
                <h6 className="location">Address:{item.location}</h6>
                <p className="rating">Rating:{item.rating}</p>
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default HomePage