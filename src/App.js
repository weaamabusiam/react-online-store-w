import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";  // Removed BrowserRouter here
import Store from "./components/Store";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import './App.css'


export default function App() {
  const [cart, setCart] = useState([]);
  const [products,setProducts] = useState([]);

  return (
    <>
      <Header cartSize={cart.length} />
      <Routes>
        <Route path="/" element={<Store cart={cart} setCart={setCart} products={products} />} />
        <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}
