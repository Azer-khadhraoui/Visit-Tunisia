import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';
import { useLanguage } from '../contexts/LanguageContext';
import flagImage from '../assets/Flag.png';
import kairouanImage from '../assets/okba.jpg';
import tabarkaImage from '../assets/tabarka.jpg';
import sousseImage from '../assets/sousse.jpg';
import tunisImage from '../assets/tunis.webp';
import djerbaImage from '../assets/djerba.jpg';
import saharaImage from '../assets/sahara.jpg';
import hammametImage from '../assets/hammamet.jpeg';
// @ts-ignore
import bizerteImage from '../assets/vieuportbizerte.webp';
// @ts-ignore
import mahdiaImage from '../assets/plagemahdia.jpg';

interface DestinationsProps {
  showHeader?: boolean;
}

const Destinations: React.FC<DestinationsProps> = ({ showHeader = true }) => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      headerTitle: "Destinations Incontournables",
      headerSubtitle: "Explorez les merveilles de la Tunisie, de la méditerranée au désert",
      highlightsLabel: "À ne pas manquer :",
      exploreBtn: "Explorer",
      ctaTitle: "Explorez la Tunisie",
      ctaSubtitle: "Des milliers d'années d'histoire vous attendent dans chaque destination",
      destinations: [
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
          name: "Mahdia",
          description: "Perle du Sahel et berceau de la dynastie fatimide",
          highlights: ["Grande Mosquée fatimide", "Borj El Kebir", "Skifa Kahla", "Plages dorées"],
          icon: "🏛️",
          color: "var(--tunisia-gold)",
          image: mahdiaImage
        },
        {
          id: 4,
          name: "Sousse",
          description: "Perle du Sahel aux trésors archéologiques",
          highlights: ["Médina fortifiée", "Ribat de Sousse", "Port de plaisance"],
          icon: "⛵",
          color: "var(--tunisia-gold)",
          image: sousseImage
        },
        {
          id: 5,
          name: "Tunis & Carthage",
          description: "Découvrez la capitale et les vestiges de l'antique Carthage",
          highlights: ["Médina de Tunis", "Musée du Bardo", "Sidi Bou Saïd"],
          icon: "🏛️",
          color: "var(--tunisia-red)",
          image: tunisImage
        },
        {
          id: 6,
          name: "Djerba",
          description: "L'île paradisiaque aux plages de sable fin",
          highlights: ["Plages dorées", "Synagogue de la Ghriba", "Artisanat local"],
          icon: "🏝️",
          color: "var(--tunisia-blue)",
          image: djerbaImage
        },
        {
          id: 7,
          name: "Sahara",
          description: "Aventure dans le plus grand désert du monde",
          highlights: ["Dunes de Erg Chebbi", "Oasis de montagne", "Nuits étoilées"],
          icon: "🐪",
          color: "var(--tunisia-sunset)",
          image: saharaImage
        },
        {
          id: 8,
          name: "Hammamet",
          description: "Station balnéaire réputée et jardins luxuriants",
          highlights: ["Médina historique", "Plages méditerranéennes", "Centres de thalasso"],
          icon: "🌊",
          color: "var(--tunisia-gold)",
          image: hammametImage
        },
        {
          id: 9,
          name: "Bizerte",
          description: "Perle du nord entre lac et méditerranée",
          highlights: ["Vieux port", "Corniche pittoresque", "Fort d'Espagne", "Lac de Bizerte"],
          icon: "⚓",
          color: "var(--tunisia-blue)",
          image: bizerteImage
        }
      ]
    },
    en: {
      headerTitle: "Must-See Destinations",
      headerSubtitle: "Explore the wonders of Tunisia, from the Mediterranean to the desert",
      highlightsLabel: "Not to be missed:",
      exploreBtn: "Explore",
      ctaTitle: "Explore Tunisia",
      ctaSubtitle: "Thousands of years of history await you in each destination",
      destinations: [
        {
          id: 1,
          name: "Kairouan",
          description: "Holy city and first capital of Ifriqiya",
          highlights: ["Great Mosque", "UNESCO Medina", "Aghlabid Basins"],
          icon: "🕌",
          color: "var(--tunisia-blue)",
          image: kairouanImage
        },
        {
          id: 2,
          name: "Tabarka",
          description: "Pearl of the north coast with crystalline waters",
          highlights: ["Coral beaches", "Genoese fort", "Jazz festival"],
          icon: "🏖️",
          color: "var(--tunisia-sunset)",
          image: tabarkaImage
        },
        {
          id: 3,
          name: "Mahdia",
          description: "Pearl of Sahel and cradle of the Fatimid dynasty",
          highlights: ["Great Fatimid Mosque", "Borj El Kebir", "Skifa Kahla", "Golden beaches"],
          icon: "🏛️",
          color: "var(--tunisia-gold)",
          image: mahdiaImage
        },
        {
          id: 4,
          name: "Sousse",
          description: "Pearl of Sahel with archaeological treasures",
          highlights: ["Fortified medina", "Sousse Ribat", "Marina"],
          icon: "⛵",
          color: "var(--tunisia-gold)",
          image: sousseImage
        },
        {
          id: 5,
          name: "Tunis & Carthage",
          description: "Discover the capital and the remains of ancient Carthage",
          highlights: ["Tunis Medina", "Bardo Museum", "Sidi Bou Said"],
          icon: "🏛️",
          color: "var(--tunisia-red)",
          image: tunisImage
        },
        {
          id: 6,
          name: "Djerba",
          description: "Paradise island with fine sandy beaches",
          highlights: ["Golden beaches", "Ghriba Synagogue", "Local crafts"],
          icon: "🏝️",
          color: "var(--tunisia-blue)",
          image: djerbaImage
        },
        {
          id: 7,
          name: "Sahara",
          description: "Adventure in the world's largest desert",
          highlights: ["Erg Chebbi dunes", "Mountain oases", "Starry nights"],
          icon: "🐪",
          color: "var(--tunisia-sunset)",
          image: saharaImage
        },
        {
          id: 8,
          name: "Hammamet",
          description: "Famous seaside resort with lush gardens",
          highlights: ["Historic medina", "Mediterranean beaches", "Thalasso centers"],
          icon: "🌊",
          color: "var(--tunisia-gold)",
          image: hammametImage
        },
        {
          id: 9,
          name: "Bizerte",
          description: "Pearl of the north between lake and Mediterranean",
          highlights: ["Old port", "Picturesque corniche", "Fort of Spain", "Bizerte Lake"],
          icon: "⚓",
          color: "var(--tunisia-blue)",
          image: bizerteImage
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        {showHeader && (
          <div className="section-header text-center">
            <div className="destinations-title-container">
              <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
              <div className="title-overlay">
                <h2>{t.headerTitle}</h2>
                <p>{t.headerSubtitle}</p>
              </div>
            </div>
          </div>
        )}

        <div className="destinations-grid">
          {t.destinations.map((destination, index) => (
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
                  <h4>{t.highlightsLabel}</h4>
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
                {destination.name === "Kairouan" ? (
                  <Link to="/destinations/kairouan" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Hammamet" ? (
                  <Link to="/destinations/hammamet" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Tabarka" ? (
                  <Link to="/destinations/tabarka" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Djerba" ? (
                  <Link to="/destinations/djerba" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Sahara" ? (
                  <Link to="/destinations/sahara" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Sousse" ? (
                  <Link to="/destinations/sousse" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Tunis & Carthage" ? (
                  <Link to="/destinations/tunis" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Bizerte" ? (
                  <Link to="/destinations/bizerte" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : destination.name === "Mahdia" ? (
                  <Link to="/destinations/mahdia" className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </Link>
                ) : (
                  <button className="btn-explore">
                    {t.exploreBtn}
                    <span className="arrow">→</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-cta text-center">
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaSubtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
