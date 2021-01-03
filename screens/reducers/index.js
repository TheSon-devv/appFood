import { combineReducers } from "redux";
import monAn from "./monAn";
import loginReducer from "./loginReducer";

export const reducers = combineReducers({
    monAn,
    loginReducer
})