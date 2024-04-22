"use client";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_SINGLE_ITEM,
  ADD_TO_CART,
  ADD_TO_PRODUCT
} from "../actions/productActions";

const initialState = {
  product: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      console.log("products in initital", state.product);
      return { ...state, product: action.payload };

    case FETCH_SINGLE_ITEM:
      const itemId = action.payload;
      const selectedProduct = state.product.find((p) => p.id === itemId);

      return {
        ...state,
        items: selectedProduct ? selectedProduct : null,
      };

      case ADD_TO_PRODUCT:
        const { pId, quan } = action.payload;
        const existingProduct = state.product.find((item) => item.id === pId);
      
        if (existingProduct) {
          // If the product already exists in the state, update its quantity
          return {
            ...state,
            product: state.product.map((item) =>
              item.id === pId ? { ...item, quantity: quan } : item
            ),
          };
        } 
      
      case ADD_TO_CART:
      const { productId, quantity } = action.payload;
      const itemToAdd = state.product.find((p) => p.id === productId);

      if (itemToAdd && !state.cart.find((item) => item.id === itemToAdd.id)) {
        return {
          ...state,
          cart: [...state.cart, { ...itemToAdd, quantity }], 
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
export default productReducer;
