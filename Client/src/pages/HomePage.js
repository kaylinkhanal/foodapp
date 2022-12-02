import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCredentials } from "../reducersSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import './styles/home.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [restaurantList, setResturantList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const fetchRestaurants = async () => {
    const response = await fetch("http://localhost:4000/restaurant/");
    const data = await response.json();
    setResturantList(data.restaurantsList);
  };

  const fetchFoods = () => {
    axios.get('http://localhost:4000/foods')
    .then(response => setFoodList(response.data.details))
  }

  console.log(foodList);

  useEffect(() => {
    fetchRestaurants();
    fetchFoods();
  }, []);

  const triggerLogout = () => {
    dispatch(resetCredentials());
    navigate("/");
  };

  return (
    <div>
      {/* <div>hi i am homepage</div> */}
      {restaurantList.length > 0 ? (
        <div className="foodapp-res-card-coll">
          {restaurantList.map((item, id) => {
            return (
              <>
                <div className="foodapp-res-card-item">
                  <div className="">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxDnWRNODj8srZmAnpGvF-rpzur_DD8UyixQwiy1wqxXfgUZrFp3MF5Xe7tX0UfX44WA&usqp=CAU" />
                  </div>
                  <Rating
                    initialValue={item.rating}
                    allowFraction={true}
                    readonly
                  />
                  <div>{item.name}</div>
                  <div>{item.category}</div>
                  <div>{item.location}</div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        "loading..."
      )}
      {
        foodList.length > 0 ? (
          <div>
            {foodList.map((food, index) => <div key={index}>
              <li>{food.foodType}</li>
              <li>{food.restaurant}</li>
              <li>{food.foodCategory}</li>
              <img src = {require(`../uploads/${food.foodImg}`)} height={100} width={100} />
            </div>)}
          </div>
        ) : (
          'loading.....'
        )
      }
      <button className="input-button" type="submit" onClick={triggerLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default HomePage;
