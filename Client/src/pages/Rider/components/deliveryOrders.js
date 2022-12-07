import React, { useEffect, useState } from "react";
import '../css/deliveryOrder.css'
// import { message } from 'antd';
// import 'antd/dist/antd.min.css';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from "axios";
import { useSelector } from "react-redux";

function DeliveryOrders() {
  const navigate = useNavigate();
  const riderLocation = useSelector(state => state.users.address)
  const [orders, setOrders] = useState([
    {
      name: "Matt",
      order_id: "ECD6C",
      details: {
        foodName: "chicken parma",
        foodSize: "regular",
        instructions: "YOLO"
      },
    },
    {
      name: "Megan",
      order_id: "ECD6C",
      details: {
        foodName: "chicken parma",
        foodSize: "regular",
        instructions: "YOLO"
      },
    },
    {
      name: "Harry",
      order_id: "ECD6C",
      details: {
        foodName: "chicken parma",
        foodSize: "regular",
        instructions: "YOLO"
      },
    },
  ]);

  const filteredOrders = orders.filter(order => {
    return (order.address === riderLocation && order.role === 'user');
  })

  const fetchUsers = () => {
    axios.get('http://localhost:4000/users')
    .then(response => setOrders(response.data.usersList))
    .then(setOrders(filteredOrders))
  }


  useEffect(() => {
    fetchUsers();
  }, [orders])
  console.log(orders);
  console.log(riderLocation);

  const popUp = () => {
    confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure you want to confirm?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => navigate('/delivery-request/orderDetails')
      },
      {
        label: 'No',
        onClick: () => null
      }
    ]
  });
}

const handleReject = (id) => {
  const filteredList = filteredOrders.filter(item => {
    return item._id !== id;
  })
  setOrders(filteredList);
}
  return (
    <div id="orders">
      <div className="order-header">
        
        <h2>your location is: {riderLocation}</h2>
        <h2>Orders currently available to pick around {riderLocation}</h2>
      </div>
      <div className="orders">
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div>
            <h3>{order.name}</h3>
            {/* <h4>ORDER {order.order_id}</h4> */}
            <>Order Details:</>
            <h5>Location: {order.address}</h5>
            {/* <h5>Size: {order.details.foodSize}</h5> */}
            </div>
            <div className="order-confirmation">
              <p>Do you want to confirm the Order?</p>
            <button style={{backgroundColor: '#47cc7a'}} onClick={popUp}>Confirm</button>
            <button onClick={()=>handleReject()}>Reject</button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryOrders;