import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import flagImage from '../assets/Flag.png';
import tunisiaImage from '../assets/tunis.webp';
import tunisiaVideo from '../assets/Lets Discover Tunisia  🇹🇳.mp4';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      welcomeText: "Bienvenue en Tunisie",
      heroTitle: "Découvrez la",
      heroHighlight: "Perle de la Méditerranée",
      heroSubtitle: "Plongez dans 3000 ans d'histoire, explorez des plages dorées et vivez des expériences authentiques au cœur de l'Afrique du Nord.",
      discoverBtn: "Découvrir la Tunisie",
      experiencesBtn: "Nos Expériences",
      quickNavTitle: "Que souhaitez-vous découvrir ?",
      quickNavSubtitle: "Choisissez votre aventure tunisienne",
      destinations: "Destinations",
      destinationsDesc: "Tunis, Djerba, Sahara, Hammamet...",
      experiences: "Expériences",
      experiencesDesc: "Culture, plages, aventure, bien-être...",
      transport: "Transport",
      transportDesc: "Louages, trains, bus, taxis...",
      practicalInfo: "Infos Pratiques",
      practicalInfoDesc: "Visa, transport, hébergement...",
      whyChoose: "Pourquoi choisir la Tunisie ?",
      diversityTitle: "Diversité des paysages",
      diversityDesc: "De la Méditerranée au Sahara",
      cultureTitle: "Richesse culturelle",
      cultureDesc: "Patrimoine UNESCO exceptionnel",
      lifestyleTitle: "Art de vivre",
      lifestyleDesc: "Gastronomie et hospitalité",
      planTripTitle: "Prêt à planifier votre voyage ?",
      planTripDesc: "Nos experts locaux vous accompagnent",
      contactBtn: "Contactez-nous",
      videoError: "Votre navigateur ne supporte pas les vidéos HTML5."
    },
    en: {
      welcomeText: "Welcome to Tunisia",
      heroTitle: "Discover the",
      heroHighlight: "Pearl of the Mediterranean",
      heroSubtitle: "Dive into 3000 years of history, explore golden beaches, and experience authentic adventures in the heart of North Africa.",
      discoverBtn: "Discover Tunisia",
      experiencesBtn: "Our Experiences",
      quickNavTitle: "What would you like to discover?",
      quickNavSubtitle: "Choose your Tunisian adventure",
      destinations: "Destinations",
      destinationsDesc: "Tunis, Djerba, Sahara, Hammamet...",
      experiences: "Experiences",
      experiencesDesc: "Culture, beaches, adventure, wellness...",
      transport: "Transport",
      transportDesc: "Louages, trains, buses, taxis...",
      practicalInfo: "Practical Info",
      practicalInfoDesc: "Visa, transport, accommodation...",
      whyChoose: "Why choose Tunisia?",
      diversityTitle: "Diversity of landscapes",
      diversityDesc: "From the Mediterranean to the Sahara",
      cultureTitle: "Cultural richness",
      cultureDesc: "Exceptional UNESCO heritage",
      lifestyleTitle: "Art of living",
      lifestyleDesc: "Gastronomy and hospitality",
      planTripTitle: "Ready to plan your trip?",
      planTripDesc: "Our local experts are here to help",
      contactBtn: "Contact us",
      videoError: "Your browser does not support HTML5 videos."
    }
  };

  const t = translations[language];
  return (
    <main className="home">
      {/* Hero Section Simplified */}
      <section className="hero-home" id="home">
        <div className="hero-background">
          <video 
            autoPlay 
            muted 
            loop 
            className="video-bg"
            src={tunisiaVideo}
          >
            {t.videoError}
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in-up">
              <div className="welcome-line">
                <img src={flagImage} alt="Tunisian Flag" className="tunisia-flag" />
                <span className="welcome-text">{t.welcomeText}</span>
              </div>
              <h1>
                {t.heroTitle} <span className="highlight">{t.heroHighlight}</span>
              </h1>
              <p className="hero-subtitle">
                {t.heroSubtitle}
              </p>
              <div className="hero-actions">
                <Link to="/destinations" className="btn-main">
                  {t.discoverBtn}
                </Link>
                <Link to="/experiences" className="btn-secondary">
                  {t.experiencesBtn}
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src={tunisiaImage} 
                alt="Panorama of Tunis" 
                className="hero-tunisia-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section className="quick-navigation section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.quickNavTitle}</h2>
            <p>{t.quickNavSubtitle}</p>
          </div>
          <div className="nav-cards">
            <Link to="/destinations" className="nav-card fade-in-up">
              <div className="card-icon destinations-icon">🏛️</div>
              <h3>{t.destinations}</h3>
              <p>{t.destinationsDesc}</p>
              <span className="card-arrow">→</span>
            </Link>
            <Link to="/experiences" className="nav-card fade-in-up">
              <div className="card-icon experiences-icon">🎭</div>
              <h3>{t.experiences}</h3>
              <p>{t.experiencesDesc}</p>
              <span className="card-arrow">→</span>
            </Link>
            <Link to="/blog" className="nav-card fade-in-up">
              <div className="card-icon blog-icon">🚌</div>
              <h3>{t.transport}</h3>
              <p>{t.transportDesc}</p>
              <span className="card-arrow">→</span>
            </Link>
            <Link to="/infos-pratiques" className="nav-card fade-in-up">
              <div className="card-icon info-icon">💡</div>
              <h3>{t.practicalInfo}</h3>
              <p>{t.practicalInfoDesc}</p>
              <span className="card-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Preview Section */}
      <section className="quick-preview">
        <div className="container">
          <div className="preview-content">
            <div className="preview-left">
              <h3>{t.whyChoose}</h3>
              <div className="preview-features">
                <div className="feature-item">
                  <span className="feature-icon">🌊</span>
                  <div>
                    <h4>{t.diversityTitle}</h4>
                    <p>{t.diversityDesc}</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏺</span>
                  <div>
                    <h4>{t.cultureTitle}</h4>
                    <p>{t.cultureDesc}</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🍯</span>
                  <div>
                    <h4>{t.lifestyleTitle}</h4>
                    <p>{t.lifestyleDesc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-right">
              <div className="cta-box">
                <h4>{t.planTripTitle}</h4>
                <p>{t.planTripDesc}</p>
                <Link to="/contact" className="btn btn-primary">
                  {t.contactBtn}
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
