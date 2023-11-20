import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

const reducer = combineReducers({
    counter: CounterReducer,
})

const store = configureStore({reducer})


export default store;