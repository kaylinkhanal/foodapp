import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: '',
  phoneNumber: '',
  token: '',
  role: 'user',
  address : ''
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state,actions)=>{
        state.email        = actions.payload.email
        state.phoneNumber = actions.payload.phoneNumber
        state.token = actions.payload.token
        state.role = actions.payload.role
        state.address = actions.payload.address
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
