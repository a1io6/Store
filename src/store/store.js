import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/Login"
import WishReduser from "./auth/Favorite";

export const store = configureStore({
    reducer:{
        auth: loginReducer,
        favorite : WishReduser,
    }
})