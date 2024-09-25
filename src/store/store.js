import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart";
import userSlice from "./user/user";
const store = configureStore({
  reducer: {
    cartSlice,
    userSlice,
  },
});

export default store;
