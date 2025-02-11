import React, {useState} from 'react';
export default function Store({cart, setCart, products}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.code === product.code);
  
      if (existingProduct) {
        return prevCart.map(item =>
          item.code === product.code ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
  };
  
  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="store-container">
      <h1 className="store-title">חנות</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.code} className="product-card">
            <div className="product-image-wrapper" onClick={() => openImage(p.image)}>
              <img src={p.image} alt={p.name} className="product-image"/>
            </div>
            <div className="product-details">
              <h2 className="product-name">{p.name}</h2>
              <p className="product-description">{p.description}</p>
              <p className="product-code">קוד מוצר: {p.code}</p>
              <p className="product-price">מחיר: {p.price} ש"ח</p>
              <button className="add-to-cart-button" onClick={() => addToCart(p)}>הוסף לעגלה</button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <img src={selectedImage} alt="Full View" className="fullscreen-image"/>
        </div>
      )}
    </div>
  );
}
