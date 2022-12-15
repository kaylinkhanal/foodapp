import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCredentials } from "../../reducersSlice/userSlice";
import { setRestaurant } from "../../reducersSlice/restaurantSlice";
import { useNavigate, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
// import Link from "antd/lib/typography/Link";

const RestaurantList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [restaurantList, setResturantList] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/restaurant/");
    const data = await response.json();
    setResturantList(data.restaurantsList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const triggerLogout = () => {
    dispatch(resetCredentials());
    navigate("/");
  };

  return (
    <>
      {restaurantList.length > 0 ? (
        <div className="foodapp-res-card-coll">
          {restaurantList.map((item, id) => {
            return (
              <>
                  <div className="foodapp-res-card-item">
                <Link to={`/restaurant-list/${item._id}`} onClick={() => {
                  dispatch(setRestaurant(item))
                }}>
                    <div className="">
                    <img src={require('../../uploads/'+item.restroImage)} alt="32" width={250} height={400}/>
                    </div>
                    <Rating
                      initialValue={item.rating}
                      allowFraction={true}
                      readonly
                      />
                    <div>{item.name}</div>
                    <div>{item.category}</div>
                    <div>{item.location}</div>
                      </Link>
                  </div>
              </>
            );
          })}
        </div>
      ) : (
        "loading..."
      )}
      <button className="input-button" type="submit" onClick={triggerLogout}>
        LOGOUT
      </button>
    </>
  );
};

export default RestaurantList;