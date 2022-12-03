import React from "react";

const FoodCart = ()=>{
    return(
        <>
            <div id="cart">
                <h3>Your Order</h3>
                <div className="cart_content">
                    <h3>Restaurant Name:</h3>
                    <div className="cart_items">
                        <div>sdfk</div>
                        <div className="qty"></div>
                        <p>34</p>
                    </div>

                    <div className="totalAmt">
                        <p>Subtotal:</p>
                        <p>Delivery Charge: </p>
                        <p>Total</p>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}
export default FoodCart