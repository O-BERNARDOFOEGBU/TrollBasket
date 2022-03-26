import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartContent: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const presentItem = state.cartContent.find(
        (x) => x.id === action.payload.id
      );
      let newCart;
      if (presentItem) {
        newCart = state.cartContent.map((item) =>
          item?.id === action.payload?.id
            ? { ...item, quantity: presentItem.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cartContent, { ...action.payload, quantity: 1 }];
      }
      state.cartContent = newCart;
      //   state.cartContent = [action.payload];
    },

    subFromCart: (state, action) => {
      state.cartContent = state.cartContent.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
        return item;
      });
    },

    deleteFromCart: (state, action) => {
      state.cartContent = state.cartContent.filter(
        (item) => item.id !== action.payload
      );
    },

    clearFromCart: (state, action) => {
      state.cartContent = [];
    },
  },
});

export const { addToCart, subFromCart, deleteFromCart, clearFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
