import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./auth/Login"

export const store = configureStore({
    reducer:{
        auth: loginReducer,
    }
})