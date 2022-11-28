import React from "react";
import Image from "../../images/order.svg";
import Pic from '../../images/deliverypng.png'
import Nav from '../../component/nav/Nav'
import "./css/rider.css";
import DeliveryOrders from "./components/deliveryOrders";
function DeliveryRequest() {
  return (
    <div className="delivery-main">
        <Nav />
      <div className="header">
        <div className="header-left">
          <img src={Pic}/>
          <h3>Others Deliver Parcels, We Deliver Emotions</h3>
          <span>
            Let's take care of order fulfillment, collection, transport,
            tracking
            <br />
            and delivery of food orders.
          </span>
          <button>Find orders</button>
        </div>
        <div className="img">
          <img src={Image} />
        </div>
        {/* <div>
          <h3>klasjdajdlaskdjlksjj</h3>
        </div> */}
      </div>
      <DeliveryOrders />
      <button style={{color: ''}} className="view-all">View All </button>
    </div>
  );
}

export default DeliveryRequest;
