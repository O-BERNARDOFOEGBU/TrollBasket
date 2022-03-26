import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Buy from "./components/buy/Buy";
import Wallet from "./components/wallet/Wallet";
import Deal from "./components/deal/Deal";
import More from "./components/more/More";
import ProductDetails from "./components/product-details";
import Cart from "./components/cart";
import SuccessPage from "./components/success-page";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Buy />} />
      <Route exact path="/Home" element={<Home />} />
      <Route path="/Buy" element={<Buy />} />
      <Route exact path="/products/:id" element={<ProductDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route path="/Deal" element={<Deal />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/More" element={<More />} />
      <Route path="/checkout_success" element={<SuccessPage />} />
    </Routes>
  );
};

export default App;
