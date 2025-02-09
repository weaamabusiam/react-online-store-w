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
  const [products,setProducts] = useState([
    {
      code: 111111,
      name: "אוזניות אלחוטיות",
      price: 800,
      description: "אוזניות אלחוטיות עם ביטול רעשים ואיכות סאונד גבוהה.",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSskR_QiSImhErdF7H557IkQ6udVemul5c7UplG6cnS1tftunFQWTD2yAdZSBkA1br2XRLFcKp9uxTnVC_cN2VskArULtyMaOw3uiTohjUzXI5dbko3QPNTcU70PJMedWqIatEw_w&usqp=CAc"
    },
    {
      code: 222222,
      name: 'Iphone 17',
      description: 'אייפון 17 חדש',
      price: 2999.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxuBLrua-Ea0yeNzfcHpzxhPtlVW6sc4yag&s'
    },
    {
      code: 333333,
      name: 'lenovo Octupus',
      description: 'מחשב נייד לינובו בעל 40 ליבות',
      price: 4099.99,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyjXOA0lFwvyjXsPhpSUCdp8SLAIcWlObLstF7Y7W78CPJvbICyIs95ZyNaF5G_kPuNjW7GMD5D8YnP2hojST3ToP4w42bIXKFjpkwiG1dT1qAN3rvEpi-Se0PtZ_A9I5y7CQ18f0&usqp=CAc'
    },
  ]);

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
