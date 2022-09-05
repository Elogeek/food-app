import {createStore} from "redux";
import {rootReducers} from "./reducers";

// Create store
export const store = createStore(rootReducers);
