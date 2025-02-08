import './../App.css'

export default function Checkout({ cart, setCart }) {
  const handlePurchase = () => {
    alert("הרכישה בוצעה בהצלחה!");
    setCart([]); // Empty the cart after purchase
  };

  return (
    <div>
      <h1>קופה</h1>
      <p>סכום לתשלום: {cart.reduce((sum, item) => sum + item.price, 0)} ש"ח</p>
      <button onClick={handlePurchase}>רכוש</button>
    </div>
  );
}
