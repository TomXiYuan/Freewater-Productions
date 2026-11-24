
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const SITE_NAME = 'FREEWATER\nPRODUCTIONS';
const UNIVERSITY = 'DUKE UNIVERSITY';
const AFFILIATION = 'DUU';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={closeMenu}
        aria-label="Freewater Productions home">
        <span className="brand-mark" aria-hidden="true">◉</span>
        <span className="brand-name">{SITE_NAME}</span>
      </Link>

      <div className="affiliation">
        {UNIVERSITY} <span>×</span> {AFFILIATION}
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        aria-label="Main navigation">
        <NavLink className="nav-link" to="/" end onClick={closeMenu}>HOME</NavLink>
        <NavLink className="nav-link" to="/films" onClick={closeMenu}>FILMS</NavLink>
        <NavLink className="nav-link" to="/about" onClick={closeMenu}>ABOUT</NavLink>
        <Link className="nav-link nav-join" to="/#get-involved"
          onClick={closeMenu}>GET INVOLVED</Link>
      </nav>
    </header>
  );
}