import React from 'react';
import { Link } from 'react-router-dom';
import './HammametPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import kasbahImage from '../assets/kasbahhammamet.jpg';
import beachImage from '../assets/hammametplage.webp';
import medinaImage from '../assets/medinahammamet.jpg';
import marinaImage from '../assets/marina hammamet.jpg';
import flagImage from '../assets/Flag.png';

const HammametPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Hammamet",
      heroSubtitle: "Perle du Golfe de Tunis",
      introTitle: "La Perle du Golfe de Tunis",
      introParagraph1: "Hammamet, surnommée \"la perle du golfe de Tunis\", est l'une des stations balnéaires les plus prisées de Tunisie. Cette charmante ville côtière allie parfaitement tradition et modernité, offrant aux visiteurs des plages de sable fin, une médina authentique et une infrastructure touristique de qualité.",
      introParagraph2: "Réputée pour ses jardins d'agrumes parfumés, ses eaux cristallines et son patrimoine historique, Hammamet a su préserver son charme méditerranéen tout en développant une offre touristique moderne. La ville est également célèbre pour son festival international d'art dramatique et ses spas de thalassothérapie.",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Découvrez les merveilles balnéaires et historiques de Hammamet",
      highlightsLabel: "Points forts",
      historyLabel: "Histoire",
      visitInfoLabel: "Informations pratiques",
      attractions: [
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
      ],
      practicalInfoTitle: "Préparez votre visite",
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "60 km de Tunis (1h de route)",
            "15 km de l'aéroport Enfidha",
            "Liaisons bus et louages",
            "Train jusqu'à Bir Bouregba puis bus"
          ]
        },
        season: {
          title: "Saison balnéaire",
          items: [
            "Mai à octobre (mer chaude)",
            "Juin-septembre (haute saison)",
            "Avril et novembre (doux)",
            "Hiver : thalassothérapie"
          ]
        },
        activities: {
          title: "Activités",
          items: [
            "Sports nautiques",
            "Golf (parcours 18 trous)",
            "Thalassothérapie",
            "Excursions en mer"
          ]
        },
        tickets: {
          title: "Billets et tarifs",
          items: [
            "Kasbah : Entrée gratuite",
            "Plages : Accès libre",
            "Marina : Accès libre",
            "Musées : 2-5 TND"
          ]
        }
      },
      ctaTitle: "Planifiez votre séjour à Hammamet",
      ctaSubtitle: "Découvrez la magie de la perle du golfe de Tunis",
      otherDestinationsBtn: "Autres destinations"
    },
    en: {
      heroTitle: "Hammamet",
      heroSubtitle: "Pearl of the Gulf of Tunis",
      introTitle: "The Pearl of the Gulf of Tunis",
      introParagraph1: "Hammamet, nicknamed \"the pearl of the gulf of Tunis\", is one of Tunisia's most popular seaside resorts. This charming coastal town perfectly combines tradition and modernity, offering visitors fine sandy beaches, an authentic medina and quality tourist infrastructure.",
      introParagraph2: "Renowned for its fragrant citrus gardens, crystal-clear waters and historical heritage, Hammamet has preserved its Mediterranean charm while developing a modern tourist offer. The city is also famous for its international festival of dramatic arts and its thalassotherapy spas.",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Discover the seaside and historical wonders of Hammamet",
      highlightsLabel: "Highlights",
      historyLabel: "History",
      visitInfoLabel: "Practical information",
      attractions: [
        {
          id: 1,
          name: "Kasbah of Hammamet",
          description: "15th century fortress overlooking the sea, historic symbol of the city",
          image: kasbahImage,
          highlights: [
            "15th century fortification",
            "Panoramic sea view",
            "Authentic military architecture",
            "Museum of popular traditions"
          ],
          history: "Built in the 15th century by the Hafsids, this kasbah defended Hammamet against invasions. It now houses a museum of traditions.",
          visitInfo: "Open daily. Breathtaking view of the medina and sea."
        },
        {
          id: 2,
          name: "Hammamet Beaches",
          description: "Stretches of fine sand bordered by crystal-clear waters, Tunisia's seaside paradise",
          image: beachImage,
          highlights: [
            "Fine golden sand",
            "Crystal-clear waters",
            "Water sports",
            "Seaside restaurants"
          ],
          history: "Hammamet's beaches have made the city's tourist reputation since the 1960s, attracting visitors from around the world.",
          visitInfo: "Free access year-round. Parasols and deckchairs available."
        },
        {
          id: 3,
          name: "Hammamet Medina",
          description: "Authentic historic center with its white alleys and colorful souks",
          image: medinaImage,
          highlights: [
            "Traditional architecture",
            "Artisan souks",
            "Traditional cafes",
            "Historic ramparts"
          ],
          history: "Hammamet's medina preserves its old-world charm with its white and blue houses typical of Tunisian architectural style.",
          visitInfo: "Freely accessible. Ideal for shopping and cultural discovery."
        },
        {
          id: 4,
          name: "Hammamet Marina",
          description: "Modern marina with restaurants, shops and entertainment",
          image: marinaImage,
          highlights: [
            "Modern marina",
            "Gourmet restaurants",
            "Luxury boutiques",
            "Night entertainment"
          ],
          history: "Developed in the 2000s, the marina modernized Hammamet's tourist offer while respecting local identity.",
          visitInfo: "Open 24/7. Numerous activities and restaurants."
        }
      ],
      practicalInfoTitle: "Prepare your visit",
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "60 km from Tunis (1h drive)",
            "15 km from Enfidha airport",
            "Bus and louage connections",
            "Train to Bir Bouregba then bus"
          ]
        },
        season: {
          title: "Beach season",
          items: [
            "May to October (warm sea)",
            "June-September (high season)",
            "April and November (mild)",
            "Winter: thalassotherapy"
          ]
        },
        activities: {
          title: "Activities",
          items: [
            "Water sports",
            "Golf (18-hole course)",
            "Thalassotherapy",
            "Sea excursions"
          ]
        },
        tickets: {
          title: "Tickets and prices",
          items: [
            "Kasbah: Free entry",
            "Beaches: Free access",
            "Marina: Free access",
            "Museums: 2-5 TND"
          ]
        }
      },
      ctaTitle: "Plan your stay in Hammamet",
      ctaSubtitle: "Discover the magic of the pearl of the gulf of Tunis",
      otherDestinationsBtn: "Other destinations"
    }
  };

  const t = translations[language];

  return (
    <div className="hammamet-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="hammamet-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={beachImage} alt="Plages de Hammamet" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="hammamet-intro section-padding">
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
                  
                  <h4>{t.visitInfoLabel}</h4>
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
              <div className="info-icon">🌊</div>
              <h3>{t.practicalInfo.season.title}</h3>
              <ul>
                {t.practicalInfo.season.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🏖️</div>
              <h3>{t.practicalInfo.activities.title}</h3>
              <ul>
                {t.practicalInfo.activities.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>{t.practicalInfo.tickets.title}</h3>
              <ul>
                {t.practicalInfo.tickets.items.map((item, index) => (
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

export default HammametPage;
