import React from 'react';
import { Link } from 'react-router-dom';
import './MahdiaPage.css';
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import heroImage from '../assets/mahdiacolissum.jpg';
// @ts-ignore
import grandemosqueeImage from '../assets/mahdia-grande-mosquee.jpg';
// @ts-ignore
import borjImage from '../assets/Borj_El_KebirMahdia.jpg';
// @ts-ignore
import skifaImage from '../assets/skifakahlamahdia.jpg';
// @ts-ignore
import ruinesImage from '../assets/ruindoormahdia.jpg';
// @ts-ignore
import plageMahdiaImage from '../assets/plagemahdia.jpg';
import flagImage from '../assets/Flag.png';

const MahdiaPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Mahdia",
      heroSubtitle: "Perle du Sahel tunisien, berceau de la dynastie fatimide",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Du patrimoine fatimide aux plages dorées du Sahel",
      highlightsLabel: "Points forts :",
      practicalInfoTitle: "Informations Pratiques",
      accommodationTitle: "Hébergement",
      ctaTitle: "Explorez la perle du Sahel",
      ctaSubtitle: "Découvrez Mahdia, entre histoire fatimide et beautés naturelles",
      otherDestinationsBtn: "Autres destinations",
      attractions: [
        {
          name: "Grande Mosquée de Mahdia",
          description: "Construite au Xe siècle par le fondateur de la dynastie fatimide, cette mosquée historique est un joyau de l'architecture islamique avec son minaret distinctif et sa cour pavée de marbre.",
          image: grandemosqueeImage,
          highlights: ["Architecture fatimide", "Minaret historique", "Cour en marbre", "Monument classé"]
        },
        {
          name: "Borj El Kebir",
          description: "Forteresse imposante du XVIe siècle qui domine la presqu'île de Mahdia, offrant une vue panoramique sur la Méditerranée et témoignant de l'importance stratégique de la ville.",
          image: borjImage,
          highlights: ["Forteresse ottomane", "Vue panoramique", "Architecture militaire", "Musée historique"]
        },
        {
          name: "Skifa Kahla",
          description: "Porte monumentale fatimide du Xe siècle, vestige des anciens remparts de la ville. Cette porte noire ('Skifa Kahla' en arabe) est l'un des monuments les plus emblématiques de Mahdia.",
          image: skifaImage,
          highlights: ["Monument fatimide", "Porte historique", "Architecture unique", "Patrimoine UNESCO"]
        },
        {
          name: "Plages de Mahdia",
          description: "Magnifiques plages de sable fin s'étendant sur plusieurs kilomètres, réputées pour leurs eaux cristallines et leur cadre paisible, parfaites pour la détente et les sports nautiques.",
          image: plageMahdiaImage,
          highlights: ["Sable fin doré", "Eaux cristallines", "Sports nautiques", "Cadre paisible"]
        },
        {
          name: "Vestiges Antiques",
          description: "Sites archéologiques témoignant du riche passé de Mahdia, avec des vestiges romains et byzantins qui racontent l'histoire millénaire de cette cité portuaire.",
          image: ruinesImage,
          highlights: ["Vestiges romains", "Sites archéologiques", "Histoire millénaire", "Patrimoine antique"]
        },
        {
          name: "Amphithéâtre de Mahdia",
          description: "Magnifique amphithéâtre antique offrant un cadre spectaculaire avec vue sur la Méditerranée. Ce monument historique témoigne de la grandeur de l'époque romaine à Mahdia.",
          image: heroImage,
          highlights: ["Architecture antique", "Vue panoramique", "Spectacles historiques", "Monument emblématique"]
        }
      ],
      practicalInfo: {
        access: {
          title: "Accès",
          items: [
            "205 km de Tunis (2h30 en voiture)",
            "60 km de Sousse (1h en voiture)",
            "Bus réguliers depuis Tunis et Sousse",
            "Aéroport de Monastir (45 min)"
          ]
        },
        visits: {
          title: "Visites",
          items: [
            "Grande Mosquée : 3 DT",
            "Borj El Kebir : 5 DT",
            "Skifa Kahla : 2 DT",
            "Sites archéologiques : 4 DT"
          ]
        },
        activities: {
          title: "Activités",
          items: [
            "Plages et baignade",
            "Plongée sous-marine",
            "Visites historiques guidées",
            "Promenades dans la médina"
          ]
        },
        gastronomy: {
          title: "Gastronomie",
          items: [
            "Poissons frais du jour",
            "Spécialités : daurade grillée",
            "Restaurants face à la mer",
            "Pâtisseries traditionnelles"
          ]
        }
      },
      accommodation: {
        beachfront: {
          title: "Hôtels balnéaires",
          description: "Établissements en bord de mer avec accès direct aux plages et services spa",
          items: ["Hôtels 4-5 étoiles", "Centres de thalassothérapie", "Clubs de plage privés"]
        },
        guesthouses: {
          title: "Maisons d'hôtes",
          description: "Hébergements authentiques dans la médina historique près des monuments",
          items: ["Demeures traditionnelles", "Riads restaurés", "Chambres chez l'habitant"]
        },
        residences: {
          title: "Résidences",
          description: "Appartements et villas avec vue sur mer pour séjours en famille",
          items: ["Villas avec piscine", "Résidences sécurisées", "Locations saisonnières"]
        }
      }
    },
    en: {
      heroTitle: "Mahdia",
      heroSubtitle: "Pearl of the Tunisian Sahel, cradle of the Fatimid dynasty",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "From Fatimid heritage to the golden beaches of the Sahel",
      highlightsLabel: "Highlights:",
      practicalInfoTitle: "Practical Information",
      accommodationTitle: "Accommodation",
      ctaTitle: "Explore the Pearl of the Sahel",
      ctaSubtitle: "Discover Mahdia, between Fatimid history and natural beauty",
      otherDestinationsBtn: "Other destinations",
      attractions: [
        {
          name: "Great Mosque of Mahdia",
          description: "Built in the 10th century by the founder of the Fatimid dynasty, this historic mosque is a jewel of Islamic architecture with its distinctive minaret and marble-paved courtyard.",
          image: grandemosqueeImage,
          highlights: ["Fatimid architecture", "Historic minaret", "Marble courtyard", "Listed monument"]
        },
        {
          name: "Borj El Kebir",
          description: "Imposing 16th-century fortress dominating Mahdia peninsula, offering panoramic views of the Mediterranean and witnessing the strategic importance of the city.",
          image: borjImage,
          highlights: ["Ottoman fortress", "Panoramic view", "Military architecture", "Historical museum"]
        },
        {
          name: "Skifa Kahla",
          description: "Monumental Fatimid gate from the 10th century, remnant of the city's ancient ramparts. This black gate ('Skifa Kahla' in Arabic) is one of Mahdia's most emblematic monuments.",
          image: skifaImage,
          highlights: ["Fatimid monument", "Historic gate", "Unique architecture", "UNESCO heritage"]
        },
        {
          name: "Mahdia Beaches",
          description: "Magnificent fine sand beaches stretching for several kilometers, renowned for their crystal-clear waters and peaceful setting, perfect for relaxation and water sports.",
          image: plageMahdiaImage,
          highlights: ["Golden fine sand", "Crystal clear waters", "Water sports", "Peaceful setting"]
        },
        {
          name: "Ancient Remains",
          description: "Archaeological sites witnessing Mahdia's rich past, with Roman and Byzantine remains that tell the millenary history of this port city.",
          image: ruinesImage,
          highlights: ["Roman remains", "Archaeological sites", "Millenary history", "Ancient heritage"]
        },
        {
          name: "Mahdia Amphitheatre",
          description: "Magnificent ancient amphitheatre offering a spectacular setting with Mediterranean views. This historic monument witnesses the grandeur of Roman times in Mahdia.",
          image: heroImage,
          highlights: ["Ancient architecture", "Panoramic view", "Historic performances", "Emblematic monument"]
        }
      ],
      practicalInfo: {
        access: {
          title: "Access",
          items: [
            "205 km from Tunis (2h30 drive)",
            "60 km from Sousse (1h drive)",
            "Regular buses from Tunis and Sousse",
            "Monastir Airport (45 min)"
          ]
        },
        visits: {
          title: "Visits",
          items: [
            "Great Mosque: 3 DT",
            "Borj El Kebir: 5 DT",
            "Skifa Kahla: 2 DT",
            "Archaeological sites: 4 DT"
          ]
        },
        activities: {
          title: "Activities",
          items: [
            "Beaches and swimming",
            "Scuba diving",
            "Guided historical tours",
            "Medina walks"
          ]
        },
        gastronomy: {
          title: "Gastronomy",
          items: [
            "Fresh fish of the day",
            "Specialties: grilled sea bream",
            "Seaside restaurants",
            "Traditional pastries"
          ]
        }
      },
      accommodation: {
        beachfront: {
          title: "Beachfront hotels",
          description: "Seaside establishments with direct beach access and spa services",
          items: ["4-5 star hotels", "Thalassotherapy centers", "Private beach clubs"]
        },
        guesthouses: {
          title: "Guesthouses",
          description: "Authentic accommodation in the historic medina near monuments",
          items: ["Traditional residences", "Restored riads", "Homestays"]
        },
        residences: {
          title: "Residences",
          description: "Apartments and villas with sea view for family stays",
          items: ["Villas with pool", "Secure residences", "Seasonal rentals"]
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className="mahdia-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="mahdia-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={heroImage} alt="Amphithéâtre de Mahdia" className="title-hero-img" />
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
              <div className="info-icon">🚗</div>
              <h3>{t.practicalInfo.access.title}</h3>
              <ul>
                {t.practicalInfo.access.items.map((item, index) => (
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
              <div className="info-icon">🏖️</div>
              <h3>{t.practicalInfo.activities.title}</h3>
              <ul>
                {t.practicalInfo.activities.items.map((item, index) => (
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
              <h3>{t.accommodation.beachfront.title}</h3>
              <p>{t.accommodation.beachfront.description}</p>
              <ul>
                {t.accommodation.beachfront.items.map((item, index) => (
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
              <h3>{t.accommodation.residences.title}</h3>
              <p>{t.accommodation.residences.description}</p>
              <ul>
                {t.accommodation.residences.items.map((item, index) => (
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

export default MahdiaPage;
