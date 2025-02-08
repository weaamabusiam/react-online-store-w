import { Link } from "react-router-dom";
import './../App.css'

export default function Header({ cartSize }) {
  return (
    <nav>
      <Link to="/">חנות</Link> | 
      <Link to="/cart">עגלה ({cartSize})</Link> | 
      <Link to="/admin">מנהל</Link>
    </nav>
  );
}
