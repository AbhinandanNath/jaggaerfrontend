import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./CartStore/CartSlice";

const store = configureStore({
  reducer: {
    cartState: cartSliceReducer,
  },
});

export default store;
