import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
// @ts-ignore
import flagImage from '../assets/Flag.png';

const Footer: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="logo">
                <img src={flagImage} alt="Drapeau Tunisien" className="logo-flag" style={{width: '32px', height: '24px', objectFit: 'cover'}} />
                <span className="logo-text">Visit Tunisia</span>
              </div>
              <p>Découvrez les trésors cachés de la Tunisie : plages paradisiaques, déserts mystiques, médinas historiques et culture millénaire.</p>
              <div className="social-links">
                <a href="https://facebook.com/VisitTunisia" aria-label="Facebook">📘</a>
                <a href="https://instagram.com/VisitTunisia" aria-label="Instagram">📷</a>
                <a href="https://twitter.com/VisitTunisia" aria-label="Twitter">🐦</a>
                <a href="https://youtube.com/VisitTunisia" aria-label="YouTube">📺</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Destinations Populaires</h4>
            <ul>
              <li><Link to="/destinations/tunis" onClick={handleLinkClick}>Tunis & Carthage</Link></li>
              <li><Link to="/destinations/djerba" onClick={handleLinkClick}>Djerba</Link></li>
              <li><Link to="/destinations/sahara" onClick={handleLinkClick}>Désert du Sahara</Link></li>
              <li><Link to="/destinations/sousse" onClick={handleLinkClick}>Sousse</Link></li>
              <li><Link to="/destinations/hammamet" onClick={handleLinkClick}>Hammamet</Link></li>
              <li><Link to="/destinations/kairouan" onClick={handleLinkClick}>Kairouan</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Types d'Expériences</h4>
            <ul>
              <li><Link to="/experiences/medinas-patrimoine" onClick={handleLinkClick}>Patrimoine UNESCO</Link></li>
              <li><Link to="/experiences/gastronomie" onClick={handleLinkClick}>Cuisine tunisienne</Link></li>
              <li><Link to="/experiences/nature-decouverte" onClick={handleLinkClick}>Aventures désert</Link></li>
              <li><Link to="/experiences/plages-cotes" onClick={handleLinkClick}>Plages & détente</Link></li>
              <li><Link to="/blog" onClick={handleLinkClick}>Transport local</Link></li>
              <li><Link to="/experiences/bien-etre" onClick={handleLinkClick}>Bien-être & spa</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Guide Pratique</h4>
            <ul>
              <li><Link to="/blog" onClick={handleLinkClick}>Transports en Tunisie</Link></li>
              <li><Link to="/infos-pratiques" onClick={handleLinkClick}>Informations utiles</Link></li>
              <li><Link to="/destinations" onClick={handleLinkClick}>Toutes les destinations</Link></li>
              <li><Link to="/experiences" onClick={handleLinkClick}>Types d'expériences</Link></li>
              <li><Link to="/experiences/medinas-patrimoine" onClick={handleLinkClick}>Patrimoine & culture</Link></li>
              <li><Link to="/" onClick={handleLinkClick}>Accueil</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Avenue Mohamed V, Tunis</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+216 71 341 077</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>contact@visit-tunisia.tn</span>
              </div>
            </div>
            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>Recevez nos dernières offres</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Votre email" />
                <button type="submit">S'abonner</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Visit Tunisia. Tous droits réservés.</p>
            </div>
            <div className="footer-links">
              <Link to="/privacy" onClick={handleLinkClick}>Politique de confidentialité</Link>
              <Link to="/terms" onClick={handleLinkClick}>Conditions d'utilisation</Link>
              <Link to="/" onClick={handleLinkClick}>Plan du site</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
