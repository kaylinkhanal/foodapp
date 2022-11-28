import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: '',
  phoneNumber: '',
  token: ''
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state,actions)=>{
        state.email        = actions.payload.email
        state.phoneNumber = actions.payload.phoneNumber
        state.token = actions.payload.token
    },
    resetCredentials: ( state, actions ) => {
      state.email = ''
      state.phoneNumber = ''
      state.token = ''
    },
  }
});

export const { setCredentials, resetCredentials } = userSlice.actions;

export default userSlice.reducer;
