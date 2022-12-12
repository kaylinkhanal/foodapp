import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./reducersSlice/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import restaurantSlice from "./reducersSlice/restaurantSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  users: userSlice,
  restaurant: restaurantSlice,
});

const persistedReducer = persistReducer( persistConfig, reducer )

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;

export const persistor = persistStore(store)