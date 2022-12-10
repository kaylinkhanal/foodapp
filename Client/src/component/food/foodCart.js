import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const FoodCart = ()=>{
    return(
        <>
            <div id="cart">
                <h3>Your Order</h3>
                <div className="cart_content">
                    <div className="cart_info">
                        <h4>Restaurant Name: Pizzaa Hut</h4>
                        <div className="qty">
                            <span>+</span>
                            <span>1</span>
                            <span>-</span>
                        </div>
                        <div className="totalAmt">
                            <p>Subtotal:</p>
                            <p>Delivery Charge: </p>
                            <p>Total</p>
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodCart