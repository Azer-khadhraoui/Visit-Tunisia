import React from 'react';
import { Link } from 'react-router-dom';
import './KairouanPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import okbaImage from '../assets/okba 2.jpg';
import medinaImage from '../assets/medinakairouan.jpg';
import sidiSahbiImage from '../assets/sidisahbi.jpg';
import bassinImage from '../assets/bassin.jpg';
import flagImage from '../assets/Flag.png';

const KairouanPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Kairouan",
      heroSubtitle: "Ville sainte et première capitale de l'Ifriqiya",
      introTitle: "La Quatrième Ville Sainte de l'Islam",
      introParagraph1: "Fondée en 670 par Oqba Ibn Nafi, Kairouan fut la première capitale de l'Ifriqiya et le point de départ de l'islamisation du Maghreb. Cette ville sainte, considérée comme la quatrième ville sainte de l'Islam après La Mecque, Médine et Jérusalem, abrite des trésors architecturaux uniques.",
      introParagraph2: "Ses mosquées, ses médersas et sa médina classée au patrimoine mondial de l'UNESCO témoignent de treize siècles d'histoire islamique. Kairouan est également réputée pour ses tapis, ses cuivres et ses pâtisseries traditionnelles.",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Découvrez les joyaux architecturaux et spirituels de Kairouan",
      highlightsLabel: "Points d'intérêt :",
      historyLabel: "Histoire :",
      visitInfoLabel: "Informations pratiques :",
      attractions: [
        {
          id: 1,
          name: "Grande Mosquée Oqba Ibn Nafi",
          description: "Première mosquée de l'Occident musulman, fondée en 670, véritable joyau de l'architecture islamique",
          image: okbaImage,
          highlights: [
            "Minaret le plus ancien du Maghreb",
            "Cour pavée de marbre",
            "Salle de prière aux 414 colonnes",
            "Mihrab en faïence de Kairouan"
          ],
          history: "Fondée par Oqba Ibn Nafi Al Fihri en 670 (50 de l'Hégire), cette mosquée est considérée comme l'une des plus importantes du monde musulman.",
          visitInfo: "Ouverte tous les jours sauf vendredi matin. Tenue vestimentaire respectueuse exigée."
        },
        {
          id: 2,
          name: "Médina de Kairouan",
          description: "Centre historique classé UNESCO, labyrinthe de ruelles authentiques et de souks traditionnels",
          image: medinaImage,
          highlights: [
            "Remparts du 11ème siècle",
            "Souks traditionnels",
            "Architecture andalouse",
            "Patrimoine UNESCO depuis 1988"
          ],
          history: "La médina de Kairouan conserve son tracé urbain d'origine avec ses remparts, ses portes monumentales et ses quartiers résidentiels.",
          visitInfo: "Accessible librement. Visite guidée recommandée pour découvrir les trésors cachés."
        },
        {
          id: 3,
          name: "Zaouïa Sidi Sahbi",
          description: "Mausolée du Compagnon du Prophète, lieu de pèlerinage orné de magnifiques carreaux de faïence",
          image: sidiSahbiImage,
          highlights: [
            "Tombeau d'Abou Djemaa El Balaoui",
            "Décoration en faïence polychrome",
            "Coupoles et minarets ornés",
            "Lieu de pèlerinage majeur"
          ],
          history: "Sidi Sahbi, compagnon du Prophète Mohammed, est vénéré à Kairouan. Son mausolée est un chef-d'œuvre de l'art décoratif tunisien.",
          visitInfo: "Ouvert aux visiteurs. Respect des traditions religieuses demandé."
        },
        {
          id: 4,
          name: "Bassins des Aghlabides",
          description: "Monuments hydrauliques du 9ème siècle, témoins du génie technique de la dynastie aghlabide",
          image: bassinImage,
          highlights: [
            "Ingénierie hydraulique du 9ème siècle",
            "Bassin polygonal unique",
            "Système d'adduction d'eau",
            "Vue panoramique sur Kairouan"
          ],
          history: "Construits au 9ème siècle sous la dynastie des Aghlabides, ces bassins alimentaient la ville en eau depuis les montagnes.",
          visitInfo: "Site ouvert toute l'année. Idéal pour admirer le coucher de soleil sur Kairouan."
        }
      ],
      practicalInfoTitle: "Préparez votre visite",
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "160 km de Tunis (2h de route)",
            "50 km de Sousse (1h de route)",
            "Liaisons bus régulières",
            "Parking disponible près des sites"
          ]
        },
        timing: {
          title: "Meilleure période",
          items: [
            "Octobre à mai (temps clément)",
            "Éviter juillet-août (très chaud)",
            "Ramadan : horaires modifiés",
            "Vendredi : mosquées fermées le matin"
          ]
        },
        dress: {
          title: "Code vestimentaire",
          items: [
            "Tenue décente exigée",
            "Bras et jambes couverts",
            "Chaussures faciles à retirer",
            "Foulard pour les femmes (mosquées)"
          ]
        },
        tickets: {
          title: "Billets et tarifs",
          items: [
            "Grande Mosquée : Entrée gratuite",
            "Bassins des Aghlabides : Entrée gratuite",
            "Médina et Zaouïa : Accès libre",
            "Visites guidées sur demande"
          ]
        }
      },
      ctaTitle: "Planifiez votre visite à Kairouan",
      ctaSubtitle: "Découvrez la richesse spirituelle et architecturale de la ville sainte",
      otherDestinationsBtn: "Autres destinations"
    },
    en: {
      heroTitle: "Kairouan",
      heroSubtitle: "Holy city and first capital of Ifriqiya",
      introTitle: "The Fourth Holy City of Islam",
      introParagraph1: "Founded in 670 by Oqba Ibn Nafi, Kairouan was the first capital of Ifriqiya and the starting point of the Islamization of the Maghreb. This holy city, considered the fourth holy city of Islam after Mecca, Medina and Jerusalem, houses unique architectural treasures.",
      introParagraph2: "Its mosques, madrasas and medina classified as UNESCO World Heritage bear witness to thirteen centuries of Islamic history. Kairouan is also renowned for its carpets, copperware and traditional pastries.",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Discover the architectural and spiritual jewels of Kairouan",
      highlightsLabel: "Points of interest:",
      historyLabel: "History:",
      visitInfoLabel: "Practical information:",
      attractions: [
        {
          id: 1,
          name: "Great Mosque Oqba Ibn Nafi",
          description: "First mosque in the Muslim West, founded in 670, true jewel of Islamic architecture",
          image: okbaImage,
          highlights: [
            "Oldest minaret in the Maghreb",
            "Marble-paved courtyard",
            "Prayer hall with 414 columns",
            "Kairouan faience mihrab"
          ],
          history: "Founded by Oqba Ibn Nafi Al Fihri in 670 (50 AH), this mosque is considered one of the most important in the Muslim world.",
          visitInfo: "Open daily except Friday morning. Respectful dress code required."
        },
        {
          id: 2,
          name: "Kairouan Medina",
          description: "UNESCO-listed historic center, maze of authentic alleys and traditional souks",
          image: medinaImage,
          highlights: [
            "11th century ramparts",
            "Traditional souks",
            "Andalusian architecture",
            "UNESCO Heritage since 1988"
          ],
          history: "Kairouan medina preserves its original urban layout with its ramparts, monumental gates and residential quarters.",
          visitInfo: "Freely accessible. Guided tour recommended to discover hidden treasures."
        },
        {
          id: 3,
          name: "Zaouia Sidi Sahbi",
          description: "Mausoleum of the Prophet's Companion, pilgrimage site adorned with magnificent faience tiles",
          image: sidiSahbiImage,
          highlights: [
            "Tomb of Abou Djemaa El Balaoui",
            "Polychrome faience decoration",
            "Ornate domes and minarets",
            "Major pilgrimage site"
          ],
          history: "Sidi Sahbi, companion of Prophet Mohammed, is venerated in Kairouan. His mausoleum is a masterpiece of Tunisian decorative art.",
          visitInfo: "Open to visitors. Respect for religious traditions requested."
        },
        {
          id: 4,
          name: "Aghlabid Basins",
          description: "9th century hydraulic monuments, witnesses to the technical genius of the Aghlabid dynasty",
          image: bassinImage,
          highlights: [
            "9th century hydraulic engineering",
            "Unique polygonal basin",
            "Water supply system",
            "Panoramic view of Kairouan"
          ],
          history: "Built in the 9th century under the Aghlabid dynasty, these basins supplied the city with water from the mountains.",
          visitInfo: "Site open year-round. Ideal for watching sunset over Kairouan."
        }
      ],
      practicalInfoTitle: "Prepare your visit",
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "160 km from Tunis (2h drive)",
            "50 km from Sousse (1h drive)",
            "Regular bus connections",
            "Parking available near sites"
          ]
        },
        timing: {
          title: "Best time",
          items: [
            "October to May (mild weather)",
            "Avoid July-August (very hot)",
            "Ramadan: modified hours",
            "Friday: mosques closed in morning"
          ]
        },
        dress: {
          title: "Dress code",
          items: [
            "Decent attire required",
            "Arms and legs covered",
            "Easy-to-remove shoes",
            "Headscarf for women (mosques)"
          ]
        },
        tickets: {
          title: "Tickets and prices",
          items: [
            "Great Mosque: Free entry",
            "Aghlabid Basins: Free entry",
            "Medina and Zaouia: Free access",
            "Guided tours on request"
          ]
        }
      },
      ctaTitle: "Plan your visit to Kairouan",
      ctaSubtitle: "Discover the spiritual and architectural richness of the holy city",
      otherDestinationsBtn: "Other destinations"
    }
  };

  const t = translations[language];

  return (
    <div className="kairouan-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="kairouan-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={okbaImage} alt="Grande Mosquée de Kairouan" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="kairouan-intro section-padding">
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
                  
                  <div className="highlights">
                    <h4>{t.highlightsLabel}</h4>
                    <ul>
                      {attraction.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="history">
                    <h4>{t.historyLabel}</h4>
                    <p>{attraction.history}</p>
                  </div>
                  
                  <div className="visit-info">
                    <h4>{t.visitInfoLabel}</h4>
                    <p>{attraction.visitInfo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="practical-info section-padding bg-light">
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
              <div className="info-icon">🕐</div>
              <h3>{t.practicalInfo.timing.title}</h3>
              <ul>
                {t.practicalInfo.timing.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">👗</div>
              <h3>{t.practicalInfo.dress.title}</h3>
              <ul>
                {t.practicalInfo.dress.items.map((item, index) => (
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

export default KairouanPage;
