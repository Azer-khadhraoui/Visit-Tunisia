import React from 'react';
import { Link } from 'react-router-dom';
import './TabarkaPage.css';
import fortImage from '../assets/forttabarka.jpg';
import neigeImage from '../assets/tabarkaneige.jpg';
import plageImage from '../assets/plagetabarka.webp';
import tabarkaImage from '../assets/tabarka.jpg';
import flagImage from '../assets/Flag.png';

const TabarkaPage: React.FC = () => {
  const attractions = [
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
  ];

  return (
    <div className="tabarka-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="tabarka-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={fortImage} alt="Fort Génois de Tabarka" className="title-hero-img" />
            <div className="title-overlay">
              <h1>Tabarka</h1>
              <p>Perle du Nord-Ouest Tunisien</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="tabarka-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>La Perle du Nord-Ouest</h2>
              <p>
                Tabarka, située dans le nord-ouest de la Tunisie, est une destination 
                unique qui allie mer Méditerranée et montagnes verdoyantes. Cette petite 
                ville côtière est célèbre pour ses formations rocheuses spectaculaires, 
                son fort génois historique et sa proximité avec les montagnes de Kroumirie.
              </p>
              <p>
                Réputée pour son festival de jazz annuel, ses eaux cristallines parfaites 
                pour la plongée et ses paysages naturels préservés, Tabarka offre une 
                expérience authentique loin des circuits touristiques traditionnels. 
                C'est également le seul endroit en Tunisie où vous pourrez peut-être voir de la neige !
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
            <p>Découvrez les merveilles naturelles et historiques de Tabarka</p>
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
                  
                  <h4>Points forts</h4>
                  <ul className="highlights-list">
                    {attraction.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  
                  <h4>Histoire</h4>
                  <p className="history-text">{attraction.history}</p>
                  
                  <h4>Informations pratiques</h4>
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
          <h2>Préparez votre visite</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>170 km de Tunis (2h30 de route)</li>
                <li>80 km de Béja (1h30)</li>
                <li>Bus depuis Tunis et Béja</li>
                <li>Route pittoresque par la montagne</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌡️</div>
              <h3>Climat et saisons</h3>
              <ul>
                <li>Été : chaud et sec (25-30°C)</li>
                <li>Hiver : doux et humide (10-16°C)</li>
                <li>Printemps/Automne : idéal</li>
                <li>Possibilité de neige en janvier</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Activités</h3>
              <ul>
                <li>Plongée sous-marine</li>
                <li>Randonnées en Kroumirie</li>
                <li>Festival de jazz (juillet)</li>
                <li>Pêche en mer</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Billets et tarifs</h3>
              <ul>
                <li>Fort génois : Entrée gratuite</li>
                <li>Plages : Accès libre</li>
                <li>Excursions bateau : 15-25 TND</li>
                <li>Plongée : 40-60 TND</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Explorez la beauté sauvage de Tabarka</h2>
          <p>Découvrez un joyau caché du nord tunisien</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="btn btn-outline">
              Autres destinations
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Planifier votre voyage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TabarkaPage;
