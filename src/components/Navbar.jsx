import { useState } from 'react';
import { site } from '../siteContent.js';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Freewater Productions home">
        <span className="brand-mark" aria-hidden="true">◉</span>
        <span className="brand-name">{site.name}</span>
      </a>

      <div className="affiliation">{site.university} <span>×</span> {site.affiliation}</div>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <a className="nav-link" href="#home" onClick={closeMenu}>HOME</a>
        <a className="nav-link" href="#films" onClick={closeMenu}>FILMS</a>
        <a className="nav-link" href="#about" onClick={closeMenu}>ABOUT</a>
        <a className="nav-link nav-join" href="#get-involved" onClick={closeMenu}>GET INVOLVED</a>
      </nav>
    </header>
  );
}
