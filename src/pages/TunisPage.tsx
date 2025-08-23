import React from 'react';
import { Link } from 'react-router-dom';
import './TunisPage.css';
// @ts-ignore
import heroImage from '../assets/tunis.webp';
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
import goulettaImage from '../assets/lagoulettetunis.jpg';

const TunisPage: React.FC = () => {
  const attractions = [
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
  ];

  return (
    <div className="tunis-page">
      {/* Hero Section */}
      <section className="tunis-hero">
        <div className="hero-image-container">
          <img src={heroImage} alt="Tunis - Capitale de la Tunisie" className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-content">
              <nav className="breadcrumb">
                <Link to="/destinations">Destinations</Link>
                <span className="separator">›</span>
                <span>Tunis</span>
              </nav>
              <h1>Tunis & Carthage</h1>
              <p>Découvrez la capitale tunisienne et les vestiges de l'antique Carthage, entre histoire millénaire et modernité méditerranéenne</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">2000+</span>
                  <span className="stat-label">ans d'histoire</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8</span>
                  <span className="stat-label">sites majeurs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">sites UNESCO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <div className="section-header">
            <h2>Sites Incontournables</h2>
            <p>De la médina historique aux vestiges antiques de Carthage</p>
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
              <h3>Se déplacer</h3>
              <ul>
                <li>Métro léger (TGM) vers Sidi Bou Saïd</li>
                <li>Taxi ou louage pour Carthage</li>
                <li>Bus urbains dans Tunis</li>
                <li>Marche dans la médina</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Visites</h3>
              <ul>
                <li>Médina : gratuite, guide recommandé</li>
                <li>Musée du Bardo : 11 DT</li>
                <li>Site de Carthage : 8 DT</li>
                <li>Pass sites multiples disponible</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🛍️</div>
              <h3>Shopping</h3>
              <ul>
                <li>Souks de la médina</li>
                <li>Avenue Habib Bourguiba</li>
                <li>Tunisia Mall</li>
                <li>Artisanat de Sidi Bou Saïd</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🍽️</div>
              <h3>Gastronomie</h3>
              <ul>
                <li>Restaurants de la médina</li>
                <li>Cafés de Sidi Bou Saïd</li>
                <li>Spécialités : brik, couscous</li>
                <li>Pâtisseries orientales</li>
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
              <h3>Hôtels de luxe</h3>
              <p>Hôtels 5 étoiles dans le centre-ville et à Gammarth avec vue sur mer</p>
              <ul>
                <li>Four Seasons Tunis</li>
                <li>Villa Didon Sidi Bou Saïd</li>
                <li>The Residence Tunis</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Maisons d'hôtes</h3>
              <p>Riads authentiques dans la médina et demeures traditionnelles</p>
              <ul>
                <li>Dar Ben Gacem</li>
                <li>Villa Bleue Sidi Bou Saïd</li>
                <li>Maisons d'hôtes médina</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Hôtels modernes</h3>
              <p>Établissements confortables avec bon rapport qualité-prix</p>
              <ul>
                <li>Hôtels centre-ville</li>
                <li>Résidences Gammarth</li>
                <li>Hôtels d'affaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Explorez la capitale historique</h2>
            <p>Découvrez Tunis et Carthage avec nos guides experts locaux</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Réserver une visite</a>
              <Link to="/destinations" className="btn btn-secondary">Autres destinations</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TunisPage;
