import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css"; // Import the CSS file

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <Link className="logo" to="/">Toronto Innovation Challenge</Link>

      {/* Desktop Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/prereg" onClick={() => setMenuOpen(false)}>Pre-Registration Form</NavLink>
        <NavLink to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</NavLink>
        <NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
        <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
      </div>
      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

// Helper Component for Nav Links (Keeps Styling Consistent)
const NavLink = ({ to, children, onClick }) => {
  return (
    <Link to={to} className="nav-link" onClick={onClick}>
      {children}
    </Link>
  );
};
