import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("authToken"), 
  user: (() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null; 
    } catch {
      return null; 
    }
  })(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("authToken"); 
      localStorage.removeItem("user"); 
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
