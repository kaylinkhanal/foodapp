import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import Register from "./pages/Auth/Register";
// import addToCartSlice from "./components/addToCart/addToCart.slice";
const reducer = combineReducers({
  register: Register,
  // count: addToCartSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
