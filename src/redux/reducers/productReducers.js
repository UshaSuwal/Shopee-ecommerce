"use client";
import { FETCH_PRODUCT_REQUEST, FETCH_SINGLE_ITEM } from "../actions/productActions";

const initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      console.log("products in initital", state.product);
      return { ...state, product: action.payload };

    case FETCH_SINGLE_ITEM:
      console.log("products are", state.product);
      const itemId = action.payload;
      const selectedProduct = state.product.find(
        (p) => p.id === itemId
      );
      console.log("selected", selectedProduct);
      return {
        ...state,
        items: selectedProduct ? selectedProduct : null,
      };

    default:
      return state;
  }
};
export default productReducer;
