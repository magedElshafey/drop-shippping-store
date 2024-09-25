import { createSlice } from "@reduxjs/toolkit";
import { getUserLocalStorage } from "./userLocalStorage";
const initialState = getUserLocalStorage();
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      if (action?.payload) {
        return action.payload;
      }
    },
    logout() {
      return null;
    },
  },
});

export const { login, logout } = user.actions;
export const userToken = (state) => state?.user?.token;
export default user.reducer;
