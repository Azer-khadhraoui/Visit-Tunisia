import React from 'react';
import { Link } from 'react-router-dom';
import './BizertePage.css';
// @ts-ignore
import heroImage from '../assets/vieuportbizerte.webp';
// @ts-ignore
import vieuxPortImage from '../assets/vieuportbizerte.webp';
// @ts-ignore
import forteEspagneImage from '../assets/bridgebizerte.jpg';
// @ts-ignore
import lacImage from '../assets/coucoubeachbizerte.webp';
// @ts-ignore
import corniImage from '../assets/bizertemedina.jpg';

const BizertePage: React.FC = () => {
  const attractions = [
    {
      name: "Vieux Port de Bizerte",
      description: "Cœur historique de la ville, le vieux port de Bizerte séduit par son authenticité. Bordé de maisons traditionnelles et de petits cafés, c'est le lieu idéal pour observer les pêcheurs rentrer avec leur prise quotidienne.",
      image: vieuxPortImage,
      highlights: ["Bateaux de pêche traditionnels", "Architecture andalouse", "Cafés du port", "Marché aux poissons"]
    },
    {
      name: "Pont Mobile de Bizerte",
      description: "Emblème de la ville, ce pont historique relie la vieille ville au quartier moderne. Monument technique remarquable, il s'ouvre pour laisser passer les bateaux entre le lac et la mer.",
      image: forteEspagneImage,
      highlights: ["Monument historique", "Ingénierie unique", "Vue panoramique", "Liaison ville-port"]
    },
    {
      name: "Plage de Coucou",
      description: "Magnifique plage de sable fin située près du centre-ville, la plage de Coucou offre des eaux cristallines et une vue imprenable sur la côte méditerranéenne de Bizerte.",
      image: lacImage,
      highlights: ["Sable fin doré", "Eaux cristallines", "Proximité centre-ville", "Activités nautiques"]
    },
    {
      name: "Médina de Bizerte",
      description: "Centre historique authentique de Bizerte, la médina préserve l'architecture traditionnelle tunisienne avec ses ruelles étroites, ses souks colorés et ses monuments anciens.",
      image: corniImage,
      highlights: ["Architecture traditionnelle", "Souks authentiques", "Monuments historiques", "Artisanat local"]
    }
  ];

  return (
    <div className="bizerte-page">
      {/* Hero Section */}
      <section className="bizerte-hero">
        <div className="hero-background">
          <img src={heroImage} alt="Bizerte - Perle du Nord" className="hero-bg-img" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <nav className="breadcrumb">
            <Link to="/destinations">Destinations</Link>
            <span className="separator">›</span>
            <span>Bizerte</span>
          </nav>
          <h1>Bizerte</h1>
          <p>Découvrez la perle du nord tunisien, entre lac paisible et Méditerranée azur, où l'histoire maritime se mêle à la beauté naturelle</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2500+</span>
              <span className="stat-label">ans d'histoire</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">pont mobile historique</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
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
            <p>Entre patrimoine maritime et beautés naturelles</p>
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
                <li>65 km de Tunis (1h en voiture)</li>
                <li>Liaison ferroviaire depuis Tunis</li>
                <li>Bus réguliers SNTRI</li>
                <li>Aéroport de Tunis-Carthage</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>Visites</h3>
              <ul>
                <li>Fort d'Espagne : 5 DT</li>
                <li>Vieux port : accès libre</li>
                <li>Tour du lac : gratuit</li>
                <li>Musée naval : 3 DT</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🏖️</div>
              <h3>Activités</h3>
              <ul>
                <li>Baignade et bronzage</li>
                <li>Sports nautiques</li>
                <li>Pêche en mer</li>
                <li>Randonnée autour du lac</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🍽️</div>
              <h3>Gastronomie</h3>
              <ul>
                <li>Restaurants du vieux port</li>
                <li>Spécialités : poissons grillés</li>
                <li>Couscous aux fruits de mer</li>
                <li>Cafés traditionnels</li>
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
              <h3>Hôtels vue mer</h3>
              <p>Établissements modernes avec vue sur la Méditerranée et accès direct aux plages</p>
              <ul>
                <li>Villa Didon (luxe)</li>
                <li>Hôtels corniche</li>
                <li>Résidences balnéaires</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Maisons d'hôtes</h3>
              <p>Hébergements authentiques dans le centre historique près du vieux port</p>
              <ul>
                <li>Dar Bizerte</li>
                <li>Maisons traditionnelles</li>
                <li>Chambres chez l'habitant</li>
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>Campings</h3>
              <p>Options économiques pour profiter de la nature près du lac et des plages</p>
              <ul>
                <li>Camping lac de Bizerte</li>
                <li>Aires de camping-car</li>
                <li>Bivouac autorisé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Explorez la perle du nord</h2>
            <p>Découvrez Bizerte, entre authenticité maritime et splendeurs naturelles</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Réserver votre séjour</a>
              <Link to="/destinations" className="btn btn-secondary">Autres destinations</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BizertePage;
