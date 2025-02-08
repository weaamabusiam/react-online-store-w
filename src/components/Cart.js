import './../App.css'

export default function Cart({ cart, setCart }) {
  const removeFromCart = (code) => setCart(cart.filter((item) => item.code !== code));

  return (
    <div>
      <h1>עגלה</h1>
      {cart.length === 0 ? (
        <p>העגלה ריקה.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.code} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>מחיר: {item.price} ש"ח</p>
              <button onClick={() => removeFromCart(item.code)}>הסר</button>
            </div>
          ))}
        </div>
      )}
      <p>סכום כולל: {cart.reduce((sum, item) => sum + item.price, 0)} ש"ח</p>
    </div>
  );
}
