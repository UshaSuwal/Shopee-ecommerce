'use client'
import productReducer from "../reducers/productReducers";
import { createStore } from "redux";

const store = createStore(productReducer);
export default store;
