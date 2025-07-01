import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.jsx";
import profileReducer from "../slices/profileSlice.jsx";
const rootReducer = combineReducers({
    auth: authReducer,
    profile:profileReducer,
})
export default rootReducer