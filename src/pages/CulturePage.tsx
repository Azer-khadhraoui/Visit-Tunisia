import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CulturePage.css';

// Import des images
import medinatunis from '../assets/medinatunis.jpg';
import medinakairouan from '../assets/medinakairouan.jpg';
import medinasousse from '../assets/medinasousse.jpg';
import carthage from '../assets/carthage.jpg';
import okba2 from '../assets/okba 2.jpg';
import museebardotunis from '../assets/museebardotunis.jpg';
import medinahammamet from '../assets/medinahammamet.jpg';
import sidisahbi from '../assets/sidisahbi.jpg';

const CulturePage: React.FC = () => {
  const navigate = useNavigate();

  const culturalSites = [
    {
      id: 1,
      name: 'Médina de Tunis',
      location: 'Tunis',
      image: medinatunis,
      description: 'Site du patrimoine mondial de l\'UNESCO, la médina de Tunis est un labyrinthe fascinant de ruelles étroites, de souks colorés et d\'architecture islamique exceptionnelle.',
      highlights: ['Mosquée Zitouna', 'Souks traditionnels', 'Palais Dar Lasram', 'Architecture andalouse'],
      unesco: true,
      period: 'VIIe-XVIe siècles'
    },
    {
      id: 2,
      name: 'Grande Mosquée de Kairouan',
      location: 'Kairouan',
      image: okba2,
      description: 'Première mosquée construite au Maghreb et quatrième lieu saint de l\'Islam, la Grande Mosquée de Kairouan est un chef-d\'œuvre architectural.',
      highlights: ['Minaret du IXe siècle', 'Salle de prière', 'Cour à portiques', 'Mihrab historique'],
      unesco: true,
      period: 'VIIe siècle'
    },
    {
      id: 3,
      name: 'Médina de Sousse',
      location: 'Sousse',
      image: medinasousse,
      description: 'Exemple remarquable d\'architecture militaire arabe, avec son ribat et ses fortifications parfaitement conservées.',
      highlights: ['Ribat de Sousse', 'Grande Mosquée', 'Remparts', 'Musée archéologique'],
      unesco: true,
      period: 'IXe siècle'
    },
    {
      id: 4,
      name: 'Site de Carthage',
      location: 'Carthage',
      image: carthage,
      description: 'Vestiges de l\'ancienne cité punique et romaine, témoins de plus de 3000 ans d\'histoire méditerranéenne.',
      highlights: ['Thermes d\'Antonin', 'Tophet', 'Théâtre romain', 'Musée national'],
      unesco: true,
      period: 'IXe siècle av. J.-C.'
    },
    {
      id: 5,
      name: 'Mosquée Sidi Sahbi',
      location: 'Kairouan',
      image: sidisahbi,
      description: 'Également appelée mosquée du Barbier, ce mausolée abrite la tombe d\'Abu Zama el Belaoui, compagnon du Prophète et barbier personnel, d\'où son surnom.',
      highlights: ['Mausolée du Barbier', 'Faïences colorées', 'Architecture ottomane', 'Cour à colonnades'],
      unesco: false,
      period: 'VIIe siècle'
    },
    {
      id: 6,
      name: 'Musée du Bardo',
      location: 'Tunis',
      image: museebardotunis,
      description: 'L\'un des plus importants musées du monde pour les mosaïques romaines, installé dans un ancien palais beylical.',
      highlights: ['Mosaïques romaines', 'Palais du Bardo', 'Art islamique', 'Sculptures antiques'],
      unesco: false,
      period: 'Antiquité romaine'
    }
  ];

  const culturalTraditions = [
    {
      title: 'Artisanat Traditionnel',
      description: 'Découvrez les métiers ancestraux tunisiens',
      activities: ['Poterie de Nabeul', 'Tapis de Kairouan', 'Cuivre de Tunis', 'Verre soufflé']
    },
    {
      title: 'Musique et Danse',
      description: 'Traditions musicales séculaires',
      activities: ['Malouf andalou', 'Stambali', 'Mezwed populaire', 'Danse folklorique']
    },
    {
      title: 'Architecture Islamique',
      description: 'Styles architecturaux uniques',
      activities: ['Mosquées historiques', 'Médersas', 'Palais ottomans', 'Maisons traditionnelles']
    }
  ];

  const culturalPackages = [
    {
      title: 'Circuit Patrimoine UNESCO',
      duration: '7 jours',
      price: 'À partir de 890€',
      includes: ['Tunis', 'Kairouan', 'Sousse', 'Carthage'],
      description: 'Tour complet des sites UNESCO tunisiens'
    },
    {
      title: 'Médinas et Artisanat',
      duration: '5 jours',
      price: 'À partir de 650€',
      includes: ['Ateliers artisans', 'Souks', 'Musées', 'Rencontres'],
      description: 'Immersion dans l\'artisanat traditionnel'
    },
    {
      title: 'Sur les Traces de Carthage',
      duration: '4 jours',
      price: 'À partir de 520€',
      includes: ['Sites puniques', 'Musées', 'Sidi Bou Saïd', 'Guide expert'],
      description: 'Découverte de l\'héritage carthaginois'
    }
  ];

  return (
    <div className="culture-page">
      {/* Hero Section */}
      <section className="culture-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Médinas & Patrimoine</h1>
            <p>Plongez dans 3000 ans d'histoire à travers les médinas, mosquées et sites archéologiques de Tunisie</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">8</span>
                <span className="label">Sites UNESCO</span>
              </div>
              <div className="stat">
                <span className="number">14</span>
                <span className="label">Siècles d'histoire</span>
              </div>
              <div className="stat">
                <span className="number">3</span>
                <span className="label">Civilisations</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={okba2} alt="Grande Mosquée de Kairouan" />
          </div>
        </div>
      </section>

      {/* Sites Culturels */}
      <section className="cultural-sites section-padding">
        <div className="container">
          <h2>Sites Culturels Incontournables</h2>
          <div className="sites-grid">
            {culturalSites.map((site, index) => (
              <div key={site.id} className="site-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="site-image">
                  <img src={site.image} alt={site.name} />
                  {site.unesco && <div className="unesco-badge">UNESCO</div>}
                  <div className="period-badge">{site.period}</div>
                </div>
                <div className="site-content">
                  <div className="site-header">
                    <h3>{site.name}</h3>
                    <span className="location">📍 {site.location}</span>
                  </div>
                  <p className="site-description">{site.description}</p>
                  <div className="site-highlights">
                    <h4>Points forts :</h4>
                    <ul>
                      {site.highlights.map((highlight, idx) => (
                        <li key={idx}>✦ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn-explore">
                    En savoir plus
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Culturelles */}
      <section className="cultural-traditions section-padding bg-light">
        <div className="container">
          <h2>Traditions Vivantes</h2>
          <div className="traditions-grid">
            {culturalTraditions.map((tradition, index) => (
              <div key={index} className="tradition-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{tradition.title}</h3>
                <p>{tradition.description}</p>
                <div className="tradition-activities">
                  {tradition.activities.map((activity, idx) => (
                    <span key={idx} className="activity-tag">{activity}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Culturels */}
      <section className="cultural-packages section-padding">
        <div className="container">
          <h2>Circuits Culturels</h2>
          <div className="packages-grid">
            {culturalPackages.map((pkg, index) => (
              <div key={index} className="package-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="package-header">
                  <h3>{pkg.title}</h3>
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <div className="package-price">{pkg.price}</div>
                <p className="package-description">{pkg.description}</p>
                <div className="package-includes">
                  <h4>Inclus :</h4>
                  <ul>
                    {pkg.includes.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary">Réserver maintenant</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils Pratiques */}
      <section className="culture-tips section-padding bg-light">
        <div className="container">
          <h2>Conseils pour Votre Visite</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🕐</div>
              <h3>Meilleur Moment</h3>
              <p>Visitez les médinas tôt le matin ou en fin d'après-midi pour éviter les foules et profiter de la lumière dorée.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">👕</div>
              <h3>Tenue Appropriée</h3>
              <p>Portez des vêtements couvrants et confortables. Chaussures fermées recommandées pour les sites archéologiques.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📸</div>
              <h3>Photographie</h3>
              <p>Respectez les interdictions de photos dans certains lieux sacrés. Demandez toujours la permission pour photographier les habitants.</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🎫</div>
              <h3>Billets Groupés</h3>
              <p>Optez pour les pass multi-sites pour économiser sur les entrées des musées et sites archéologiques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="culture-cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à Explorer le Patrimoine Tunisien ?</h2>
            <p>Laissez-vous guider à travers les merveilles architecturales et historiques de la Tunisie</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Planifier mon circuit</button>
              <button className="btn btn-secondary" onClick={() => navigate('/experiences')}>
                Autres expériences
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CulturePage;
