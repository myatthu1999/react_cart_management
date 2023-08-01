import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Success from "./pages/Success";
import 'animate.css'

const App = () => {
  return (
    <div className=" container mx-auto bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
