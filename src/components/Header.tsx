import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-icon">🇹🇳</span>
            <span className="logo-text">Visit Tunisia</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#culture">Culture</a></li>
            <li><a href="#gastronomie">Gastronomie</a></li>
            <li><a href="#hebergement">Hébergement</a></li>
            <li><a href="#contact">Contact</a></li>
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
