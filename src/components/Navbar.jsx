import { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <NavLink to="/" className="logo-link">
            <img
              src="/N-Logo.png"
              alt="SHREE SAI LOGISTICS"
              className="logo-img"
              loading="lazy"
            />
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className={`mobile-menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            HOME
          </NavLink>
          <NavLink to="/aboutus" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            ABOUT US
          </NavLink>
          <NavLink to="/services" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            SERVICES
          </NavLink>
          <NavLink to="/branches" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            BRANCHES
          </NavLink>
          <NavLink to="/tracking" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            TRACKING
          </NavLink>
          <NavLink to="/contactus" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
