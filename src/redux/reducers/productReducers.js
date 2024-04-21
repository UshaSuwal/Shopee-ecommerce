'use client'
import {FETCH_PRODUCT_REQUEST } from "../actions/productActions";

const initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {

  switch(action.type){
    case FETCH_PRODUCT_REQUEST :

      return { ...state, product: action.payload };
      
  
    default:
      return state;
  }


};
export default productReducer;