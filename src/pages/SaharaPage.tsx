import React from 'react';
import { Link } from 'react-router-dom';
import './SaharaPage.css';
import saharaImage from '../assets/sahara.jpg';
import matmataImage from '../assets/saharamatmata.jpg';
// @ts-ignore
import tozeurImage from '../assets/tozeur sahara.jpg';
import starwarsImage from '../assets/starwarssahara.webp';
import flagImage from '../assets/Flag.png';

const SaharaPage: React.FC = () => {
  const attractions = [
    {
      id: 1,
      name: "Dunes du Grand Erg Oriental",
      description: "Immenses étendues de sable doré, paysages lunaires et silence absolu du désert",
      image: saharaImage,
      highlights: [
        "Dunes pouvant atteindre 200m",
        "Couchers de soleil spectaculaires",
        "Randonnées chamelières",
        "Nuits sous les étoiles"
      ],
      history: "Le Grand Erg Oriental est l'une des formations dunaires les plus impressionnantes du Sahara, façonnée par des millénaires d'érosion éolienne.",
      visitInfo: "Excursions guidées recommandées. Meilleure période : octobre à avril."
    },
    {
      id: 2,
      name: "Matmata et Maisons Troglodytes",
      description: "Villages berbères souterrains, habitat traditionnel creusé dans le sol calcaire",
      image: matmataImage,
      highlights: [
        "Maisons souterraines uniques",
        "Culture berbère authentique",
        "Décors de Star Wars",
        "Musée des traditions"
      ],
      history: "Depuis des siècles, les Berbères de Matmata ont creusé leurs habitations dans le sol pour se protéger des conditions climatiques extrêmes.",
      visitInfo: "Visites guidées des maisons traditionnelles. Possibilité de séjourner chez l'habitant."
    },
    {
      id: 3,
      name: "Tozeur et Palmeraies",
      description: "Oasis verdoyante aux 200 000 palmiers, joyau architectural du sud tunisien",
      image: tozeurImage,
      highlights: [
        "200 000 palmiers dattiers",
        "Architecture en briques vernissées",
        "Marché aux dattes authentique",
        "Sources chaudes naturelles"
      ],
      history: "Tozeur, ancienne étape caravanière, est réputée pour ses dattes Deglet Nour et son architecture unique en briques vernissées jaunes.",
      visitInfo: "Visites en calèche dans les palmeraies. Dégustations de dattes fraîches."
    },
    {
      id: 4,
      name: "Décors de Star Wars",
      description: "Lieux de tournage légendaires de la saga, paysages de la planète Tatooine",
      image: starwarsImage,
      highlights: [
        "Décors originaux conservés",
        "Planète Tatooine",
        "Mos Espa et Mos Eisley",
        "Expérience cinématographique"
      ],
      history: "La Tunisie a servi de décor à plusieurs épisodes de Star Wars, transformant le désert en planète Tatooine avec ses décors iconiques.",
      visitInfo: "Circuits thématiques Star Wars disponibles. Guides spécialisés recommandés."
    }
  ];

  return (
    <div className="sahara-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="sahara-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={saharaImage} alt="Désert du Sahara" className="title-hero-img" />
            <div className="title-overlay">
              <h1>Sahara</h1>
              <p>Le Grand Désert Mystique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="sahara-intro section-padding">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Le Grand Désert Mystique</h2>
              <p>
                Le Sahara tunisien offre une expérience inoubliable dans l'un des déserts 
                les plus mythiques de la planète. Entre dunes dorées, oasis verdoyantes 
                et villages troglodytes, cette région révèle des paysages d'une beauté 
                saisissante et une culture millénaire préservée.
              </p>
              <p>
                Des étendues infinies du Grand Erg Oriental aux palmeraies luxuriantes 
                de Tozeur, en passant par les maisons souterraines de Matmata immortalisées 
                par Star Wars, le Sahara tunisien est une terre d'aventure et de contemplation 
                où le temps semble suspendu.
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
            <p>Explorez les merveilles du plus grand désert du monde</p>
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
          <h2>Préparez votre aventure</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>Comment s'y rendre</h3>
              <ul>
                <li>450 km de Tunis vers Tozeur</li>
                <li>Vol direct Tunis-Tozeur (1h)</li>
                <li>4x4 recommandé pour le désert</li>
                <li>Excursions organisées disponibles</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌡️</div>
              <h3>Climat extrême</h3>
              <ul>
                <li>Jour : 35-45°C (été)</li>
                <li>Nuit : 5-15°C (hiver)</li>
                <li>Octobre-avril : période idéale</li>
                <li>Très faible humidité</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎒</div>
              <h3>Équipement essentiel</h3>
              <ul>
                <li>Protection solaire maximale</li>
                <li>Vêtements couvrants</li>
                <li>Réserves d'eau importantes</li>
                <li>Lunettes et foulard anti-sable</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Tarifs et excursions</h3>
              <ul>
                <li>Safari 1 jour : 80-120 TND</li>
                <li>Bivouac 2j/1n : 200-300 TND</li>
                <li>Circuit Star Wars : 150 TND</li>
                <li>Guide obligatoire dans le désert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <h2>Partez à l'aventure dans le Sahara</h2>
          <p>Vivez une expérience unique dans le plus grand désert du monde</p>
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

export default SaharaPage;
