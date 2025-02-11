import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";

export default function App() {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Load products from localStorage when component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    if (storedProducts.length > 0) {
      setProducts(storedProducts);
    }
  }, [setProducts]);

  // Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <>
      <Header cartSize={cart.reduce((sum, item) => sum + item.amount, 0)} />
      <Routes>
        <Route path="/" element={<Store cart={cart} setCart={setCart} products={products} />} />
        <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}
