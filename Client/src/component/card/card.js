import React from "react";
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
  
    return(
      <>
      <div className="restaurantCard">
        <div className="cardContent">
          <div className="restaurantImage">
            <img src="food.jpg"/>
          </div>
          <div className='boxContent'>
                {props.item.name}
                {props.item.location}
                <div className='cartIcon'>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
              </div>
                {props.item.restaurantCategory} 
            </div>
        </div>
       
      </div>
      </>
    )
  };
  
  export default Card;