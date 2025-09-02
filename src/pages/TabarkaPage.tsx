import React from 'react';
import { Link } from 'react-router-dom';
import './TabarkaPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import fortImage from '../assets/forttabarka.jpg';
import neigeImage from '../assets/tabarkaneige.jpg';
import plageImage from '../assets/plagetabarka.webp';
import tabarkaImage from '../assets/tabarka.jpg';
import flagImage from '../assets/Flag.png';

const TabarkaPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Tabarka",
      heroSubtitle: "Perle du Nord-Ouest Tunisien",
      introTitle: "La Perle du Nord-Ouest",
      introParagraph1: "Tabarka, située dans le nord-ouest de la Tunisie, est une destination unique qui allie mer Méditerranée et montagnes verdoyantes. Cette petite ville côtière est célèbre pour ses formations rocheuses spectaculaires, son fort génois historique et sa proximité avec les montagnes de Kroumirie.",
      introParagraph2: "Réputée pour son festival de jazz annuel, ses eaux cristallines parfaites pour la plongée et ses paysages naturels préservés, Tabarka offre une expérience authentique loin des circuits touristiques traditionnels. C'est également le seul endroit en Tunisie où vous pourrez peut-être voir de la neige !",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Découvrez les merveilles naturelles et historiques de Tabarka",
      highlightsLabel: "Points forts",
      historyLabel: "Histoire",
      visitInfoLabel: "Informations pratiques",
      attractions: [
        {
          id: 1,
          name: "Fort Génois de Tabarka",
          description: "Forteresse du 16ème siècle construite par les Génois, emblème historique de la ville",
          image: fortImage,
          highlights: [
            "Architecture génoise du 16ème siècle",
            "Vue panoramique sur la mer",
            "Histoire des corsaires",
            "Site archéologique"
          ],
          history: "Construit par les Génois au 16ème siècle, ce fort témoigne de l'histoire commerciale de Tabarka et de sa position stratégique en Méditerranée.",
          visitInfo: "Ouvert tous les jours. Montée au sommet recommandée pour la vue panoramique."
        },
        {
          id: 2,
          name: "Aiguilles de Tabarka",
          description: "Formations rocheuses spectaculaires émergeant de la mer Méditerranée",
          image: tabarkaImage,
          highlights: [
            "Rochers de grès rouge",
            "Formations géologiques uniques",
            "Spot de plongée réputé",
            "Couchers de soleil magiques"
          ],
          history: "Ces formations rocheuses de grès rouge ont été sculptées par l'érosion marine au fil des millénaires, créant un paysage unique en Tunisie.",
          visitInfo: "Visibles depuis la côte. Excursions en bateau disponibles pour approcher les rochers."
        },
        {
          id: 3,
          name: "Plages de Tabarka",
          description: "Côte sauvage aux eaux cristallines, paradis des amateurs de nature",
          image: plageImage,
          highlights: [
            "Eaux cristallines",
            "Côte rocheuse préservée",
            "Plongée sous-marine",
            "Pêche en mer"
          ],
          history: "Les plages de Tabarka offrent un cadre naturel préservé, loin du tourisme de masse, idéal pour les amoureux de nature authentique.",
          visitInfo: "Accès libre. Équipements de plongée disponibles en location."
        },
        {
          id: 4,
          name: "Montagnes de Kroumirie",
          description: "Région montagneuse verdoyante, seul endroit en Tunisie où il peut neiger",
          image: neigeImage,
          highlights: [
            "Forêts de chênes-lièges",
            "Climat méditerranéen montagnard",
            "Randonnées en nature",
            "Neige en hiver (rare)"
          ],
          history: "La Kroumirie est une région montagneuse unique en Tunisie, connue pour ses forêts denses et son climat particulier qui peut apporter de la neige en hiver.",
          visitInfo: "Idéal pour la randonnée. Meilleure période : automne et printemps."
        }
      ],
      practicalInfoTitle: "Préparez votre visite",
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "170 km de Tunis (2h30 de route)",
            "80 km de Béja (1h30)",
            "Bus depuis Tunis et Béja",
            "Route pittoresque par la montagne"
          ]
        },
        climate: {
          title: "Climat et saisons",
          items: [
            "Été : chaud et sec (25-30°C)",
            "Hiver : doux et humide (10-16°C)",
            "Printemps/Automne : idéal",
            "Possibilité de neige en janvier"
          ]
        },
        activities: {
          title: "Activités",
          items: [
            "Plongée sous-marine",
            "Randonnées en Kroumirie",
            "Festival de jazz (juillet)",
            "Pêche en mer"
          ]
        },
        tickets: {
          title: "Billets et tarifs",
          items: [
            "Fort génois : Entrée gratuite",
            "Plages : Accès libre",
            "Excursions bateau : 15-25 TND",
            "Plongée : 40-60 TND"
          ]
        }
      },
      ctaTitle: "Explorez la beauté sauvage de Tabarka",
      ctaSubtitle: "Découvrez un joyau caché du nord tunisien",
      otherDestinationsBtn: "Autres destinations",
      planTripBtn: "Planifier votre voyage"
    },
    en: {
      heroTitle: "Tabarka",
      heroSubtitle: "Pearl of Northwestern Tunisia",
      introTitle: "The Pearl of the Northwest",
      introParagraph1: "Tabarka, located in northwestern Tunisia, is a unique destination that combines the Mediterranean Sea and green mountains. This small coastal town is famous for its spectacular rock formations, historic Genoese fort and proximity to the Kroumirie mountains.",
      introParagraph2: "Renowned for its annual jazz festival, crystal-clear waters perfect for diving and preserved natural landscapes, Tabarka offers an authentic experience away from traditional tourist circuits. It's also the only place in Tunisia where you might see snow!",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Discover the natural and historical wonders of Tabarka",
      highlightsLabel: "Highlights",
      historyLabel: "History",
      visitInfoLabel: "Practical information",
      attractions: [
        {
          id: 1,
          name: "Genoese Fort of Tabarka",
          description: "16th century fortress built by the Genoese, historic emblem of the city",
          image: fortImage,
          highlights: [
            "16th century Genoese architecture",
            "Panoramic sea view",
            "Corsair history",
            "Archaeological site"
          ],
          history: "Built by the Genoese in the 16th century, this fort testifies to Tabarka's commercial history and strategic position in the Mediterranean.",
          visitInfo: "Open daily. Climb to the top recommended for panoramic view."
        },
        {
          id: 2,
          name: "Tabarka Needles",
          description: "Spectacular rock formations emerging from the Mediterranean Sea",
          image: tabarkaImage,
          highlights: [
            "Red sandstone rocks",
            "Unique geological formations",
            "Renowned diving spot",
            "Magical sunsets"
          ],
          history: "These red sandstone rock formations have been sculpted by marine erosion over millennia, creating a unique landscape in Tunisia.",
          visitInfo: "Visible from the coast. Boat excursions available to approach the rocks."
        },
        {
          id: 3,
          name: "Tabarka Beaches",
          description: "Wild coast with crystalline waters, paradise for nature lovers",
          image: plageImage,
          highlights: [
            "Crystal clear waters",
            "Preserved rocky coast",
            "Scuba diving",
            "Sea fishing"
          ],
          history: "Tabarka's beaches offer a preserved natural setting, away from mass tourism, ideal for lovers of authentic nature.",
          visitInfo: "Free access. Diving equipment available for rent."
        },
        {
          id: 4,
          name: "Kroumirie Mountains",
          description: "Green mountainous region, only place in Tunisia where it can snow",
          image: neigeImage,
          highlights: [
            "Cork oak forests",
            "Mountain Mediterranean climate",
            "Nature hiking",
            "Snow in winter (rare)"
          ],
          history: "Kroumirie is a unique mountainous region in Tunisia, known for its dense forests and particular climate that can bring snow in winter.",
          visitInfo: "Ideal for hiking. Best period: autumn and spring."
        }
      ],
      practicalInfoTitle: "Prepare your visit",
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "170 km from Tunis (2h30 drive)",
            "80 km from Béja (1h30)",
            "Bus from Tunis and Béja",
            "Scenic mountain route"
          ]
        },
        climate: {
          title: "Climate and seasons",
          items: [
            "Summer: hot and dry (25-30°C)",
            "Winter: mild and humid (10-16°C)",
            "Spring/Autumn: ideal",
            "Possibility of snow in January"
          ]
        },
        activities: {
          title: "Activities",
          items: [
            "Scuba diving",
            "Kroumirie hiking",
            "Jazz festival (July)",
            "Sea fishing"
          ]
        },
        tickets: {
          title: "Tickets and prices",
          items: [
            "Genoese fort: Free entry",
            "Beaches: Free access",
            "Boat excursions: 15-25 TND",
            "Diving: 40-60 TND"
          ]
        }
      },
      ctaTitle: "Explore the wild beauty of Tabarka",
      ctaSubtitle: "Discover a hidden gem of northern Tunisia",
      otherDestinationsBtn: "Other destinations",
      planTripBtn: "Plan your trip"
    }
  };

  const t = translations[language];

  return (
    <div className="tabarka-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="tabarka-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={fortImage} alt="Fort Génois de Tabarka" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="tabarka-intro section-padding">
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
              <div className="info-icon">🌡️</div>
              <h3>{t.practicalInfo.climate.title}</h3>
              <ul>
                {t.practicalInfo.climate.items.map((item, index) => (
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
            <Link to="/destinations" className="btn btn-outline">
              {t.otherDestinationsBtn}
            </Link>
            <Link to="/contact" className="btn btn-primary">
              {t.planTripBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TabarkaPage;
