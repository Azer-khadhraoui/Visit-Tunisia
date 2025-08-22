import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🇹🇳</span>
                <span className="logo-text">Visit Tunisia</span>
              </div>
              <p>Découvrez la magie de la Tunisie avec nos guides experts et nos expériences authentiques.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Destinations</h4>
            <ul>
              <li><a href="#tunis">Tunis & Carthage</a></li>
              <li><a href="#djerba">Djerba</a></li>
              <li><a href="#sahara">Sahara</a></li>
              <li><a href="#hammamet">Hammamet</a></li>
              <li><a href="#kairouan">Kairouan</a></li>
              <li><a href="#tozeur">Tozeur</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Expériences</h4>
            <ul>
              <li><a href="#culture">Patrimoine culturel</a></li>
              <li><a href="#gastro">Gastronomie</a></li>
              <li><a href="#aventure">Aventures désert</a></li>
              <li><a href="#plages">Plages & détente</a></li>
              <li><a href="#artisanat">Artisanat local</a></li>
              <li><a href="#festivals">Festivals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#visa">Visa & formalités</a></li>
              <li><a href="#transport">Se déplacer</a></li>
              <li><a href="#hebergement">Hébergement</a></li>
              <li><a href="#securite">Conseils sécurité</a></li>
              <li><a href="#climat">Climat & saisons</a></li>
              <li><a href="#budget">Budget voyage</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Office National du Tourisme Tunisien</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+216 71 341 077</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@visit-tunisia.tn</span>
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
              <a href="#privacy">Politique de confidentialité</a>
              <a href="#terms">Conditions d'utilisation</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
