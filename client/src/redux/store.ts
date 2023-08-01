import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import { rememberReducer, rememberEnhancer } from "redux-remember";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";

const rememberKeys = ['category', 'user']

const store = configureStore({
    reducer: rememberReducer({
        category: categorySlice,
        auth: authSlice,
        user: userSlice
    }),
    enhancers: [rememberEnhancer(
        window.localStorage, 
        rememberKeys,
        {persistWholeStore: true}
    )]
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch