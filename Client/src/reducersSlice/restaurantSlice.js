import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
  },
  reducers: {
    updateRestaurants: (state, actions) => {
      state.restaurants = actions.payload;
    },
  },
});

export const { updateRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
