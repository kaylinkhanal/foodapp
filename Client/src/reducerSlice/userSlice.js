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

export const {setCredentials} = userSlice.actions;
export default userSlice.reducer