import React from 'react';
import { Link } from 'react-router-dom';
import './DjerbaPage.css';
import djerbaImage from '../assets/djerba.jpg';
import plageImage from '../assets/djerbaplage.avif';
// @ts-ignore
import medinaImage from '../assets/medina djerba.jpg';
import djerbahoodImage from '../assets/djerbahood.webp';
import crocodileImage from '../assets/parccrocodiledjerba.webp';
import flagImage from '../assets/Flag.png';

const DjerbaPage: React.FC = () => {
  const attractions = [
    {
      id: 1,
      name: "Plages de Djerba",
      description: "Étendues de sable fin aux eaux turquoise, paradis balnéaire de la Méditerranée",
      image: plageImage,
      highlights: [
        "14 km de plages de sable fin",
        "Eaux turquoise et chaudes",
        "Sports nautiques variés",
        "Complexes hôteliers de luxe"
      ],
      history: "Les plages de Djerba ont fait la réputation touristique de l'île depuis les années 1960, attirant des visiteurs du monde entier pour leur beauté naturelle.",
      visitInfo: "Accès libre toute l'année. Nombreuses activités nautiques disponibles."
    },
    {
      id: 2,
      name: "Médina d'Houmt Souk",
      description: "Centre historique authentique de Djerba avec ses souks colorés et son architecture traditionnelle",
      image: medinaImage,
      highlights: [
        "Souks traditionnels authentiques",
        "Architecture berbère et arabe",
        "Artisanat local unique",
        "Café des Nattes historique"
      ],
      history: "Houmt Souk, capitale de Djerba, conserve son charme d'antan avec ses ruelles blanches et ses souks animés depuis des siècles.",
      visitInfo: "Accessible librement. Idéal pour le shopping et la découverte culturelle."
    },
    {
      id: 3,
      name: "Djerbahood",
      description: "Musée de street art à ciel ouvert, projet artistique unique transformant le village d'Erriadh",
      image: djerbahoodImage,
      highlights: [
        "Plus de 250 œuvres murales",
        "Artistes internationaux",
        "Village d'Erriadh transformé",
        "Art contemporain en plein air"
      ],
      history: "Lancé en 2014, Djerbahood a transformé le village d'Erriadh en galerie d'art à ciel ouvert, mélangeant tradition et modernité.",
      visitInfo: "Visite libre du village. Respect des œuvres et des habitants demandé."
    },
    {
      id: 4,
      name: "Parc Crocodile Djerba",
      description: "Parc animalier unique abritant plus de 400 crocodiles du Nil dans un cadre naturel",
      image: crocodileImage,
      highlights: [
        "Plus de 400 crocodiles du Nil",
        "Spectacles de nourrissage",
        "Jardin botanique tropical",
        "Activités familiales"
      ],
      history: "Créé pour la préservation des crocodiles du Nil, ce parc unique en Tunisie offre une expérience éducative et ludique pour toute la famille.",
      visitInfo: "Ouvert tous les jours. Spectacles à heures fixes. Idéal pour les familles."
    }
  ];

  return (
    <div className="djerba-page">
      {/* Hero Section */}
      <section className="djerba-hero">
        <div className="hero-background">
          <img src={djerbaImage} alt="Île de Djerba" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link>
              <span> / </span>
              <Link to="/destinations">Destinations</Link>
              <span> / </span>
              <span>Djerba</span>
            </div>
            <h1>Djerba</h1>
            <p className="hero-subtitle">L'Île des Rêves</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">514km²</span>
                <span className="stat-label">Superficie</span>
              </div>
              <div className="stat">
                <span className="stat-number">14km</span>
                <span className="stat-label">de plages</span>
              </div>
              <div className="stat">
                <span className="stat-number">3000</span>
                <span className="stat-label">ans d'histoire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="djerba-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>L'Île des Rêves</h2>
              <p>
                Djerba, la plus grande île de Tunisie, est un véritable joyau de la Méditerranée. 
                Surnommée "l'île des rêves", elle séduit par ses plages de sable fin, ses eaux 
                turquoise, son patrimoine culturel riche et sa douceur de vivre légendaire.
              </p>
              <p>
                Terre de tolérance et de diversité, Djerba abrite une mosaïque de cultures 
                et de traditions. De ses villages berbères authentiques à ses complexes 
                touristiques modernes, en passant par ses souks colorés et son art de rue 
                contemporain, l'île offre une expérience unique entre tradition et modernité.
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
            <p>Découvrez les merveilles de l'île des rêves</p>
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
              <div className="info-icon">✈️</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>Aéroport Djerba-Zarzis (direct)</li>
                <li>520 km de Tunis (6h de route)</li>
                <li>Causeway reliant l'île au continent</li>
                <li>Ferry depuis Jorf (sud tunisien)</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌞</div>
              <h3>Climat et saisons</h3>
              <ul>
                <li>Toute l'année (climat doux)</li>
                <li>Été : chaud et sec (28-35°C)</li>
                <li>Hiver : doux et ensoleillé (15-20°C)</li>
                <li>330 jours de soleil par an</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Activités</h3>
              <ul>
                <li>Sports nautiques et plongée</li>
                <li>Quad et excursions 4x4</li>
                <li>Thalassothérapie et spa</li>
                <li>Festivals culturels</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Billets et tarifs</h3>
              <ul>
                <li>Plages : Accès libre</li>
                <li>Djerbahood : Visite gratuite</li>
                <li>Parc Crocodile : 15 TND</li>
                <li>Médina : Accès libre</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Vivez la magie de Djerba</h2>
          <p>Découvrez l'île des rêves et ses merveilles infinies</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="btn btn-outline">
              Autres destinations
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Réserver votre séjour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DjerbaPage;
