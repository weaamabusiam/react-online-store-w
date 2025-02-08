// import { useState } from "react";
import './../App.css'

export default function Store({ cart, setCart,products }) {
//   const [products] = useState([
//     { code: 1, name: "Computer", price: 2000, image: "https://th.bing.com/th/id/OIP.eU-2D9pFINQmWfM8fImAYAHaEY?rs=1&pid=ImgDetMain" },
//     { code: 2, name: "Ihone", price: 1000, image: "https://th.bing.com/th/id/OIP.f0TxVuQRnOhEoQq9JCmlzwHaHa?rs=1&pid=ImgDetMain" }
//   ]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <h1>חנות</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.code} className="product-card">
            <img src={p.image} alt={p.name} />
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <p>קוד מוצר: {p.code}</p>
            <p>מחיר: {p.price} ש"ח</p>
            <button onClick={() => addToCart(p)}>הוסף לעגלה</button>
          </div>
        ))}
      </div>
    </div>
  );
}
