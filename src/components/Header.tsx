import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import flagImage from '../assets/Flag.png';
import franceFlag from '../assets/drapeau france.png';
import ukFlag from '../assets/angletrre drapeau.png';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
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
          {/* Language Switcher */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '25px',
            padding: '2px',
            display: 'flex',
            gap: '2px',
            marginRight: '15px'
          }}>
            <button 
              onClick={() => setLanguage('fr')}
              style={{ 
                background: language === 'fr' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px', 
                fontSize: '0.8rem',
                fontWeight: '500',
                padding: '6px 10px',
                borderRadius: '20px',
                color: language === 'fr' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease',
                boxShadow: language === 'fr' ? '0 2px 8px rgba(102, 126, 234, 0.4)' : 'none'
              }}
            >
              <img src={franceFlag} alt="French Flag" style={{ width: 16, height: 11, borderRadius: '1px' }} /> 
              FR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              style={{ 
                background: language === 'en' ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' : 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px', 
                fontSize: '0.8rem',
                fontWeight: '500',
                padding: '6px 10px',
                borderRadius: '20px',
                color: language === 'en' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease',
                boxShadow: language === 'en' ? '0 2px 8px rgba(255, 107, 107, 0.4)' : 'none'
              }}
            >
              <img src={ukFlag} alt="UK Flag" style={{ width: 16, height: 11, borderRadius: '1px' }} /> 
              EN
            </button>
          </div>
          
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
