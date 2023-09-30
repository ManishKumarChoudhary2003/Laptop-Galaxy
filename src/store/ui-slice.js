import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  isLogout: true,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "1",
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLogin = !state.isLogin;
    },
    logout(state) {
      state.isLogout = !state.isLogout;
    },

    loginHandler: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "1");
    },
    logoutHandler: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
