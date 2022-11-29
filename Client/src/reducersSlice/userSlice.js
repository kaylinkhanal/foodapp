import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: '',
  phoneNumber: '',
  token: '',
  role: 'user'
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
    },
    resetCredentials: ( state, actions ) => {
      state.email = ''
      state.phoneNumber = ''
      state.token = ''
      state.role = ''
    },
  }
});

export const { setCredentials, resetCredentials } = userSlice.actions;

export default userSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    name: '',
    phoneNumber: '',
    token: '',
    role: '',
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCredentials: (state, actions)=>{
            state.name = actions.payload.name
            state.phoneNumber = actions.payload.phoneNumber
            state.token = actions.payload.token
            state.role = actions.payload.role
        }
    }
})
