import React from 'react';
import { Link } from 'react-router-dom';
import './TunisPage.css';
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import heroImage from '../assets/tunis.webp';
// @ts-ignore
import flagImage from '../assets/Flag.png';
// @ts-ignore
import medinaImage from '../assets/medinatunis.jpg';
// @ts-ignore
import bardoImage from '../assets/museebardotunis.jpg';
// @ts-ignore
import sidiImage from '../assets/Sidi-Bou-Saidtunis.jpg';
// @ts-ignore
import carthageImage from '../assets/carthage.jpg';
// @ts-ignore
import avenueImage from '../assets/avenuehabibborgtunis.jpg';
// @ts-ignore
import lamarsaImage from '../assets/lamarsatunis.jfif';
// @ts-ignore
import clockTowerImage from '../assets/clocktowertunis.jpg';
// @ts-ignore
import busTunisImage from '../assets/bus tunis.jpg';
// @ts-ignore
import taxiImage from '../assets/taxi.jpg';
// @ts-ignore
import goulettaImage from '../assets/lagoulettetunis.jpg';

const TunisPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Tunis",
      heroSubtitle: "Capitale historique et culturelle de la Tunisie, mélange parfait entre tradition et modernité",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "De la médina historique aux vestiges antiques de Carthage",
      highlightsLabel: "Points forts :",
      practicalInfoTitle: "Informations Pratiques",
      accommodationTitle: "Hébergement",
      ctaTitle: "Explorez la capitale historique",
      ctaSubtitle: "Découvrez Tunis et Carthage, berceaux de civilisations millénaires",
      otherDestinationsBtn: "Autres destinations",
      attractions: [
        {
          name: "Médina de Tunis",
          description: "Classée au patrimoine mondial de l'UNESCO, la médina de Tunis est un labyrinthe fascinant de ruelles étroites, de souks colorés et de monuments historiques datant du VIIe siècle.",
          image: medinaImage,
          highlights: ["700 monuments historiques", "Souks traditionnels", "Architecture islamique", "Mosquée Zitouna"]
        },
        {
          name: "Musée du Bardo",
          description: "L'un des plus beaux musées du monde méditerranéen, abritant la plus riche collection de mosaïques romaines au monde dans un somptueux palais beylical du XIXe siècle.",
          image: bardoImage,
          highlights: ["Mosaïques romaines uniques", "Palais beylical", "Art islamique", "Antiquités puniques"]
        },
        {
          name: "Sidi Bou Saïd",
          description: "Village pittoresque perché sur une falaise, célèbre pour ses maisons blanches et bleues, ses cafés mauresques et sa vue imprenable sur le golfe de Tunis.",
          image: sidiImage,
          highlights: ["Architecture andalouse", "Café des Nattes", "Vue panoramique", "Artisanat local"]
        },
        {
          name: "Site de Carthage",
          description: "Découvrez les vestiges de la légendaire Carthage, rival de Rome antique, avec ses thermes, son théâtre romain et ses villas patriciennes face à la Méditerranée.",
          image: carthageImage,
          highlights: ["Thermes d'Antonin", "Musée de Carthage", "Théâtre romain", "Villa romaine"]
        },
        {
          name: "Avenue Habib Bourguiba",
          description: "Artère principale de Tunis, cette avenue emblématique concentre l'activité commerciale et culturelle de la capitale avec ses cafés, théâtres et boutiques.",
          image: avenueImage,
          highlights: ["Théâtre municipal", "Cafés historiques", "Shopping moderne", "Architecture coloniale"]
        },
        {
          name: "Clock Tower - Centre Ville",
          description: "Tour de l'horloge emblématique située au cœur de Tunis, ce monument historique marque l'entrée du centre-ville moderne et symbolise la jonction entre tradition et modernité.",
          image: clockTowerImage,
          highlights: ["Monument historique", "Centre-ville moderne", "Architecture unique", "Point de repère"]
        },
        {
          name: "La Goulette",
          description: "Port historique de Tunis et porte d'entrée maritime de la capitale, La Goulette combine patrimoine ottoman, architecture coloniale et modernité avec ses restaurants de poissons réputés.",
          image: goulettaImage,
          highlights: ["Port historique", "Restaurants de poissons", "Architecture ottomane", "Marina moderne"]
        },
        {
          name: "La Marsa",
          description: "Banlieue chic de Tunis, La Marsa séduit par ses villas cossues, ses plages et sa proximité avec Sidi Bou Saïd et Carthage.",
          image: lamarsaImage,
          highlights: ["Villas de prestige", "Plages privées", "Restaurants gastronomiques", "Vie nocturne"]
        }
      ],
      practicalInfo: {
        transport: {
          title: "Se déplacer",
          items: [
            "Métro léger (TGM) vers Sidi Bou Saïd",
            "Taxi ou louage pour Carthage",
            "Bus urbains dans Tunis",
            "Marche dans la médina"
          ]
        },
        visits: {
          title: "Visites",
          items: [
            "Médina : gratuite, guide recommandé",
            "Musée du Bardo : 11 DT",
            "Site de Carthage : 8 DT",
            "Pass sites multiples disponible"
          ]
        },
        shopping: {
          title: "Shopping",
          items: [
            "Souks de la médina",
            "Avenue Habib Bourguiba",
            "Tunisia Mall",
            "Artisanat de Sidi Bou Saïd"
          ]
        },
        gastronomy: {
          title: "Gastronomie",
          items: [
            "Restaurants de la médina",
            "Cafés de Sidi Bou Saïd",
            "Spécialités : brik, couscous",
            "Pâtisseries orientales"
          ]
        }
      },
      accommodation: {
        luxury: {
          title: "Hôtels de luxe",
          description: "Hôtels 5 étoiles dans le centre-ville et à Gammarth avec vue sur mer",
          items: ["Four Seasons Tunis", "Villa Didon Sidi Bou Saïd", "The Residence Tunis"]
        },
        guesthouses: {
          title: "Maisons d'hôtes",
          description: "Riads authentiques dans la médina et demeures traditionnelles",
          items: ["Dar Ben Gacem", "Villa Bleue Sidi Bou Saïd", "Maisons d'hôtes médina"]
        },
        modern: {
          title: "Hôtels modernes",
          description: "Établissements confortables avec bon rapport qualité-prix",
          items: ["Hôtels centre-ville", "Résidences Gammarth", "Hôtels d'affaires"]
        }
      }
    },
    en: {
      heroTitle: "Tunis",
      heroSubtitle: "Historical and cultural capital of Tunisia, perfect blend between tradition and modernity",
      attractionsTitle: "Must-See Attractions",
      attractionsSubtitle: "From the historic medina to the ancient ruins of Carthage",
      highlightsLabel: "Highlights:",
      practicalInfoTitle: "Practical Information",
      accommodationTitle: "Accommodation",
      ctaTitle: "Explore the Historic Capital",
      ctaSubtitle: "Discover Tunis and Carthage, cradles of ancient civilizations",
      otherDestinationsBtn: "Other destinations",
      attractions: [
        {
          name: "Tunis Medina",
          description: "UNESCO World Heritage Site, Tunis medina is a fascinating labyrinth of narrow streets, colorful souks and historic monuments dating from the 7th century.",
          image: medinaImage,
          highlights: ["700 historic monuments", "Traditional souks", "Islamic architecture", "Zitouna Mosque"]
        },
        {
          name: "Bardo Museum",
          description: "One of the most beautiful museums in the Mediterranean world, housing the world's richest collection of Roman mosaics in a sumptuous 19th-century Beylical palace.",
          image: bardoImage,
          highlights: ["Unique Roman mosaics", "Beylical palace", "Islamic art", "Punic antiquities"]
        },
        {
          name: "Sidi Bou Said",
          description: "Picturesque village perched on a cliff, famous for its white and blue houses, Moorish cafes and breathtaking view over the Gulf of Tunis.",
          image: sidiImage,
          highlights: ["Andalusian architecture", "Café des Nattes", "Panoramic view", "Local crafts"]
        },
        {
          name: "Carthage Site",
          description: "Discover the remains of legendary Carthage, rival of ancient Rome, with its baths, Roman theater and patrician villas facing the Mediterranean.",
          image: carthageImage,
          highlights: ["Antonine Baths", "Carthage Museum", "Roman theater", "Roman villa"]
        },
        {
          name: "Habib Bourguiba Avenue",
          description: "Main artery of Tunis, this emblematic avenue concentrates the commercial and cultural activity of the capital with its cafes, theaters and shops.",
          image: avenueImage,
          highlights: ["Municipal theater", "Historic cafes", "Modern shopping", "Colonial architecture"]
        },
        {
          name: "Clock Tower - City Center",
          description: "Iconic clock tower located in the heart of Tunis, this historic monument marks the entrance to the modern city center and symbolizes the junction between tradition and modernity.",
          image: clockTowerImage,
          highlights: ["Historic monument", "Modern city center", "Unique architecture", "Landmark"]
        },
        {
          name: "La Goulette",
          description: "Historic port of Tunis and maritime gateway to the capital, La Goulette combines Ottoman heritage, colonial architecture and modernity with its renowned fish restaurants.",
          image: goulettaImage,
          highlights: ["Historic port", "Fish restaurants", "Ottoman architecture", "Modern marina"]
        },
        {
          name: "La Marsa",
          description: "Chic suburb of Tunis, La Marsa attracts with its luxurious villas, beaches and proximity to Sidi Bou Said and Carthage.",
          image: lamarsaImage,
          highlights: ["Luxury villas", "Private beaches", "Gourmet restaurants", "Nightlife"]
        }
      ],
      practicalInfo: {
        transport: {
          title: "Getting around",
          items: [
            "Light rail (TGM) to Sidi Bou Said",
            "Taxi or louage to Carthage",
            "Urban buses in Tunis",
            "Walking in the medina"
          ]
        },
        visits: {
          title: "Visits",
          items: [
            "Medina: free, guide recommended",
            "Bardo Museum: 11 DT",
            "Carthage Site: 8 DT",
            "Multi-site pass available"
          ]
        },
        shopping: {
          title: "Shopping",
          items: [
            "Medina souks",
            "Habib Bourguiba Avenue",
            "Tunisia Mall",
            "Sidi Bou Said crafts"
          ]
        },
        gastronomy: {
          title: "Gastronomy",
          items: [
            "Medina restaurants",
            "Sidi Bou Said cafes",
            "Specialties: brik, couscous",
            "Oriental pastries"
          ]
        }
      },
      accommodation: {
        luxury: {
          title: "Luxury hotels",
          description: "5-star hotels in the city center and Gammarth with sea view",
          items: ["Four Seasons Tunis", "Villa Didon Sidi Bou Said", "The Residence Tunis"]
        },
        guesthouses: {
          title: "Guesthouses",
          description: "Authentic riads in the medina and traditional residences",
          items: ["Dar Ben Gacem", "Villa Bleue Sidi Bou Said", "Medina guesthouses"]
        },
        modern: {
          title: "Modern hotels",
          description: "Comfortable establishments with good value for money",
          items: ["City center hotels", "Gammarth residences", "Business hotels"]
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className="tunis-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="tunis-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.attractionsTitle}</h2>
            <p>{t.attractionsSubtitle}</p>
          </div>

          <div className="attractions-grid">
            {t.attractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="attraction-overlay">
                    <h3>{attraction.name}</h3>
                  </div>
                </div>
                <div className="attraction-content">
                  <p>{attraction.description}</p>
                  <div className="highlights">
                    <h4>{t.highlightsLabel}</h4>
                    <ul>
                      {attraction.highlights.map((highlight, idx) => (
                        <li key={idx}>✦ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="practical-info">
        <div className="container">
          <h2>{t.practicalInfoTitle}</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚌</div>
              <h3>{t.practicalInfo.transport.title}</h3>
              <ul>
                {t.practicalInfo.transport.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>{t.practicalInfo.visits.title}</h3>
              <ul>
                {t.practicalInfo.visits.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🛍️</div>
              <h3>{t.practicalInfo.shopping.title}</h3>
              <ul>
                {t.practicalInfo.shopping.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🍽️</div>
              <h3>{t.practicalInfo.gastronomy.title}</h3>
              <ul>
                {t.practicalInfo.gastronomy.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation">
        <div className="container">
          <h2>{t.accommodationTitle}</h2>
          <div className="accommodation-grid">
            <div className="accommodation-card">
              <h3>{t.accommodation.luxury.title}</h3>
              <p>{t.accommodation.luxury.description}</p>
              <ul>
                {t.accommodation.luxury.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>{t.accommodation.guesthouses.title}</h3>
              <p>{t.accommodation.guesthouses.description}</p>
              <ul>
                {t.accommodation.guesthouses.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>{t.accommodation.modern.title}</h3>
              <p>{t.accommodation.modern.description}</p>
              <ul>
                {t.accommodation.modern.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaSubtitle}</p>
            <div className="cta-buttons">
              <Link to="/destinations" className="btn btn-primary">
                {t.otherDestinationsBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TunisPage;
