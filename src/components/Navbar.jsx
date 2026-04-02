import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="logo" onClick={handleCloseMenu}>
          <span className="logo-mark">🧬</span>
          <span className="logo-text">Clements Biology Club</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        <nav
          id="mobile-navigation"
          className={menuOpen ? "nav-links nav-links-open" : "nav-links"}
        >
          <NavLink
            to="/"
            end
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/officers"
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            Officers
          </NavLink>
          <NavLink
            to="/events"
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            Events
          </NavLink>
          <NavLink
            to="/resources"
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            Resources
          </NavLink>
          <NavLink
            to="/contact"
            className={getLinkClass}
            onClick={handleCloseMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
