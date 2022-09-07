import {combineReducers} from "redux";
import {recipes} from "./recipes";
import {tasksList} from "./tasksList";

export const rootReducers = combineReducers({
    recipes,
    tasksList
})
