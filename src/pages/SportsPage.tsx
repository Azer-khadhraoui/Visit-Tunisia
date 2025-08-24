import React from 'react';
import './SportsPage.css';

// Import des images pour sports et loisirs
import kitesurfImage from '../assets/Kitesurf.jpg';
import plongeeSousMarine from '../assets/Plongée sous-marine.jpg';
import terrainGolf from '../assets/Terrain de golf.jpeg';
import randonnee from '../assets/Randonnée.jpg';
import marinaHammamet from '../assets/marina hammamet.jpg';
import portkantaouiSousse from '../assets/portkantaouisousse.jpg';

const SportsPage: React.FC = () => {
  const sportsExperiences = [
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
  ];

  const sportsCategories = [
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
  ];

  const sportsPackages = [
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
  ];

  const sportsEvents = [
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
  ];

  return (
    <div className="sports-page">
      
      {/* Hero Section */}
      <section className="sports-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>⛳ Sports & Loisirs</h1>
            <p>Terrain de jeu exceptionnel pour tous les sports</p>
            <div className="hero-highlights">
              <div className="highlight">
                <span className="number">10</span>
                <span className="label">parcours de golf</span>
              </div>
              <div className="highlight">
                <span className="number">1300</span>
                <span className="label">km de côtes</span>
              </div>
              <div className="highlight">
                <span className="number">50+</span>
                <span className="label">activités sportives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Experiences */}
      <section className="sports-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Activités Sportives Exceptionnelles</h2>
            <p>De la mer aux montagnes, du golf au désert, vivez votre passion</p>
          </div>

          <div className="sports-grid">
            {sportsExperiences.map((experience, index) => (
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
                      <span className="detail-label">Saison:</span>
                      <span className="detail-value">{experience.season}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Niveau:</span>
                      <span className="detail-value">{experience.level}</span>
                    </div>
                  </div>

                  <div className="sport-activities">
                    <h4>Activités proposées</h4>
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
            <h2>Nos Spécialités Sportives</h2>
            <p>La Tunisie, destination privilégiée pour tous les sports</p>
            
            <div className="categories-grid">
              {sportsCategories.map((category, index) => (
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
            <h2>Stages & Forfaits Sports</h2>
            <p>Programmes d'entraînement et séjours sportifs sur mesure</p>
          </div>

          <div className="packages-grid">
            {sportsPackages.map((pack, index) => (
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
                <button className="btn-book-sports">Réserver</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Events */}
      <section className="sports-events">
        <div className="container">
          <div className="events-content">
            <h2>Événements Sportifs</h2>
            <p>Participez aux compétitions et événements sportifs majeurs</p>
            
            <div className="events-grid">
              {sportsEvents.map((event, index) => (
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
