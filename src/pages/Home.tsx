import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import flagImage from '../assets/Flag.png';
import tunisiaImage from '../assets/tunis.webp';
import tunisiaVideo from '../assets/Lets Discover Tunisia  🇹🇳.mp4';

const Home: React.FC = () => {
  return (
    <main className="home">
      {/* Hero Section Simplifiée */}
      <section className="hero-home" id="accueil">
        <div className="hero-background">
          <video 
            autoPlay 
            muted 
            loop 
            className="video-bg"
            src={tunisiaVideo}
          >
            Votre navigateur ne supporte pas les vidéos HTML5.
          </video>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <div className="welcome-line">
                <img src={flagImage} alt="Drapeau Tunisien" className="tunisia-flag" />
                <span className="welcome-text">Bienvenue en Tunisie</span>
              </div>
              <h1>
                Découvrez la <span className="highlight">Perle de la Méditerranée</span>
              </h1>
              <p className="hero-subtitle">
                Plongez dans 3000 ans d'histoire, explorez des plages dorées 
                et vivez des expériences authentiques au cœur de l'Afrique du Nord.
              </p>
              <div className="hero-actions">
                <Link to="/destinations" className="btn-main">
                  Découvrir la Tunisie
                </Link>
                <Link to="/experiences" className="btn-secondary">
                  Nos Expériences
                </Link>
              </div>
            </div>
            
            <div className="hero-image">
              <img 
                src={tunisiaImage} 
                alt="Panorama de Tunis" 
                className="hero-tunisia-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation Rapide */}
      <section className="quick-navigation section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Que souhaitez-vous découvrir ?</h2>
            <p>Choisissez votre aventure tunisienne</p>
          </div>
          
          <div className="nav-cards">
            <Link to="/destinations" className="nav-card fade-in-up">
              <div className="card-icon destinations-icon">🏛️</div>
              <h3>Destinations</h3>
              <p>Tunis, Djerba, Sahara, Hammamet...</p>
              <span className="card-arrow">→</span>
            </Link>
            
            <Link to="/experiences" className="nav-card fade-in-up">
              <div className="card-icon experiences-icon">🎭</div>
              <h3>Expériences</h3>
              <p>Culture, plages, aventure, bien-être...</p>
              <span className="card-arrow">→</span>
            </Link>
            
            <Link to="/blog" className="nav-card fade-in-up">
              <div className="card-icon blog-icon">�</div>
              <h3>Transport</h3>
              <p>Louages, trains, bus, taxis...</p>
              <span className="card-arrow">→</span>
            </Link>
            
            <Link to="/infos-pratiques" className="nav-card fade-in-up">
              <div className="card-icon info-icon">💡</div>
              <h3>Infos Pratiques</h3>
              <p>Visa, transport, hébergement...</p>
              <span className="card-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Aperçu Rapide */}
      <section className="quick-preview">
        <div className="container">
          <div className="preview-content">
            <div className="preview-left">
              <h3>Pourquoi choisir la Tunisie ?</h3>
              <div className="preview-features">
                <div className="feature-item">
                  <span className="feature-icon">🌊</span>
                  <div>
                    <h4>Diversité des paysages</h4>
                    <p>De la Méditerranée au Sahara</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏺</span>
                  <div>
                    <h4>Richesse culturelle</h4>
                    <p>Patrimoine UNESCO exceptionnel</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🍯</span>
                  <div>
                    <h4>Art de vivre</h4>
                    <p>Gastronomie et hospitalité</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="preview-right">
              <div className="cta-box">
                <h4>Prêt à planifier votre voyage ?</h4>
                <p>Nos experts locaux vous accompagnent</p>
                <Link to="/contact" className="btn btn-primary">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
