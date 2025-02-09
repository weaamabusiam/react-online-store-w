import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Checkout({cart, setCart}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [id_number, setIdNumber] = useState('');
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!name || !phone || !address) {
      alert('אנא מלא את כל השדות.');
      return;
    }

    const order = {
      name,
      phone,
      address,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    alert('הרכישה בוצעה בהצלחה!');
    setCart([]);
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">קופה</h1>
      <div className="form-container">
        <input
          className="form-input"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="מספר טלפון"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="תעודת זהות"
          value={id_number}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="כתובת למשלוח"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p className="checkout-total">סכום לתשלום: {cart.reduce((sum, item) => sum + item.price, 0)} ש"ח</p>
        <button className="form-button" onClick={handlePurchase}>בצע רכישה</button>
      </div>
    </div>
  );
}
