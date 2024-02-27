import React, { createContext, useReducer } from "react";
import toast from "react-hot-toast";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existedItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].count += 1;
      } else {
        const assembled = { ...action.payload };
        state.cartItems.push(assembled);
        toast.success("Item added Successfully!");
      }

      // Store only the updated cart items in local storage
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      return { ...state };
    }

    case "REMOVE_CART": {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      // Update local storage to remove the item
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      toast(`Item ${action.payload.title} removed Successfully!`, {
        icon: "👏",
      });
      return { ...state, cartItems: updatedCartItems };
    }

    case "CLEAR_CART": {
      toast.success("All carts clear!");
      return { ...state, cartItems: [] };
    }
    case "INCREMENT_CART": {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex !== -1 && state.cartItems[itemIndex].count >= 1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemIndex] = {
          ...updatedCartItems[itemIndex],
          count: updatedCartItems[itemIndex].count + 1,
        };

        // Update local storage with the updated cart items
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));

        toast.success("Quantity increased");
        return { ...state, cartItems: updatedCartItems };
      }
      return state; // Return the original state if item is not found or count is negative
    }

    case "DECREMENT_CART": {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (state.cartItems[itemIndex].count > 1) {
        state.cartItems[itemIndex].count -= 1;
        toast.success("Quantity decreased!");
      } else if (state.cartItems[itemIndex].count === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        return { ...state, cartItems: updatedCartItems };
      }
      return { ...state };
    }
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
