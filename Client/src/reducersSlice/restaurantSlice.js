import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  restaurant : [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, actions) => {
      state.restaurant = actions.payload
    },
    resetRestaurant: (state, actions) => {
        state.restaurant = []
    },
  },
});

export const { setRestaurant, resetRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
