import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';
import 'antd/dist/antd.min.css';

export const initialState = {
    orderList: [],
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrderList: (state, actions)=>{
            // console.log(actions.payload)
            state.orderList.push(actions.payload)
        },

        // DELETE PRODUCTS FROM CART
		deleteItem: (state, action)=>{
			const newOrderList = state.orderList.filter((item)=>{
				return item._id !== action.payload._id
			})

			message.error(`Deleted ${action.payload.foodName} from your order`)

			state.orderList = newOrderList
		},

        // add food quantity
        increaseQuantity: (state,actions)=>{
            console.log(actions.payload)
            const index = state.orderList.findIndex(item => item._id === actions.payload._id)
            state.orderList[index].quantity += 1
        },

        decreaseQuantity: (state,actions)=>{
            const index = state.orderList.findIndex(item => item._id === actions.payload._id)
            if(state.orderList[index].quantity > 1){
				state.orderList[index].quantity -= 1
			}
        }
    }
})

export const {setOrderList, deleteItem, increaseQuantity, decreaseQuantity} = orderSlice.actions;
export default orderSlice.reducer