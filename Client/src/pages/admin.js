import React, { useEffect, useState } from "react";
import Header from "../component/header/header";
// import { Tabs } from 'antd';
// import AddRestro from './AddRestro';
//import AddFood from './AddFood';
import { useSelector } from "react-redux";
import Userimage from "../images/dummy.svg";
import { Link } from "react-router-dom";
import FoodList from "./Food/foodlist";
import RestaurantList from "./restaurant/restaurantList";

const Admin = () => {
  const { name } = useSelector((state) => state.users);
  // const items = [
  //     { label: 'Restaurant', key: 'item-1', children: <AddRestro/> }, // remember to pass the key prop
  //     { label: 'Food', key: 'item-2', children: <AddFood/> },
  // ];

  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);

  //console.log(restaurants)

  const fetchList = async () => {
    const response = await fetch("http://localhost:4000/restaurant");
    const data = await response.json();
    if (data) {
      setRestaurants(data.restaurantList);
    }
  };

  const fetchFood = async () => {
    const response = await fetch("http://localhost:4000/admin/foods");
    const data = await response.json();
    if (data) {
      setFoods(data.details);
    }
  };

  useEffect(() => {
    fetchList();
    fetchFood();
  }, []);

  return (
    <>
      <Header />
      <div id="home_pg" className="full_height">
        <div className="container">
          <div className="main_content">
            <div className="user_info">
              <img src={Userimage} alt="user" />
              <span> Hi {name}</span>
            </div>

            {/* <Tabs items={items} /> */}
            <div className="btn_grp">
              <ul className="home_items">
                <li>
                  <Link to="/admin/restaurant">Add Restaurant</Link>
                </li>
                <li>
                  <Link to="/admin/foods">Add Food</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h2 className="section_title">All Foods</h2>
          <FoodList foods={foods} />
        </div>
        <div className="container">
          <h2 className="section_title">All Restaurants</h2>
          <RestaurantList restaurants={restaurants} />
        </div>
      </div>
    </>
  );
};
export default Admin;
