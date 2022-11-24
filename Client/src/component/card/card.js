import React, { useState } from "react";
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FoodImage from '../../productImages/food.jpg'

const Card = (props) => {
  const[starColor, setStarColor]= useState('#5A5A5A')
  
    return(
      <>
      <div className="restaurantCard">
        <div className="cardContent">
          <div className="restaurantImage">
            <img src={FoodImage}/>
            <div className='boxContent'>
                {props.item.name} <br/>
                {props.item.location} <br/>
                {props.item.restaurantCategory} 
                <div className='cardIcon'>
                  <FontAwesomeIcon icon={faStar} onClick={()=>setStarColor('#FFFF00')} style={{color:starColor}}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
      </>
    )
  };
  
  export default Card;