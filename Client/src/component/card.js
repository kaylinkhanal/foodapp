import React from "react";
import { useState, useEffect } from "react";
import "../Styles/card.css";


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

  return (
    <>
      <div className="container">
        {details.map((value) =>{
          return (
            <div className="card">
              <div className="image">
                <img src={'https://th.bing.com/th/id/R.bebb945ef2220a2e662181a370742d2a?rik=7IiQ45EhmlJdMg&riu=http%3a%2f%2fwww.womenfitness.net%2fwp%2fwp-content%2fuploads%2f2016%2f10%2ffast-food.jpg&ehk=LA%2btHmITsgObZKS4M%2bNZGBUv64%2fPuIG8WjalEFfzw9U%3d&risl=&pid=ImgRaw&r=0'} />
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