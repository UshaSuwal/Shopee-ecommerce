"use client";
import { FETCH_PRODUCT_REQUEST, FETCH_SINGLE_ITEM , ADD_TO_CART} from "../actions/productActions";

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
      const selectedProduct = state.product.find(
        (p) => p.id === itemId
      );
    
      return {
        ...state,
        items: selectedProduct ? selectedProduct : null,
      };

      case ADD_TO_CART:
        const id = action.payload;
        const itemToAdd = state.product.find((p) => p.id === id);
        
        // Check if the item to add exists and is not already in the cart
        if (itemToAdd && !state.cart.find((item) => item.id === itemToAdd.id)) {
          return {
            ...state,
            cart: [...state.cart, itemToAdd], // Add the item to the cart
          };
        } else {
          return state; // Return the current state if the item doesn't exist or is already in the cart
        }
      
    default:
      return state;
  }
};
export default productReducer;
