import React from "react";
import { useState, useEffect } from "react";
import "../Styles/card.css";
import image from "../productImages/restaurant.jpeg";

const Cards = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/restaurants/");

    const data = await response.json();
    // console.log(data.resturantsList);
    setDetails(data.resturantsList);
  };
  console.log(details);

  return <Card details={details} name={"sjadkfha"} />;
};

const Card = ({ details, name }) => {
  console.log(name);
  return (
    <>
      <div className="container">
        {details.map((value) => {
          return (
            <div className="card">
              <div className="image">
                <img src={image} />
              </div>
              <div className="cardDetails">
                <h3 className="title">{value.name}</h3>
                <span className="category">Category:{value.category}</span>
                <h6 className="location">Address:{value.location}</h6>
                <p className="rating">Rating:{value.rating}</p>
              </div>
            </div>
          );
        })}
      </div> 
    </>
  );
};
export default Cards;
