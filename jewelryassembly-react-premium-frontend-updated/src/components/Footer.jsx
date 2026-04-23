import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <img src="/logo.png" alt="JewelryAssembly.com" className="brand-logo footer-logo" />
            <div>
              <strong>JewelryAssembly.com</strong>
              <small>Premium jewelry assembly partner</small>
            </div>
          </div>
          <p>
            We help jewelry designers, brands, and retailers keep production precise,
            consistent, and proudly made in the USA.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>(877) 336-3635</li>
            <li>info@jewelryassembly.com</li>
            <li>253 Route 202, Somers, NY 10589</li>
            <li>Mon - Fri • 8:00 am - 6:00 pm</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 JewelryAssembly.com — React front-end concept</span>
      </div>
    </footer>
  );
}
