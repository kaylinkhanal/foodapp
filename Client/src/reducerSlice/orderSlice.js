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
    }
})

export const {setOrderList, deleteItem} = orderSlice.actions;
export default orderSlice.reducer