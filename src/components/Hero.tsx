import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="accueil">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1>
              Découvrez la <span className="highlight">Tunisie</span>
            </h1>
            <p className="hero-subtitle">
              Entre mer Méditerranée et désert du Sahara, explorez un pays aux mille facettes, 
              riche d'histoire millénaire et de traditions authentiques.
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">🏛️</span>
                <span>Patrimoine UNESCO</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌅</span>
                <span>Paysages Magiques</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎭</span>
                <span>Culture Vivante</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-primary">
                Explorer les Destinations
              </a>
              <a href="#culture" className="btn btn-outline">
                Découvrir la Culture
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container float">
              <div className="hero-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🕌</span>
                  <p>Image: Mosquée Zitouna, Tunis</p>
                </div>
              </div>
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <span>🏖️</span>
                  <span>Côtes Paradisiaques</span>
                </div>
                <div className="floating-card card-2">
                  <span>🐪</span>
                  <span>Aventure Désert</span>
                </div>
                <div className="floating-card card-3">
                  <span>🍯</span>
                  <span>Gastronomie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Découvrir</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
