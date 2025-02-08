import React, { useState } from "react";
import './../App.css'

export default function Admin({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({ code: "", name: "", price: "", image: "" });
  const [editCode, setEditCode] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  function addProduct() {
    setProducts([...products, { ...newProduct, code: products.length + 1 }]);
    setNewProduct({ code: "", name: "", price: "", image: "" });
  }

  function loadProductForEdit() {
    const found = products.find(p => p.code == editCode);
    setEditProduct(found || null);
  }

  function updateProduct() {
    setProducts(products.map(p => (p.code == editProduct.code ? editProduct : p)));
    setEditProduct(null);
  }

  return (
    <div>
      <h1>ניהול מוצרים</h1>
      <h2>הוספת מוצר</h2>
      <input placeholder="שם מוצר" onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input placeholder="מחיר" onChange={e => setNewProduct({ ...newProduct, price: +e.target.value })} />
      <input placeholder="תיאור" onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input placeholder="תמונה (URL)" onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
      <button onClick={addProduct}>הוסף</button>

      <h2>עריכת מוצר</h2>
      <input placeholder="קוד מוצר" onChange={e => setEditCode(e.target.value)} />
      <button onClick={loadProductForEdit}>חפש</button>

      {editProduct && (
        <>
          <input value={editProduct.name} onChange={e => setEditProduct({ ...editProduct, name: e.target.value })} />
          <input value={editProduct.price} onChange={e => setEditProduct({ ...editProduct, price: +e.target.value })} />
          <input value={editProduct.description} onChange={e => setEditProduct({ ...editProduct, description: e.target.value })} />
          <input value={editProduct.image} onChange={e => setEditProduct({ ...editProduct, image: e.target.value })} />
          <button onClick={updateProduct}>עדכן</button>
        </>
      )}
    </div>
  );
}
