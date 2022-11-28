import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "foods",
  initialState: {
    foods: [],
  },
  reducers: {
    updateFoods: (state, actions) => {
      state.foods = actions.payload;
    },
  },
});

export const { updateFoods } = foodSlice.actions;
export default foodSlice.reducer;
