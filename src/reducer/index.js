import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer"
import AlertReducer from "./AlertReducer"
import ProjectReducer from "./ProjectReducer"
export default combineReducers({auth:AuthReducer,alert:AlertReducer,project:ProjectReducer})