import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";

export default configureStore(LoginReducer);
