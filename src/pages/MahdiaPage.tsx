import React from 'react';
import { Link } from 'react-router-dom';
import './MahdiaPage.css';
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

const MahdiaPage: React.FC = () => {
  const attractions = [
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
  ];

  return (
    <div className="mahdia-page">
      {/* Hero Section */}
      <section className="mahdia-hero">
        <div className="hero-background">
          <img src={heroImage} alt="Amphithéâtre de Mahdia" className="hero-bg-img" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <nav className="breadcrumb">
            <Link to="/destinations">Destinations</Link>
            <span className="separator">›</span>
            <span>Mahdia</span>
          </nav>
          <h1>Mahdia</h1>
          <p>Découvrez la perle du Sahel tunisien, berceau de la dynastie fatimide, entre patrimoine historique exceptionnel et plages paradisiaques</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">ans d'histoire</span>
            </div>
            <div className="stat">
              <span className="stat-number">6</span>
              <span className="stat-label">sites historiques</span>
            </div>
            <div className="stat">
              <span className="stat-number">25</span>
              <span className="stat-label">km de côtes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <div className="section-header">
            <h2>Sites Incontournables</h2>
            <p>Du patrimoine fatimide aux plages dorées du Sahel</p>
          </div>

          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
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
                    <h4>Points forts :</h4>
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
          <h2>Informations Pratiques</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>Accès</h3>
              <ul>
                <li>205 km de Tunis (2h30 en voiture)</li>
                <li>60 km de Sousse (1h en voiture)</li>
                <li>Bus réguliers depuis Tunis et Sousse</li>
                <li>Aéroport de Monastir (45 min)</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Visites</h3>
              <ul>
                <li>Grande Mosquée : 3 DT</li>
                <li>Borj El Kebir : 5 DT</li>
                <li>Skifa Kahla : 2 DT</li>
                <li>Sites archéologiques : 4 DT</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🏖️</div>
              <h3>Activités</h3>
              <ul>
                <li>Plages et baignade</li>
                <li>Plongée sous-marine</li>
                <li>Visites historiques guidées</li>
                <li>Promenades dans la médina</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🍽️</div>
              <h3>Gastronomie</h3>
              <ul>
                <li>Poissons frais du jour</li>
                <li>Spécialités : daurade grillée</li>
                <li>Restaurants face à la mer</li>
                <li>Pâtisseries traditionnelles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation">
        <div className="container">
          <h2>Hébergement</h2>
          <div className="accommodation-grid">
            <div className="accommodation-card">
              <h3>Hôtels balnéaires</h3>
              <p>Établissements en bord de mer avec accès direct aux plages et services spa</p>
              <ul>
                <li>Hôtels 4-5 étoiles</li>
                <li>Centres de thalassothérapie</li>
                <li>Clubs de plage privés</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Maisons d'hôtes</h3>
              <p>Hébergements authentiques dans la médina historique près des monuments</p>
              <ul>
                <li>Demeures traditionnelles</li>
                <li>Riads restaurés</li>
                <li>Chambres chez l'habitant</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Résidences</h3>
              <p>Appartements et villas avec vue sur mer pour séjours en famille</p>
              <ul>
                <li>Villas avec piscine</li>
                <li>Résidences sécurisées</li>
                <li>Locations saisonnières</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Explorez la perle du Sahel</h2>
            <p>Découvrez Mahdia, entre histoire fatimide et beautés naturelles</p>
            <div className="cta-buttons">
              <Link to="/destinations" className="btn btn-primary">Autres destinations</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MahdiaPage;
