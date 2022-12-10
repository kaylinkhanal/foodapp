import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { setOrderList, deleteItem } from "../../reducerSlice/orderSlice";
import { message } from 'antd';
import 'antd/dist/antd.min.css';

const FoodCart = ()=>{
    const {orderList} = useSelector(state=> state.orders)
    let [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const removeItem = (item)=>{
        dispatch(deleteItem(item))
    }

    const increament = (item)=>{
        
    }

    const decreament = ()=>{
        
    }
    return(
        <>
            <div id="cart">
                <h3>Your Order</h3>
                <div className="cart_content">
                    <div className="cart_info">
                        <div className="order_list">
                            {orderList.length > 0 ? orderList.map((item,id)=>{
                                return(
                                    <div className="order_card" key={id}>
                                        <h3>{item.foodName}</h3>
                                        <span style={{float: 'right'}}><strong>{item.foodPrice * count}</strong></span>
                                        <div className="qty">
                                            <span onClick={()=> setCount(count > 0 ? count - 1:0)}>-</span>
                                            <span>{count}</span>
                                            <span onClick={()=> setCount(count + 1)}>+</span>
                                        </div>
                                        
                                        <button className="cancel" onClick={()=> removeItem(item)}><FontAwesomeIcon icon={faClose}/></button>
                                    </div>
                                )
                            }): <h4>Your order card is empty</h4>}
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