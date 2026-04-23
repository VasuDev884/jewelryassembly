import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from './data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="site-header premium-header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="JewelryAssembly.com" className="brand-logo" />
          <div className="brand-copy">
            <strong>JewelryAssembly.com</strong>
            <small>Made in the USA</small>
          </div>
        </Link>

        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/quote"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}