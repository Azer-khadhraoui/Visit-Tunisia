import React from 'react';
import './BeachesPage.css';

// Import des images pour plages et côtes
import hammametPlage from '../assets/hammametplage.webp';
import djerbaPlage from '../assets/djerbaplage.avif';
import coucouBeach from '../assets/coucoubeachbizerte.webp';
import plagetabarka from '../assets/plagetabarka.webp';
import plagemahdia from '../assets/plagemahdia.jpg';
import cornichesousse from '../assets/cornichesousse.jpg';
import marinahammamet from '../assets/marina hammamet.jpg';
import portkantaouisousse from '../assets/portkantaouisousse.jpg';

const BeachesPage: React.FC = () => {
  const beachDestinations = [
    {
      id: 'hammamet-beaches',
      title: 'Plages de Hammamet',
      description: 'Sable doré et eaux turquoise de la côte Est. Hammamet offre des plages magnifiques avec une infrastructure touristique développée.',
      image: hammametPlage,
      activities: ['Baignade', 'Sports nautiques', 'Détente', 'Thalassothérapie'],
      location: 'Hammamet',
      highlights: [
        'Plage de Hammamet Sud - 14 km de sable fin',
        'Marina Yasmine - port de plaisance moderne', 
        'Centres de thalassothérapie réputés',
        'Médina historique à proximité'
      ]
    },
    {
      id: 'djerba-beaches', 
      title: 'Côtes de Djerba',
      description: 'L\'île aux mille palmiers et ses plages paradisiaques. Djerba combine tradition berbère et plaisirs balnéaires.',
      image: djerbaPlage,
      activities: ['Plongée', 'Kitesurf', 'Pêche', 'Excursions'],
      location: 'Djerba',
      highlights: [
        'Plage de Sidi Mahres - 20 km de côte',
        'Lagune rose de Djerba',
        'Villages de pêcheurs authentiques',
        'Parc Djerba Explore'
      ]
    },
    {
      id: 'bizerte-beaches',
      title: 'Plages de Bizerte',
      description: 'Côte sauvage et authentique du Nord. Bizerte offre une nature préservée et des paysages spectaculaires.',
      image: coucouBeach,
      activities: ['Randonnée côtière', 'Observation des oiseaux', 'Photographie', 'Détente'],
      location: 'Bizerte',
      highlights: [
        'Plage de Raf Raf - côte sauvage',
        'Cap Blanc - point le plus au nord',
        'Lac de Bizerte - réserve naturelle',
        'Vieux port et kasbah historique'
      ]
    },
    {
      id: 'tabarka-beaches',
      title: 'Côte de Tabarka',
      description: 'Falaises de corail et eaux cristallines. Tabarka est réputée pour ses fonds marins exceptionnels.',
      image: plagetabarka,
      activities: ['Plongée sous-marine', 'Pêche au corail', 'Escalade', 'Festival de jazz'],
      location: 'Tabarka',
      highlights: [
        'Les Aiguilles - formations rocheuses',
        'Récifs de corail rouge',
        'Fort génois du 16ème siècle',
        'Festival international de jazz'
      ]
    },
    {
      id: 'mahdia-beaches',
      title: 'Littoral de Mahdia',
      description: 'Plages historiques et port de pêche authentique. Mahdia combine patrimoine fatimide et plaisirs balnéaires.',
      image: plagemahdia,
      activities: ['Visite du port', 'Dégustation de poissons', 'Histoire', 'Farniente'],
      location: 'Mahdia',
      highlights: [
        'Grande plage de Mahdia - 7 km',
        'Port de pêche traditionnel',
        'Skifa el Kahla - porte fatimide',
        'Marché aux poissons quotidien'
      ]
    },
    {
      id: 'sousse-corniche',
      title: 'Corniche de Sousse',
      description: 'Promenade en bord de mer et vie nocturne. Sousse offre un parfait équilibre entre culture et divertissement.',
      image: cornichesousse,
      activities: ['Promenade', 'Restaurants', 'Vie nocturne', 'Shopping'],
      location: 'Sousse',
      highlights: [
        'Corniche de 6 km en bord de mer',
        'Port El Kantaoui - marina de luxe',
        'Médina UNESCO',
        'Centres commerciaux modernes'
      ]
    }
  ];

  return (
    <div className="beaches-page">
      
      {/* Hero Section */}
      <section className="beaches-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>🏖️ Plages & Côtes de Tunisie</h1>
            <p>Découvrez 1 300 km de côtes méditerranéennes aux eaux turquoise</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">1300</span>
                <span className="label">km de côtes</span>
              </div>
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">plages</span>
              </div>
              <div className="stat">
                <span className="number">300</span>
                <span className="label">jours de soleil</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Destinations Section */}
      <section className="beaches-destinations section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nos Destinations Côtières</h2>
            <p>Chaque région côtière de Tunisie a son caractère unique et ses charmes particuliers</p>
          </div>

          <div className="beaches-grid">
            {beachDestinations.map((beach, index) => (
              <div 
                key={beach.id}
                className="beach-destination-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="beach-image">
                  <img src={beach.image} alt={beach.title} />
                  <div className="beach-overlay">
                    <span className="location-tag">{beach.location}</span>
                  </div>
                </div>
                
                <div className="beach-content">
                  <h3>{beach.title}</h3>
                  <p>{beach.description}</p>
                  
                  <div className="beach-activities">
                    <h4>Activités disponibles</h4>
                    <div className="activities-list">
                      {beach.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="beach-highlights">
                    <h4>Points forts</h4>
                    <ul>
                      {beach.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="beach-tips">
        <div className="container">
          <div className="tips-content">
            <div className="tips-header">
              <h2>Conseils pour vos vacances balnéaires</h2>
              <p>Profitez au maximum de votre séjour sur les côtes tunisiennes</p>
            </div>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">☀️</div>
                <h4>Meilleure période</h4>
                <p>Mai à octobre pour la baignade, mars à novembre pour les activités côtières</p>
                <div className="tip-detail">
                  <span className="temperature">25-30°C</span>
                  <span className="label">Température de l'eau</span>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🏊‍♀️</div>
                <h4>Activités nautiques</h4>
                <p>Plongée, kitesurf, jet-ski disponibles dans la plupart des stations balnéaires</p>
                <div className="tip-detail">
                  <span className="highlight">Centres certifiés</span>
                  <span className="label">Équipements professionnels</span>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🍤</div>
                <h4>Spécialités locales</h4>
                <p>Dégustez les poissons grillés et fruits de mer frais dans les restaurants côtiers</p>
                <div className="tip-detail">
                  <span className="highlight">Pêche du jour</span>
                  <span className="label">Fraîcheur garantie</span>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🏨</div>
                <h4>Hébergement</h4>
                <p>Hotels de luxe, maisons d'hôtes et complexes tout inclus selon vos préférences</p>
                <div className="tip-detail">
                  <span className="highlight">5★ à 3★</span>
                  <span className="label">Tous budgets</span>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🚗</div>
                <h4>Transport</h4>
                <p>Location de voiture recommandée pour explorer les différentes plages à votre rythme</p>
                <div className="tip-detail">
                  <span className="highlight">Routes côtières</span>
                  <span className="label">Paysages magnifiques</span>
                </div>
              </div>
              <div className="tip-card">
                <div className="tip-icon">📱</div>
                <h4>Apps utiles</h4>
                <p>Météo marine, guide des plages et réservations en ligne pour une expérience optimale</p>
                <div className="tip-detail">
                  <span className="highlight">Infos temps réel</span>
                  <span className="label">Services digitaux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BeachesPage;
