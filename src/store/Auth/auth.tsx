import { createSlice,PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
    isAuthenticated: boolean,
    user: any, 
}

const profile = localStorage.getItem("profile") 
const authInitial:CounterState = {
  isAuthenticated: false,
  user : profile ? JSON.parse(profile) :  "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitial,
  reducers: {
    auth(state, action:PayloadAction<any>) {
      state.isAuthenticated = true;
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.user = action.payload;
    },
    logOut(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("profile");
      state.user = null;
    },
  },
});
export const authActions = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;