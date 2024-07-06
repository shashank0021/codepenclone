import {combineReducers} from "redux"
import userAuthentication from "./userAuthentication"

const myReducer = combineReducers({
    user : userAuthentication
})

export default myReducer