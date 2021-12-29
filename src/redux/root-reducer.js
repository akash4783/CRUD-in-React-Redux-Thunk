import { combineReducers } from "redux";
import usersreducer from "./reducer";


const rootreducer = combineReducers({
    data: usersreducer
})
export default rootreducer