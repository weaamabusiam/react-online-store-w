import {useNavigate} from 'react-router-dom';

export default function Cart({cart, setCart}) {
  const removeFromCart = (code) => setCart(cart.filter((item) => item.code !== code));
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">עגלה</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">העגלה ריקה.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.code} className="cart-item">
              <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-item-image"/>
              </div>
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                {/*<p className="cart-item-description">{item.description}</p>*/}
                <p className="cart-item-price">מחיר: {item.price} ש"ח</p>
                <button className="remove-button" onClick={() => removeFromCart(item.code)}>הסר</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="cart-total">סכום כולל: {cart.reduce((sum, item) => sum + item.price, 0)} ש"ח</p>
      {cart.length > 0 && (
        <button className="checkout-button" onClick={proceedToCheckout}>לתשלום</button>
      )}
    </div>
  );
}
