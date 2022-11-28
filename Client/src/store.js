import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import restaurantSlice from "./reducersSlice/restaurantSlice";
import userSlice from "./reducersSlice/userSlice";
import foodSlice from "./reducersSlice/foodSlice";
const reducer = combineReducers({
  users: userSlice,
  restaurants: restaurantSlice,
  foods: foodSlice,

  
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
