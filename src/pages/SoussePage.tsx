import React from 'react';
import { Link } from 'react-router-dom';
import './SoussePage.css';
import sousseImage from '../assets/sousse.jpg';
import medinaImage from '../assets/medinasousse.jpg';
import ribatImage from '../assets/ribatsousse.webp';
import cornichImage from '../assets/cornichesousse.jpg';
import kantaouiImage from '../assets/portkantaouisousse.jpg';
import mallImage from '../assets/mallofsousse.jpg';
import flagImage from '../assets/Flag.png';

const SoussePage: React.FC = () => {
  const attractions = [
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
  ];

  return (
    <div className="sousse-page">
      {/* Hero Section */}
      <section className="sousse-hero">
        <div className="hero-background">
          <img src={sousseImage} alt="Ville de Sousse" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <Link to="/">Accueil</Link>
              <span> / </span>
              <Link to="/destinations">Destinations</Link>
              <span> / </span>
              <span>Sousse</span>
            </div>
            <h1>Sousse</h1>
            <p className="hero-subtitle">Perle du Sahel Tunisien</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">140km</span>
                <span className="stat-label">de Tunis</span>
              </div>
              <div className="stat">
                <span className="stat-number">1200</span>
                <span className="stat-label">ans d'histoire</span>
              </div>
              <div className="stat">
                <span className="stat-number">20km</span>
                <span className="stat-label">de plages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="sousse-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Perle du Sahel Tunisien</h2>
              <p>
                Sousse, troisième ville de Tunisie, est une destination qui allie parfaitement 
                patrimoine historique et tourisme balnéaire moderne. Surnommée "la perle du Sahel", 
                elle séduit par sa médina classée UNESCO, ses plages dorées et sa vie nocturne animée.
              </p>
              <p>
                De son ribat millénaire à ses complexes hôteliers ultramodernes, en passant 
                par sa corniche animée et la luxueuse marina de Port El Kantaoui, Sousse 
                offre une expérience complète entre culture, détente et divertissement. 
                C'est la destination idéale pour découvrir l'art de vivre tunisien.
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
            <p>Découvrez les trésors historiques et balnéaires de Sousse</p>
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
          <h2>Préparez votre séjour</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚄</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>140 km de Tunis (1h30 de route)</li>
                <li>Aéroport Monastir à 20 km</li>
                <li>Train direct depuis Tunis</li>
                <li>Nombreuses liaisons bus</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌞</div>
              <h3>Meilleure période</h3>
              <ul>
                <li>Mai-octobre : saison balnéaire</li>
                <li>Avril et novembre : temps idéal</li>
                <li>Hiver : doux, parfait pour visites</li>
                <li>300 jours de soleil par an</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3>Activités</h3>
              <ul>
                <li>Farniente sur les plages</li>
                <li>Sports nautiques variés</li>
                <li>Golf à Port El Kantaoui</li>
                <li>Vie nocturne animée</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Billets et tarifs</h3>
              <ul>
                <li>Médina : Accès libre</li>
                <li>Ribat : Entrée gratuite</li>
                <li>Musées : 5-8 TND</li>
                <li>Plages : Accès libre</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Découvrez la perle du Sahel</h2>
          <p>Vivez l'expérience unique de Sousse entre mer et histoire</p>
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

export default SoussePage;
