import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    restaurantList: [],
}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurantList: (state, actions)=>{
            state.restaurantList.push(actions.payload)
        }
    }
})

export const {setRestaurantList} = restaurantSlice.actions;
export default restaurantSlice.reducer