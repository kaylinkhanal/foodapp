import React from "react";
import OrderListTab from "./orderListTab";

const MyOrders = () => {
    
    return (
        <>
            <div id="rider" className="top_section">
                <div className="container">
                    <div className="order">
                        <div className="order_block">
                            <h2 className='pg_title' style={{color: '#fff'}}>My Orders</h2>
                                
                            <OrderListTab/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyOrders