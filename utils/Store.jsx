// #1 - imports
import { createContext, useReducer } from "react";

// #2 - create context
export const Store = createContext();

// #3 - define initial state
const initialState = {
  cart: { cartItems: [] },
};

// #4 - define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      // new item
      const newItem = action.payload;

      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      // return updated cart items
      return {
        ...state, // keep the previous state
        cart: {
          ...state.cart, // keep the previous values in the cart
          cartItems, // update the cartItems
        },
      };
    }
    case "CART_REMOVE_ITEM": {
      // filter cartItems based on the slug
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      /* return all card items except that we passed in the
      action.payload */
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state; // return state as they are
  }
};

// #5 - create and export provider
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
