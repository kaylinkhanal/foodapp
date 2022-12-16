import React, { useEffect, useState } from 'react'
import DeliveryOrders from "./components/deliveryOrders";
import "./css/rider.css";
import Pic from "../../images/delivery_girl.svg";
import Image from "../../images/map-path.png";
// import DeliveryFooter from "./components/deliveryFooter";

const DeliveryRequest = () => {

  return (
    <div className="delivery-main">
    {/* <Nav /> */}
    <div className="header">
      <div className="header-left">
        <img src={Pic} />
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
    <button className="view-all">
      View All
    </button>
    {/* <DeliveryFooter /> */}
  
    {/* <Footer/> */}
  </div>

  )

}

export default DeliveryRequest