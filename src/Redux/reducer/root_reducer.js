import { combineReducers } from "redux";
import { initialBookList_reducer } from "./reducers.js";

const rootReducer = combineReducers({
    initialBookListReducer: initialBookList_reducer,
})

export default rootReducer;