import React from 'react';
import './Destinations.css';
import flagImage from '../assets/Flag.png';
import kairouanImage from '../assets/okba.jpg';
import tabarkaImage from '../assets/tabarka.jpg';
import sousseImage from '../assets/sousse.jpg';
import tunisImage from '../assets/tunis.webp';
import djerbaImage from '../assets/djerba.jpg';
import saharaImage from '../assets/sahara.jpg';
import hammametImage from '../assets/hammamet.jpeg';

interface DestinationsProps {
  showHeader?: boolean;
}

const Destinations: React.FC<DestinationsProps> = ({ showHeader = true }) => {
  const destinations = [
    {
      id: 1,
      name: "Kairouan",
      description: "Ville sainte et première capitale de l'Ifriqiya",
      highlights: ["Grande Mosquée", "Médina UNESCO", "Bassins des Aghlabides"],
      icon: "🕌",
      color: "var(--tunisia-blue)",
      image: kairouanImage
    },
    {
      id: 2,
      name: "Tabarka",
      description: "Perle de la côte nord aux eaux cristallines",
      highlights: ["Plages de corail", "Fort génois", "Festival de jazz"],
      icon: "🏖️",
      color: "var(--tunisia-sunset)",
      image: tabarkaImage
    },
    {
      id: 3,
      name: "Sousse",
      description: "Perle du Sahel aux trésors archéologiques",
      highlights: ["Médina fortifiée", "Ribat de Sousse", "Port de plaisance"],
      icon: "⛵",
      color: "var(--tunisia-gold)",
      image: sousseImage
    },
    {
      id: 4,
      name: "Tunis & Carthage",
      description: "Découvrez la capitale et les vestiges de l'antique Carthage",
      highlights: ["Médina de Tunis", "Musée du Bardo", "Sidi Bou Saïd"],
      icon: "🏛️",
      color: "var(--tunisia-red)",
      image: tunisImage
    },
    {
      id: 5,
      name: "Djerba",
      description: "L'île paradisiaque aux plages de sable fin",
      highlights: ["Plages dorées", "Synagogue de la Ghriba", "Artisanat local"],
      icon: "🏝️",
      color: "var(--tunisia-blue)",
      image: djerbaImage
    },
    {
      id: 6,
      name: "Sahara",
      description: "Aventure dans le plus grand désert du monde",
      highlights: ["Dunes de Erg Chebbi", "Oasis de montagne", "Nuits étoilées"],
      icon: "🐪",
      color: "var(--tunisia-sunset)",
      image: saharaImage
    },
    {
      id: 7,
      name: "Hammamet",
      description: "Station balnéaire réputée et jardins luxuriants",
      highlights: ["Médina historique", "Plages méditerranéennes", "Centres de thalasso"],
      icon: "🌊",
      color: "var(--tunisia-gold)",
      image: hammametImage
    }
  ];

  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <div className="destinations-title-container">
              <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
              <div className="title-overlay">
                <h2>Destinations Incontournables</h2>
                <p>Explorez les merveilles de la Tunisie, de la méditerranée au désert</p>
              </div>
            </div>
          </div>
        )}

        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="destination-card fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-image">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="destination-img"
                />
                <div className="image-overlay">
                  <div 
                    className="destination-icon"
                    style={{ backgroundColor: destination.color }}
                  >
                    {destination.icon}
                  </div>
                </div>
              </div>
              
              <div className="card-header">
                <h3>{destination.name}</h3>
              </div>
              
              <div className="card-content">
                <p className="card-description">{destination.description}</p>
                
                <div className="highlights">
                  <h4>À ne pas manquer :</h4>
                  <ul>
                    {destination.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet">✦</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-footer">
                <button className="btn-explore">
                  Explorer
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-cta text-center">
          <h3>Prêt pour l'aventure ?</h3>
          <p>Planifiez votre voyage sur mesure avec nos experts locaux</p>
          <a href="#contact" className="btn btn-primary">
            Planifier mon voyage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
