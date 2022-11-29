import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import userSlice from "./reducersSlice/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import restaurantSlice from "./reducersSlice/restaurantSlice";

const persistConfig = {
  key: 'root',
  storage,
}


const reducer = combineReducers({
  users: userSlice,
  restaurants: restaurantSlice
  
});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store)