import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import flagImage from '../assets/Flag.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            <img src={flagImage} alt="Drapeau Tunisien" className="logo-flag" />
            <span className="logo-text">Visit Tunisia</span>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
            <li><Link to="/destinations" className={location.pathname === '/destinations' ? 'active' : ''}>Destinations</Link></li>
            <li><Link to="/experiences" className={location.pathname === '/experiences' ? 'active' : ''}>Expériences</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Transport</Link></li>
            <li><Link to="/infos-pratiques" className={location.pathname === '/infos-pratiques' ? 'active' : ''}>Infos Pratiques</Link></li>
          </ul>
        </nav>
        
        <div className="nav-actions">
          <button className="language-btn">
            <span>FR</span>
            <span className="lang-dropdown">▼</span>
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
