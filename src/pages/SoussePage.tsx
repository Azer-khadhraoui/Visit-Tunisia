import React from 'react';
import { Link } from 'react-router-dom';
import './SoussePage.css';
import { useLanguage } from '../contexts/LanguageContext';
import sousseImage from '../assets/sousse.jpg';
import medinaImage from '../assets/medinasousse.jpg';
import ribatImage from '../assets/ribatsousse.webp';
import cornichImage from '../assets/cornichesousse.jpg';
import kantaouiImage from '../assets/portkantaouisousse.jpg';
import mallImage from '../assets/mallofsousse.jpg';
import flagImage from '../assets/Flag.png';

const SoussePage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Sousse",
      heroSubtitle: "Perle du Sahel tunisien, station balnéaire alliant patrimoine historique et plaisirs modernes",
      introTitle: "Perle du Sahel Tunisien",
      introParagraph1: "Sousse, troisième ville de Tunisie, est une destination qui allie parfaitement patrimoine historique et tourisme balnéaire moderne. Surnommée \"la perle du Sahel\", elle séduit par sa médina classée UNESCO, ses plages dorées et sa vie nocturne animée.",
      introParagraph2: "De son ribat millénaire à ses complexes hôteliers ultramodernes, en passant par sa corniche animée et la luxueuse marina de Port El Kantaoui, Sousse offre une expérience complète entre culture, détente et divertissement. C'est la destination idéale pour découvrir l'art de vivre tunisien.",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Découvrez les trésors historiques et balnéaires de Sousse",
      highlightsLabel: "Points forts",
      historyLabel: "Histoire",
      practicalInfoLabel: "Informations pratiques",
      practicalInfoTitle: "Préparez votre séjour",
      ctaTitle: "Découvrez la perle du Sahel",
      ctaSubtitle: "Vivez l'expérience unique de Sousse entre mer et histoire",
      otherDestinationsBtn: "Autres destinations",
      attractions: [
        {
          id: 1,
          name: "Médina de Sousse",
          description: "Centre historique classé UNESCO, joyau architectural des dynasties aghlabide et fatimide",
          image: medinaImage,
          highlights: [
            "Patrimoine UNESCO depuis 1988",
            "Architecture islamique authentique",
            "Souks traditionnels animés",
            "Remparts du 9ème siècle"
          ],
          history: "Fondée au 9ème siècle, la médina de Sousse est un exemple exceptionnel d'architecture militaire et religieuse de l'art arabo-musulman.",
          visitInfo: "Ouverte tous les jours. Visite guidée recommandée pour découvrir l'histoire."
        },
        {
          id: 2,
          name: "Ribat de Sousse",
          description: "Monastère-forteresse du 8ème siècle, monument emblématique de l'architecture militaire islamique",
          image: ribatImage,
          highlights: [
            "Construit en 821 après J.-C.",
            "Tour de guet de 30 mètres",
            "Architecture militaire unique",
            "Vue panoramique sur la ville"
          ],
          history: "Le Ribat de Sousse est l'un des mieux conservés au monde. Ces monastères-forteresses servaient à la fois de lieux de prière et de défense.",
          visitInfo: "Entrée gratuite. Montée au sommet de la tour recommandée pour la vue."
        },
        {
          id: 3,
          name: "Corniche de Sousse",
          description: "Boulevard maritime animé, cœur de la vie nocturne et des loisirs balnéaires",
          image: cornichImage,
          highlights: [
            "Promenade en bord de mer",
            "Restaurants et cafés",
            "Vie nocturne animée",
            "Plages urbaines"
          ],
          history: "La corniche moderne de Sousse s'étend sur plusieurs kilomètres et constitue le centre névralgique du tourisme balnéaire tunisien.",
          visitInfo: "Accessible 24h/24. Nombreuses activités de jour comme de nuit."
        },
        {
          id: 4,
          name: "Port El Kantaoui",
          description: "Marina de luxe aux influences andalouses, station balnéaire haut de gamme",
          image: kantaouiImage,
          highlights: [
            "Architecture andalouse moderne",
            "Marina de 340 places",
            "Golf 36 trous",
            "Complexes hôteliers de luxe"
          ],
          history: "Créé dans les années 1980, Port El Kantaoui est une station touristique intégrée conçue dans un style architectural andalou-mauresque.",
          visitInfo: "Accès libre à la marina. Nombreuses activités nautiques et terrestres."
        }
      ],
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "140 km de Tunis (1h30 de route)",
            "Aéroport Monastir à 20 km",
            "Train direct depuis Tunis",
            "Nombreuses liaisons bus"
          ]
        },
        timing: {
          title: "Meilleure période",
          items: [
            "Mai-octobre : saison balnéaire",
            "Avril et novembre : temps idéal",
            "Hiver : doux, parfait pour visites",
            "300 jours de soleil par an"
          ]
        },
        activities: {
          title: "Activités",
          items: [
            "Farniente sur les plages",
            "Sports nautiques variés",
            "Golf à Port El Kantaoui",
            "Vie nocturne animée"
          ]
        },
        pricing: {
          title: "Billets et tarifs",
          items: [
            "Médina : Accès libre",
            "Ribat : Entrée gratuite",
            "Musées : 5-8 TND",
            "Plages : Accès libre"
          ]
        }
      }
    },
    en: {
      heroTitle: "Sousse",
      heroSubtitle: "Pearl of the Tunisian Sahel, seaside resort combining historical heritage and modern pleasures",
      introTitle: "Pearl of the Tunisian Sahel",
      introParagraph1: "Sousse, Tunisia's third city, is a destination that perfectly combines historical heritage and modern beach tourism. Nicknamed \"the pearl of the Sahel\", it captivates with its UNESCO-listed medina, golden beaches and lively nightlife.",
      introParagraph2: "From its millenary ribat to its ultra-modern hotel complexes, through its lively corniche and the luxurious Port El Kantaoui marina, Sousse offers a complete experience between culture, relaxation and entertainment. It's the ideal destination to discover the Tunisian way of life.",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Discover the historical and seaside treasures of Sousse",
      highlightsLabel: "Highlights",
      historyLabel: "History",
      practicalInfoLabel: "Practical information",
      practicalInfoTitle: "Plan Your Stay",
      ctaTitle: "Discover the Pearl of the Sahel",
      ctaSubtitle: "Experience unique Sousse between sea and history",
      otherDestinationsBtn: "Other destinations",
      attractions: [
        {
          id: 1,
          name: "Sousse Medina",
          description: "UNESCO World Heritage historic center, architectural jewel of the Aghlabid and Fatimid dynasties",
          image: medinaImage,
          highlights: [
            "UNESCO Heritage since 1988",
            "Authentic Islamic architecture",
            "Lively traditional souks",
            "9th century ramparts"
          ],
          history: "Founded in the 9th century, Sousse medina is an exceptional example of military and religious architecture of Arab-Muslim art.",
          visitInfo: "Open daily. Guided tour recommended to discover the history."
        },
        {
          id: 2,
          name: "Sousse Ribat",
          description: "8th century monastery-fortress, emblematic monument of Islamic military architecture",
          image: ribatImage,
          highlights: [
            "Built in 821 AD",
            "30-meter watchtower",
            "Unique military architecture",
            "Panoramic view of the city"
          ],
          history: "The Sousse Ribat is one of the best preserved in the world. These fortress-monasteries served both as places of prayer and defense.",
          visitInfo: "Free entrance. Climbing to the top of the tower recommended for the view."
        },
        {
          id: 3,
          name: "Sousse Corniche",
          description: "Lively maritime boulevard, heart of nightlife and seaside leisure",
          image: cornichImage,
          highlights: [
            "Seaside promenade",
            "Restaurants and cafes",
            "Lively nightlife",
            "Urban beaches"
          ],
          history: "Sousse's modern corniche extends over several kilometers and constitutes the nerve center of Tunisian beach tourism.",
          visitInfo: "Accessible 24/7. Many day and night activities."
        },
        {
          id: 4,
          name: "Port El Kantaoui",
          description: "Luxury marina with Andalusian influences, upscale seaside resort",
          image: kantaouiImage,
          highlights: [
            "Modern Andalusian architecture",
            "340-berth marina",
            "36-hole golf course",
            "Luxury hotel complexes"
          ],
          history: "Created in the 1980s, Port El Kantaoui is an integrated tourist resort designed in Andalusian-Moorish architectural style.",
          visitInfo: "Free access to marina. Many nautical and terrestrial activities."
        }
      ],
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "140 km from Tunis (1h30 drive)",
            "Monastir Airport 20 km away",
            "Direct train from Tunis",
            "Many bus connections"
          ]
        },
        timing: {
          title: "Best time",
          items: [
            "May-October: beach season",
            "April and November: ideal weather",
            "Winter: mild, perfect for visits",
            "300 days of sunshine per year"
          ]
        },
        activities: {
          title: "Activities",
          items: [
            "Lounging on beaches",
            "Various water sports",
            "Golf at Port El Kantaoui",
            "Lively nightlife"
          ]
        },
        pricing: {
          title: "Tickets and rates",
          items: [
            "Medina: Free access",
            "Ribat: Free entrance",
            "Museums: 5-8 TND",
            "Beaches: Free access"
          ]
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className="sousse-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="sousse-title-container" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${cornichImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="sousse-intro section-padding">
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
              <div className="info-icon">🚄</div>
              <h3>{t.practicalInfo.transport.title}</h3>
              <ul>
                {t.practicalInfo.transport.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌞</div>
              <h3>{t.practicalInfo.timing.title}</h3>
              <ul>
                {t.practicalInfo.timing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>{t.practicalInfo.activities.title}</h3>
              <ul>
                {t.practicalInfo.activities.items.map((item, index) => (
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

export default SoussePage;
