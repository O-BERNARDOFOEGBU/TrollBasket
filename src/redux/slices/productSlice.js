import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/productData";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [...products],
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
