import { combineReducers } from "redux";
import { addUserDataReducer } from "./reducer";
const rootReducer = combineReducers({ userData: addUserDataReducer });
export default rootReducer;
