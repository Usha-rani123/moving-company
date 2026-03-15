import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mt-4">
        <div className="row mt-3">
          {/* Logo */}
          <div className="col-md-3 mb-2 mt-2">
            <h2 className="footer-logo">Moving Company</h2>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-2 mt-3">
            <h5>Company</h5>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-2 mt-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>Packers & Movers</li>
              <li>Two Wheelers</li>
              <li>Trucks</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-2 mt-3">
            <h5>Support</h5>
            <ul className="footer-links">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white p-2 text-center mt-3">
          <p className="mb-0">
            &copy; 2026 Moving Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
