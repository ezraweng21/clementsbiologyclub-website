import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="logo">
          <span className="logo-mark">🧬</span>
          <span className="logo-text">Clements Biology Club</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/officers" className={getLinkClass}>
            Officers
          </NavLink>
          <NavLink to="/events" className={getLinkClass}>
            Events
          </NavLink>
          <NavLink to="/resources" className={getLinkClass}>
            Resources
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
