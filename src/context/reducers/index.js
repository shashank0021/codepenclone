import {combineReducers} from "redux"
import userAuthentication from "./userAuthentication"
import project from "./project"

const myReducer = combineReducers({
    user : userAuthentication,
    project : project
})

export default myReducer