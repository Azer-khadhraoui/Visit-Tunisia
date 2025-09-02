import React from 'react';
import './BeachesPage.css';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Plages & Côtes",
      heroSubtitle: "Découvrez 1 300 km de côtes méditerranéennes aux eaux turquoise et plages paradisiaques",
      heroStats: [
        { number: "1300", label: "km de côtes" },
        { number: "50+", label: "plages" },
        { number: "300", label: "jours de soleil" }
      ],
      destinationsTitle: "Nos Destinations Côtières",
      destinationsSubtitle: "Chaque région côtière de Tunisie a son caractère unique et ses charmes particuliers",
      activitiesLabel: "Activités disponibles",
      highlightsLabel: "Points forts",
      beachDestinations: [
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
      ],
      tipsSection: {
        title: "Conseils pour vos vacances balnéaires",
        subtitle: "Profitez au maximum de votre séjour sur les côtes tunisiennes",
        tips: [
          {
            icon: "☀️",
            title: "Meilleure période",
            description: "Mai à octobre pour la baignade, mars à novembre pour les activités côtières",
            detail: { highlight: "25-30°C", label: "Température de l'eau" }
          },
          {
            icon: "🏊‍♀️",
            title: "Activités nautiques",
            description: "Plongée, kitesurf, jet-ski disponibles dans la plupart des stations balnéaires",
            detail: { highlight: "Centres certifiés", label: "Équipements professionnels" }
          },
          {
            icon: "🍤",
            title: "Spécialités locales",
            description: "Dégustez les poissons grillés et fruits de mer frais dans les restaurants côtiers",
            detail: { highlight: "Pêche du jour", label: "Fraîcheur garantie" }
          },
          {
            icon: "🏨",
            title: "Hébergement",
            description: "Hotels de luxe, maisons d'hôtes et complexes tout inclus selon vos préférences",
            detail: { highlight: "5★ à 3★", label: "Tous budgets" }
          },
          {
            icon: "🚗",
            title: "Transport",
            description: "Location de voiture recommandée pour explorer les différentes plages à votre rythme",
            detail: { highlight: "Routes côtières", label: "Paysages magnifiques" }
          },
          {
            icon: "📱",
            title: "Apps utiles",
            description: "Météo marine, guide des plages et réservations en ligne pour une expérience optimale",
            detail: { highlight: "Infos temps réel", label: "Services digitaux" }
          }
        ]
      }
    },
    en: {
      heroTitle: "Beaches & Coasts",
      heroSubtitle: "Discover 1,300 km of Mediterranean coastline with turquoise waters and paradise beaches",
      heroStats: [
        { number: "1300", label: "km of coastline" },
        { number: "50+", label: "beaches" },
        { number: "300", label: "sunny days" }
      ],
      destinationsTitle: "Our Coastal Destinations",
      destinationsSubtitle: "Each coastal region of Tunisia has its unique character and particular charms",
      activitiesLabel: "Available activities",
      highlightsLabel: "Highlights",
      beachDestinations: [
        {
          id: 'hammamet-beaches',
          title: 'Hammamet Beaches',
          description: 'Golden sand and turquoise waters of the East coast. Hammamet offers magnificent beaches with developed tourist infrastructure.',
          image: hammametPlage,
          activities: ['Swimming', 'Water sports', 'Relaxation', 'Thalassotherapy'],
          location: 'Hammamet',
          highlights: [
            'Hammamet South Beach - 14 km of fine sand',
            'Marina Yasmine - modern marina', 
            'Renowned thalassotherapy centers',
            'Historic medina nearby'
          ]
        },
        {
          id: 'djerba-beaches', 
          title: 'Djerba Coasts',
          description: 'The island of a thousand palm trees and its paradise beaches. Djerba combines Berber tradition and seaside pleasures.',
          image: djerbaPlage,
          activities: ['Diving', 'Kitesurfing', 'Fishing', 'Excursions'],
          location: 'Djerba',
          highlights: [
            'Sidi Mahres Beach - 20 km of coastline',
            'Pink lagoon of Djerba',
            'Authentic fishing villages',
            'Djerba Explore Park'
          ]
        },
        {
          id: 'bizerte-beaches',
          title: 'Bizerte Beaches',
          description: 'Wild and authentic North coast. Bizerte offers preserved nature and spectacular landscapes.',
          image: coucouBeach,
          activities: ['Coastal hiking', 'Bird watching', 'Photography', 'Relaxation'],
          location: 'Bizerte',
          highlights: [
            'Raf Raf Beach - wild coast',
            'Cap Blanc - northernmost point',
            'Bizerte Lake - nature reserve',
            'Old port and historic kasbah'
          ]
        },
        {
          id: 'tabarka-beaches',
          title: 'Tabarka Coast',
          description: 'Coral cliffs and crystal-clear waters. Tabarka is renowned for its exceptional seabeds.',
          image: plagetabarka,
          activities: ['Scuba diving', 'Coral fishing', 'Climbing', 'Jazz festival'],
          location: 'Tabarka',
          highlights: [
            'The Needles - rock formations',
            'Red coral reefs',
            '16th century Genoese fort',
            'International jazz festival'
          ]
        },
        {
          id: 'mahdia-beaches',
          title: 'Mahdia Coastline',
          description: 'Historic beaches and authentic fishing port. Mahdia combines Fatimid heritage and seaside pleasures.',
          image: plagemahdia,
          activities: ['Port visit', 'Fish tasting', 'History', 'Lounging'],
          location: 'Mahdia',
          highlights: [
            'Great beach of Mahdia - 7 km',
            'Traditional fishing port',
            'Skifa el Kahla - Fatimid gate',
            'Daily fish market'
          ]
        },
        {
          id: 'sousse-corniche',
          title: 'Sousse Corniche',
          description: 'Seaside promenade and nightlife. Sousse offers a perfect balance between culture and entertainment.',
          image: cornichesousse,
          activities: ['Strolling', 'Restaurants', 'Nightlife', 'Shopping'],
          location: 'Sousse',
          highlights: [
            '6 km seaside corniche',
            'Port El Kantaoui - luxury marina',
            'UNESCO Medina',
            'Modern shopping centers'
          ]
        }
      ],
      tipsSection: {
        title: "Tips for your beach vacation",
        subtitle: "Make the most of your stay on the Tunisian coasts",
        tips: [
          {
            icon: "☀️",
            title: "Best period",
            description: "May to October for swimming, March to November for coastal activities",
            detail: { highlight: "25-30°C", label: "Water temperature" }
          },
          {
            icon: "🏊‍♀️",
            title: "Water activities",
            description: "Diving, kitesurfing, jet-ski available in most seaside resorts",
            detail: { highlight: "Certified centers", label: "Professional equipment" }
          },
          {
            icon: "🍤",
            title: "Local specialties",
            description: "Taste grilled fish and fresh seafood in coastal restaurants",
            detail: { highlight: "Catch of the day", label: "Freshness guaranteed" }
          },
          {
            icon: "🏨",
            title: "Accommodation",
            description: "Luxury hotels, guesthouses and all-inclusive resorts according to your preferences",
            detail: { highlight: "5★ to 3★", label: "All budgets" }
          },
          {
            icon: "🚗",
            title: "Transportation",
            description: "Car rental recommended to explore different beaches at your own pace",
            detail: { highlight: "Coastal routes", label: "Magnificent landscapes" }
          },
          {
            icon: "📱",
            title: "Useful apps",
            description: "Marine weather, beach guide and online reservations for an optimal experience",
            detail: { highlight: "Real-time info", label: "Digital services" }
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="beaches-page">
      
      {/* Hero Section */}
      <section className="beaches-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSubtitle}</p>
            <div className="hero-stats">
              {t.heroStats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="number">{stat.number}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <img src={hammametPlage} alt="Plage de Hammamet" />
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="beaches-destinations section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.destinationsTitle}</h2>
            <p>{t.destinationsSubtitle}</p>
          </div>

          <div className="beaches-grid">
            {t.beachDestinations.map((beach, index) => (
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
                    <h4>{t.activitiesLabel}</h4>
                    <div className="activities-list">
                      {beach.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="beach-highlights">
                    <h4>{t.highlightsLabel}</h4>
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
              <h2>{t.tipsSection.title}</h2>
              <p>{t.tipsSection.subtitle}</p>
            </div>
            <div className="tips-grid">
              {t.tipsSection.tips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-icon">{tip.icon}</div>
                  <h4>{tip.title}</h4>
                  <p>{tip.description}</p>
                  <div className="tip-detail">
                    <span className="highlight">{tip.detail.highlight}</span>
                    <span className="label">{tip.detail.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BeachesPage;
