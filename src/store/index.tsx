import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/auth";
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 
export type RootState = ReturnType<typeof store.getState>
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch


// https://medium.com/geekculture/redux-revisited-react-typescript-redux-toolkit-5c813553b535
//https://dev.to/zhnedyalkow/how-to-setup-your-react-app-with-redux-toolkit-and-typescript-5cbb
//https://www.youtube.com/watch?v=eFh2Kr9hfyo