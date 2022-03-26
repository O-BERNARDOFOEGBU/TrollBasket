import { combineReducers } from "redux";

import products from "./slices/productSlice";
import cart from "./slices/cartSlice";

export default combineReducers({
  products,
  cart,
});
