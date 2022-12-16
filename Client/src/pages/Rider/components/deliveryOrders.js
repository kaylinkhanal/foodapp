import React, { useEffect, useState } from "react";
import "../css/deliveryOrder.css";
// import { message } from 'antd';
// import 'antd/dist/antd.min.css';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import { useSelector } from "react-redux";
import io from 'socket.io-client';
const socket = io("http://localhost:4000");

function DeliveryOrders() {
  const navigate = useNavigate();
  const riderLocation = useSelector((state) => state.users.address);
  const [orders, setOrders] = useState([]);
  const [liveOrders, setLiveOrders] = useState({})
  const [isClicked, setIsClicked] = useState(false);
  useEffect(()=>{
    socket.on('connection')
  },[])


  useEffect(()=>{
    socket.on('orders',orders=>{
      setLiveOrders(orders)
    })
  },[socket])
 

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();

    if (data) {
      setOrders(data.usersList);
    }
    // .then(response => console.log(response.data.usersList))
  };


  //   console.log(riderLocation);
  const filteredOrders = orders.filter((order) => {
    return order.address === riderLocation && order.role === "user";
  });

//   debugger;
  const handleReject = (id) => {
    const filteredList = filteredOrders.filter((item) => {
      return item._id !== id;
    });
    setOrders(filteredList);
    //   setIsClicked(!isClicked)
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const popUp = () => {
    confirmAlert({
      title: "Confirm to Accept Request",
      message: "Are you sure you want to confirm?",
      buttons: [
        {
          label: "Yes",
          onClick: () => navigate("/delivery-request/orderDetails"),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

  return (
    <div id="orders">
      <div className="order-header">
        <h2>your location is: {riderLocation}</h2>
        <h2>Orders currently available to pick around {riderLocation}</h2>
      </div>
      <div className="orders">
        {filteredOrders.map((order, index) => (
          <div className="order-card" key={index}>
            <div>
              <h3>{order.name}</h3>
              {/* <h4>ORDER {order.order_id}</h4> */}
              <>Order Details:</>
              <h5>Location: {order.address}</h5>
              {order.email === liveOrders?.userDetails?.email ? (
                liveOrders.foods.map((item)=> {
                  return (<h1>{item.FoodName}</h1>)
                })
              ): null}
              {/* <h5>Size: {order.details.foodSize}</h5> */}
            </div>
            <div className="order-confirmation">
              <p>Do you want to confirm the Order?</p>
              <button style={{ backgroundColor: "#47cc7a" }} onClick={popUp}>
                Confirm
              </button>
              <button
                onClick={() => {
                //   debugger;
                  handleReject(order._id);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  );
}

export default DeliveryOrders;
