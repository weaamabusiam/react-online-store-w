import React, { useState, useEffect } from "react";
import './../App.css';

export default function Admin({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({ code: "", name: "", price: "", description: "", image: "" });
  const [editCode, setEditCode] = useState("");
  const [editProduct, setEditProduct] = useState(null);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('add');

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

  function addProduct() {
    const updatedProducts = [...products, { ...newProduct }];
    setProducts(updatedProducts);
    setNewProduct({ code: "", name: "", price: "", description: "", image: "" });
  }

  function loadProductForEdit() {
    const found = products.find(p => p.code === editCode);
    setEditProduct(found || null);
  }

  function updateProduct() {
    const updatedProducts = products.map(p => (p.code === editProduct.code ? editProduct : p));
    setProducts(updatedProducts);
    setEditProduct(null);
  }

  function removeProduct() {
    const updatedProducts = products.filter(p => p.code !== editProduct.code);
    setProducts(updatedProducts);
    setEditProduct(null);
  }

  function fetchOrders() {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">ניהול מוצרים</h1>

      <div className="admin-content">
        {/* Sidebar Tabs */}
        <div className="tab-sidebar">
          <button className={`tab-button ${activeTab === 'add' ? 'active' : ''}`} onClick={() => setActiveTab('add')}>הוספת מוצר</button>
          <button className={`tab-button ${activeTab === 'edit' ? 'active' : ''}`} onClick={() => setActiveTab('edit')}>עריכת מוצר</button>
          <button className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => { setActiveTab('orders'); fetchOrders(); }}>הזמנות</button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          {activeTab === 'add' && (
            <div>
              <h2 className="section-title">הוספת מוצר חדש</h2>
              <div className="form-container">
                <input className="form-input" placeholder="שם מוצר" value={newProduct.name}
                       onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                <input className="form-input" placeholder="קוד מוצר" value={newProduct.code}
                       onChange={e => setNewProduct({...newProduct, code: e.target.value})} />
                <input className="form-input" placeholder="מחיר" type="number" value={newProduct.price}
                       onChange={e => setNewProduct({...newProduct, price: +e.target.value})} />
                <textarea className="form-input description-input" placeholder="תיאור" value={newProduct.description}
                          onChange={e => setNewProduct({...newProduct, description: e.target.value})} />
                <input className="form-input" placeholder="כתובת תמונה (URL)" value={newProduct.image}
                       onChange={e => setNewProduct({...newProduct, image: e.target.value})} />
                <button className="form-button" onClick={addProduct}>הוסף מוצר</button>
              </div>
            </div>
          )}

          {activeTab === 'edit' && (
            <div>
              <h2 className="section-title">עריכת מוצר קיים</h2>
              <div className="form-container">
                <div className="search-container">
                  <input className="form-input search-input" placeholder="הזן קוד מוצר לחיפוש" value={editCode} onChange={e => setEditCode(e.target.value)} />
                  <button className="form-button" onClick={loadProductForEdit}>חפש</button>
                </div>

                {editProduct && (
                  <>
                    <label className="form-label">שם מוצר</label>
                    <input className="form-input" value={editProduct.name} onChange={e => setEditProduct({ ...editProduct, name: e.target.value })} />

                    <label className="form-label">מחיר</label>
                    <input className="form-input" type="number" value={editProduct.price} onChange={e => setEditProduct({ ...editProduct, price: +e.target.value })} />
                    <label className="form-label">תיאור</label>
                    <textarea className="form-input description-input" value={editProduct.description} onChange={e => setEditProduct({ ...editProduct, description: e.target.value })} />

                    <label className="form-label">כתובת תמונה (URL)</label>
                    <input className="form-input" value={editProduct.image} onChange={e => setEditProduct({ ...editProduct, image: e.target.value })} />

                    <div className="button-group">
                      <button className="form-button" onClick={updateProduct}>עדכן מוצר</button>
                      <button className="form-button remove-button" onClick={removeProduct}>מחק מוצר</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="section-title">הזמנות שבוצעו</h2>
              {orders.length === 0 ? (
                <p>אין הזמנות להצגה.</p>
              ) : (
                <table className="orders-table">
                  <thead>
                  <tr>
                    <th>שם</th>
                    <th>טלפון</th>
                    <th>כתובת</th>
                    <th>פריטים</th>
                    <th>סכום כולל</th>
                  </tr>
                  </thead>
                  <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.name}</td>
                      <td>{order.phone}</td>
                      <td>{order.address}</td>
                      <td>
                        <ul>
                          {order.items.map((item, idx) => (
                            <li key={idx}>{item.name} - {item.price} ש\"ח</li>
                          ))}
                        </ul>
                      </td>
                      <td>{order.total} ש\"ח</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}