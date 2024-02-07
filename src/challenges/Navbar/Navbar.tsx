import { Link } from "react-router-dom";
import './Navigation.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/water-balancer" className="nav-link">Water Balancer</Link>
        </li>
        <li className="nav-item">
          <Link to="/accordion" className="nav-link">Accordion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
