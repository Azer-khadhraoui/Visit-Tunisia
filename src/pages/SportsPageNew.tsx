import React from 'react';
import './SportsPage.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import des images pour sports et loisirs
import kitesurfImage from '../assets/Kitesurf.jpg';
import plongeeSousMarine from '../assets/Plongée sous-marine.jpg';
import terrainGolf from '../assets/Terrain de golf.jpeg';
import randonnee from '../assets/Randonnée.jpg';
import marinaHammamet from '../assets/marina hammamet.jpg';
import portkantaouiSousse from '../assets/portkantaouisousse.jpg';

const SportsPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Sports & Loisirs",
      heroSubtitle: "Terrain de jeu exceptionnel pour tous les sports, du golf aux sports nautiques en passant par l'aventure désertique",
      heroStats: [
        { number: "10", label: "parcours de golf" },
        { number: "1300", label: "km de côtes" },
        { number: "50+", label: "activités sportives" }
      ],
      experiencesTitle: "Activités Sportives Exceptionnelles",
      experiencesSubtitle: "De la mer aux montagnes, du golf au désert, vivez votre passion",
      seasonLabel: "Saison:",
      levelLabel: "Niveau:",
      activitiesLabel: "Activités proposées",
      sportsExperiences: [
        {
          id: 'kitesurf',
          title: 'Kitesurf & Sports de Glisse',
          description: 'Profitez des vents réguliers de la Méditerranée pour pratiquer le kitesurf, windsurf et paddle dans les meilleurs spots tunisiens.',
          image: kitesurfImage,
          activities: ['Kitesurf', 'Windsurf', 'Paddle', 'Voile légère'],
          location: 'Djerba - El Haouaria',
          season: 'Mars à novembre',
          level: 'Tous niveaux'
        },
        {
          id: 'plongee-sous-marine',
          title: 'Plongée Sous-marine',
          description: 'Explorez les fonds marins exceptionnels de la côte tunisienne, ses épaves historiques et sa faune méditerranéenne.',
          image: plongeeSousMarine,
          activities: ['Plongée exploration', 'Plongée épave', 'Snorkeling', 'Photographie sous-marine'],
          location: 'Tabarka - Mahdia',
          season: 'Avril à octobre',
          level: 'Débutant à expert'
        },
        {
          id: 'golf',
          title: 'Golf face à la Mer',
          description: 'Parcours de golf de championnat avec vue sur la Méditerranée, conçus par les plus grands architectes mondiaux.',
          image: terrainGolf,
          activities: ['Golf 18 trous', 'Académie de golf', 'Tournois', 'Golf nocturne'],
          location: 'Hammamet - Monastir',
          season: 'Toute l\'année',
          level: 'Tous handicaps'
        },
        {
          id: 'randonnee-trekking',
          title: 'Randonnée & Trekking',
          description: 'Découvrez les paysages variés de la Tunisie à pied : montagnes, désert, côtes et oasis.',
          image: randonnee,
          activities: ['Trekking montagne', 'Randonnée côtière', 'Marche nordique', 'Trail running'],
          location: 'Atlas tunisien - Kroumirie',
          season: 'Octobre à mai',
          level: 'Facile à difficile'
        },
        {
          id: 'sports-nautiques-marina',
          title: 'Sports Nautiques en Marina',
          description: 'Activités nautiques haut de gamme dans les marinas modernes avec équipements professionnels.',
          image: marinaHammamet,
          activities: ['Jet-ski', 'Ski nautique', 'Wakeboard', 'Pêche sportive'],
          location: 'Marina Hammamet',
          season: 'Mai à octobre',
          level: 'Initiation à confirmé'
        },
        {
          id: 'port-kantaoui',
          title: 'Port El Kantaoui Sports Center',
          description: 'Centre sportif complet avec activités aquatiques, terrestres et aériennes dans un cadre luxueux.',
          image: portkantaouiSousse,
          activities: ['Sports aquatiques', 'Tennis', 'Équitation', 'Parapente'],
          location: 'Port El Kantaoui',
          season: 'Toute l\'année',
          level: 'Famille et sportifs'
        }
      ],
      categoriesSection: {
        title: "Nos Spécialités Sportives",
        subtitle: "La Tunisie, destination privilégiée pour tous les sports",
        categories: [
          {
            icon: '🌊',
            title: 'Sports Nautiques',
            description: '1300 km de côtes offrent des conditions idéales pour tous les sports aquatiques.',
            activities: ['Kitesurf', 'Plongée', 'Voile', 'Jet-ski', 'Pêche sportive']
          },
          {
            icon: '⛳',
            title: 'Golf',
            description: '10 parcours de golf de renommée internationale avec vue mer et climat idéal.',
            activities: ['Golf 18 trous', 'Putting green', 'Driving range', 'Académies']
          },
          {
            icon: '🥾',
            title: 'Sports Terrestres',
            description: 'Diversité de terrains pour randonnée, VTT, équitation et sports d\'aventure.',
            activities: ['Randonnée', 'VTT', 'Équitation', 'Escalade', 'Quad']
          },
          {
            icon: '🪂',
            title: 'Sports Aériens',
            description: 'Conditions météo favorables pour parapente, deltaplane et sports aériens.',
            activities: ['Parapente', 'Deltaplane', 'Montgolfière', 'ULM']
          }
        ]
      },
      packagesSection: {
        title: "Stages & Forfaits Sports",
        subtitle: "Programmes d'entraînement et séjours sportifs sur mesure",
        packages: [
          {
            title: 'Stage Kitesurf Intensif',
            description: 'Perfectionnement rapide avec moniteur diplômé',
            duration: '5 jours',
            includes: ['Cours quotidiens', 'Matériel complet', 'Certification IKO'],
            price: 'À partir de 350€',
            level: 'Débutant'
          },
          {
            title: 'Golf & Gastronomie',
            description: 'Combinaison golf et découverte culinaire',
            duration: '4 jours / 3 nuits',
            includes: ['3 parcours différents', 'Dîners gastronomiques', 'Hébergement 4*'],
            price: 'À partir de 580€',
            level: 'Tous niveaux'
          },
          {
            title: 'Plongée Exploration',
            description: 'Découverte des plus beaux sites de plongée',
            duration: '6 jours / 5 nuits',
            includes: ['12 plongées', 'Certification PADI', 'Matériel inclus'],
            price: 'À partir de 450€',
            level: 'Open Water'
          },
          {
            title: 'Aventure Multi-sports',
            description: 'Programme varié pour famille active',
            duration: '7 jours / 6 nuits',
            includes: ['Activités variées', 'Encadrement pro', 'Tout inclus'],
            price: 'À partir de 690€',
            level: 'Famille'
          }
        ]
      },
      eventsSection: {
        title: "Événements Sportifs",
        subtitle: "Participez aux compétitions et événements sportifs majeurs",
        events: [
          {
            title: 'Tournoi de Golf International',
            date: 'Mars - Avril',
            location: 'Hammamet & Monastir',
            description: 'Compétition annuelle réunissant golfeurs du monde entier'
          },
          {
            title: 'Championnat de Kitesurf',
            date: 'Septembre',
            location: 'Djerba',
            description: 'Compétition internationale de kitesurf freestyle et course'
          },
          {
            title: 'Marathon International',
            date: 'Février',
            location: 'Carthage - Sidi Bou Saïd',
            description: 'Course sur site historique avec vue mer'
          },
          {
            title: 'Rallye des Oasis',
            date: 'Novembre',
            location: 'Sud tunisien',
            description: 'Aventure 4x4 et quad dans le désert'
          }
        ]
      }
    },
    en: {
      heroTitle: "Sports & Leisure",
      heroSubtitle: "Exceptional playground for all sports, from golf to water sports to desert adventure",
      heroStats: [
        { number: "10", label: "golf courses" },
        { number: "1300", label: "km of coastline" },
        { number: "50+", label: "sports activities" }
      ],
      experiencesTitle: "Exceptional Sports Activities",
      experiencesSubtitle: "From sea to mountains, from golf to desert, live your passion",
      seasonLabel: "Season:",
      levelLabel: "Level:",
      activitiesLabel: "Available activities",
      sportsExperiences: [
        {
          id: 'kitesurf',
          title: 'Kitesurf & Water Sports',
          description: 'Enjoy the regular Mediterranean winds to practice kitesurf, windsurf and paddle in the best Tunisian spots.',
          image: kitesurfImage,
          activities: ['Kitesurf', 'Windsurf', 'Paddle', 'Light sailing'],
          location: 'Djerba - El Haouaria',
          season: 'March to November',
          level: 'All levels'
        },
        {
          id: 'plongee-sous-marine',
          title: 'Scuba Diving',
          description: 'Explore the exceptional seabed of the Tunisian coast, its historical wrecks and Mediterranean fauna.',
          image: plongeeSousMarine,
          activities: ['Exploration diving', 'Wreck diving', 'Snorkeling', 'Underwater photography'],
          location: 'Tabarka - Mahdia',
          season: 'April to October',
          level: 'Beginner to expert'
        },
        {
          id: 'golf',
          title: 'Golf facing the Sea',
          description: 'Championship golf courses with Mediterranean views, designed by the world\'s greatest architects.',
          image: terrainGolf,
          activities: ['18-hole golf', 'Golf academy', 'Tournaments', 'Night golf'],
          location: 'Hammamet - Monastir',
          season: 'Year-round',
          level: 'All handicaps'
        },
        {
          id: 'randonnee-trekking',
          title: 'Hiking & Trekking',
          description: 'Discover Tunisia\'s varied landscapes on foot: mountains, desert, coasts and oases.',
          image: randonnee,
          activities: ['Mountain trekking', 'Coastal hiking', 'Nordic walking', 'Trail running'],
          location: 'Tunisian Atlas - Kroumirie',
          season: 'October to May',
          level: 'Easy to difficult'
        },
        {
          id: 'sports-nautiques-marina',
          title: 'Marina Water Sports',
          description: 'High-end water activities in modern marinas with professional equipment.',
          image: marinaHammamet,
          activities: ['Jet-ski', 'Water skiing', 'Wakeboard', 'Sport fishing'],
          location: 'Marina Hammamet',
          season: 'May to October',
          level: 'Beginner to advanced'
        },
        {
          id: 'port-kantaoui',
          title: 'Port El Kantaoui Sports Center',
          description: 'Complete sports center with aquatic, land and aerial activities in a luxurious setting.',
          image: portkantaouiSousse,
          activities: ['Water sports', 'Tennis', 'Horse riding', 'Paragliding'],
          location: 'Port El Kantaoui',
          season: 'Year-round',
          level: 'Family and athletes'
        }
      ],
      categoriesSection: {
        title: "Our Sports Specialties",
        subtitle: "Tunisia, preferred destination for all sports",
        categories: [
          {
            icon: '🌊',
            title: 'Water Sports',
            description: '1300 km of coastline offer ideal conditions for all water sports.',
            activities: ['Kitesurf', 'Diving', 'Sailing', 'Jet-ski', 'Sport fishing']
          },
          {
            icon: '⛳',
            title: 'Golf',
            description: '10 internationally renowned golf courses with sea views and ideal climate.',
            activities: ['18-hole golf', 'Putting green', 'Driving range', 'Academies']
          },
          {
            icon: '🥾',
            title: 'Land Sports',
            description: 'Diverse terrain for hiking, mountain biking, horse riding and adventure sports.',
            activities: ['Hiking', 'Mountain biking', 'Horse riding', 'Climbing', 'Quad']
          },
          {
            icon: '🪂',
            title: 'Air Sports',
            description: 'Favorable weather conditions for paragliding, hang gliding and air sports.',
            activities: ['Paragliding', 'Hang gliding', 'Hot air balloon', 'Ultralight']
          }
        ]
      },
      packagesSection: {
        title: "Sports Courses & Packages",
        subtitle: "Training programs and tailor-made sports stays",
        packages: [
          {
            title: 'Intensive Kitesurf Course',
            description: 'Rapid improvement with certified instructor',
            duration: '5 days',
            includes: ['Daily lessons', 'Complete equipment', 'IKO certification'],
            price: 'From 350€',
            level: 'Beginner'
          },
          {
            title: 'Golf & Gastronomy',
            description: 'Combination of golf and culinary discovery',
            duration: '4 days / 3 nights',
            includes: ['3 different courses', 'Gourmet dinners', '4* accommodation'],
            price: 'From 580€',
            level: 'All levels'
          },
          {
            title: 'Diving Exploration',
            description: 'Discovery of the most beautiful diving sites',
            duration: '6 days / 5 nights',
            includes: ['12 dives', 'PADI certification', 'Equipment included'],
            price: 'From 450€',
            level: 'Open Water'
          },
          {
            title: 'Multi-sports Adventure',
            description: 'Varied program for active family',
            duration: '7 days / 6 nights',
            includes: ['Varied activities', 'Professional supervision', 'All inclusive'],
            price: 'From 690€',
            level: 'Family'
          }
        ]
      },
      eventsSection: {
        title: "Sports Events",
        subtitle: "Participate in major sports competitions and events",
        events: [
          {
            title: 'International Golf Tournament',
            date: 'March - April',
            location: 'Hammamet & Monastir',
            description: 'Annual competition bringing together golfers from around the world'
          },
          {
            title: 'Kitesurf Championship',
            date: 'September',
            location: 'Djerba',
            description: 'International kitesurf freestyle and racing competition'
          },
          {
            title: 'International Marathon',
            date: 'February',
            location: 'Carthage - Sidi Bou Said',
            description: 'Race on historical site with sea view'
          },
          {
            title: 'Oases Rally',
            date: 'November',
            location: 'Southern Tunisia',
            description: '4x4 and quad adventure in the desert'
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="sports-page">
      
      {/* Hero Section */}
      <section className="sports-hero">
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
            <img src={terrainGolf} alt="Parcours de golf en Tunisie" />
          </div>
        </div>
      </section>

      {/* Sports Experiences */}
      <section className="sports-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.experiencesTitle}</h2>
            <p>{t.experiencesSubtitle}</p>
          </div>

          <div className="sports-grid">
            {t.sportsExperiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="sport-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="sport-image">
                  <img src={experience.image} alt={experience.title} />
                  <div className="sport-overlay">
                    <span className="location-tag">{experience.location}</span>
                  </div>
                </div>
                
                <div className="sport-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  
                  <div className="sport-details">
                    <div className="detail-row">
                      <span className="detail-label">{t.seasonLabel}</span>
                      <span className="detail-value">{experience.season}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">{t.levelLabel}</span>
                      <span className="detail-value">{experience.level}</span>
                    </div>
                  </div>

                  <div className="sport-activities">
                    <h4>{t.activitiesLabel}</h4>
                    <div className="activities-list">
                      {experience.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="sports-categories">
        <div className="container">
          <div className="categories-content">
            <h2>{t.categoriesSection.title}</h2>
            <p>{t.categoriesSection.subtitle}</p>
            
            <div className="categories-grid">
              {t.categoriesSection.categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                  <ul className="category-activities">
                    {category.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports Packages */}
      <section className="sports-packages section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.packagesSection.title}</h2>
            <p>{t.packagesSection.subtitle}</p>
          </div>

          <div className="packages-grid">
            {t.packagesSection.packages.map((pack, index) => (
              <div key={index} className="package-card">
                <div className="package-level">{pack.level}</div>
                <h4>{pack.title}</h4>
                <p>{pack.description}</p>
                <div className="package-duration">{pack.duration}</div>
                <ul className="package-includes">
                  {pack.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="package-price">{pack.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Events */}
      <section className="sports-events">
        <div className="container">
          <div className="events-content">
            <h2>{t.eventsSection.title}</h2>
            <p>{t.eventsSection.subtitle}</p>
            
            <div className="events-grid">
              {t.eventsSection.events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-date">{event.date}</div>
                  <h4>{event.title}</h4>
                  <div className="event-location">{event.location}</div>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPage;
