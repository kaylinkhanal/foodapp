import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { setOrderList, deleteItem, decreaseQuantity, increaseQuantity } from "../../reducerSlice/orderSlice";
import { message } from 'antd';
import 'antd/dist/antd.min.css';

const FoodCart = ()=>{
    const {orderList} = useSelector(state=> state.orders)
    const dispatch = useDispatch()

    const removeItem = (item)=>{
        dispatch(deleteItem(item))
    }

    const increament = (foodItem)=>{
        dispatch(increaseQuantity(foodItem))
    }

    const decreament = (foodItem)=>{
        dispatch(decreaseQuantity(foodItem))
    }

    const subTotal = orderList.reduce((total, orderedItem)=>{
        console.log(orderedItem.foodPrice)
        return total + orderedItem.foodPrice * orderedItem.quantity
    },0)

    const deliveryCharge = 110

    return(
        <>
            <div id="cart">
                <h3>Your Order</h3>
                <div className="cart_content">
                    <div className="cart_info">
                        <div className="order_list">
                            {orderList.length > 0 ? orderList.map((item, id)=>{
                                const {foodPrice, foodName, quantity} = item;
                                return(
                                    <div className="order_card" key={id}>
                                        <h3>{foodName}</h3>
                                        <span style={{float: 'right'}}><strong>{foodPrice * quantity}</strong></span>
                                        <div className="qty">
                                            <span onClick={(e)=> decreament(item)}>-</span>
                                            <span>{quantity}</span>
                                            <span onClick={(e)=> increament(item)}>+</span>
                                        </div>
                                        
                                        <button className="cancel" onClick={()=> removeItem(item)}><FontAwesomeIcon icon={faClose}/></button>
                                    </div>
                                )
                            }): <h4>Your order card is empty</h4>}
                        </div>
                        
                        <div className="totalAmt">
                            <p>Subtotal: {subTotal}</p>
                            <p>Delivery Charge: {deliveryCharge}</p>
                            <p>Total: {subTotal - deliveryCharge}</p>
                        </div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodCart