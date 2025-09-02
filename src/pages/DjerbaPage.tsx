import React from 'react';
import { Link } from 'react-router-dom';
import './DjerbaPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import djerbaImage from '../assets/djerba.jpg';
import plageImage from '../assets/djerbaplage.avif';
// @ts-ignore
import medinaImage from '../assets/medina djerba.jpg';
import djerbahoodImage from '../assets/djerbahood.webp';
import crocodileImage from '../assets/parccrocodiledjerba.webp';
import flagImage from '../assets/Flag.png';

const DjerbaPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Djerba",
      heroSubtitle: "L'Île des Rêves - Paradis méditerranéen",
      introTitle: "L'Île des Rêves",
      introParagraph1: "Djerba, la plus grande île de Tunisie, est un véritable joyau de la Méditerranée. Surnommée \"l'île des rêves\", elle séduit par ses plages de sable fin, ses eaux turquoise, son patrimoine culturel riche et sa douceur de vivre légendaire.",
      introParagraph2: "Terre de tolérance et de diversité, Djerba abrite une mosaïque de cultures et de traditions. De ses villages berbères authentiques à ses complexes touristiques modernes, en passant par ses souks colorés et son art de rue contemporain, l'île offre une expérience unique entre tradition et modernité.",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Découvrez les merveilles de l'île des rêves",
      highlightsLabel: "Points d'intérêt :",
      historyLabel: "Histoire :",
      practicalInfoLabel: "Informations pratiques :",
      attractions: [
        {
          id: 1,
          name: "Plages de Sable Fin",
          description: "120 km de côtes bordées de plages paradisiaques aux eaux cristallines et au sable doré",
          image: plageImage,
          highlights: [
            "Plage de Sidi Mahrez",
            "Ras R'mel et ses flamants roses",
            "Seguia Beach Club",
            "Sports nautiques variés"
          ],
          history: "Les plages de Djerba ont été façonnées par des millénaires d'érosion marine, créant des étendues de sable fin unique en Méditerranée.",
          visitInfo: "Accessible toute l'année. Meilleures conditions avril-octobre. Activités nautiques disponibles."
        },
        {
          id: 2,
          name: "Houmt Souk - Médina",
          description: "Chef-lieu de l'île, centre commercial et culturel authentique avec ses souks traditionnels",
          image: medinaImage,
          highlights: [
            "Souk des bijoutiers",
            "Marché aux poissons",
            "Architecture berbère",
            "Artisanat local authentique"
          ],
          history: "Houmt Souk est le cœur historique de Djerba depuis l'époque punique, centre commercial entre l'Afrique et l'Europe.",
          visitInfo: "Ouvert tous les jours. Vendredi matin particulièrement animé. Marchandage de mise dans les souks."
        },
        {
          id: 3,
          name: "Djerbahood - Art de Rue",
          description: "Plus grand musée de street art à ciel ouvert du monde arabe avec 250 œuvres d'artistes internationaux",
          image: djerbahoodImage,
          highlights: [
            "250 fresques murales",
            "Artistes de 30 pays",
            "Village d'Erriadh transformé",
            "Art contemporain et tradition"
          ],
          history: "Projet lancé en 2014 pour revitaliser le village d'Erriadh, devenu référence mondiale du street art.",
          visitInfo: "Visite libre toute l'année. Respect des habitants demandé. Visites guidées disponibles."
        },
        {
          id: 4,
          name: "Synagogue de la Ghriba",
          description: "L'une des plus anciennes synagogues du monde, lieu de pèlerinage majeur pour la communauté juive",
          image: medinaImage,
          highlights: [
            "Architecture unique",
            "Manuscrits anciens",
            "Pèlerinage annuel (Lag BaOmer)",
            "Coexistence religieuse"
          ],
          history: "Selon la tradition, construite par les prêtres fuyant la destruction du Temple de Jérusalem en 586 av. J.-C.",
          visitInfo: "Ouverte aux visiteurs. Tenue respectueuse exigée. Pèlerinage en mai très fréquenté."
        },
        {
          id: 5,
          name: "Parc Djerba Explore",
          description: "Complexe culturel et de loisirs combinant musée, ferme aux crocodiles et village traditionnel",
          image: crocodileImage,
          highlights: [
            "400 crocodiles du Nil",
            "Musée du patrimoine",
            "Village traditionnel reconstitué",
            "Spectacles équestres"
          ],
          history: "Créé pour préserver et présenter le patrimoine de Djerba tout en offrant des attractions familiales modernes.",
          visitInfo: "Ouvert toute l'année. Spectacles à heures fixes. Billetterie combinée disponible."
        }
      ],
      practicalInfoTitle: "Préparez votre visite",
      practicalInfo: {
        transport: {
          title: "Comment s'y rendre",
          items: [
            "Aéroport Djerba-Zarzis (vols directs)",
            "Ferry depuis Jorf (15 min)",
            "Route via chaussée romaine",
            "Location de voiture recommandée"
          ]
        },
        timing: {
          title: "Meilleure période",
          items: [
            "Avril-juin et sept-nov (idéal)",
            "Juillet-août (très chaud)",
            "Hiver doux (15-20°C)",
            "Festival d'Ulysse en juillet"
          ]
        },
        accommodation: {
          title: "Hébergement",
          items: [
            "Zone touristique moderne",
            "Maisons d'hôtes traditionnelles",
            "Hôtels tout inclus",
            "Résidences de vacances"
          ]
        },
        activities: {
          title: "Activités recommandées",
          items: [
            "Tour de l'île en vélo",
            "Excursion en 4x4",
            "Plongée sous-marine",
            "Cours de poterie traditionnelle"
          ]
        }
      },
      ctaTitle: "Vivez la magie de Djerba",
      ctaSubtitle: "Découvrez l'île où tradition et modernité se rencontrent en harmonie",
      otherDestinationsBtn: "Autres destinations"
    },
    en: {
      heroTitle: "Djerba",
      heroSubtitle: "The Island of Dreams - Mediterranean Paradise",
      introTitle: "The Island of Dreams",
      introParagraph1: "Djerba, Tunisia's largest island, is a true jewel of the Mediterranean. Nicknamed \"the island of dreams\", it captivates with its fine sandy beaches, turquoise waters, rich cultural heritage and legendary gentle way of life.",
      introParagraph2: "A land of tolerance and diversity, Djerba is home to a mosaic of cultures and traditions. From its authentic Berber villages to its modern tourist complexes, through its colorful souks and contemporary street art, the island offers a unique experience between tradition and modernity.",
      attractionsTitle: "Must-See Attractions",
      attractionsSubtitle: "Discover the wonders of the island of dreams",
      highlightsLabel: "Points of interest:",
      historyLabel: "History:",
      practicalInfoLabel: "Practical information:",
      attractions: [
        {
          id: 1,
          name: "Fine Sandy Beaches",
          description: "120 km of coastline bordered by paradise beaches with crystal clear waters and golden sand",
          image: plageImage,
          highlights: [
            "Sidi Mahrez Beach",
            "Ras R'mel and its flamingos",
            "Seguia Beach Club",
            "Various water sports"
          ],
          history: "Djerba's beaches have been shaped by millennia of marine erosion, creating expanses of fine sand unique in the Mediterranean.",
          visitInfo: "Accessible year-round. Best conditions April-October. Water activities available."
        },
        {
          id: 2,
          name: "Houmt Souk - Medina",
          description: "Island's capital, authentic commercial and cultural center with traditional souks",
          image: medinaImage,
          highlights: [
            "Jewelers' souk",
            "Fish market",
            "Berber architecture",
            "Authentic local crafts"
          ],
          history: "Houmt Souk has been Djerba's historic heart since Punic times, commercial center between Africa and Europe.",
          visitInfo: "Open daily. Friday morning particularly lively. Bargaining expected in souks."
        },
        {
          id: 3,
          name: "Djerbahood - Street Art",
          description: "World's largest open-air street art museum in the Arab world with 250 works by international artists",
          image: djerbahoodImage,
          highlights: [
            "250 murals",
            "Artists from 30 countries",
            "Transformed Erriadh village",
            "Contemporary art and tradition"
          ],
          history: "Project launched in 2014 to revitalize Erriadh village, now a global street art reference.",
          visitInfo: "Free visit year-round. Respect for residents requested. Guided tours available."
        },
        {
          id: 4,
          name: "Ghriba Synagogue",
          description: "One of the world's oldest synagogues, major pilgrimage site for the Jewish community",
          image: medinaImage,
          highlights: [
            "Unique architecture",
            "Ancient manuscripts",
            "Annual pilgrimage (Lag BaOmer)",
            "Religious coexistence"
          ],
          history: "According to tradition, built by priests fleeing the destruction of Jerusalem Temple in 586 BC.",
          visitInfo: "Open to visitors. Respectful attire required. May pilgrimage very crowded."
        },
        {
          id: 5,
          name: "Djerba Explore Park",
          description: "Cultural and leisure complex combining museum, crocodile farm and traditional village",
          image: crocodileImage,
          highlights: [
            "400 Nile crocodiles",
            "Heritage museum",
            "Reconstructed traditional village",
            "Equestrian shows"
          ],
          history: "Created to preserve and present Djerba's heritage while offering modern family attractions.",
          visitInfo: "Open year-round. Shows at fixed times. Combined tickets available."
        }
      ],
      practicalInfoTitle: "Plan Your Visit",
      practicalInfo: {
        transport: {
          title: "How to get there",
          items: [
            "Djerba-Zarzis Airport (direct flights)",
            "Ferry from Jorf (15 min)",
            "Road via Roman causeway",
            "Car rental recommended"
          ]
        },
        timing: {
          title: "Best time",
          items: [
            "April-June and Sept-Nov (ideal)",
            "July-August (very hot)",
            "Mild winter (15-20°C)",
            "Ulysses Festival in July"
          ]
        },
        accommodation: {
          title: "Accommodation",
          items: [
            "Modern tourist zone",
            "Traditional guesthouses",
            "All-inclusive hotels",
            "Holiday residences"
          ]
        },
        activities: {
          title: "Recommended activities",
          items: [
            "Island bike tour",
            "4x4 excursion",
            "Scuba diving",
            "Traditional pottery classes"
          ]
        }
      },
      ctaTitle: "Experience the Magic of Djerba",
      ctaSubtitle: "Discover the island where tradition and modernity meet in harmony",
      otherDestinationsBtn: "Other destinations"
    }
  };

  const t = translations[language];

  return (
    <div className="djerba-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="djerba-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={djerbaImage} alt="Île de Djerba" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{t.heroTitle}</h1>
              <p>{t.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="djerba-intro section-padding">
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
                    <h4>{t.practicalInfoLabel}</h4>
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
              <div className="info-icon">✈️</div>
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
              <div className="info-icon">🏨</div>
              <h3>{t.practicalInfo.accommodation.title}</h3>
              <ul>
                {t.practicalInfo.accommodation.items.map((item, index) => (
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

export default DjerbaPage;


