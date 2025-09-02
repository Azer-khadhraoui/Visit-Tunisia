import React from 'react';
import { Link } from 'react-router-dom';
import './SaharaPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import saharaImage from '../assets/sahara.jpg';
import matmataImage from '../assets/saharamatmata.jpg';
// @ts-ignore
import tozeurImage from '../assets/tozeur sahara.jpg';
import starwarsImage from '../assets/starwarssahara.webp';
import flagImage from '../assets/Flag.png';

const SaharaPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Sahara",
      heroSubtitle: "Le Grand Désert Mystique",
      introTitle: "Le Grand Désert Mystique",
      introParagraph1: "Le Sahara tunisien offre une expérience inoubliable dans l'un des déserts les plus mythiques de la planète. Entre dunes dorées, oasis verdoyantes et villages troglodytes, cette région révèle des paysages d'une beauté saisissante et une culture millénaire préservée.",
      introParagraph2: "Des étendues infinies du Grand Erg Oriental aux palmeraies luxuriantes de Tozeur, en passant par les maisons souterraines de Matmata immortalisées par Star Wars, le Sahara tunisien est une terre d'aventure et de contemplation où le temps semble suspendu.",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Explorez les merveilles du plus grand désert du monde",
      highlightsLabel: "Points forts",
      historyLabel: "Histoire",
      practicalInfoLabel: "Informations pratiques",
      practicalInfoTitle: "Préparez votre aventure",
      ctaTitle: "Partez à l'aventure dans le Sahara",
      ctaSubtitle: "Vivez une expérience unique dans le plus grand désert du monde",
      otherDestinationsBtn: "Autres destinations",
      attractions: [
        {
          id: 1,
          name: "Dunes du Grand Erg Oriental",
          description: "Immenses étendues de sable doré, paysages lunaires et silence absolu du désert",
          image: saharaImage,
          highlights: [
            "Dunes pouvant atteindre 200m",
            "Couchers de soleil spectaculaires",
            "Randonnées chamelières",
            "Nuits sous les étoiles"
          ],
          history: "Le Grand Erg Oriental est l'une des formations dunaires les plus impressionnantes du Sahara, façonnée par des millénaires d'érosion éolienne.",
          visitInfo: "Excursions guidées recommandées. Meilleure période : octobre à avril."
        },
        {
          id: 2,
          name: "Matmata et Maisons Troglodytes",
          description: "Villages berbères souterrains, habitat traditionnel creusé dans le sol calcaire",
          image: matmataImage,
          highlights: [
            "Maisons souterraines uniques",
            "Culture berbère authentique",
            "Décors de Star Wars",
            "Musée des traditions"
          ],
          history: "Depuis des siècles, les Berbères de Matmata ont creusé leurs habitations dans le sol pour se protéger des conditions climatiques extrêmes.",
          visitInfo: "Visites guidées des maisons traditionnelles. Possibilité de séjourner chez l'habitant."
        },
        {
          id: 3,
          name: "Tozeur et Palmeraies",
          description: "Oasis verdoyante aux 200 000 palmiers, joyau architectural du sud tunisien",
          image: tozeurImage,
          highlights: [
            "200 000 palmiers dattiers",
            "Architecture en briques vernissées",
            "Marché aux dattes authentique",
            "Sources chaudes naturelles"
          ],
          history: "Tozeur, ancienne étape caravanière, est réputée pour ses dattes Deglet Nour et son architecture unique en briques vernissées jaunes.",
          visitInfo: "Visites en calèche dans les palmeraies. Dégustations de dattes fraîches."
        },
        {
          id: 4,
          name: "Décors de Star Wars",
          description: "Lieux de tournage légendaires de la saga, paysages de la planète Tatooine",
          image: starwarsImage,
          highlights: [
            "Décors originaux conservés",
            "Planète Tatooine",
            "Mos Espa et Mos Eisley",
            "Expérience cinématographique"
          ],
          history: "La Tunisie a servi de décor à plusieurs épisodes de Star Wars, transformant le désert en planète Tatooine avec ses décors iconiques.",
          visitInfo: "Circuits thématiques Star Wars disponibles. Guides spécialisés recommandés."
        }
      ],
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "450 km de Tunis vers Tozeur",
            "Vol direct Tunis-Tozeur (1h)",
            "4x4 recommandé pour le désert",
            "Excursions organisées disponibles"
          ]
        },
        climate: {
          title: "Climat extrême",
          items: [
            "Jour : 35-45°C (été)",
            "Nuit : 5-15°C (hiver)",
            "Octobre-avril : période idéale",
            "Très faible humidité"
          ]
        },
        equipment: {
          title: "Équipement essentiel",
          items: [
            "Protection solaire maximale",
            "Vêtements couvrants",
            "Réserves d'eau importantes",
            "Lunettes et foulard anti-sable"
          ]
        },
        pricing: {
          title: "Tarifs et excursions",
          items: [
            "Safari 1 jour : 80-120 TND",
            "Bivouac 2j/1n : 200-300 TND",
            "Circuit Star Wars : 150 TND",
            "Guide obligatoire dans le désert"
          ]
        }
      }
    },
    en: {
      heroTitle: "Sahara",
      heroSubtitle: "The Great Mystical Desert",
      introTitle: "The Great Mystical Desert",
      introParagraph1: "The Tunisian Sahara offers an unforgettable experience in one of the planet's most mythical deserts. Between golden dunes, verdant oases and troglodyte villages, this region reveals landscapes of striking beauty and a preserved millenary culture.",
      introParagraph2: "From the infinite expanses of the Grand Erg Oriental to the lush palm groves of Tozeur, through the underground houses of Matmata immortalized by Star Wars, the Tunisian Sahara is a land of adventure and contemplation where time seems suspended.",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Explore the wonders of the world's largest desert",
      highlightsLabel: "Highlights",
      historyLabel: "History",
      practicalInfoLabel: "Practical information",
      practicalInfoTitle: "Prepare Your Adventure",
      ctaTitle: "Embark on a Sahara Adventure",
      ctaSubtitle: "Experience the world's largest desert like never before",
      otherDestinationsBtn: "Other destinations",
      attractions: [
        {
          id: 1,
          name: "Grand Erg Oriental Dunes",
          description: "Immense expanses of golden sand, lunar landscapes and absolute silence of the desert",
          image: saharaImage,
          highlights: [
            "Dunes up to 200m high",
            "Spectacular sunsets",
            "Camel trekking",
            "Nights under the stars"
          ],
          history: "The Grand Erg Oriental is one of the most impressive dune formations in the Sahara, shaped by millennia of wind erosion.",
          visitInfo: "Guided excursions recommended. Best period: October to April."
        },
        {
          id: 2,
          name: "Matmata and Troglodyte Houses",
          description: "Underground Berber villages, traditional habitat carved into limestone soil",
          image: matmataImage,
          highlights: [
            "Unique underground houses",
            "Authentic Berber culture",
            "Star Wars filming locations",
            "Museum of traditions"
          ],
          history: "For centuries, the Berbers of Matmata have carved their dwellings into the ground to protect themselves from extreme climatic conditions.",
          visitInfo: "Guided tours of traditional houses. Possibility to stay with locals."
        },
        {
          id: 3,
          name: "Tozeur and Palm Groves",
          description: "Verdant oasis with 200,000 palm trees, architectural jewel of southern Tunisia",
          image: tozeurImage,
          highlights: [
            "200,000 date palms",
            "Glazed brick architecture",
            "Authentic date market",
            "Natural hot springs"
          ],
          history: "Tozeur, former caravan stop, is renowned for its Deglet Nour dates and unique yellow glazed brick architecture.",
          visitInfo: "Horse-drawn carriage tours in palm groves. Fresh date tastings."
        },
        {
          id: 4,
          name: "Star Wars Film Sets",
          description: "Legendary filming locations of the saga, landscapes of planet Tatooine",
          image: starwarsImage,
          highlights: [
            "Preserved original sets",
            "Planet Tatooine",
            "Mos Espa and Mos Eisley",
            "Cinematic experience"
          ],
          history: "Tunisia served as the backdrop for several Star Wars episodes, transforming the desert into planet Tatooine with its iconic sets.",
          visitInfo: "Star Wars themed tours available. Specialized guides recommended."
        }
      ],
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "450 km from Tunis to Tozeur",
            "Direct flight Tunis-Tozeur (1h)",
            "4x4 recommended for desert",
            "Organized excursions available"
          ]
        },
        climate: {
          title: "Extreme climate",
          items: [
            "Day: 35-45°C (summer)",
            "Night: 5-15°C (winter)",
            "October-April: ideal period",
            "Very low humidity"
          ]
        },
        equipment: {
          title: "Essential equipment",
          items: [
            "Maximum sun protection",
            "Covering clothing",
            "Important water reserves",
            "Sunglasses and anti-sand scarf"
          ]
        },
        pricing: {
          title: "Rates and excursions",
          items: [
            "1-day safari: 80-120 TND",
            "2d/1n bivouac: 200-300 TND",
            "Star Wars circuit: 150 TND",
            "Guide mandatory in desert"
          ]
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className="sahara-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="sahara-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={saharaImage} alt="Désert du Sahara" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="sahara-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>{t.introTitle}</h2>
              <p>{t.introParagraph1}</p>
              <p>{t.introParagraph2}</p>
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
            <h2>{t.attractionsTitle}</h2>
            <p>{t.attractionsSubtitle}</p>
          </div>

          <div className="attractions-grid">
            {t.attractions.map((attraction, index) => (
              <div key={attraction.id} className="attraction-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-image">
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="card-overlay">
                    <h3>{attraction.name}</h3>
                  </div>
                </div>
                
                <div className="card-content">
                  <p className="description">{attraction.description}</p>
                  
                  <h4>{t.highlightsLabel}</h4>
                  <ul className="highlights-list">
                    {attraction.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  
                  <h4>{t.historyLabel}</h4>
                  <p className="history-text">{attraction.history}</p>
                  
                  <h4>{t.practicalInfoLabel}</h4>
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
          <h2>{t.practicalInfoTitle}</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>{t.practicalInfo.transport.title}</h3>
              <ul>
                {t.practicalInfo.transport.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌡️</div>
              <h3>{t.practicalInfo.climate.title}</h3>
              <ul>
                {t.practicalInfo.climate.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎒</div>
              <h3>{t.practicalInfo.equipment.title}</h3>
              <ul>
                {t.practicalInfo.equipment.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>{t.practicalInfo.pricing.title}</h3>
              <ul>
                {t.practicalInfo.pricing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaSubtitle}</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="btn btn-primary">
              {t.otherDestinationsBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaharaPage;
