import React from 'react';
import { Link } from 'react-router-dom';
import './KairouanPage.css';
import okbaImage from '../assets/okba 2.jpg';
import medinaImage from '../assets/medinakairouan.jpg';
import sidiSahbiImage from '../assets/sidisahbi.jpg';
import bassinImage from '../assets/bassin.jpg';
import flagImage from '../assets/Flag.png';

const KairouanPage: React.FC = () => {
  const attractions = [
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
  ];

  return (
    <div className="kairouan-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="kairouan-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={okbaImage} alt="Grande Mosquée de Kairouan" className="title-hero-img" />
            <div className="title-overlay">
              <h1>Kairouan</h1>
              <p>Ville sainte et première capitale de l'Ifriqiya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="kairouan-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>La Quatrième Ville Sainte de l'Islam</h2>
              <p>
                Fondée en 670 par Oqba Ibn Nafi, Kairouan fut la première capitale de l'Ifriqiya 
                et le point de départ de l'islamisation du Maghreb. Cette ville sainte, considérée 
                comme la quatrième ville sainte de l'Islam après La Mecque, Médine et Jérusalem, 
                abrite des trésors architecturaux uniques.
              </p>
              <p>
                Ses mosquées, ses médersas et sa médina classée au patrimoine mondial de l'UNESCO 
                témoignent de treize siècles d'histoire islamique. Kairouan est également réputée 
                pour ses tapis, ses cuivres et ses pâtisseries traditionnelles.
              </p>
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
            <h2>Sites Incontournables</h2>
            <p>Découvrez les joyaux architecturaux et spirituels de Kairouan</p>
          </div>

          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
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
                    <h4>Points d'intérêt :</h4>
                    <ul>
                      {attraction.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="history">
                    <h4>Histoire :</h4>
                    <p>{attraction.history}</p>
                  </div>
                  
                  <div className="visit-info">
                    <h4>Informations pratiques :</h4>
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
          <h2>Préparez votre visite</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>160 km de Tunis (2h de route)</li>
                <li>50 km de Sousse (1h de route)</li>
                <li>Liaisons bus régulières</li>
                <li>Parking disponible près des sites</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Meilleure période</h3>
              <ul>
                <li>Octobre à mai (temps clément)</li>
                <li>Éviter juillet-août (très chaud)</li>
                <li>Ramadan : horaires modifiés</li>
                <li>Vendredi : mosquées fermées le matin</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">👗</div>
              <h3>Code vestimentaire</h3>
              <ul>
                <li>Tenue décente exigée</li>
                <li>Bras et jambes couverts</li>
                <li>Chaussures faciles à retirer</li>
                <li>Foulard pour les femmes (mosquées)</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Billets et tarifs</h3>
              <ul>
                <li>Grande Mosquée : Entrée gratuite</li>
                <li>Bassins des Aghlabides : Entrée gratuite</li>
                <li>Médina et Zaouïa : Accès libre</li>
                <li>Visites guidées sur demande</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Planifiez votre visite à Kairouan</h2>
          <p>Découvrez la richesse spirituelle et architecturale de la ville sainte</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="btn btn-primary">
              Autres destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KairouanPage;
