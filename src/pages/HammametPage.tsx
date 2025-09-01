import React from 'react';
import { Link } from 'react-router-dom';
import './HammametPage.css';
import kasbahImage from '../assets/kasbahhammamet.jpg';
import beachImage from '../assets/hammametplage.webp';
import medinaImage from '../assets/medinahammamet.jpg';
import marinaImage from '../assets/marina hammamet.jpg';
import flagImage from '../assets/Flag.png';

const HammametPage: React.FC = () => {
  const attractions = [
    {
      id: 1,
      name: "Kasbah de Hammamet",
      description: "Forteresse du 15ème siècle surplombant la mer, symbole historique de la ville",
      image: kasbahImage,
      highlights: [
        "Fortification du 15ème siècle",
        "Vue panoramique sur la mer",
        "Architecture militaire authentique",
        "Musée des traditions populaires"
      ],
      history: "Construite au 15ème siècle par les Hafsides, cette kasbah a défendu Hammamet contre les invasions. Elle abrite aujourd'hui un musée des traditions.",
      visitInfo: "Ouverte tous les jours. Vue imprenable sur la médina et la mer."
    },
    {
      id: 2,
      name: "Plages de Hammamet",
      description: "Étendues de sable fin bordées d'eaux cristallines, paradis balnéaire de la Tunisie",
      image: beachImage,
      highlights: [
        "Sable fin et doré",
        "Eaux cristallines",
        "Sports nautiques",
        "Restaurants en bord de mer"
      ],
      history: "Les plages de Hammamet ont fait la réputation touristique de la ville depuis les années 1960, attirant des visiteurs du monde entier.",
      visitInfo: "Accès libre toute l'année. Parasols et transats disponibles."
    },
    {
      id: 3,
      name: "Médina de Hammamet",
      description: "Centre historique authentique avec ses ruelles blanches et ses souks colorés",
      image: medinaImage,
      highlights: [
        "Architecture traditionnelle",
        "Souks artisanaux",
        "Cafés traditionnels",
        "Remparts historiques"
      ],
      history: "La médina de Hammamet conserve son charme d'antan avec ses maisons blanches et bleues typiques du style architectural tunisien.",
      visitInfo: "Accessible librement. Idéal pour le shopping et la découverte culturelle."
    },
    {
      id: 4,
      name: "Marina de Hammamet",
      description: "Port de plaisance moderne avec restaurants, boutiques et animations",
      image: marinaImage,
      highlights: [
        "Port de plaisance moderne",
        "Restaurants gastronomiques",
        "Boutiques de luxe",
        "Animations nocturnes"
      ],
      history: "Développée dans les années 2000, la marina a modernisé l'offre touristique de Hammamet tout en respectant l'identité locale.",
      visitInfo: "Ouverte 24h/24. Nombreuses activités et restaurants."
    }
  ];

  return (
    <div className="hammamet-page">
      {/* Hero Section */}
      <section className="hammamet-hero">
        <div className="hero-background">
          <img src={beachImage} alt="Plages de Hammamet" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link>
              <span> / </span>
              <Link to="/destinations">Destinations</Link>
              <span> / </span>
              <span>Hammamet</span>
            </div>
            <h1>Hammamet</h1>
            <p className="hero-subtitle">Perle du Golfe de Tunis</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">60km</span>
                <span className="stat-label">de Tunis</span>
              </div>
              <div className="stat">
                <span className="stat-number">14km</span>
                <span className="stat-label">de plages</span>
              </div>
              <div className="stat">
                <span className="stat-number">1963</span>
                <span className="stat-label">Premier resort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="hammamet-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>La Perle du Golfe de Tunis</h2>
              <p>
                Hammamet, surnommée "la perle du golfe de Tunis", est l'une des stations 
                balnéaires les plus prisées de Tunisie. Cette charmante ville côtière 
                allie parfaitement tradition et modernité, offrant aux visiteurs des plages 
                de sable fin, une médina authentique et une infrastructure touristique de qualité.
              </p>
              <p>
                Réputée pour ses jardins d'agrumes parfumés, ses eaux cristallines et 
                son patrimoine historique, Hammamet a su préserver son charme méditerranéen 
                tout en développant une offre touristique moderne. La ville est également 
                célèbre pour son festival international d'art dramatique et ses spas de thalassothérapie.
              </p>
            </div>
            <div className="intro-flag">
              <img src={flagImage} alt="Drapeau Tunisien" className="tunisia-flag" />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions principales */}
      <section className="attractions section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Sites Incontournables</h2>
            <p>Découvrez les merveilles balnéaires et historiques de Hammamet</p>
          </div>

          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div key={attraction.id} className="attraction-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-image">
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="card-overlay">
                    <h3>{attraction.name}</h3>
                  </div>
                </div>
                
                <div className="card-content">
                  <p className="description">{attraction.description}</p>
                  
                  <h4>Points forts</h4>
                  <ul className="highlights-list">
                    {attraction.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  
                  <h4>Histoire</h4>
                  <p className="history-text">{attraction.history}</p>
                  
                  <h4>Informations pratiques</h4>
                  <p className="visit-info">{attraction.visitInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="practical-info section-padding">
        <div className="container">
          <h2>Préparez votre visite</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>60 km de Tunis (1h de route)</li>
                <li>15 km de l'aéroport Enfidha</li>
                <li>Liaisons bus et louages</li>
                <li>Train jusqu'à Bir Bouregba puis bus</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌊</div>
              <h3>Saison balnéaire</h3>
              <ul>
                <li>Mai à octobre (mer chaude)</li>
                <li>Juin-septembre (haute saison)</li>
                <li>Avril et novembre (doux)</li>
                <li>Hiver : thalassothérapie</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏖️</div>
              <h3>Activités</h3>
              <ul>
                <li>Sports nautiques</li>
                <li>Golf (parcours 18 trous)</li>
                <li>Thalassothérapie</li>
                <li>Excursions en mer</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Billets et tarifs</h3>
              <ul>
                <li>Kasbah : Entrée gratuite</li>
                <li>Plages : Accès libre</li>
                <li>Marina : Accès libre</li>
                <li>Musées : 2-5 TND</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Planifiez votre séjour à Hammamet</h2>
          <p>Découvrez la magie de la perle du golfe de Tunis</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="btn btn-primary">
              Autres destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HammametPage;
