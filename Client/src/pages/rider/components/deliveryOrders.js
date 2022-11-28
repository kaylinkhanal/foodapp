import React, { useState } from "react";
import '../css/deliveryOrder.css'
// import { message } from 'antd';
// import 'antd/dist/antd.min.css';

function DeliveryOrders() {
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
  return (
    <div>
      <div className="order-header">
        <h2>Orders currently available to pick</h2>
      </div>
      <div className="orders">
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div>

            <h3>{order.name}</h3>
            <h4>ORDER {order.order_id}</h4>
            <>Order Details:</>
            <h5>Foods: {order.details.foodName}</h5>
            <h5>Size: {order.details.foodSize}</h5>
            </div>
            <div className="order-confirmation">
              <p>Do you want to confirm the Order?</p>
            {/* <CheckOutlined /> */}
            <button style={{backgroundColor: '#47cc7a'}}>Confirm</button>
            <button>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryOrders;
