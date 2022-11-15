import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
// import addToCartSlice from "./components/addToCart/addToCart.slice";
const reducer = combineReducers({
  // count: addToCartSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
