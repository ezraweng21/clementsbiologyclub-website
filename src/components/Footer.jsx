import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/bioclub-logo.webp"
            alt="Clements High School Biology Club logo"
          />
          <div className="footer-copy">
            <p className="footer-title">Clements Biology Club</p>
            <p className="footer-tagline">Curiosity, community, and biology in action.</p>
            <p>&copy; 2026 Clements Biology Club. All rights reserved.</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/get-involved">Get Involved</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
