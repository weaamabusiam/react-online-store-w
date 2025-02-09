import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStore, FaUserCog } from 'react-icons/fa';
export default function Header({ cartSize }) {
  return (
    <nav className="header-container">
      <Link to="/admin" className="nav-link">
        <FaUserCog className="nav-icon"/> ניהול
      </Link>
      <div className="nav-links">
        <div className="nav-logo">
          <FaStore className="nav-icon"/>
          <Link to="/" className="nav-link">חנות</Link>
        </div>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart className="nav-icon"/> עגלה ({cartSize})
        </Link>
      </div>
    </nav>
  );
}
