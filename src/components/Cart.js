import React from 'react';
import { FaTimes } from 'react-icons/fa';  // Importing X icon
import { useNavigate } from 'react-router-dom';


export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const removeFromCart = (productCode) => {
    const updatedCart = cart.filter(item => item.code !== productCode);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">העגלה שלי</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">העגלה שלך ריקה.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
            <tr>
              <th>תמונה</th>
              <th>שם המוצר</th>
              <th>מחיר</th>
              <th>הסר</th>
            </tr>
            </thead>
            <tbody>
            {cart.map((item) => (
              <tr key={item.code}>
                <td>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </td>
                <td>{item.name}</td>
                <td>{item.price} ש"ח</td>
                <td>
                  <button
                    className="cart-remove-button"
                    onClick={() => removeFromCart(item.code)}
                    aria-label="Remove item"
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>

          <p className="cart-total">סה"כ: {totalPrice} ש"ח</p>
          <button className="checkout-button" onClick={proceedToCheckout} >לתשלום</button>
        </>
      )}
    </div>
  );
}
