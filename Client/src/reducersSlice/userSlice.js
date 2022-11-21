import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  phoneNumber: '',
  token: ''
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state,actions)=>{
        state.name        = actions.payload.name
        state.phoneNumber = actions.payload.phoneNumber
    },
    resetCredentials: ( state, actions ) => {
      state.name = ''
      state.phoneNumber = ''
      state.token = ''
    },
  }
});

export const { setCredentials, resetCredentials } = userSlice.actions;

export default userSlice.reducer;
